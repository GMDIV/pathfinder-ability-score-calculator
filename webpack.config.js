module.exports = {

	entry: "./components/index.jsx",
	output: {
		filename: "client/app-bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|server.js)/,
				loader: 'babel-loader',
				query: 
				{
					presets: ['es2015','react']
				}
			}
		]
	},
	devtool: '#eval-source-map',

}
