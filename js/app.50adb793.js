(function(){"use strict";var e={1702:function(e,t,n){var r=n(3751),o=n(641),i=n(953),u=n(8728),a=n(7648),l=(0,o.pM)({__name:"App",setup(e){return(e,t)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(n,null,{default:(0,o.k6)((({Component:e,route:t})=>[((0,o.uX)(),(0,o.Wv)(o.PR,null,[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e),{key:t.path}))],1024))])),_:1}),(0,o.bF)((0,i.R1)(u.HF),{route:""},{default:(0,o.k6)((()=>[(0,o.bF)((0,i.R1)(a.gq),{replace:"",to:"/menu",icon:"home-o"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("菜单")]))),_:1}),(0,o.bF)((0,i.R1)(a.gq),{replace:"",to:"/cart",icon:"cart-o"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("购物车")]))),_:1})])),_:1})],64)}}});const c=l;var s=c,d=n(3723);(0,d.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(5220),m=(n(4114),n(8992),n(3949),n(33)),p=n(6354),v=n(8589),g=n(8518),h=n(132),b=n(3906),y=n(6278);const k={class:"MenuList"},w={class:"counter"};var C=(0,o.pM)({__name:"MenuList",setup(e){const t=(0,y.Pj)(),n=(0,i.KR)(0),u=(0,i.KR)([]),a=[],l=(0,o.EW)((()=>t.getters["itemQuantities"]));(0,o.sV)((async()=>{const e=await fetch("/menu.json"),n=await e.json();u.value=n.categories,u.value.forEach((e=>{e.items.forEach((e=>{a.push(e)}))})),t.commit("setItemArray",a)}));const c=(e,n)=>{t.commit("updateItemQuantity",{id:e.id,change:n})};return(e,t)=>{const a=(0,o.g2)("van-tag"),s=(0,o.g2)("van-button"),d=(0,o.gN)("lazy");return(0,o.uX)(),(0,o.CE)("div",k,[(0,o.bF)((0,i.R1)(p.fI),null,{default:(0,o.k6)((()=>[(0,o.bF)((0,i.R1)(v.fv),{span:"6"},{default:(0,o.k6)((()=>[(0,o.bF)((0,i.R1)(g.Bx),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.value,((e,t)=>((0,o.uX)(),(0,o.Wv)((0,i.R1)(h.uk),{key:t,title:e.name},null,8,["title"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)((0,i.R1)(v.fv),{span:"18"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.value,((e,u)=>(0,o.bo)(((0,o.uX)(),(0,o.CE)("div",{key:u,class:"subMenu"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.items,((e,n)=>(0,o.bo)(((0,o.uX)(),(0,o.Wv)((0,i.R1)(b.Zp),{key:n,num:e.quantity,price:e.price,"origin-price":e.originalPrice,desc:e.description,title:e.title,"lazy-load":!0,thumb:e.image},{tags:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.tags,((e,t)=>((0,o.uX)(),(0,o.Wv)(a,{key:t,plain:"",type:"primary"},{default:(0,o.k6)((()=>[(0,o.eW)((0,m.v_)(e),1)])),_:2},1024)))),128))])),footer:(0,o.k6)((()=>[(0,o.Lk)("div",w,[(0,o.bF)(s,{round:"",class:"num_button",size:"mini",onClick:t=>c(e,-1)},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("-")]))),_:2},1032,["onClick"]),(0,o.Lk)("span",null,(0,m.v_)(l.value[e.id]?.orderNum?l.value[e.id].orderNum:0),1),(0,o.bF)(s,{round:"",class:"num_button",size:"mini",onClick:t=>c(e,1)},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("+")]))),_:2},1032,["onClick"])])])),_:2},1032,["num","price","origin-price","desc","title","thumb"])),[[d,e]]))),128))])),[[r.aG,e.id==n.value+1]]))),128)),t[3]||(t[3]=(0,o.Lk)("div",{class:"blank"},null,-1))])),_:1})])),_:1})])}}}),_=n(6262);const E=(0,_.A)(C,[["__scopeId","data-v-2db29d58"]]);var F=E;const A={class:"Menu"};var N=(0,o.pM)({__name:"MenuView",setup(e){return(e,t)=>((0,o.uX)(),(0,o.CE)("div",A,[(0,o.bF)(F)]))}});const j=N;var O=j;const X=[{path:"/",redirect:"/menu"},{path:"/menu",name:"menu",component:O,meta:{title:"菜单"}},{path:"/cart",name:"cart",component:()=>n.e(356).then(n.bind(n,3356)),meta:{title:"购物车"}}],Q=(0,f.aE)({history:(0,f.Bt)(),routes:X});Q.beforeEach(((e,t,n)=>{e.meta&&e.meta.title&&(document.title=e.meta.title),n()}));var R=Q,I=(n(2577),(0,y.y$)({state:{itemArray:[],itemQuantities:{}},getters:{itemArray:e=>e.itemArray,itemQuantities:e=>e.itemQuantities},mutations:{setItemArray(e,t){e.itemArray=t},updateItemQuantity(e,{id:t,change:n}){if(!e.itemQuantities[t]){const n=e.itemArray.find((e=>e.id===t));n&&(e.itemQuantities[t]=n)}e.itemQuantities[t].orderNum+n>=0&&(e.itemQuantities[t].orderNum+=n,0===e.itemQuantities[t].orderNum&&delete e.itemQuantities[t])}},actions:{},modules:{}})),L=n(5802),S=n(1475),W=n(1313);n(2241);const M=(0,r.Ef)(s);M.use(L.vw).use(S.$n),M.use(W.p,{lazyComponent:!0}),M.use(I).use(R).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".ccb48942.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".af96e7a2.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="orderyouwant:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=a,u.parentNode&&u.parentNode.removeChild(u),i(l)}};return u.onerror=u.onload=a,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={356:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var s=l(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkorderyouwant"]=self["webpackChunkorderyouwant"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1702)}));r=n.O(r)})();
//# sourceMappingURL=app.50adb793.js.map