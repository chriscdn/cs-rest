import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'

function replaceStrings(isBrowser = true) {
	const isNode = !isBrowser

	return {
		'process.browser': isBrowser.toString(),
		'process.node': isNode.toString()
	}
}

export default [{
	input: 'src/index.js',
	output: [{
		file: pkg.main,
		format: 'cjs',
		sourcemap: true,
		exports: 'named'
	}],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		replace(replaceStrings(false)),
		resolve({
			preferBuiltins: true
		}),
		commonjs()
	]
}, {
	input: 'src/index.js',
	output: [{
		file: pkg.module,
		format: 'es',
		sourcemap: true,
	}],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		replace(replaceStrings(true)),
		resolve(),
		commonjs()
		// babel()
	]
}, {
	input: 'src/index.js',
	output: [{
		file: 'lib/index.js',
		format: 'umd',
		name: 'CSREST',
		exports: 'named',
		sourcemap: true,
		globals: { axios: 'axios' }
	}],
	external: ['axios'],
	plugins: [
		replace(replaceStrings(true)),
		resolve({ browser: true }),
		commonjs(),
		babel()
		// terser()
	]
}, {
	input: 'src/index.js',
	output: [{
		file: pkg.unpkg,
		format: 'umd',
		name: 'CSREST',
		exports: 'named',
		sourcemap: true,
		globals: { axios: 'axios' }
	}],
	external: ['axios'],
	plugins: [
		replace(replaceStrings(true)),
		resolve({ browser: true }),
		commonjs(),
		babel(),
		terser()
	]
}]