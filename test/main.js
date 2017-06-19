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
                    expect( context.foo ).to.be.equal( foo );
                    done();
                } );
                // throw e;
            }
        } )
    } );

    mocha.run();
};