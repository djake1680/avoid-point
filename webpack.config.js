const path = require('path');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: './client/index.html',
//     filename: 'index.html',
//     inject: 'body'
// })

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        //publicPath: "/assets/",
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
    //plugins: [HtmlWebpackPluginConfig]
}