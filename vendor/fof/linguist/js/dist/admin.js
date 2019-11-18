module.exports=function(t){var n={};function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=n,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=13)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat.Component},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat["components/AdminNav"]},function(t,n){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,n){t.exports=flarum.core.compat["components/ExtensionsPage"]},function(t,n){t.exports=flarum.core.compat["components/Alert"]},function(t,n){t.exports=flarum.core.compat["components/LoadingModal"]},function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n,i){"use strict";i.r(n);var e=i(0),r=i.n(e);function s(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}var o=i(2),a=i.n(o),l=i(4),u=i.n(l),c=function(t){function n(){return t.apply(this,arguments)||this}return s(n,t),n}(u()(a.a,{key:a.a.attribute("key"),locales:a.a.attribute("locales")})),f=function(t){function n(){return t.apply(this,arguments)||this}return s(n,t),n.prototype.apiEndpoint=function(){return"/fof/linguist/strings"+(this.exists?"/"+this.data.id:"")},n}(u()(a.a,{key:a.a.attribute("key"),locale:a.a.attribute("locale"),value:a.a.attribute("value")})),h=i(6),g=i(7),p=i.n(g),d=i(8),y=i.n(d),w=i(3),v=i.n(w),b=i(1),k=i.n(b),F=i(5),x=i.n(F),O=i(9),L=i.n(O),T=i(10),S=i.n(T),E=i(11),I=i.n(E),K=function(){var t=[];for(var n in r.a.data.locales)r.a.data.locales.hasOwnProperty(n)&&t.push({key:n,name:r.a.data.locales[n]});return t},N=i(12),B=i.n(N),P=function(t,n){if(!n)return t;var i=n.toLowerCase(),e=new RegExp(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i");return t.replace(e,"<fof-highlight>$&<fof-highlight>").split("<fof-highlight>").map((function(t){return t.toLowerCase()===i?m("span.FoF-Linguist-Highlight",t):t}))},C=function(t){function n(){return t.apply(this,arguments)||this}s(n,t);var i=n.prototype;return i.init=function(){var t=this;this.stringKey=this.props.stringKey,this.locale=this.props.locale,this.localeKey=this.locale?this.locale.key:null,this.originalString=this.localeKey&&this.stringKey.locales().hasOwnProperty(this.localeKey)?this.stringKey.locales()[this.localeKey]:null,this.string=r.a.store.all("fof-linguist-string").find((function(n){return n.key()===t.stringKey.key()&&n.locale()===t.localeKey})),this.value=this.string?this.string.value():"",this.dirty=!1,this.processing=!1,this.inputType="input",(-1!==this.value.indexOf("\n")||this.originalString&&-1!==this.originalString.indexOf("\n"))&&(this.inputType="textarea")},i.view=function(){var t=this,n=this.originalString?this.originalString:"("+r.a.translator.trans("fof-linguist.admin.placeholder."+(this.localeKey?"not-translated":"all-locales"))+")";return m(".FoF-Linguist-Locale",[m("label.FoF-Linguist-Label",this.localeName()),m(".FoF-Linguist-Field",{className:(this.value?"FoF-Linguist-Field--with-value":"")+(this.originalString?" FoF-Linguist-Field--with-original-string":""),title:n},[m(".FoF-Linguist-Feld-Wrap",[m(this.inputType,{className:"FormControl FoF-Linguist-Input",value:this.value,oninput:m.withAttr("value",(function(n){t.value=n,t.dirty=!0,t.value||t.string||(t.dirty=!1)})),disabled:this.processing}),m(".FoF-Linguist-Placeholder",[m("span.FoF-Linguist-Placeholder-Hint",r.a.translator.trans("fof-linguist.admin.placeholder.hint"))," ",m("span",this.originalString?P(n,this.props.highlight):n)])])]),m(".FoF-Linguist-Controls",this.actions().toArray())])},i.localeName=function(){return this.locale?[this.locale.name+" (",m("code",this.locale.key),")"]:r.a.translator.trans("fof-linguist.admin.locales.all")},i.actions=function(){var t=this,n=new B.a;return n.add("apply",k.a.component({type:"button",className:"Button Button--primary",children:r.a.translator.trans("fof-linguist.admin.buttons.apply"),loading:this.processing,disabled:!this.dirty,onclick:function(){t.saveString()}})),n.add("reset",k.a.component({type:"button",className:"Button",children:r.a.translator.trans("fof-linguist.admin.buttons.reset"),loading:this.processing,disabled:!this.dirty&&!this.string,onclick:function(){t.deleteString()}})),this.originalString&&n.add("copy-original",k.a.component({type:"button",className:"Button",children:r.a.translator.trans("fof-linguist.admin.buttons.copy-original"),loading:this.processing,onclick:function(){t.value=t.originalString,t.dirty=!0}})),n},i.saveString=function(){var t=this;this.value?(this.string||(this.string=r.a.store.createRecord("fof-linguist-string",{attributes:{key:this.stringKey.key(),locale:this.localeKey,value:""}})),this.string.data.attributes.value=this.value,this.string.locale()||delete this.string.data.attributes.locale,this.processing=!0,this.string.save(this.string.data.attributes).then((function(){t.processing=!1,t.dirty=!1,t.props.onchange(),m.redraw()})).catch((function(n){throw t.processing=!1,n}))):this.deleteString()},i.deleteString=function(){var t=this;this.string?(this.processing=!0,this.string.delete().then((function(){t.processing=!1,t.dirty=!1,t.string=null,t.value="",t.props.onchange(),m.redraw()})).catch((function(n){throw t.processing=!1,n}))):(this.value="",this.dirty=!1)},n}(v.a),q=function(t){function n(){return t.apply(this,arguments)||this}return s(n,t),n.prototype.view=function(){var t=this.props,n=t.stringKey,i=t.highlight,e=t.onchange;return m(".FoF-Linguist-Key",[m(".FoF-Linguist-Key-Code",m("code",P(n.key(),i))),m(".FoF-Linguist-Locales",[K().map((function(t){return m(C,{key:t.key,locale:t,stringKey:n,highlight:i,onchange:e})})),m(C,{key:"all",locale:null,stringKey:n,highlight:i,onchange:e})])])},n}(v.a),j=function(t){function n(){return t.apply(this,arguments)||this}s(n,t);var i=n.prototype;return i.init=function(){var t=this;this.numberOfResultsToShow=20,this.filters={search:"",withOwnTranslations:!1,withOriginalTranslationsInLocales:[],withoutOriginalTranslationsInLocales:[],forExtension:null},this.results=[],this.enabledExtensions=[],m.sync([r.a.request({method:"GET",url:r.a.forum.attribute("apiUrl")+"/fof/linguist/strings"}).then((function(t){r.a.store.pushPayload(t)})),r.a.request({method:"GET",url:r.a.forum.attribute("apiUrl")+"/fof/linguist/string-keys"}).then((function(n){var i=r.a.store.pushPayload(n);Object.keys(r.a.data.extensions).forEach((function(n){L.a.prototype.isEnabled(n)&&-1!==i.findIndex((function(t){return 0===t.key().indexOf(n+".")}))&&t.enabledExtensions.push(r.a.data.extensions[n])}))}))]).then((function(){t.applyFilters()}))},i.view=function(){var t=this,n=this.results.slice(0,this.numberOfResultsToShow);return m(".container",[m("div",{key:"clear-cache"},"1"===r.a.data.settings["fof.linguist.should-clear-cache"]?S.a.component({children:r.a.translator.trans("fof-linguist.admin.clear-cache.text"),dismissible:!1,controls:[k.a.component({className:"Button Button--link",onclick:function(){r.a.modal.show(new I.a),r.a.request({method:"DELETE",url:r.a.forum.attribute("apiUrl")+"/cache"}).then((function(){return window.location.reload()}))},children:r.a.translator.trans("fof-linguist.admin.clear-cache.button")})]}):null),m(".FoF-Linguist-Filters",{key:"filters"},[m("input.FormControl",{key:"search",value:this.filters.search,oninput:m.withAttr("value",(function(n){t.filters.search=n,t.applyFilters()})),placeholder:r.a.translator.trans("fof-linguist.admin.filters.search")}),k.a.component({className:"Button"+(this.filters.withOwnTranslations?" FoF-Linguist-Filter--Selected":""),icon:"far fa-"+(this.filters.withOwnTranslations?"check-square":"square"),onclick:function(){t.filters.withOwnTranslations=!t.filters.withOwnTranslations,t.applyFilters()}},r.a.translator.trans("fof-linguist.admin.filters.with-own-translations")),x.a.component({buttonClassName:"Button"+(this.filters.forExtension?" FoF-Linguist-Filter--Selected":""),label:r.a.translator.trans("fof-linguist.admin.filters.for-extension")},this.enabledExtensions.map((function(n){return k.a.component({className:"Button",icon:"far fa-"+(t.filters.forExtension===n.id?"check-square":"square"),onclick:function(){t.filters.forExtension===n.id?t.filters.forExtension=null:t.filters.forExtension=n.id,t.applyFilters()}},n.extra["flarum-extension"].title)}))),x.a.component({buttonClassName:"Button"+(this.filters.withoutOriginalTranslationsInLocales.length?" FoF-Linguist-Filter--Selected":""),label:r.a.translator.trans("fof-linguist.admin.filters.without-original-translations-in-locales")},K().map((function(n){return k.a.component({className:"Button",icon:"far fa-"+(t.filters.withoutOriginalTranslationsInLocales.includes(n.key)?"check-square":"square"),onclick:function(){-1!==t.filters.withoutOriginalTranslationsInLocales.indexOf(n.key)?t.filters.withoutOriginalTranslationsInLocales=t.filters.withoutOriginalTranslationsInLocales.filter((function(t){return t!==n.key})):t.filters.withoutOriginalTranslationsInLocales.push(n.key),t.applyFilters()}},n.name+" ("+n.key+")")}))),x.a.component({buttonClassName:"Button"+(this.filters.withOriginalTranslationsInLocales.length?" FoF-Linguist-Filter--Selected":""),label:r.a.translator.trans("fof-linguist.admin.filters.with-original-translations-in-locales")},K().map((function(n){return k.a.component({className:"Button",icon:"far fa-"+(t.filters.withOriginalTranslationsInLocales.includes(n.key)?"check-square":"square"),onclick:function(){-1!==t.filters.withOriginalTranslationsInLocales.indexOf(n.key)?t.filters.withOriginalTranslationsInLocales=t.filters.withOriginalTranslationsInLocales.filter((function(t){return t!==n.key})):t.filters.withOriginalTranslationsInLocales.push(n.key),t.applyFilters()}},n.name+" ("+n.key+")")})))]),n.map((function(n){return m(q,{key:n.id(),stringKey:n,highlight:t.filters.search,onchange:function(){r.a.data.settings["fof.linguist.should-clear-cache"]="1"}})})),m(".FoF-Linguist-Results",{key:"results-stats"},[r.a.translator.trans("fof-linguist.admin.filters.results",{shown:n.length+"",total:this.results.length+""})," ",this.results.length>n.length?k.a.component({className:"Button",onclick:function(){t.numberOfResultsToShow+=20}},r.a.translator.trans("fof-linguist.admin.buttons.load-more")):null])])},i.applyFilters=function(){var t=this;this.numberOfResultsToShow=20;var n=r.a.store.all("fof-linguist-string").map((function(t){return t.key()})),i="";this.filters.search&&(i=this.filters.search.toLowerCase()),this.results=r.a.store.all("fof-linguist-string-key").filter((function(e){if(t.filters.withOwnTranslations&&-1===n.indexOf(e.key()))return!1;var r=t.filters.withOriginalTranslationsInLocales,s=Array.isArray(r),o=0;for(r=s?r:r[Symbol.iterator]();;){var a;if(s){if(o>=r.length)break;a=r[o++]}else{if((o=r.next()).done)break;a=o.value}var l=a;if(!e.locales().hasOwnProperty(l))return!1}var u=t.filters.withoutOriginalTranslationsInLocales,c=Array.isArray(u),f=0;for(u=c?u:u[Symbol.iterator]();;){var h;if(c){if(f>=u.length)break;h=u[f++]}else{if((f=u.next()).done)break;h=f.value}var g=h;if(console.log(g),e.locales().hasOwnProperty(g))return!1}if(t.filters.forExtension&&0!==e.key().indexOf(t.filters.forExtension+"."))return!1;if(i){if(-1!==e.key().toLowerCase().indexOf(i))return!0;var p=e.locales();for(var m in p)if(p.hasOwnProperty(m)&&-1!==p[m].toLowerCase().indexOf(i))return!0;return!1}return!0})),m.redraw()},n}(v.a);r.a.initializers.add("fof-linguist",(function(t){t.store.models["fof-linguist-string-key"]=c,t.store.models["fof-linguist-string"]=f,r.a.routes["fof-linguist-strings"]={path:"/linguist",component:j.component()},r.a.extensionSettings["fof-linguist"]=function(){return m.route(r.a.route("fof-linguist-strings"))},Object(h.extend)(p.a.prototype,"items",(function(t){t.add("fof-linguist-strings",y.a.component({href:r.a.route("fof-linguist-strings"),icon:"fas fa-italic",children:r.a.translator.trans("fof-linguist.admin.menu.title"),description:r.a.translator.trans("fof-linguist.admin.menu.description")}))}))}))}]);
//# sourceMappingURL=admin.js.map