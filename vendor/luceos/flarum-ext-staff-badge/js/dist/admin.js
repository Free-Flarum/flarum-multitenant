module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var f=t[r]={i:r,l:!1,exports:{}};return e[r].call(f.exports,f,f.exports,a),f.l=!0,f.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var f in e)a.d(r,f,function(t){return e[t]}.bind(null,f));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=14)}({0:function(e,t){e.exports=flarum.core.compat.app},14:function(e,t,a){"use strict";a.r(t);var r=a(0),f=a.n(r);f.a.initializers.add("serakoi/flarumstaffbadge",(function(){f.a.extensionData.for("serakoi-flarumstaffbadge").registerSetting({setting:"serakoi-flarumstaffbadge.staffBadge",name:"staffBadge",type:"text",label:f.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadge.label"),help:f.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadge.help")}).registerSetting({setting:"serakoi-flarumstaffbadge.staffBadgeTextColor",name:"staffBadgeTextColor",type:"text",label:f.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextColor.label"),help:f.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextColor.help")}).registerSetting({setting:"serakoi-flarumstaffbadge.staffBadgeTextBg",name:"staffBadgeTextBg",type:"text",label:f.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextBg.label"),help:f.a.translator.trans("serakoi-flarumstaffbadge.admin.staffBadgeTextBg.help")})}))}});
//# sourceMappingURL=admin.js.map