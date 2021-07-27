module.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=19)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},,function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,e){t.exports=flarum.core.compat["tags/components/TagsPage"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["tags/common/helpers/tagIcon"]},function(t,e){t.exports=flarum.core.compat["tags/common/helpers/tagLabel"]},function(t,e){t.exports=flarum.core.compat["tags/common/utils/sortTags"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-theme-base/forum/components/Footer"]},,,,,function(t,e,s){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}s.r(e);var r=s(0),o=s(3),a=s.n(o),i=s(6),c=s.n(i),l=s(4),u=s.n(l),p=s(1),f=s.n(p),d=s(7),g=s.n(d),v=s(8),h=s.n(v),T=s(9),x=s.n(T),C=s(10),y=s.n(C),b=s(11),N=s.n(b),P=s(12),A=s.n(P),O=function(){function t(){}return t.prototype.view=function(){if(this.loading)return m(g.a,null);var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"Asirem-TagsPage"},u.a.prototype.hero(),m("div",{className:"sideNavContainer container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,h()(u.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"Asirem-TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),s=A()(t.children()||[]),n=y()(t,{},{useColor:!1});return delete n.attrs.style.backgroundColor,m("li",{className:"Asirem-TagTile "+(t.color()?"colored":""),style:{"--tag-bg":t.color()}},m(f.a,{className:"Asirem-TagTile-info",href:app.route.tag(t)},m("div",{className:"Asirem-TagTile-icon"},n),m("div",{className:"Asirem-TagTile-content"},m("h3",{className:"Asirem-TagTile-name"},t.name()),m("p",{className:"Asirem-TagTile-description"},t.description()),s&&s.length?m("div",{className:"Asirem-TagTile-children"},s.map((function(t){return[m(f.a,{href:app.route.tag(t),className:"TagLabel"},t.name())," "]}))):"",e?m(f.a,{className:"Asirem-TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"Asirem-TagTile-lastPostedDiscussion-title"},e.title()),x()(e.lastPostedAt())):m("span",{className:"Asirem-TagTile-lastPostedDiscussion"}))))}))),e.length?m("div",{className:"Asirem-TagCloud"},e.map((function(t){return[N()(t,{link:!0})," "]}))):"")))},t}(),j=s(13),L=s(14),I=s.n(L);app.initializers.add("afrux-asirem",(function(){Object(r.extend)(a.a.prototype,"view",(function(t){var e=t.children.find((function(t){return"div"===t.tag&&t.attrs&&t.attrs.className.includes("DiscussionListItem-content")}));e.children[0]=m("div",{className:"DiscussionListItem-author-container"},[e.children[0],e.children[1]]),delete e.children[1],e.children[3]=m("div",{className:"DiscussionListItem-stats"},e.children[3]),this.attrs.discussion.tags()&&this.attrs.discussion.tags()[0]&&this.attrs.discussion.tags()[0].color()&&(t.attrs.style=n({"--tag-color":this.attrs.discussion.tags()[0].color()},t.attrs.style||{})),this.attrs.discussion.isUnread()&&(t.attrs.className+=" DiscussionListItem--unread")})),Object(r.extend)(a.a.prototype,"infoItems",(function(t){if(!t.has("excerpt")){var e=this.attrs.discussion.firstPost();if(e){var s=Object(j.truncate)(e.contentPlain(),175);t.add("excerpt",m("div",null,s),-100)}}})),Object(r.override)(I.a.prototype,"separator",(function(){return m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1440",height:"288",className:"Asirem-footerWaves"},m("path",{"fill-opacity":"1",d:"M0,224L18.5,186.7C36.9,149,74,75,111,58.7C147.7,43,185,85,222,112C258.5,139,295,149,332,154.7C369.2,160,406,160,443,149.3C480,139,517,117,554,101.3C590.8,85,628,75,665,96C701.5,117,738,171,775,165.3C812.3,160,849,96,886,101.3C923.1,107,960,181,997,218.7C1033.8,256,1071,256,1108,250.7C1144.6,245,1182,235,1218,202.7C1255.4,171,1292,117,1329,117.3C1366.2,117,1403,171,1422,197.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"}))})),Object(r.override)(c.a.prototype,"view",O.prototype.view)}))}]);
//# sourceMappingURL=forum.js.map