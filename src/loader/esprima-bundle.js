import loader from './index';

/**
 * Cached bundle
 * @type {null|String}
 */
let CACHE = null;

/**
 * @param {String} code
 * @param {Function} callback
 * @param {Function} failback
 */
function evaluteBundle( code, callback, failback ) {
    try {
        eval( code );
        CACHE = module.exports;
        callback( CACHE );
    } catch ( e ) {
        failback( e );
    }
}

/**
 * @param {String} url
 * @param {Function} callback
 * @param {Function} failback
 */
export default function( url, callback, failback ) {
    if ( CACHE !== null ) {
        return callback( CACHE );
    }
    loader.load(
        url,
        ( code ) => evaluteBundle( code, callback, failback ),
        failback
    );
}