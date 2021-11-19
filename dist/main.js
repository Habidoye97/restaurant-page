(()=>{"use strict";var n,e,r,t,o,a,i,c,s,l,d,u,p,f,h={426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),c=r(667),s=r.n(c),l=new URL(r(960),r.b),d=i()(o()),u=s()(l);d.push([n.id,":root {\r\n  --red-color: rgb(206,52,52);\r\n  --font-color: rgb(255,255,255);\r\n  --font-color-hover: rgb(251,200,104);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-image: url("+u+");\r\n  font-family: 'Roboto', sans-serif;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  font-family: inherit;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  width: 100%;\r\n  height: 100px;\r\n  background: var(--red-color);\r\n  padding: 20px;\r\n  \r\n}\r\n\r\n.logo-container {\r\n  height: 60%;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.logo {\r\n  height: 100%;\r\n}\r\n\r\nnav {\r\n  height: 30%;\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.nav-link {\r\n  display: inline-block;\r\n  margin: 0 15px;\r\n  color: var(--font-color);\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n}\r\n\r\n.nav-link:hover {\r\n  transform: translateY(-10%);\r\n  color: var(--font-color-hover);\r\n}\r\n\r\n",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},960:(n,e,r)=>{n.exports=r.p+"6ed5addea5a1b93aac42.jpg"}},m={};function v(n){var e=m[n];if(void 0!==e)return e.exports;var r=m[n]={id:n,exports:{}};return h[n](r,r.exports,v),r.exports}v.m=h,v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var e=v.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.b=document.baseURI||self.location.href,n=v(379),e=v.n(n),r=v(795),t=v.n(r),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),l=v.n(s),d=v(589),u=v.n(d),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.getElementById("content").appendChild(function(){const n=document.createElement("header");n.classList.add("header");const e=document.createElement("div");e.classList.add("logo-container");const r=document.createElement("img");return r.classList.add("logo"),r.src="./images/automacy.png",r.alt="logo",e.appendChild(r),n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav"),e=document.createElement("ul"),r=document.createElement("li");r.classList.add("home"),r.classList.add("nav-link"),r.textContent="HOME";const t=document.createElement("li");t.classList.add("menu"),t.classList.add("nav-link"),t.textContent="MENU";const o=document.createElement("li");o.classList.add("our-story"),o.classList.add("nav-link"),o.textContent="OUR STORY";const a=document.createElement("li");return a.classList.add("contact"),a.classList.add("nav-link"),a.textContent="CONTACT",e.appendChild(r),e.appendChild(t),e.appendChild(o),e.appendChild(a),n.appendChild(e),n}()),n}())})();