const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    name: 'client',
    context: path.join(__dirname, '..', 'app'),  
    entry: { 'app': '../build/client/src/client.js' },
    output: {
        path: assetsPath,
        publicPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '..', 'build'),
                exclude: path.join(__dirname, '..', 'node_modules')
            },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract({
            //         fallback: [
            //             'style-loader',
            //             'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            //             'sass-loader'
            //         ],
            //         use: [
            //             'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            //             'sass-loader'
            //         ]
            //     })
            // },
            {
                test: /\.scss$/,
                loaders: [
                        'style-loader',
                        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'sass-loader',
                        'postcss-loader'
                ],
                include: path.join(__dirname, '..', 'build', 'client', 'src'),
                exclude: path.join(__dirname, '..', 'node_modules')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
};

























