(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat["admin/app"];var n=e.n(a);n().initializers.add("datlechin/flarum-landing-page",(function(){n().extensionData.for("datlechin-landing-page").registerSetting({setting:"datlechin-landing-page.header_html",label:n().translator.trans("datlechin-landing-page.admin.settings.header_html_label"),help:n().translator.trans("datlechin-landing-page.admin.settings.header_html_help"),type:"textarea"}).registerSetting({setting:"datlechin-landing-page.body_html",label:n().translator.trans("datlechin-landing-page.admin.settings.body_html_label"),help:n().translator.trans("datlechin-landing-page.admin.settings.body_html_help"),type:"textarea"})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map