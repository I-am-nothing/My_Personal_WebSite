(window.webpackJsonp=window.webpackJsonp||[]).push([[8,997],{478:function(t,e,a){},479:function(t,e,a){},480:function(t,e,a){},481:function(t,e,a){},482:function(t,e,a){"use strict";a(478)},483:function(t,e,a){},485:function(t,e,a){"use strict";a(87);var o=a(159),n=a(477),i=a(31),r=Object(o.b)({components:{RecoIcon:n.b},props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},setup:function(t,e){var a=Object(i.a)();return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"},goTags:function(t){a.$route.path!=="/tag/".concat(t,"/")&&a.$router.push({path:"/tag/".concat(t,"/")})},formatDateValue:function(t){return new Intl.DateTimeFormat(a.$lang).format(new Date(t))}}}}),s=(a(486),a(13)),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author?a("reco-icon",{attrs:{icon:"reco-account"}},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("reco-icon",{attrs:{icon:"reco-date"}},[a("span",[t._v(t._s(t.formatDateValue(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("reco-icon",{attrs:{icon:"reco-eye"}},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("reco-icon",{staticClass:"tags",attrs:{icon:"reco-tag"}},t._l(t.pageInfo.frontmatter.tags,(function(e,o){return a("span",{key:o,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return a.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()],1)}),[],!1,null,"f875f3fc",null);e.a=c.exports},486:function(t,e,a){"use strict";a(479)},487:function(t,e,a){"use strict";a(480)},488:function(t,e,a){"use strict";a(481)},489:function(t,e,a){"use strict";a(47);var o=a(159),n=(a(262),a(261),{methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}),i=a(477),r=a(485),s=Object(o.b)({components:{PageInfo:r.a,RecoIcon:i.b},props:["item","currentPage","currentTag"]}),c=(a(487),a(13)),g=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-item",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?a("reco-icon",{attrs:{icon:"reco-sticky"}}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("reco-icon",{attrs:{icon:"reco-lock"}}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"ff2c8be0",null).exports,u=a(31),l=Object(o.b)({mixins:[n],components:{NoteAbstractItem:g},props:["data","currentTag"],setup:function(t,e){var a=Object(u.a)(),n=Object(o.h)(t).data,i=Object(o.g)(1),r=Object(o.a)((function(){var t=(i.value-1)*a.$perPage,e=i.value*a.$perPage;return n.value.slice(t,e)}));return Object(o.d)((function(){i.value=a._getStoragePage()||1})),{currentPage:i,currentPageData:r,getCurrentPage:function(t){i.value=t,a._setStoragePage(t),e.emit("paginationChange",t)}}},watch:{$route:function(){this.currentPage=this._getStoragePage()||1}}}),h=(a(488),Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},[t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),t._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:t.data.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],2)}),[],!1,null,"6cc0658a",null));e.a=h.exports},490:function(t,e,a){a(87),t.exports={plugins:[["@vuepress/last-updated",{transformer:function(t,e){return new Date(t).toLocaleDateString()}}],["sitemap",{hostname:"https://i-am-nothing.github.io/"}]],linkFix:{"/zh-TW/categories/Diary/":"/zh-TW/categories/日記/","/zh-TW/categories/Vue-Press Blog/":"/zh-TW/categories/Vue-Press部落格/","/zh-TW/categories/About-Nothing/":"/zh-TW/categories/關於 Nothing/","/zh-TW/categories/Taiwan-Transportation Tracking App/":"/zh-TW/categories/台灣大眾運輸追蹤APP/","/categories/日記/":"/categories/Diary/","/categories/Vue-Press部落格/":"/categories/Vue-Press Blog/","/categories/關於 Nothing/":"/categories/About-Nothing/","/categories/台灣大眾運輸追蹤APP/":"/categories/Taiwan-Transportation Tracking App/","/zh-TW/tag/Summary/":"/zh-TW/tag/摘要/","/tag/摘要/":"/tag/Summary/","/categories/實用的“庫”/":"/categories/Useful Repositories/","/zh-TW/categories/Useful Repositories/":"/zh-TW/categories/實用的“庫”/"},locales:{"/":{lang:"en-US",title:"I-am-nothing",description:"I believe I can't touch the sky ~~~"},"/zh-TW/":{lang:"zh-TW",title:"I-am-nothing",description:"我相信我碰不到天空～～～"}},thirdPartyComponents:{fontAwesomeIcons:{brands:["github"]}},base:"/",dest:"../docs",head:[["script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-170VJJB3ZL"}],["script",{},["window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-170VJJB3ZL');"]],["link",{rel:"icon",href:"/hero.png"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no"}]],theme:"reco",mode:"dark",themeConfig:{locales:{"/":{selectText:"Languages",label:"English",editLinkText:"Edit this page on GitHub",lastUpdated:"Last Updated Time",serviceWorker:{updatePopup:{message:"New content is available.",buttonText:"Refresh"}},algolia:{},nav:[{text:"Home",link:"/",icon:"reco-home"},{text:"TimeLine",link:"/timeline/",icon:"reco-date"},{text:"Tags",link:"/tag/",icon:"reco-tag"},{text:"Categories",icon:"reco-category",items:[{text:"Vue-Press Blog",link:"/categories/Vue-Press%20Blog/"},{text:"Taiwan-Transportation Tracking App",link:"/categories/Taiwan-Transportation%20Tracking%20App/"},{text:"Diary",link:"/categories/Diary/"},{text:"Useful Repositories",link:"/categories/Useful%20Repositories/"}]},{text:"Docs",icon:"reco-message",items:[{text:"About Nothing",link:"/docs/about-nothing/"},{text:"History Of Love",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}]}],sidebar:{"/docs/":[{title:"About Nothing",collapsable:!0,children:[{title:"Nothing",path:"about-nothing/"},{title:"Work Experience",path:"about-nothing/work"},{title:"Side Project",path:"about-nothing/side-project"},{title:"Autobiography",path:"about-nothing/autobiography"},{title:"Competition",path:"about-nothing/competition"},{title:"Club Participation",path:"about-nothing/club"},{title:"Certification",path:"about-nothing/certification"},{title:"WorkShop Experience",path:"about-nothing/workshop"},{title:"Special Experience",path:"about-nothing/special"}]}]}},"/zh-TW/":{selectText:"Languages",label:"中文-繁體",editLinkText:"在 Github 上編輯此頁",lastUpdated:"最後更新時間 ",serviceWorker:{updatePopup:{message:"發現新內容",buttonText:"刷新"}},algolia:{},nav:[{text:"首頁",link:"/zh-TW/",icon:"reco-home"},{text:"時間軸",link:"/zh-TW/timeline/",icon:"reco-date"},{text:"標籤",link:"/zh-TW/tag/",icon:"reco-tag"},{text:"類別",icon:"reco-category",items:[{text:"Vue-Press部落格",link:"/zh-TW/categories/Vue-Press%E9%83%A8%E8%90%BD%E6%A0%BC/"},{text:"台灣大眾運輸追蹤APP",link:"/zh-TW/categories/台灣大眾運輸追蹤APP/"},{text:"日記",link:"/zh-TW/categories/日記/"},{text:"實用的“庫”",link:"/zh-TW/categories/實用的“庫”/"}]},{text:"文檔",icon:"reco-message",items:[{text:"關於 Nothing",link:"/zh-TW/docs/about-nothing/"},{text:"情史",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}]}],sidebar:{"/zh-TW/docs/":[{title:"關於 Nothing",path:"/zh-TW/docs/about-nothing/",collapsable:!0,children:[{title:"Nothing",path:"about-nothing/"},{title:"工作經驗",path:"about-nothing/work"},{title:"作品集",path:"about-nothing/side-project"},{title:"自傳",path:"about-nothing/autobiography"},{title:"競賽經歷",path:"about-nothing/competition"},{title:"社團參與",path:"about-nothing/club"},{title:"檢定證照",path:"about-nothing/certification"},{title:"研習經驗",path:"about-nothing/workshop"},{title:"特殊經歷",path:"about-nothing/special"}]}]}}},type:"blog",blogConfig:{socialLinks:[{link:"https://github.com/I-am-nothing",icon:"reco-github"},{link:"https://www.linkedin.com/in/nothing-chang-374147227/",icon:"reco-linkedin"},{link:"mailto:nothingchang1118@gmail.com",icon:"reco-mail"}]},friendLink:[{logo:"https://urloser404.github.io/hero.jpg",title:"URLoser404",desc:"URLoser404's personal website",link:"https://urloser404.github.io/"},{logo:"https://mr6915tri8513.github.io/home_page/avatar.png",title:"Mr6915tri8513",desc:"Mr6915tri8513's personal website",link:"https://mr6915tri8513.github.io/"},{logo:"https://docat0209.github.io/page.png",title:"Docat0209",desc:"Docat0219's personal website",link:"https://docat0209.github.io/"},{logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmKE_FCpSYHZJz0k_k1FwFI-GHXWaJTXymQ&usqp=CAU",title:"Rick Astley",desc:"Never gonna give you up ~~~",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}],logo:"/hero.png",search:!0,searchMaxSuggestions:10,author:"I-am-nothing",authorAvatar:"/hero2.png",record:null,startYear:"2022",noFoundPageByTencent:!1,subSidebar:"auto",sidebarDepth:1,displayAllHeaders:!1},markdown:{lineNumbers:!0}}},492:function(t,e,a){"use strict";a(483)},521:function(t,e,a){},566:function(t,e,a){"use strict";a(521)},585:function(t,e,a){"use strict";a.r(e);a(88);var o=a(159),n=a(496),i=a(489),r=a(477),s=a(84),c=a(117),g=a(491),u=a(31),l=Object(o.b)({mixins:[g.a],components:{Common:n.a,NoteAbstract:i.a,ModuleTransition:r.a},setup:function(t,e){var a=Object(u.a)();return{posts:Object(o.a)((function(){var t=a.$currentCategories.pages;return t=Object(s.a)(t),Object(s.c)(t),t})),title:Object(o.a)((function(){return a.$currentCategories.key})),getCurrentTag:function(t){e.emit("currentTag",t)},paginationChange:function(t){setTimeout((function(){window.scrollTo(0,0)}),100)},getOneColor:c.b}}}),h=(a(482),a(492),a(566),a(13)),p=Object(h.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{staticClass:"categories-wrapper",attrs:{sidebar:!1}},[a("ModuleTransition",[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"category-wrapper"},t._l(t.$categoriesList,(function(e,o){return a("li",{directives:[{name:"show",rawName:"v-show",value:e.pages&&e.pages.length>0,expression:"item.pages && item.pages.length > 0"}],key:o,staticClass:"category-item",class:t.title==e.name?"active":""},[a("router-link",{attrs:{to:e.path}},[a("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("note-abstract",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"list",attrs:{data:t.posts},on:{paginationChange:t.paginationChange}})],1)],1)}),[],!1,null,"5e290db6",null);e.default=p.exports}}]);