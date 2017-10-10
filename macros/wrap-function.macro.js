const { createMacro } = require( 'babel-macros' );
const babylon = require( 'babylon' );
const generate = require( 'babel-generator' ).default;
const { SCOPE_CLOSURE_VARIABLE } = require( './constants' );

module.exports = createMacro( wrapFunctionMacro );

function wrapFunctionMacro( { references } ) {
    references.default.forEach( referencePath => {
        asFunction( referencePath.parentPath.get( 'arguments' ) )
    } );
}

function asFunction( argumentsPaths ) {
    const { params, body } = argumentsPaths[ 0 ].node;
    const callback = 2 === argumentsPaths.length ? argumentsPaths[ 1 ].node : null;
    argumentsPaths[ 0 ].parentPath.replaceWith( thingToAST( params, body, callback ) )
}

function thingToAST( params, body, callback ) {
    const paramsCode = params
        .map( param => generate( param ).code )
        .join( ',' );

    let callbackCode;
    if ( callback === null ) {
        callbackCode = 'ErrorTrapper.globalFailback';
    } else {
        callbackCode = `(${generate( callback ).code})`;
    }

    return babylon.parse( `
    (function() {
        return function( ${paramsCode} ) {
            var ${SCOPE_CLOSURE_VARIABLE};
            try 
                ${generate( body ).code}
            catch(e) {
                try {
                    throw new Error();   
                } catch(localError) {
                    ErrorTrapper.parseError(localError, function(parsedError) {
                        var context = parsedError.success ? ErrorTrapper.normalizeForStringify(eval(parsedError.code)): {};
                        ${callbackCode}(e, context, ${SCOPE_CLOSURE_VARIABLE})
                    });
                }
            }
        }
    })()` ).program.body[ 0 ];
}
