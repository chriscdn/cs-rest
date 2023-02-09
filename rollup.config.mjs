import pkg from './package.json' assert { type: 'json' }
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'

import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

// https://nolanlawson.com/2017/01/09/how-to-write-a-javascript-package-for-both-node-and-the-browser/
function replaceStrings(isBrowser = true) {
  const isNode = !isBrowser

  return {
    preventAssignment: true,
    'process.browser': isBrowser.toString(),
    'process.node': isNode.toString(),
  }
}

const input = 'src/index.ts'

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [replace(replaceStrings(true)), json(), esbuild()],
  },

  {
    input,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [replace(replaceStrings(true)), json(), esbuild()],
  },

  {
    input,
    output: [
      {
        file: 'lib/index.umd.js',
        format: 'umd',
        name: 'CSREST',
        exports: 'named',
        sourcemap: true,
        globals: {
          axios: 'axios',
        },
      },
    ],
    external: ['axios'],
    plugins: [replace(replaceStrings(true)), json(), esbuild()],
  },

  {
    input,
    output: [
      {
        file: pkg.unpkg,
        format: 'umd',
        name: 'CSREST',
        exports: 'named',
        sourcemap: true,
        globals: {
          axios: 'axios',
        },
      },
    ],
    external: ['axios'],
    plugins: [replace(replaceStrings(true)), json(), esbuild(), terser()],
  },

  {
    input,
    plugins: [dts()],
    output: {
      file: pkg.types,
      format: 'es',
    },
  },
]
