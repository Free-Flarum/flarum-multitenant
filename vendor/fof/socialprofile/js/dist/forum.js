module.exports=function(t){var o={};function a(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=o,a.d=function(t,o,n){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)a.d(n,i,function(o){return t[o]}.bind(null,i));return n},a.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="",a(a.s=16)}([function(t,o){t.exports=flarum.core.compat["forum/app"]},function(t,o){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,o){t.exports=flarum.core.compat["common/utils/classList"]},,function(t,o){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,o){t.exports=flarum.core.compat["common/Model"]},function(t,o){t.exports=flarum.core.compat["common/models/User"]},function(t,o){t.exports=flarum.core.compat["common/components/Badge"]},function(t,o){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["forum/components/UserCard"]},function(t,o){t.exports=flarum.core.compat["common/components/Modal"]},function(t,o){t.exports=flarum.core.compat["common/components/Button"]},function(t,o){t.exports=flarum.core.compat["common/Component"]},function(t,o){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,o){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,o,a){"use strict";a.r(o);var n=a(0),i=a.n(n),e=a(5),r=a.n(e),s=a(6),c=a.n(s),f=a(9),l=a(10),u=a.n(l),b=a(7),p=a.n(b),d=a(4),h=a.n(d),v=a(2),g=a.n(v);function y(t,o){return(y=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function x(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,y(t,o)}var w=a(11),k=a.n(w),S=a(12),B=a.n(S),N=a(1),j=a.n(N),C=a(13),E=a.n(C),F=a(14),_=a.n(F);var O=a(15),P=a.n(O),M=a(8),U=a.n(M),I=function(t){function o(){return t.apply(this,arguments)||this}x(o,t),o.initAttrs=function(o){t.initAttrs.call(this,o),o.className="icondropdown",o.buttonClassName="Button Button--icon",o.menuClassName="social-dropdown-menu"};var a=o.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.icons={social:["fas fa-envelope","fas fa-globe","fab fa-amazon","fab fa-angellist","fab fa-apple","fab fa-behance","fab fa-bitbucket","fab fa-codepen","fab fa-connectdevelop","fab fa-dashcube","fab fa-delicious","fab fa-deviantart","fab fa-digg","fab fa-discord","fab fa-dribbble","fab fa-dropbox","fab fa-drupal","fab fa-facebook","fab fa-flickr","fab fa-foursquare","fab fa-get-pocket","fab fa-git","fab fa-github","fab fa-github-alt","fab fa-google","fab fa-google-plus","fab fa-google-wallet","fab fa-hacker-news","fab fa-instagram","fab fa-ioxhost","fab fa-joomla","fab fa-jsfiddle","fab fa-lastfm","fab fa-leanpub","fab fa-linkedin","fab fa-mastodon","fab fa-medium","fab fa-odnoklassniki","fab fa-opencart","fab fa-pagelines","fab fa-paypal","fab fa-pied-piper-alt","fab fa-pinterest-p","fab fa-playstation","fab fa-qq","fab fa-reddit","fab fa-renren","fab fa-sellsy","fas fa-share-alt","fab fa-shirtsinbulk","fab fa-simplybuilt","fab fa-skyatlas","fab fa-skype","fab fa-slack","fab fa-slideshare","fab fa-soundcloud","fab fa-spotify","fab fa-stack-exchange","fab fa-stack-overflow","fab fa-steam","fab fa-stumbleupon","fab fa-telegram","fab fa-tencent-weibo","fab fa-trello","fab fa-tripadvisor","fab fa-tumblr","fab fa-twitch","fab fa-twitter","fab fa-viacoin","fab fa-vimeo","fab fa-vine","fab fa-vk","fab fa-weibo","fab fa-weixin","fab fa-whatsapp","fab fa-wordpress","fab fa-xbox","fab fa-xing","fab fa-y-combinator","fab fa-yandex","fab fa-yandex-international","fab fa-yelp","fab fa-youtube"]}},a.view=function(o){return o.children=this.items().toArray(),t.prototype.view.call(this,o)},a.getButtonContent=function(){var t=this,o=function(t){return U()(t,{className:"icondropdown-activeIcon fa-fw"})};return[/^favicon(-\w+)?$/.test(this.attrs.selection())?this.attrs.allowsExternal?[m("img",{className:g()({"icondropdown-activeIcon":!0,"social-greyscale-button":"favicon-grey"===this.attrs.selection(),"social-button":"favicon-grey"===!this.attrs.selection()}),alt:"",src:this.attrs.favicon(),onerror:function(){t.attrs.favicon("none"),t.select(t.icons.social[0])}})]:o("fas fa-globe"):o(this.attrs.selection()),this.attrs.caretIcon?U()(this.attrs.caretIcon,{className:"Button-caret"}):""]},a.items=function(){var t=this,o=new h.a;return"none"!==this.attrs.favicon()&&this.attrs.allowsExternal&&(o.add("favicon",m("div",{onclick:function(){return t.select("favicon")},role:"button",className:g()({"iconpicker-item":!0,"iconpicker-item--highlighted":"favicon"===this.attrs.selection()}),title:"Favicon"},m("img",{className:"iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),102),o.add("favicon-grey",m("div",{onclick:function(){return t.select("favicon-grey")},role:"button",className:g()({"iconpicker-item iconpicker-item--invertColors":!0,"iconpicker-item--highlighted":"favicon-grey"===this.attrs.selection()}),title:"Grey Favicon"},m("img",{className:"social-greyscale-button iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),101)),this.icons.social.forEach((function(a){o.add(a.replace(/ /,"-"),m("div",{onclick:function(){return t.select(a)},className:g()({"iconpicker-item":!0,"iconpicker-item--highlighted":t.attrs.selection()===a}),role:"button",title:"."+a},U()(a,{className:"social-icon fa-fw"})),100)})),o},a.select=function(t){this.attrs.selection(t)},o}(P.a),A=function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var a=o.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.button=this.attrs.button,this.allowsExternal=i.a.forum.attribute("fof-socialprofile.allow_external_favicons")},a.view=function(t){return m("div",{className:"Form-group form-group-social",id:"socialgroup-"+this.button.index()},m("input",{type:"text",className:"FormControl SocialFormControl SocialFormControl-title",placeholder:i.a.translator.trans("fof-socialprofile.forum.edit.title"),tabIndex:2*(this.button.index()+1)-1,bidi:this.button.title}),I.component({selection:this.button.icon,favicon:this.button.favicon,index:this.button.index,allowsExternal:this.allowsExternal}),m("input",{type:"text",className:"FormControl SocialFormControl SocialFormControl-url",placeholder:i.a.translator.trans("fof-socialprofile.forum.edit.url"),tabIndex:2*(this.button.index()+1),value:this.button.url(),onchange:_()("value",this.onUrlChange.bind(this))}),m("input",{type:"hidden",className:"FormControl SocialFormControl SocialFormControl-icon",id:"icon"+this.button.index()+"-icon",bidi:this.button.icon}),m("input",{type:"hidden",className:"SocialFormControl SocialFormControl-favicon",id:"icon"+this.button.index()+"-favicon",bidi:this.button.favicon}))},a.onUrlChange=function(t){var o=this;this.button.url(t),this.allowsExternal&&(clearTimeout(this.waitUntilFinished),"fas fa-circle-notch fa-spin"!==this.button.icon()&&(this.button.icon("fas fa-circle-notch fa-spin"),this.button.favicon("none")),this.waitUntilFinished=setTimeout((function(){if(function(t){var o;try{o=new URL(t)}catch(t){return!1}return["http:","https:"].includes(o.protocol)}(o.button.url())){var t=function(t){var o;try{o=new URL(t)}catch(t){return null}return["http:","https:"].includes(o.protocol)?o.origin:null}(o.button.url())+"/favicon.ico";o.button.favicon(t),o.button.icon("favicon"),m.redraw()}else o.button.icon("fas fa-globe"),o.button.favicon("none"),m.redraw()}),1e3))},o}(E.a),L=function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var a=o.prototype;return a.oninit=function(o){var a=this;t.prototype.oninit.call(this,o),this.buttons=[];var n=this.attrs.user.socialButtons();n.length?n.forEach((function(t,o){""!==t.title&&a.createButtonObject(o,t)})):this.createButtonObject(0)},a.className=function(){return"SocialButtonsModal Modal--small"},a.title=function(){return app.translator.trans("fof-socialprofile.forum.edit.headtitle")},a.content=function(){var t=this.buttons.some((function(t){return"fas fa-circle-notch fa-spin"===t.icon()}));return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.buttons.map((function(t){return A.component({button:t})})),m("div",{className:"Form-group",id:"submit-button-group"},m("div",{className:"Button Button--primary EditSocialButtons-add",style:"margin-left: 1%;",onclick:this.addSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-plus"})),m("div",{className:"Button Button--primary EditSocialButtons-del",style:"margin-left: 1%;",onclick:this.delSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-minus"})),B.a.component({type:"submit",style:"float: right;",className:"Button Button--primary EditSocialButtons-save",loading:this.loading,disabled:t,title:t?app.translator.trans("fof-socialprofile.forum.edit.save_disabled_fetching_favicons"):null},app.translator.trans("fof-socialprofile.forum.edit.submit")))))},a.data=function(){var t=[];return this.buttons.forEach((function(o,a){""!==o.title()&&(t[a]={},t[a].title=o.title(),t[a].url=o.url(),t[a].icon=o.icon(),t[a].favicon=o.favicon())})),{socialButtons:JSON.stringify(t)}},a.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.attrs.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch((function(){o.loading=!1,m.redraw()}))},a.addSocialButton=function(){var t=this;this.createButtonObject(this.buttons.length),m.redraw(),$("document").ready((function(){$("#socialgroup-"+(t.buttons.length-1)).slideDown()}))},a.delSocialButton=function(){var t=this,o=this.buttons.length-1;$("#socialgroup-"+o).slideUp("normal",(function(){t.buttons.splice(o,1),m.redraw()}))},a.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=j()(t),this.buttons[t].favicon=j()("none"),this.buttons[t].title=j()(""),this.buttons[t].url=j()(""),this.buttons[t].icon=j()("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=j()(t),this.buttons[t].favicon=j()(o.favicon),this.buttons[t].title=j()(o.title),this.buttons[t].url=j()(o.url),this.buttons[t].icon=j()(o.icon))},o}(k.a);i.a.initializers.add("fof/socialprofile",(function(){c.a.prototype.socialButtons=r.a.attribute("socialButtons",(function(t){return JSON.parse(t||"[]")})),c.a.prototype.canViewSocialProfile=r.a.attribute("canViewSocialProfile"),c.a.prototype.canEditSocialProfile=r.a.attribute("canEditSocialProfile"),Object(f.extend)(u.a.prototype,"infoItems",(function(t){var o=this,a=this.attrs.user;if(a.canViewSocialProfile()){this.canEdit=a.canEditSocialProfile(),this.buttons=this.attrs.user.socialButtons();var n=new h.a;this.buttons.length?(this.buttons.forEach((function(t,a){if(""!==t.title&&""!==t.icon&&""!==t.url){var e,r,s="",c=g()(((e={})["social-button "+t.icon+"-"+a+" social-icon-"+a]=!0,e["social-greyscale-button"]="favicon-grey"===t.icon,e));"favicon"!==t.icon&&"favicon-grey"!==t.icon||(i.a.forum.attribute("fof-socialprofile.allow_external_favicons")?s='\n                                background-image: url("'+t.favicon+'");\n                                background-size: 60%;\n                                background-position: center;\n                                background-repeat: no-repeat;\n                            ':c+=" fas fa-globe"),n.add("social-icon-"+a,m("a",{href:t.url,target:"_blank",rel:"noreferrer noopener nofollow"},p.a.component({className:g()((r={},r[c]=!0,r["social-icon--deleting"]=o.deleting,r)),type:"social",icon:t.icon,label:t.title,style:s})))}})),this.canEdit&&n.add("settings social-button",p.a.component({type:"social social-settings",icon:"fas fa-cog",label:i.a.translator.trans("fof-socialprofile.forum.edit.edit"),onclick:function(){i.a.modal.show(L,{user:o.attrs.user})}}),-1)):this.canEdit&&n.add("settings social-button",p.a.component({type:"social null-social-settings",icon:"fas fa-plus",label:i.a.translator.trans("fof-socialprofile.forum.edit.add"),onclick:function(){i.a.modal.show(L,{user:o.attrs.user})}}),-1),n.toArray().length>0&&(t.has("lastSeen")&&t.replace("lastSeen",t.lastSeen,50),t.has("joined")&&t.replace("joined",t.joined,40),t.add("fofsocialprofile",n.toArray(),20))}}))}))}]);
//# sourceMappingURL=forum.js.map