!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("html2canvas")):"function"==typeof define&&define.amd?define(["exports","html2canvas"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).PosterShare={},e.html2canvas)}(this,(function(e,n){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=t(n),o={name:"poster-share",props:{},watch:{},data:function(){return{touchTimestamp:0,longTapThreshold:300,isActive:!1}},methods:{closePosterShare:function(){this.isActive=!1},createPoster:function(){var e=this;this.isActive=!0;var n=this;this.$nextTick((function(){var t=e.$refs.imgWrap.children[0];console.log("imgWrap =>",t);var o=t.offsetWidth,i=t.offsetHeight;console.log("imgWidth =>",o),console.log("imgHeight =>",i);var a=document.createElement("canvas"),r=window.devicePixelRatio;a.width=o*r,a.height=i*r,a.style.width=o+"px",a.style.height=i+"px",a.getContext("2d").scale(r,r),s.default&&s.default(t,{scale:r,dpi:300,letterRendering:!0,useCORS:!0,canvas:a,backgroundColor:null}).then((function(e){var t=e.toDataURL("image/png");n.$refs.shareImg.src=t,n.$refs.shareImg.height=i})).catch((function(e){console.log(e)}))}))},onPosterTouchstart:function(){this.touchTimestamp=(new Date).getTime()},onPosterTouchend:function(){this.touchTimestamp&&0!==this.touchTimestamp?((new Date).getTime()-this.touchTimestamp<this.longTapThreshold&&this.closePosterShare(),this.touchTimestamp=0):this.closePosterShare()}}};function i(e,n,t,s,o,i,a,r,c,h){"boolean"!=typeof a&&(c=r,r=a,a=!1);const l="function"==typeof t?t.options:t;let d;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),s&&(l._scopeId=s),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):n&&(d=a?function(e){n.call(this,h(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,r(e))}),d)if(l.functional){const e=l.render;l.render=function(n,t){return d.call(t),e(n,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,d):[d]}return t}const a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function r(e){return(e,n)=>function(e,n){const t=a?n.media||"default":e,s=h[t]||(h[t]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",n.media&&s.element.setAttribute("media",n.media),void 0===c&&(c=document.head||document.getElementsByTagName("head")[0]),c.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(t),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,n=document.createTextNode(t),o=s.element.childNodes;o[e]&&s.element.removeChild(o[e]),o.length?s.element.insertBefore(n,o[e]):s.element.appendChild(n)}}}(e,n)}let c;const h={};var l=o,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isActive?t("div",{staticClass:"poster-share"},[t("div",{staticClass:"poster-share__mask",on:{click:e.closePosterShare}}),e._v(" "),t("div",{staticClass:"poster-share__contain"},[t("div",{ref:"imgWrap",staticClass:"poster-share__img-wrap"},[e._t("default")],2)]),e._v(" "),t("div",{staticClass:"poster-share__snapshot",on:{touchstart:e.onPosterTouchstart,touchend:e.onPosterTouchend}},[t("img",{ref:"shareImg",staticStyle:{opacity:"0"},attrs:{crossorigin:"anonymous"}})])]):e._e()};d._withStripped=!0;var A=i({render:d,staticRenderFns:[]},(function(e){e&&e("data-v-9a7243e6_0",{source:".poster-share[data-v-9a7243e6] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 500;\n}\n.poster-share__mask[data-v-9a7243e6] {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.poster-share__contain[data-v-9a7243e6] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 110;\n  bottom: 0;\n}\n.poster-share__img-wrap[data-v-9a7243e6] {\n  position: relative;\n  background-color: rgba(60, 60, 60, 0.8);\n}\n.poster-share__snapshot[data-v-9a7243e6] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 150;\n}\n.poster-share__snapshot img[data-v-9a7243e6] {\n  width: 100%;\n}\n\n/*# sourceMappingURL=poster-share.vue.map */",map:{version:3,sources:["/Users/Keithytsai/FiT/ui-set/src/mobile/poster-share/poster-share.vue","poster-share.vue"],names:[],mappings:"AA8FA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;AC7FA;AD+FA;EACA,8BAAA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;AC7FA;ADgGA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;AC9FA;ADiGA;EACA,kBAAA;EACA,uCAAA;AC/FA;ADsGA;EACA,eAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;ACpGA;ADqGA;EACA,WAAA;ACnGA;;AAEA,2CAA2C",file:"poster-share.vue",sourcesContent:['<template>\n  <div class="poster-share" v-if="isActive">\n    <div class="poster-share__mask" @click="closePosterShare"></div>\n    <div class="poster-share__contain">\n      <div class="poster-share__img-wrap" ref="imgWrap">\n        <slot></slot>\n      </div>\n    </div>\n    <div class="poster-share__snapshot"\n      @touchstart="onPosterTouchstart"\n      @touchend="onPosterTouchend">\n      <img\n        ref="shareImg"\n        style="opacity: 0;"\n        crossorigin="anonymous"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport html2canvas from "html2canvas";\n\nexport default {\n  name: \'poster-share\',\n  props: {},\n  watch: {},\n  data() {\n    return {\n      touchTimestamp: 0,\n      longTapThreshold: 300,\n      isActive: false,\n    };\n  },\n  methods: {\n    closePosterShare: function() {\n      this.isActive = false;\n    },\n    createPoster: function() {\n      this.isActive = true;\n      const self = this;\n      this.$nextTick(() => {\n        const imgWrap = this.$refs.imgWrap.children[0];\n        console.log(\'imgWrap =>\', imgWrap);\n        var imgWidth = imgWrap.offsetWidth;\n        var imgHeight = imgWrap.offsetHeight;\n        console.log(\'imgWidth =>\', imgWidth);\n        console.log(\'imgHeight =>\', imgHeight);\n        var canvasBox = document.createElement(\'canvas\');\n        var scale = window.devicePixelRatio;\n        canvasBox.width = imgWidth * scale;\n        canvasBox.height = imgHeight * scale;\n        canvasBox.style.width = imgWidth + \'px\';\n        canvasBox.style.height = imgHeight + \'px\';\n        canvasBox.getContext(\'2d\').scale(scale, scale);\n        html2canvas && html2canvas(imgWrap, {\n          scale: scale,\n          dpi: 300,\n          letterRendering: true,\n          useCORS: true,\n          canvas: canvasBox,\n          backgroundColor: null, // 解决生成的图片有白边，只单单加和这个并没有效果\n        })\n          .then(function(canvas) {\n            var imageBase64 = canvas.toDataURL("image/png"); // base64数据\n            self.$refs.shareImg.src = imageBase64;\n            self.$refs.shareImg.height = imgHeight;\n          })\n          .catch(function(err) {\n            console.log(err);\n          });\n      });\n    },\n    onPosterTouchstart: function() {\n      this.touchTimestamp = new Date().getTime();\n    },\n    onPosterTouchend: function() {\n      if (!this.touchTimestamp || this.touchTimestamp === 0) {\n        this.closePosterShare();\n        return;\n      }\n      var now = new Date().getTime();\n      var timeDiff = now - this.touchTimestamp;\n      if (timeDiff < this.longTapThreshold) {\n        this.closePosterShare();\n      }\n      this.touchTimestamp = 0;\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n\n.poster-share {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 500;\n\n  &__mask {\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 100;\n  }\n\n  &__contain {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: 110;\n    bottom: 0;\n  }\n\n  &__img-wrap {\n    position: relative;\n    background-color: rgba(60, 60, 60, 0.8);\n    // padding-top: 133.33%;\n    // padding-top: 177.77%;\n    // transform: scale(0.8);\n    // transform-origin: left top;\n  }\n\n  &__snapshot {\n    position: fixed;\n    width: 100%;\n    top:0;\n    left:0;\n    right: 0;\n    bottom: 0;\n    z-index: 150;\n    img{\n      width: 100%;\n    }\n  }\n}\n\n</style>\n',".poster-share {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 500;\n}\n.poster-share__mask {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.poster-share__contain {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 110;\n  bottom: 0;\n}\n.poster-share__img-wrap {\n  position: relative;\n  background-color: rgba(60, 60, 60, 0.8);\n}\n.poster-share__snapshot {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 150;\n}\n.poster-share__snapshot img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=poster-share.vue.map */"]},media:void 0})}),l,"data-v-9a7243e6",!1,void 0,!1,r,void 0,void 0),p=function(e){p.installed||(p.installed=!0,e.component(A.name,A))},m={install:p},u=null;"undefined"!=typeof window?u=window.Vue:"undefined"!=typeof global&&(u=global.Vue),u&&u.use(m),e.default=A,Object.defineProperty(e,"__esModule",{value:!0})}));