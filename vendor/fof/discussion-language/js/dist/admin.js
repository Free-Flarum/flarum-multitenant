module.exports=function(t){function n(n){for(var e,a,r=n[0],s=n[1],i=0,c=[];i<r.length;i++)a=r[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);for(u&&u(n);c.length;)c.shift()()}var e={},o={0:0};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,a){e=o[t]=[n,a]}));n.push(e[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=function(t){return a.p+"chunk~"+({1:"countries",3:"iso-639-2"}[t]||t)+".js"}(t);var u=new Error;s=function(n){i.onerror=i.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,e[1](u)}o[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(n)},a.m=t,a.c=e,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a.oe=function(t){throw console.error(t),t};var r=window.webpackJsonpmodule_exports=window.webpackJsonpmodule_exports||[],s=r.push.bind(r);r.push=n,r=r.slice();for(var i=0;i<r.length;i++)n(r[i]);var u=s;return a(a.s=36)}([function(t,n){t.exports=flarum.core.compat["admin/app"]},function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n,e){"use strict";function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return o}))},function(t,n,e){"use strict";var o=e(13),a=e.n(o),r=e(8),s=e.n(r);n.a=function(t){if(t){var n=t.emoji?t.emoji():t;return n?m("img",{alt:t.country&&t.country()||"",className:"emoji",draggable:"false",loading:"lazy",src:"//cdn.jsdelivr.net/gh/twitter/twemoji@13/assets/72x72/"+a()(n)+".png"}):s()("fas fa-globe")}}},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},,function(t,n,e){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return u}));var a=e(3);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=e(1),i=e.n(s),u=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return r(o(n=t.call.apply(t,[this].concat(a))||this),"code",i.a.attribute("code")),r(o(n),"country",i.a.attribute("country")),r(o(n),"name",i.a.attribute("name")),r(o(n),"emoji",i.a.attribute("emoji")),n}return Object(a.a)(n,t),n.prototype.apiEndpoint=function(){return"/fof/discussion-language"+(this.exists?"/"+this.data.id:"")},n}(i.a)},function(t,n){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,n){t.exports=flarum.core.compat["common/models/Forum"]},function(t,n){t.exports=flarum.core.compat["common/components/Switch"]},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var o={Language:e(7).a}},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var o={flag:e(4).a}},function(t,n){
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
t.exports=function(t){for(var n=[],e=0,o=0,a=0,r=t.length;a<r;)e=t.charCodeAt(a++),o?(n.push((65536+(o-55296<<10)+(e-56320)).toString(16)),o=0):55296<=e&&e<=56319?o=e:n.push(e.toString(16));return n.join("-")}},,function(t,n){t.exports=flarum.core.compat["common/components/Select"]},,,,function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},,,,,,,,,,function(t,n){t.exports=flarum.core.compat["admin/components/PermissionGrid"]},function(t,n){t.exports=flarum.core.compat["admin/components/SettingDropdown"]},function(t,n){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,n){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["admin/utils/saveSettings"]},function(t,n){t.exports=flarum.core.compat["common/components/Alert"]},,function(t,n,e){"use strict";e.r(n),e.d(n,"components",(function(){return R})),e.d(n,"utils",(function(){return W})),e.d(n,"models",(function(){return H.a}));var o={};e.r(o),e.d(o,"load",(function(){return M})),e.d(o,"default",(function(){return T})),e.d(o,"getEmoji",(function(){return I}));var a,r,s=e(2),i=e(9),u=e.n(i),c=e(29),l=e.n(c),f=e(30),d=e.n(f),p=e(3),g=e(0),h=e.n(g),v=e(31),y=e.n(v),b=e(5),w=e.n(b),_=e(15),L=e.n(_),x=e(10),O=e.n(x),j=e(32),N=e.n(j),S=e(8),D=e.n(S),F=e(33),K=e.n(F),C=e(19),P=e.n(C),k=e(34),A=e.n(k),E=function(t,n){return n&&(null==t?void 0:t["Native name(s)"])||(null==t?void 0:t["Language name(s)"])},B=function(t){var n;return null==(n=Array.from(Object.values(a||{})))?void 0:n.sort((function(n,e){var o,a;return(null==(o=E(n,t))?void 0:o.toLowerCase())>(null==(a=E(e,t))?void 0:a.toLowerCase())})).reduce((function(n,e){return n[e["639-1"]||e["639-2"]]=E(e,t),n}),{})},M=function(){return e.p=h.a.forum.attribute("baseUrl")+"/assets/extensions/fof-discussion-language/",e.e(1).then(e.t.bind(null,38,3)).then((function(t){return r=t.default}))},T=function(t){if(!r)return{};var n=Object.values(r),e=t?"native":"name";return n.map((function(t){return t[e]})).sort((function(t,n){return t>n})).reduce((function(t,o){var a=n.indexOf(n.filter((function(t){return t[e]===o}))[0]);return t[Object.keys(r)[a]]=o,t}),{})},I=function(t){var n,e;return null==(n=r)||null==(e=n[t])?void 0:e.emoji},q=e(4),z=function(t){function n(){return t.apply(this,arguments)||this}Object(p.a)(n,t);var o=n.prototype;return o.oninit=function(n){t.prototype.oninit.call(this,n),this.updating={},this.deleting={},this.codes={},this.countries={},this.newLocale=P()(""),this.newCountry=P()(""),this.nativeKey="fof-discussion-language.native",this.native=!!Number(h.a.data.settings[this.nativeKey]),this.showFlagsKey="fof-discussion-language.showFlags",this.showFlags=h.a.data.settings[this.showFlagsKey],this.composerLocaleDefaultKey="fof-discussion-language.composerLocaleDefault",this.composerLocaleDefault=h.a.data.settings[this.composerLocaleDefaultKey]||0,this.localeSortKey="fof-discussion-language.filter_language_on_http_request",this.localeSort=h.a.data.settings[this.localeSortKey],this.showAnyLangOptKey="fof-discussion-language.showAnyLangOpt",this.showAnyLangOpt=h.a.data.settings[this.showAnyLangOptKey],this.loadingData=!0,this.loadingDataError=!1},o.oncreate=function(n){t.prototype.oncreate.call(this,n),this.refresh()},o.refresh=function(){var t=this;return this.loadingData=!0,this.loadingDataError=!1,m.redraw(),Promise.all([(e.p=h.a.forum.attribute("baseUrl")+"/assets/extensions/fof-discussion-language/",e.e(3).then(e.t.bind(null,37,7)).then((function(t){return a=t.default}))),M()]).then((function(){t.loadingData=!1,t.loadingDataError=!1,m.redraw()})).catch((function(n){console.error(n),t.loadingData=!1,t.loadingDataError=!0,m.redraw()}))},o.content=function(){var t=this,n=B(this.native),e=T(this.native);return[m("div",{className:"container"},m("div",{className:"FofDiscussionLanguagesSettingsPage"},m("div",{className:"Form-group"},O.a.component({state:this.native,onchange:function(n){t.native=n,t.refresh(),m.redraw.sync()}},h.a.translator.trans("fof-discussion-language.admin.settings.native_label"))),m("div",{className:"Form-group"},O.a.component({state:this.showFlags,onchange:function(n){return t.showFlags=n}},h.a.translator.trans("fof-discussion-language.admin.settings.show_flag_label"))),m("div",{className:"Form-group"},O.a.component({state:this.composerLocaleDefault,onchange:function(n){return t.composerLocaleDefault=n}},h.a.translator.trans("fof-discussion-language.admin.settings.composer_default_label"))),m("div",{className:"Form-group"},O.a.component({state:this.localeSort,onchange:function(n){return t.localeSort=n}},h.a.translator.trans("fof-discussion-language.admin.settings.locale_sort_label"))),m("div",{className:"Form-group"},O.a.component({state:this.showAnyLangOpt,onchange:function(n){return t.showAnyLangOpt=n}},h.a.translator.trans("fof-discussion-language.admin.settings.show_any_lang_opt_label"))),m("hr",null),this.loadingData?m(N.a,null):this.loadingDataError?m(A.a,{ondismiss:this.refresh.bind(this),type:"error"},h.a.translator.trans("fof-discussion-language.admin.settings.errors.loading_data")):m("form",null,m("div",{className:"Form-group flex"},L.a.component({onchange:this.newLocale,value:this.newLocale(),options:n}),L.a.component({onchange:this.newCountry,value:this.newCountry(),options:e}),Object(q.a)(I(this.newCountry())),w.a.component({className:"Button Button--primary",onclick:this.add.bind(this),disabled:!this.newLocale()||!this.newCountry()||this.adding},D()(this.adding?"fas fa-spinner fa-spin":"fas fa-plus"))),m("div",{className:"Form-group"},h.a.store.all("discussion-languages").map((function(o){var a=o.id(),r=t.updating[a],s=t.deleting[a],i=t.countries[a]||o.country();return m("div",{className:"flex"},L.a.component({onchange:function(n){return t.codes[a]=n},value:t.codes[a]||o.code(),options:n,disabled:r||s}),L.a.component({onchange:function(n){return t.countries[a]=n},value:i,options:e,disabled:r||s}),Object(q.a)(I(i)),w.a.component({className:"Button Button--danger",disabled:s,onclick:t.remove.bind(t,o)},D()(s?"fas fa-spinner fa-spin":"fas fa-times")))}))),m("div",{className:"Form-group"},m(w.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.isChanged(),onclick:this.save.bind(this)},h.a.translator.trans("core.admin.settings.submit_button"))),m("p",{className:"helpText"},"This extension uses material from the Wikipedia article"," ",m("a",{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes",target:"_blank",rel:"noreferrer nofollow noopener"},"List of ISO 639-2 Codes"),", which is released under the"," ",m("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution-Share-Alike License 3.0"),"."))))]},o.onkeydown=function(t){"Enter"===t.key&&(this.add(),t.preventDefault())},o.add=function(){var t=this;if(!this.adding&&this.newLocale()){this.adding=!0;var n=this.newLocale(),e=this.newCountry();h.a.store.createRecord("discussion-languages").save({code:n,country:e}).then((function(){t.newLocale(""),t.adding=!1,m.redraw()})).catch((function(){return t.adding=!1}))}},o.save=function(t){var n,e=this;t.preventDefault(),this.loading=!0,Promise.all([].concat(this.dirty().map((function(t){var n=t.id();return e.updating[n]=!0,t.save({code:e.codes[n],country:e.countries[n]}).then((function(){}),(function(){})).then((function(){e.updating[n]=!1,m.redraw()}))})),[K()((n={},n[this.nativeKey]=this.native,n[this.showFlagsKey]=this.showFlags,n[this.composerLocaleDefaultKey]=this.composerLocaleDefault,n[this.localeSortKey]=this.localeSort,n[this.showAnyLangOptKey]=this.showAnyLangOpt,n)).then(this.onsaved.bind(this))]))},o.remove=function(t){var n=this;this.deleting[t.id()]=!0,t.delete().then((function(){}),(function(){})).then((function(){delete n.deleting[t.id()],m.redraw()}))},o.dirty=function(){var t=this;return h.a.store.all("discussion-languages").filter((function(n){var e=n.id();return t.codes[e]&&t.codes[e]!==n.code()||t.countries[e]&&t.countries[e]!==n.country()}))},o.isChanged=function(){var t=this.dirty().length,n=Number(this.native)!==Number(h.a.data.settings[this.nativeKey]||0),e=Number(this.showFlags)!==Number(h.a.data.settings[this.showFlagsKey]||0),o=Number(this.composerLocaleDefault)!==Number(h.a.data.settings[this.composerLocaleDefaultKey]||0),a=Number(this.localeSort)!==Number(h.a.data.settings[this.localeSortKey]||0),r=Number(this.showAnyLangOpt)!==Number(h.a.data.settings[this.showAnyLangOptKey]||0);return t||n||e||o||a||r},n}(y.a),J=e(7),R={LanguagesSettingsPage:z};function U(){return(U=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var G=e(12),W=U({getCountry:T,countries:o,locales:B,getName:function(t,n){var e;return E(null==(e=a)?void 0:e.find((function(n){return[n["639-1"]||n["639-2"]].includes(t)})),n)}},G.a),H=e(11);app.initializers.add("fof/discussion-language",(function(){app.store.models["discussion-languages"]=J.a,u.a.prototype.discussionLanguages=u.a.hasMany("discussionLanguages"),app.extensionData.for("fof-discussion-language").registerPage(z),Object(s.extend)(l.a.prototype,"startItems",(function(t){t.add("allowLanguageChange",{icon:"fas fa-globe",label:app.translator.trans("fof-discussion-language.admin.permissions.allow_change_language_label"),setting:function(){var t=parseInt(app.data.settings["fof-discussion-language.allow_tag_change"],10);return d.a.component({defaultLabel:t?app.translator.trans("core.admin.permissions_controls.allow_some_minutes_button",t,{count:t}):app.translator.trans("core.admin.permissions_controls.allow_indefinitely_button"),key:"fof-discussion-language.allow_language_change",options:[{value:"-1",label:app.translator.trans("core.admin.permissions_controls.allow_indefinitely_button")},{value:"10",label:app.translator.trans("core.admin.permissions_controls.allow_ten_minutes_button")},{value:"reply",label:app.translator.trans("core.admin.permissions_controls.allow_until_reply_button")}]})}},90)}))}))}]);
//# sourceMappingURL=admin.js.map