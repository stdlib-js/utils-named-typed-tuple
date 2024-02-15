// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-properties-in@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-dtypes@v0.2.0-esm/index.mjs";function E(e,t){var r;for(r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}function T(e){var t,r;for(t={},r=0;r<e.length;r++){if(a(t,e[r]))return!1;t[e[r]]=!0}return!0}var x=j();function V(e,r){if(!y(r))return new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",r));if(a(r,"dtype")){if(e.dtype=r.dtype,!t(e.dtype))return new TypeError(b("invalid option. `%s` option must be a string. Option: `%s`.","dtype",e.dtype));if(!E(x,e.dtype))return new TypeError(b("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",e.dtype))}return a(r,"name")&&(e.name=r.name,!t(e.name))?new TypeError(b("invalid option. `%s` option must be a string. Option: `%s`.","name",e.name)):null}function F(e,t){return e-t}function S(e){var t,r;for(t=[];!(r=e.next()).done;)t.push(r.value);return t}function O(e,t,r,n){var i,o,s;for(i=[],s=-1;!(o=t.next()).done;)s+=1,i.push(r.call(n,o.value,s,e[s]));return i}var N=l(new h(0)),k=u();function R(u,l){var h,y,j,x,M;if(!e(u))throw new TypeError(b("invalid argument. Must provide an array of strings. Value: `%s`.",u));if(!T(u))throw new TypeError(b("invalid argument. Field names must be distinct. Value: `%s`.",u));for(y=u.slice(),h=y.length,M=0;M<h;M++)if(E(N,y[M]))throw new Error(b("invalid argument. Provided field name is reserved. Name: `%s`.",y[M]));if(j={dtype:"float64",name:"tuple"},arguments.length>1&&(x=V(j,l)))throw x;function P(){var e,o,s,a,u;if((a=(s=arguments.length)<=0?f(h,j.dtype):1===s?t(arguments[0])?f(h,arguments[0]):r(arguments[0])?f(arguments[0],0,h,j.dtype):f(arguments[0],j.dtype):2===s?r(arguments[0])?t(arguments[1])?f(arguments[0],0,h,arguments[1]):f(arguments[0],arguments[1],h,j.dtype):f(arguments[0],arguments[1]):f(arguments[0],arguments[1],h,arguments[2])).length!==h)throw new RangeError(b("invalid arguments. Arguments are incompatible with the number of tuple fields. Number of fields: `%u`. Number of data elements: `%u`.",h,a.length));for(o=d(a),e=[],u=0;u<h;u++)e.push(u),c(a,y[u],l(u),E(u));return p(a,"name",j.name),v(a,"fields",T),v(a,"orderedFields",x),p(a,"entries",V),p(a,"every",S),p(a,"fieldOf",O),p(a,"filter",N),p(a,"find",M),p(a,"findIndex",z),p(a,"findField",_),p(a,"forEach",A),p(a,"ind2key",B),p(a,"key2ind",I),p(a,"keys",J),p(a,"lastFieldOf",L),p(a,"map",Y),p(a,"reduce",q),p(a,"reduceRight",C),p(a,"reverse",D),p(a,"slice",G),p(a,"some",H),p(a,"sort",K),p(a,"subtuple",Q),p(a,"toJSON",U),p(a,"toString",W),a;function l(t){return function(){return a[e[t]]}}function E(t){return function(r){a[e[t]]=r}}function T(){return y.slice()}function x(){var t,r;for(t=y.slice(),r=0;r<h;r++)t[r]=y[e[r]];return t}function V(){var t,r,n,i;if((t=this)!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");return i=-1,m(r={},"next",{configurable:!1,enumerable:!1,writable:!1,value:function(){if(i+=1,n||i>=h)return{done:!0};return{value:[i,y[e[i]],a[i]],done:!1}}}),m(r,"return",{configurable:!1,enumerable:!1,writable:!1,value:function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}}}),k&&m(r,w,{configurable:!1,enumerable:!1,writable:!1,value:function(){return t.entries()}}),r}function S(t,r){var i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=0;i<h;i++)if(!t.call(r,a[i],i,y[e[i]],a))return!1;return!0}function O(t){var r;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(arguments.length>1){if(!i(r=arguments[0]))throw new TypeError(b("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(r>=h)return;r<0&&(r=h+r)<0&&(r=0)}else r=0;for(;r<h;r++)if(a[r]===t)return y[e[r]]}function N(t,r){var i,s,u;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=[],s=[],u=0;u<h;u++)t.call(r,a[u],u,y[e[u]],a)&&(s.push(y[e[u]]),i.push(a[u]));return s.length===h?P(i,o):s.length?R(s,j)(i):null}function M(t,r){var i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=0;i<h;i++)if(t.call(r,a[i],i,y[e[i]],a))return a[i]}function _(t,r){var i,o;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(o=0;o<h;o++)if(i=y[e[o]],t.call(r,a[o],o,i,a))return i}function z(t,r){var i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=0;i<h;i++)if(t.call(r,a[i],i,y[e[i]],a))return i;return-1}function A(t,r){var i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=0;i<h;i++)t.call(r,a[i],i,y[e[i]],a)}function B(t){if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!i(t))throw new TypeError(b("invalid argument. Must provide an integer. Value: `%s`.",t));if(t<0&&(t=h+t),!(t<0||t>=h))return y[e[t]]}function I(r){var n;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!t(r))throw new TypeError(b("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=0;n<h;n++)if(y[e[n]]===r)return n;return-1}function J(){var t,r,n,i;if((t=this)!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");return i=-1,m(r={},"next",{configurable:!1,enumerable:!1,writable:!1,value:function(){if(i+=1,n||i>=h)return{done:!0};return{value:[i,y[e[i]]],done:!1}}}),m(r,"return",{configurable:!1,enumerable:!1,writable:!1,value:function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}}}),k&&m(r,w,{configurable:!1,enumerable:!1,writable:!1,value:function(){return t.keys()}}),r}function L(t){var r;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(arguments.length>1){if(!i(r=arguments[1]))throw new TypeError(b("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(r>=h)r=h-1;else if(r<0&&(r=h+r)<0)return}else r=h-1;for(;r>=0;r--)if(a[r]===t)return y[e[r]]}function Y(t,r){var i,s;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=P(o),s=0;s<h;s++)i[s]=t.call(r,a[s],s,y[e[s]],a);return i}function q(t){var r,i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(arguments.length>1?(r=arguments[1],i=0):(r=a[0],i=1);i<h;i++)r=t(r,a[i],i,y[e[i]],a);return r}function C(t){var r,i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(arguments.length>1?(r=arguments[1],i=h-1):(r=a[h-1],i=h-2);i>=0;i--)r=t(r,a[i],i,y[e[i]],a);return r}function D(){var t,r,n;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");for(r=0;r<g(h/2);r++)n=h-r-1,t=a[r],a[r]=a[n],a[n]=t;for(r=0;r<h;r++)e[r]=h-e[r]-1;return a}function G(t,r){var n,s,u,l;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(0===arguments.length)return P(a,o);if(!i(u=t))throw new TypeError(b("invalid argument. First argument must be an integer. Value: `%s`.",t));if(u<0&&(u=h+u)<0&&(u=0),1===arguments.length)l=h;else{if(!i(l=r))throw new TypeError(b("invalid argument. Second argument must be an integer. Value: `%s`.",r));l<0?(l=h+l)<0&&(l=0):l>h&&(l=h)}if(u>=l)return null;for(s=[],n=[];u<l;u++)s.push(y[e[u]]),n.push(a[u]);return R(s,j)(n,o)}function H(t,r){var i;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));for(i=0;i<h;i++)if(t.call(r,a[i],i,y[e[i]],a))return!0;return!1}function K(t){var r,i,o,s,u,l;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(arguments.length){if(!n(t))throw new TypeError(b("invalid argument. First argument must be a function. Value: `%s`.",t));r=t}else r=F;for(e.sort(f),i=e.slice(),o=0;o<h;o++)if(i[o]!==o){for(l=a[o],u=i[s=o];u!==o;)a[s]=a[u],i[s]=s,u=i[s=u];a[s]=l,i[s]=s}return a;function f(t,n){var i=a[e[t]],o=a[e[n]];return r(i,o)}}function Q(t,r){var n,s,u,l;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");if(0===arguments.length)return P(a.buffer,a.byteOffset,o);if(!i(s=t))throw new TypeError(b("invalid argument. First argument must be an integer. Value: `%s`.",t));if(s<0&&(s=h+s)<0&&(s=0),1===arguments.length)u=h;else{if(!i(u=r))throw new TypeError(b("invalid argument. Second argument must be an integer. Value: `%s`.",r));u<0?(u=h+u)<0&&(u=0):u>h&&(u=h)}if(s>=u)return null;for(n=[],l=s;l<u;l++)n.push(y[e[l]]);return R(n,j)(a.buffer,a.byteOffset+s*a.BYTES_PER_ELEMENT,o)}function U(){var t,r;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");for(t={},r=0;r<h;r++)t[y[r]]=a[e[r]];return t}function W(){var t,r;if(this!==a)throw new TypeError("invalid invocation. `this` is not host tuple.");for(t=j.name+"(",r=0;r<h;r++)t+=y[r],t+="=",t+=a[e[r]],r<h-1&&(t+=", ");return t+=")"}}return m(P,"from",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var t,r,i,a,u,l;if(this!==P)throw new TypeError("invalid invocation. `this` is not the host tuple factory.");if((r=arguments.length)>1){if(!n(a=arguments[1]))throw new TypeError(b("invalid argument. Second argument must be a function. Value: `%s`.",a));r>2&&(t=arguments[2])}if(s(e)){if(e.length!==h)throw new RangeError(b("invalid argument. Source is incompatible with the number of tuple fields. Number of fields: `%u`. Source length: `%u`.",h,e.length));if(i=P(h,j.dtype),a)for(l=0;l<h;l++)i[l]=a.call(t,e[l],l,y[l]);else for(l=0;l<h;l++)i[l]=e[l]}else{if(!(o(e)&&k&&n(e[w])))throw new TypeError(b("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(u=e[w](),!n(u.next))throw new TypeError(b("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));i=P(a?O(y,u,a,t):S(u),j.dtype)}return i}}),m(P,"fromObject",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var t,r,i,o,s,u;if(this!==P)throw new TypeError("invalid invocation. `this` is not the host tuple factory.");if(null===e||"object"!=typeof e)throw new TypeError(b("invalid argument. First argument must be an object. Value: `%s`.",e));if((r=arguments.length)>1){if(!n(o=arguments[1]))throw new TypeError(b("invalid argument. Second argument must be a function. Value: `%s`.",o));r>2&&(t=arguments[2])}if(i=P(h,j.dtype),o)for(u=0;u<h;u++)s=y[u],a(e,s)&&(i[u]=o.call(t,e[s],s));else for(u=0;u<h;u++)s=y[u],a(e,s)&&(i[u]=e[s]);return i}}),m(P,"of",{configurable:!1,enumerable:!1,writable:!1,value:function(){var e,t;if(this!==P)throw new TypeError("invalid invocation. `this` is not the host tuple factory.");if(arguments.length!==h)throw new RangeError(b("invalid invocation. Number of arguments is incompatible with the number of tuple fields. Number of fields: `%u`. Number of arguments: `%u`.",h,arguments.length));for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return P(e)}}),P}export{R as default};
//# sourceMappingURL=index.mjs.map