# vue2-siema

[![npm](https://img.shields.io/npm/v/vue2-siema.svg)
![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A basic wrapper for the [siema](https://pawelgrzybek.com/siema/) javascript library

Added autoplay function.

### Note: This is in alpha stage, any contributions are welcome.

# Installation

```
npm install --save vue2-siema
```
or
```
yarn add vue2-siema
```

## Default import

```javascript
import Vue from 'vue'
import siema from 'vue2-siema'

Vue.use(siema)
```

# Usage

```html
<siema ref="siema" class="siema" :options="options">
  <div><p>Hi, I'm slide 1</p></div>
  <div><p>Hi, I'm slide 2</p></div>
  <div><p>Hi, I'm slide 3</p></div>
  <div><p>Hi, I'm slide 4</p></div>
  <div><p>Hi, I'm slide 5</p></div>
</siema>
```
Wrap with ```<no-ssr><siema...></no-ssr>``` in ssr like nuxt.

```javascript
export default {
  data() {
    return {
      options: {
        draggable: true,
        loop: true
      }
    }
  }
}
```
# Options
Use the siema plugin [options](https://github.com/pawelgrzybek/siema#options)

## Methods
Added wraps to plugin so you can use it:

```this.$refs.siema.init()``` initialize

From the plugin

```this.$refs.siema.prev( slide = 1, callback)```

```this.$refs.siema.next( slide = 1, callback)```

```this.$refs.siema.goTo( index, callback)```

```this.$refs.siema.remove( index, callback)```

```this.$refs.siema.insert( item, index, callback)```

```this.$refs.siema.prepend( item, callback)```

```this.$refs.siema.append( item, callback)```

```this.$refs.siema.resizeHandler()``` recalc

## Extras:

### Autoplay

```this.$refs.siema.stop()``` Stop auto play

```this.$refs.siema.play()``` Resume auto play

```this.$refs.siema.playInit(time = 6000) ()``` Start auto play without props

```this.$refs.siema.reset()``` reset auto play counter


```html
<siema ref="siema" class="siema" :options="options" :auto-play="true" :play-duration="2000">
```

defaults
```javascript
auto-play: false
play-duration: 6000
```

### Current Slide 

Using the .sync we cant get the "current" slide from the component.


```html
<siema :current.sync="currentSlide" ref="siema" class="siema" :options="options" >
```

```javascript
export default {
  data() {
    return {
      options: {
        draggable: true,
        loop: true
      },
      currentSlide: 0
    }
  }
}



---

## License

[MIT](http://opensource.org/licenses/MIT)
