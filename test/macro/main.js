import initialize  from '../../';
import ERROR_TRAP from '../../macros/trap.macro';

initialize( `${window.location.hash}../../lib/esprima-bundle.js` );

window.onload = () => {
    mocha.ui( 'bdd' );
    mocha.reporter( 'html' );
    mocha.setup( {
        asyncOnly: true
    } );

    const expect = chai.expect;

    describe( 'Macro', () => {
        it( 'Use ERROR_TRAP macro', ( done ) => {
            ERROR_TRAP( () => {
                const foo = { firstName: 'Andy' };
                const bar = foo.lastName.toString;
            }, ( e, context ) => {
                const keys = Object.keys( context );
                expect( e instanceof TypeError).to.be.true;
                expect( keys.length ).to.be.equal( 2 );
                expect( context.foo.firstName ).to.be.equal( 'Andy' );
                expect( context.bar ).to.be.undefined;
                done();
            } )();
        } );

        it( 'Check generated code', ( done ) => {

            function trimCode( code ) {
                return code.replace( /\s/g, '' )
            }

            const code = ERROR_TRAP(
                () => { var foo = 42; return foo; },
                ( e, context ) => { /* process error */}
            );

            expect( trimCode( code.toString() ) ).to.be.equal( trimCode( `
            function() {
                var ___SCOPE_CLOSURE_VARIABLE___;
                try { 
                    var foo = 42; return foo; 
                } catch (e) {
                    try {
                        throw new Error();
                    } catch (localError) {
                        ErrorTrapper.parseError(localError, function (parsedError) {
                            if (parsedError.success) {
                                var context = ErrorTrapper.normalizeForStringify(eval(parsedError.code));
                                (function (e, context) { /* process error */ })(e, context, ___SCOPE_CLOSURE_VARIABLE___);
                            } else {
                                (function (e, context) { /* process error */ })(e, {});
                            }
                        });
                    }
                }
            }` ) );
            done();
        } );

        it( 'Use macro with Object', function( done ) {
            const obj = {
                baz: ERROR_TRAP( () => {
                    const foo2 = { firstName: 'Andy' };
                    const bar = foo2.lastName.toString;
                }, ( e, context ) => {
                    const keys = Object.keys( context );
                    expect( e instanceof TypeError).to.be.true;
                    expect( keys.length ).to.be.equal( 2 );
                    expect( context.foo2.firstName ).to.be.equal( 'Andy' );
                    expect( context.bar ).to.be.undefined;
                    done();
                } )
            };
            obj.baz();
        } );

        it( 'Wrap class method', function( done ) {
            class MyClass {
                baz() {
                    ERROR_TRAP( () => {
                        const foo3 = { firstName: 'Andy' };
                        const bar = foo3.lastName.toString;
                    }, ( e, context ) => {
                        const keys = Object.keys( context );
                        expect( e instanceof TypeError).to.be.true;
                        expect( keys.length ).to.be.equal( 2 );
                        expect( context.foo3.firstName ).to.be.equal( 'Andy' );
                        expect( context.bar ).to.be.undefined;
                        done();
                    } )();
                }
            }
            const obj = new MyClass;
            obj.baz();
        } );
    } );

    mocha.run();
};