if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>n(e,t),d={module:{uri:t},exports:c,require:o};i[t]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-6e2deca1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DgR1eIL9.js",revision:null},{url:"assets/index-qGaS9sl4.css",revision:null},{url:"index.html",revision:"6e3dcac68014ca8cbe29385c44ff25de"},{url:"registerSW.js",revision:"992489ed9fcc652054cbe4143688666d"},{url:"icons/icon-192x192.png",revision:"eeb08db9d91ddfbe56ec6a0cd25b3000"},{url:"icons/icon-512x512.png",revision:"d104561e31a163237c1ea5f754baba03"},{url:"manifest.webmanifest",revision:"b6f2395099fc5f5076bb850e7ad672ad"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination||"image"===e.destination),new e.NetworkFirst({cacheName:"html-images",plugins:[]}),"GET")}));
