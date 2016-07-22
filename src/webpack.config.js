var path = require('path');
var webpack = require('webpack');

var commonPlugins = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: './about_page.es6',
		home: './home_page.es6',
		contact: './contact_page.es6'
	},

	output: {
		path: path.resolve('build/js'),
		publicPath: '/public/assets/js',
		filename: '[name].js'
	},
	watch: true,

	plugins: [commonPlugins],

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
				loader: 'url-loader?limit=100000'
			}
		]
	},

	devServer: {
		contentBase: 'public'
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
};