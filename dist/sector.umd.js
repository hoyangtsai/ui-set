!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).Sector={})}(this,(function(e){"use strict";var n={name:"sector",props:{title:{type:String,default:""}},data:function(){return{}},mounted:function(){}};function t(e,n,t,o,s,i,r,d,a,l){"boolean"!=typeof r&&(a=d,d=r,r=!1);const c="function"==typeof t?t.options:t;let A;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),o&&(c._scopeId=o),i?(A=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=A):n&&(A=r?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),A)if(c.functional){const e=c.render;c.render=function(n,t){return A.call(t),e(n,t)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,A):[A]}return t}const o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,n)=>function(e,n){const t=o?n.media||"default":e,s=r[t]||(r[t]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",n.media&&s.element.setAttribute("media",n.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(t),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,n=document.createTextNode(t),o=s.element.childNodes;o[e]&&s.element.removeChild(o[e]),o.length?s.element.insertBefore(n,o[e]):s.element.appendChild(n)}}}(e,n)}let i;const r={};var d=n,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"sector"},[e.title?t("div",{staticClass:"sector__header"},[t("div",{staticClass:"sector__header--title"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"sector__header--right-cont"},[e._t("header-right-cont")],2)]):e._e(),e._v(" "),t("div",{staticClass:"sector__body"},[e._t("default")],2)])};a._withStripped=!0;var l=t({render:a,staticRenderFns:[]},(function(e){e&&e("data-v-75900544_0",{source:".sector[data-v-75900544] {\n  background-color: #FFF;\n  padding: 1.25rem 2rem 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.sector__header[data-v-75900544] {\n  padding: 0.35rem 0 0.8rem;\n  display: flex;\n  align-items: center;\n}\n.sector__header--title[data-v-75900544] {\n  font-size: 1.8rem;\n  color: #000000;\n  line-height: 2.7rem;\n  font-weight: 500;\n  flex: 1;\n}\n.sector__body[data-v-75900544] {\n  padding-bottom: 2rem;\n}\n\n/*# sourceMappingURL=sector.vue.map */",map:{version:3,sources:["/Users/hoyang/FiT/lab/ui-set/src/mobile/sector/sector.vue","sector.vue"],names:[],mappings:"AAmCA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,sBAAA;AClCA;ADoCA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;AClCA;ADoCA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,OAAA;AClCA;ADsCA;EACA,oBAAA;ACpCA;;AAEA,qCAAqC",file:"sector.vue",sourcesContent:['<template>\n  <div class="sector">\n    <div v-if="title" class="sector__header">\n        <div class="sector__header--title">{{ title }}</div>\n        <div class="sector__header--right-cont">\n            <slot name="header-right-cont"></slot>\n        </div>\n    </div>\n    <div class="sector__body">\n        <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n    name: \'sector\',\n    props: {\n        title: {\n            type: String,\n            default: \'\',\n        },\n    },\n    data: function() {\n        return {\n\n        }\n    },\n    mounted: function() {\n\n    },\n}\n<\/script>\n\n<style lang="scss" scoped>\n.sector {\n    background-color: #FFF;\n    padding: 1.25rem 2rem 0;\n    width: 100%;\n    box-sizing: border-box;\n\n    &__header {\n        padding: 0.35rem 0 0.8rem;\n        display: flex;\n        align-items: center;\n\n        &--title {\n            font-size: 1.8rem;\n            color: #000000;\n            line-height: 2.7rem;\n            font-weight: 500;\n            flex: 1;\n        }\n    }\n\n    &__body {\n        padding-bottom: 2rem;\n    }\n}\n</style>',".sector {\n  background-color: #FFF;\n  padding: 1.25rem 2rem 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n.sector__header {\n  padding: 0.35rem 0 0.8rem;\n  display: flex;\n  align-items: center;\n}\n.sector__header--title {\n  font-size: 1.8rem;\n  color: #000000;\n  line-height: 2.7rem;\n  font-weight: 500;\n  flex: 1;\n}\n.sector__body {\n  padding-bottom: 2rem;\n}\n\n/*# sourceMappingURL=sector.vue.map */"]},media:void 0})}),d,"data-v-75900544",!1,void 0,!1,s,void 0,void 0),c=function(e){c.installed||(c.installed=!0,e.component(l.name,l))},A={install:c},m=null;"undefined"!=typeof window?m=window.Vue:"undefined"!=typeof global&&(m=global.Vue),m&&m.use(A),e.default=l,Object.defineProperty(e,"__esModule",{value:!0})}));