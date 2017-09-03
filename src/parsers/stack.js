/**
 * Parsed stack line
 *
 * @class StackLine
 * @property {String} file file's name
 * @property {Number} line
 * @property {Number} column
 */
class StackLine {
    constructor( file, line, column ) {
        this.file = file;
        this.line = parseInt( line );
        this.column = parseInt( column );
    }

    /**
     * Load content for `this.file`
     * @param {Function} callback
     * @param {Function} failback
     */
    loadFileContent( callback, failback ) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if ( XMLHttpRequest.DONE === request.readyState ) {
                if ( 200 === request.status ) {
                    callback( request.responseText );
                } else {
                    failback( request );
                }
            }
        };
        request.open( 'GET', this.file, true );
        request.send();
    }
}

/**
 * Parse error stack for extract file's name & position
 * @param stackMessage
 * @return {StackLine}
 */
export default function extractErrorPlace( stackMessage ) {
    const JS_FILE_REGEX = /(https?:\/\/.+\.js):(\d+):(\d+)?/i;

    const messages = stackMessage.split( '\n' );
    for ( let i = 0; i < messages.length; i++ ) {
        const trimmedLine = messages[ i ].trim();
        const matches = trimmedLine.match( JS_FILE_REGEX );
        if ( null !== matches ) {
            const [ file, line, column ] = matches.slice( 1 );
            return new StackLine( file, line, column );
        }
    }

    return null;
}
