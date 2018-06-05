import base from './rollup.config.base'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/vue2-siema.min.js',
    format: 'iife',
    name: 'Siema'
  },
})

config.plugins.push(uglify({}, minify))

export default config