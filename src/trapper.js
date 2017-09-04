// todo: dynamic load esprima
import { parse } from 'esprima';

import extractErrorPlace from './parsers/stack';
import parseScope from './parsers/scope';
import normalizeForStringify from './normalizers/for-stringify';
import printContext from './utils/print-context';

// TODO: use  defineProperty
window.ErrorTrapper = {
    parseError,
    normalizeForStringify,
    printContext
};

export default function parseError( e, callback ) {
    const firstFile = extractErrorPlace( e.stack );
    if ( firstFile === null ) {
        return callback( { success: false, code: null } );
    }
    return firstFile
        .loadFileContent( ( response ) => {
            const ast = parse( response, {
                loc: true,
                comment: true
            } );
            const scopeVariables = parseScope( ast, firstFile );
            const scopeMapping = scopeVariables.map( variable => `'${variable}':${variable}` );
            const scopeContext = `{${scopeMapping.join( ',' )}}`;
            callback( {
                success: true,
                code: `(function(){return${scopeContext}})()`
            } );
        }, () => {
            callback( { success: false, code: null } );
        } )
    ;
}

