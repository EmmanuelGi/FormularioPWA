if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const f=e=>i(e,o),c={module:{uri:o},exports:t,require:f};s[o]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-8b2e40e6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/estilos.css",revision:"3e8fb472ed0828ac6bf2e95a440e062f"},{url:"images/bg3.jpg",revision:"c413599bc57f7596d75bea1775b14169"},{url:"img/react.png",revision:"0546d05db39de5686f239faaba88fa8d"},{url:"index.html",revision:"b7e78d503de11805fbc2bff0db256f65"},{url:"js/funciones.js",revision:"c6add4a90c538fc3ff6348ea7d4918cd"},{url:"Manifest.json",revision:"9d4d9be630a7b8a95b6638204f4bc924"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map