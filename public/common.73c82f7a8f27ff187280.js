(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3z3p":function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r});var r=function(n,t,e){var r=new MutationObserver(function(n){e(i(n,t))});return r.observe(n,{childList:!0,subtree:!0}),r},i=function(n,t){var e;return n.forEach(function(n){for(var r=0;r<n.addedNodes.length;r++)e=o(n.addedNodes[r],t)||e}),e},o=function(n,t){if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find(function(n){return!0===n.checked})}},CBt4:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});var r=e("9TBO"),i=function(n,t,e,i,o){return r.a(void 0,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach(function(n){return u.classList.add(n)}),o&&Object.assign(u,o),t.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})},o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},ZuGR:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,a.forEach(function(n){for(var e=t.querySelectorAll(n),r=e.length-1;r>=0;r--){var u=e[r];u.parentNode?u.parentNode.removeChild(u):t.removeChild(u);for(var a=o(u),c=0;c<a.length;c++)i(a[c])}});for(var r=o(t),u=0;u<r.length;u++)i(r[u]);var c=document.createElement("div");c.appendChild(t);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},i=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),r=e.name;if(u.includes(r.toLowerCase())){var a=e.value;null!=a&&a.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var c=o(n);for(t=0;t<c.length;t++)i(c[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},u=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},bYeF:function(n,t,e){"use strict";e.d(t,"a",function(){return y}),e.d(t,"b",function(){return w}),e.d(t,"c",function(){return E}),e.d(t,"d",function(){return u});var r=e("9TBO"),i=e("VKG5"),o=e("JpGC"),u=function(n){return new Promise(function(t,e){Object(i.m)(function(){a(n),c(n).then(function(e){e.animation&&e.animation.destroy(),s(n),t(e)},function(t){s(n),e(t)})})})},a=function(n){var t=n.enteringEl,e=n.leavingEl;M(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),e&&E(e,!1)},c=function(n){return r.a(void 0,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return[4,l(n)];case 1:return[2,(t=e.sent())?d(t,n):f(n)]}})})},s=function(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},l=function(n){return r.a(void 0,void 0,void 0,function(){var t;return r.c(this,function(r){switch(r.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,e.e(98).then(e.bind(null,"WAL3"))]:[2,void 0];case 1:return t=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(99).then(e.bind(null,"tJwM"))];case 3:t=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,t]}})})},d=function(n,t){return r.a(void 0,void 0,void 0,function(){var i,o;return r.c(this,function(r){switch(r.label){case 0:return[4,v(t,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,e.e(5).then(e.bind(null,"5GEt"))];case 3:return[4,r.sent().create(n,t.baseEl,t)];case 4:return i=r.sent(),[3,6];case 5:return r.sent(),i=n(t.baseEl,t),[3,6];case 6:return m(t.enteringEl,t.leavingEl),[4,p(i,t)];case 7:return o=r.sent(),i.hasCompleted=o,t.progressCallback&&t.progressCallback(void 0),i.hasCompleted&&g(t.enteringEl,t.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},f=function(n){return r.a(void 0,void 0,void 0,function(){var t,e;return r.c(this,function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,v(n,!1)];case 1:return r.sent(),m(t,e),g(t,e),[2,{hasCompleted:!0}]}})})},v=function(n,t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[b(n.enteringEl),b(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}})})},h=function(n,t){return r.a(void 0,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},p=function(n,t){var e=t.progressCallback,r=new Promise(function(t){return n.onFinish(t)});return e?(n.progressStart(!0),e(n)):n.play(),r},m=function(n,t){w(t,o.c),w(n,o.a)},g=function(n,t){w(n,o.b),w(t,o.d)},w=function(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},b=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return r.a(void 0,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}})})},E=function(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},M=function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")}},"j5a+":function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return c});var r=e("9TBO"),i=function(n,t){return null!==t.closest(n)},o=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},u=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(n,t,e){return r.a(void 0,void 0,void 0,function(){var i;return r.c(this,function(r){return null!=n&&"#"!==n[0]&&!a.test(n)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(n,e)]):[2,!1]})})}},k0If:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return i});var r=function(){return function(n,t){this.x=n,this.y=t}}(),i=function(n,t,e,r,i){var a=u(n.y,t.y,e.y,r.y,i);return o(n.x,t.x,e.x,r.x,a[0])},o=function(n,t,e,r,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-n*Math.pow(i-1,3)},u=function(n,t,e,r,i){return a((r-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter(function(n){return n>=0&&n<=1})},a=function(n,t,e,r){if(0===n)return function(n,t,e){var i=t*t-4*n*r;return i<0?[]:[(-t+Math.sqrt(i))/(2*n),(-t-Math.sqrt(i))/(2*n)]}(t,e);var i=(3*(e/=n)-(t/=n)*t)/3,o=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var u=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===u)return[Math.pow(o/2,.5)-t/3];if(u>0)return[Math.pow(-o/2+Math.sqrt(u),1/3)-Math.pow(o/2+Math.sqrt(u),1/3)-t/3];var a=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(a,1/3);return[s*Math.cos(c/3)-t/3,s*Math.cos((c+2*Math.PI)/3)-t/3,s*Math.cos((c+4*Math.PI)/3)-t/3]}},l1ru:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return f}),e.d(t,"e",function(){return v}),e.d(t,"f",function(){return o}),e.d(t,"g",function(){return i}),e.d(t,"h",function(){return d}),e.d(t,"i",function(){return s}),e.d(t,"j",function(){return l}),e.d(t,"k",function(){return u});var r=function(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)},i=function(n){return!!n.shadowRoot&&!!n.attachShadow},o=function(n){var t=n.closest("ion-item");return t?t.querySelector("ion-label"):null},u=function(n,t,e,r,o){if(n||i(t)){var u=t.querySelector("input.aux-input");u||((u=t.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),t.appendChild(u)),u.disabled=o,u.name=e,u.value=r||""}},a=function(n,t,e){return Math.max(n,Math.min(t,e))},c=function(n,t){if(!n){var e="ASSERT: "+t;throw console.error(e),new Error(e)}},s=function(n){return n.timeStamp||Date.now()},l=function(n){if(n){var t=n.changedTouches;if(t&&t.length>0){var e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},d=function(n){var t="rtl"===document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(n,t){var e=n._original||n;return{_original:n,emit:v(e.emit.bind(e),t)}},v=function(n,t){var e;return void 0===t&&(t=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[n,t].concat(r))}}},lGQG:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var r=e("Wcq6"),i=e("Z2Br"),o=e("CB3U"),u=e("tct4"),a=e("CcnG"),c=function(){function n(n,t,e){this.firebaseService=n,this.afAuth=t,this.firestore=e}return n.prototype.doRegister=function(n){var t=this;return r.auth().createUserWithEmailAndPassword(n.email,n.password).then(function(n){console.log(n),t.firestore.collection("users").doc(n.user.uid).set({email:n.user.email}).catch(function(n){console.log(n)})}).catch(function(n){console.log(n)})},n.prototype.doLogin=function(n){return new Promise(function(t,e){r.auth().signInWithEmailAndPassword(n.email,n.password).then(function(n){return t(n)},function(n){return e(n)})})},n.prototype.doLogout=function(){var n=this;return new Promise(function(t,e){n.afAuth.auth.signOut().then(function(){n.firebaseService.unsubscribeOnLogOut(),t()}).catch(function(n){console.log(n),e()})})},n.ngInjectableDef=a.S({factory:function(){return new n(a.W(i.a),a.W(o.a),a.W(u.a))},token:n,providedIn:"root"}),n}()},s2pH:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return r});var r=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}}}]);