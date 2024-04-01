// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";function h(h,w,p,m,l,d){var E,g,Z,j,a,v;if(n(h))v=h;else if(!i(h))throw new TypeError(o("1fZ5d",h));if(!s(w))throw new TypeError(o("1fZ2y",w));if(!s(p)&&null!==p)throw new TypeError(o("1fZ5e",p));if(!e(m))throw new TypeError(o("1fZ5f",m));if(!r(l))throw new TypeError(o("1fZ5X",l));if(!r(d))throw new TypeError(o("1fZ5g",d));if(0===(Z=l+d))throw new Error(o("1fZ1M"));if(v){if(j=w.length/Z,!t(j))throw new Error(o("1fZ1N"))}else if(j=h.length,w.length!==j*Z)throw new Error(o("1fZ1N"));if(p&&p.length!==j)throw new Error(o("1fZ0k"));if(3*Z+2===m)g=!1;else{if(4*Z+2!==m)throw new Error(o("1fZ1O"));g=!0}return a=l*(E=g?4:3)+1,function(){var e,i,c,u,y,T,b,x,A,R,D,N,U,k;if(b=arguments.length,b!==m){if(b<m)throw new Error(o("1fZ0l"));if(b!==m+1)throw new Error(o("1fZ0m"));c=arguments[b-=1]}if(R=arguments[0],!t(R))throw new TypeError(o("1fZ7e",R));if(T=[R],x=arguments[b-1],!n(x))throw new TypeError(o("1fZ2b",x));for(y=[],U=1;U<m;U+=E)y.push(arguments[U]);for(e=[],U=3;U<m;U+=E){if(!t(D=arguments[U]))throw U<a?new TypeError(o("1fZAH",D)):new TypeError(o("1fZAI",D));e.push(D)}if(g)for(i=[],U=4;U<m;U+=E){if(!r(D=arguments[U]))throw U<a?new TypeError(o("1fZAG",D)):new TypeError(o("1fZAE",D));i.push(D)}for(u=[],U=2;U<m;U+=E){if(!s(D=arguments[U]))throw U<a?new TypeError(o("1fZDg",D)):new TypeError(o("1fZDh",D));if(k=(U-2)/E,g){if(A=i[k]+(R-1)*e[k],R>0&&(A<0||A>=D.length))throw U<a?new RangeError(o("1fZ1T")):new RangeError(o("1fZ1U"))}else if((R-1)*f(e[k])>=D.length)throw U<a?new RangeError(o("1fZ1T")):new RangeError(o("1fZ1U"));u.push(D)}if((A=function(r,e,t,i,n,s,o,f,h){var w,p,m,l;for(w=s,m=0;m<r;m++){for(p=h,l=0;l<e&&t[w+l*n]===o[p];l++)p+=f;if(l===e)return m;w+=i}return-1}(j,Z,w,Z,1,0,y,1,0))<0)throw new TypeError(o("1fZ1L"));N=v||h[A];p?g?N(u,T,e,i,p[A],x,c):N(u,T,e,p[A],x,c):g?N(u,T,e,i,x,c):N(u,T,e,x,c);if(1===d)return u[Z-1];if(0===d)return;return u.slice(l)}}export{h as default};
//# sourceMappingURL=index.mjs.map
