(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(960),t.b),l=i()(o()),p=c()(d);l.push([e.id,":root {\r\n  --red-color: rgb(206,52,52);\r\n  --font-color: rgb(255,255,255);\r\n  --font-color-hover: rgb(251,200,104);\r\n  --font-color2: #333;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url("+p+");\r\n  font-family: 'Roboto', sans-serif;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  letter-spacing: .01em;\r\n  line-height: 1.3em;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  font-family: inherit;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  width: 100%;\r\n  height: 100px;\r\n  background: var(--red-color);\r\n  padding: 20px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.logo-container {\r\n  height: 60%;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.logo {\r\n  height: 100%;\r\n}\r\n\r\nnav {\r\n  height: 30%;\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.nav-link {\r\n  display: inline-block;\r\n  margin: 0 15px;\r\n  color: var(--font-color);\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: translateY(-10%);\r\n  color: var(--font-color-hover);\r\n}\r\n\r\n/* HOME SECTION */\r\n.home-welcome {\r\n  font-size: 3.64583333vw;\r\n  font-family: 'Della Respira', serif;\r\n  text-align: center;\r\n  padding: 10rem 10rem;\r\n  color: var(--font-color);\r\n  font-weight: 400;\r\n}\r\n\r\n.perception-col {\r\n  background: var(--font-color);\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  padding: 3rem 10rem;\r\n  font-family: 'Della Respira', serif;\r\n}\r\n\r\n.perception-head {\r\n  font-size: 21px;\r\n  width: 20%;\r\n  font-weight: 400;\r\n}\r\n\r\n.perception-details {\r\n  font-size: 13px;\r\n  width: 50%;\r\n}\r\n\r\n.perception-details p {\r\n  margin-bottom: 1rem;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font: 400;\r\n  line-height: 1.8em;\r\n}\r\n\r\n.mission-col {\r\n  padding: 5rem 0;\r\n}\r\n.mission-head {\r\n  font-size: 13px;\r\n  text-align: center;\r\n  color: var(--font-color);\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.mission-details {\r\n  font-size: 3.64583333vw;\r\n  font-family: 'Della Respira', serif;\r\n  text-align: center;\r\n  padding: 1rem 10rem;\r\n  color: var(--font-color);\r\n  font-weight: 400;\r\n}\r\n\r\n/* FOOTER */\r\n.footer {\r\n  position: relative;\r\n}\r\n.social-container {\r\n  padding: 1rem 1.875rem;\r\n  background: rgb(223,78,72);\r\n  text-align: center;\r\n  position: sticky;\r\n  position: -webkit-sticky;\r\n  bottom: 0;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  margin-left: 1rem;\r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n.copy-container  {\r\n  text-align: center;\r\n  color: var(--font-color);\r\n  padding: 1em;\r\n  background: var(--red-color);\r\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},960:(e,n,t)=>{e.exports=t.p+"6ed5addea5a1b93aac42.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),h={};function f(e){const n=document.createElement("p");return n.textContent=e,n}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("div");n.classList.add("logo-container");const t=document.createElement("img");return t.classList.add("logo"),t.src="./images/automacy.png",t.alt="logo",n.appendChild(t),e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=document.createElement("ul"),t=document.createElement("li");t.classList.add("home"),t.classList.add("nav-link"),t.textContent="HOME";const r=document.createElement("li");r.classList.add("menu"),r.classList.add("nav-link"),r.textContent="MENU";const o=document.createElement("li");o.classList.add("our-story"),o.classList.add("nav-link"),o.textContent="OUR STORY";const a=document.createElement("li");return a.classList.add("contact"),a.classList.add("nav-link"),a.textContent="CONTACT",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a),e.appendChild(n),e}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("div");n.classList.add("social-container");const t=document.createElement("a");t.href="www.facebook.com";const r=document.createElement("i");r.classList.add("fab"),r.classList.add("fa-facebook"),t.appendChild(r);const o=document.createElement("a"),a=document.createElement("i");a.classList.add("fab"),a.classList.add("fa-twitter"),o.appendChild(a);const i=document.createElement("a"),s=document.createElement("i");s.classList.add("fab"),s.classList.add("fa-instagram"),i.appendChild(s);const c=document.createElement("a"),d=document.createElement("i");d.classList.add("fab"),d.classList.add("fa-github"),c.appendChild(d),n.appendChild(t),n.appendChild(o),n.appendChild(i),n.appendChild(c);const l=document.createElement("div");l.classList.add("copy-container");const p=document.createElement("p");return p.classList.add("copyright"),p.textContent="Copyright © 2021 habidoye",l.appendChild(p),e.appendChild(n),e.appendChild(l),e}()),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("section");e.classList.add("home-container");const n=document.createElement("h1");n.classList.add("home-welcome"),n.textContent="Automacy is a Nigeria-raised, New York City-based chef, author, restaurateur, social entrepreneur & culinary ambassador. He welcomes you to his table.";const t=document.createElement("div");t.classList.add("perception-col");const r=document.createElement("h3");r.classList.add("perception-head"),r.textContent="Our perception of ourselves starts with the food we eat.";const o=document.createElement("div");o.classList.add("perception-details");const a=document.createElement("div");a.classList.add("mission-col");const i=document.createElement("h5");i.classList.add("mission-head"),i.textContent="MISSION";const s=document.createElement("h1");return s.classList.add("mission-details"),s.textContent="To promote diverse, healthy, conscious food cultures where eating and sharing food is an act of love—for yourself, your community, and for the environment.",a.appendChild(i),a.appendChild(s),o.appendChild(f("Pierre Thiam is a chef, author, and social activist best known for bringing West African cuisine to the global fine dining world. He is the Executive Chef of the award-winning restaurant Nok by Alara in Lagos, Nigeria and the Signature Chef of the five-star Pullman Hotel in Dakar, Senegal. He is also the executive chef and co-owner of Teranga, a fast-casual food chain from New York City. His foods company Yolélé advocates for smallholder farmers in the Sahel by opening new markets for crops grown in Africa; its signature product, Yolélé Fonio, is found in Whole Foods, Amazon, Target, Thrive Market, and other retailers across America.")),o.appendChild(f("Born and raised in Dakar, Senegal, Thiam’s cooking style is at once modern and eclectic, rooted in the rich culinary traditions of West Africa. His newest cookbook, The Fonio Cookbook, was published in October 2019. His first two cookbooks, Yolélé! Recipes From the Heart of Senegal and Senegal: Modern Senegalese Recipes from the Source to the Bowl were finalists for several awards including the Julia Child Cookbook Award, the Gourmand Award in Paris, and the James Beard Award for Best International Cookbook.")),o.appendChild(f("Thiam has cooked for the King of Morocco, French President Emmanuel Macron, and Former UN Secretary General Ban Ki Moon. Through his advocacy and many media appearances, he has become known as a culinary ambassador, dedicated to promoting West African cooking throughout the world. His TEDTalk, given at TEDGlobal 2017 in Arusha, Tanzania, has been viewed over one million times. Thiam sits on the board of directors of IDEO.org, SOS Sahel, Culinary Institute of America's African Cuisines Advisory Board and CorpsAfrica. He lives in El Cerrito, California with his wife Lisa,  their daughter Na’ia, and dog Malcolm. ")),t.appendChild(r),t.appendChild(o),e.appendChild(n),e.appendChild(t),e.appendChild(a),e}())}()}()})()})();