/**
 * Webpack 4 Build Configuration File for F-E-T-C-H
 * Author: Rajat Kumar
 * 
 */

// Dependencies
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
var BUILD_DIR = path.join(__dirname , './dist');
var APP_DIR = path.join(__dirname , './src');
const mode = process.env.NODE_ENV || "development";
const isDev = mode === "development";
const VENDOR_LIBS = [ 'react' , 'react-dom' , 'axios' , 'react-bootstrap' , 'react-slick' , 'react-hot-loader' , 'react-router-dom'];

// Entry points
var _entry = {
    bundle :  [APP_DIR + '/index.js'],
    vendor :  VENDOR_LIBS
};

_entry['bundle'].push("webpack-hot-middleware/client");

// Output files
var _output = {
    path: BUILD_DIR,
    filename : 'fetch.[name].[hash].js',
    publicPath : '/'
};

// Devtool for source mapping
var _devtool = 'source-map';

// Webpack Modules & Loaders
var _module = {
    rules: [
        {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'eslint-loader'
        },
        {
            test : /\.js$/,
            exclude: [/node_modules/],
            use: 'babel-loader'
        },
        {
            test: /\.md$/,
            loader: "html!markdown"
        },
        {
            test : /\.scss$/,
            use: isDev ? ['style-loader' , 'css-loader' , 'postcss-loader' , 'sass-loader'] : extractTextPlugin.extract({
                fallback : 'style-loader',
                use :  ['css-loader' , 'postcss-loader' , 'sass-loader']
                
            })
            
        },
        {
            test : /\.(jpe?g|png|gif|svg)$/,
            use : 'file-loader'
        },
        {
            test : /\.css$/,
            use : isDev ? ['style-loader' , 'css-loader'] : extractTextPlugin.extract({
                fallback : 'style-loader' ,
                use : 'css-loader'
            })
        }
    ]
};

// Webpack Plugins
var _plugins = [
    new extractTextPlugin('styles/fetch.[name].css'),
    new htmlWebpackPlugin({
        template: APP_DIR + '/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new copyWebpackPlugin(
        [{ from : APP_DIR + '/assets' , to : BUILD_DIR + '/assets'}]
    )
];  

var _devServer = {
    contentBase : path.join(__dirname , '/dist'),
    compress : true,
    port : 9000,
    // host:'192.168.43.233',
    hot : true,
    open : true
}

var _optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "common",
                test: /node_modules/,
                chunks: "all"
            },
            vendor: {
                test: /node_modules/,
                chunks: "initial",
                name: "vendor",
                priority: 10,
                enforce: true
            }
        }
    }
};

// Configuration Definition
var config = {

    entry : _entry,

    output : _output,

    devServer : _devServer,

    module : _module,

    plugins: _plugins,

    optimization : _optimization,

    devtool: _devtool,

    mode : mode
 
}


// Exporting the Configuration
module.exports = config;