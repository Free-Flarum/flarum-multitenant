module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=27)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Composer"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},,function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["components/NotificationsDropdown"]},function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},,function(t,e){t.exports=flarum.extensions["fof-byobu"]},function(t,e,a){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}a.r(e);var r=a(0),o=a(10),s=a.n(o),i=a(1),c=a.n(i);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var p=a(7),l=a.n(p),d=a(13),f=function(t,e){return Array.isArray(t)?t.map(e).sort():e(t)},h=function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e}(a.n(d)()(c.a,{user:c.a.hasOne("user"),content:c.a.attribute("content"),title:c.a.attribute("title"),scheduledValidationError:c.a.attribute("scheduledValidationError"),relationships:c.a.attribute("relationships"),scheduledFor:c.a.attribute("scheduledFor",c.a.transformDate),updatedAt:c.a.attribute("updatedAt",c.a.transformDate),loadedRelationships:null,type:function(){var t=this.loadRelationships();return t.discussion?"reply":flarum.extensions["fof-byobu"]&&flarum.extensions["fof-byobu"].components&&("recipientGroups"in t||"recipientUsers"in t)?"privateDiscussion":"discussion"},icon:function(){switch(this.type()){case"discussion":return"fas fa-edit";case"reply":return"fas fa-reply";case"privateDiscussion":return"fas fa-eye-slash"}},loadRelationships:function(t){var e=this;if(!t&&this.loadedRelationships&&(Object.keys(this.loadedRelationships).length>0||0===Object.keys(this.loadedRelationships).length&&0===Object.keys(this.relationships).length))return this.loadedRelationships;this.loadedRelationships={};var a=this.relationships();if(a&&Object.keys(a).forEach((function(t){var n=a[t];n&&n.data&&(e.loadedRelationships[t]=f(n.data,(function(t){return app.store.getById(t.type,t.id)})))})),"recipientUsers"in this.loadedRelationships||"recipientGroups"in this.loadedRelationships){var n=new l.a;(this.loadedRelationships.recipientUsers||[]).forEach((function(t){t&&n.add("users:"+t.id(),t)})),(this.loadedRelationships.recipientGroups||[]).forEach((function(t){t&&n.add("groups:"+t.id(),t)})),this.loadedRelationships.recipients=n}return this.loadedRelationships},compileData:function(){var t={originalContent:this.content(),title:this.title(),user:app.session.user,confirmExit:app.translator.trans("fof-drafts.forum.composer.exit_alert"),draft:this};return n(t,this.loadRelationships()),t}})),v=a(14),b=a.n(v),y=a(15),g=a.n(y),x=a(8),_=a.n(x),w=a(4),N=a.n(w),j=a(5),D=a.n(j),k=a(16),A=a.n(k),I=a(17),O=a.n(I),S=a(18),E=a.n(S),C=a(19),F=a(2),R=a.n(F),M=a(11),P=a.n(M),B=a(20),L=a.n(B),V=function(){function t(t){return function(e){return new Promise((function(a,n){var r=document.createElement(t),o="body",s="src";switch(r.onload=function(){a(e)},r.onerror=function(){n(e)},t){case"script":r.async=!0;break;case"link":r.type="text/css",r.rel="stylesheet",s="href",o="head"}r[s]=e,document[o].appendChild(r)}))}}return{css:t("link"),js:t("script"),img:t("img")}}(),T=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),this.loading=!1},a.className=function(){return"ScheduleDraftModal"},a.title=function(){return app.translator.trans("fof-drafts.forum.schedule_draft_modal.title")},a.content=function(){return this.loading?m(_.a,null):[this.props.draft.scheduledFor()?m("div",{className:"Modal-alert"},m(P.a,{type:"success",dismissible:!1},app.translator.trans("fof-drafts.forum.schedule_draft_modal.scheduled_text",{datetime:moment(this.props.draft.scheduledFor()).format("LLLL")}))):"",this.props.draft.scheduledValidationError()?m("div",{className:"Modal-alert"},m(P.a,{type:"error",dismissible:!1},app.translator.trans("fof-drafts.forum.schedule_draft_modal.scheduled_error",{error:this.props.draft.scheduledValidationError()}))):"",m("input",{style:"display: none"}),m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("fof-drafts.forum.schedule_draft_modal.text")),m("div",{className:"Form-group flatpickr"},m("input",{name:"scheduledFor",className:"FormControl flatpickr-input","data-input":!0,onchange:m.redraw})),m("div",{className:"Form-group"},R.a.component({className:"Button Button--block"+(this.unscheduleMode()?" Button--danger":" Button--primary"),type:"submit",loading:this.loading,children:this.unscheduleMode()?app.translator.trans("fof-drafts.forum.schedule_draft_modal.unschedule_button"):this.rescheduleMode()?app.translator.trans("fof-drafts.forum.schedule_draft_modal.reschedule_button"):app.translator.trans("fof-drafts.forum.schedule_draft_modal.schedule_button")}))))]},a.config=function(t){var e=this;if(!t){var a=app.forum.attribute("baseUrl")+"/assets/extensions/fof-drafts/flatpickr";this.loading=!0,Promise.all("undefined"==typeof flatpickr?[V.js(a+".js"),V.css(a+".css")]:[]).then((function(){e.loading=!1,m.redraw(),e.flatpickr=flatpickr(".flatpickr-input",{enableTime:!0,enableSeconds:!1,minDate:Date.now(),maxDate:new Date(9999,12,31),defaultDate:e.props.draft.scheduledFor()})}))}},a.scheduledFor=function(){return new Date($("input[name=scheduledFor]").val())},a.changed=function(){var t=function(t){return t?t.getTime():null};return t(this.scheduledFor())!==t(this.props.draft.scheduledFor())},a.unscheduleMode=function(){return!this.changed()&&this.props.draft.scheduledFor()},a.rescheduleMode=function(){return this.changed()&&this.props.draft.scheduledFor()},a.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.props.draft.save({scheduledFor:this.unscheduleMode()?null:this.scheduledFor(),clearValidationError:!0,scheduledValidationError:""}).then((function(){return e.success=!0})).catch((function(){})).then(this.loaded.bind(this))},e}(L.a),U=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.config=function(t){t&&$(".draft--delete").on("click tap",(function(t){t.stopPropagation()}))},n.view=function(){var t=this,e=app.store.all("drafts");return m("div",{className:"NotificationList DraftsList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("fof-drafts.forum.dropdown.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},e.length?e.sort((function(t,e){return e.updatedAt()-t.updatedAt()})).map((function(e){return m("li",null,m("a",{onclick:t.showComposer.bind(t,e),className:"Notification draft--item"},A()(e.user()),O()(e.icon(),{className:"Notification-icon"}),m("span",{className:"Notification-content"},"reply"===e.type()?e.loadRelationships().discussion.title():e.title()),E()(e.updatedAt()),R.a.component({icon:"fas fa-times",style:"float: right; z-index: 20;",className:"Button Button--icon Button--link draft--delete draft--delete",title:app.translator.trans("fof-drafts.forum.dropdown.delete_button"),onclick:function(a){t.deleteDraft(e),a.stopPropagation()}}),app.forum.attribute("canScheduleDrafts")&&app.forum.attribute("drafts.enableScheduledDrafts")?R.a.component({icon:e.scheduledValidationError()?"fas fa-calendar-times":e.scheduledFor()?"fas fa-calendar-check":"fas fa-calendar-plus",style:"float: right; z-index: 20;",className:"Button Button--icon Button--link draft--schedule",title:app.translator.trans("fof-drafts.forum.dropdown.schedule_button"),onclick:function(a){t.scheduleDraft(e),a.stopPropagation()}}):"",m("div",{className:"Notification-excerpt"},Object(C.truncate)(e.content(),200)),e.scheduledValidationError()?m("p",{className:"scheduledValidationError"},e.scheduledValidationError()):""))})):"",this.loading?_.a.component({className:"LoadingIndicator--block"}):!e.length&&m("div",{className:"NotificationList-empty"},app.translator.trans("fof-drafts.forum.dropdown.empty_text")))))},n.deleteDraft=function(t){var e=this;this.loading=!0,window.confirm(app.translator.trans("fof-drafts.forum.dropdown.alert"))&&t.delete().then((function(){app.composer.component&&app.composer.component.draft.id()===t.id()&&!app.composer.changed()&&app.composer.hide(),e.loading=!1,m.redraw()}))},n.scheduleDraft=function(t){app.forum.attribute("canScheduleDrafts")&&app.forum.attribute("drafts.enableScheduledDrafts")&&app.modal.show(new T({draft:t}))},n.showComposer=function(t){if(!this.loading){var e,n=m.deferred();switch(t.type()){case"privateDiscussion":e=a(26).components.PrivateDiscussionComposer;break;case"reply":e=D.a;break;default:e=N.a}var r=new e(t.compileData());return app.composer.load(r),app.composer.show(),n.resolve(r),n.promise}},n.load=function(){var t=this;app.cache.draftsLoaded||(this.loading=!0,m.redraw(),app.store.find("drafts").then((function(){return app.cache.draftsLoaded=!0}),(function(){})).then((function(){t.loading=!1,m.redraw()})))},e}(g.a),G=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),app.history.push("drafts"),this.list=new U,this.list.load(),this.bodyClass="App--drafts"},a.view=function(){return m("div",{className:"DraftsPage"},this.list.render())},e}(b.a),z=a(6),H=a.n(z),Z=a(21),q=a.n(Z),J=a(22),K=function(t){function e(){return t.apply(this,arguments)||this}u(e,t),e.initProps=function(e){e.label=e.label||app.translator.trans("fof-drafts.forum.dropdown.tooltip"),e.icon=e.icon||"fas fa-edit",t.initProps.call(this,e)};var a=e.prototype;return a.init=function(){t.prototype.init.call(this),this.list=new U},a.goToRoute=function(){m.route(app.route("drafts"))},a.getUnreadCount=function(){return app.cache.draftsLoaded?app.store.all("drafts").length:app.store.all("drafts").length+app.session.user.draftCount()},a.getNewCount=function(){return this.getUnreadCount()},e}(a.n(J).a),Q=a(23),W=a.n(Q),X=a(9),Y=a.n(X),tt=a(24),et=a.n(tt),at=a(3),nt=a.n(at);app.initializers.add("fof-drafts",(function(){function t(){var t=this;Object.keys(this.props).forEach((function(e){["originalContent","title","user"].includes(e)?"title"===e&&(t.title=m.prop(t.props.title)):t[e]=t.props[e]}))}function e(){this.draft&&this.draft.delete()}app.store.models.drafts=h,s.a.prototype.drafts=c.a.hasMany("drafts"),s.a.prototype.draftCount=c.a.attribute("draftCount"),app.routes.drafts={path:"/drafts",component:m(G,null)},nt.a.prototype.changed=function(){var t=this;if(!this.component)return!1;var e=this.component.data(),a=this.component.draft,n=Object.keys(e).filter((function(t){return"relationships"!==t}));if(!n)return!1;var r=function(a){return("content"===a?t.component.editor.value():e[a])||""},o=n,s=Array.isArray(o),i=0;for(o=s?o:o[Symbol.iterator]();;){var c;if(s){if(i>=o.length)break;c=o[i++]}else{if((i=o.next()).done)break;c=i.value}var u=c;if(!a&&r(u)||a&&r(u)!=a.data.attributes[u])return!0}if(!e.relationships&&!a.relationships())return!1;for(var p=function(t,e,a){if(!(t.relationships[a].length||a in e.relationships()&&e.relationships()[a].data.length))return!0;if(!(a in e.relationships())||t.relationships[a].length!==e.relationships()[a].data.length)return!1;var n=function(t){return"function"==typeof t.id?t.id():t.id},r=f(t.relationships[a],n),o=f(e.relationships()[a].data,n);return!r.some((function(t,e){return t!==o[e]}))},l=0,d=Object.keys(e.relationships);l<d.length;l++){var m=d[l];if(a){if(!p(e,a,m))return!0}else if(e.relationships[m])return!0}return!1},nt.a.prototype.saveDraft=function(){var t=this;this.saving=!0,m.redraw();var e=function(){t.saving=!1,t.justSaved=!0,setTimeout((function(){t.justSaved=!1,m.redraw()}),300),m.redraw()};this.component.draft?(delete this.component.draft.data.attributes.relationships,this.component.draft.save(n(this.component.draft.data.attributes,this.component.data())).then((function(){return e()}))):app.store.createRecord("drafts").save(this.component.data()).then((function(a){a.loadRelationships(!0),t.component.draft=a,e()}))},Object(r.extend)(nt.a.prototype,"controlItems",(function(t){if((this.component instanceof N.a||this.component instanceof D.a)&&app.forum.attribute("canSaveDrafts")&&this.position!==nt.a.PositionEnum.MINIMIZED){var e=["Button","Button--icon","Button--link"];this.saving&&e.push("saving"),this.justSaved&&e.push("justSaved"),t.add("save-draft",R.a.component({icon:this.justSaved?"fas fa-check":this.saving?"fas fa-spinner fa-spin":"fas fa-save",className:e.join(" "),itemClassName:"App-backControl",title:app.translator.trans("fof-drafts.forum.composer.title"),disabled:this.saving||this.justSaved||this.loading,onclick:this.saveDraft.bind(this)}),20)}})),Object(r.extend)(nt.a.prototype,"load",(function(){var t=this;app.forum.attribute("canSaveDrafts")&&app.session.user.preferences().draftAutosaveEnable&&(this.component instanceof N.a||this.component instanceof D.a)&&(this.autosaveInterval=setInterval((function(){!t.changed()||t.saving||t.loading||t.saveDraft()}),1e3*app.session.user.preferences().draftAutosaveInterval))})),Object(r.extend)(nt.a.prototype,"hide",(function(){this.autosaveInterval&&clearInterval(this.autosaveInterval)})),Object(r.override)(nt.a.prototype,"preventExit",(function(t){this.component&&this.component.draft&&(this.component.props.confirmExit=app.translator.trans("fof-drafts.forum.composer.exit_alert"));var e=!1;if(this.changed()&&(e=t()),e)return e;if(this.component){var a=this.component.draft;return a&&!a.title()&&!a.content()&&confirm(app.translator.trans("fof-drafts.forum.composer.discard_empty_draft_alert"))&&a.delete(),e}})),Object(r.extend)(N.a.prototype,"init",t),Object(r.extend)(D.a.prototype,"init",t),Object(r.extend)(N.a.prototype,"onsubmit",e),Object(r.extend)(D.a.prototype,"onsubmit",e),Object(r.extend)(q.a.prototype,"items",(function(t){H.a.session.user&&H.a.forum.attribute("canSaveDrafts")&&t.add("Drafts",m(K,null),20)})),Object(r.extend)(Y.a.prototype,"init",(function(){this.draftAutosaveInterval=m.prop(this.user.preferences().draftAutosaveInterval)})),Object(r.extend)(Y.a.prototype,"settingsItems",(function(t){app.forum.data.attributes.canSaveDrafts&&t.add("drafts",W.a.component({label:app.translator.trans("fof-drafts.forum.user.settings.drafts_heading"),className:"Settings-drafts",children:this.draftsItems().toArray()}))})),Y.a.prototype.draftsItems=function(){var t=this,e=new l.a;return e.add("draft-autosave-enable",et.a.component({children:app.translator.trans("fof-drafts.forum.user.settings.draft_autosave_enable"),state:this.user.preferences().draftAutosaveEnable,onchange:function(e,a){return t.preferenceSaver("draftAutosaveEnable")(e,a)}})),e.add("draft-autosave-interval",this.user.preferences().draftAutosaveEnable?m("label",null,m("p",null,app.translator.trans("fof-drafts.forum.user.settings.draft_autosave_interval_label")),m("input",{className:"FormControl",type:"number",min:"0",value:this.draftAutosaveInterval(),onchange:m.withAttr("value",this.draftAutosaveInterval)}),R.a.component({className:"Button Button--primary",children:app.translator.trans("fof-drafts.forum.user.settings.draft_autosave_interval_button"),onclick:function(){var e;t.draftAutosaveInterval()<0||(e=t.draftAutosaveInterval())!=Math.round(e)?(t.draftAutosaveIntervalInvalid=!0,t.draftAutosaveInterval(t.user.preferences().draftAutosaveInterval),m.redraw()):(t.draftAutosaveIntervalInvalid=!1,t.preferenceSaver("draftAutosaveInterval")(t.draftAutosaveInterval()))}}),this.draftAutosaveIntervalInvalid?m("p",{class:"invalidInterval"},m("small",null,app.translator.trans("fof-drafts.forum.user.settings.draft_autosave_interval_invalid"))):""):""),e}}))}]);
//# sourceMappingURL=forum.js.map