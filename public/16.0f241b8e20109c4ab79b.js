(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{G8AK:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("lGQG"),e=u("ZZ/e"),i=function(l,n,u,t){return new(u||(u=Promise))(function(o,e){function i(l){try{a(t.next(l))}catch(n){e(n)}}function r(l){try{a(t.throw(l))}catch(n){e(n)}}function a(l){l.done?o(l.value):new u(function(n){n(l.value)}).then(i,r)}a((t=t.apply(l,n||[])).next())})},r=function(l,n){var u,t,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(o=2&e[0]?t.return:e[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,e[1])).done)return o;switch(t=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(r){e=[6,r],t=0}finally{u=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},a=function(){function l(l,n,u,t){this.loadingCtrl=l,this.authService=n,this.router=u,this.route=t,this.searchTerm="",this.filteredItems=[]}return l.prototype.ngOnInit=function(){this.route&&this.route.data&&this.getData()},l.prototype.getData=function(){return i(this,void 0,void 0,function(){var l,n=this;return r(this,function(u){switch(u.label){case 0:return[4,this.loadingCtrl.create({message:"Please wait..."})];case 1:return l=u.sent(),this.presentLoading(l),this.route.data.subscribe(function(u){u.data.subscribe(function(u){l.dismiss(),n.products=u})}),[2]}})})},l.prototype.presentLoading=function(l){return i(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,l.present()];case 1:return[2,n.sent()]}})})},l.prototype.logout=function(){var l=this;this.authService.doLogout().then(function(n){l.router.navigate(["/login"])},function(l){console.log(l)})},l.prototype.setFilteredItems=function(){var l=this;this.filteredItems=[],console.log("Buscando: ",this.searchTerm),this.products.map(function(n){1==n.payload.doc.data().title.includes(l.searchTerm)&&(console.log("include!!!!",n.payload.doc.data().title),l.filteredItems.push(n))}),console.log("Filtered",this.filteredItems)},l}(),c=u("Z2Br"),b=function(){function l(l){this.firebaseService=l}return l.prototype.resolve=function(){return this.firebaseService.getTasks()},l}(),s=b,p=function(){return function(){}}(),d=u("pMnS"),h=u("oBZk"),g=u("gIcY"),k=u("ZYCi"),m=u("Ip0R"),f=t.nb({encapsulation:0,styles:[[".empty-list[_ngcontent-%COMP%]{font-size:22px;font-weight:500;text-align:center;margin-top:40px;color:var(--ion-color-medium)}ion-card-subtitle[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.5rem}div.list-mini[_ngcontent-%COMP%]{height:100%}.parent[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);-webkit-column-gap:5px;column-gap:5px;row-gap:10px;width:100%;margin-bottom:40px}.parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:150px}ion-icon[_ngcontent-%COMP%]{color:#e3433a}.routerLink[_ngcontent-%COMP%]{justify-content:center}"]],data:{}});function y(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,h.A,h.h)),t.ob(1,49152,null,0,e.z,[t.h,t.k,t.z],null,null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,h.L,h.s)),t.ob(3,49152,null,0,e.Ab,[t.h,t.k,t.z],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,h.K,h.r)),t.ob(5,49152,null,0,e.yb,[t.h,t.k,t.z],null,null),(l()(),t.Cb(-1,0,[" Explore"])),(l()(),t.pb(7,0,null,null,6,"ion-searchbar",[["animated",""],["cancelButtonText","Cancel"],["mode","ios"],["placeholder","Search Contenstants"],["showCancelButton","focus"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.yb(l,8)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.yb(l,8)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.searchTerm=u)&&o),"ionChange"===n&&(o=!1!==e.setFilteredItems()&&o),o},h.H,h.o)),t.ob(8,16384,null,0,e.Kb,[t.k],null,null),t.zb(1024,null,g.g,function(l){return[l]},[e.Kb]),t.ob(10,671744,null,0,g.k,[[8,null],[8,null],[8,null],[6,g.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.zb(2048,null,g.h,null,[g.k]),t.ob(12,16384,null,0,g.i,[[4,g.h]],null,null),t.ob(13,49152,null,0,e.ib,[t.h,t.k,t.z],{animated:[0,"animated"],cancelButtonText:[1,"cancelButtonText"],mode:[2,"mode"],placeholder:[3,"placeholder"],showCancelButton:[4,"showCancelButton"]},null),(l()(),t.pb(14,0,null,null,28,"div",[["class","parent"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,7,"ion-card",[["mdbScrollSpyElement","scrollspy4"]],null,null,null,h.x,h.c)),t.ob(16,49152,null,0,e.k,[t.h,t.k,t.z],null,null),(l()(),t.pb(17,0,null,0,0,"img",[["src","../../assets/imgs/annual.png"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,0,4,"ion-button",[["expand","block"],["routerLink","/details"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.yb(l,20).onClick()&&o),"click"===n&&(o=!1!==t.yb(l,21).onClick(u)&&o),o},h.u,h.b)),t.ob(19,49152,null,0,e.i,[t.h,t.k,t.z],{expand:[0,"expand"]},null),t.ob(20,16384,null,0,k.n,[k.m,k.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(21,737280,null,0,e.Jb,[m.g,e.Gb,t.k,k.m,[2,k.n]],null,null),(l()(),t.Cb(-1,0,["View"])),(l()(),t.pb(23,0,null,null,7,"ion-card",[["mdbScrollSpyElement","scrollspy4"]],null,null,null,h.x,h.c)),t.ob(24,49152,null,0,e.k,[t.h,t.k,t.z],null,null),(l()(),t.pb(25,0,null,0,0,"img",[["src","../../assets/imgs/1.png"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,0,4,"ion-button",[["expand","block"],["routerLink","/contenstants"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.yb(l,28).onClick()&&o),"click"===n&&(o=!1!==t.yb(l,29).onClick(u)&&o),o},h.u,h.b)),t.ob(27,49152,null,0,e.i,[t.h,t.k,t.z],{expand:[0,"expand"]},null),t.ob(28,16384,null,0,k.n,[k.m,k.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(29,737280,null,0,e.Jb,[m.g,e.Gb,t.k,k.m,[2,k.n]],null,null),(l()(),t.Cb(-1,0,["Coming Soon"])),(l()(),t.pb(31,0,null,null,5,"ion-card",[["mdbScrollSpyElement","scrollspy4"]],null,null,null,h.x,h.c)),t.ob(32,49152,null,0,e.k,[t.h,t.k,t.z],null,null),(l()(),t.pb(33,0,null,0,0,"img",[["src","../../assets/imgs/2.png"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,0,2,"ion-button",[["expand","block"]],null,null,null,h.u,h.b)),t.ob(35,49152,null,0,e.i,[t.h,t.k,t.z],{expand:[0,"expand"]},null),(l()(),t.Cb(-1,0,["Coming Soon"])),(l()(),t.pb(37,0,null,null,5,"ion-card",[["mdbScrollSpyElement","scrollspy4"]],null,null,null,h.x,h.c)),t.ob(38,49152,null,0,e.k,[t.h,t.k,t.z],null,null),(l()(),t.pb(39,0,null,0,0,"img",[["src","../../assets/imgs/3.jpeg"]],null,null,null,null,null)),(l()(),t.pb(40,0,null,0,2,"ion-button",[["expand","block"]],null,null,null,h.u,h.b)),t.ob(41,49152,null,0,e.i,[t.h,t.k,t.z],{expand:[0,"expand"]},null),(l()(),t.Cb(-1,0,["Coming Soon"])),(l()(),t.pb(43,0,null,null,28,"ion-footer",[],null,null,null,h.z,h.g)),t.ob(44,49152,null,0,e.x,[t.h,t.k,t.z],null,null),(l()(),t.pb(45,0,null,0,26,"ion-tab-bar",[["routerLink","/products"],["slot","bottom"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.yb(l,47).onClick()&&o),"click"===n&&(o=!1!==t.yb(l,48).onClick(u)&&o),o},h.I,h.p)),t.ob(46,49152,null,0,e.sb,[t.h,t.k,t.z],null,null),t.ob(47,16384,null,0,k.n,[k.m,k.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(48,737280,null,0,e.Jb,[m.g,e.Gb,t.k,k.m,[2,k.n]],null,null),(l()(),t.pb(49,0,null,0,6,"ion-tab-button",[["tab","schedule"]],null,null,null,h.J,h.q)),t.ob(50,49152,null,0,e.tb,[t.h,t.k,t.z],{tab:[0,"tab"]},null),(l()(),t.pb(51,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,h.B,h.i)),t.ob(52,49152,null,0,e.A,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.pb(53,0,null,0,2,"ion-label",[],null,null,null,h.F,h.m)),t.ob(54,49152,null,0,e.L,[t.h,t.k,t.z],null,null),(l()(),t.Cb(-1,0,["Home"])),(l()(),t.pb(56,0,null,0,8,"ion-tab-button",[["routerLink","/leaderboard"],["tab","speakers"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.yb(l,58).onClick()&&o),"click"===n&&(o=!1!==t.yb(l,59).onClick(u)&&o),o},h.J,h.q)),t.ob(57,49152,null,0,e.tb,[t.h,t.k,t.z],{tab:[0,"tab"]},null),t.ob(58,16384,null,0,k.n,[k.m,k.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(59,737280,null,0,e.Jb,[m.g,e.Gb,t.k,k.m,[2,k.n]],null,null),(l()(),t.pb(60,0,null,0,1,"ion-icon",[["name","trophy"]],null,null,null,h.B,h.i)),t.ob(61,49152,null,0,e.A,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.pb(62,0,null,0,2,"ion-label",[],null,null,null,h.F,h.m)),t.ob(63,49152,null,0,e.L,[t.h,t.k,t.z],null,null),(l()(),t.Cb(-1,0,["Leaderboard"])),(l()(),t.pb(65,0,null,0,6,"ion-tab-button",[["tab",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t},h.J,h.q)),t.ob(66,49152,null,0,e.tb,[t.h,t.k,t.z],{tab:[0,"tab"]},null),(l()(),t.pb(67,0,null,0,1,"ion-icon",[["name","log-out"]],null,null,null,h.B,h.i)),t.ob(68,49152,null,0,e.A,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.pb(69,0,null,0,2,"ion-label",[],null,null,null,h.F,h.m)),t.ob(70,49152,null,0,e.L,[t.h,t.k,t.z],null,null),(l()(),t.Cb(-1,0,["Logout"]))],function(l,n){l(n,10,0,n.component.searchTerm),l(n,13,0,"","Cancel","ios","Search Contenstants","focus"),l(n,19,0,"block"),l(n,20,0,"/details"),l(n,21,0),l(n,27,0,"block"),l(n,28,0,"/contenstants"),l(n,29,0),l(n,35,0,"block"),l(n,41,0,"block"),l(n,47,0,"/products"),l(n,48,0),l(n,50,0,"schedule"),l(n,52,0,"home"),l(n,57,0,"speakers"),l(n,58,0,"/leaderboard"),l(n,59,0),l(n,61,0,"trophy"),l(n,66,0,""),l(n,68,0,"log-out")},function(l,n){l(n,7,0,t.yb(n,12).ngClassUntouched,t.yb(n,12).ngClassTouched,t.yb(n,12).ngClassPristine,t.yb(n,12).ngClassDirty,t.yb(n,12).ngClassValid,t.yb(n,12).ngClassInvalid,t.yb(n,12).ngClassPending)})}function C(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"app-products",[],null,null,null,y,f)),t.ob(1,114688,null,0,a,[e.Eb,o.a,k.m,k.a],null,null)],function(l,n){l(n,1,0)},null)}var w=t.lb("app-products",a,C,{},{},[]);u.d(n,"ProductsPageModuleNgFactory",function(){return v});var v=t.mb(p,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[d.a,w]],[3,t.j],t.x]),t.wb(4608,m.k,m.j,[t.u,[2,m.r]]),t.wb(4608,g.p,g.p,[]),t.wb(4608,g.b,g.b,[]),t.wb(4608,e.a,e.a,[t.z,t.g]),t.wb(4608,e.Fb,e.Fb,[e.a,t.j,t.q]),t.wb(4608,e.Ib,e.Ib,[e.a,t.j,t.q]),t.wb(4608,b,b,[c.a]),t.wb(1073742336,m.b,m.b,[]),t.wb(1073742336,g.n,g.n,[]),t.wb(1073742336,g.f,g.f,[]),t.wb(1073742336,g.l,g.l,[]),t.wb(1073742336,e.Cb,e.Cb,[]),t.wb(1073742336,k.o,k.o,[[2,k.u],[2,k.m]]),t.wb(1073742336,p,p,[]),t.wb(1024,k.k,function(){return[[{path:"",component:a,resolve:{data:s}}]]},[])])})}}]);