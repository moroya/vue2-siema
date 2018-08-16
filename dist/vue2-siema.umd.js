(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('siema')) :
  typeof define === 'function' && define.amd ? define(['exports', 'siema'], factory) :
  (factory((global['vue2-siema'] = {}),global.Siema));
}(this, (function (exports,Siema) { 'use strict';

  Siema = Siema && Siema.hasOwnProperty('default') ? Siema['default'] : Siema;

  //
  var timmer = void 0;

  var script = {
    props: {
      options: {
        type: Object,
        default: function _default() {
          return {};
        }
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
    data: function data() {
      return {
        playing: this.autoPlay,
        time: this.playDuration
      };
    },
    mounted: function mounted() {
      if (this.ready) this.init();
    },
    beforeDestroy: function beforeDestroy() {
      if (this.playing) clearInterval(timmer);
      this.destroy();
    },

    methods: {
      init: function init() {
        var _this = this;

        this.$nextTick(function () {
          if (_this.options === undefined) _this.options = {};
          _this.options.selector = _this.$el;
          _this.options.onInit = function () {
            _this.$emit('init');
          };
          _this.options.onChange = function () {
            _this.$emit('update:current', _this.siema.currentSlide);
            if (_this.playing) {
              clearTimeout(timmer);
              timmer = setTimeout(function () {
                _this.siema.next();
              }, _this.time);
            }
            _this.$emit('change');
          };
          if (_this.playing) _this.play(_this.time);
          _this.siema = new Siema(_this.options);
        });
      },

      // Basic wrap...
      prev: function prev(slide, callback) {
        this.siema.prev(slide, callback);
      },
      next: function next(slide, callback) {
        this.siema.next(slide, callback);
      },
      goTo: function goTo(index, callback) {
        this.siema.goTo(index, callback);
      },
      remove: function remove(index, callback) {
        this.siema.remove(index, callback);
      },
      insert: function insert(item, index, callback) {
        this.siema.insert(item, index, callback);
      },
      prepend: function prepend(item, callback) {
        this.siema.prepend(item, callback);
      },
      append: function append(item, callback) {
        this.siema.append(item, callback);
      },
      destroy: function destroy() {
        var restoreMarkup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var callback = arguments[1];

        this.siema.destroy(restoreMarkup, callback);
      },
      play: function play() {
        var _this2 = this;

        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6000;

        this.time = time;
        this.playing = true;
        timmer = setTimeout(function () {
          _this2.siema.next();
        }, time);
        this.$emit('update:playing', true);
      },
      stop: function stop() {
        this.playing = false;
        clearTimeout(timmer);
        this.$emit('update:playing', false);
      }
    }
  };

  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_vm._t("default")], 2);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};
  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/srv/core/vue2-siema/src/components/siema.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component;
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var Siema$1 = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

  // Install the components
  function install(Vue) {
    Vue.component('siema', Siema$1);
  }

  /* -- Plugin definition & Auto-install -- */
  /* You shouldn't have to modify the code below */

  // Plugin
  var plugin = {
    // eslint-disable-next-line no-undef
    version: "0.2.1",
    install: install
  };

  // Auto-install
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.install = install;
  exports.Siema = Siema$1;
  exports.default = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
