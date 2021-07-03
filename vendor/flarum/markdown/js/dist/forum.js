module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["common/components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["common/utils/BasicEditorDriver"]},function(t,e){t.exports=flarum.core.compat["common/utils/styleSelectedText"]},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(2),i=o.n(r),c=o(3),a=o.n(c),l=o(4),u=o.n(l);function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,f(t,e)}var p=o(0),d=o.n(p),x=function(t){function e(){return t.apply(this,arguments)||this}return s(e,t),e.prototype.view=function(t){return m("div",{class:"MarkdownToolbar"},t.children)},e}(d.a),y=o(5),h=o.n(y),b=o(6),k=o.n(b),v=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var o=e.prototype;return o.oncreate=function(e){t.prototype.oncreate.call(this,e)},o.view=function(){var t=m("button",{className:"Button Button--icon Button--link",type:"button","data-hotkey":this.attrs.hotkey,onkeydown:this.keydown.bind(this),onclick:this.attrs.onclick},h()(this.attrs.icon));return this.attrs.title?m(k.a,{text:this.attrs.title},t):t},o.keydown=function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.element.click())},e}(d.a),_=navigator.userAgent.match(/Macintosh/)?"⌘":"ctrl",g={header:{prefix:"### "},bold:{prefix:"**",suffix:"**",trimFirst:!0},italic:{prefix:"_",suffix:"_",trimFirst:!0},quote:{prefix:"> ",multiline:!0,surroundWithNewlines:!0},code:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"},link:{prefix:"[",suffix:"](https://)",replaceNext:"https://",scanFor:"https?://"},image:{prefix:"![",suffix:"](https://)",replaceNext:"https://",scanFor:"https?://"},unordered_list:{prefix:"- ",multiline:!0,surroundWithNewlines:!0},ordered_list:{prefix:"1. ",multiline:!0,orderedList:!0}},w=function(t){u()(app.composer.editor.el,g[t])};function O(t,e){return function(o){o.key===e&&(o.metaKey&&"⌘"===_||o.ctrlKey&&"ctrl"===_)&&w(t)}}app.initializers.add("flarum-markdown",(function(t){Object(n.extend)(a.a.prototype,"keyHandlers",(function(t){t.add("bold",O("bold","b")),t.add("italic",O("italic","i"))})),Object(n.extend)(i.a.prototype,"toolbarItems",(function(e){var o=function(e,o){return t.translator.trans("flarum-markdown.forum.composer."+e+"_tooltip")+(o?" <"+_+"-"+o+">":"")},n=function(t){return function(){return w(t)}};e.add("markdown",m(x,{for:this.textareaId,setShortcutHandler:function(t){return shortcutHandler=t}},m(v,{title:o("header"),icon:"fas fa-heading",onclick:n("header")}),m(v,{title:o("bold","b"),icon:"fas fa-bold",onclick:n("bold")}),m(v,{title:o("italic","i"),icon:"fas fa-italic",onclick:n("italic")}),m(v,{title:o("quote"),icon:"fas fa-quote-left",onclick:n("quote")}),m(v,{title:o("code"),icon:"fas fa-code",onclick:n("code")}),m(v,{title:o("link"),icon:"fas fa-link",onclick:n("link")}),m(v,{title:o("image"),icon:"fas fa-image",onclick:n("image")}),m(v,{title:o("unordered_list"),icon:"fas fa-list-ul",onclick:n("unordered_list")}),m(v,{title:o("ordered_list"),icon:"fas fa-list-ol",onclick:n("ordered_list")})),100)}))}))}]);
//# sourceMappingURL=forum.js.map