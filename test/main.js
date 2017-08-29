import { parseError, printContext, normalizeForStringify } from '../src/trapper';
import ERROR_TRAP from '../src/trap.macro';

window.onload = () => {
    mocha.ui( 'bdd' );
    mocha.reporter( 'html' );
    mocha.setup( {
        asyncOnly: true
    } );

    const expect = chai.expect;

    describe( 'Trapper', () => {
        it( 'TypeError', ( done ) => {
            const foo = { firstName: 'Andy' };
            try {
                const bar = foo.lastName.toString;
            } catch ( e ) {

                parseError( e ).then( ( code ) => {
                    const context = eval( code );
                    console.error( e );
                    printContext( context );
                    const keys = Object.keys( context );
                    expect( keys.length ).to.be.equal( 3 );
                    expect( context.foo ).to.be.deep.equal( foo );
                    expect( context.bar ).to.be.undefined;
                    expect( context.done.toString() ).to.be.equal( done.toString() );
                    done();
                } );
                // throw e;
            }
        } );

        it( 'TypeError parent scope', ( done ) => {
            const foo = { firstName: 'Andy' };
            let bar;
            (function() {
                try {
                    bar = foo.lastName.toString;
                } catch ( e ) {

                    parseError( e ).then( ( code ) => {
                        const context = eval( code );
                        console.error( e );
                        printContext( context );
                        const keys = Object.keys( context );
                        expect( keys.length ).to.be.equal( 2 );
                        expect( context.foo ).to.be.deep.equal( foo );
                        expect( context.bar ).to.be.undefined;
                        done();
                    } );
                    // throw e;
                }
            })();
        } );

        it( 'Use normalizeForStringify with circular reference', ( done ) => {
            const foo = { firstName: 'Andy' };
            foo.self = foo;
            try {
                const bar = foo.lastName.toString;
            } catch ( e ) {
                parseError( e ).then( ( code ) => {

                    const context = normalizeForStringify( eval( code ) );
                    console.error( e );
                    printContext( context );
                    const keys = Object.keys( context );
                    expect( keys.length ).to.be.equal( 3 );
                    expect( context.foo ).to.be.deep.equal( {
                        firstName: 'Andy',
                        self: '[Circular ~]'
                    } );
                    expect( context.bar ).to.be.undefined;
                    done();
                } )
            }
        } );
    } );

    describe( 'Macro', () => {
        it( 'Use ERROR_TRAP macro', ( done ) => {
            ERROR_TRAP( () => {
                const foo = { firstName: 'Andy' };
                const bar = foo.lastName.toString;
            }, () => {
                printContext( context );
                const keys = Object.keys( context );
                expect( keys.length ).to.be.equal( 2 );
                expect( context.foo.firstName ).to.be.deep.equal( 'Andy' );
                expect( context.bar ).to.be.undefined;
                done();
            } )();
        } )
    } );

    mocha.run();
};