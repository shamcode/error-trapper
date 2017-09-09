import { analyze as scopeAnalyze } from 'escope';
import { SCOPE_CLOSURE_VARIABLE } from './constants';

// TODO: dynamic load escope

const IGNORE_VARIABLES = [
    'arguments',
    SCOPE_CLOSURE_VARIABLE
];

/**
 * @param value
 * @return {Boolean}
 */
function isNumber( value ) {
    return typeof value === 'number';
}

/**
 * Find node by passing line number
 * @param {Object} ast
 * @param {Number} line
 * @param {Number} column
 * @return {Object|null}
 */
function findNodeByLineAndAddParent( ast, line, column ) {
    const stack = [ ast ];
    let lastWalkedNodeAtLine = null;
    for ( let i = 0; i < stack.length; i++ ) {
        const node = stack[ i ];
        const start = node.loc.start;
        if ( start.line === line ) {
            if ( !( isNumber( column ) && isNumber( start.column ) ) ) {
                return node;
            }
            if ( start.column < column ) {
                lastWalkedNodeAtLine = node;
            } else if ( start.column > column ) {
                return lastWalkedNodeAtLine;
            } else {
                return node;
            }
        } else if ( start.line > line && null !== lastWalkedNodeAtLine ) {
            return lastWalkedNodeAtLine;
        }
        for ( let key in node ) {
            if ( node.hasOwnProperty( key ) && key !== 'parent' ) {
                const child = node[ key ];
                if ( child instanceof Array ) {
                    for ( let j = 0, len = child.length; j < len; j++ ) {
                        const subChild = child[ j ];
                        subChild.parent = node;
                        stack.push( subChild )
                    }
                } else if (
                    child !== undefined &&
                    child !== null &&
                    typeof child.type === 'string'
                ) {
                    child.parent = node;
                    stack.push( child )
                }

            }
        }
    }
    return null;
}

/**
 * Get scope for node
 * @param {Object} node
 * @return {Object}
 */
function findScopeForNode( node ) {
    let parent = node;
    while (
    'FunctionDeclaration' !== parent.type &&
    'FunctionExpression' !== parent.type &&
    'Program' !== node.type
        ) {
        parent = parent.parent;
    }
    return parent;
}

/**
 * Collect all variable names for scope
 * @param {Object} ast
 * @param {Object} scopeNode
 * @return {Array.<String>}
 */
function collectVariableNames( ast, scopeNode ) {
    const scopeManager = scopeAnalyze( ast );
    const currentScope = scopeManager.acquire( scopeNode );
    const variables = currentScope
        .variables
        .map( variable => variable.name );
    currentScope.references.forEach( reference => {
        const variableName = reference.identifier.name;
        if ( -1 === variables.indexOf( variableName ) ) {
            variables.push( variableName );
        }
    } );
    return variables.filter( variable => -1 === IGNORE_VARIABLES.indexOf( variable ) );
}

/**
 * @param {Object} ast
 * @param {StackLine} stackLine
 */
export default function parseScope( ast, stackLine ) {
    const node = findNodeByLineAndAddParent( ast, stackLine.line, stackLine.column );
    if ( null === node ) {
        return [];
    }
    const scopeNode = findScopeForNode( node );
    return collectVariableNames( ast, scopeNode );
}