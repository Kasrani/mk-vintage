(function(t){function e(e){for(var n,i,u=e[0],o=e[1],c=e[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==s[u]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s={app:0},r=[];function u(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d210c47":"678856a9","chunk-2d216460":"ac65066b","chunk-2d22c114":"1c86d14e","chunk-cae93800":"fc334f54","chunk-1ed2f030":"523ff26e","chunk-42f1d9cf":"809a1533"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-cae93800":1,"chunk-1ed2f030":1,"chunk-42f1d9cf":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d210c47":"31d6cfe0","chunk-2d216460":"31d6cfe0","chunk-2d22c114":"31d6cfe0","chunk-cae93800":"5f2764fb","chunk-1ed2f030":"02561d5f","chunk-42f1d9cf":"8378c517"}[t]+".css",s=o.p+n,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var c=r[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===n||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],m.parentNode.removeChild(m),a(r)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=r);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=u(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04ee":function(t,e,a){},"2f20":function(t,e,a){"use strict";a("3570")},3570:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{"mobile-breakpoint":768,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-img",{staticClass:"pa-4 pt-7",attrs:{src:"images/bg-home.jpg",height:"/todo"===t.$route.path?"200":"150",gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},[a("v-avatar",{staticClass:"mb-2",attrs:{size:"50"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"Mourad"}})]),a("div",{staticClass:"white--text text-sibtitle-1 font-weight-bold"},[t._v("Mourad")]),a("div",{staticClass:"white--text text-sibtitle-1"},[t._v("Kasrani")])],1),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"#F50057",dark:"",prominent:"",height:"/todo"===t.$route.path?"200":"150",src:"images/bg-home.jpg","fade-img-on-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.3), rgba(25,32,72,.7)"}},"v-img",n,!1))]}}])},[a("v-container",{staticClass:"header-container pa-0"},[a("v-row",[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer"),a("search")],1),a("v-row",[a("v-toolbar-title",{staticClass:"text-h4 ml-3"},[t._v(t._s(t.$store.state.appTitle))])],1),a("v-row",[a("live-data-time")],1),"/todo"===t.$route.path?a("v-row",[a("filed-add-task")],1):t._e()],1)],1),a("v-main",[a("router-view"),a("snackbar")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"expanding-search mt-3",class:{closed:t.searchClosed&&!t.$store.state.search},attrs:{value:t.$store.state.search,placeholder:"Rechercher..","prepend-inner-icon":"mdi-magnify",Filled:"",dense:"",clearable:""},on:{input:function(e){return t.$store.commit("setSearch",e)},focus:function(e){t.searchClosed=!1},blur:function(e){t.searchClosed=!0}}})},u=[],o={data:function(){return{searchClosed:!0}}},c=o,l=(a("2f20"),a("2877")),d=a("6544"),m=a.n(d),f=a("8654"),p=Object(l["a"])(c,r,u,!1,null,null,null),h=p.exports;m()(p,{VTextField:f["a"]});var v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-subtitle-1 ml-3"},[t._v(" "+t._s(t.date)+" ")])},b=[],k=a("b166"),g={data:function(){return{date:""}},methods:{getDate:function(){this.date=Object(k["a"])(new Date,"d MMMM, H:mm:ss"),setTimeout(this.getDate,1e3)}},mounted:function(){this.getDate()}},T=g,w=Object(l["a"])(T,v,b,!1,null,null,null),_=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"pa-3",attrs:{outlined:"",label:"Ajouter une tache","hide-details":"",clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-icon",{attrs:{disabled:t.newTaskTitleInvalid},on:{click:t.addTask}},[t._v(" mdi-plus ")])]},proxy:!0}]),model:{value:t.newTaskTitle,callback:function(e){t.newTaskTitle=e},expression:"newTaskTitle"}})},C=[],y={data:function(){return{newTaskTitle:""}},computed:{newTaskTitleInvalid:function(){return!this.newTaskTitle}},methods:{addTask:function(){this.newTaskTitleInvalid||(this.$store.dispatch("addTask",this.newTaskTitle),this.newTaskTitle="")}}},q=y,S=a("132d"),j=Object(l["a"])(q,x,C,!1,null,null,null),V=j.exports;m()(j,{VIcon:S["a"],VTextField:f["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){return t.$store.commit("hideSnackbar")}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.$store.state.snackbar.show,callback:function(e){t.$set(t.$store.state.snackbar,"show",e)},expression:"$store.state.snackbar.show"}},[t._v(" "+t._s(t.$store.state.snackbar.text)+" ")])},D=[],O={},$=O,N=a("8336"),P=a("2db4"),L=Object(l["a"])($,E,D,!1,null,null,null),I=L.exports;m()(L,{VBtn:N["a"],VSnackbar:P["a"]});var A={data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home",to:"/"},{title:"Todo",icon:"mdi-format-list-checks",to:"/todo"},{title:"Services",icon:"mdi-toolbox",to:"/services"},{title:"Contact",icon:"mdi-phone",to:"/contact"},{title:"Signin",icon:"mdi-login",to:"/sign-in"},{title:"Join",icon:"mdi-account-box",to:"/join"}]}},components:{Search:h,"live-data-time":_,"filed-add-task":V,Snackbar:I},mounted:function(){this.$store.dispatch("getTasks")}},M=A,H=(a("afd5"),a("7496")),B=a("40dc"),F=a("5bc1"),J=a("8212"),K=a("a523"),R=a("adda"),U=a("8860"),G=a("da13"),Q=a("5d23"),z=a("34c3"),W=a("f6c4"),X=a("f774"),Y=a("0fd9"),Z=a("2fa4"),tt=a("2a7f"),et=Object(l["a"])(M,i,s,!1,null,"6be328c8",null),at=et.exports;m()(et,{VApp:H["a"],VAppBar:B["a"],VAppBarNavIcon:F["a"],VAvatar:J["a"],VContainer:K["a"],VIcon:S["a"],VImg:R["a"],VList:U["a"],VListItem:G["a"],VListItemContent:Q["b"],VListItemIcon:z["a"],VListItemTitle:Q["c"],VMain:W["a"],VNavigationDrawer:X["a"],VRow:Y["a"],VSpacer:Z["a"],VToolbarTitle:tt["a"]});a("ac1f"),a("841c"),a("4de4"),a("caad"),a("2532");var nt=a("2f62"),it=a("af0d"),st=new it["a"]("db");st.config.debug=!1,n["a"].use(nt["a"]);var rt=new nt["a"].Store({state:{appTitle:"mk-production",search:null,tasks:[],snackbar:{show:!1,text:""},sorting:!1},mutations:{setSearch:function(t,e){t.search=e},addTask:function(t,e){t.tasks.push(e)},doneTask:function(t,e){var a=t.tasks.filter((function(t){return t.id===e}))[0];a.done=!a.done},deleteTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e}))},updateTaskTitle:function(t,e){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.title=e.title},updateTaskDueDate:function(t,e){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.dueDate=e.dueDate},setTasks:function(t,e){t.tasks=e},showSnackbar:function(t,e){var a=0;t.snackbar.show&&(t.snackbar.show=!1,a=300),setTimeout((function(){t.snackbar.show=!0,t.snackbar.text=e}),a)},hideSnackbar:function(t){t.snackbar.show=!1},toggleSorting:function(t){t.sorting=!t.sorting}},actions:{addTask:function(t,e){var a=t.commit,n={id:Date.now(),title:e,done:!1,dueDate:null};st.collection("tasks").add(n).then((function(){a("addTask",n),a("showSnackbar","Tache ajoutée !")}))},doneTask:function(t,e){var a=t.state,n=t.commit,i=a.tasks.filter((function(t){return t.id===e}))[0];st.collection("tasks").doc({id:e}).update({done:!i.done}).then((function(){n("doneTask",e)}))},deleteTask:function(t,e){var a=t.commit;st.collection("tasks").doc({id:e}).delete().then((function(){a("deleteTask",e),a("showSnackbar","Tache supprimée !")}))},updateTaskTitle:function(t,e){var a=t.commit;st.collection("tasks").doc({id:e.id}).update({title:e.title}).then((function(){a("updateTaskTitle",e),a("showSnackbar","Tache à jour !")}))},updateTaskDueDate:function(t,e){var a=t.commit;st.collection("tasks").doc({id:e.id}).update({dueDate:e.dueDate}).then((function(){a("updateTaskDueDate",e),a("showSnackbar","Date à jour !")}))},setTasks:function(t,e){var a=t.commit;st.collection("tasks").set(e),a("setTasks",e)},getTasks:function(t){var e=t.commit;st.collection("tasks").get().then((function(t){e("setTasks",t)}))}},getters:{tasksFiltred:function(t){return t.search?t.tasks.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())})):t.tasks}},modules:{}}),ut=(a("5363"),a("f309"));n["a"].use(ut["a"]);var ot=new ut["a"]({icons:{iconfont:"mdi"}}),ct=(a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("b0c0"),a("8c4f")),lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("home-hero"),a("home-details")],1)},dt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home-hero",staticStyle:{"max-height":"100vh"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[a("div",{staticClass:"title text-center font-weight-black white--text"},[t._v("MK-PRODUCTION")]),a("div",{staticClass:"title text-center font-weight-black white--text"},[t._v("DESIGN AND DEVELOPMENT")]),a("div",{staticClass:"subtitle-1 text-center font-weight-bold white--text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit")]),a("v-btn",{staticClass:"mt-5 pink accent-3 white--text"},[t._v("Bonjour !")])],1)],1)},ft=[],pt={name:"HomeHero"},ht=pt,vt=(a("6441"),a("a722")),bt=Object(l["a"])(ht,mt,ft,!1,null,"5b81d9ae",null),kt=bt.exports;m()(bt,{VBtn:N["a"],VContainer:K["a"],VLayout:vt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"display-2 text-xs-center my-5"},[t._v("Big Title Goes Here")]),a("v-flex",[a("div",{staticClass:"headline mt-3"},[t._v("Lorem ipsum")]),a("p",{staticClass:"subheading mt-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.")])]),a("v-flex",[a("div",{staticClass:"headline mt-3"},[t._v("Lorem ipsum")]),a("p",{staticClass:"subheading mt-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.")]),a("p",{staticClass:"subheading mt-3"},[t._v("Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.")]),a("p",{staticClass:"subheading mt-3"},[t._v("Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum. Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.")])]),a("v-flex",[a("div",{staticClass:"headline mt-3"},[t._v("Lorem ipsum")]),a("p",{staticClass:"subheading mt-3"},[t._v("Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.")])])],1)],1)},Tt=[],wt={name:"HomeDetails"},_t=wt,xt=a("0e8f"),Ct=Object(l["a"])(_t,gt,Tt,!1,null,"16bac408",null),yt=Ct.exports;m()(Ct,{VContainer:K["a"],VFlex:xt["a"],VLayout:vt["a"]});var qt={name:"Home",components:{HomeHero:kt,HomeDetails:yt}},St=qt,jt=(a("d364"),Object(l["a"])(St,lt,dt,!1,null,"32f8ddd0",null)),Vt=jt.exports,Et=a("3384"),Dt=a.n(Et);n["a"].use(ct["a"]);var Ot=[{name:"Home",path:"/",component:Vt},{name:"Todo",path:"/todo",component:function(){return Promise.all([a.e("chunk-cae93800"),a.e("chunk-1ed2f030")]).then(a.bind(null,"a3b3"))}},{name:"Services",path:"/services",component:function(){return a.e("chunk-2d22c114").then(a.bind(null,"f23e"))}},{name:"Contact",path:"/contact",component:function(){return a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}},{name:"Signin",path:"/sign-in",component:function(){return Promise.all([a.e("chunk-cae93800"),a.e("chunk-42f1d9cf")]).then(a.bind(null,"4a33"))}},{name:"Join",path:"/join",component:function(){return a.e("chunk-2d216460").then(a.bind(null,"c283"))}}],$t=new ct["a"]({mode:"history",base:"",routes:Ot});$t.beforeEach((function(t,e,a){document.title="".concat("mk-production"," - ").concat(t.name),a()})),$t.afterEach((function(){Dt()(0,{durantion:0})}));var Nt=$t;new n["a"]({router:Nt,store:rt,vuetify:ot,render:function(t){return t(at)}}).$mount("#app")},6441:function(t,e,a){"use strict";a("a96d")},a96d:function(t,e,a){},afd5:function(t,e,a){"use strict";a("da01")},d364:function(t,e,a){"use strict";a("04ee")},da01:function(t,e,a){}});
//# sourceMappingURL=app.e5b1295d.js.map