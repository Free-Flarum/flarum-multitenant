module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}({4:function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},5:function(t,e,n){"use strict";n.r(e);var o=n(4),r=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=o.prototype;return r.className=function(){return"GoogleSettingsModal Modal--small"},r.title=function(){return app.translator.trans("saleksin-auth-google.admin.google_settings.title")},r.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("saleksin-auth-google.admin.google_settings.client_id_label")),m("input",{className:"FormControl",bidi:this.setting("saleksin-auth-google.client_id")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("saleksin-auth-google.admin.google_settings.client_secret_label")),m("input",{className:"FormControl",bidi:this.setting("saleksin-auth-google.client_secret")}))]},o}(n.n(o).a);app.initializers.add("saleksin-auth-google",function(){app.extensionSettings["saleksin-auth-google"]=function(){return app.modal.show(new r)}})}});
//# sourceMappingURL=admin.js.map