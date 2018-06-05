import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

const config = require('../package.json')

export default {
  input: 'src/index.js',
  name: 'vue2-siema',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    vue({
      entry: 'index.js',
      compileTemplate: true
    }),
    commonjs({
      exclude: [ 'node_modules/siema/**' ],
    }),
    babel({
      exclude: 'node_modules/**',
      'plugins': [
        'external-helpers',
      ],
    }),
    replace({
      VERSION: JSON.stringify(config.version),
    })
  ],
  watch: {
    include: 'src/**',
  },
  external: ['siema']
}