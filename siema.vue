<template>
  <div>
    <slot/>
  </div>
</template>
<script>

let Siema, _setInterval, timmer

// ssr / nuxt only in browser import
if (process.browser) {
  Siema = require('siema')
  _setInterval = require('setinterval-plus')
}

export default {
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    playDuration: {
      type: Number,
      default: 6000
    }
  },
  mounted () {
    this.init()
  },
  // computed: {
  // },
  beforeDestroy () {
    timmer.stop()
    this.siema.destroy()
  },
  methods: {
    init() {
      // get the current selector
      this.options.selector = this.$el
      // fix timmer if drag or next/prev/goto TODO improve
      this.options.onChange = () => {
        if (this.autoPlay) this.playReset()
      }
      // let's start
      this.siema = new Siema(this.options)
      // check for autoplay
      if (this.autoPlay) this.playInit(this.playDuration)
    },
    // Basic wrap...
    prev(slide, callback) {
      this.siema.prev(slide, callback)
    },
    next(slide, callback) {
      this.siema.next(slide, callback)
    },
    goTo(index, callback) {
      this.siema.goTo(index, callback)
    },
    remove(index, callback) {
      this.siema.remove(index, callback)
    },
    insert(item, index, callback) {
      this.siema.insert(item, index, callback)
    },
    prepend(item, callback) {
      this.siema.prepend(item, callback)
    },
    append(item, callback) {
      this.siema.append(item, callback)
    },
    currentSlide() {
      return this.siema.currentSlide()
    },
    resizeHandler() {
      this.siema.resizeHandler()
    },
    // addded autoplay functions
    playInit(time = 6000 ) {
      timmer= new _setInterval(() => { this.siema.next()}, time)
    },
    // see https://github.com/thehobbit85/setinterval-plus
    play() {
      timmer.start()
    },
    stop() {
      timmer.stop()
    },
    pause() {
      timmer.pause()
    },
    resume() {
      timmer.resume()
    },
    playReset() {
      timmer.stop()
      timmer.start()
    }
  }
}
</script>
<style type="text/css">

</style>
