<template>
  <div>
    <slot/>
  </div>
</template>
<script>

let Siema, _setInterval, autoPlay

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
  // mixins: [],
  data () {
    return {
    }
  },
  // beforeCreate () {
  // },
  // created () {
  // },
  // beforeMount () {
  // },
  mounted () {
    this.init()
  },
  // computed: {
  // },
  beforeDestroy () {
    this.destroyFunc()
  },
  methods: {
    init() {
      // get the current selector
      this.options.selector = this.$el
      // let's start
      this.siema = new Siema(this.options)
      // check for autoplay
      if (this.autoPlay) this.playInit(this.playDuration)
    },
    // Basic wrap...
    prev(slide, callback) {
      if (this.autoPlay) this.resetPlay()
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
    destroyFunc(restoreMarkup = false, callback) {
      this.siema.destroy(restoreMarkup, callback)
      Siema = null
      _setInterval = null
      autoPlay = null
    },
    currentSlide() {
      return this.siema.currentSlide()
    },
    resizeHandler() {
      this.siema.resizeHandler()
    },
    // addded autoplay functions
    playInit(time = 6000 ) {
      autoPlay = new _setInterval(() => { this.siema.next()}, time)
    },
    // check https://github.com/thehobbit85/setinterval-plus
    play(what) {
      autoPlay[what]()
    },
    resetPlay() {
      autoPlay.stop()
      autoPlay.play()
    }
  },
  // beforeUpdate () {
  // },
  // updated () {
  // },
}
</script>
<style type="text/css">

</style>
