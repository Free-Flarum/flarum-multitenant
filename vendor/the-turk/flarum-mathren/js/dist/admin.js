module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e){t.exports=flarum.core.compat["common/app"]},,function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},,,function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},,,,,,,,,function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),s=n(7),i=n.n(s),l=n(4),c=n.n(l),p=n(16),u=n.n(p),h=n(17),d=n.n(h),g=n(18),f=n.n(g),b=n(19),x=n.n(b),v=n(3),y=n.n(v),T=/^\[([a-zA-Z_-]+)\]%e%\[\/\1\](?:,\s*\[([a-zA-Z_-]+)\]%e%\[\/\2\])*$/,F=/^[a-zA-Z_-]+(?:,\s*[a-zA-Z_-]+)*$/,N=/^#[0-9a-f]{3}([0-9a-f]{3})?$/i,C=/^[0-9]*[.]?[0-9]+$/,O=/^\+?(0|[1-9]\d*)$/,M="the-turk-mathren.",_="the-turk-mathren.admin.settings.",k=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.settings={},this.loading=!1,this.outputModeOptions={html:"HTML",mathml:"MathML",htmlAndMathml:"HTML & MathML"},this.validaton_rules={blockDelimiters:T,inlineDelimiters:T,decisiveKeywords:F,ignoredTags:F,ignoredClasses:F,minRuleThickness:C,maxSize:C,errorColor:N,maxExpand:O}},n.content=function(){var t=this;return[m("div",{className:"MathRenPage"},[m("div",{className:"container"},[m("form",{onsubmit:this.onsubmit.bind(this)},[m("h3",r.a.translator.trans(_+"katexOptionsHeading")),m("hr"),m(".Form-group",[m("label",r.a.translator.trans(_+"delimiters")),m(".helpText",r.a.translator.trans(_+"delimitersHelp"))]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-exclamation-circle"}),m("span",r.a.translator.trans(_+"regexInfo")))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"blockDelimiters"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"blockDelimiters","[math]%e%[/math]"),placeholder:"[math]%e%[/math]"}))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"inlineDelimiters"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"inlineDelimiters","[imath]%e%[/imath]"),placeholder:"[imath]%e%[/imath]"}))]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-info-circle"}),m("span",r.a.translator.trans(_+"mainDelimitersInfo")))]),m(".Form-group",[m("label",r.a.translator.trans(_+"ignoringExpressions")),m(".helpText",r.a.translator.trans(_+"ignoringExpressionsHelp"))]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-exclamation-circle"}),m("span",r.a.translator.trans(_+"regexInfo")))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"decisiveKeywords"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"decisiveKeywords","ignore"),placeholder:"ignore"}))]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-question-circle"}),m("span",r.a.translator.trans(_+"decisiveKeywordsHelp")))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"ignoredTags"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"ignoredTags",""),placeholder:"script,noscript,style,textarea,pre,code"}))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"ignoredClasses"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"ignoredClasses","mathren-ignore"),placeholder:"mathren-ignore"}))]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-info-circle"}),m("span",r.a.translator.trans(_+"ignoredClassesInfo")))]),m(".Form-group",[m("label",r.a.translator.trans(_+"outputMode")),m(".helpText",r.a.translator.trans(_+"outputModeHelp")),m("div",f.a.component({options:this.outputModeOptions,onchange:this.setting(M+"outputMode"),value:this.setting(M+"outputMode")()||"htmlAndMathml"}))]),m(".Form-group",[m("label",y.a.component({state:"1"===this.setting(M+"enableFleqn","0")(),onchange:function(e){t.setting(M+"enableFleqn")(e?"1":"0")}},r.a.translator.trans(_+"enableFleqn")))]),m(".Form-group",[m("label",y.a.component({state:"1"===this.setting(M+"enableLeqno","0")(),onchange:function(e){t.setting(M+"enableLeqno")(e?"1":"0")}},r.a.translator.trans(_+"enableLeqno")))]),m(".Form-group",[m("label",y.a.component({state:"1"===this.setting(M+"enableColorIsTextColor","0")(),onchange:function(e){t.setting(M+"enableColorIsTextColor")(e?"1":"0")}},r.a.translator.trans(_+"enableColorIsTextColor")))]),m(".Form-group",[m("label",y.a.component({state:"1"===this.setting(M+"enableThrowOnError","0")(),onchange:function(e){t.setting(M+"enableThrowOnError")(e?"1":"0")}},r.a.translator.trans(_+"enableThrowOnError")))]),m(".Form-group .flex-container",[m("div",{className:"inline--input-color-label"},m("label",r.a.translator.trans(_+"errorColor")),m(".helpText",r.a.translator.trans(_+"errorColorHelp"))),m("div",{className:"inline--input-color"},m("input[type=color].FormControl",{bidi:this.setting(M+"errorColor","#cc0000"),disabled:"1"===this.setting(M+"enableThrowOnError")()}))]),m(".Form-group",[m("label",r.a.translator.trans(_+"sizeSettings")),m(".helpText",r.a.translator.trans(_+"sizeSettingsHelp"))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"minRuleThickness"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"minRuleThickness","0.05"),placeholder:"0.05"}))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"maxSize"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"maxSize","10"),placeholder:"10"}))]),m(".Form-group",[m("label",r.a.translator.trans(_+"macros")),m(".helpText",r.a.translator.trans(_+"macrosHelp")),m("textarea.FormControl",{bidi:this.setting(M+"macros",""),placeholder:'"\\\\RR": "\\\\mathbb{R}"\n"\\\\NN": "\\\\mathbb{N}"'})]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-exclamation-circle"}),m("span",r.a.translator.trans(_+"syntaxInfo")))]),m(".Form-group .flex-container",[m("div",{className:"inline--label"},m(".helpText",r.a.translator.trans(_+"maxExpand"))),m("div",{className:"inline--input"},m("input[type=text].FormControl",{bidi:this.setting(M+"maxExpand","1000"),placeholder:"1000"}))]),m(".Form-group",[i.a.component({type:"success",dismissible:!1},r.a.translator.trans(_+"katexOptionsInfo",{a:m("a",{href:"https://katex.org/docs/options.html",target:"_blank"})}))]),m("h3",r.a.translator.trans(_+"otherOptionsHeading")),m("hr"),m(".Form-group",[m("label",y.a.component({state:"1"===this.setting(M+"enableTextEditorButtons","1")(),onchange:function(e){t.setting(M+"enableTextEditorButtons")(e?"1":"0")}},r.a.translator.trans(_+"enableTextEditorButtons")))]),m(".Form-group",[m("label",y.a.component({state:"1"===this.setting(M+"enableCopyTeX","1")(),onchange:function(e){t.setting(M+"enableCopyTeX")(e?"1":"0")}},r.a.translator.trans(_+"enableCopyTeX")))]),m(".Form-group",[m("div",{className:"helpText"},m("i",{className:"fas fa-info-circle"}),m("span",r.a.translator.trans(_+"mentions")))]),c.a.component({type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.changed()},r.a.translator.trans("core.admin.settings.submit_button"))])])])]},n.setting=function(t,e){return void 0===e&&(e=""),this.settings[t]=this.settings[t]||x()(r.a.data.settings[t]||e),this.settings[t]},n.dirty=function(){var t=this,e={};return Object.keys(this.settings).forEach((function(n){var a=t.settings[n]();a!==r.a.data.settings[n]&&(e[n]=a)})),e},n.changed=function(){return Object.keys(this.dirty()).length},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading||(this.loading=!0,r.a.alerts.dismiss(this.alertMessage),this.validate.bind(this,this.validaton_rules)()?d()(this.dirty()).then((function(){e.alertMessage=r.a.alerts.show(i.a,{type:"success"},r.a.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()})):(this.loading=!1,m.redraw()))},n.validate=function(t){var e=this,n=!0;return Object.keys(t).every((function(a){var o=e.setting(M+a)();return o&&!t[a].test(o)&&(n=!1,e.alertMessage=r.a.alerts.show(i.a,{type:"error"},r.a.translator.trans(_+"validation",{field_key:r.a.translator.trans(_+a)}))),n})),n},e}(u.a);r.a.initializers.add("the-turk-mathren",(function(t){t.extensionData.for("the-turk-mathren").registerPage(k)}))}]);
//# sourceMappingURL=admin.js.map