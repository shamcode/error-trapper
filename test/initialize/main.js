import initialize from '../../src/trapper';

window.onload = () => {
    mocha.ui( 'bdd' );
    mocha.reporter( 'html' );
    mocha.setup( {
        asyncOnly: true
    } );

    const expect = chai.expect;

    describe( 'Initialize', () => {
        it( 'Prevent override', ( done ) => {
            initialize( `${window.location.hash}../../lib/esprima-bundle.js` );
            const original = window.ErrorTrapper;
            expect( () => window.ErrorTrapper = {} ).to.throw();
            expect( window.ErrorTrapper ).to.be.equal( original );
            done();
        } );

        it( 'Prevent extensions', ( done ) => {
            initialize( `${window.location.hash}../../lib/esprima-bundle.js` );
            expect( () => ErrorTrapper.foo = 'bar' ).to.throw();
            done()
        } );

        it( 'Prevent override methods', ( done ) => {
            initialize( `${window.location.hash}../../lib/esprima-bundle.js` );
            const originalParseError = ErrorTrapper.parseError;
            const originNormalizeForStringify = ErrorTrapper.normalizeForStringify;
            const originalPrintContext = ErrorTrapper.printContext;
            expect( () => ErrorTrapper.parseError = () => {} ).to.throw();
            expect( () => ErrorTrapper.normalizeForStringify = () => {} ).to.throw();
            expect( () => ErrorTrapper.printContext = () => {} ).to.throw();
            expect( ErrorTrapper.parseError ).to.be.equal( originalParseError );
            expect( ErrorTrapper.normalizeForStringify ).to.be.equal( originNormalizeForStringify );
            expect( ErrorTrapper.printContext ).to.be.equal( originalPrintContext );
            done();
        } );
    } );

    mocha.run();
};