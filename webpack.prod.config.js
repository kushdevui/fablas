const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id][hash].js',
        publicPath: './'
    },
    devServer: {
        historyApiFallback: true,
        open: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { "test": /\.scss$/, "use": [ "style-loader", "css-loader", "sass-loader" ] },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "css-loader"
                  ]
            },
            
            {
                test: /\.(png|jpe?g|svg)$/,
                loader: 'url-loader?limit=50000000&name=images/[name].[ext]'
            }
        ]
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            { from: './src/assets/', to: './assets/' }
        ]),
        new webpack.optimize.UglifyJsPlugin()
    ]
};