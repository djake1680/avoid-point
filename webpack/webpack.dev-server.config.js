const { publicPath, assetsPath, commonLoaders } = require('./common.config');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	name: 'server',
	context: path.join(__dirname, '..', 'app'),
	entry: {'app': '../build/server/index.js'},  
	output: {
		path: assetsPath,
		filename: 'index.js',
		libraryTarget: 'commonjs2',
		publicPath,
	},
	target: 'node',
	externals: nodeExternals(),  
	module: {
		loaders: commonLoaders.concat([{
			test: /\.scss$/,
			loaders: [
				'css-loader/locals?modules&localIdentName=[name]__[local]___[hash:base64:5]',
				'sass-loader'
			]
		}])
	}
};






























