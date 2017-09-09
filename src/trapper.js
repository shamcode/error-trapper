import esprimaLoader from './loader/esprima-bundle';
import extractErrorPlace from './parsers/stack';
import parseScope from './parsers/scope';
import normalizeForStringify from './normalizers/for-stringify';
import printContext from './utils/print-context';

let ESPRIMA_BUNDLE_URL = '';

export default function parseError( e, callback ) {
    function failback() {
        callback( { success: false, code: null } );
    }

    const firstFile = extractErrorPlace( e.stack );

    if ( firstFile === null ) {
        return failback();
    }

    return firstFile
        .loadFileContent( ( response ) => {
            esprimaLoader( ESPRIMA_BUNDLE_URL, ( { parse, scopeAnalyze } ) => {
                const ast = parse( response, {
                    loc: true,
                    comment: true
                } );
                const scopeVariables = parseScope( ast, firstFile, scopeAnalyze );
                const scopeMapping = scopeVariables.map( variable => `'${variable}':${variable}` );
                const scopeContext = `{${scopeMapping.join( ',' )}}`;
                callback( {
                    success: true,
                    code: `(function(){return${scopeContext}})()`
                } );
            }, failback );
        }, failback )
    ;
}

function ErrorTrapper() {
    Object.defineProperties( this, {
        parseError: {
            value: parseError,
            writable: false,
            enumerable: false,
            configurable: false
        },
        normalizeForStringify: {
            value: normalizeForStringify,
            writable: false,
            enumerable: false,
            configurable: false
        },
        printContext: {
            value: printContext,
            writable: false,
            enumerable: false,
            configurable: false
        }
    } );
    Object.preventExtensions( this );
}

export function initialize( esprimaBundleUrl ) {
    ESPRIMA_BUNDLE_URL = esprimaBundleUrl;
    if ( !window.ErrorTrapper ) {
        Object.defineProperty( window, 'ErrorTrapper', {
            value: new ErrorTrapper,
            writable: false,
            enumerable: false,
            configurable: false
        } );
    }
}
