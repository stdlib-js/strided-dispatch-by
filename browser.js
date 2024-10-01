// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(r){var e,n,f;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,f=parseInt(n,10),!isFinite(f)){if(!t(n))throw new Error("invalid integer. Value: "+n);f=0}return f<0&&("u"===r.specifier||10!==e)&&(f=4294967295+f+1),f<0?(n=(-f).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=f.toString(e),f||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,d=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,y,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,w,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,T=Array.isArray;function j(r){return r!=r}function Z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,o,a,c,u,l,s,p,g,h,w;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",u=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,j(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,w=void 0,(w=g-p.length)<0?p:p=h?p+m(w):m(w)+p)),c+=n.arg||"",u+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var O,A=Object.prototype,V=A.toString,P=A.__defineGetter__,F=A.__defineSetter__,R=A.__lookupGetter__,N=A.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&F&&F.call(r,e,t.set),r};var C=O;function $(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return G&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,U=Object.prototype.hasOwnProperty,W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"",D=L()?function(r){var e,t,n,i,o;if(null==r)return M.call(r);t=r[X],o=X,e=null!=(i=r)&&U.call(i,o);try{r[X]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[X]=t:delete r[X],n}:function(r){return M.call(r)},Y=Number,z=Y.prototype.toString,H=L();function q(r){return"object"==typeof r&&(r instanceof Y||(H?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function J(r){return B(r)||q(r)}$(J,"isPrimitive",B),$(J,"isObject",q);var K=Number.POSITIVE_INFINITY,Q=Y.NEGATIVE_INFINITY,rr=Math.floor;function er(r){return rr(r)===r}function tr(r){return r<K&&r>Q&&er(r)}function nr(r){return B(r)&&tr(r)}function ir(r){return q(r)&&tr(r.valueOf())}function or(r){return nr(r)||ir(r)}function ar(r){return nr(r)&&r>=0}function fr(r){return ir(r)&&r.valueOf()>=0}function cr(r){return ar(r)||fr(r)}function ur(r){return nr(r)&&r>0}function lr(r){return ir(r)&&r.valueOf()>0}function sr(r){return ur(r)||lr(r)}$(or,"isPrimitive",nr),$(or,"isObject",ir),$(cr,"isPrimitive",ar),$(cr,"isObject",fr),$(sr,"isPrimitive",ur),$(sr,"isObject",lr);var pr=4294967295,gr=/./;function hr(r){return"boolean"==typeof r}var wr=Boolean,dr=Boolean.prototype.toString,yr=L();function br(r){return"object"==typeof r&&(r instanceof wr||(yr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function vr(r){return hr(r)||br(r)}$(vr,"isPrimitive",hr),$(vr,"isObject",br);var mr="object"==typeof self?self:null,Er="object"==typeof window?window:null,Tr="object"==typeof globalThis?globalThis:null,jr=function(r){if(arguments.length){if(!hr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Tr)return Tr;if(mr)return mr;if(Er)return Er;throw new Error("unexpected error. Unable to resolve global object.")}(),Zr=jr.document&&jr.document.childNodes,_r=Int8Array;function Sr(){return/^\s*function\s*([^(]*)/i}var xr=/^\s*function\s*([^(]*)/i;$(Sr,"REGEXP",xr);var kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function Ir(r){return null!==r&&"object"==typeof r}function Or(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xr.exec(n.toString()))return e[1]}return Ir(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(Ir,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!kr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ir));var Ar="function"==typeof gr||"object"==typeof _r||"function"==typeof Zr?function(r){return Or(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Or(r).toLowerCase():e};function Vr(r){return"function"===Ar(r)}var Pr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&er(r.length)&&r.length>=0&&r.length<=pr}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vr),Fr=9007199254740991;function Rr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&er(r.length)&&r.length>=0&&r.length<=Fr}function Nr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return function(r,e,t,n,i,o){var a,f,c,u,l,s;if(Vr(r))s=r;else if(!Pr(r))throw new TypeError(Nr("1fZ5d",r));if(!Rr(e))throw new TypeError(Nr("1fZ2y",e));if(!Rr(t)&&null!==t)throw new TypeError(Nr("1fZ5e",t));if(!sr(n))throw new TypeError(Nr("1fZ5f",n));if(!ar(i))throw new TypeError(Nr("1fZ5X",i));if(!ar(o))throw new TypeError(Nr("1fZ5g",o));if(0===(c=i+o))throw new Error(Nr("1fZ1M"));if(s){if(!nr(u=e.length/c))throw new Error(Nr("1fZ1N"))}else if(u=r.length,e.length!==u*c)throw new Error(Nr("1fZ1N"));if(t&&t.length!==u)throw new Error(Nr("1fZ0k"));if(3*c+2===n)f=!1;else{if(4*c+2!==n)throw new Error(Nr("1fZ1O"));f=!0}return l=i*(a=f?4:3)+1,function(){var p,g,h,w,d,y,b,v,m,E,T,j,Z,_,S;if((b=arguments.length)!==n){if(b<n)throw new Error(Nr("1fZ0l"));if(b!==n+1)throw new Error(Nr("1fZ0m"));h=arguments[b-=1]}if(!nr(E=arguments[0]))throw new TypeError(Nr("1fZ7e",E));if(y=[E],!Vr(v=arguments[b-1]))throw new TypeError(Nr("1fZ2b",v));for(d=[],Z=1;Z<n;Z+=a)d.push(arguments[Z]);for(p=[],Z=3;Z<n;Z+=a){if(!nr(T=arguments[Z]))throw Z<l?new TypeError(Nr("1fZAH",T)):new TypeError(Nr("1fZAI",T));p.push(T)}if(f)for(g=[],Z=4;Z<n;Z+=a){if(!ar(T=arguments[Z]))throw Z<l?new TypeError(Nr("1fZAG",T)):new TypeError(Nr("1fZAE",T));g.push(T)}for(w=[],Z=2;Z<n;Z+=a){if(!Rr(T=arguments[Z]))throw Z<l?new TypeError(Nr("1fZDg",T)):new TypeError(Nr("1fZDh",T));if(_=(Z-2)/a,f){if(m=g[_]+(E-1)*p[_],E>0&&(m<0||m>=T.length))throw Z<l?new RangeError(Nr("1fZ1T")):new RangeError(Nr("1fZ1U"))}else if((E-1)*(S=p[_],Math.abs(S))>=T.length)throw Z<l?new RangeError(Nr("1fZ1T")):new RangeError(Nr("1fZ1U"));w.push(T)}if((m=function(r,e,t,n,i,o,a,f,c){var u,l,s,p;for(u=o,s=0;s<r;s++){for(l=c,p=0;p<e&&t[u+p*i]===a[l];p++)l+=f;if(p===e)return s;u+=n}return-1}(u,c,e,c,1,0,d,1,0))<0)throw new TypeError(Nr("1fZ1L"));return j=s||r[m],t?f?j(w,y,p,g,t[m],v,h):j(w,y,p,t[m],v,h):f?j(w,y,p,g,v,h):j(w,y,p,v,h),1===o?w[c-1]:0!==o?w.slice(i):void 0}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dispatchBy=e();
//# sourceMappingURL=browser.js.map
