var WBUtil=function(){"use strict";function t(){var t=navigator.userAgent;return{wx:t.match(/MicroMessenger\/([\d.]+)/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,qq:t.match(/QQ\/([\d.]+)/),wyxApp:t.match(/58WeiYingXiaoApp([\d.]*)/),wuba:t.match(/WUBA([/\d.]*)/),wbtown:t.match(/WBTown\/([\d.]*)/),wbutown:t.match(/wbutown\/([\d.]*)/),wbstar:t.match(/wbstar\/([\d.]*)/),ajk:t.match(/AJK\/([\d.]*)/),iPhoneX:t.indexOf("iphonex")>-1||t.indexOf("iPhone")>-1&&(812===window.screen.height||896===window.screen.height)}}function e(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",o=t.split(n),r=e.split(n),i=Math.max(o.length,r.length),c=1,s=-1,a=0,u=0;u<i;u++){var l=parseInt(o[u]||"0",10),h=parseInt(r[u]||"0",10);if(l>h)return c;if(l<h)return s}return a}function n(t){var e=t.toString();return e[1]?e:"0".concat(e)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{var n=new URL(t),o=n.searchParams;return o.get(e)}catch(n){var r=new RegExp("(\\?|&)".concat(e,"=([^&]*)")),i=r.exec(t),c=i&&i[2]?decodeURIComponent(i[2]):null;return c}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a;function u(t){return new Promise((function(e,n){var o;null===(o=window.WBUTOWN)||void 0===o||o.invoke("login",{fromsource:t},(function(t){"0"===t?e(t):n(t)}))}))}function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0";if("0.0.0"===n)return console.error("请输入正确的版本号"),!1;var o="",r=1,i=t(),c=i.wbutown,s=i.wuba,a=i.wbtown,u=i.wbstar;if(c)o=c[r];else if(s)o=s[r];else if(a)o=a[r];else{if(!u)return!1;o=u[r]}return e(o,n)>=0}!function(){if("object"===("undefined"==typeof window?"undefined":r(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=i(e);n;)n=i(e=n.ownerDocument);return e}(),e=[],n=null,o=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?d(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},s._resetCrossOriginUpdater=function(){n=null,o=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,r=null,c=null;this.POLL_INTERVAL?r=n.setInterval(o,this.POLL_INTERVAL):(a(n,"resize",o,!0),a(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(c=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),u(t,"resize",o,!0)),u(e,"scroll",o,!0),c&&c.disconnect()}));var s=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=s){var l=i(e);l&&this._monitorIntersections(l.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var r=i(n);if((n=r&&r.ownerDocument)==e)return!0}return!1}))){var r=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),r(),e!=o){var c=i(e);c&&this._unmonitorIntersections(c.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,i=l(r),s=this._rootContainsTarget(r),a=o.entry,u=t&&s&&this._computeTargetAndRootIntersection(r,i,e),h=null;this._rootContainsTarget(r)?n&&!this.root||(h=e):h={top:0,bottom:0,left:0,right:0,width:0,height:0};var d=o.entry=new c({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:i,rootBounds:h,intersectionRect:u});a?t&&s?this._hasCrossedThreshold(a,d)&&this._queuedEntries.push(d):a&&a.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var c,s,a,u,h,g,f,v,w=r,m=p(e),b=!1;!b&&m;){var y=null,_=1==m.nodeType?window.getComputedStyle(m):{};if("none"==_.display)return null;if(m==this.root||9==m.nodeType)if(b=!0,m==this.root||m==t)n&&!this.root?!o||0==o.width&&0==o.height?(m=null,y=null,w=null):y=o:y=i;else{var O=p(m),I=O&&l(O),T=O&&this._computeTargetAndRootIntersection(O,I,i);I&&T?(m=O,y=d(I,T)):(m=null,w=null)}else{var E=m.ownerDocument;m!=E.body&&m!=E.documentElement&&"visible"!=_.overflow&&(y=l(m))}if(y&&(c=y,s=w,a=void 0,u=void 0,h=void 0,g=void 0,f=void 0,v=void 0,a=Math.max(c.top,s.top),u=Math.min(c.bottom,s.bottom),h=Math.max(c.left,s.left),g=Math.min(c.right,s.right),v=u-a,w=(f=g-h)>=0&&v>=0&&{top:a,bottom:u,left:h,right:g,width:f,height:v}||null),!w)break;m=m&&p(m)}return w}},s.prototype._getRootRect=function(){var e;if(this.root&&!f(this.root))e=l(this.root);else{var n=f(this.root)?this.root:t,o=n.documentElement,r=n.body;e={top:0,left:0,right:o.clientWidth||r.clientWidth,width:o.clientWidth||r.clientWidth,bottom:o.clientHeight||r.clientHeight,height:o.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},s.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},s.prototype._rootIsInDom=function(){return!this.root||g(t,this.root)},s.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return g(n,e)&&(!this.root||n==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=c}function i(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function c(t){this.time=t.time,this.target=t.target,this.rootBounds=h(t.rootBounds),this.boundingClientRect=h(t.boundingClientRect),this.intersectionRect=h(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function l(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function d(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function g(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?i(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function f(t){return t&&9===t.nodeType}}();return{web:{getUa:t,compareVersion:e,checkUrlProtocol:function(t){if(void 0===t)return"";var e=window.location.protocol;return t.match(/^http(s?)/)?t.replace(/^http(s?):/,e):e+t},formatTime:function(t,e){var o=["Y","M","D","h","m","s"],r=[],i=new Date(t);r.push(i.getFullYear().toString()),r.push(n(i.getMonth()+1)),r.push(n(i.getDate())),r.push(n(i.getHours())),r.push(n(i.getMinutes())),r.push(n(i.getSeconds()));for(var c=e,s=0;s<o.length;s++)c=c.replace(o[s],r[s]);return c},decodeHtml:function(t){return t.trim().replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&#x2F;/g,"/").replace(/&#8226;/g,"•").replace(/&OElig;/g,"Œ").replace(/&oelig;/g,"œ").replace(/&Scaron;/g,"Š").replace(/&scaron;/g,"š").replace(/&Yuml;/g,"Ÿ").replace(/&fnof;/g,"ƒ").replace(/&circ;/g,"ˆ").replace(/&tilde;/g,"˜").replace(/&ensp;/g,"").replace(/&emsp;/g,"").replace(/&thinsp;/g,"").replace(/&zwnj;/g,"").replace(/&zwj;/g,"").replace(/&lrm;/g,"").replace(/&rlm;/g,"").replace(/&ndash;/g,"–").replace(/&mdash;/g,"—").replace(/&lsquo;/g,"‘").replace(/&rsquo;/g,"’").replace(/&sbquo;/g,"‚").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&bdquo;/g,"„").replace(/&dagger;/g,"†").replace(/&Dagger;/g,"‡").replace(/&bull;/g,"•").replace(/&hellip;/g,"…").replace(/&permil;/g,"‰").replace(/&prime;/g,"′").replace(/&Prime;/g,"″").replace(/&lsaquo;/g,"‹").replace(/&rsaquo;/g,"›").replace(/&oline;/g,"‾").replace(/&euro;/g,"€").replace(/&trade;/g,"™").replace(/&larr;/g,"←").replace(/&uarr;/g,"↑").replace(/&rarr;/g,"→").replace(/&darr;/g,"↓").replace(/&harr;/g,"↔").replace(/&crarr;/g,"↵").replace(/&lceil;/g,"⌈").replace(/&rceil;/g,"⌉").replace(/&lfloor;/g,"⌊").replace(/&rfloor;/g,"⌋").replace(/&loz;/g,"◊").replace(/&spades;/g,"♠").replace(/&clubs;/g,"♣").replace(/&hearts;/g,"♥").replace(/&diams;/g,"♦").replace(/&#39;/g,"'")},getParam:o,urlOptimization:function(t,e,n){var o=/[\\?|\\&][t|w\w|h\w]*=([^&]*)/g,r=e||80;return t.replace(/((http(s?))?\/\/pic\w[^?"'&]*)([\\?|\\&][t|w\w|h\w]*=([^&]))*/g,(function(t){return t.match(o)?t:function(t,e,n){return t.match(/.gif[?|&]?/)?t.replace(/.gif[?|&]?/,(function(){return".gif?t=2&w=".concat(e,"h=").concat(e,"&")})):void 0!==n?"".concat(t,"?w=").concat(e,"&h=").concat(n):"".concat(t,"?w=").concat(e)}(t,r,n)}))},triggerEvent:function(t,e,n){var o=new CustomEvent(e,{detail:n});t.dispatchEvent(o)},watchExposure:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{var o=n.ratio,r=void 0===o?.5:o,i=n.poll,c=void 0===i?100:i,s=n.repeat,a=void 0!==s&&s,u=new IntersectionObserver((function(t){t.forEach((function(t){var n=Number(t.target.getAttribute("idx")),o=t.intersectionRatio>=r,i=t.target.dataset.hasLog,c=void 0!==i&&i,s={index:n,item:t,visibility:o};if(!c&&o)return t.target.dataset.hasLog=!0,a||u.unobserve(t.target),void e(s);c&&e(s)}))}),{threshold:[r]});Object.defineProperty(u,"POLL_INTERVAL",{value:c}),Array.from(t).forEach((function(t,e){t.getAttribute("observer")||(t.setAttribute("idx",e),t.setAttribute("observer",!0),u.observe(t))}))}catch(t){console.log("元素观察器监听异常",t)}},sendLog:function(t){var e,n,r=o(null===(e=window)||void 0===e?void 0:e.location.href,"appSource")||"",i=t;r&&r.length>0&&(i+="&appSource=".concat(r)),null===(n=window)||void 0===n||n.clickLog("from=".concat(i))}},wx:{hideWXshare:function(){void 0!==window.wxjs&&window.wxjs.ready((function(){window.wx.hideMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:QZone"]})}))}},WBUTOWN:{isLogin:function(){return new Promise((function(t,e){var n;null===(n=window.WBUTOWN)||void 0===n||n.invoke("is_login",(function(n){"0"===n?t(n):e(n)}))}))},login:u,navigateH5:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o;Object.keys(i).forEach((function(t){i[t]=String(i[t]||"")}));var c=s({url:t,title:n},o),a="";Object.keys(r).forEach((function(t){a+="&".concat(t,"=").concat(r[t])}));var u=JSON.stringify(c),l="wbutown://jump/town/common?params=".concat(encodeURIComponent(u)).concat(a);null===(e=window.WBUTOWN)||void 0===e||e.invoke("pagetrans",{protocol:l})},getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=function(){return new Promise((function(e){t&&(a=null),a?e(a):window.WBUTOWN?window.WBUTOWN.action.getUserInfo("",(function(t){var n,o=t;try{n=JSON.parse(o)}catch(t){console.log("解析失败：",t)}e(a=n)})):e({})}))};return e()},getPageTransParam:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(e){try{var n;null===(n=window.WBUTOWN)||void 0===n||n.action.getPagetransParam(t,(function(t){e(t||"")}))}catch(t){e("")}}))},share:function(t,e,n){var o=e.shareTo,r=void 0===o?"WEIXIN,FRIENDS":o,i=n.beforeSharePromise,c=void 0===i?function(){return new Promise((function(t){return t(1)}))}:i,s=n.callback,a=void 0===s?null:s,l=n.preCallback,h=void 0===l?null:l,d=n.success,g=void 0===d?null:d,p=n.error,f=void 0===p?null:p,v=n.loginCallback,w=void 0===v?null:v;t?u().then((function(){var t;w?w():null===(t=window.WBUTOWN)||void 0===t||t.invoke("reload")})).catch((function(){})):c().then((function(){var t,n=a||function(t,e){"0"===t?g&&g(e):"1"!==t&&"2"!==t&&"4"!==t||f&&f(e)};null===(t=window.WBUTOWN)||void 0===t||t.extend.share.to(r,e,n,h)})).catch((function(){}))},toast:function(t){var e;null===(e=window.WBUTOWN)||void 0===e||e.invoke("toast",{msg:t})},bindAccount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"WEIXIN",n=t(),o=n.android,r=n.ios,i=o&&l("9.12.6")||r&&l("9.14.5"),c=i?"bind_force_account":"bind_account";return new Promise((function(t,n){var o;null===(o=window.WBUTOWN)||void 0===o||o.invoke(c,{type:e},(function(e){"0"===e?t(e):n(e)}))}))},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n){var o;null===(o=window.WBUTOWN)||void 0===o||o.invoke("get_cache",{key:t},(function(t){n(t||e)}))}))},goback:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];null===(t=window.WBUTOWN)||void 0===t||t.action.goback(e)},isBindAccount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"WEIXIN";return new Promise((function(e,n){var o;null===(o=window.WBUTOWN)||void 0===o||o.action.isBindAccount(t,(function(t){"0"===t?e(t):n(t)}))}))},putCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n){var o;null===(o=window.WBUTOWN)||void 0===o||o.invoke("put_cache",{key:t,value:e},(function(t){n(t)}))}))},sendLog:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["","","","","",""],i=o;Object.keys(i).forEach((function(t){i[t]=i[t]||""})),null===(t=window.WBUTOWN)||void 0===t||t.action.setWeblog(e,n,{params:r,cate:"",customParams:i})},uploadImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:24;return new Promise((function(e,n){var o,r=t>24?24:t;null===(o=window.WBUTOWN)||void 0===o||o.invoke("upload_img",{max_count:r},(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var o=JSON.parse(t),r=o.state,i=void 0===r?"0":r,c=o.cover,s=void 0===c?"":c,a=o.urls,u=void 0===a?[]:a;"0"===i?e({cover:s,urls:u}):"1"===i&&n(i)}catch(t){n(t)}}))}))},wxAuth:function(){return new Promise((function(t,e){var n;null===(n=window.WBUTOWN)||void 0===n||n.invoke("wx_auth",{},(function(n){"0"===n?t(n):e(n)}))}))},deviceEvent:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};null===(e=window.WBUTOWN)||void 0===e||e.action.deviceEvent(t,n)}},WBAPP:{},WBTOWN:{},ALL:{isHigherThan:l}}}();
