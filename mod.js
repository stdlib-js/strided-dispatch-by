// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(r){var e,n,f;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,f=parseInt(n,10),!isFinite(f)){if(!t(n))throw new Error("invalid integer. Value: "+n);f=0}return f<0&&("u"===r.specifier||10!==e)&&(f=4294967295+f+1),f<0?(n=(-f).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=f.toString(e),f||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,y=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,d,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,w,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,T=isNaN,j=Array.isArray;function Z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,o,a,u,c,l,s,p,g,h,w;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,w=void 0,(w=g-p.length)<0?p:p=h?p+m(w):m(w)+p)),u+=n.arg||"",c+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var O,A=Object.prototype,V=A.toString,N=A.__defineGetter__,P=A.__defineSetter__,F=A.__lookupGetter__,R=A.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var C=O;function $(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return G&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"";var D=L()?function(r){var e,t,n,i,o;if(null==r)return M.call(r);t=r[X],o=X,e=null!=(i=r)&&U.call(i,o);try{r[X]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[X]=t:delete r[X],n}:function(r){return M.call(r)},Y=Number,z=Y.prototype.toString;var H=L();function q(r){return"object"==typeof r&&(r instanceof Y||(H?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function J(r){return B(r)||q(r)}$(J,"isPrimitive",B),$(J,"isObject",q);var K=Number.POSITIVE_INFINITY,Q=Y.NEGATIVE_INFINITY,rr=Math.floor;function er(r){return rr(r)===r}function tr(r){return r<K&&r>Q&&er(r)}function nr(r){return B(r)&&tr(r)}function ir(r){return q(r)&&tr(r.valueOf())}function or(r){return nr(r)||ir(r)}function ar(r){return nr(r)&&r>=0}function fr(r){return ir(r)&&r.valueOf()>=0}function ur(r){return ar(r)||fr(r)}function cr(r){return nr(r)&&r>0}function lr(r){return ir(r)&&r.valueOf()>0}function sr(r){return cr(r)||lr(r)}$(or,"isPrimitive",nr),$(or,"isObject",ir),$(ur,"isPrimitive",ar),$(ur,"isObject",fr),$(sr,"isPrimitive",cr),$(sr,"isObject",lr);var pr=4294967295;var gr=/./;function hr(r){return"boolean"==typeof r}var wr=Boolean,yr=Boolean.prototype.toString;var dr=L();function br(r){return"object"==typeof r&&(r instanceof wr||(dr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function vr(r){return hr(r)||br(r)}$(vr,"isPrimitive",hr),$(vr,"isObject",br);var mr="object"==typeof self?self:null,Er="object"==typeof window?window:null,Tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},jr="object"==typeof Tr?Tr:null,Zr="object"==typeof globalThis?globalThis:null;var _r=function(r){if(arguments.length){if(!hr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Zr)return Zr;if(mr)return mr;if(Er)return Er;if(jr)return jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Sr=_r.document&&_r.document.childNodes,kr=Int8Array;function xr(){return/^\s*function\s*([^(]*)/i}var Ir=/^\s*function\s*([^(]*)/i;$(xr,"REGEXP",Ir);var Or=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function Ar(r){return null!==r&&"object"==typeof r}function Vr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ir.exec(n.toString()))return e[1]}return Ar(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(Ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ar));var Nr="function"==typeof gr||"object"==typeof kr||"function"==typeof Sr?function(r){return Vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Vr(r).toLowerCase():e};function Pr(r){return"function"===Nr(r)}var Fr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&er(r.length)&&r.length>=0&&r.length<=pr}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr),Rr=9007199254740991;function Cr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&er(r.length)&&r.length>=0&&r.length<=Rr}function $r(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function Br(r,e,t,n,i,o){var a,f,u,c,l,s;if(Pr(r))s=r;else if(!Fr(r))throw new TypeError($r("1fZ5d",r));if(!Cr(e))throw new TypeError($r("1fZ2y",e));if(!Cr(t)&&null!==t)throw new TypeError($r("1fZ5e",t));if(!sr(n))throw new TypeError($r("1fZ5f",n));if(!ar(i))throw new TypeError($r("1fZ5X",i));if(!ar(o))throw new TypeError($r("1fZ5g",o));if(0===(u=i+o))throw new Error($r("1fZ1M"));if(s){if(!nr(c=e.length/u))throw new Error($r("1fZ1N"))}else if(c=r.length,e.length!==c*u)throw new Error($r("1fZ1N"));if(t&&t.length!==c)throw new Error($r("1fZ0k"));if(3*u+2===n)f=!1;else{if(4*u+2!==n)throw new Error($r("1fZ1O"));f=!0}return l=i*(a=f?4:3)+1,function(){var p,g,h,w,y,d,b,v,m,E,T,j,Z,_;if(b=arguments.length,b!==n){if(b<n)throw new Error($r("1fZ0l"));if(b!==n+1)throw new Error($r("1fZ0m"));h=arguments[b-=1]}if(E=arguments[0],!nr(E))throw new TypeError($r("1fZ7e",E));if(d=[E],v=arguments[b-1],!Pr(v))throw new TypeError($r("1fZ2b",v));for(y=[],Z=1;Z<n;Z+=a)y.push(arguments[Z]);for(p=[],Z=3;Z<n;Z+=a){if(!nr(T=arguments[Z]))throw Z<l?new TypeError($r("1fZAH",T)):new TypeError($r("1fZAI",T));p.push(T)}if(f)for(g=[],Z=4;Z<n;Z+=a){if(!ar(T=arguments[Z]))throw Z<l?new TypeError($r("1fZAG",T)):new TypeError($r("1fZAE",T));g.push(T)}for(w=[],Z=2;Z<n;Z+=a){if(!Cr(T=arguments[Z]))throw Z<l?new TypeError($r("1fZDg",T)):new TypeError($r("1fZDh",T));if(_=(Z-2)/a,f){if(m=g[_]+(E-1)*p[_],E>0&&(m<0||m>=T.length))throw Z<l?new RangeError($r("1fZ1T")):new RangeError($r("1fZ1U"))}else if((E-1)*(S=p[_],Math.abs(S))>=T.length)throw Z<l?new RangeError($r("1fZ1T")):new RangeError($r("1fZ1U"));w.push(T)}var S;if((m=function(r,e,t,n,i,o,a,f,u){var c,l,s,p;for(c=o,s=0;s<r;s++){for(l=u,p=0;p<e&&t[c+p*i]===a[l];p++)l+=f;if(p===e)return s;c+=n}return-1}(c,u,e,u,1,0,y,1,0))<0)throw new TypeError($r("1fZ1L"));j=s||r[m];t?f?j(w,d,p,g,t[m],v,h):j(w,d,p,t[m],v,h):f?j(w,d,p,g,v,h):j(w,d,p,v,h);if(1===o)return w[u-1];if(0===o)return;return w.slice(i)}}export{Br as default};
//# sourceMappingURL=mod.js.map