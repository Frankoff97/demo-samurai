(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[7],{228:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(236),a=n(237),l=n(0),c=n.n(l),o=n(229),u=n.n(o),i=n(110),m=function(e){e.input;var t=e.meta,n=Object(a.a)(e,["input","meta"]);return c.a.createElement("div",null,t.touched&&t.error&&c.a.createElement("div",{className:"alert-danger p-2 mb-1 ".concat(u.a.item)},c.a.createElement("span",null,t.error)),c.a.createElement("div",{className:u.a.formControl+" "+(t.touched&&t.error?u.a.error:"")},n.children))},s=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(m,e,c.a.createElement("input",Object.assign({},n,t)))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(m,e,c.a.createElement("textarea",Object.assign({},n,t)))},b=function(e,t,n,a,l,o){Object(r.a)(a);return c.a.createElement(i.a,{placeholder:e,name:t,component:n,validate:[],value:l,type:o})}},229:function(e,t,n){e.exports={formControl:"formsControls_formControl__2DFAA",error:"formsControls_error__1bhKG",item:"formsControls_item__EUBPm"}},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is no more than ".concat(e," symbols")}}},303:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(111),c=n(228),o=n(230),u=n(22),i=n(23),m=n(20),s=Object(o.a)(50),f=Object(l.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,Object(c.c)("Email","email",c.a,[o.b,s],null,null)),a.a.createElement("div",null,Object(c.c)("Password","password",c.a,[o.b,s],null,"password")),a.a.createElement("div",null,Object(c.c)(null,"rememberMe",c.a,[],null,"checkbox")," Remember me"),a.a.createElement("div",null,a.a.createElement("h3",null,n)),a.a.createElement("div",null,a.a.createElement("button",null,"Sign in")))}));t.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThunk:u.c})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(f,{onSubmit:function(t){e.loginThunk(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.c6fe2773.chunk.js.map