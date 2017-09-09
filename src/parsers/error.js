import loadEsprimaBundle from '../loader/esprima-bundle';
import extractErrorPlace from './stack';
import parseScope from './scope';
import { SETTINGS } from '../trapper';

/**
 * Parse error scope
 * @param {Error} e
 * @param {Function} callback
 * @return {*}
 */
export default function parseError( e, callback ) {
    function failback() {
        callback( { success: false, code: null } );
    }

    const firstFile = extractErrorPlace( e.stack );

    if ( firstFile === null ) {
        return failback();
    }

    return firstFile.loadFileContent(
        ( fileContent ) => parseFileContent( fileContent, firstFile, callback, failback ),
        failback
    );
}

/**
 * @param {String} fileContent
 * @param {StackLine} stackLine
 * @param {Function} callback
 * @param {Function} failback
 */
function parseFileContent( fileContent, stackLine, callback, failback ) {
    loadEsprimaBundle(
        SETTINGS.ESPRIMA_BUNDLE_URL,
        ( esprimaBundle ) => {
            const code = parseCode( fileContent, stackLine, esprimaBundle );
            callback( {
                code,
                success: true,
            } );
        },
        failback
    );
}

/**
 * @param {String} code
 * @param {StackLine} stackLine
 * @param {Function} parse Function parse from esprima
 * @param {Function} scopeAnalyze Function analyze from escope
 * @return {string} code for eval
 */
function parseCode( code, stackLine, { parse, scopeAnalyze } ) {
    const ast = parse( code, {
        loc: true,
        comment: true
    } );
    const scopeVariables = parseScope( ast, stackLine, scopeAnalyze );
    const scopeMapping = scopeVariables.map( variable => `'${variable}':${variable}` );
    const scopeContext = `{${scopeMapping.join( ',' )}}`;
    return `(function(){return${scopeContext}})()`
}