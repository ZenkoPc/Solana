var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ht(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ct={exports:{}};(function(t,e){(function(r,o){t.exports=o()})(bt,function(){return function(r){function o(a){if(i[a])return i[a].exports;var m=i[a]={exports:{},id:a,loaded:!1};return r[a].call(m.exports,m,m.exports,o),m.loaded=!0,m.exports}var i={};return o.m=r,o.c=i,o.p="dist/",o(0)}([function(r,o,i){function a(f){return f&&f.__esModule?f:{default:f}}var m=Object.assign||function(f){for(var T=1;T<arguments.length;T++){var L=arguments[T];for(var C in L)Object.prototype.hasOwnProperty.call(L,C)&&(f[C]=L[C])}return f},h=i(1),x=(a(h),i(6)),u=a(x),s=i(7),c=a(s),p=i(8),b=a(p),d=i(9),g=a(d),S=i(10),X=a(S),U=i(11),V=a(U),G=i(14),K=a(G),j=[],B=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_=function(){var f=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(f&&(B=!0),B)return j=(0,V.default)(j,w),(0,X.default)(j,w.once),j},N=function(){j=(0,K.default)(),_()},l=function(){j.forEach(function(f,T){f.node.removeAttribute("data-aos"),f.node.removeAttribute("data-aos-easing"),f.node.removeAttribute("data-aos-duration"),f.node.removeAttribute("data-aos-delay")})},n=function(f){return f===!0||f==="mobile"&&g.default.mobile()||f==="phone"&&g.default.phone()||f==="tablet"&&g.default.tablet()||typeof f=="function"&&f()===!0},y=function(f){w=m(w,f),j=(0,K.default)();var T=document.all&&!window.atob;return n(w.disable)||T?l():(w.disableMutationObserver||b.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?_(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){_(!0)}):document.addEventListener(w.startEvent,function(){_(!0)}),window.addEventListener("resize",(0,c.default)(_,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(_,w.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,X.default)(j,w.once)},w.throttleDelay)),w.disableMutationObserver||b.default.ready("[data-aos]",N),j)};r.exports={init:y,refresh:_,refreshHard:N}},function(r,o){},,,,,function(r,o){(function(i){function a(n,y,f){function T(v){var O=P,F=z;return P=z=void 0,D=v,A=n.apply(F,O)}function L(v){return D=v,E=setTimeout(W,y),R?T(v):A}function C(v){var O=v-M,F=v-D,ot=y-O;return $?N(ot,H-F):ot}function Y(v){var O=v-M,F=v-D;return M===void 0||O>=y||O<0||$&&F>=H}function W(){var v=l();return Y(v)?Z(v):void(E=setTimeout(W,C(v)))}function Z(v){return E=void 0,k&&P?T(v):(P=z=void 0,A)}function et(){E!==void 0&&clearTimeout(E),D=0,P=M=z=E=void 0}function J(){return E===void 0?A:Z(l())}function q(){var v=l(),O=Y(v);if(P=arguments,z=this,M=v,O){if(E===void 0)return L(M);if($)return E=setTimeout(W,y),T(M)}return E===void 0&&(E=setTimeout(W,y)),A}var P,z,H,A,E,M,D=0,R=!1,$=!1,k=!0;if(typeof n!="function")throw new TypeError(p);return y=s(y)||0,h(f)&&(R=!!f.leading,$="maxWait"in f,H=$?_(s(f.maxWait)||0,y):H,k="trailing"in f?!!f.trailing:k),q.cancel=et,q.flush=J,q}function m(n,y,f){var T=!0,L=!0;if(typeof n!="function")throw new TypeError(p);return h(f)&&(T="leading"in f?!!f.leading:T,L="trailing"in f?!!f.trailing:L),a(n,y,{leading:T,maxWait:y,trailing:L})}function h(n){var y=typeof n>"u"?"undefined":c(n);return!!n&&(y=="object"||y=="function")}function x(n){return!!n&&(typeof n>"u"?"undefined":c(n))=="object"}function u(n){return(typeof n>"u"?"undefined":c(n))=="symbol"||x(n)&&w.call(n)==d}function s(n){if(typeof n=="number")return n;if(u(n))return b;if(h(n)){var y=typeof n.valueOf=="function"?n.valueOf():n;n=h(y)?y+"":y}if(typeof n!="string")return n===0?n:+n;n=n.replace(g,"");var f=X.test(n);return f||U.test(n)?V(n.slice(2),f?2:8):S.test(n)?b:+n}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p="Expected a function",b=NaN,d="[object Symbol]",g=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,U=/^0o[0-7]+$/i,V=parseInt,G=(typeof i>"u"?"undefined":c(i))=="object"&&i&&i.Object===Object&&i,K=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,j=G||K||Function("return this")(),B=Object.prototype,w=B.toString,_=Math.max,N=Math.min,l=function(){return j.Date.now()};r.exports=m}).call(o,function(){return this}())},function(r,o){(function(i){function a(l,n,y){function f(k){var v=q,O=P;return q=P=void 0,M=k,H=l.apply(O,v)}function T(k){return M=k,A=setTimeout(Y,n),D?f(k):H}function L(k){var v=k-E,O=k-M,F=n-v;return R?_(F,z-O):F}function C(k){var v=k-E,O=k-M;return E===void 0||v>=n||v<0||R&&O>=z}function Y(){var k=N();return C(k)?W(k):void(A=setTimeout(Y,L(k)))}function W(k){return A=void 0,$&&q?f(k):(q=P=void 0,H)}function Z(){A!==void 0&&clearTimeout(A),M=0,q=E=P=A=void 0}function et(){return A===void 0?H:W(N())}function J(){var k=N(),v=C(k);if(q=arguments,P=this,E=k,v){if(A===void 0)return T(E);if(R)return A=setTimeout(Y,n),f(E)}return A===void 0&&(A=setTimeout(Y,n)),H}var q,P,z,H,A,E,M=0,D=!1,R=!1,$=!0;if(typeof l!="function")throw new TypeError(c);return n=u(n)||0,m(y)&&(D=!!y.leading,R="maxWait"in y,z=R?w(u(y.maxWait)||0,n):z,$="trailing"in y?!!y.trailing:$),J.cancel=Z,J.flush=et,J}function m(l){var n=typeof l>"u"?"undefined":s(l);return!!l&&(n=="object"||n=="function")}function h(l){return!!l&&(typeof l>"u"?"undefined":s(l))=="object"}function x(l){return(typeof l>"u"?"undefined":s(l))=="symbol"||h(l)&&B.call(l)==b}function u(l){if(typeof l=="number")return l;if(x(l))return p;if(m(l)){var n=typeof l.valueOf=="function"?l.valueOf():l;l=m(n)?n+"":n}if(typeof l!="string")return l===0?l:+l;l=l.replace(d,"");var y=S.test(l);return y||X.test(l)?U(l.slice(2),y?2:8):g.test(l)?p:+l}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},c="Expected a function",p=NaN,b="[object Symbol]",d=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,X=/^0o[0-7]+$/i,U=parseInt,V=(typeof i>"u"?"undefined":s(i))=="object"&&i&&i.Object===Object&&i,G=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,K=V||G||Function("return this")(),j=Object.prototype,B=j.toString,w=Math.max,_=Math.min,N=function(){return K.Date.now()};r.exports=a}).call(o,function(){return this}())},function(r,o){function i(s){var c=void 0,p=void 0;for(c=0;c<s.length;c+=1)if(p=s[c],p.dataset&&p.dataset.aos||p.children&&i(p.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function m(){return!!a()}function h(s,c){var p=window.document,b=a(),d=new b(x);u=c,d.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function x(s){s&&s.forEach(function(c){var p=Array.prototype.slice.call(c.addedNodes),b=Array.prototype.slice.call(c.removedNodes),d=p.concat(b);if(i(d))return u()})}Object.defineProperty(o,"__esModule",{value:!0});var u=function(){};o.default={isSupported:m,ready:h}},function(r,o){function i(p,b){if(!(p instanceof b))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(o,"__esModule",{value:!0});var m=function(){function p(b,d){for(var g=0;g<d.length;g++){var S=d[g];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(b,S.key,S)}}return function(b,d,g){return d&&p(b.prototype,d),g&&p(b,g),b}}(),h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,x=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function p(){i(this,p)}return m(p,[{key:"phone",value:function(){var b=a();return!(!h.test(b)&&!x.test(b.substr(0,4)))}},{key:"mobile",value:function(){var b=a();return!(!u.test(b)&&!s.test(b.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();o.default=new c},function(r,o){Object.defineProperty(o,"__esModule",{value:!0});var i=function(m,h,x){var u=m.node.getAttribute("data-aos-once");h>m.position?m.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!x&&u!=="true")&&m.node.classList.remove("aos-animate")},a=function(m,h){var x=window.pageYOffset,u=window.innerHeight;m.forEach(function(s,c){i(s,u+x,h)})};o.default=a},function(r,o,i){function a(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(o,"__esModule",{value:!0});var m=i(12),h=a(m),x=function(u,s){return u.forEach(function(c,p){c.node.classList.add("aos-init"),c.position=(0,h.default)(c.node,s.offset)}),u};o.default=x},function(r,o,i){function a(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(o,"__esModule",{value:!0});var m=i(13),h=a(m),x=function(u,s){var c=0,p=0,b=window.innerHeight,d={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(d.offset&&!isNaN(d.offset)&&(p=parseInt(d.offset)),d.anchor&&document.querySelectorAll(d.anchor)&&(u=document.querySelectorAll(d.anchor)[0]),c=(0,h.default)(u).top,d.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=u.offsetHeight/2;break;case"bottom-bottom":c+=u.offsetHeight;break;case"top-center":c+=b/2;break;case"bottom-center":c+=b/2+u.offsetHeight;break;case"center-center":c+=b/2+u.offsetHeight/2;break;case"top-top":c+=b;break;case"bottom-top":c+=u.offsetHeight+b;break;case"center-top":c+=u.offsetHeight/2+b}return d.anchorPlacement||d.offset||isNaN(s)||(p=s),c+p};o.default=x},function(r,o){Object.defineProperty(o,"__esModule",{value:!0});var i=function(a){for(var m=0,h=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)m+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),h+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:h,left:m}};o.default=i},function(r,o){Object.defineProperty(o,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(m){return{node:m}})};o.default=i}])})})(ct);var yt=ct.exports;const rt=ht(yt);const vt=()=>{rt.init(),rt.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:700,easing:"ease-in-out",once:!1,mirror:!0,anchorPlacement:"top-bottom"})};document.addEventListener("astro:page-load",()=>{vt()},{once:!1});const gt=t=>history.state&&history.replaceState({...history.state,...t},""),nt=!!document.startViewTransition,tt=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),lt=t=>location.pathname===t.pathname&&location.search===t.search,ut=t=>document.dispatchEvent(new Event(t)),ft=()=>ut("astro:page-load"),wt=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.setAttribute("style","position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px"),document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},I="data-astro-transition-persist";let it,Q=0;history.state?(Q=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):tt()&&history.replaceState({index:Q,scrollX,scrollY,intraPage:!1},"");const kt=(t,e)=>{let r=!1,o=!1;return(...i)=>{if(r){o=!0;return}t(...i),r=!0,setTimeout(()=>{o&&(o=!1,t(...i)),r=!1},e)}};async function xt(t){try{const e=await fetch(t),r=e.headers.get("content-type")?.replace(/;.*$/,"");return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await e.text(),redirected:e.redirected?e.url:void 0,mediaType:r}}catch{return null}}function dt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Et(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const r=document.createElement("script");r.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const i=new Promise(a=>{r.onload=a});t=t.then(()=>i)}r.setAttribute(o.name,o.value)}r.dataset.astroExec="",e.replaceWith(r)}return t}function At(t){const e=t.effect;return!e||!(e instanceof KeyframeEffect)||!e.target?!1:window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount==="infinite"}const mt=(t,e,r)=>{const o=!lt(t);let i=!1;t.href!==location.href&&(e?history.replaceState({...history.state},"",t.href):(history.replaceState({...history.state,intraPage:r},""),history.pushState({index:++Q,scrollX:0,scrollY:0},"",t.href)),o&&(scrollTo({left:0,top:0,behavior:"instant"}),i=!0)),t.hash?location.href=t.href:i||scrollTo({left:0,top:0,behavior:"instant"})};function St(t){const e=[];for(const r of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${I}="${r.getAttribute(I)}"], link[rel=stylesheet][href="${r.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",r.getAttribute("href")),e.push(new Promise(i=>{["load","error"].forEach(a=>o.addEventListener(a,i)),document.head.append(o)}))}return e}async function at(t,e,r,o,i){const a=s=>{const c=s.getAttribute(I),p=c&&t.head.querySelector(`[${I}="${c}"]`);if(p)return p;if(s.matches("link[rel=stylesheet]")){const b=s.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},m=()=>{const s=document.activeElement;if(s?.closest(`[${I}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const c=s.selectionStart,p=s.selectionEnd;return{activeElement:s,start:c,end:p}}return{activeElement:s}}else return{activeElement:null}},h=({activeElement:s,start:c,end:p})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=c,s.selectionEnd=p))},x=()=>{const s=document.documentElement,c=[...s.attributes].filter(({name:d})=>(s.removeAttribute(d),d.startsWith("data-astro-")));[...t.documentElement.attributes,...c].forEach(({name:d,value:g})=>s.setAttribute(d,g));for(const d of document.scripts)for(const g of t.scripts)if(!d.src&&d.textContent===g.textContent||d.src&&d.type===g.type&&d.src===g.src){g.dataset.astroExec="";break}for(const d of Array.from(document.head.children)){const g=a(d);g?g.remove():d.remove()}document.head.append(...t.head.children);const p=document.body,b=m();document.body.replaceWith(t.body);for(const d of p.querySelectorAll(`[${I}]`)){const g=d.getAttribute(I),S=document.querySelector(`[${I}="${g}"]`);S&&S.replaceWith(d)}h(b),o?scrollTo(o.scrollX,o.scrollY):mt(e,r.history==="replace",!1),ut("astro:after-swap")},u=St(t);if(u.length&&await Promise.all(u),i==="animate"){const s=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const c=document.getAnimations().filter(b=>!s.includes(b)&&!At(b));await Promise.all(c.map(b=>b.finished)),x(),document.documentElement.dataset.astroTransitionFallback="new"}else x()}async function pt(t,e,r,o){let i;const a=e.href,m=await xt(a);if(m===null){location.href=a;return}m.redirected&&(e=new URL(m.redirected)),it??=new DOMParser;const h=it.parseFromString(m.html,m.mediaType);if(h.querySelectorAll("noscript").forEach(x=>x.remove()),!h.querySelector('[name="astro-view-transitions-enabled"]')){location.href=a;return}o||history.replaceState({...history.state,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=t,nt?i=document.startViewTransition(()=>at(h,e,r,o)).finished:i=at(h,e,r,o,dt());try{await i}finally{await Et(),ft(),wt()}}function Tt(t,e){if(!tt()){location.href=t;return}const r=new URL(t,location.href);location.origin===r.origin&&lt(r)?mt(r,e?.history==="replace",!0):pt("forward",r,e??{})}function Ot(t){if(!tt()&&t.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const e=history.state;if(e.intraPage)scrollTo(e.scrollX,e.scrollY);else{const r=e.index,o=r>Q?"forward":"back";Q=r,pt(o,new URL(location.href),{},e)}}const st=()=>{gt({scrollX,scrollY})};{(nt||dt()!=="none")&&(addEventListener("popstate",Ot),addEventListener("load",ft),"onscrollend"in window?addEventListener("scrollend",st):addEventListener("scroll",kt(st,300)));for(const t of document.scripts)t.dataset.astroExec=""}function jt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Mt(t){if(document.querySelector(`link[rel=prefetch][href="${t}"]`))return;if(navigator.connection){let r=navigator.connection;if(r.saveData||/(2|3)g/.test(r.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",t),document.head.append(e)}(nt||jt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;e instanceof Element&&e.tagName!=="A"&&(e=e.closest("a")),!(!e||!(e instanceof HTMLAnchorElement)||e.dataset.astroReload!==void 0||e.hasAttribute("download")||!e.href||e.target&&e.target!=="_self"||e.origin!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented)&&(t.preventDefault(),Tt(e.href,{history:e.dataset.astroHistory==="replace"?"replace":"auto"}))}),["mouseenter","touchstart","focus"].forEach(t=>{document.addEventListener(t,e=>{if(e.target instanceof HTMLAnchorElement){let r=e.target;r.origin===location.origin&&r.pathname!==location.pathname&&tt()&&Mt(r.pathname)}},{passive:!0,capture:!0})}));