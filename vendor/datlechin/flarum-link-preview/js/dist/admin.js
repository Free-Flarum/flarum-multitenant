(()=>{var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const a=flarum.core.compat["admin/app"];var n=t.n(a),l="datlechin-link-preview";n().initializers.add("datlechin/flarum-link-preview",(function(){n().extensionData.for(l+"").registerSetting({setting:l+".convert_media_urls",label:n().translator.trans(l+".admin.settings.convert_media_urls_label"),help:n().translator.trans(l+".admin.settings.convert_media_urls_help"),type:"checkbox"}).registerSetting({setting:l+".use_google_favicons",label:n().translator.trans(l+".admin.settings.use_google_favicons_label"),help:n().translator.trans(l+".admin.settings.use_google_favicons_help"),type:"checkbox"}).registerSetting({setting:l+".blacklist",label:n().translator.trans(l+".admin.settings.blacklist_label"),help:n().translator.trans(l+".admin.settings.blacklist_help"),placeholder:n().translator.trans(l+".admin.settings.blacklist_placeholder"),type:"textarea"}).registerSetting({setting:l+".whitelist",label:n().translator.trans(l+".admin.settings.whitelist_label"),help:n().translator.trans(l+".admin.settings.whitelist_help"),placeholder:n().translator.trans(l+".admin.settings.whitelist_placeholder"),type:"textarea"}).registerSetting({setting:l+".cache_time",label:n().translator.trans(l+".admin.settings.cache_time_label"),help:n().translator.trans(l+".admin.settings.cache_time_help"),type:"number",min:0}).registerSetting({setting:l+".open_links_in_new_tab",label:n().translator.trans(l+".admin.settings.open_links_in_new_tab_label"),help:n().translator.trans(l+".admin.settings.open_links_in_new_tab_help"),type:"checkbox"})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map