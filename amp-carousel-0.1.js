(self.AMP=self.AMP||[]).push({n:"amp-carousel",v:"1496670637476",f:(function(AMP){var f;function l(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;Date.now();self.log=self.log||{user:null,dev:null};var m=self.log;function n(){if(m.dev)return m.dev;throw Error("failed to call initLogConstructor");};var p=null;function ba(a){a:{var b;b:{try{b=a.document.cookie;break b}catch(h){}b=void 0}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==decodeURIComponent(c.substring(0,d).trim())){a=decodeURIComponent(c.substring(d+1).trim());break a}}a=null}var e=a,g=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<g.length;b++)0!=g[b].length&&("-"==g[b][0]?a[g[b].substr(1)]=!1:a[g[b]]=!0);return a};function ca(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&q(b,"action")?r(b,"action"):null)return b}b=t(a);b=u(b);return r(b,"action")}function v(a,b){a=a.__AMP_TOP||a;return r(a,b)}function t(a){return a.nodeType?v((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function u(a){a=t(a);return a.isSingleDoc()?a.win:a}
function r(a,b){q(a,b);var c=w(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function x(a){var b=y(a);if(b)return b;var c,d=new Promise(function(a){c=a});w(a)["amp-analytics-instrumentation"]={obj:null,promise:d,resolve:c,context:null,ctor:null};return d}
function y(a){var b=w(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;r(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function w(a){var b=a.services;b||(b=a.services={});return b}function q(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};function z(a){return a.ampExtendedElements?!!a.ampExtendedElements["amp-analytics"]:!1}function da(a){var b=t(a),c=y(u(a));return c?c:Promise.resolve().then(function(){return z(b.win)?x(u(a)):b.whenBodyAvailable().then(function(){return z(b.win)?x(u(a)):null})})};function A(a){return v(a,"timer")};var B,C="Webkit webkit Moz moz ms O o".split(" ");function D(a,b){var c=void 0;B||(B=Object.create(null));var d=B[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<C.length;g++){var h=C[g]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(B[b]=d)}return d}function E(a,b){var c,d=D(a.style,"order");d&&(a.style[d]=c?b+c:b)}function ea(a){var b=D(a.style,"scrollSnapType");if(b)return a.style[b]};function F(a,b,c){da(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};function G(a,b,c,d){var e=new H(0,0,a,b,c,d,1,1);return e.solveYValueFromXValue.bind(e)}function H(a,b,c,d,e,g,h,k){this.x0=a;this.y0=b;this.x1=c;this.y1=d;this.x2=e;this.y2=g;this.x3=h;this.y3=k}f=H.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,g=0,h=0;8>h;h++){var g=this.getPointX(c),k=(this.getPointX(c+b)-g)/b;if(Math.abs(g-a)<b)return c;if(Math.abs(k)<b)break;else g<a?d=c:e=c,c-=(g-a)/k}for(h=0;Math.abs(g-a)>b&&8>h;h++)g<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),g=this.getPointX(c);return c};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var fa=G(.25,.1,.25,1),ga=G(.42,0,1,1),ha=G(0,0,.58,1),ia=G(.42,0,.58,1),ja={linear:function(a){return a},ease:fa,"ease-in":ga,"ease-out":ha,"ease-in-out":ia};function I(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return G(b[0],b[1],b[2],b[3])}return null}return ja[a]}return a};function ka(){}function J(a,b){this.v=a;(a=b)||(a=v(self,"vsync"));this.m=a;this.W=null;this.c=[]}function K(a,b,c,d){return(new J(a)).setCurve(d).add(0,b,1).start(c)}J.prototype.setCurve=function(a){a&&(this.W=I(a));return this};J.prototype.add=function(a,b,c,d){this.c.push({delay:a,func:b,duration:c,curve:I(d)});return this};
J.prototype.start=function(a){var b=new L(this.m,this.v,this.c,this.W,a);a=b;a.$=Date.now();a.J=!0;a.m.canAnimate(a.v)?a.ba(a.aa):(n().warn("Animation","cannot animate"),M(a,!1,0));return b};
function L(a,b,c,d,e){var g=this;this.m=a;this.v=b;this.c=[];for(b=0;b<c.length;b++){var h=c[b];this.c.push({delay:h.delay,func:h.func,duration:h.duration,curve:h.curve||d,started:!1,completed:!1})}this.ca=e;this.ja=this.ia=this.$=0;this.J=!1;this.aa={};this.Z=new Promise(function(a,b){g.ea=a;g.da=b});this.ba=this.m.createAnimTask(this.v,{mutate:this.fa.bind(this)})}L.prototype.then=function(a,b){return a||b?this.Z.then(a,b):this.Z};L.prototype.thenAlways=function(a){a=a||ka;return this.then(a,a)};
L.prototype.halt=function(a){M(this,!1,a||0)};function M(a,b,c){if(a.J){a.J=!1;if(0!=c){1<a.c.length&&a.c.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(var d=0;d<a.c.length;d++)a.c[d].func(1,!0);else for(d=a.c.length-1;0<=d;d--)a.c[d].func(0,!1)}catch(e){n().error("Animation","completion failed: "+e,e),b=!1}}b?a.ea():a.da()}}
L.prototype.fa=function(){if(this.J){for(var a=Date.now(),b=Math.min((a-this.$)/this.ca,1),c=0;c<this.c.length;c++){var d=this.c[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.c.length;c++)if(d=this.c[c],d.started&&!d.completed)a:{var e,g;if(0<d.duration){if(g=e=Math.min((b-d.delay)/d.duration,1),d.curve&&1!=g)try{g=d.curve(e)}catch(h){n().error("Animation","step curve failed: "+h,h);M(this,!1,0);break a}}else g=e=1;1==e&&(d.completed=!0);try{d.func(g,d.completed)}catch(h){n().error("Animation",
"step mutate failed: "+h,h),M(this,!1,0)}}1==b?M(this,!0,0):this.m.canAnimate(this.v)?this.ba(this.aa):(n().warn("Animation","cancel animation"),M(this,!1,0))}};function N(a,b){return function(c){return a+(b-a)*c}};function O(a){AMP.BaseElement.call(this,a);this.g=this.j=null;this.T=!1}l(O,AMP.BaseElement);f=O.prototype;f.buildCallback=function(){(this.T=this.element.hasAttribute("controls"))&&this.element.classList.add("i-amphtml-carousel-has-controls");this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};f.viewportCallback=function(a){this.onViewportCallback(a);a&&this.hintControls()};f.onViewportCallback=function(){};
f.buildButtons=function(){var a=this;this.j=this.element.ownerDocument.createElement("div");this.j.classList.add("amp-carousel-button");this.j.classList.add("amp-carousel-button-prev");this.j.setAttribute("role","button");this.element.hasAttribute("data-previous-button-aria-label")?this.j.setAttribute("aria-label",this.element.getAttribute("data-previous-button-aria-label")):this.j.setAttribute("aria-label","Previous item in carousel");this.j.setAttribute("tabindex",0);this.j.onkeydown=function(b){13!=
b.keyCode&&32!=b.keyCode||b.defaultPrevented||(b.preventDefault(),a.interactionPrev())};this.j.onclick=function(){a.interactionPrev()};this.element.appendChild(this.j);this.g=this.element.ownerDocument.createElement("div");this.g.classList.add("amp-carousel-button");this.g.classList.add("amp-carousel-button-next");this.g.setAttribute("role","button");this.element.hasAttribute("data-next-button-aria-label")?this.g.setAttribute("aria-label",this.element.getAttribute("data-next-button-aria-label")):
this.g.setAttribute("aria-label","Previous item in carousel");this.g.setAttribute("tabindex",0);this.g.onkeydown=function(b){13!=b.keyCode&&32!=b.keyCode||b.defaultPrevented||(b.preventDefault(),a.interactionNext())};this.g.onclick=function(){a.interactionNext()};this.element.appendChild(this.g)};f.prerenderAllowed=function(){return!0};f.isRelayoutNeeded=function(){return!0};f.buildCarousel=function(){};f.setupGestures=function(){};f.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};
f.goCallback=function(){};f.setControlsState=function(){this.j.classList.toggle("amp-disabled",!this.hasPrev());this.j.setAttribute("aria-disabled",!this.hasPrev());this.g.classList.toggle("amp-disabled",!this.hasNext());this.g.setAttribute("aria-disabled",!this.hasNext())};
f.hintControls=function(){var a=this;!this.T&&this.isInViewport()&&this.getVsync().mutate(function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");A(a.win).delay(function(){a.deferMutate(function(){return a.element.classList.remove("i-amphtml-carousel-button-start-hint")})},4E3)})};f.unlayoutCallback=function(){return!0};f.hasPrev=function(){};f.hasNext=function(){};f.interactionNext=function(){this.g.classList.contains("amp-disabled")||this.go(1,!0,!1)};
f.interactionPrev=function(){this.j.classList.contains("amp-disabled")||this.go(-1,!0,!1)};function P(a){O.call(this,a);this.D=null;this.X=this.G=!1;this.V=5E3;this.R=this.shouldLoop=!1}l(P,O);f=P.prototype;f.buildCarousel=function(){this.G=this.element.hasAttribute("loop");this.X=this.element.hasAttribute("autoplay");this.buildSlides();this.shouldLoop=this.G&&this.isLoopingEligible();if(this.R=this.X&&this.isLoopingEligible()){var a=Number(this.element.getAttribute("delay"));0<a&&(this.V=Math.max(1E3,a));this.G||(this.element.setAttribute("loop",""),this.shouldLoop=this.G=!0)}};
f.buildSlides=function(){};f.onViewportCallback=function(a){this.updateViewportState(a);a?Q(this):this.clearAutoplay()};f.goCallback=function(a,b,c){this.moveSlide(a,b);c?Q(this):this.clearAutoplay()};f.moveSlide=function(){};f.updateViewportState=function(){};f.isLoopingEligible=function(){return!1};function Q(a){a.R&&(a.clearAutoplay(),a.D=A(a.win).delay(a.go.bind(a,1,!0,!0),a.V))}f.clearAutoplay=function(){null!==this.D&&(A(this.win).cancel(this.D),this.D=null)};function R(a){P.call(this,a);this.m=null;this.s=!1;this.f=[];this.h=0;this.b=null;this.u=[];this.B=!1;this.C=this.A=null;this.M=!1;this.w=0;this.a=null;this.I=this.o=this.Y=0;this.L=[];var b=v(this.win,"platform");this.H=b.isIos();this.U=null;var c;a=this.win;if(!p){p=Object.create(null);if(a.AMP_CONFIG)for(c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(p[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&
(c=a.AMP_CONFIG["allow-doc-opt-in"],d=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var d=d.getAttribute("content").split(","),e=0;e<d.length;e++)-1!=c.indexOf(d[e])&&(p[d[e]]=!0);Object.assign(p,ba(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];d=a.location.originalHash||a.location.hash;a=Object.create(null);if(d)for(var g;g=aa.exec(d);)e=decodeURIComponent(g[1]).trim(),
g=g[2]?decodeURIComponent(g[2]).trim():"",a[e]=g;for(d=0;d<c.length;d++)e=a["e-"+c[d]],"1"==e&&(p[c[d]]=!0),"0"==e&&(p[c[d]]=!1)}}c=p;if(c=!!c["slidescroll-disable-css-snap"])c=v(this.win,"platform").getIosVersionString(),c=4>c.length?!1:0==c.lastIndexOf("10.3",0);this.S=c}l(R,P);f=R.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
f.buildSlides=function(){var a=this;this.m=this.getVsync();this.U=ca(this.element);this.s=void 0!=ea(this.element);this.S&&(this.s=!1);this.element.classList.add("i-amphtml-slidescroll");this.f=this.getRealChildren();this.h=this.f.length;this.b=this.win.document.createElement("div");this.b.classList.add("i-amphtml-slides-container");this.b.setAttribute("aria-live","polite");this.S&&this.b.classList.add("i-amphtml-slidescroll-no-snap");if(this.s){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");
this.b.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.b.appendChild(b)}this.element.appendChild(this.b);this.f.forEach(function(b,d){a.L.push(b.getAttribute("data-slide-id")||d.toString());a.setAsOwner(b);b.classList.add("amp-carousel-slide");var c=a.win.document.createElement("div");c.classList.add("i-amphtml-slide-item");a.b.appendChild(c);d=c;do{if(Node.prototype.getRootNode)d=d.getRootNode()||d;else for(;d.parentNode;d=d.parentNode);
if(d.host)d=d.host;else break}while(1);c.appendChild(b);a.u.push(c)});this.K();this.b.addEventListener("scroll",this.O.bind(this));this.b.addEventListener("touchmove",this.ha.bind(this));this.b.addEventListener("touchend",this.ga.bind(this));this.registerAction("goToSlide",function(b){var c=b.args;c&&S(a,c.index)})};f.isLoopingEligible=function(){return 2<this.h};f.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&S(this,b)};
f.ha=function(){this.clearAutoplay();this.s&&(this.M=!0,this.C&&A(this.win).cancel(this.C))};f.ga=function(){var a=this;if(this.M){this.A&&A(this.win).cancel(this.A);var b=this.S?45:120;this.C=A(this.win).delay(function(){var b=a.b.scrollLeft;a.B||(T(a,b),a.C=null)},b)}this.M=!1};f.onLayoutMeasure=function(){this.o=this.getLayoutWidth();null!==this.a&&(this.b.scrollLeft=la(this,this.a));this.I=this.b.scrollLeft};f.layoutCallback=function(){null===this.a&&U(this,this.Y);return Promise.resolve()};
f.updateViewportState=function(a){null!==this.a&&this.updateInViewport(this.f[this.a],a)};f.hasPrev=function(){return this.shouldLoop||0<this.a};f.hasNext=function(){return this.shouldLoop||this.a<this.f.length-1};f.moveSlide=function(a,b){if(null!==this.a){var c=this.hasNext(),d=this.hasPrev();if(1==a&&c||-1==a&&d){var e=this.a+a;-1==e?e=this.h-1:e>=this.h&&(e=0);b?V(this,1!=a||d?this.o:0,a):ma(this,e)}}};
f.O=function(){var a=this;this.A&&A(this.win).cancel(this.A);var b=this.b.scrollLeft;this.H||na(this,b);if(!this.C){var c=this.s?35:this.H?45:100;this.A=A(this.win).delay(function(){a.B||(a.s?T(a,b):V(a,b))},c)}this.I=b};function na(a,b){var c=a.b.scrollWidth;-1==a.w&&b>=a.I?V(a,b).then(function(){a.w=0}):1==a.w&&b<=a.I?V(a,b).then(function(){a.w=0}):a.w=0>b?-1:b+a.o>c?1:0}
function V(a,b,c){a.B=!0;var d,e=oa(a,b)-a.a,g=a.hasPrev();0!=e||1!=c&&-1!=c||(e=c);if(0==e)d=g?a.o:0;else if(1==e||-1!=e&&e==-1*(a.h-1))d=g?2*a.o:a.o;else if(-1==e||e==a.h-1)d=0;return pa(a,b,d).then(function(){T(a,d)})}function oa(a,b){var c=Math.round(b/a.o),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.a+d;return b=a.shouldLoop?0>b?a.h-1:b>=a.h?0:b:0>b?0:b>=a.h?a.h-1:b}
function T(a,b){a.B=!0;var c=oa(a,b);a.m.mutate(function(){a.H&&a.b.classList.add("i-amphtml-no-scroll");ma(a,c);a.m.mutate(function(){a.H&&a.b.classList.remove("i-amphtml-no-scroll");a.B=!1})})}function S(a,b){var c=parseInt(b,10);if(isFinite(c)&&0<=c&&c<a.h)null===a.a?a.Y=c:U(a,c);else{if(m.user)a=m.user;else throw Error("failed to call initLogConstructor");a.error("AMP-CAROUSEL","Invalid [slide] value: %s",b)}}
function U(a,b){var c=a.h;if(!(0>b||b>=c||a.a==b)){var d=0<=b-1?b-1:a.shouldLoop?c-1:null,e=b+1<c?b+1:a.shouldLoop?0:null,g=[];null!=d&&g.push(d);g.push(b);null!=e&&g.push(e);null!==a.a&&a.updateInViewport(a.f[a.a],!1);var h=a.f[b];if(void 0===h){var k=Error("Attempting to access a non-existant slide");k.args={index:b,noOfSlides:c};n().error("AMP-CAROUSEL",k)}else a.updateInViewport(h,!0),g.forEach(function(c,d){a.shouldLoop&&E(a.u[c],d+1);a.u[c].classList.add("i-amphtml-slide-item-show");c==b?(a.scheduleLayout(a.f[c]),
a.scheduleResume(a.f[c]),a.f[c].setAttribute("aria-hidden","false")):(a.schedulePreload(a.f[c]),a.f[c].setAttribute("aria-hidden","true"))}),a.b.scrollLeft=la(a,b),qa(a,b),a.a=b,ra(a,g),a.setControlsState()}}
function ma(a,b){U(a,b);var c;var d=a.win;c={index:b};"function"==typeof d.CustomEvent?c=new d.CustomEvent("slidescroll.slideChange",{detail:c}):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent("slidescroll.slideChange",!1,!1,c),c=d);a.element.dispatchCustomEvent("slideChange",{index:b});a.U.trigger(a.element,"slideChange",c)}function la(a,b){var c=a.o;a.shouldLoop||0!=b||(c=0);return c}
function ra(a,b){for(var c=a.h,d=0;d<c;d++)a.u[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&E(a.u[d],""),a.u[d].classList.remove("i-amphtml-slide-item-show"),a.f[d].removeAttribute("aria-hidden")),a.a!=d&&a.schedulePause(a.f[d]))}function pa(a,b,c){if(b==c)return Promise.resolve();var d=N(b,c);c=G(.4,0,.2,1);var e=a.b;return K(e,function(b){a.b.scrollLeft=d(b)},80,c).thenAlways()}f.K=function(){this.element.addEventListener("touchmove",function(a){a.stopPropagation()})};
function qa(a,b){var c=b-a.a;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.a&&(c=1));var d=null===a.a?"null":a.L[a.a],e={fromSlide:d,toSlide:a.L[b]};F(a.element,"amp-carousel-change",e);1==c?F(a.element,"amp-carousel-next",e):F(a.element,"amp-carousel-prev",e)}};function W(a){O.call(this,a);this.N=this.i=0;this.P=this.l=this.F=null}l(W,O);f=W.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
f.buildCarousel=function(){var a=this;this.F=this.getRealChildren();this.l=this.element.ownerDocument.createElement("div");this.l.classList.add("i-amphtml-scrollable-carousel-container");this.element.appendChild(this.l);this.F.forEach(function(b){a.setAsOwner(b);b.classList.add("amp-carousel-slide");a.l.appendChild(b)});this.K();this.l.addEventListener("scroll",this.O.bind(this))};f.layoutCallback=function(){sa(this,this.i);ta(this,this.i,1);this.setControlsState();return Promise.resolve()};
f.onViewportCallback=function(){ua(this,this.i,this.i)};f.goCallback=function(a,b){var c=this,d=va(this,this.i,a),e=this.i;if(d!=e)if(b){var g=N(e,d);K(this.element,function(a){c.l.scrollLeft=g(a)},200,"ease-in-out").thenAlways(function(){X(c,d)})}else X(this,d),this.l.scrollLeft=d};f.O=function(){var a=this.l.scrollLeft;this.i=a;null===this.P&&wa(this,a)};function wa(a,b){a.P=A(a.win).delay(function(){30>Math.abs(b-a.i)?(a.P=null,X(a,a.i)):wa(a,a.i)},100)}
function X(a,b){ua(a,b,a.N);sa(a,b);ta(a,b,Math.sign(b-a.N));a.N=b;a.i=b;a.setControlsState()}function va(a,b,c){var d=a.element.offsetWidth,e=a.l.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function Y(a,b,c){for(var d=a.getLayoutWidth(),e=0;e<a.F.length;e++){var g=a.F[e];g.offsetLeft+g.offsetWidth>=b&&g.offsetLeft<=b+d&&c(g)}}function sa(a,b){Y(a,b,function(b){a.scheduleLayout(b)})}function ta(a,b,c){var d=va(a,b,c);d!=b&&Y(a,d,function(b){a.schedulePreload(b)})}
function ua(a,b,c){var d=[];Y(a,b,function(b){d.push(b);a.updateInViewport(b,!0)});c!=b&&Y(a,c,function(b){d.includes(b)||(a.updateInViewport(b,!1),a.schedulePause(b))})}f.hasPrev=function(){return 0!=this.i};f.hasNext=function(){var a=this.getLayoutWidth(),b=Math.max(this.l.scrollWidth-a,0);return this.i!=b};f.K=function(){this.element.addEventListener("touchmove",function(a){a.stopPropagation()})};function Z(a){AMP.BaseElement.apply(this,arguments)}l(Z,AMP.BaseElement);Z.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new R(this.element):new W(this.element)};AMP.registerElement("amp-carousel",Z,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;-webkit-transform:translateY(-50%);transform:translateY(-50%);visibility:hidden;z-index:10}.amp-mode-mouse .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff' viewBox='0 0 18 18'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff' viewBox='0 0 18 18'%3E%3Cpath d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){-webkit-animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both;animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){-webkit-animation:none;animation:none}@-webkit-keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{-webkit-animation:none;animation:none;opacity:0;visibility:hidden}.i-amphtml-slides-container{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;-webkit-scroll-snap-type:mandatory!important;scroll-snap-type:mandatory!important;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;display:none!important;-webkit-box-flex:0!important;-webkit-flex:0 0 100%!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;-webkit-scroll-snap-coordinate:0 0!important;scroll-snap-coordinate:0 0!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-webkit-box-flex:0!important;-webkit-flex:0 0 1px!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;-webkit-scroll-snap-coordinate:0 0!important;scroll-snap-coordinate:0 0!important;width:1px!important}.i-amphtml-carousel-start-marker{-webkit-box-ordinal-group:0!important;-webkit-order:-1!important;-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-webkit-box-ordinal-group:100000001!important;-webkit-order:100000000!important;-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{-webkit-scroll-snap-type:none!important;scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{-webkit-scroll-snap-coordinate:none!important;scroll-snap-coordinate:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.i-amphtml-scrollable-carousel-container .amp-carousel-slide{display:inline-block!important;margin-left:8px}.i-amphtml-scrollable-carousel-container .amp-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/");
})});
//# sourceMappingURL=amp-carousel-0.1.js.map
