module.exports=function(t){var n={};function e(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(s,o,function(n){return t[n]}.bind(null,o));return s},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n){t.exports=flarum.core.compat.app},,,,function(t,n){t.exports=flarum.extensions["fof-components"]},,function(t,n,e){"use strict";e.r(n);var s=e(0),o=e.n(s),i=e(4),a=i.settings.SettingsModal,r=i.settings.items,l=r.StringItem,u=r.BooleanItem;o.a.initializers.add("maicol07-sso",(function(){app.extensionSettings["maicol07-sso"]=function(){return app.modal.show(a,{title:app.translator.trans("maicol07-sso.admin.settings.title"),size:"small",items:function(t){return[m(l,{setting:t,name:"maicol07-sso.signup_url"},app.translator.trans("maicol07-sso.admin.settings.signup_url")),m(l,{setting:t,name:"maicol07-sso.login_url"},app.translator.trans("maicol07-sso.admin.settings.login_url")),m(l,{setting:t,name:"maicol07-sso.logout_url"},app.translator.trans("maicol07-sso.admin.settings.logout_url")),m(u,{setting:t,name:"maicol07-sso.disable_login_btn"},app.translator.trans("maicol07-sso.admin.settings.disable_login_btn")),m(u,{setting:t,name:"maicol07-sso.disable_signup_btn"},app.translator.trans("maicol07-sso.admin.settings.disable_signup_btn")),m(l,{setting:t,name:"maicol07-sso.jwt_iss"},app.translator.trans("maicol07-sso.admin.settings.jwt_iss")),m(l,{setting:t,name:"maicol07-sso.jwt_signer_key"},app.translator.trans("maicol07-sso.admin.settings.jwt_signer_key"))]}})}}))}]);
//# sourceMappingURL=admin.js.map