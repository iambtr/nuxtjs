webpackJsonp([0],{342:function(t,e,n){var s,i;n(377),s=n(370);var r=n(391);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-15f50eb8",t.exports=s},349:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),t.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(t)}}},350:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){var e=t.target.getAttribute("href");e&&"/"===e[0]&&(t.preventDefault(),this.$router.push(e))},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var t=0;t<this._links.length;t++)this._links[t].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var t=0;t<this._links.length;t++)this._links[t].removeEventListener("click",this.navigate,!1);this._links=[]}}}},351:function(t,e){},352:function(t,e,n){var s,i;n(351),s=n(349);var r=n(354);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},353:function(t,e,n){var s,i;s=n(350);var r=n(355);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"carbonads",staticClass:"ad"})},staticRenderFns:[]}},355:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},360:function(t,e,n){var s,i;n(380),s=n(364);var r=n(400);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-4c658acc",t.exports=s},362:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),i=n.n(s),r=n(42),a=n.n(r),o=n(360),c=n.n(o),u={};e.default={props:{example:{type:String,required:!0}},data:function(){return{hidden:!1,currentFile:null,content:""}},computed:{parseContent:function(){return this.content?this.isImage?"https://github.com/nuxtjs/nuxt/nuxt.js/blob/master/"+this.currentFile.path+"?raw=true":this.content:""},breadcrumb:function(){return this.currentFile.path.replace("examples/"+this.example,"")},isImage:function(){return!(!this.currentFile||!/[^\s]+\.(jpe?g|png|gif|bmp)$/i.test(this.currentFile.path))},isMobile:function(){return window.innerWidth<576}},methods:{changeFile:function(t){var e=this;this.currentFile=t,this.content=u[t.path],this.isMobile&&(this.hidden=!0),this.content||i()({url:"https://api.github.com/repos/nuxtjs/nuxt/nuxt.js/contents/"+t.path,headers:{Authorization:"token 4aa6bcf919d238504e7db59a66d32e78281c0ad3"}}).then(function(n){var s=window.atob(n.data.content);s=a.a.highlightAuto(s).value,u[t.path]=s,e.content=u[t.path]})}},components:{RecursiveList:c.a}}},364:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),i=n.n(s);e.default={name:"recursive-list",props:{path:{type:String,required:!0}},beforeCreate:function(){this.$options.components.RecursiveList=n(360)},mounted:function(){var t=this;return i()({url:"https://api.github.com/repos/nuxtjs/nuxt/nuxt.js/contents/"+this.path,headers:{Authorization:"token 4aa6bcf919d238504e7db59a66d32e78281c0ad3"}}).then(function(e){if(e.data.sort(function(t,e){if(t.type===e.type){var n=t.name.toUpperCase(),s=e.name.toUpperCase();return n<s?-1:n>s?1:0}return"dir"===t.type?-1:1}),!t.currentFile){var n=e.data.find(function(t){return"package.json"===t.name});n&&t.changeFile(n)}t.files=e.data.filter(function(t){return"readme.md"!==t.name.toLowerCase()})})},data:function(){return{files:[]}},computed:{currentFile:function(){return this.$parent.currentFile}},methods:{linkClass:function(t){var e="RecursiveList__Item__Link ";return e+=this.currentFile&&this.currentFile.path===t.path?"RecursiveList__Item__Link--active":"RecursiveList__Item__Link--"+t.type},changeFile:function(t){"file"!==t.type||this.currentFile&&this.currentFile.path===t.path||this.$emit("changeFile",t)}}}},370:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(72),i=n.n(s),r=n(71),a=n.n(r),o=n(26),c=n.n(o),u=n(352),l=n.n(u),d=n(388),f=n.n(d),p=n(353),_=n.n(p);e.default={data:function(t){var e=this,n=t.route,s=t.store,r=t.error,o=t.isDev;return a()(i.a.mark(function t(){var a,u,l,d;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={attrs:{},body:"",isDev:o},u=n.params.slug||"hello-world",l="/"+s.state.lang.iso+"/examples/"+u,d=void 0,t.prev=4,t.next=7,c.a.get(s.state.apiURI+l);case 7:d=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),404===t.t0.response.status){t.next=14;break}return t.abrupt("return",r({statusCode:500,message:s.state.lang.text.an_error_occured}));case 14:return t.abrupt("return",r({statusCode:404,message:s.state.lang.text.api_page_not_found}));case 15:return a.attrs=d.data.attrs,a.body=d.data.body,a.attrs.title||console.error("["+l+"] "+s.state.lang.text.please_define_title+"."),a.attrs.description||console.error("["+l+"] "+s.state.lang.text.please_define_description+"."),t.abrupt("return",a);case 20:case"end":return t.stop()}},t,e,[[4,10]])}))()},computed:{downloadLink:function(){return"https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxtjs/nuxt/nuxt.js/tree/master/examples/"+this.attrs.github}},scrollToTop:!0,head:function(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{CarbonAds:l.a,NuxtFilesTree:f.a,HtmlParser:_.a}}},377:function(t,e){},380:function(t,e){},384:function(t,e){},388:function(t,e,n){var s,i;n(384),s=n(362);var r=n(406);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,i._scopeId="data-v-df2e5dde",t.exports=s},391:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isDev||"en"!==t.$store.state._lang?t._e():n("carbon-ads",{key:t.$route.params.slug}),n("h1",[t._v(t._s(t.attrs.title))]),n("blockquote",[n("p",[t._v(t._s(t.attrs.description))])]),t.attrs.youtube?n("div",{staticClass:"video"},[n("iframe",{staticClass:"youtube",attrs:{src:t.attrs.youtube,frameborder:"0",allowfullscreen:""}})],1):t._e(),n("h2",[t._v(t._s(t.$store.state.lang.examples.source_code))]),n("nuxt-files-tree",{key:t.attrs.github,attrs:{example:t.attrs.github}}),n("div",[t.attrs.livedemo?n("a",{staticClass:"button",attrs:{href:t.attrs.livedemo,target:"_blank"}},[t._m(0),t._v("\n      "+t._s(t.$store.state.lang.links.live_demo)+"\n    ")]):t._e(),t.attrs.liveedit?n("a",{staticClass:"button",attrs:{href:t.attrs.liveedit,target:"_blank"}},[t._m(1),t._v("\n      "+t._s(t.$store.state.lang.links.live_edit)+"\n    ")]):t._e(),n("a",{staticClass:"button",attrs:{href:t.downloadLink,target:"_blank"}},[t._m(2),t._v("\n      "+t._s(t.$store.state.lang.links.download)+"\n    ")]),t.attrs.documentation?n("nuxt-link",{staticClass:"button",attrs:{to:t.attrs.documentation}},[t._v("\n      "+t._s(t.$store.state.lang.links.documentation)+"\n    ")]):t._e()],1),n("html-parser",{attrs:{content:t.body}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("div",{staticClass:"icon eye"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("div",{staticClass:"icon edit"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("div",{staticClass:"icon download"})])}]}},400:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"RecursiveList"},t._l(t.files,function(e){return n("li",{staticClass:"RecursiveList__Item"},[n("div",{class:t.linkClass(e),on:{click:function(n){t.changeFile(e)}}},[n("div",{staticClass:"Icon"},[n("div",{staticClass:"icon",class:{folder:"dir"===e.type,file:"file"===e.type}})]),t._v("\n      "+t._s(e.name)+"\n    ")]),"dir"===e.type?n("recursive-list",{attrs:{path:e.path},on:{changeFile:t.changeFile}}):t._e()],1)}))},staticRenderFns:[]}},406:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"FilesTree clearfix"},[n("div",{staticClass:"FilesTree__Left",class:{"FilesTree__Left--hidden":t.hidden}},[n("div",{staticClass:"FilesTree__Left__Header"},[n("div",{staticClass:"Icon",on:{click:function(e){t.hidden=!0}}},[n("div",{staticClass:"icon remove"})]),t._v("\n      "+t._s(t.$store.state.lang.text.example_file)+"\n    ")]),n("div",{staticClass:"FilesTree__Left__Body"},[n("recursive-list",{attrs:{path:"examples/"+t.example},on:{changeFile:t.changeFile}})],1)]),t.currentFile?n("div",{staticClass:"FilesTree__Right",class:{"FilesTree__Right--hidden":t.hidden}},[n("div",{staticClass:"FilesTree__Right__Header"},[t.hidden?n("div",{staticClass:"Icon",on:{click:function(e){t.hidden=!1}}},[n("div",{staticClass:"icon menu"})]):t._e(),t._v("\n      "+t._s(t.breadcrumb)+"\n    ")]),n("div",{staticClass:"FilesTree__Right__Body"},[t.parseContent?[t.isImage?n("img",{staticClass:"FilesTree__Right__Body__Image",attrs:{src:t.parseContent,alt:"Image"}}):n("pre",{staticClass:"FilesTree__Right__Body__File"},[n("code",{domProps:{innerHTML:t._s(t.parseContent)}})])]:n("div",{staticClass:"FilesTree__Right__Body__Wait"},[t._v(t._s(t.$store.state.lang.text.please_wait))])],2)]):t._e()])},staticRenderFns:[]}}});