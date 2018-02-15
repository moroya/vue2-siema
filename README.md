# vue2-siema

[![npm](https://img.shields.io/npm/v/vue2-siema.svg) ![npm](https://img.shields.io/npm/dm/vue2-siema.svg)](https://www.npmjs.com/package/vue2-siema)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A Vue.js Plugin


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

### Autoplay

```html
<siema ref="siema" class="siema" :options="options" :auto-play="true" :play-duration="2000">
```

defaults
```javascript
auto-play: false
play-duration: 6000
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
