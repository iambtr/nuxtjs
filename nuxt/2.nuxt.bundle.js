webpackJsonp([2],{347:function(e,t,n){var s,r;s=n(375);var a=n(392);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),e.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(e)}}},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(e){var t=e.target.getAttribute("href");t&&"/"===t[0]&&(e.preventDefault(),this.$router.push(t))},contentUpdated:function(){var e=this;this.removeListeners(),this.$nextTick(function(){e.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var e=0;e<this._links.length;e++)this._links[e].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var e=0;e<this._links.length;e++)this._links[e].removeEventListener("click",this.navigate,!1);this._links=[]}}}},351:function(e,t){},352:function(e,t,n){var s,r;n(351),s=n(349);var a=n(354);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},353:function(e,t,n){var s,r;s=n(350);var a=n(355);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},354:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"carbonads",staticClass:"ad"})},staticRenderFns:[]}},355:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{domProps:{innerHTML:e._s(e.content)}})},staticRenderFns:[]}},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(43),r=n.n(s),a=n(26),i=n.n(a),o=n(352),c=n.n(o),d=n(353),u=n.n(d);t.default={data:function e(t){var n=t.isDev,e={releases:[],isDev:n};return i()({url:"https://api.github.com/repos/nuxt/nuxt.js/releases",headers:{Authorization:"token 4aa6bcf919d238504e7db59a66d32e78281c0ad3"}}).then(function(t){return e.releases=t.data.filter(function(e){return!e.draft}).map(function(e){return{name:e.name,date:e.published_at,body:r()(e.body)}}),e})},head:function(){return{title:"Release Notes",titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:"Nuxt.js release notes from Github."}]}},components:{CarbonAds:c.a,HtmlParser:u.a}}},392:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isDev||"en"!==e.$store.state._lang?e._e():n("carbon-ads",{key:e.$route.params.slug}),n("h1",[e._v(e._s(e.$store.state.lang.guide.release_notes))]),e._l(e.releases,function(t){return n("div",[n("h2",{attrs:{id:t.name}},[e._v(e._s(t.name))]),n("html-parser",{staticClass:"Release__Content",domProps:{innerHTML:e._s(t.body)}})],1)})],2)},staticRenderFns:[]}}});