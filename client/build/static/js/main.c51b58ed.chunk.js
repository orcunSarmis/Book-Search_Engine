(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{77:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a,c,s,r,i=n(1),l=n.n(i),o=n(58),j=n.n(o),d=n(9),b=n(23),u=n(5),m=n(66),O=n(93),x=n(95),p=n(92),h=n(64),g=n.p+"static/media/img2.8f8b63e0.jpg",v=(n.p,n(3)),f=function(){return Object(v.jsx)("main",{children:Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("div",{className:"",style:{position:"relative"},children:[Object(v.jsx)("div",{className:"",style:{position:"absolute"},children:Object(v.jsx)("img",{src:g,className:"w-100",alt:""})}),Object(v.jsxs)("div",{className:"",style:{position:"absolute",width:"100%",top:"10rem",textAlign:"center",background:"#201919c4",color:"white"},children:[Object(v.jsxs)("h1",{children:["Everthing you need local is ",Object(v.jsx)("span",{style:{color:"#a7a376"},children:"a click away"})]}),Object(v.jsxs)("h1",{children:["Everthing you need local is ",Object(v.jsx)("span",{style:{color:"#a7a376"},children:"CommuniTeam"})]})]})]})})})},y=n(97),k=n(29),w=n(94),N=Object(w.a)(a||(a=Object(k.a)(["\nquery Me {\n  me {\n    _id\n    username\n    email\n  }\n}\n"]))),S=(Object(w.a)(c||(c=Object(k.a)(["\nquery Community {\n  community {\n    __id\n    name\n    location\n    users {\n      name\n    }\n  }\n}\n"]))),function(){var e=Object(y.a)(N),t=e.loading,n=e.data;if(t)return Object(v.jsx)(v.Fragment,{children:"Loading..."});var a=(null===n||void 0===n?void 0:n.me)||{};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"Profile Page"}),"Id: ",a._id,Object(v.jsx)("br",{}),"Email: ",a.email,Object(v.jsx)("br",{}),"Username: ",a.username]})}),L=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{children:"Page not found"})})},_=n(31),I=n(41),C=n(15),$=n(11),F=n(90),T=Object(w.a)(s||(s=Object(k.a)(["\nmutation AddUser($username: String!, $email: String!, $password: String!) {\n  addUser(username: $username, email: $email, password: $password) {\n    token\n    user {\n      _id\n      username\n      email\n    }\n  }\n}"]))),E=Object(w.a)(r||(r=Object(k.a)(["\nmutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      _id\n      username\n      email\n    }\n  }\n}"]))),P=(n(77),n(60)),D=n(61),Y=n(51),U=new(function(){function e(){Object(P.a)(this,e)}return Object(D.a)(e,[{key:"getProfile",value:function(){return Object(Y.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(Y.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),q=function(e){var t=Object(i.useState)({email:"",password:""}),n=Object($.a)(t,2),a=n[0],c=n[1],s=Object(F.a)(E),r=Object($.a)(s,2),l=r[0],o=r[1],j=o.error,u=o.data,m=function(e){var t=e.target,n=t.name,s=t.value;c(Object(d.a)(Object(d.a)({},a),{},Object(C.a)({},n,s)))},O=function(){var e=Object(I.a)(Object(_.a)().mark((function e(t){var n,s;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,l({variables:Object(d.a)({},a)});case 5:n=e.sent,s=n.data,U.login(s.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:c({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("main",{className:"flex-row justify-center  imgepic",children:Object(v.jsx)("div",{className:"col-12 pt-5 col-lg-8 mx-auto my-0",children:Object(v.jsx)("div",{className:"card",children:Object(v.jsxs)("div",{className:"card-body",children:[u?Object(v.jsxs)("p",{children:["Success! You may now head"," ",Object(v.jsx)(b.b,{to:"/",children:"back to the homepage."})]}):Object(v.jsx)("form",{onSubmit:O,children:Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("div",{class:"kpx_login",children:[Object(v.jsxs)("h3",{class:"kpx_authTitle",children:["Login or ",Object(v.jsx)("a",{href:"Signup",children:"Sign up"})]}),Object(v.jsx)("div",{class:"row kpx_row-sm-offset-3",children:Object(v.jsxs)("div",{class:"",children:[Object(v.jsx)("h6",{children:"Your Email"}),Object(v.jsxs)("div",{class:"input-group",children:[Object(v.jsx)("span",{class:"input-group-addon",children:Object(v.jsx)("span",{class:"fa fa-user"})}),Object(v.jsx)("input",{className:"form-input w-100 rounded py-md-1 px-md-1 py-lg-2 px-lg-4  w-xs-50",placeholder:"",name:"email",type:"email",value:a.email,onChange:m})]}),Object(v.jsx)("p",{class:"mt-2 small",children:"You can you your username, mobile number, or email address"}),Object(v.jsx)("h6",{children:"Password"}),Object(v.jsxs)("div",{class:"input-group",children:[Object(v.jsx)("span",{class:"input-group-addon",children:Object(v.jsx)("span",{class:"fa fa-key"})}),Object(v.jsx)("input",{className:"form-input rounded w-100 py-md-1 px-md-1 py-lg-2 px-lg-4 w-xs-100",placeholder:"",name:"password",type:"password",value:a.password,onChange:m})]}),Object(v.jsxs)("span",{class:"custom-control-description",children:[Object(v.jsx)("input",{type:"checkbox"})," Keep me signed in"]}),Object(v.jsxs)("div",{class:" d-flex justify-content-between",children:[Object(v.jsx)("p",{class:"kpx_forgotPwd",children:Object(v.jsx)("a",{href:"#",children:"Forgot your login in details?"})}),Object(v.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]})]})}),Object(v.jsxs)("div",{class:"row kpx_row-sm-offset-3",children:[Object(v.jsx)("div",{class:"",children:Object(v.jsx)("label",{class:"custom-control custom-checkbox",children:Object(v.jsx)("span",{class:"custom-control-indicator"})})}),Object(v.jsx)("div",{class:"text-center",children:Object(v.jsx)("p",{class:"small text-lg-center text-md-center text-sm-center text-xs-center",children:"Dont't have a My Community Directory account"})})]})]})})}),j&&Object(v.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:j.message})]})})})})},M=function(){var e=Object(i.useState)({username:"",email:"",password:""}),t=Object($.a)(e,2),n=t[0],a=t[1],c=Object(F.a)(T),s=Object($.a)(c,2),r=s[0],l=s[1],o=l.error,j=l.data,u=function(e){var t=e.target,c=t.name,s=t.value;a(Object(d.a)(Object(d.a)({},n),{},Object(C.a)({},c,s)))},m=function(){var e=Object(I.a)(Object(_.a)().mark((function e(t){var a,c;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,r({variables:Object(d.a)({},n)});case 5:a=e.sent,c=a.data,U.login(c.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(v.jsx)("div",{className:"col-12 col-lg-10",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Sign Up"}),Object(v.jsxs)("div",{className:"card-body",children:[j?Object(v.jsxs)("p",{children:["Success! You may now head"," ",Object(v.jsx)(b.b,{to:"/",children:"back to the homepage."})]}):Object(v.jsxs)("form",{onSubmit:m,children:[Object(v.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"text",value:n.name,onChange:u}),Object(v.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:u}),Object(v.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:u}),Object(v.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(v.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})})},A=n(17),B={Nav:{background:"#f3233a"},NavLink:{color:"#F5F8F7"}},J=function(){return Object(v.jsxs)(A.a,{style:B.Nav,className:"justify-content-end me-auto",expand:"lg",children:[Object(v.jsx)(A.a.Item,{style:B.NavLink,className:"justify-content-end me-auto",children:"CommuniTeam"}),Object(v.jsx)(A.a.Item,{children:Object(v.jsx)(A.a.Link,{style:B.NavLink,as:b.b,to:"/",children:"Home"})}),Object(v.jsx)(A.a.Item,{children:Object(v.jsx)(A.a.Link,{style:B.NavLink,as:b.b,to:"/profile",children:"Profile"})}),U.loggedIn()?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(A.a.Item,{children:Object(v.jsx)(A.a.Link,{style:B.NavLink,onClick:function(e){e.preventDefault(),U.logout()},children:"Logout"})})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(A.a.Item,{children:Object(v.jsx)(A.a.Link,{style:B.NavLink,as:b.b,to:"/login",children:"Login"})}),Object(v.jsx)(A.a.Item,{children:Object(v.jsx)(A.a.Link,{style:B.NavLink,as:b.b,to:"/signup",children:"Signup"})})]})]})},z=Object(m.a)({uri:"/graphql"}),H=Object(h.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),K=new O.a({link:H.concat(z),cache:new x.a});var G=function(){return Object(v.jsx)(p.a,{client:K,children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(J,{}),Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/",element:Object(v.jsx)(f,{})}),Object(v.jsx)(u.a,{path:"/profile",element:Object(v.jsx)(S,{})}),Object(v.jsx)(u.a,{path:"/login",element:Object(v.jsx)(q,{})}),Object(v.jsx)(u.a,{path:"/signup",element:Object(v.jsx)(M,{})}),Object(v.jsx)(u.a,{path:"*",element:Object(v.jsx)(L,{})})]})]})})};n(80);j.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.c51b58ed.chunk.js.map