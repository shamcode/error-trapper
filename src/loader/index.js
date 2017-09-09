class Loader {
    constructor() {
        this._cache = {};
    }

    /**
     * @param {String} file
     * @param {Function} callback
     * @param {Function} failback
     */
    load( file, callback, failback ) {
        if ( this._cache[ file ] ) {
            callback( this._cache[ file ] );
        } else {
            this._makeRequest( file, callback, failback );
        }
    }

    /**
     * @private
     * @param {String} file
     * @param {Function} callback
     * @param {Function} failback
     */
    _makeRequest( file, callback, failback ) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            this._onLoaded( request, file, callback, failback );
        };
        request.open( 'GET', file, true );
        request.send();
    }

    /**
     * @private
     * @param {XMLHttpRequest} request
     * @param {String} file
     * @param {Function} callback
     * @param {Function} failback
     */
    _onLoaded( request, file, callback, failback ) {
        if ( XMLHttpRequest.DONE === request.readyState ) {
            if ( 200 === request.status ) {
                this._cache[ file ] = request.responseText;
                callback( this._cache[ file ] );
            } else {
                failback( request );
            }
        }
    }
}

export default new Loader();