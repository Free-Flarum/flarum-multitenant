module.exports=(()=>{"use strict";var o={475:(o,t,e)=>{e.r(t);const r=flarum.core.compat["common/extend"],n=flarum.core.compat["common/app"];var a=e.n(n);const u=flarum.core.compat["forum/components/HeaderSecondary"];var c=e.n(u);const i=flarum.core.compat["forum/components/SettingsPage"];var s=e.n(i);const l=flarum.core.compat["forum/components/LogInModal"];var f=e.n(l);a().initializers.add("maicol07-sso",(function(){function o(o){return Boolean(a().forum.attribute("maicol07-sso."+o))}(0,r.extend)(c().prototype,"items",(function(t){if(o("login_url"))if("1"===a().forum.attribute("maicol07-sso.remove_login_btn"))t.remove("logIn");else{if(!t.has("logIn"))return;var e=a().forum.attribute("maicol07-sso.login_url");t.replace("logIn",m("a",{href:e,className:"Button Button--link"},a().translator.trans("core.forum.header.log_in_link"))),(0,r.override)(f().prototype,"oninit",(function(){throw window.location.href=a().forum.attribute("maicol07-sso.login_url"),new Error("Stop execution")}))}if(o("signup_url"))if("1"===a().forum.attribute("maicol07-sso.remove_signup_btn"))t.remove("signUp");else{if(!t.has("signUp"))return;var n=a().forum.attribute("maicol07-sso.signup_url");t.replace("signUp",m("a",{href:n,className:"Button Button--link"},a().translator.trans("core.forum.header.sign_up_link")))}})),(0,r.extend)(s().prototype,"accountItems",(function(t){o("login_url")&&(t.remove("changeEmail"),t.remove("changePassword"),o("manage_account_url")&&t.add("manageAccount",m("a",{class:"Button",href:a().forum.attribute("maicol07-sso.manage_account_url"),target:"1"===a().forum.attribute("maicol07-sso.manage_account_btn_open_in_new_tab")?"_blank":""},a().translator.trans("maicol07-sso.forum.manage_account_btn"))))})),(0,r.extend)(s().prototype,"settingsItems",(function(t){o("manage_account_url")||t.has("account")&&0===t.get("account").children.length&&t.remove("account")}))}))}},t={};function e(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return o[r](n,n.exports,e),n.exports}return e.n=o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},e.d=(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},e.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),e.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e(475)})();
//# sourceMappingURL=forum.js.map