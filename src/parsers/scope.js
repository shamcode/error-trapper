import { walkAddParent } from 'esprima-walk';
import { analyze as scopeAnalyze } from 'escope';

// TODO: dynamic load escope

const IGNORE_VARIABLES = [
    'arguments',
    '___SCOPE_CLOSURE_VARIABLE___'
];

/**
 * @param {Object} ast
 * @param {StackLine} stackLine
 */
export default function parseScope( ast, stackLine ) {
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
            'FunctionDeclaration' !== parent.type &&
            'FunctionExpression' !== parent.type &&
            'Program' !== node.type
        ) {
            parent = parent.parent;
        }
        return parent;
    }

    function collectVariableNames( ast, scopeNode ) {
        const scopeManager = scopeAnalyze( ast );
        const currentScope = scopeManager.acquire( scopeNode );
        return currentScope
            .variables
            .map( variable => variable.name )
            .concat(
                ...currentScope.references.map( reference => reference.identifier.name )
            )
            .filter( variable => -1 === IGNORE_VARIABLES.indexOf( variable ) )
        ;
    }

    const node = findNodeByLine( ast, stackLine.line );
    const scopeNode = findScopeForNode( node );

    return collectVariableNames( ast, scopeNode );
}