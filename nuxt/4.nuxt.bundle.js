webpackJsonp([4],{344:function(t,e,n){var r,s;r=n(372);var a=n(404);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},349:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),t.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(t)}}},350:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){var e=t.target.getAttribute("href");e&&"/"===e[0]&&(t.preventDefault(),this.$router.push(e))},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var t=0;t<this._links.length;t++)this._links[t].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var t=0;t<this._links.length;t++)this._links[t].removeEventListener("click",this.navigate,!1);this._links=[]}}}},351:function(t,e){},352:function(t,e,n){var r,s;n(351),r=n(349);var a=n(354);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},353:function(t,e,n){var r,s;r=n(350);var a=n(355);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"carbonads",staticClass:"ad"})},staticRenderFns:[]}},355:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},372:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(72),s=n.n(r),a=n(71),o=n.n(a),i=n(26),c=n.n(i),d=n(352),u=n.n(d),l=n(353),f=n.n(l);e.default={data:function(t){var e=this,n=t.route,r=t.store,a=t.error,i=t.isDev;return o()(s.a.mark(function t(){var o,d,u,l;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={attrs:{},body:"",docLink:"",isDev:i},d=n.params.slug||"external-resources",u="/"+r.state.lang.iso+"/faq/"+d,l=void 0,t.prev=4,t.next=7,c.a.get(r.state.apiURI+u);case 7:l=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),404===t.t0.response.status){t.next=14;break}return t.abrupt("return",a({statusCode:500,message:r.state.lang.text.an_error_occured}));case 14:return t.abrupt("return",a({statusCode:404,message:r.state.lang.text.api_page_not_found}));case 15:return o.attrs=l.data.attrs,o.body=l.data.body,o.docLink="https://github.com/nuxtjs/nuxt/docs/blob/master"+u+".md","ru"===r.state.lang.iso?o.docLink="https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru"+u+".md":"cn"===r.state.lang.iso&&(o.docLink="https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev"+u+".md"),o.attrs.title||console.error("["+u+"] "+r.state.lang.text.please_define_title+"."),o.attrs.description||console.error("["+u+"] "+r.state.lang.text.please_define_description+"."),t.abrupt("return",o);case 22:case"end":return t.stop()}},t,e,[[4,10]])}))()},scrollToTop:!0,head:function(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{HtmlParser:f.a,CarbonAds:u.a}}},404:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isDev||"en"!==t.$store.state._lang?t._e():n("carbon-ads",{key:t.$route.params.slug}),n("html-parser",{attrs:{content:t.body}}),n("p",{staticClass:"contribute"},[t._v(t._s(t.$store.state.lang.guide.contribute)+" "),n("a",{attrs:{href:t.docLink,target:"_blank"}},[t._v(t._s(t.$store.state.lang.guide.edit_on_github))])])],1)},staticRenderFns:[]}}});