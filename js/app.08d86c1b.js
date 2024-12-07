(function(){"use strict";var e={3743:function(e,t,n){var o=n(3751),r=n(641),i=n(953),a=n(8728),u=n(7648),l=n(6278),s=n(5220),c=(0,r.pM)({__name:"App",setup(e){const t=(0,l.Pj)(),n=(0,r.EW)((()=>t.getters["totalQuantities"])),c=(0,s.lq)();return(e,t)=>{const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l,null,{default:(0,r.k6)((({Component:e,route:t})=>[((0,r.uX)(),(0,r.Wv)(r.PR,null,[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e),{key:t.path}))],1024))])),_:1}),"/order"!==(0,i.R1)(c).path?((0,r.uX)(),(0,r.Wv)((0,i.R1)(a.HF),{key:0,route:""},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(u.gq),{replace:"",to:"/menu",icon:"home-o"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("菜单")]))),_:1}),(0,r.bo)((0,r.bF)((0,i.R1)(u.gq),{replace:"",to:"/cart",icon:"cart-o"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("购物车")]))),_:1},512),[[o.aG,0==n.value]]),(0,r.bo)((0,r.bF)((0,i.R1)(u.gq),{replace:"",to:"/cart",badge:n.value,icon:"cart-o"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("购物车")]))),_:1},8,["badge"]),[[o.aG,n.value>0]])])),_:1})):(0,r.Q3)("",!0)],64)}}});const d=c;var f=d,m=n(3723);(0,m.k)("/OrderYouWant/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});n(4114),n(8992),n(3949);var p=n(33),v=n(6354),g=n(8589),h=n(8518),b=n(132),y=n(3019),k=n(3906);const w={class:"MenuView"},_={class:"counter"};var C=(0,r.pM)({__name:"MenuView",setup(e){const t=(0,l.Pj)(),n=(0,i.KR)(0),o=(0,i.KR)([]),a=[],u=(0,r.EW)((()=>t.getters["categoryTotals"])),s=(0,r.EW)((()=>t.getters["itemQuantities"])),c=(0,i.KR)([]);(0,r.sV)((async()=>{const e=await fetch("./menu.json"),n=await e.json();o.value=n.categories,o.value.forEach((e=>{u.value[e.id]=0,e.items.forEach((e=>{a.push(e)}))})),t.commit("setItemArray",a),await(0,r.dY)(),d(0)}));const d=e=>{const t=c.value[e];null!==t&&t.scrollIntoView({behavior:"smooth"})},f=()=>{const e=window.innerHeight;let t=n.value,o=0;for(let r=-1;r<=1;r++){const i=n.value+r;if(i>=0&&i<c.value.length){const n=c.value[i];if(n){const r=n.getBoundingClientRect(),a=Math.max(0,Math.min(r.bottom,e)-Math.max(r.top,0));a>o&&(o=a,t=i)}}}n.value=t},m=(e,n)=>{s.value[e.id]||(s.value[e.id]=0),t.commit("updateItemQuantity",{id:e.id,change:n})};return(e,t)=>{const a=(0,r.g2)("van-tag"),l=(0,r.g2)("van-button"),C=(0,r.gN)("lazy");return(0,r.uX)(),(0,r.CE)("div",w,[(0,r.bF)((0,i.R1)(v.fI),null,{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(g.fv),{span:"6"},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(h.Bx),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),onChange:d},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.value,((e,t)=>((0,r.uX)(),(0,r.Wv)((0,i.R1)(b.uk),{key:t,title:e.name,badge:u.value[t+1]?u.value[t+1]:void 0},null,8,["title","badge"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,r.bF)((0,i.R1)(g.fv),{span:"18"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.value,((e,n)=>((0,r.uX)(),(0,r.CE)("div",{key:n,onMousewheel:f,onTouchmove:f,class:"subMenu",ref_for:!0,ref:e=>c.value[n]=e},[(0,r.bF)((0,i.R1)(y.cG),null,{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.name),1)])),_:2},1024),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.items,((e,n)=>(0,r.bo)(((0,r.uX)(),(0,r.Wv)((0,i.R1)(k.Zp),{key:n,num:e.quantity,price:e.price,"origin-price":e.originalPrice,desc:e.description,title:e.title,"lazy-load":!0,thumb:e.image},{tags:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.tags,((e,t)=>((0,r.uX)(),(0,r.Wv)(a,{key:t,plain:"",type:"primary"},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e),1)])),_:2},1024)))),128))])),footer:(0,r.k6)((()=>[(0,r.Lk)("div",_,[(0,r.bF)(l,{round:"",class:"num_button",disabled:!s.value[e.id]||0==s.value[e.id]?.orderNum,size:"mini",onClick:t=>m(e,-1)},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("-")]))),_:2},1032,["disabled","onClick"]),(0,r.Lk)("span",null,(0,p.v_)(s.value[e.id]?.orderNum?s.value[e.id].orderNum:0),1),(0,r.bF)(l,{round:"",class:"num_button",disabled:9==s.value[e.id]?.orderNum,size:"mini",onClick:t=>m(e,1)},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("+")]))),_:2},1032,["disabled","onClick"])])])),_:2},1032,["num","price","origin-price","desc","title","thumb"])),[[C,e]]))),128))],32)))),128)),t[3]||(t[3]=(0,r.Lk)("div",{class:"blank"},null,-1))])),_:1})])),_:1})])}}}),E=n(6262);const F=(0,E.A)(C,[["__scopeId","data-v-4c83e690"]]);var A=F;const N=[{path:"/",redirect:"/menu"},{path:"/menu",name:"menu",component:A,meta:{title:"菜单"}},{path:"/cart",name:"cart",component:()=>Promise.all([n.e(70),n.e(741)]).then(n.bind(n,5741)),meta:{title:"购物车"}},{path:"/order",name:"order",component:()=>Promise.all([n.e(70),n.e(108)]).then(n.bind(n,8108)),meta:{title:"订单"}}],T=(0,s.aE)({history:(0,s.Bt)(),routes:N});T.beforeEach(((e,t,n)=>{e.meta&&e.meta.title&&(document.title=e.meta.title),n()}));var Q=T,W=(n(2577),(0,l.y$)({state:{itemArray:[],categoryTotals:{},itemQuantities:{},totalQuantities:0,totalAmount:0,diningTime:1},getters:{itemArray:e=>e.itemArray,categoryTotals:e=>e.categoryTotals,itemQuantities:e=>e.itemQuantities,totalQuantities:e=>e.totalQuantities,totalAmount:e=>e.totalAmount,diningTime:e=>e.diningTime},mutations:{setItemArray(e,t){e.itemArray=t},updateItemQuantity(e,{id:t,change:n}){if(!e.itemQuantities[t]){const n=e.itemArray.find((e=>e.id===t));n&&(e.itemQuantities[t]=n)}const o=e.itemQuantities[t].orderNum+n;o>=0&&o<=9&&(e.categoryTotals[Math.floor(t/100)]+=n,e.itemQuantities[t].orderNum+=n,e.totalQuantities+=n,e.totalAmount+=parseFloat((parseFloat(e.itemQuantities[t].price)*n*100).toFixed(2)),0===e.itemQuantities[t].orderNum&&delete e.itemQuantities[t])},setDiningTime(e,t){e.diningTime=t}},actions:{},modules:{}})),j=n(5802),O=n(4296),R=n(1313);n(2241);const P=(0,o.Ef)(f);P.use(j.vw).use(O.$n),P.use(R.p,{lazyComponent:!0}),P.use(W).use(Q).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{70:"666fa69d",108:"0ba969ae",741:"2b44e7e3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{108:"e00b8ba4",741:"230d4aed"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="orderyouwant:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/OrderYouWant/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&n.type,u=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=u,a.parentNode&&a.parentNode.removeChild(a),i(l)}};return a.onerror=a.onload=u,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={108:1,741:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],l=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var c=l(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkorderyouwant"]=self["webpackChunkorderyouwant"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3743)}));o=n.O(o)})();
//# sourceMappingURL=app.08d86c1b.js.map