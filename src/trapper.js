import Promise from 'promise-polyfill';

export default function errorTrap( fn ) {
    return function() {
        try {
            return fn.apply( this, arguments );
        } catch ( e ) {
            parseError( e );
            throw e;
        }
    };
}

export function parseError( e ) {
    const regex = /Cannot read property '(.+)' of undefined/i;
    if ( e instanceof TypeError && regex.test( e.message ) ) {
        const key = e.message.match( regex )[ 1 ];
        const stackLines = parseStack( e.stack );
        const firstFile = stackLines[ 0 ];
        return firstFile
            .loadFileContent()
            .then( ( response ) => {

                // TODO: use esprima for collect context
                const line = response.split( '\n' )[ firstFile.line - 1 ];
                const chunk = line.slice( 0, firstFile.column - 1 );
                const accessorChain = chunk.split( '.' );
                if ( accessorChain.length > 1 ) {
                    const elems = accessorChain[ 0 ].split( ' ' );
                    const last = elems[ elems.length - 1 ];
                    return `(function() { return { ${last}: ${last} } })()`;
                }
            } )
        ;
    }
    return Promise.resolve( '' );
}

export function normalizeForStringify( context ) {

    // TODO: use https://github.com/isaacs/json-stringify-safe
    const normalizedContext = {};
    Object
        .keys( context )
        .forEach( variable => {
            normalizedContext[ variable ] = normalizeVariableForStringify( context[ variable ] );
        } )
    ;
    return normalizedContext;
}

function normalizeVariableForStringify( variableValue ) {
    try {
        JSON.stringify( variableValue );
        return variableValue;
    } catch ( e ) {
        const res = {};
        Object
            .keys( variableValue )
            .forEach( key => {
                const value = variableValue[ key ];
                res[ key ] = value !== undefined && value !== null ? value.toString() : value;
            } )
        ;
        return res;
    }
}

export function printContext( context ) {
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

function parseStack( stackMessage ) {
    const withFunctionRegex = /at (.+) \((.+):(\d+):(\d+)\)/i;
    const withoutFunctionRegex = /at (.+):(\d+):(\d+)/i;
    return stackMessage
        .split( '\n' )
        .slice( 1 ) // Passing error message
        .map( rawLine => {
            const trimmedLine = rawLine.trim();
            let matches = trimmedLine.match( withFunctionRegex );
            if ( null === matches ) {
                const [ file, line, column ] = trimmedLine
                    .match( withoutFunctionRegex )
                    .slice( 1 )
                ;
                return new StackLine( file, line, column );
            }
            const [ method, file, line, column ] = matches.slice( 1 );
            return new StackLine( file, line, column, method );
        } )
    ;
}

class StackLine {
    constructor( file, line, column, method ) {
        this.file = file;
        this.line = parseInt( line );
        this.column = parseInt( column );
        this.method = method;
    }

    loadFileContent() {
        return fetch( this.file )
            .then( ( response ) => {
                this.fileContent = response.text();
                return this.fileContent;
            } )
        ;
    }
}


/*
try {
    const foo = { firstName: 'Andy' };
    const bar = controller.lastName.toString;
} catch ( e ) {

    // TODO: move to babel macro: https://github.com/codemix/babel-plugin-macros
    parseError( e ).then( ( code ) => {
        const context = eval( code );
        console.error( e );
        printContext( context );
    } );
    throw e;
}
 */
