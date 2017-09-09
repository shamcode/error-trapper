import initialize from '../../src/trapper';
import ERROR_TRAP from '../../src/macros/trap.macro';

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
                expect( context.foo.firstName ).to.be.deep.equal( 'Andy' );
                expect( context.bar ).to.be.undefined;
                done();
            } )();
        } )
    } );

    mocha.run();
};