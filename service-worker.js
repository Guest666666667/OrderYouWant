if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(r[d])return;let o={};const u=e=>s(e,d),c={module:{uri:d},exports:o,require:u};r[d]=Promise.all(i.map((e=>c[e]||u(e)))).then((e=>(n(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"orderyouwant"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/OrderYouWant/css/186.a0263461.css",revision:null},{url:"/OrderYouWant/css/668.2d005d50.css",revision:null},{url:"/OrderYouWant/css/app.02fa5130.css",revision:null},{url:"/OrderYouWant/css/chunk-vendors.5b00452a.css",revision:null},{url:"/OrderYouWant/img/dishes/M_cyzy.webp",revision:"ebc0174714bba86526cadffdff1a79cd"},{url:"/OrderYouWant/img/dishes/M_dfnrb.webp",revision:"baf2f0e377733ae93003d81e75f67edd"},{url:"/OrderYouWant/img/dishes/M_fqhgj.webp",revision:"0fef68b23884992233d4b73e12c60512"},{url:"/OrderYouWant/img/dishes/M_hmj.webp",revision:"040426725c1684ecf368abce1f45110e"},{url:"/OrderYouWant/img/dishes/M_hspg.webp",revision:"812cd60c7cbcf5fe0c39428374ab5b0e"},{url:"/OrderYouWant/img/dishes/M_ljcr.webp",revision:"c462f2753c34c6786c639dedf4826d37"},{url:"/OrderYouWant/img/dishes/M_sclzj.webp",revision:"38e15ad2fbad01e5dec1c1fc8d7be3e7"},{url:"/OrderYouWant/img/dishes/M_tddnn.webp",revision:"5a7c00d53f57cebd2ec4eb54df0bdca2"},{url:"/OrderYouWant/img/dishes/M_ymdx.webp",revision:"32bf5c080430f9d5983719c9db12c176"},{url:"/OrderYouWant/img/dishes/M_zryp.webp",revision:"8d4c3fa9d2233e306de0b1f86e7dc5b8"},{url:"/OrderYouWant/index.html",revision:"88f87e3a151f6051a259b7b32348a867"},{url:"/OrderYouWant/js/186.c8623859.js",revision:null},{url:"/OrderYouWant/js/322.9eb1abd0.js",revision:null},{url:"/OrderYouWant/js/668.33e39cee.js",revision:null},{url:"/OrderYouWant/js/app.190e9a85.js",revision:null},{url:"/OrderYouWant/js/chunk-vendors.2fde29eb.js",revision:null},{url:"/OrderYouWant/manifest.json",revision:"e6ad3f3775f12787f1c4b3f3404859ff"},{url:"/OrderYouWant/menu.json",revision:"5538f75ee528f3d0bd67ddba4f60b657"}],{})}));
//# sourceMappingURL=service-worker.js.map
