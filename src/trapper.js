import Promise from 'promise-polyfill';
import { parse } from 'esprima';
import { walkAddParent } from 'esprima-walk';

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
                const ast = parse( response, {
                    loc: true,
                    comment: true
                } );
                const scopeVariables = parseScope( ast, firstFile );
                const scopeMapping = scopeVariables.map( variable => `'${variable}': ${variable}` );
                const scopeContext = `{${scopeMapping.join( ',' )} }`;
                return `(function(){return${scopeContext}})()`;
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

/**
 * @param {Object} ast
 * @param {StackLine} stackLine
 */
function parseScope( ast, stackLine ) {

    function findNodeByLine( ast, line ) {
        let searchableNode = null;
        // TODO: stop after find
        walkAddParent( ast, ( node ) => {
            if ( node.loc.start.line === line ) {
                searchableNode = node;
            }
        } );
        return searchableNode;
    }

    function findScopeForNode( node ) {
        let parent = node;
        while (
            'FunctionExpression' !== parent.type &&
            'FunctionExpression' !== parent.type &&
            'Program' !== node.type
        ) {
            parent = parent.parent;
        }
        return parent;
    }

    function isEqualNode( a, b ) {
        return a.loc.start.line === b.loc.start.line &&
            a.loc.start.column === b.loc.start.column &&
            a.loc.end.line === b.loc.end.line &&
            a.loc.end.column === b.loc.end.column
        ;
    }

    function collectVariableDeclarators( scopeNode ) {
        const nodes = [];
        walkAddParent( scopeNode, ( node ) => {
            if ( 'VariableDeclarator' === node.type &&
                isEqualNode( scopeNode, findScopeForNode( node ) )
            ) {
                nodes.push( node );
            }
        } );
        return nodes;
    }

    const node = findNodeByLine( ast, stackLine.line );
    const scopeNode = findScopeForNode( node );
    const variableDeclarations = collectVariableDeclarators( scopeNode );
    return variableDeclarations.map( node => node.id.name );
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
