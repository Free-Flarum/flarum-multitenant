module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},,function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["common/components/Page"]},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(2),i=o(3),u=o.n(i),c=function(){function e(e){var t=e.coords.latitude,o=e.coords.longitude,n=r.a.forum.attribute("wheaterApiKey"),a="https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+o+"&lang="+(r.a.forum.attribute("lang")||"en")+"&appid="+n;$.get(a,(function(e){var t=e.current,o=Math.floor(t.temp-273),n=t.weather[0].description;$("#temp-main").html(o+"°"),$("#condition").html(n)}))}navigator.geolocation?navigator.geolocation.getCurrentPosition(e):alert(r.a.translator.trans("geo-weather.forum.not-supported"))},l=o(4),s=o.n(l);r.a.initializers.add("justoverclock/geo-weather",(function(){Object(a.extend)(s.a.prototype,["oncreate","onupdate"],c),Object(a.extend)(u.a.prototype,"oncreate",(function(){this.timeInterval=setInterval((function(){var e=new Date,t=e.getHours(),o=e.getMinutes(),n=e.getSeconds();t<10&&(t="0"+t),o<10&&(o="0"+o),n<10&&(n="0"+n),document.getElementById("time").innerHTML=t+":"+o+":"+n}),500)})),Object(a.extend)(u.a.prototype,"onremove",(function(){clearInterval(this.timeInterval)})),Object(a.extend)(u.a.prototype,"sidebarItems",(function(e){var t=r.a.forum.attribute("baseUrl")+"/assets/extensions/justoverclock-geo-weather/4seasons.gif";e.add("GeoWeatherWg",m("div",{className:"weather",style:"background-image: url("+t+")"},[m("div",{className:"col1"},m("h1",{id:"temp-main"},r.a.translator.trans("geo-weather.forum.temp"))),m("div",{className:"clock"},m("h2",{id:"time"})),m("div",{className:"col2"},m("h2",{id:"condition"},r.a.translator.trans("geo-weather.forum.unknown")))]),10)}))}))}]);
//# sourceMappingURL=forum.js.map