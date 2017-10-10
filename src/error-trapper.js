import parseError from './parsers/error';
import normalizeForStringify from './normalizers/for-stringify';
import printContext from './utils/print-context';

export const SETTINGS = {
    ESPRIMA_BUNDLE_URL: '',
    GLOBAL_FAILBACK: () => {}
};

function ErrorTrapper() {
    Object.defineProperties( this, {
        parseError: {
            value: parseError,
            writable: false,
            enumerable: false,
            configurable: false
        },
        normalizeForStringify: {
            value: normalizeForStringify,
            writable: false,
            enumerable: false,
            configurable: false
        },
        printContext: {
            value: printContext,
            writable: false,
            enumerable: false,
            configurable: false
        },
        globalFailback: {
            value: SETTINGS.GLOBAL_FAILBACK,
            writable: false,
            enumerable: false,
            configurable: false
        }
    } );
    Object.preventExtensions( this );
}

/**
 * Initialize error trapper
 * @param {String} esprimaBundleUrl url for esprima-bundle
 * @param {=Function} globalFailback Global failback for WRAP macro
 */
export default function initialize( esprimaBundleUrl, globalFailback ) {
    SETTINGS.ESPRIMA_BUNDLE_URL = esprimaBundleUrl;
    if ( typeof globalFailback === 'function' ) {
        SETTINGS.GLOBAL_FAILBACK = globalFailback;
    }
    if ( !window.ErrorTrapper ) {
        Object.defineProperty( window, 'ErrorTrapper', {
            value: new ErrorTrapper,
            writable: false,
            enumerable: false,
            configurable: false
        } );
    }
}
