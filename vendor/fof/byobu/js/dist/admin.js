module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=46)}({0:function(t,e,o){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}o.d(e,"a",(function(){return i}))},14:function(t,e){t.exports=flarum.core.compat["common/components/Badge"]},19:function(t,e){t.exports=flarum.core.compat["admin/app"]},42:function(t,e){t.exports=flarum.core.compat["core/models/User"]},43:function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},44:function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},46:function(t,e,o){"use strict";o.r(e);var n=o(42),i=o.n(n),r=o(0),s=o(19),a=o.n(s),u=o(43),c=o.n(u),f=o(14),p=o.n(f),l=o(44),d=o.n(l),b=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.badgeDefault="fas fa-map",this.postActionDefault="far fa-map"},o.content=function(){return[m("div",{className:"container"},m("div",{className:"ByobuSettingsPage"},m("div",{className:"Form"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"string",setting:"fof-byobu.icon-badge",label:a.a.translator.trans("fof-byobu.admin.settings.badge-icon"),help:m(p.a,{icon:this.setting("fof-byobu.icon-badge").toJSON()||this.badgeDefault})}),this.buildSettingComponent({type:"string",setting:"fof-byobu.icon-postAction",label:a.a.translator.trans("fof-byobu.admin.settings.post-event-icon"),help:m("h2",null,d()(this.setting("fof-byobu.icon-postAction").toJSON()||this.postActionDefault))})),flarum.extensions["flarum-tags"]&&m("div",{className:"Form-group"},m("p",null,a.a.translator.trans("flarum-tags.admin.edit_tag.icon_text",{a:m("a",{href:"https://fontawesome.com/icons?m=free",tabindex:"-1"})}))),m("div",{className:"Form-group"},this.submitButton()))))]},e}(c.a);app.initializers.add("fof-byobu",(function(t){t.store.models.recipients=i.a,t.extensionData.for("fof-byobu").registerPage(b),function(t){t.extensionData.for("fof-byobu").registerPermission({icon:"far fa-map",label:t.translator.trans("fof-byobu.admin.permission.create_private_discussions_with_users"),permission:"discussion.startPrivateDiscussionWithUsers"},"start",95).registerPermission({icon:"far fa-map",label:t.translator.trans("fof-byobu.admin.permission.create_private_discussions_with_groups"),permission:"discussion.startPrivateDiscussionWithGroups"},"start",95).registerPermission({icon:"far fa-map",label:t.translator.trans("fof-byobu.admin.permission.create_private_discussions_with_blocking_users"),permission:"startPrivateDiscussionWithBlockers"},"start",95).registerPermission({icon:"far fa-map",label:t.translator.trans("fof-byobu.admin.permission.edit_user_recipients"),permission:"discussion.editUserRecipients"},"moderate",95).registerPermission({icon:"far fa-map",label:t.translator.trans("fof-byobu.admin.permission.edit_group_recipients"),permission:"discussion.editGroupRecipients"},"moderate",95).registerPermission({icon:"fas fa-flag",label:t.translator.trans("fof-byobu.admin.permission.view_private_discussions-when-flagged"),permission:"user.viewPrivateDiscussionsWhenFlagged"},"moderate",95)}(t)}))}});
//# sourceMappingURL=admin.js.map