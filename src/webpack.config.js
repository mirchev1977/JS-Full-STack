var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.es6',
	output: './bundle.js',
	watch: true,

	module: {
		loaders:[
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(jpg|png)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
};