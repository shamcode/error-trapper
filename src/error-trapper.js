import parseError from './parsers/error';
import normalizeForStringify from './normalizers/for-stringify';
import printContext from './utils/print-context';

export const SETTINGS = {
    ESPRIMA_BUNDLE_URL: ''
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
        }
    } );
    Object.preventExtensions( this );
}

/**
 * Initialize error trapper
 * @param {String} esprimaBundleUrl url for esprima-bundle
 */
export default function initialize( esprimaBundleUrl ) {
    SETTINGS.ESPRIMA_BUNDLE_URL = esprimaBundleUrl;
    if ( !window.ErrorTrapper ) {
        Object.defineProperty( window, 'ErrorTrapper', {
            value: new ErrorTrapper,
            writable: false,
            enumerable: false,
            configurable: false
        } );
    }
}
