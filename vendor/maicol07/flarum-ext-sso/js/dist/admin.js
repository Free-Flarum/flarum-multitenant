module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}({0:function(t,e){t.exports=flarum.core.compat["admin/app"]},7:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a);s.a.initializers.add("maicol07-sso",(function(){s.a.extensionData.for("maicol07-sso").registerSetting({setting:"maicol07-sso.signup_url",label:s.a.translator.trans("maicol07-sso.admin.settings.signup_url"),type:"url"}).registerSetting({setting:"maicol07-sso.login_url",label:s.a.translator.trans("maicol07-sso.admin.settings.login_url"),type:"url"}).registerSetting({setting:"maicol07-sso.logout_url",label:s.a.translator.trans("maicol07-sso.admin.settings.logout_url"),type:"url"}).registerSetting({setting:"maicol07-sso.manage_account_url",label:s.a.translator.trans("maicol07-sso.admin.settings.manage_account_url"),type:"url"}).registerSetting({setting:"maicol07-sso.manage_account_btn_open_in_new_tab",label:s.a.translator.trans("maicol07-sso.admin.settings.manage_account_btn_open_in_new_tab"),type:"boolean"}).registerSetting({setting:"maicol07-sso.remove_login_btn",label:s.a.translator.trans("maicol07-sso.admin.settings.remove_login_btn"),type:"boolean"}).registerSetting({setting:"maicol07-sso.remove_signup_btn",label:s.a.translator.trans("maicol07-sso.admin.settings.remove_signup_btn"),type:"boolean"}).registerSetting((function(){return m("div",null,m("hr",null),m("h3",null," ",s.a.translator.trans("maicol07-sso.admin.settings.jwt_section_subtitle"),":"))})).registerSetting({setting:"maicol07-sso.jwt_iss",label:s.a.translator.trans("maicol07-sso.admin.settings.jwt_iss"),type:"text"}).registerSetting({setting:"maicol07-sso.jwt_signing_algorithm",label:s.a.translator.trans("maicol07-sso.admin.settings.jwt_signing_algorithm"),type:"select",options:{Sha256:"Sha256",Sha384:"Sha384",Sha512:"Sha512"},default:"Sha256"}).registerSetting({setting:"maicol07-sso.jwt_signer_key",label:s.a.translator.trans("maicol07-sso.admin.settings.jwt_signer_key"),type:"text"})}))}});
//# sourceMappingURL=admin.js.map