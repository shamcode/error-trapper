const babylon = require( 'babylon' );
const generate = require( 'babel-generator' ).default;

module.exports = errorTrapMacro;

function errorTrapMacro( { references } ) {
    references.default.forEach( referencePath => {
        asFunction( referencePath.parentPath.get( 'arguments' ) )
    } );
}

function asFunction( argumentsPaths ) {
    const body = argumentsPaths[ 0 ].node.body;
    argumentsPaths[ 0 ].parentPath.replaceWith( thingToAST( body, argumentsPaths[ 1 ].node ) )
}

function thingToAST( body, callback ) {
    return babylon.parse( `
    (function() {
        return function() {
            var ___SCOPE_CLOSURE_VARIABLE___;
            try 
                ${generate( body ).code}
            catch(e) {
                try {
                    throw new Error();   
                } catch(localError) {
                    ErrorTrapper.parseError(localError, function(parsedError) {
                        if (parsedError.success) {
                            var context = ErrorTrapper.normalizeForStringify(eval(parsedError.code));
                            (${generate( callback ).code})(e, context, ___SCOPE_CLOSURE_VARIABLE___)
                        } else {
                            (${generate( callback ).code})(e, {})
                        }
                    });
                }
            }
        }
    })()` ).program.body[ 0 ];
}
