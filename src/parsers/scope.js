import { SCOPE_CLOSURE_VARIABLE } from '../../macros/constants';

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
 * @param obj
 * @return {Boolean}
 */
function isNode( obj ) {
    return obj !== undefined &&
        obj !== null &&
        typeof obj.type === 'string';
}

/**
 * @param {Object} node
 * @param {Number} line
 * @param {Number|*} column
 */
function isNodeOnPosition( node, line, column ) {
    const start = node.loc.start;
    return start.line === line && (
        !isNumber( column ) ||
        !isNumber( start.column ) ||
        start.column === column
    )
}

/**
 * @param {Object} node
 * @param {Number} line
 * @param {Number|*} column
 */
function nodeSiblingAfter( node, line, column ) {
    const start = node.loc.start;
    return start.line > line || (
        start.line === line &&
        isNumber( start.column ) &&
        isNumber( column )  &&
        start.column > column
    );
}

/**
 * Add "parent" to node
 * @param {Object} node
 * @return {Array<Object>} array of processed nodes
 */
function addParent( node ) {
    const nodes = [];
    for ( let key in node ) {
        if ( !node.hasOwnProperty( key ) || 'parent' === key ) {
            continue;
        }
        const child = node[ key ];
        if ( child instanceof Array ) {
            for ( let j = 0, len = child.length; j < len; j++ ) {
                const subChild = child[ j ];
                subChild.parent = node;
                nodes.push( subChild )
            }
        } else if ( isNode( child ) ) {
            child.parent = node;
            nodes.push( child )
        }
    }
    return nodes;
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
        if ( isNodeOnPosition( node, line, column ) ) {
            return node;
        }
        if ( null !== lastWalkedNodeAtLine && nodeSiblingAfter( node, line, column ) ) {
            return lastWalkedNodeAtLine;
        }
        if ( start.line === line && start.column < column ) {
            lastWalkedNodeAtLine = node;
        }
        stack.push( ...addParent( node ) );
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
 * @param {Function} scopeAnalyze analyze function from 'escope'
 * @return {Array.<String>}
 */
function collectVariableNames( ast, scopeNode, scopeAnalyze ) {
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
 * @param {Function} scopeAnalyze
 * @return {Array.<String>}
 */
export default function parseScope( ast, stackLine, scopeAnalyze ) {
    const node = findNodeByLineAndAddParent( ast, stackLine.line, stackLine.column );
    if ( null === node ) {
        return [];
    }
    const scopeNode = findScopeForNode( node );
    return collectVariableNames( ast, scopeNode, scopeAnalyze );
}