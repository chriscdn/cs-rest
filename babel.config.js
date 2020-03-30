module.exports = {
	presets: [
		['@babel/preset-env', {
			useBuiltIns: 'usage',
			modules: false,
			corejs: 3 // https://babeljs.io/docs/en/babel-plugin-transform-runtime#options
		}]
	]
}