!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var i,n=Object(this),s=n.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==s&&1==arguments.length)throw new TypeError;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o++];break}if(++o>=s)throw new TypeError}for(;s>o;)o in n&&(i=e.call(t,i,n[o],o,n)),o++;return i})}();var Zepto=function(){function t(t){return null==t?String(t):V[J.call(t)]||"object"}function e(e){return"function"==t(e)}function i(t){return null!=t&&t==t.window}function n(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function s(e){return"object"==t(e)}function o(t){return s(t)&&!i(t)&&t.__proto__==Object.prototype}function r(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function l(t){return F.call(t,function(t){return null!=t})}function c(t){return t.length>0?k.fn.concat.apply([],t):t}function d(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t){return t in z?z[t]:z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function u(t,e){return"number"!=typeof e||O[d(t)]?e:e+"px"}function f(t){var e,i;return N[t]||(e=M.createElement(t),M.body.appendChild(e),i=A(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==i&&(i="block"),N[t]=i),N[t]}function p(t){return"children"in t?S.call(t.children):k.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function g(t,e,i){for(C in e)i&&(o(e[C])||r(e[C]))?(o(e[C])&&!o(t[C])&&(t[C]={}),r(e[C])&&!r(t[C])&&(t[C]=[]),g(t[C],e[C],i)):e[C]!==w&&(t[C]=e[C])}function m(t,e){return e===w?k(t):k(t).filter(e)}function v(t,i,n,s){return e(i)?i.call(t,n,s):i}function b(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)}function _(t,e){var i=t.className,n=i&&i.baseVal!==w;return e===w?n?i.baseVal:i:(n?i.baseVal=e:t.className=e,void 0)}function y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?k.parseJSON(t):t:e):t}catch(i){return t}}function x(t,e){e(t);for(var i in t.childNodes)x(t.childNodes[i],e)}var w,C,k,T,j,$,E=[],S=E.slice,F=E.filter,M=window.document,N={},z={},A=M.defaultView.getComputedStyle,O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,H=/^(?:body|html)$/i,L=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],Z=M.createElement("table"),W=M.createElement("tr"),R={tr:M.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:W,th:W,"*":M.createElement("div")},q=/complete|loaded|interactive/,B=/^\.([\w-]+)$/,U=/^#([\w-]*)$/,X=/^[\w-]+$/,V={},J=V.toString,Y={},Q=M.createElement("div");return Y.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var i=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(i)return i.call(t,e);var n,s=t.parentNode,o=!s;return o&&(s=Q).appendChild(t),n=~Y.qsa(s,e).indexOf(t),o&&Q.removeChild(t),n},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},$=function(t){return F.call(t,function(e,i){return t.indexOf(e)==i})},Y.fragment=function(t,e,i){t.replace&&(t=t.replace(P,"<$1></$2>")),e===w&&(e=D.test(t)&&RegExp.$1),e in R||(e="*");var n,s,r=R[e];return r.innerHTML=""+t,s=k.each(S.call(r.childNodes),function(){r.removeChild(this)}),o(i)&&(n=k(s),k.each(i,function(t,e){L.indexOf(t)>-1?n[t](e):n.attr(t,e)})),s},Y.Z=function(t,e){return t=t||[],t.__proto__=k.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,i){if(t){if(e(t))return k(M).ready(t);if(Y.isZ(t))return t;var n;if(r(t))n=l(t);else if(s(t))n=[o(t)?k.extend({},t):t],t=null;else if(D.test(t))n=Y.fragment(t.trim(),RegExp.$1,i),t=null;else{if(i!==w)return k(i).find(t);n=Y.qsa(M,t)}return Y.Z(n,t)}return Y.Z()},k=function(t,e){return Y.init(t,e)},k.extend=function(t){var e,i=S.call(arguments,1);return"boolean"==typeof t&&(e=t,t=i.shift()),i.forEach(function(i){g(t,i,e)}),t},Y.qsa=function(t,e){var i;return n(t)&&U.test(e)?(i=t.getElementById(RegExp.$1))?[i]:[]:1!==t.nodeType&&9!==t.nodeType?[]:S.call(B.test(e)?t.getElementsByClassName(RegExp.$1):X.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},k.contains=function(t,e){return t!==e&&t.contains(e)},k.type=t,k.isFunction=e,k.isWindow=i,k.isArray=r,k.isPlainObject=o,k.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},k.inArray=function(t,e,i){return E.indexOf.call(e,t,i)},k.camelCase=j,k.trim=function(t){return t.trim()},k.uuid=0,k.support={},k.expr={},k.map=function(t,e){var i,n,s,o=[];if(a(t))for(n=0;n<t.length;n++)i=e(t[n],n),null!=i&&o.push(i);else for(s in t)i=e(t[s],s),null!=i&&o.push(i);return c(o)},k.each=function(t,e){var i,n;if(a(t)){for(i=0;i<t.length;i++)if(e.call(t[i],i,t[i])===!1)return t}else for(n in t)if(e.call(t[n],n,t[n])===!1)return t;return t},k.grep=function(t,e){return F.call(t,e)},window.JSON&&(k.parseJSON=JSON.parse),k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),k.fn={forEach:E.forEach,reduce:E.reduce,push:E.push,sort:E.sort,indexOf:E.indexOf,concat:E.concat,map:function(t){return k(k.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return k(S.apply(this,arguments))},ready:function(t){return q.test(M.readyState)?t(k):M.addEventListener("DOMContentLoaded",function(){t(k)},!1),this},get:function(t){return t===w?S.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return E.every.call(this,function(e,i){return t.call(e,i,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):k(F.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return k($(this.concat(k(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var i=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||i.push(this)});else{var n="string"==typeof t?this.filter(t):a(t)&&e(t.item)?S.call(t):k(t);this.forEach(function(t){n.indexOf(t)<0&&i.push(t)})}return k(i)},has:function(t){return this.filter(function(){return s(t)?k.contains(this,t):k(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!s(t)?t:k(t)},last:function(){var t=this[this.length-1];return t&&!s(t)?t:k(t)},find:function(t){var e,i=this;return e="object"==typeof t?k(t).filter(function(){var t=this;return E.some.call(i,function(e){return k.contains(e,t)})}):1==this.length?k(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)})},closest:function(t,e){var i=this[0],s=!1;for("object"==typeof t&&(s=k(t));i&&!(s?s.indexOf(i)>=0:Y.matches(i,t));)i=i!==e&&!n(i)&&i.parentNode;return k(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=k.map(i,function(t){return(t=t.parentNode)&&!n(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m($(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return S.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return F.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return k.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==A(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var i=e(t);if(this[0]&&!i)var n=k(t).get(0),s=n.parentNode||this.length>1;return this.each(function(e){k(this).wrapAll(i?t.call(this,e):s?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){k(this[0]).before(t=k(t));for(var e;(e=t.children()).length;)t=e.first();k(t).append(this)}return this},wrapInner:function(t){var i=e(t);return this.each(function(e){var n=k(this),s=n.contents(),o=i?t.call(this,e):t;s.length?s.wrapAll(o):n.append(o)})},unwrap:function(){return this.parent().each(function(){k(this).replaceWith(k(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=k(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return k(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return k(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===w?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;k(this).empty().append(v(this,t,e,i))})},text:function(t){return t===w?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var i;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(s(t))for(C in t)b(this,C,t[C]);else b(this,t,v(this,e,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&b(this,t)})},prop:function(t,e){return e===w?this[0]&&this[0][t]:this.each(function(i){this[t]=v(this,e,i,this[t])})},data:function(t,e){var i=this.attr("data-"+d(t),e);return null!==i?y(i):w},val:function(t){return t===w?this[0]&&(this[0].multiple?k(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=k(this),n=v(this,t,e,i.offset()),s=i.offsetParent().offset(),o={top:n.top-s.top,left:n.left-s.left};"static"==i.css("position")&&(o.position="relative"),i.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,i){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[j(e)]||A(this[0],"").getPropertyValue(e));var n="";if("string"==t(e))i||0===i?n=d(e)+":"+u(e,i):this.each(function(){this.style.removeProperty(d(e))});else for(C in e)e[C]||0===e[C]?n+=d(C)+":"+u(C,e[C])+";":this.each(function(){this.style.removeProperty(d(C))});return this.each(function(){this.style.cssText+=";"+n})},index:function(t){return t?this.indexOf(k(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return E.some.call(this,function(t){return this.test(_(t))},h(t))},addClass:function(t){return this.each(function(e){T=[];var i=_(this),n=v(this,t,e,i);n.split(/\s+/g).forEach(function(t){k(this).hasClass(t)||T.push(t)},this),T.length&&_(this,i+(i?" ":"")+T.join(" "))})},removeClass:function(t){return this.each(function(e){return t===w?_(this,""):(T=_(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(h(t)," ")}),_(this,T.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(i){var n=k(this),s=v(this,t,i,_(this));s.split(/\s+/g).forEach(function(t){(e===w?!n.hasClass(t):e)?n.addClass(t):n.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),n=H.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(k(t).css("margin-top"))||0,i.left-=parseFloat(k(t).css("margin-left"))||0,n.top+=parseFloat(k(e[0]).css("border-top-width"))||0,n.left+=parseFloat(k(e[0]).css("border-left-width"))||0,{top:i.top-n.top,left:i.left-n.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||M.body;t&&!H.test(t.nodeName)&&"static"==k(t).css("position");)t=t.offsetParent;return t})}},k.fn.detach=k.fn.remove,["width","height"].forEach(function(t){k.fn[t]=function(e){var s,o=this[0],r=t.replace(/./,function(t){return t[0].toUpperCase()});return e===w?i(o)?o["inner"+r]:n(o)?o.documentElement["offset"+r]:(s=this.offset())&&s[t]:this.each(function(i){o=k(this),o.css(t,v(this,e,i,o[t]()))})}}),I.forEach(function(e,i){var n=i%2;k.fn[e]=function(){var e,s,o=k.map(arguments,function(i){return e=t(i),"object"==e||"array"==e||null==i?i:Y.fragment(i)}),r=this.length>1;return o.length<1?this:this.each(function(t,e){s=n?e:e.parentNode,e=0==i?e.nextSibling:1==i?e.firstChild:2==i?e:null,o.forEach(function(t){if(r)t=t.cloneNode(!0);else if(!s)return k(t).remove();x(s.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},k.fn[n?e+"To":"insert"+(i?"Before":"After")]=function(t){return k(t)[e](this),this}}),Y.Z.prototype=k.fn,Y.uniq=$,Y.deserializeValue=y,k.zepto=Y,k}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},i=this.browser={},n=t.match(/WebKit\/([\d.]+)/),s=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),r=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=a&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),d=t.match(/Silk\/([\d._]+)/),h=t.match(/(BlackBerry).*Version\/([\d.]+)/),u=t.match(/(BB10).*Version\/([\d.]+)/),f=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(i.webkit=!!n)&&(i.version=n[1]),s&&(e.android=!0,e.version=s[2]),r&&(e.ios=e.iphone=!0,e.version=r[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),l&&(e.touchpad=!0),h&&(e.blackberry=!0,e.version=h[2]),u&&(e.bb10=!0,e.version=u[2]),f&&(e.rimtabletos=!0,e.version=f[2]),p&&(i.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),d&&(i.silk=!0,i.version=d[1]),!d&&e.android&&t.match(/Kindle Fire/)&&(i.silk=!0),g&&(i.chrome=!0,i.version=g[1]),m&&(i.firefox=!0,i.version=m[1]),e.tablet=!!(o||p||s&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(s||r||a||h||u||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=f++)}function i(t,i,o,r){if(i=n(i),i.ns)var a=s(i.ns);return(u[e(t)]||[]).filter(function(t){return!(!t||i.e&&t.e!=i.e||i.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||r&&t.sel!=r)})}function n(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function s(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,i,n){"string"!=t.type(e)?t.each(e,n):e.split(/\s/).forEach(function(t){n(t,i)})}function r(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return g[t]||t}function l(i,s,l,c,d,h){var f=e(i),p=u[f]||(u[f]=[]);o(s,l,function(e,s){var o=n(e);o.fn=s,o.sel=c,o.e in g&&(s=function(e){var i=e.relatedTarget;return!i||i!==this&&!t.contains(this,i)?o.fn.apply(this,arguments):void 0}),o.del=d&&d(s,e);var l=o.del||s;o.proxy=function(t){var e=l.apply(i,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=p.length,p.push(o),i.addEventListener(a(o.e),o.proxy,r(o,h))})}function c(t,n,s,l,c){var d=e(t);o(n||"",s,function(e,n){i(t,e,n,l).forEach(function(e){delete u[d][e.i],t.removeEventListener(a(e.e),e.proxy,r(e,c))})})}function d(e){var i,n={originalEvent:e};for(i in e)b.test(i)||void 0===e[i]||(n[i]=e[i]);return t.each(_,function(t,i){n[t]=function(){return this[i]=m,e[t].apply(e,arguments)},n[i]=v}),n}function h(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var u=(t.zepto.qsa,{}),f=1,p={},g={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:l,remove:c},t.proxy=function(i,n){if(t.isFunction(i)){var s=function(){return i.apply(n,arguments)};return s._zid=e(i),s}if("string"==typeof n)return t.proxy(i[n],i);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){l(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.one=function(t,e){return this.each(function(i,n){l(this,t,e,null,function(t,e){return function(){var i=t.apply(n,arguments);return c(n,e,t),i}})})};var m=function(){return!0},v=function(){return!1},b=/^([A-Z]|layer[XY]$)/,_={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,i,n){return this.each(function(s,o){l(o,i,n,e,function(i){return function(n){var s,r=t(n.target).closest(e,o).get(0);return r?(s=t.extend(d(n),{currentTarget:r,liveFired:o}),i.apply(r,[s].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,i){return this.each(function(){c(this,e,i,t)})},t.fn.live=function(e,i){return t(document.body).delegate(this.selector,e,i),this},t.fn.die=function(e,i){return t(document.body).undelegate(this.selector,e,i),this},t.fn.on=function(e,i,n){return!i||t.isFunction(i)?this.bind(e,i||n):this.delegate(i,e,n)},t.fn.off=function(e,i,n){return!i||t.isFunction(i)?this.unbind(e,i||n):this.undelegate(i,e,n)},t.fn.trigger=function(e,i){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),h(e),e.data=i,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,n){var s,o;return this.each(function(r,a){s=d("string"==typeof e?t.Event(e):e),s.data=n,s.target=a,t.each(i(a,e.type||e),function(t,e){return o=e.proxy(s),s.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var i=document.createEvent(p[t]||"Events"),n=!0;if(e)for(var s in e)"bubbles"==s?n=!!e[s]:i[s]=e[s];return i.initEvent(t,n,!0,null,null,null,null,null,null,null,null,null,null,null,null),i.isDefaultPrevented=function(){return this.defaultPrevented},i}}(Zepto),function(t){function e(e,i,n){var s=t.Event(i);return t(e).trigger(s,n),!s.defaultPrevented}function i(t,i,n,s){return t.global?e(i||b,n,s):void 0}function n(e){e.global&&0===t.active++&&i(e,null,"ajaxStart")}function s(e){e.global&&!--t.active&&i(e,null,"ajaxStop")}function o(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||i(e,n,"ajaxBeforeSend",[t,e])===!1?!1:(i(e,n,"ajaxSend",[t,e]),void 0)}function r(t,e,n){var s=n.context,o="success";n.success.call(s,t,o,e),i(n,s,"ajaxSuccess",[e,n,t]),l(o,e,n)}function a(t,e,n,s){var o=s.context;s.error.call(o,n,e,t),i(s,o,"ajaxError",[n,s,t]),l(e,n,s)}function l(t,e,n){var o=n.context;n.complete.call(o,e,t),i(n,o,"ajaxComplete",[e,n]),s(n)}function c(){}function d(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":y.test(t)?"script":x.test(t)&&"xml")||"text"}function h(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function u(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=h(e.url,e.data))}function f(e,i,n,s){var o=!t.isFunction(i);return{url:e,data:o?i:void 0,success:o?t.isFunction(n)?n:void 0:i,dataType:o?s||n:n}}function p(e,i,n,s){var o,r=t.isArray(i);t.each(i,function(i,a){o=t.type(a),s&&(i=n?s:s+"["+(r?"":i)+"]"),!s&&r?e.add(a.name,a.value):"array"==o||!n&&"object"==o?p(e,a,n,i):e.add(i,a)})}var g,m,v=0,b=window.document,_=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,y=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,w="application/json",C="text/html",k=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var i,n="jsonp"+ ++v,s=b.createElement("script"),l=function(){clearTimeout(i),t(s).remove(),delete window[n]},d=function(t){l(),t&&"timeout"!=t||(window[n]=c),a(null,t||"abort",h,e)},h={abort:d};return o(h,e)===!1?(d("abort"),!1):(window[n]=function(t){l(),r(t,h,e)},s.onerror=function(){d("error")},s.src=e.url.replace(/=\?/,"="+n),t("head").append(s),e.timeout>0&&(i=setTimeout(function(){d("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var i=t.extend({},e||{});for(g in t.ajaxSettings)void 0===i[g]&&(i[g]=t.ajaxSettings[g]);n(i),i.crossDomain||(i.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(i.url)&&RegExp.$2!=window.location.host),i.url||(i.url=window.location.toString()),u(i),i.cache===!1&&(i.url=h(i.url,"_="+Date.now()));var s=i.dataType,l=/=\?/.test(i.url);if("jsonp"==s||l)return l||(i.url=h(i.url,"callback=?")),t.ajaxJSONP(i);var f,p=i.accepts[s],v={},b=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,_=i.xhr();i.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),p&&(v.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),_.overrideMimeType&&_.overrideMimeType(p)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&(v["Content-Type"]=i.contentType||"application/x-www-form-urlencoded"),i.headers=t.extend(v,i.headers||{}),_.onreadystatechange=function(){if(4==_.readyState){_.onreadystatechange=c,clearTimeout(f);var e,n=!1;if(_.status>=200&&_.status<300||304==_.status||0==_.status&&"file:"==b){s=s||d(_.getResponseHeader("content-type")),e=_.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=_.responseXML:"json"==s&&(e=k.test(e)?null:t.parseJSON(e))}catch(o){n=o}n?a(n,"parsererror",_,i):r(e,_,i)}else a(null,_.status?"error":"abort",_,i)}};var y="async"in i?i.async:!0;_.open(i.type,i.url,y);for(m in i.headers)_.setRequestHeader(m,i.headers[m]);return o(_,i)===!1?(_.abort(),!1):(i.timeout>0&&(f=setTimeout(function(){_.onreadystatechange=c,_.abort(),a(null,"timeout",_,i)},i.timeout)),_.send(i.data?i.data:null),_)},t.get=function(){return t.ajax(f.apply(null,arguments))},t.post=function(){var e=f.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=f.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,i,n){if(!this.length)return this;var s,o=this,r=e.split(/\s/),a=f(e,i,n),l=a.success;return r.length>1&&(a.url=r[0],s=r[1]),a.success=function(e){o.html(s?t("<div>").html(e.replace(_,"")).find(s):e),l&&l.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(t,e){var i=[];return i.add=function(t,e){this.push(T(t)+"="+T(e))},p(i,t,e),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,i=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var n=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&("radio"!=n&&"checkbox"!=n||this.checked)&&i.push({name:e.attr("name"),value:e.val()})}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var i=t.Event("submit");this.eq(0).trigger(i),i.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function i(t){return n(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function n(t){return t.toLowerCase()}function s(t){return o?o+t:n(t)}var o,r,a,l,c,d,h,u,f="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(p,function(t,i){return m.style[t+"TransitionProperty"]!==e?(f="-"+n(t)+"-",o=i,!1):void 0}),r=f+"transform",b[a=f+"transition-property"]=b[l=f+"transition-duration"]=b[c=f+"transition-timing-function"]=b[d=f+"animation-name"]=b[h=f+"animation-duration"]=b[u=f+"animation-timing-function"]="",t.fx={off:o===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:f,transitionEnd:s("TransitionEnd"),animationEnd:s("AnimationEnd")},t.fn.animate=function(e,i,n,s){return t.isPlainObject(i)&&(n=i.easing,s=i.complete,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),this.anim(e,i,n,s)},t.fn.anim=function(n,s,o,f){var p,g,m,_={},y="",x=this,w=t.fx.transitionEnd;if(s===e&&(s=.4),t.fx.off&&(s=0),"string"==typeof n)_[d]=n,_[h]=s+"s",_[u]=o||"linear",w=t.fx.animationEnd;else{g=[];for(p in n)v.test(p)?y+=p+"("+n[p]+") ":(_[p]=n[p],g.push(i(p)));y&&(_[r]=y,g.push(r)),s>0&&"object"==typeof n&&(_[a]=g.join(", "),_[l]=s+"s",_[c]=o||"linear")}return m=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(w,m)}t(this).css(b),f&&f.call(this)},s>0&&this.bind(w,m),this.size()&&this.get(0).clientLeft,this.css(_),0>=s&&setTimeout(function(){x.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t,e){function i(i,n,s,o,r){"function"!=typeof n||r||(r=n,n=e);var a={opacity:s};return o&&(a.scale=o,i.css(t.fx.cssPrefix+"transform-origin","0 0")),i.animate(a,n,null,r)}function n(e,n,s,o){return i(e,n,0,s,function(){r.call(t(this)),o&&o.call(this)})}var s=window.document,o=(s.documentElement,t.fn.show),r=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,n){return o.call(this),t===e?t=0:this.css("opacity",0),i(this,t,1,"1,1",n)},t.fn.hide=function(t,i){return t===e?r.call(this):n(this,t,"0,0",i)},t.fn.toggle=function(i,n){return i===e||"boolean"==typeof i?a.call(this,i):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](i,n)})},t.fn.fadeTo=function(t,e,n){return i(this,t,e,null,n)},t.fn.fadeIn=function(t,e){var i=this.css("opacity");return i>0?this.css("opacity",0):i=1,o.call(this).fadeTo(t,i,e)},t.fn.fadeOut=function(t,e){return n(this,t,null,e)},t.fn.fadeToggle=function(e,i){return this.each(function(){var n=t(this);n[0==n.css("opacity")||"none"==n.css("display")?"fadeIn":"fadeOut"](e,i)})}}(Zepto),function(t){var e,i=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(i.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){i=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,n){var l=e[a],c=l&&s[l];if(void 0===n)return c||i(e);if(c){if(n in c)return c[n];var d=r(n);if(d in c)return c[d]}return o.call(t(e),n)}function i(e,i,o){var l=e[a]||(e[a]=++t.uuid),c=s[l]||(s[l]=n(e));return void 0!==i&&(c[r(i)]=o),c}function n(e){var i={};return t.each(e.attributes,function(e,n){0==n.name.indexOf("data-")&&(i[r(n.name.replace("data-",""))]=t.zepto.deserializeValue(n.value))}),i}var s={},o=t.fn.data,r=t.camelCase,a=t.expando="Zepto"+ +new Date;t.fn.data=function(n,s){return void 0===s?t.isPlainObject(n)?this.each(function(e,s){t.each(n,function(t,e){i(s,t,e)})}):0==this.length?void 0:e(this[0],n):this.each(function(){i(this,n,s)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var i=this[a],n=i&&s[i];n&&t.each(e,function(){delete n[r(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function i(t,e){t=t.replace(/=#\]/g,'="#"]');var i,n,s=a.exec(t);if(s&&s[2]in r&&(i=r[s[2]],n=s[3],t=s[1],n)){var o=Number(n);n=isNaN(o)?n.replace(/^["']|["']$/g,""):o}return e(t,i,n)}var n=t.zepto,s=n.qsa,o=n.matches,r=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,i){return t===i?this:void 0},contains:function(e,i,n){return t(this).text().indexOf(n)>-1?this:void 0},has:function(t,e,i){return n.qsa(this,i).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),l=/^\s*>/,c="Zepto"+ +new Date;n.qsa=function(e,o){return i(o,function(i,r,a){try{var d;!i&&r?i="*":l.test(i)&&(d=t(e).addClass(c),i="."+c+" "+i);var h=s(e,i)}catch(u){throw console.error("error performing selector: %o",o),u}finally{d&&d.removeClass(c)}return r?n.uniq(t.map(h,function(t,e){return r.call(t,e,h,a)})):h})},n.matches=function(t,e){return i(e,function(e,i,n){return!(e&&!o(t,e)||i&&i.call(t,null,n)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var i=t.fn[e];t.fn[e]=function(){var t=i.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function i(t,e,i,n){var s=Math.abs(t-e),o=Math.abs(i-n);return s>=o?t-e>0?"Left":"Right":i-n>0?"Up":"Down"}function n(){c=null,d.last&&(d.el.trigger("longTap"),d={})}function s(){c&&clearTimeout(c),c=null}function o(){r&&clearTimeout(r),a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),r=a=l=c=null,d={}}var r,a,l,c,d={},h=750;t(document).ready(function(){var u,f;t(document.body).bind("touchstart",function(i){u=Date.now(),f=u-(d.last||u),d.el=t(e(i.touches[0].target)),r&&clearTimeout(r),d.x1=i.touches[0].pageX,d.y1=i.touches[0].pageY,f>0&&250>=f&&(d.isDoubleTap=!0),d.last=u,c=setTimeout(n,h)}).bind("touchmove",function(t){s(),d.x2=t.touches[0].pageX,d.y2=t.touches[0].pageY,Math.abs(d.x1-d.x2)>10&&t.preventDefault()}).bind("touchend",function(){s(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?l=setTimeout(function(){d.el.trigger("swipe"),d.el.trigger("swipe"+i(d.x1,d.x2,d.y1,d.y2)),d={}},0):"last"in d&&(a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,d.el.trigger(e),d.isDoubleTap?(d.el.trigger("doubleTap"),d={}):r=setTimeout(function(){r=null,d.el.trigger("singleTap"),d={}},250)},0))}).bind("touchcancel",o),t(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&function(t){var e,i;return e=function(t,e,i,n,s){var o,r;return t?(r=t[i](),o={width:["left","right"],height:["top","bottom"]},o[i].forEach(function(e){return r+=parseInt(t.css("padding-"+e),10),n&&(r+=parseInt(t.css("border-"+e+"-width"),10)),s?r+=parseInt(t.css("margin-"+e),10):void 0}),r):null},["width","height"].forEach(function(i){var n,s,o,r,a;return n=i.replace(/./,function(t){return t[0].toUpperCase()}),(s=t.fn)[r="inner"+n]||(s[r]=function(t){return e(this,n,i,!1,t)}),(o=t.fn)[a="outer"+n]||(o[a]=function(t){return e(this,n,i,!0,t)})}),(i=t.fn).detach||(i.detach=function(t){var e,i;return i=this,null!=t&&(i=i.filter(t)),e=i.clone(!0),i.remove(),e})}(Zepto);