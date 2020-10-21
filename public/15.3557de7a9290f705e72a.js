(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"f+ep":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("gIcY"),e=u("lGQG"),i=function(){function l(l,n,u){this.authService=l,this.formBuilder=n,this.router=u,this.errorMessage="",this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 5 characters long."}]}}return l.prototype.ngOnInit=function(){this.validations_form=this.formBuilder.group({email:new t.c("",t.m.compose([t.m.required,t.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new t.c("",t.m.compose([t.m.minLength(5),t.m.required]))})},l.prototype.tryLogin=function(l){var n=this;this.authService.doLogin(l).then(function(l){n.router.navigate(["/products"])},function(l){n.errorMessage=l.message,console.log(l)})},l.prototype.goRegisterPage=function(){this.router.navigate(["/register"])},l}(),a=function(){return function(){}}(),r=u("pMnS"),s=u("Ip0R"),b=u("oBZk"),g=u("ZZ/e"),c=u("ZYCi"),p=o.nb({encapsulation:0,styles:[[".error-message[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.go-to-register[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.submit-btn[_ngcontent-%COMP%]{margin-top:40px;background-color:#e3433a}.head-image[_ngcontent-%COMP%]{background-size:cover}.form-content[_ngcontent-%COMP%]{padding-bottom:2%;-webkit-padding-start:inherit;padding-inline-start:inherit}"]],data:{}});function d(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),o.Cb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function m(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,d)),o.ob(2,16384,null,0,s.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.validations_form.get("email").hasError(n.context.$implicit.type)&&(u.validations_form.get("email").dirty||u.validations_form.get("email").touched))},null)}function f(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),o.Cb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function h(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,f)),o.ob(2,16384,null,0,s.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.validations_form.get("password").hasError(n.context.$implicit.type)&&(u.validations_form.get("password").dirty||u.validations_form.get("password").touched))},null)}function y(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,5,"ion-header",[],null,null,null,b.A,b.h)),o.ob(1,49152,null,0,g.z,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,3,"ion-row",[],null,null,null,b.G,b.n)),o.ob(3,49152,null,0,g.hb,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,1,"ion-img",[["class","head-image"],["src","assets/imgs/logo.png"]],null,null,null,b.C,b.j)),o.ob(5,49152,null,0,g.B,[o.h,o.k,o.z],{src:[0,"src"]},null),(l()(),o.pb(6,0,null,null,48,"ion-content",[["class","form-content"],["padding",""]],null,null,null,b.y,b.f)),o.ob(7,49152,null,0,g.s,[o.h,o.k,o.z],null,null),o.ob(8,16384,null,0,g.c,[o.k],null,null),(l()(),o.pb(9,0,null,0,45,"ion-card",[],null,null,null,b.x,b.c)),o.ob(10,49152,null,0,g.k,[o.h,o.k,o.z],null,null),(l()(),o.pb(11,0,null,0,39,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,e=l.component;return"submit"===n&&(t=!1!==o.yb(l,13).onSubmit(u)&&t),"reset"===n&&(t=!1!==o.yb(l,13).onReset()&&t),"ngSubmit"===n&&(t=!1!==e.tryLogin(e.validations_form.value)&&t),t},null,null)),o.ob(12,16384,null,0,t.o,[],null,null),o.ob(13,540672,null,0,t.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.zb(2048,null,t.a,null,[t.e]),o.ob(15,16384,null,0,t.j,[[4,t.a]],null,null),(l()(),o.pb(16,0,null,null,11,"ion-item",[],null,null,null,b.E,b.l)),o.ob(17,49152,null,0,g.F,[o.h,o.k,o.z],null,null),(l()(),o.pb(18,0,null,0,2,"ion-label",[["color","primary"],["position","floating"]],null,null,null,b.F,b.m)),o.ob(19,49152,null,0,g.L,[o.h,o.k,o.z],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Cb(-1,0,["Email"])),(l()(),o.pb(21,0,null,0,6,"ion-input",[["formControlName","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.yb(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.yb(l,22)._handleInputEvent(u.target)&&t),t},b.D,b.k)),o.ob(22,16384,null,0,g.Kb,[o.k],null,null),o.zb(1024,null,t.g,function(l){return[l]},[g.Kb]),o.ob(24,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),o.zb(2048,null,t.h,null,[t.d]),o.ob(26,16384,null,0,t.i,[[4,t.h]],null,null),o.ob(27,49152,null,0,g.E,[o.h,o.k,o.z],{type:[0,"type"]},null),(l()(),o.pb(28,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,m)),o.ob(30,278528,null,0,s.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(31,0,null,null,11,"ion-item",[],null,null,null,b.E,b.l)),o.ob(32,49152,null,0,g.F,[o.h,o.k,o.z],null,null),(l()(),o.pb(33,0,null,0,2,"ion-label",[["color","primary"],["position","floating"]],null,null,null,b.F,b.m)),o.ob(34,49152,null,0,g.L,[o.h,o.k,o.z],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Cb(-1,0,["Password"])),(l()(),o.pb(36,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.yb(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.yb(l,37)._handleInputEvent(u.target)&&t),t},b.D,b.k)),o.ob(37,16384,null,0,g.Kb,[o.k],null,null),o.zb(1024,null,t.g,function(l){return[l]},[g.Kb]),o.ob(39,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),o.zb(2048,null,t.h,null,[t.d]),o.ob(41,16384,null,0,t.i,[[4,t.h]],null,null),o.ob(42,49152,null,0,g.E,[o.h,o.k,o.z],{type:[0,"type"]},null),(l()(),o.pb(43,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,h)),o.ob(45,278528,null,0,s.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(46,0,null,null,2,"ion-button",[["class","submit-btn"],["expand","block"],["type","submit"]],null,null,null,b.u,b.b)),o.ob(47,49152,null,0,g.i,[o.h,o.k,o.z],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),o.Cb(-1,0,["Log In"])),(l()(),o.pb(49,0,null,null,1,"label",[["class","error-message"]],null,null,null,null,null)),(l()(),o.Cb(50,null,["",""])),(l()(),o.pb(51,0,null,0,3,"p",[["class","go-to-register"]],null,null,null,null,null)),(l()(),o.Cb(-1,null,[" No account yet? "])),(l()(),o.pb(53,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.goRegisterPage()&&o),o},null,null)),(l()(),o.Cb(-1,null,["Create an account."]))],function(l,n){var u=n.component;l(n,5,0,"assets/imgs/logo.png"),l(n,13,0,u.validations_form),l(n,19,0,"primary","floating"),l(n,24,0,"email"),l(n,27,0,"text"),l(n,30,0,u.validation_messages.email),l(n,34,0,"primary","floating"),l(n,39,0,"password"),l(n,42,0,"password"),l(n,45,0,u.validation_messages.password),l(n,47,0,!u.validations_form.valid,"block","submit")},function(l,n){var u=n.component;l(n,11,0,o.yb(n,15).ngClassUntouched,o.yb(n,15).ngClassTouched,o.yb(n,15).ngClassPristine,o.yb(n,15).ngClassDirty,o.yb(n,15).ngClassValid,o.yb(n,15).ngClassInvalid,o.yb(n,15).ngClassPending),l(n,21,0,o.yb(n,26).ngClassUntouched,o.yb(n,26).ngClassTouched,o.yb(n,26).ngClassPristine,o.yb(n,26).ngClassDirty,o.yb(n,26).ngClassValid,o.yb(n,26).ngClassInvalid,o.yb(n,26).ngClassPending),l(n,36,0,o.yb(n,41).ngClassUntouched,o.yb(n,41).ngClassTouched,o.yb(n,41).ngClassPristine,o.yb(n,41).ngClassDirty,o.yb(n,41).ngClassValid,o.yb(n,41).ngClassInvalid,o.yb(n,41).ngClassPending),l(n,50,0,u.errorMessage)})}function v(l){return o.Db(0,[(l()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,y,p)),o.ob(1,114688,null,0,i,[e.a,t.b,c.m],null,null)],function(l,n){l(n,1,0)},null)}var C=o.lb("app-login",i,v,{},{},[]);u.d(n,"LoginPageModuleNgFactory",function(){return w});var w=o.mb(a,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[r.a,C]],[3,o.j],o.x]),o.wb(4608,s.k,s.j,[o.u,[2,s.r]]),o.wb(4608,t.p,t.p,[]),o.wb(4608,g.a,g.a,[o.z,o.g]),o.wb(4608,g.Fb,g.Fb,[g.a,o.j,o.q]),o.wb(4608,g.Ib,g.Ib,[g.a,o.j,o.q]),o.wb(4608,t.b,t.b,[]),o.wb(1073742336,s.b,s.b,[]),o.wb(1073742336,t.n,t.n,[]),o.wb(1073742336,t.f,t.f,[]),o.wb(1073742336,g.Cb,g.Cb,[]),o.wb(1073742336,t.l,t.l,[]),o.wb(1073742336,c.o,c.o,[[2,c.u],[2,c.m]]),o.wb(1073742336,a,a,[]),o.wb(1024,c.k,function(){return[[{path:"",component:i}]]},[])])})}}]);