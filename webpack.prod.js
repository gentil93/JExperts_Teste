const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({}), new TerserPlugin()]
	},
	plugins: [
		new CompressionPlugin({
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0,
			cache: true
		})
	]
})
