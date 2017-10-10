import initialize  from '../../';
import WRAP from '../../macros/wrap-function.macro';

const ESPRIMA_BUNDLE_URL = `${window.location.hash}../../lib/esprima-bundle.js`;

const context = {
    callback: () => {}
};

initialize( ESPRIMA_BUNDLE_URL, function() {
    context.callback( ...arguments );
} );

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

    describe( 'WRAP macro', () => {
        it( 'Use macro', ( done ) => {
            WRAP( () => {
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
            const code = WRAP(
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
                           var context = parsedError.success ? ErrorTrapper.normalizeForStringify(eval(parsedError.code)) : {};
                           (function (e, context) {/* process error */})(e, context, ___SCOPE_CLOSURE_VARIABLE___);
                        });
                    }
                }
            }` ) );
            done();
        } );

        it( 'Use macro with Object', function( done ) {
            const obj = {
                baz: WRAP( () => {
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
                    WRAP( () => {
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


        it( 'Check generated code for wrapped function', ( done ) => {
            const code = WRAP(
                ( value ) => { var foo = 42; return foo; },
                ( e, context ) => { /* process error */}
            );

            expect( trimCode( code.toString() ) ).to.be.equal( trimCode( `
            function( value ) {
                var ___SCOPE_CLOSURE_VARIABLE___;
                try {
                    var foo = 42; return foo;
                } catch (e) {
                    try {
                        throw new Error();
                    } catch (localError) {
                        ErrorTrapper.parseError(localError, function (parsedError) {
                           var context = parsedError.success ? ErrorTrapper.normalizeForStringify(eval(parsedError.code)) : {};
                           (function (e, context) {/* process error */})(e, context, ___SCOPE_CLOSURE_VARIABLE___);
                        });
                    }
                }
            }` ) );
            done();
        } );

        it( 'Wrap function', function( done ) {
            const func1 = WRAP( function( value ) {
                return this.settings.baseNumber * value;
            }, ( e, context ) => {
                const keys = Object.keys( context );
                expect( e instanceof TypeError).to.be.true;
                expect( keys.length ).to.be.equal( 1 );
                expect( context.value ).to.be.undefined;
                done();
            } );

            func1();
        } );

        it( 'Check generated code for global failback', function( done ) {
            const code = WRAP( ( value ) => { var foo = 42; return foo; } );

            expect( trimCode( code.toString() ) ).to.be.equal( trimCode( `
            function( value ) {
                var ___SCOPE_CLOSURE_VARIABLE___;
                try {
                    var foo = 42; return foo;
                } catch (e) {
                    try {
                        throw new Error();
                    } catch (localError) {
                        ErrorTrapper.parseError(localError, function (parsedError) {
                           var context = parsedError.success ? ErrorTrapper.normalizeForStringify(eval(parsedError.code)) : {};
                           ErrorTrapper.globalFailback(e, context, ___SCOPE_CLOSURE_VARIABLE___);
                        });
                    }
                }
            }` ) );
            done();
        } );

        it( 'Global failback', function( done ) {
            context.callback = ( e, context ) => {
                const keys = Object.keys( context );
                expect( e instanceof TypeError).to.be.true;
                expect( keys.length ).to.be.equal( 1 );
                expect( context.value ).to.be.undefined;
                done();
            };

            const func1 = WRAP( function( value ) {
                return this.settings.baseNumber * value;
            } );

            func1();
        } );
    } );

    mocha.run();
};