<template>
  <div>
    <slot/>
  </div>
</template>

<script type="text/babel">
import Siema from 'siema'

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    playDuration: {
      type: Number,
      default: 6000
    },
    current: {
      type: Number,
      default: 0
    },
    ready: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      playing: this.autoPlay,
      time: this.playDuration
    }
  },
  mounted() {
    if (this.ready) this.init()
  },
  beforeDestroy() {
    if (this.playing) clearInterval(this.$options.play_timer)
    this.destroy()
  },
  methods: {
    init() {
      this.$nextTick(()=> {
        if (this.options === undefined) this.options = {}
        this.options.selector =  this.$el
        this.options.onInit = () => {
          this.$emit('init')
        }
        this.options.onChange = () => {
          this.$emit('update:current', this.siema.currentSlide )
          if (this.playing) {
            clearTimeout(this.$options.play_timer)
            this.$options.play_timer = setTimeout(() => {
              this.siema.next()
            }, this.time)
          }
          this.$emit('change')
        }
        if (this.playing) this.play(this.time)
        this.siema = new Siema(this.options)
      })
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
    destroy(restoreMarkup = false, callback) {
      this.siema.destroy(restoreMarkup, callback)
    },
    play(time = 6000) {
      this.time = time
      this.playing = true
      this.$options.play_timer = setTimeout(() => {
        this.siema.next()
      }, time)
      this.$emit('update:playing', true)
    },
    stop() {
      this.playing = false
      clearTimeout(this.$options.play_timer)
      this.$emit('update:playing', false)
    }
  }
}
</script>