// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-properties-in@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-dtypes@v0.2.1-esm/index.mjs";function E(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}var V=b();function T(r,e){return r-e}var x=l(new h(0)),B=p();function O(p,l){var h,b,R,k,F;if(!r(p))throw new TypeError(j("1VpBZ",p));if(!function(r){var e,t;for(e={},t=0;t<r.length;t++){if(f(e,r[t]))return!1;e[r[t]]=!0}return!0}(p))throw new TypeError(j("1VpBa",p));for(b=p.slice(),h=b.length,F=0;F<h;F++)if(E(x,b[F]))throw new Error(j("1VpBb",b[F]));if(R={dtype:"float64",name:"tuple"},arguments.length>1&&(k=function(r,t){if(!g(t))return new TypeError(j("1Vp2V",t));if(f(t,"dtype")){if(r.dtype=t.dtype,!e(r.dtype))return new TypeError(j("1Vp2W","dtype",r.dtype));if(!E(V,r.dtype))return new TypeError(j("1VpBf","dtype",r.dtype))}return f(t,"name")&&(r.name=t.name,!e(r.name))?new TypeError(j("1Vp2W","name",r.name)):null}(R,l),k))throw k;function J(){var r,o,s,f,p;if((f=(s=arguments.length)<=0?u(h,R.dtype):1===s?e(arguments[0])?u(h,arguments[0]):t(arguments[0])?u(arguments[0],0,h,R.dtype):u(arguments[0],R.dtype):2===s?t(arguments[0])?e(arguments[1])?u(arguments[0],0,h,arguments[1]):u(arguments[0],arguments[1],h,R.dtype):u(arguments[0],arguments[1]):u(arguments[0],arguments[1],h,arguments[2])).length!==h)throw new RangeError(j("1VpBc",h,f.length));for(o=a(f),r=[],p=0;p<h;p++)r.push(p),c(f,b[p],l(p),g(p));return m(f,"name",R.name),w(f,"fields",(function(){return b.slice()})),w(f,"orderedFields",(function(){var e,t;for(e=b.slice(),t=0;t<h;t++)e[t]=b[r[t]];return e})),m(f,"entries",(function(){var e,t,n,i;if((e=this)!==f)throw new TypeError(j("1Vp1m"));i=-1,d(t={},"next",{configurable:!1,enumerable:!1,writable:!1,value:o}),d(t,"return",{configurable:!1,enumerable:!1,writable:!1,value:function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}}}),B&&d(t,y,{configurable:!1,enumerable:!1,writable:!1,value:function(){return e.entries()}});return t;function o(){return i+=1,n||i>=h?{done:!0}:{value:[i,b[r[i]],f[i]],done:!1}}})),m(f,"every",(function(e,t){var i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=0;i<h;i++)if(!e.call(t,f[i],i,b[r[i]],f))return!1;return!0})),m(f,"fieldOf",(function(e){var t;if(this!==f)throw new TypeError(j("1Vp1m"));if(arguments.length>1){if(!i(t=arguments[0]))throw new TypeError(j("1Vp7f",t));if(t>=h)return;t<0&&(t=h+t)<0&&(t=0)}else t=0;for(;t<h;t++)if(f[t]===e)return b[r[t]]})),m(f,"filter",(function(e,t){var i,s,p;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=[],s=[],p=0;p<h;p++)e.call(t,f[p],p,b[r[p]],f)&&(s.push(b[r[p]]),i.push(f[p]));if(s.length===h)return J(i,o);if(s.length)return O(s,R)(i);return null})),m(f,"find",(function(e,t){var i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=0;i<h;i++)if(e.call(t,f[i],i,b[r[i]],f))return f[i]})),m(f,"findIndex",(function(e,t){var i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=0;i<h;i++)if(e.call(t,f[i],i,b[r[i]],f))return i;return-1})),m(f,"findField",(function(e,t){var i,o;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(o=0;o<h;o++)if(i=b[r[o]],e.call(t,f[o],o,i,f))return i})),m(f,"forEach",(function(e,t){var i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=0;i<h;i++)e.call(t,f[i],i,b[r[i]],f)})),m(f,"ind2key",(function(e){if(this!==f)throw new TypeError(j("1Vp1m"));if(!i(e))throw new TypeError(j("1Vp8A",e));e<0&&(e=h+e);if(e<0||e>=h)return;return b[r[e]]})),m(f,"key2ind",(function(t){var n;if(this!==f)throw new TypeError(j("1Vp1m"));if(!e(t))throw new TypeError(j("1Vp3F",t));for(n=0;n<h;n++)if(b[r[n]]===t)return n;return-1})),m(f,"keys",(function(){var e,t,n,i;if((e=this)!==f)throw new TypeError(j("1Vp1m"));i=-1,d(t={},"next",{configurable:!1,enumerable:!1,writable:!1,value:o}),d(t,"return",{configurable:!1,enumerable:!1,writable:!1,value:function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}}}),B&&d(t,y,{configurable:!1,enumerable:!1,writable:!1,value:function(){return e.keys()}});return t;function o(){return i+=1,n||i>=h?{done:!0}:{value:[i,b[r[i]]],done:!1}}})),m(f,"lastFieldOf",(function(e){var t;if(this!==f)throw new TypeError(j("1Vp1m"));if(arguments.length>1){if(!i(t=arguments[1]))throw new TypeError(j("1Vp7f",t));if(t>=h)t=h-1;else if(t<0&&(t=h+t)<0)return}else t=h-1;for(;t>=0;t--)if(f[t]===e)return b[r[t]]})),m(f,"map",(function(e,t){var i,s;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=J(o),s=0;s<h;s++)i[s]=e.call(t,f[s],s,b[r[s]],f);return i})),m(f,"reduce",(function(e){var t,i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));arguments.length>1?(t=arguments[1],i=0):(t=f[0],i=1);for(;i<h;i++)t=e(t,f[i],i,b[r[i]],f);return t})),m(f,"reduceRight",(function(e){var t,i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));arguments.length>1?(t=arguments[1],i=h-1):(t=f[h-1],i=h-2);for(;i>=0;i--)t=e(t,f[i],i,b[r[i]],f);return t})),m(f,"reverse",(function(){var e,t,n;if(this!==f)throw new TypeError(j("1Vp1m"));for(t=0;t<v(h/2);t++)n=h-t-1,e=f[t],f[t]=f[n],f[n]=e;for(t=0;t<h;t++)r[t]=h-r[t]-1;return f})),m(f,"slice",(function(e,t){var n,s,p,l;if(this!==f)throw new TypeError(j("1Vp1m"));if(0===arguments.length)return J(f,o);if(p=e,!i(p))throw new TypeError(j("1Vp7e",e));p<0&&(p=h+p)<0&&(p=0);if(1===arguments.length)l=h;else{if(!i(l=t))throw new TypeError(j("1Vp7f",t));l<0?(l=h+l)<0&&(l=0):l>h&&(l=h)}if(p>=l)return null;for(s=[],n=[];p<l;p++)s.push(b[r[p]]),n.push(f[p]);return O(s,R)(n,o)})),m(f,"some",(function(e,t){var i;if(this!==f)throw new TypeError(j("1Vp1m"));if(!n(e))throw new TypeError(j("1Vp3c",e));for(i=0;i<h;i++)if(e.call(t,f[i],i,b[r[i]],f))return!0;return!1})),m(f,"sort",(function(e){var t,i,o,s,p,l;if(this!==f)throw new TypeError(j("1Vp1m"));if(arguments.length){if(!n(e))throw new TypeError(j("1Vp3c",e));t=e}else t=T;for(r.sort((function(e,n){var i=f[r[e]],o=f[r[n]];return t(i,o)})),i=r.slice(),o=0;o<h;o++)if(i[o]!==o){for(l=f[o],p=i[s=o];p!==o;)f[s]=f[p],i[s]=s,p=i[s=p];f[s]=l,i[s]=s}return f})),m(f,"subtuple",(function(e,t){var n,s,p,l;if(this!==f)throw new TypeError(j("1Vp1m"));if(0===arguments.length)return J(f.buffer,f.byteOffset,o);if(s=e,!i(s))throw new TypeError(j("1Vp7e",e));s<0&&(s=h+s)<0&&(s=0);if(1===arguments.length)p=h;else{if(!i(p=t))throw new TypeError(j("1Vp7f",t));p<0?(p=h+p)<0&&(p=0):p>h&&(p=h)}if(s>=p)return null;for(n=[],l=s;l<p;l++)n.push(b[r[l]]);return O(n,R)(f.buffer,f.byteOffset+s*f.BYTES_PER_ELEMENT,o)})),m(f,"toJSON",(function(){var e,t;if(this!==f)throw new TypeError(j("1Vp1m"));for(e={},t=0;t<h;t++)e[b[t]]=f[r[t]];return e})),m(f,"toString",(function(){var e,t;if(this!==f)throw new TypeError(j("1Vp1m"));for(e=R.name+"(",t=0;t<h;t++)e+=b[t],e+="=",e+=f[r[t]],t<h-1&&(e+=", ");return e+=")"})),f;function l(e){return function(){return f[r[e]]}}function g(e){return function(t){f[r[e]]=t}}}return d(J,"from",{configurable:!1,enumerable:!1,writable:!1,value:function(r){var e,t,i,f,p,l,u;if(this!==J)throw new TypeError(j("1Vp1n"));if((t=arguments.length)>1){if(!n(f=arguments[1]))throw new TypeError(j("1Vp2H",f));t>2&&(e=arguments[2])}if(s(r)){if(r.length!==h)throw new RangeError(j("1VpBd",h,r.length));if(i=J(h,R.dtype),f)for(u=0;u<h;u++)i[u]=f.call(e,r[u],u,b[u]);else for(u=0;u<h;u++)i[u]=r[u]}else{if(!(o(r)&&B&&n(r[y])))throw new TypeError(j("1Vp2J",r));if(l=r[y](),!n(l.next))throw new TypeError(j("1Vp2J",r));p=f?function(r,e,t,n){var i,o,s;for(i=[],s=-1;!(o=e.next()).done;)s+=1,i.push(t.call(n,o.value,s,r[s]));return i}(b,l,f,e):function(r){var e,t;for(e=[];!(t=r.next()).done;)e.push(t.value);return e}(l),i=J(p,R.dtype)}return i}}),d(J,"fromObject",{configurable:!1,enumerable:!1,writable:!1,value:function(r){var e,t,i,o,s,p;if(this!==J)throw new TypeError(j("1Vp1n"));if(null===r||"object"!=typeof r)throw new TypeError(j("1Vp3L",r));if((t=arguments.length)>1){if(!n(o=arguments[1]))throw new TypeError(j("1Vp2H",o));t>2&&(e=arguments[2])}if(i=J(h,R.dtype),o)for(p=0;p<h;p++)s=b[p],f(r,s)&&(i[p]=o.call(e,r[s],s));else for(p=0;p<h;p++)s=b[p],f(r,s)&&(i[p]=r[s]);return i}}),d(J,"of",{configurable:!1,enumerable:!1,writable:!1,value:function(){var r,e;if(this!==J)throw new TypeError(j("1Vp1n"));if(arguments.length!==h)throw new RangeError(j("1VpBe",h,arguments.length));for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return J(r)}}),J}export{O as default};
//# sourceMappingURL=index.mjs.map
