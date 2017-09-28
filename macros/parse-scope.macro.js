const { createMacro } = require( 'babel-macros' );
const babylon = require( 'babylon' );
const generate = require( 'babel-generator' ).default;
const { SCOPE_CLOSURE_VARIABLE } = require( './constants' );

module.exports = createMacro( parseScope );

function parseScope( { references } ) {
    references.default.forEach( referencePath => {
        asFunction( referencePath.parentPath.get( 'arguments' ) )
    } );
}

function asFunction( argumentsPaths ) {
    argumentsPaths[ 0 ].parentPath.replaceWithMultiple( thingToAST( argumentsPaths[ 0 ].node ) )
}

function thingToAST( callback ) {

    return babylon.parse( `
        var ${SCOPE_CLOSURE_VARIABLE};
        try {
            throw new Error();   
        } catch(localError) {
            ErrorTrapper.parseError(localError, function(parsedError) {
                var scope = parsedError.success ? ErrorTrapper.normalizeForStringify(eval(parsedError.code)) : {};
                (${generate( callback ).code})(scope, ${SCOPE_CLOSURE_VARIABLE})
            });
        }
    ` ).program.body;
}
