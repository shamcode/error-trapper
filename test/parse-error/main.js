import parseError, { initialize } from '../../src/trapper';
import printContext from '../../src/utils/print-context';
import normalizeForStringify from '../../src/normalizers/for-stringify';

initialize( `${window.location.hash}../../lib/esprima-bundle.js` );

window.onload = () => {
    mocha.ui( 'bdd' );
    mocha.reporter( 'html' );
    mocha.setup( {
        asyncOnly: true
    } );

    const expect = chai.expect;

    describe( 'Parse error', () => {
        it( 'TypeError', ( done ) => {
            const foo = { firstName: 'Andy' };
            try {
                const bar = foo.lastName.toString;
            } catch ( e ) {
                parseError( e, ( { code } ) => {
                    expect( code ).to.be.equal(
                        '(function(){return{\'done\':done,\'foo\':foo,\'bar\':bar}})()'
                    );
                    const context = eval( code );
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
                    parseError( e, ( { code } ) => {
                        expect( code ).to.be.equal(
                            '(function(){return{\'bar\':bar,\'foo\':foo}})()'
                        );
                        const context = eval( code );
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
                parseError( e, ( { code } ) => {
                    expect( code ).to.be.equal(
                        '(function(){return{\'done\':done,\'foo\':foo,\'bar\':bar}})()'
                    );
                    const context = normalizeForStringify( eval( code ) );
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

        it( 'Parse column (emulate minimized code)', ( done ) => {
            const foo = { firstName: 'Andy' }; foo.self = foo; try { const bar = foo.lastName.toString; bar(); } catch ( e ) {
                parseError( e, ( { code } ) => {
                    expect( code ).to.be.equal(
                        '(function(){return{\'done\':done,\'foo\':foo,\'bar\':bar}})()'
                    );
                    const context = normalizeForStringify( eval( code ) );
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

    mocha.run();
};