if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6e2deca1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BCnx9NRN.css",revision:null},{url:"assets/index-DGYV8pBk.js",revision:null},{url:"index.html",revision:"00766a943555b82f0e2ac65e528a7a45"},{url:"registerSW.js",revision:"992489ed9fcc652054cbe4143688666d"},{url:"icons/icon-192x192.png",revision:"eeb08db9d91ddfbe56ec6a0cd25b3000"},{url:"icons/icon-512x512.png",revision:"d104561e31a163237c1ea5f754baba03"},{url:"manifest.webmanifest",revision:"b6f2395099fc5f5076bb850e7ad672ad"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination||"image"===e.destination),new e.NetworkFirst({cacheName:"html-images",plugins:[]}),"GET")}));
