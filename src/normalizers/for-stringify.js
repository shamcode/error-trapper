import stringify from 'json-stringify-safe';

/**
 * Normalize context for stringify
 * @param {Object} context
 * @return {Object}
 */
export default function normalizeForStringify( context ) {
    const normalizedContext = {};
    Object
        .keys( context )
        .forEach( variable => {
            normalizedContext[ variable ] = normalizeVariableForStringify( context[ variable ] );
        } )
    ;
    return normalizedContext;
}

/**
 * Modify value for stringify (remove circular references)
 * @param {*} variableValue
 * @return {*}
 */
function normalizeVariableForStringify( variableValue ) {
    try {
        JSON.stringify( variableValue );
        return variableValue;
    } catch ( e ) {
        return JSON.parse( stringify( variableValue ) );
    }
}
