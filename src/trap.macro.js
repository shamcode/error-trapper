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
            var ___SCOPE_HOISING___;
            try 
                ${generate( body ).code}
            catch(e) {
                ErrorTrapper.parseError(e).then(function(code) {
                    var context = ErrorTrapper.normalizeForStringify( eval( code ) );
                    (${generate( callback ).code})(context, ___SCOPE_HOISING___)
                });
                // throw e;
            }
        }
    })()` ).program.body[ 0 ];
}
