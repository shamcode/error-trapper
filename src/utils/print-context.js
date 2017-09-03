import normalizeForStringify from '../normalizers/for-stringify';

/**
 * Print context
 * @param {Object} context
 */
export default function printContext( context ) {
    console.group( 'Runtime context' );
    const normalizedContext = normalizeForStringify( context );
    for ( let variable in normalizedContext ) {
        if ( !normalizedContext.hasOwnProperty( variable ) ) {
            continue;
        }
        console.group( variable );
        console.dir( normalizedContext[ variable ] );
        console.groupEnd();
    }
    console.groupEnd();
}
