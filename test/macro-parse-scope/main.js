import initialize  from '../../';
import PARSE_SCOPE from '../../macros/parse-scope.macro';

initialize( `${window.location.hash}../../lib/esprima-bundle.js` );

function trimCode( code ) {
    return code.replace( /\s/g, '' )
}

window.onload = () => {
    mocha.ui( 'bdd' );
    mocha.reporter( 'html' );
    mocha.setup( {
        asyncOnly: true
    } );

    const expect = chai.expect;

    describe( 'PARSE_SCOPE macro', () => {
        it( 'Use macro', ( done ) => {
            try {
                const foo = { firstName: 'Andy' };
                const bar = foo.lastName.toString;
            } catch (e) {
                PARSE_SCOPE( ( scope ) => {
                    const keys = Object.keys( scope );
                    expect( e instanceof TypeError).to.be.true;
                    expect( keys.length ).to.be.equal( 3 );
                    expect( scope.foo.firstName ).to.be.equal( 'Andy' );
                    expect( scope.bar ).to.be.undefined;
                    done();
                } );
            }
        } );

        it( 'Check generated code', ( done ) => {
            function code() {
                try {
                    /* body */
                } catch (e) {
                    PARSE_SCOPE( ( scope ) => {} );
                }
            }

            expect( trimCode( code.toString() ) ).to.be.equal( trimCode( `
            function code() {
                try {
                        /* body */
                    } catch (e) {
                        var ___SCOPE_CLOSURE_VARIABLE___;
                        try {
                            throw new Error();
                        } catch (localError) {
                            ErrorTrapper.parseError(localError, function (parsedError) {
                                var scope = parsedError.success ? ErrorTrapper.normalizeForStringify(eval(parsedError.code)) : {};
                                (function (scope) {})(scope, ___SCOPE_CLOSURE_VARIABLE___);
                            });
                        }
                    }
            }` ) );
            done();
        } );
    } );

    mocha.run();
};