webpackJsonp([3],{346:function(t,e,n){var s,r;s=n(374);var a=n(395);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=s},349:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),t.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(t)}}},350:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){var e=t.target.getAttribute("href");e&&"/"===e[0]&&(t.preventDefault(),this.$router.push(e))},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var t=0;t<this._links.length;t++)this._links[t].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var t=0;t<this._links.length;t++)this._links[t].removeEventListener("click",this.navigate,!1);this._links=[]}}}},351:function(t,e){},352:function(t,e,n){var s,r;n(351),s=n(349);var a=n(354);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=s},353:function(t,e,n){var s,r;s=n(350);var a=n(355);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=s},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"carbonads",staticClass:"ad"})},staticRenderFns:[]}},355:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},374:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(72),r=n.n(s),a=n(71),o=n.n(a),i=n(26),c=n.n(i),u=n(352),d=n.n(u),l=n(353),f=n.n(l);e.default={data:function(t){var e=this,n=t.route,s=t.store,a=t.error,i=t.isDev;return o()(r.a.mark(function t(){var o,u,d,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={attrs:{},body:"",docLink:"",isDev:i},u=n.params.slug||"index",d="/"+s.state.lang.iso+"/guide/"+u,l=void 0,t.prev=4,t.next=7,c.a.get(s.state.apiURI+d);case 7:l=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),404===t.t0.response.status){t.next=14;break}return t.abrupt("return",a({statusCode:500,message:s.state.lang.text.an_error_occured}));case 14:return t.abrupt("return",a({statusCode:404,message:s.state.lang.text.api_page_not_found}));case 15:return o.attrs=l.data.attrs,o.body=l.data.body,o.docLink="https://github.com/nuxtjs/nuxt/docs/blob/master"+d+".md","ru"===s.state.lang.iso?o.docLink="https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru"+d+".md":"cn"===s.state.lang.iso&&(o.docLink="https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev"+d+".md"),o.attrs.title||console.error("["+d+"] "+s.state.lang.text.please_define_title+"."),o.attrs.description||console.error("["+d+"] "+s.state.lang.text.please_define_description+"."),t.abrupt("return",o);case 22:case"end":return t.stop()}},t,e,[[4,10]])}))()},scrollToTop:!0,head:function(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{CarbonAds:d.a,HtmlParser:f.a}}},395:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isDev||"en"!==t.$store.state._lang?t._e():n("carbon-ads",{key:t.$route.params.slug}),n("h1",[t._v(t._s(t.attrs.title))]),t.attrs.youtube?n("div",{staticClass:"video"},[n("iframe",{staticClass:"youtube",attrs:{src:t.attrs.youtube,frameborder:"0",allowfullscreen:""}})],1):t._e(),n("html-parser",{attrs:{content:t.body}}),n("p",{staticClass:"contribute"},[t._v(t._s(t.$store.state.lang.guide.contribute)+" "),n("a",{attrs:{href:t.docLink,target:"_blank"}},[t._v(t._s(t.$store.state.lang.guide.edit_on_github))])])],1)},staticRenderFns:[]}}});