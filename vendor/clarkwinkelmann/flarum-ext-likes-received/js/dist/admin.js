module.exports=function(e){var n={};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=5)}({0:function(e,n){e.exports=flarum.core.compat.app},5:function(e,n,r){"use strict";r.r(n);var t=r(0),i=r.n(t);i.a.initializers.add("clarkwinkelmann-likes-received",(function(){i.a.extensionData.for("clarkwinkelmann-likes-received").registerPermission({icon:"fas fa-thumbs-up",label:i.a.translator.trans("clarkwinkelmann-likes-received.admin.permission.view"),permission:"clarkwinkelmann-likes-received.view",allowGuest:!0},"view")}))}});
//# sourceMappingURL=admin.js.map