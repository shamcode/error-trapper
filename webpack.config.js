const fs = require( 'fs' );
const webpack = require( 'webpack' );

const plugins = [];
const env = process.env.WEBPACK_ENV;
if (  env === 'build' ) {
    plugins.push( new webpack.optimize.UglifyJsPlugin( { minimize: true } ) );
}

const libraryName = 'error-trapper';

const libraryConfig = {
    plugins,
    entry: `${__dirname}/src/error-trapper.js`,
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'index.js',
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
    }
};

const esprimaPrebuildConfig = {
    plugins,
    entry: `${__dirname}/src/prebuilds/esprima.js`,
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: 'esprima-bundle.js',
        library: 'esprima-bundle',
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
    }
};

function buildTestName( testName ) {
    return {
        plugins,
        entry: {
            [ testName ]: `${__dirname}/test/${testName}/main.js`
        },
        devtool: 'source-map',
        output: {
            path: `${__dirname}/test/${testName}/assets`,
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
        }
    }
}

var exports = [ libraryConfig, esprimaPrebuildConfig ];

if ( env !== 'build' ) {
    const files = fs.readdirSync( './test' );
    files.forEach( ( testDirectory ) => {
        exports.push( buildTestName( testDirectory ) )
    } );
}

module.exports = exports;