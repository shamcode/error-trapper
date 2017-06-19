var fs = require( 'fs' );

var libraryName = 'trapper';
var plugins = [];

var libraryConfig = {
    entry: [ 'whatwg-fetch', __dirname + '/src/trapper.js' ],
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: libraryName + '.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    },
    plugins: plugins
};

var testConfig = {
    entry: [ 'whatwg-fetch', __dirname + '/test/main.js' ],
    devtool: 'source-map',
    output: {
    path:  __dirname + '/test/assets',
        filename: 'bundle.js',
        umdNamedDefine: true
},
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    },
    plugins: plugins
};

module.exports = [ libraryConfig, testConfig ];