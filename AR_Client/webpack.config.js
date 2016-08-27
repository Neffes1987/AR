//webpack.config.js
var webpack = require('webpack');
const path = require('path');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
	entry:[
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'bootstrap-loader',
		'./src/index.jsx'

	],
	module:{
		preLoaders: [ //добавили ESlint в preloaders
		{test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
		],
		loaders:[
			{test:/\.jsx?$/,exclude:/node_modules/,loader:'react-hot!babel'},
			{test: /\.js$/,loader: 'imports?jQuery=jquery',exclude: /\/node_modules\//},
			{test: /\.css$/,loaders: [ 'style', 'css', 'postcss' ]},
			{test: /\.scss$/,loaders: [ 'style', 'css', 'postcss', 'sass' ]},
			{test: /\.(ttf|eot|svg|woff|woff2|png|jpg)$/,loader: 'file?name=[path][name].[ext]'},
			{test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
		//{test: /\.scss$/,loader: ExtractTextPlugin.extract(
			//  'style',
			  //'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]' +
			 // '!sass' +
			 // '!sass-resources'
		//	),
		//},
		]
	},
	//sassResources: './config/sass-resources.scss',
	eslint: {configFile: './.eslintrc'},
	resolve:{
		extensions:['','.js','.jsx']
	},
	output:{
		path:__dirname+'/dist',
		filename: '[name].js',
        publicPath: '/',
        library: '[name]'
	},
	devServer:{
		contentBase:'./dist',
		hot:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            _: "underscore"
        }),
		//new ExtractTextPlugin("styles.css")
	]
}
