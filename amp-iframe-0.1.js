(self.AMP=self.AMP||[]).push({n:"amp-iframe",v:"1496670637476",f:(function(AMP){var k;function n(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function t(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};function u(a){if(!a)return[];for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return b};Date.now();self.log=self.log||{user:null,dev:null};var w=self.log;function x(){if(w.user)return w.user;throw Error("failed to call initLogConstructor");}function y(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");};function z(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};var B=(self.AMP_CONFIG||{}).thirdPartyFrameHost||"ampproject.net";var C,D;
function E(a){var b;C||(C=self.document.createElement("a"),D=self.UrlCache||(self.UrlCache=Object.create(null)));var c=D[a];if(c)return c;var d=C;d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=d.origin&&
"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;var f=e,g=f;return b?g:D[a]=g}function F(a){"string"==typeof a&&(a=E(a));return"https:"==a.protocol||"localhost"==a.hostname||t(a.hostname,".localhost")};function G(a){a=a.__AMP_TOP||a;var b=a.services;b||(b=a.services={});a=b.timer;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};var H,I="Webkit webkit Moz moz ms O o".split(" ");function J(a,b){var c,d=a.style;H||(H=z());var e=H.zIndex;if(!e){e="zIndex";if(void 0===d.zIndex){var f="Z"+"zIndex".slice(1);a:{for(var g=0;g<I.length;g++){var h=I[g]+f;if(void 0!==d[h]){f=h;break a}}f=""}void 0!==d[f]&&(e=f)}H.zIndex=e}(d=e)&&(a.style[d]=c?b+c:b)};var K={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0};function L(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c}}function aa(a){for(var b=-Infinity,c=Infinity,d=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),c=Math.min(c,g.left+g.width),d=Math.max(d,g.top),e=Math.min(e,g.top+g.height),c<b||e<d))return null}return Infinity==c?null:L(b,d,c-b,e-d)}function M(a,b,c){return 0==b&&0==c||0==a.width&&0==a.height?a:L(a.left+b,a.top+c,a.width,a.height)};function ba(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};function ca(a){if(!N(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return y().error("MESSAGING","Failed to parse message: "+a,c),null}}function N(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function da(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d];b(e,d,a)||(c.push(e),a.splice(d,1),d--)}};function O(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function ea(a,b,c){var d=E(b.src).origin,e=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=O(a,e,!0);for(var f,e=0;e<a.length;e++){var g=a[e];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:d,events:Object.create(null)},a.push(f));return f.events}
function fa(a){for(var b={sentinel:"unlisten"},c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function ga(a){if(!a.listeningFors){var b=function(b){if(b.data){var d=ha(b.data);if(d&&d.sentinel){var c;c=d.sentinel;var f=b.origin,g=b.source,h=O(a,c);if(h){for(var p,l=0;l<h.length;l++){var r=h[l],q=r.frame.contentWindow;if(q)if("amp"===c){if(r.origin===f&&q==g){p=r;break}}else{var m;if(!(m=g==q))b:{for(m=g;m&&m!=m.parent;m=m.parent)if(m==q){m=!0;break b}m=!1}if(m){p=r;break}}else setTimeout(fa,0,h)}c=p?p.events:null}else c=h;var A=c;if(A){var v=A[d.type];if(v)for(v=v.slice(),c=0;c<v.length;c++)(0,v[c])(d,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function P(a,b,c,d,e){function f(b,d,f){if(e||d==a.contentWindow)"unlisten"==b.sentinel?p():c(b,d,f)}var g=a.ownerDocument.defaultView;ga(g);d=ea(g,a,d);var h=d[b]||(d[b]=[]),p;h.push(f);return p=function(){if(f){var a=h.indexOf(f);-1<a&&h.splice(a,1);c=h=f=null}}}
function ia(a,b,c,d,e){if(a.contentWindow){d.type=c;d.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp";var f=d;e&&(f="amp-"+JSON.stringify(d));for(a=0;a<b.length;a++)c=b[a],c.win.postMessage(f,c.origin)}}function ha(a){"string"==typeof a&&(a="{"==a.charAt(0)?ba(a,function(a){y().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:N(a)?ca(a):null);return a}
function Q(a,b,c,d){var e=this;this.a=a;this.u=c;this.f=[];this.M=P(this.a,b,function(a,b,c){e.f.some(function(a){return a.win==b})||e.f.push({win:b,origin:c});d(a,b,c)},this.u,this.u)}Q.prototype.send=function(a,b){da(this.f,function(a){return!!a.win.parent});ia(this.a,this.f,a,b,this.u)};Q.prototype.destroy=function(){this.M();this.f.length=0};var ja=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],ka=Date.now();function R(a,b,c){var d=this;this.m=a;this.g=null;this.A=this.F=!1;this.j=null;this.l=a.getViewport();this.G=new Q(b,"send-intersections",c||!1,function(){la(d)});this.g=new S(function(a){for(var b=0;b<a.length;b++)delete a[b].target;d.G.send("intersection",{changes:a})},{threshold:ja});this.g.tick(this.l.getRect());this.fire=function(){d.F&&d.A&&d.g.tick(d.l.getRect())}}
function la(a){a.F=!0;a.g.observe(a.m.element);a.m.getVsync().measure(function(){a.A=a.m.isInViewport();a.fire()});var b=a.l.onScroll(a.fire),c=a.l.onChanged(a.fire);a.j=function(){b();c()}}R.prototype.onViewportCallback=function(a){this.A=a};R.prototype.destroy=function(){this.F=!1;this.g=null;this.j&&(this.j(),this.j=null);this.G.destroy();this.G=null};function S(a,b){this.I=a;var c=b&&b.threshold||[0];this.L=c.sort();this.C=null;this.K=void 0;this.b=[]}
S.prototype.disconnect=function(){this.b.length=0};S.prototype.observe=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b].element===a){y().warn("INTERSECTION-OBSERVER","should observe same element once");return}var c={element:a,currentThresholdSlot:0};this.C&&(a=T(this,c,this.C,this.K))&&this.I([a]);this.b.push(c)};S.prototype.unobserve=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b].element===a){this.b.splice(b,1);return}y().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};
S.prototype.tick=function(a,b){b&&(a=M(a,-b.left,-b.top),b=M(b,-b.left,-b.top));this.C=a;this.K=b;for(var c=[],d=0;d<this.b.length;d++){var e=T(this,this.b[d],a,b);e&&c.push(e)}c.length&&this.I(c)};
function T(a,b,c,d){var e=b.element,f,g=null;f=e.getLayoutBox();var h=e.getOwner(),g=h&&h.getLayoutBox(),p=aa(f,g,c,d)||L(0,0,0,0),h=p,l=f,h=h.width*h.height/(l.width*l.height);a=a.L;var l=0,r=a.length;if(0==h)a=0;else{for(var q=(l+r)/2|0;l<q;)h<a[q]?r=q:l=q,q=(l+r)/2|0;a=r}var m=a;if(m==b.currentThresholdSlot)return null;b.currentThresholdSlot=m;c=d?null:c;d=p;a=f;if(l=c)d=M(d,-c.left,-c.top),a=M(a,-c.left,-c.top),l=M(l,-c.left,-c.top);var A={time:"undefined"!==typeof performance&&performance.now?
performance.now():Date.now()-ka,rootBounds:l&&U(l),boundingClientRect:U(a),intersectionRect:U(d),intersectionRatio:h,target:e};return A}function U(a){return{left:a.left,top:a.top,width:a.width,height:a.height,bottom:a.bottom,right:a.right,x:a.left,y:a.top}};var ma="allowfullscreen allowpaymentrequest allowtransparency frameborder referrerpolicy scrolling".split(" "),na=0,V=0;function W(a){AMP.BaseElement.apply(this,arguments)}n(W,AMP.BaseElement);k=W.prototype;k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
k.assertSource=function(a,b,c){var d=E(a);x().assert(F(d)||"data:"==d.protocol,"Invalid <amp-iframe> src. Must start with https://. Found %s",this.element);var e=E(b);x().assert(!(" "+c+" ").match(/\s+allow-same-origin\s+/i)||d.origin!=e.origin&&"data:"!=d.protocol,"Origin of <amp-iframe> must not be equal to container %sif allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",this.element);x().assert(!(t(d.hostname,"."+B)||
t(d.hostname,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",a);return a};
k.assertPosition=function(){var a=this.element.getLayoutBox(),b=Math.min(600,.75*this.getViewport().getSize().height);x().assert(a.top>=b,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/master/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",this.element,
a.top,b)};function X(a){if(a){var b=E(a);"data:"==b.protocol||b.hash&&"#"!=b.hash||(b=a.indexOf("#"),a=(-1==b?a:a.substring(0,b))+"#amp=1");return a}}
k.firstAttachedCallback=function(){this.i=this.element.getAttribute("sandbox");var a;if(!(a=X(this.element.getAttribute("src")))){a=this.element.getAttribute("srcdoc");var b=this.i;if(a){x().assert(!(" "+b+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element);if("undefined"!==typeof TextEncoder)a=(new TextEncoder("utf-8")).encode(a);else{a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);
b[c]=d}a=b}a="data:text/html;charset=utf-8;base64,"+btoa(String.fromCharCode.apply(String,u(a)))}else a=void 0}var e=a;this.iframeSrc=this.assertSource(e,window.location.href,this.i);a=this.element;"no"!=a.getAttribute("scrolling")&&(b=a.ownerDocument.createElement("i-amphtml-scroll-container"),a.appendChild(b),a=b);this.o=a};k.preconnectCallback=function(a){this.iframeSrc&&this.preconnect.url(this.iframeSrc,a)};
k.buildCallback=function(){this.D=this.getPlaceholder();this.w=!!this.D;this.J=this.h=this.v=!1;this.a=this.s=this.N=null;(this.B=this.element.hasAttribute("resizable"))&&this.element.setAttribute("scrolling","no");this.c=null;this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0")};
k.onLayoutMeasure=function(){Y(this);var a;a:{var b=this.element.getLayoutBox();a=b.height;for(var b=b.width,c=0;c<Z.length;c++){var d=Z[c][0],e=Z[c][1];if(!(e>a||d>b)&&20>=a-e&&20>=b-d){a=!0;break a}}a=!1}this.v=a;a=this.element.getLayoutBox();this.h=10<a.width&&10<a.height?!1:!0;if(a=this.v){a=this.win;b=!1;c=0;d=this.element;do K[d.tagName]?(c++,b=!1):(e=(a.getComputedStyle(d)||z()).position,"fixed"!=e&&"sticky"!=e||(b=!0)),d=d.parentElement;while(d&&"BODY"!=d.tagName);a=!(!b&&1>=c)}this.J=a;this.c&&
this.c.fire()};function Y(a){if(a.a){var b=a.getViewport().getLayoutRect(a.a),c=a.getLayoutBox();a.s=M(b,-c.left,-c.top)}}k.getIntersectionElementLayoutBox=function(){if(!this.a)return AMP.BaseElement.prototype.getIntersectionElementLayoutBox.call(this);var a=this.getLayoutBox();this.s||Y(this);return M(this.s,a.left,a.top)};
k.layoutCallback=function(){var a=this;x().assert(!this.J,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead.");this.w||this.assertPosition();this.B&&x().assert(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element);if(!this.iframeSrc)return Promise.resolve();if(this.h&&(V++,1<V))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new"),
Promise.resolve();var b=this.element.ownerDocument.createElement("iframe");this.a=b;this.applyFillContent(b);b.name="amp_iframe"+na++;this.w&&J(b,-1);this.propagateAttributes(ma,b);oa(b,this.i);b.src=this.iframeSrc;this.h||(this.c=new R(this,b));b.onload=function(){b.readyState="complete";a.H();a.h&&(a.iframeSrc=null,G(a.win).promise(5E3).then(function(){b.parentElement&&b.parentElement.removeChild(b);a.element.setAttribute("amp-removed","");a.a=null}))};P(b,"embed-size",function(b){pa(a,b.height,
b.width)});this.w&&P(b,"embed-ready",this.H.bind(this));this.o.appendChild(b);return this.loadPromise(b).then(function(){a.o!=a.element&&G(a.win).delay(function(){a.deferMutate(function(){a.o.classList.add("amp-active")})},1E3)})};k.unlayoutOnPause=function(){return!0};k.unlayoutCallback=function(){if(this.a){var a=this.a;a.parentElement&&a.parentElement.removeChild(a);this.D&&this.togglePlaceholder(!0);this.a=null;this.c&&(this.c.destroy(),this.c=null)}return!0};k.viewportCallback=function(a){if(this.c)this.c.onViewportCallback(a)};
k.getPriority=function(){return this.v?2:this.h?1:AMP.BaseElement.prototype.getPriority.call(this)};k.mutatedAttributesCallback=function(a){var b=a.src;void 0!==b&&(this.iframeSrc=X(b),this.a&&(this.a.src=this.assertSource(this.iframeSrc,window.location.href,this.i)))};k.H=function(){var a=this;this.D&&this.getVsync().mutate(function(){a.a&&(J(a.a,0),a.togglePlaceholder(!1))})};k.firstLayoutCompleted=function(){};
function pa(a,b,c){if(a.B)if(100>b)x().error("amp-iframe","Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",a.element);else{var d,e;b=parseInt(b,10);isNaN(b)||(d=Math.max(b+(a.element.offsetHeight-a.a.offsetHeight),b));c=parseInt(c,10);isNaN(c)||(e=Math.max(c+(a.element.offsetWidth-a.a.offsetWidth),c));void 0!==d||void 0!==e?a.attemptChangeSize(d,e).then(function(){void 0!==d&&a.element.setAttribute("height",
d);void 0!==e&&a.element.setAttribute("width",e)},function(){}):x().error("amp-iframe","Ignoring embed-size request becauseno width or height value is provided",a.element)}else x().error("amp-iframe","Ignoring embed-size request because this iframe is not resizable",a.element)}function oa(a,b){var c=b||"";a.setAttribute("sandbox",c)}var Z=[[300,250],[320,50],[300,50],[320,100]];AMP.registerElement("amp-iframe",W);
})});
//# sourceMappingURL=amp-iframe-0.1.js.map