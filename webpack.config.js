module.exports = {
	entry: {
		app: './waterfall.js'
	},
	output: {
		path: '.',
		filename: '[name].bundle.js',
		libraryTarget: 'this'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?experimental&optional=selfContained'
			}
		]
	},
	noInfo: true,
	colors: true
}