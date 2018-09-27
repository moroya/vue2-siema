# vue2-siema

[Dead project!?](https://twitter.com/pawelgrzybek/status/1045199798838669312)

[![npm](https://img.shields.io/npm/v/vue2-siema.svg)
![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A wrapper for the [siema](https://pawelgrzybek.com/siema/) javascript library

![vue2-siema Logo](https://sainf.github.io/vue2siema/vue2siema.png)


# Usage

[See this demo.](https://sainf.github.io/vue2siema/) 

# Installation

```
npm install --save vue2-siema
```
or
```
yarn add vue2-siema
```


## import with bundler

```javascript
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)

```

## Nuxt

In nuxt.config.js

```javascript
plugins: [
  {
    src: '~/plugins/vue2-siema.js',
    ssr: false
  }
]
```
In plugins/vue2-siema.js
```javascript
import Vue from 'vue'
import Siema from 'vue2-siema'

Vue.use(Siema)
```

Wrap in no-ssr
```html
<no-ssr>
  <siema class...></siem>
</no-ssr>
```
[A full Nuxt demo](https://github.com/sainf/nuxt-siema-demo)


## Plain vue
```html
  <script type="text/javascript" src="//unpkg.com/vue"></script>
  <script src='siema.min.js'></script>
  <script src='vue2-siema.min.js'></script>
```

 ```html
  <script type="text/javascript">
      Vue.use(Siema)
      new Vue({...})
  </script>

```

# Credits

[pawelgrzybek/siema](https://github.com/pawelgrzybek/siema)
The siema library mentor!

---

## License

[MIT](http://opensource.org/licenses/MIT)
