import { parseError, printContext } from '../src/trapper';

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
                    expect( context.foo ).to.be.equal( foo );
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
                        expect( context.foo ).to.be.equal( foo );
                        expect( context.bar ).to.be.undefined;
                        done();
                    } );
                    // throw e;
                }
            })();
        } )
    } );

    mocha.run();
};