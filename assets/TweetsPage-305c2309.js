import{n as F,r as T,j as w,s as Ee,a as j,u as $e}from"./index-0bd09f31.js";import{a as Ve}from"./HomePage.styled-40f7e66b.js";function Re(e,t){return function(){return e.apply(t,arguments)}}const{toString:We}=Object.prototype,{getPrototypeOf:oe}=Object,q=(e=>t=>{const n=We.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>q(t)===e),z=e=>t=>typeof t===e,{isArray:U}=Array,L=z("undefined");function Ke(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=A("ArrayBuffer");function Ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const Xe=z("string"),R=z("function"),Ae=z("number"),J=e=>e!==null&&typeof e=="object",Qe=e=>e===!0||e===!1,I=e=>{if(q(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ze=A("Date"),Ye=A("File"),et=A("Blob"),tt=A("FileList"),nt=e=>J(e)&&R(e.pipe),rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=q(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},st=A("URLSearchParams"),ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ne=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!L(e)&&e!==Ne;function Y(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Te(t,s)||s;I(t[o])&&I(r)?t[o]=Y(t[o],r):I(r)?t[o]=Y({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const it=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&R(s)?e[o]=Re(s,n):e[o]=s},{allOwnKeys:r}),e),at=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ct=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},lt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ut=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ft=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ae(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},dt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),pt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mt=A("HTMLFormElement"),wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xt=A("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},bt=e=>{Fe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},gt=()=>{},St=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",de="0123456789",Pe={DIGIT:de,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+de},Et=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Rt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ot=e=>{const t=new Array(10),n=(r,s)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return D(r,(i,l)=>{const d=n(i,s+1);!L(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},At=A("AsyncFunction"),Tt=e=>e&&(J(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:U,isArrayBuffer:Oe,isBuffer:Ke,isFormData:rt,isArrayBufferView:Ge,isString:Xe,isNumber:Ae,isBoolean:Qe,isObject:J,isPlainObject:I,isUndefined:L,isDate:Ze,isFile:Ye,isBlob:et,isRegExp:xt,isFunction:R,isStream:nt,isURLSearchParams:st,isTypedArray:dt,isFileList:tt,forEach:D,merge:Y,extend:it,trim:ot,stripBOM:at,inherits:ct,toFlatObject:lt,kindOf:q,kindOfTest:A,endsWith:ut,toArray:ft,forEachEntry:pt,matchAll:ht,isHTMLForm:mt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Fe,freezeMethods:bt,toObjectSet:yt,toCamelCase:wt,noop:gt,toFiniteNumber:St,findKey:Te,global:Ne,isContextDefined:Ce,ALPHABET:Pe,generateString:Et,isSpecCompliantForm:Rt,toJSONObject:Ot,isAsyncFn:At,isThenable:Tt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(m,Ue);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Nt=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Be(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Be(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ct(e){return a.isArray(e)&&!e.some(ee)}const Ft=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,b){return!a.isUndefined(b[f])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,f,b){let S=u;if(u&&!b&&typeof u=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Ct(u)||(a.isFileList(u)||a.endsWith(f,"[]"))&&(S=a.toArray(u)))return f=Be(f),S.forEach(function(_,Je){!(a.isUndefined(_)||_===null)&&t.append(i===!0?pe([f],Je,o):i===null?f:f+"[]",p(_))}),!1}return ee(u)?!0:(t.append(pe(b,f,o),p(u)),!1)}const h=[],x=Object.assign(Ft,{defaultVisitor:c,convertValue:p,isVisitable:ee});function g(u,f){if(!a.isUndefined(u)){if(h.indexOf(u)!==-1)throw Error("Circular reference detected in "+f.join("."));h.push(u),a.forEach(u,function(S,E){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(E)?E.trim():E,f,x))===!0&&g(S,f?f.concat(E):[E])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&$(e,this,t)}const Le=ie.prototype;Le.append=function(t,n){this._pairs.push([t,n])};Le.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=jt,ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ut=typeof URLSearchParams<"u"?URLSearchParams:ie,Bt=typeof FormData<"u"?FormData:null,Lt=typeof Blob<"u"?Blob:null,Dt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:Bt,Blob:Lt},isStandardBrowserEnv:Dt,isStandardBrowserWebWorkerEnv:kt,protocols:["http","https","file","blob","url","data"]};function _t(e,t){return $(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function It(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ht(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function _e(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ht(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(It(r),s,n,0)}),n}return null}function vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ae={transitional:ke,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(_e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _t(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return $(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),vt(t)):t}],transformResponse:[function(t){const n=this.transitional||ae.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ae.headers[e]={}});const ce=ae,Mt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Mt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},we=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function $t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,p){const c=B(d);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(s,c);(!h||s[h]===void 0||p===!0||p===void 0&&s[h]!==!1)&&(s[h||d]=H(l))}const i=(l,d)=>a.forEach(l,(p,c)=>o(p,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Jt(t)?i(qt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=B(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=H(s),delete n[o];return}const l=t?$t(o):String(o).trim();l!==o&&delete n[o],n[l]=H(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[we]=this[we]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=B(i);r[l]||(Vt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(V.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(V);const N=V;function X(e,t){const n=this||ce,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Kt=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Gt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function He(e,t){return e&&!Gt(t)?Xt(e,t):t}const Qt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Zt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Yt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const p=Date.now(),c=r[o];i||(i=p),n[s]=d,r[s]=p;let h=o,x=0;for(;h!==s;)x+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const g=c&&p-c;return g?Math.round(x*1e3/g):void 0}}function xe(e,t){let n=0;const r=Yt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),p=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&p?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const en=typeof XMLHttpRequest<"u",tn=en&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let p;a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(p=o.getContentType())&&o.setContentType(p.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+f))}const h=He(e.baseURL,e.url);c.open(e.method.toUpperCase(),De(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function x(){if(!c)return;const u=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),b={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};Wt(function(E){n(E),d()},function(E){r(E),d()},b),c=null}if("onloadend"in c?c.onloadend=x:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(x)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||ke;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,b.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const u=(e.withCredentials||Qt(h))&&e.xsrfCookieName&&Kt.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,b){c.setRequestHeader(b,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",xe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",xe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new k(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=Zt(h);if(g&&O.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},te={http:Nt,xhr:tn};a.forEach(te,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const be=e=>`- ${e}`,nn=e=>a.isFunction(e)||e===null||e===!1,ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!nn(n)&&(r=te[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(be).join(`
`):" "+be(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:te};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function ye(e){return Q(e),e.headers=N.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ve.getAdapter(e.adapter||ce.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return Ie(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof N?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(p,c,h){return a.isPlainObject(p)&&a.isPlainObject(c)?a.merge.call({caseless:h},p,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(p,c,h){if(a.isUndefined(c)){if(!a.isUndefined(p))return r(void 0,p,h)}else return r(p,c,h)}function o(p,c){if(!a.isUndefined(c))return r(void 0,c)}function i(p,c){if(a.isUndefined(c)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,c)}function l(p,c,h){if(h in t)return r(p,c);if(h in e)return r(void 0,p)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(p,c)=>s(ge(p),ge(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=d[c]||s,x=h(e[c],t[c],c);a.isUndefined(x)&&h!==l||(n[c]=x)}),n}const Me="1.5.1",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Se={};le.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Me+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Se[i]&&(Se[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function rn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ne={assertOptions:rn,validators:le},C=ne.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=N.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(d=d&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const p=[];this.interceptors.response.forEach(function(f){p.push(f.fulfilled,f.rejected)});let c,h=0,x;if(!d){const u=[ye.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,p),x=u.length,c=Promise.resolve(n);h<x;)c=c.then(u[h++],u[h++]);return c}x=l.length;let g=n;for(h=0;h<x;){const u=l[h++],f=l[h++];try{g=u(g)}catch(b){f.call(this,b);break}}try{c=ye.call(this,g)}catch(u){return Promise.reject(u)}for(h=0,x=p.length;h<x;)c=c.then(p[h++],p[h++]);return c}getUri(t){t=P(this.defaults,t);const n=He(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const v=M;class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new k(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(s){t=s}),cancel:t}}}const sn=ue;function on(e){return function(n){return e.apply(null,n)}}function an(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const cn=re;function qe(e){const t=new v(e),n=Re(v.prototype.request,t);return a.extend(n,v.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return qe(P(e,s))},n}const y=qe(ce);y.Axios=v;y.CanceledError=k;y.CancelToken=sn;y.isCancel=Ie;y.VERSION=Me;y.toFormData=$;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=on;y.isAxiosError=an;y.mergeConfig=P;y.AxiosHeaders=N;y.formToJSON=e=>_e(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=ve.getAdapter;y.HttpStatusCode=cn;y.default=y;const W=y;W.defaults.baseURL="https://64afb825c60b8f941af47a83.mockapi.io/api/v1/";const ln=async(e,t,n)=>{try{return(await W.put(`users/${t}`,{followers:e==="add"?n+1:n-1})).data}catch(r){console.log(r)}};W.defaults.baseURL="https://64afb825c60b8f941af47a83.mockapi.io/api/v1/";const un=3,fn=async e=>{try{return(await W.get("users",{params:{completed:!1,page:e,limit:un},headers:{"Content-Type":"application/json"}})).data}catch(t){console.log(t)}},dn=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),pn="/tweets-app/assets/card-picture@1x-min-9d60240d.png",hn="/tweets-app/assets/card-picture@2x-min-3a94a49d.png",mn=F.div`
  width: auto;
  height: auto;
  position: relative;
  padding: 10px 0px 20px 0px;
  border-radius: 20px;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  @media screen and (min-width: 390px) {
    padding: 28px 36px 36px 36px;
  }
`,wn=F.svg`
  position: absolute;
  top: 20px;
  left: 20px;
`,xn=F.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  background-image: url(${pn});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 308px;
  height: 168px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${hn});
  }
`,bn=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  border-radius: 50%;
  box-shadow:
    0px 4.39163px 3.29372px 0px #fbf8ff inset,
    0px -2.19582px 4.39163px 0px #ae7be3 inset;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  &::before {
    content: '';
    width: 114px;
    height: 8px;
    background: var(--primary-color);
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
    position: absolute;
    right: 100%;
    @media screen and (min-width: 390px) {
      width: 150px;
    }
  }
  &::after {
    content: '';
    width: 114px;
    height: 8px;
    background: var(--primary-color);
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
    position: absolute;
    left: 100%;
    @media screen and (min-width: 390px) {
      width: 150px;
    }
  }
`,yn=F.img`
  border-radius: 50%;
`,gn=F.h2`
  margin-top: 94px;
  margin-bottom: 16px;
  text-transform: uppercase;
`,Sn=F.h3`
  text-transform: uppercase;
  margin-bottom: 26px;
`,ze=F.button`
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 6px;
  border-radius: 10.311px;
  background: var(--primary-color);
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  transition: scale 0.3s ease;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`,En="/tweets-app/assets/hansel-28e2d6b9.png",Rn=({cardId:e,tweets:t,followers:n,avatar:r=En,setUsers:s})=>{var p;const o=dn(n),[i,l]=T.useState(!!((p=localStorage.getItem("followingTweets"))!=null&&p.includes(e))),d=async()=>{const c=await ln(i?"delete":"add",e,n),h=!i;l(h),s(u=>u.map(f=>f.id===e?c:f));const x=JSON.parse(localStorage.getItem("followingTweets"))||[],g=h?[...x,e]:x.filter(u=>u!==e);localStorage.setItem("followingTweets",JSON.stringify(g))};return w.jsxs(mn,{children:[w.jsx(wn,{width:"76",height:"22",children:w.jsx("use",{href:`${Ee}#icon-goit-logo`})}),w.jsx(xn,{}),w.jsx(bn,{children:w.jsx(yn,{src:r,alt:"tweet-avatar",width:62,height:62,loading:"lazy"})}),w.jsxs(gn,{children:[" ",t," tweets"]}),w.jsxs(Sn,{children:[o," Followers"]}),w.jsx(ze,{type:"button",style:{background:i?"var(--button-followed-color)":"var(--primary-color)"},onClick:d,children:i?"Following":"Follow"})]})},On=j.div`
  text-align: center;
`,se=j.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 30px;
  margin-bottom: 20px;
  color: var(--light-color);
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    scale 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
    scale: 1.1;
  }
  @media screen and (min-width: 768px) {
    margin-left: 110px;
  }
`,An=j.svg`
  fill: var(--light-color);
  transition: fill 0.3s;
  ${se}:hover &,
  ${se}:focus & {
    fill: #00baff;
  }
`,Tn=j.select`
  margin-left: 30px;
  padding: 10px;
  font-size: 16px;
  font-family: Montserrat;
  border: 1px solid var(--button-text-color);
  border-radius: 5px;
  background-color: var(--light-color);
  color: var(--button-text-color);
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    box-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
    border-color: var(--light-color);
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  @media screen and (min-width: 768px) {
    margin-left: 110px;
  }
`,Z=j.option`
  color: #00baff;
`,Nn=j.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 48px;
  margin-top: 40px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Pn=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]),[s,o]=T.useState(1),[i,l]=T.useState(!0),[d,p]=T.useState(!1),[c,h]=T.useState("show all"),x=$e();T.useEffect(()=>{(async()=>{p(!0);try{const b=await fn(s);t(s!==1?S=>[...S,...b]:b),l(b.length!==0&&s!==4)}catch(b){console.log(b)}finally{p(!1)}})()},[s]),T.useEffect(()=>{const f=JSON.parse(localStorage.getItem("followingTweets"))||[];let b,S;switch(c){case"show all":r(e);break;case"follow":S=e.filter(E=>!f.includes(E.id)),r(S);break;case"followings":b=e.filter(E=>f.includes(E.id)),r(b);break}},[e,c]);const g=()=>{o(f=>f+1)},u=f=>{h(f.target.value)};return w.jsxs(w.Fragment,{children:[w.jsx(Ve,{children:"Tweets"}),w.jsxs(se,{type:"button",onClick:()=>x("/"),children:[w.jsx(An,{width:"20",height:"20",children:w.jsx("use",{href:`${Ee}#icon-arrow-left`})}),"Back"]}),w.jsxs(Tn,{value:c,onChange:u,children:[w.jsx(Z,{value:"show all",children:"Show All"}),w.jsx(Z,{value:"follow",children:"Follow"}),w.jsx(Z,{value:"followings",children:"Followings"})]}),w.jsxs(On,{children:[n.length===0&&c==="followings"&&w.jsxs(w.Fragment,{children:[w.jsx("p",{children:"No followings yet "}),w.jsx("p",{children:"It`s time to follow someone!"})]}),w.jsx(Nn,{children:n.length!==0&&n.map(f=>w.jsx("li",{children:w.jsx(Rn,{cardId:f.id,tweets:f.tweets,followers:f.followers,avatar:f.avatar,setUsers:t,isFollowed:f.isFollowed})},f.id))}),d&&w.jsx("p",{children:"Loading..."}),i&&c==="show all"&&w.jsx(ze,{type:"button",onClick:g,children:"Load More"})]})]})};export{Pn as default};
