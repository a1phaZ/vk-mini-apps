(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{283:function(e,t,a){e.exports=a(482)},389:function(e,t){},391:function(e,t){},424:function(e,t){},425:function(e,t){},480:function(e,t,a){},482:function(e,t,a){"use strict";a.r(t);a(284),a(310),a(312),a(313),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(335),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352);var n=a(0),c=a.n(n),r=a(205),l=a.n(r),o=a(28),i=a.n(o),u=a(3),s=(a(360),a(4)),m=a(69),p=a.n(m),f=a(94),b=a(30),d=a(66),E=a.n(d),O=a(62),j=a.n(O),g=a(213),v=a.n(g),h=a(214),y=a.n(h),C=a(233),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),c=Object(u.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[r,e]),[r,l]},k=a(215),w=a.n(k),x={view:"authorization",panel:"authorization.login",popout:null,error:null},T=function(e,t){switch(t.type){case"SET_VIEW":return Object(b.a)({},e,{view:t.payload.view,panel:"".concat(t.payload.view,".").concat(t.payload.panel)});case"SET_PANEL":return Object(b.a)({},e,{panel:"".concat(e.view,".").concat(t.payload.panel)});case"SHOW_LOADING":return Object(b.a)({},e,{popout:c.a.createElement(s.t,null,c.a.createElement(s.w,null))});case"HIDE_LOADING":return Object(b.a)({},e,{popout:null});case"SET_ERROR":return Object(b.a)({},e,{error:t.payload.error});case"UNSET_ERROR":return Object(b.a)({},e,{error:null});default:return e}},P=Object(n.createContext)(),R=function(e){var t=e.children,a=Object(n.useReducer)(T,x);return c.a.createElement(P.Provider,{value:a},t)},_=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(null),b=Object(u.a)(m,2),d=b[0],E=b[1],O=Object(n.useState)({}),j=Object(u.a)(O,2),g=j[0],v=j[1],h=S("token"),y=Object(u.a)(h,1)[0],k=Object(n.useContext)(P),x=Object(u.a)(k,2)[1],T="https://balance.z-labz.ru:8080/api",R=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(e),r(!0),x({type:"SHOW_LOADING"})}),[x]),_=g.method,I=void 0===_?"GET":_,A=g.params,z=Object(C.a)(g,["method","params"]);return Object(n.useEffect)((function(){if(c){var t={"Content-Type":"application/json",Authorization:y?"Token ".concat(y):""},a=A?w.a.stringify(A):null,n=a?"".concat(T).concat(e,"?").concat(a):"".concat(T).concat(e);(function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:I,mode:"cors",headers:t,body:"GET"!==I?JSON.stringify(z):null}).then((function(e){return e.json()})).then((function(e){if(e.error)throw Error(e.error.message);r(!1),x({type:"HIDE_LOADING"}),s(e)})).catch((function(e){r(!1),x({type:"HIDE_LOADING"}),x({type:"SET_ERROR",payload:{error:e}}),E(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),[c,z,I,e,T,y,A,x]),[{isLoading:c,response:i,error:d},R]},I=a(134),A=a.n(I),z=a(216),L=a.n(z),F=Object(n.createContext)([{},function(){}]),N=function(e){var t=e.children,a=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(u.a)(r,2),o=l[0],i=l[1],s=Object(n.useState)(null),m=Object(u.a)(s,2),p=m[0],f=m[1],b=Object(n.useState)(!1),d=Object(u.a)(b,2),E=d[0],O=d[1];return Object(n.useEffect)((function(){if(o){var e=A.a.parse(a);if(e){f(e.vk_user_id);var t={};Object.keys(e).sort().forEach((function(a){"vk_"===a.slice(0,3)&&(t[a]=e[a])}));var n=A.a.stringify(t),c=L.a.createHmac("sha256","Zs6DYRE8Z2mZ44LfciKW").update(n).digest().toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=$/,"");O(c===e.sign)}}}),[o,a]),[{vkUserId:p,matchUrlParams:E},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c(e),i(!0)}]}(),r=Object(u.a)(a,2),l=r[0],o=l.vkUserId,i=l.matchUrlParams,s=r[1],m=Object(n.useState)({vkUserId:null,matchUrlParams:!1}),p=Object(u.a)(m,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){s(window.location.search.slice(1))}),[s]),Object(n.useEffect)((function(){o&&b({vkUserId:o,matchUrlParams:i})}),[o,i]),c.a.createElement(F.Provider,{value:[f,b]},t)},W=Object(n.createContext)([{},function(e){}]),U=function(e){var t=e.children,a=Object(n.useState)({isLoading:!1,isLoggedIn:null,currentUser:null}),r=Object(u.a)(a,2),l=r[0],o=r[1];return c.a.createElement(W.Provider,{value:[l,o]},t)},V=function(e){var t=e.go,a=e.goView,r=e.type,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],m=o[1],d=Object(n.useState)(""),O=Object(u.a)(d,2),g=O[0],h=O[1],C=Object(n.useState)(null),k=Object(u.a)(C,2),w=k[0],x=k[1],T=_("/users/".concat(r)),R=Object(u.a)(T,2),I=R[0],A=I.response,z=I.error,L=R[1],N=Object(n.useContext)(F),U=Object(u.a)(N,1)[0].vkUserId,V=Object(n.useState)(!1),D=Object(u.a)(V,2),K=D[0],G=D[1],q=Object(n.useContext)(W),M=Object(u.a)(q,2),B=M[0],H=M[1],J=S("token"),Y=Object(u.a)(J,2)[1],Z=Object(n.useContext)(P),Q=Object(u.a)(Z,2)[1];Object(n.useEffect)((function(){if(B.isLoggedIn){var e=B.currentUser,t=e.name,a=e.phone,n=e.email,c=e.password;Q(t&&a&&n&&c?{type:"SET_VIEW",payload:{view:"balance",panel:"home"}}:{type:"SET_VIEW",payload:{view:"registration",panel:"finish"}})}}),[B,Q]),Object(n.useEffect)((function(){"login"!==r&&(i.length===g.length?i!==g&&x({status:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0432\u043e\u0434 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443."}):x(null))}),[i,g,r]),Object(n.useEffect)((function(){K&&(L({method:"POST",user:{id:+U,password:i}}),G(!1))}),[K,L,i,U]),Object(n.useEffect)((function(){A&&(!A.user&&A.error?x(A.error):Y(A.user.token),H((function(e){return Object(b.a)({},e,{isLoading:!1,isLoggedIn:!!A.user,currentUser:A.user||null})})))}),[A,H,t,a,Y]),Object(n.useEffect)((function(){z&&x(z)}),[z]);var $=function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,4),"password"===e.target.name?m(e.target.value):h(e.target.value)},X=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement(E.a,null,"login"===r?"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),c.a.createElement(s.s,{icon:"login"===r?c.a.createElement(v.a,null):c.a.createElement(y.a,null),header:"login"===r?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},c.a.createElement(s.d,null,w?c.a.createElement(s.f,{header:w.status,mode:"error"},w.message):null,c.a.createElement(s.e,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},c.a.createElement(s.i,{name:"password",type:"number",onChange:$,align:"center",value:i})),"login"!==r?c.a.createElement(s.e,{top:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},c.a.createElement(s.i,{type:"number",name:"confirmPassword",onChange:$,align:"center",value:g})):null,c.a.createElement(j.a,{size:"l",onClick:X},"login"===r?"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))),c.a.createElement(s.c,null,c.a.createElement(j.a,{stretched:!0,mode:"tertiary",onClick:function(e){Q({type:"SET_PANEL",payload:{panel:e.currentTarget.dataset.to}})},"data-to":"login"===r?"register":"login"},"login"===r?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")))},D=a(67),K=a.n(D),G=a(68),q=a.n(G),M=a(63),B=a.n(M),H=a(43),J=a.n(H),Y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],p=o[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),E=d[0],O=d[1],j=Object(n.useState)(""),g=Object(u.a)(j,2),v=g[0],h=g[1],y=Object(n.useState)(!1),C=Object(u.a)(y,2),S=C[0],k=C[1],w=Object(n.useState)(!0),x=Object(u.a)(w,2),T=x[0],R=x[1],I=Object(n.useState)(null),A=Object(u.a)(I,2),z=A[0],L=A[1],F=Object(n.useState)(""),N=Object(u.a)(F,2),U=N[0],V=N[1],D=_("/users/profile"),G=Object(u.a)(D,2),M=G[0].response,H=G[1],Y=_("/fns/password"),Z=Object(u.a)(Y,2),Q=Z[0],$=Z[1],X=Object(n.useState)(!1),ee=Object(u.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useContext)(W),ce=Object(u.a)(ne,2),re=ce[0],le=ce[1],oe=Object(n.useContext)(P),ie=Object(u.a)(oe,2)[1],ue=Object(s.B)();return Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":r(n.email),p(n.phone),console.log("profile",n);break;case"VKWebAppGetPersonalCardFailed":console.log("profile error",n)}}))}),[]),Object(n.useEffect)((function(){var e=re.currentUser,t=e.email,a=e.name,n=e.phone,c=e.password;r(t||""),O(a||""),p(n||""),h(c||""),R(!!t&&!!a&&!!n&&!!c)}),[re]),Object(n.useEffect)((function(){te&&(H({method:"PUT",update:{email:a,phone:m,name:E,kktPassword:v}}),ae(!1))}),[te,H,a,m,E,v]),Object(n.useEffect)((function(){if(S){var e={};"restore"!==U&&(e.name=E,e.email=a),e.params={type:U},e.phone=m.replace(/[ ()-]/g,""),e.phone=e.phone.replace(/^[8]/g,"+7"),e.method="POST",$(e),k(!1)}}),[S,U,$,E,a,m]),Object(n.useEffect)((function(){if(M){var e=M.user;e.name&&e.phone&&e.email&&e.password&&(le((function(e){return Object(b.a)({},e,{isLoading:!1,isLoggedIn:!!M.user,currentUser:M.user||null})})),ie({type:"SET_VIEW",payload:{view:"balance",panel:"home"}}))}}),[M,ie,le]),Object(n.useEffect)((function(){Q.response&&L(c.a.createElement(s.z,{layout:"vertical",onClose:function(){return L(null)},before:c.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--accent)"}},c.a.createElement(J.a,{fill:"#fff",width:14,height:14}))},Q.response.message))}),[Q.response]),c.a.createElement(n.Fragment,null,c.a.createElement(s.o,{left:T&&c.a.createElement(s.p,{onClick:function(){ie({type:"SET_VIEW",payload:{view:"balance",panel:"home"}})}},ue===s.h?c.a.createElement(K.a,null):c.a.createElement(q.a,null))},T?"\u041f\u0440\u043e\u0444\u0438\u043b\u044c":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),c.a.createElement(s.d,null,!T&&c.a.createElement(s.f,{header:"\u0420\u0430\u0437\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435",mode:"default"},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0447\u0435\u043a\u0430\u043c. \u041d\u0438 \u043a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0432\u0430\u0448\u0438\u0445 \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u0445 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u0443\u044e."),c.a.createElement(s.i,{type:"text",top:"\u0418\u043c\u044f",name:"name",value:E,onChange:function(e){O(e.target.value)}}),c.a.createElement(s.e,{top:"E-mail \u0438 \u0422\u0435\u043b\u0435\u0444\u043e\u043d",bottom:"\u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435. \u041e\u043d\u0438 \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421 \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438 \u0447\u0435\u043a\u043e\u0432."},c.a.createElement(s.i,{type:"email",top:"e-mail",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement(s.i,{type:"phone",top:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone",value:m,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",onChange:function(e){e.target.value.replace(/^[8]/,"+7"),p(e.target.value)}}),c.a.createElement(s.a,{size:"xl",onClick:function(){i.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK")),c.a.createElement(s.e,{top:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421",bottom:"\u0415\u0441\u043b\u0438 \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e \u043a\u0430\u043a\u0438\u043c \u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 0 \u0432 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043f\u0430\u0440\u043e\u043b\u044f"},c.a.createElement(s.i,{type:"number",top:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0424\u041d\u0421",name:"kktPassword",value:v,onChange:function(e){h(e.target.value)}}),c.a.createElement(s.c,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(s.a,{size:"l","data-type":"signup",onClick:function(e){V(e.currentTarget.dataset.type),k(!0)},style:{margin:"0px",width:"49%"}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),c.a.createElement(s.a,{size:"l","data-type":"restore",onClick:function(e){V(e.currentTarget.dataset.type),k(!0)},style:{margin:"0px",width:"49%"}},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"))),c.a.createElement(s.a,{size:"xl",mode:"commerce",onClick:function(){ae(!0)}},T?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e")),z)},Z=a(217),Q=a(218),$=function(){function e(){Object(Z.a)(this,e)}return Object(Q.a)(e,null,[{key:"qr",value:function(e){var t,a,n,c,r;if(console.log(e),e){var l=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),o=Object(u.a)(l,6);t=o[1],a=o[2],n=o[3],c=o[4],r=o[5]}return console.log(t,a,n,c,r),t&&a&&n&&c&&r?{dt:t,sum:a.replace(/[.]/g,""),fn:n,i:c,fp:r}:{error:{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f QR \u043a\u043e\u0434\u0430"}}}},{key:"date",value:function(e){var t,a=new Date(e);switch(a.getMonth()+1){case 1:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 2:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 3:t="\u043c\u0430\u0440\u0442\u0430";break;case 4:t="\u0430\u043f\u0440\u0435\u043b\u044f";break;case 5:t="\u043c\u0430\u044f";break;case 6:t="\u0438\u044e\u043d\u044f";break;case 7:t="\u0438\u044e\u043b\u044f";break;case 8:t="\u0430\u0432\u0433\u0443\u0441\u0442\u0430";break;case 9:t="\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";break;case 10:t="\u043e\u043a\u0442\u044f\u0431\u0440\u044f";break;case 11:t="\u043d\u043e\u044f\u0431\u0440\u044f";break;case 12:t="\u0434\u0435\u043a\u0430\u0431\u0440\u044f"}return"".concat(a.getDate()," ").concat(t," ").concat(a.getFullYear())}},{key:"sum",value:function(e){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e/100)}},{key:"totalReceiptSum",value:function(e){if(0===e.length)return 0;return e.map((function(e){return e.sum||e.totalSum})).reduce((function(e,t){return e+t}))}},{key:"totalSumWithParams",value:function(e){if(0===e.length)return 0;return e.map((function(e){var t=e.income,a=e.sum;return t?a:-1*a})).reduce((function(e,t){return e+t}))}},{key:"totalSum",value:function(e,t){if(0===e.length)return 0;var a=function(e,t){return e+t},n=e.map((function(e){return e.items.map((function(e){return t?e.income?e.sum:0:e.income?0:e.sum})).reduce(a)})).reduce(a);return t?n:-1*n}}]),e}(),X=function(e){var t=e.sum,a=e.fs,n=t>=0?{color:"#28a745",fontSize:a}:{color:"#dc3545",fontSize:a};return c.a.createElement("span",{style:n},$.sum(t))},ee=a(98),te=a.n(ee),ae=a(96),ne=a.n(ae),ce=a(219),re=a.n(ce),le=a(220),oe=a.n(le),ie=a(221),ue=a.n(ie),se=a(234),me=a(484),pe=a(485),fe=a(486),be=a(222),de=a.n(be),Ee=a(223),Oe=a.n(Ee),je=function(e){var t=e.setDateFromCalendar,a=Object(n.useState)(new Date),r=Object(u.a)(a,2),l=r[0],o=r[1];Object(n.useEffect)((function(){t(l)}),[l,t]);return c.a.createElement(s.g,null,c.a.createElement(s.j,null,c.a.createElement(s.b,{before:c.a.createElement(s.a,{onClick:function(){o(Object(me.a)(l,1))},mode:"secondary"},c.a.createElement(de.a,null)),asideContent:c.a.createElement(s.a,{onClick:function(){o(Object(se.a)(l,1))},mode:"secondary"},c.a.createElement(Oe.a,null)),style:{textAlign:"center",fontWeight:"bold"}},Object(pe.a)(l,"LLLL yyyy",{locale:fe.a}).toLocaleUpperCase())))},ge=a(224),ve=a.n(ge),he=a(225),ye=a.n(he),Ce=a(226),Se=a.n(Ce),ke=function(e){var t=e.before,a=e.onClick,n=void 0===a?function(){}:a,r=e.view,l=e.mode,o=e.title;return c.a.createElement(ne.a,{before:t,onClick:n,"data-view":r,"data-mode":l},o)},we=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(P),o=Object(u.a)(l,2)[1];Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppOpenPayFormResult":n.status&&console.log("\u041f\u043b\u0430\u0442\u0435\u0436 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d");break;case"VKWebAppOpenPayFormFailed":console.log("profile error",n)}}))}));var m=function(){r(!a)};return c.a.createElement(n.Fragment,null,c.a.createElement(E.a,null,c.a.createElement(s.q,{aside:c.a.createElement(ve.a,{style:{transform:"rotate(".concat(a?"180deg":"0",")")}}),onClick:m},"Balance")),c.a.createElement(s.r,{opened:a,onClose:m},c.a.createElement(s.j,null,c.a.createElement(ke,{before:c.a.createElement(ye.a,null),onClick:function(e){var t=e.currentTarget.dataset,a=t.view,n=t.mode;o({type:"SET_VIEW",payload:{view:a,panel:n}})},view:"profile",mode:"edit",title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),c.a.createElement(ke,{before:c.a.createElement(Se.a,null),onClick:function(){i.a.send("VKWebAppOpenPayForm",{app_id:7252987,action:"pay-to-user",params:{amount:100,description:"\u041d\u0430 \u043a\u043e\u0444\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443",user_id:3479465}})},view:"donation",mode:"donate",title:"\u041d\u0430 \u043a\u043e\u0444\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443"}))))},xe=a(232),Te=(a(480),a(97)),Pe=a.n(Te),Re=function(e){var t=e.items,a=e.id,r=e.isSearch,l=void 0!==r&&r,o=t.map((function(e,t){var a=e.income?e.sum:-1*e.sum;return console.log(),c.a.createElement(n.Fragment,{key:t},c.a.createElement("div",{className:"receipt-item",onClick:function(){}},c.a.createElement("span",{className:"receipt-item-name"},e.name),e.price&&!l?c.a.createElement("span",{className:"receipt-item-price"},$.sum(e.price)):null,e.quantity&&!l?c.a.createElement("span",{className:"receipt-item-quantity"},e.quantity):null,e.dateTime&&l?c.a.createElement("span",{className:"receipt-item-dateTime"},$.date(e.dateTime)):null,a?c.a.createElement("span",{className:"receipt-item-sum"},c.a.createElement(X,{sum:a})):null))}));return c.a.createElement(Pe.a,{id:a,className:"receipt-item-wrapper"},c.a.createElement("div",{className:"receipt-item"},c.a.createElement("span",{className:"receipt-item-name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),l?c.a.createElement("span",{className:"receipt-item-dateTime"},"\u0414\u0430\u0442\u0430"):c.a.createElement(n.Fragment,null,c.a.createElement("span",{className:"receipt-item-price"},"\u0426\u0435\u043d\u0430"),c.a.createElement("span",{className:"receipt-item-quantity"},"\u041a\u043e\u043b-\u0432\u043e")),c.a.createElement("span",{className:"receipt-item-sum"},"\u0421\u0443\u043c\u043c\u0430")),c.a.createElement(s.y,null),o,c.a.createElement(s.y,null),c.a.createElement("div",{className:"receipt-total"},c.a.createElement("span",{className:""},"\u0418\u0442\u043e\u0433\u043e:"),c.a.createElement("span",null,c.a.createElement(X,{sum:$.totalSumWithParams(t)}))))},_e=function(e){var t=e.receipts,a=Object(n.useState)(""),r=Object(u.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),p=m[0],f=m[1],b=Object(n.useState)([]),d=Object(u.a)(b,2),E=d[0],O=d[1];return Object(n.useEffect)((function(){if(t){var e=[];t.map((function(e){var t=e.dateTime;return e.items.map((function(e){return e.dateTime=t,e}))})).forEach((function(t){e.push.apply(e,Object(xe.a)(t))})),f(e)}}),[t]),Object(n.useEffect)((function(){O(l?p.filter((function(e){return e.name.toLowerCase().indexOf(l)>-1})):[])}),[l,p]),c.a.createElement(n.Fragment,null,c.a.createElement(s.x,{value:l,onChange:function(e){o(e.target.value.toLowerCase())}}),c.a.createElement(te.a,{title:"\u041f\u043e\u0438\u0441\u043a"},E.length>0&&c.a.createElement(Re,{id:E._id,isSearch:!0,items:E})))},Ie=function(e){var t=e.setReceiptFromBalance,a=e.onClickActiveModal,r=Object(n.useState)(!0),l=Object(u.a)(r,2),o=l[0],i=l[1],m=Object(n.useState)(new Date),p=Object(u.a)(m,2),f=p[0],b=p[1],d=Object(n.useState)([]),E=Object(u.a)(d,2),O=E[0],g=E[1],v=Object(n.useState)(!1),h=Object(u.a)(v,2),y=h[0],C=h[1],S=_("/day"),k=Object(u.a)(S,2),w=k[0].response,x=k[1],T=Object(n.useContext)(P),R=Object(u.a)(T,2)[1],I=Object(n.useCallback)((function(e){b(e),i(!0)}),[]);return Object(n.useEffect)((function(){o&&(x({params:{date:Object(pe.a)(f,"yyyy-MM-dd")}}),i(!1),C(!1))}),[o,i,x,f]),Object(n.useEffect)((function(){w&&g(w)}),[w,t]),c.a.createElement(n.Fragment,null,c.a.createElement(we,{title:"\u0411\u0430\u043b\u0430\u043d\u0441"}),c.a.createElement(_e,{receipts:O}),c.a.createElement(s.s,{icon:c.a.createElement(re.a,null),header:c.a.createElement(X,{sum:$.totalReceiptSum(O),fs:"2em"}),action:c.a.createElement(j.a,{size:"l",onClick:function(e){R({type:"SET_PANEL",payload:{panel:e.currentTarget.dataset.to}})},"data-to":"add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434 / \u0440\u0430\u0441\u0445\u043e\u0434")},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u043e\u0445\u043e\u0434\u044b/\u0440\u0430\u0441\u0445\u043e\u0434\u044b"),c.a.createElement(s.y,null),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:"1em"}},c.a.createElement("div",{style:{flex:"0 1 50%",display:"flex",justifyContent:"flex-end"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingRight:"10px"}},c.a.createElement("span",{style:{color:"#6F6F6F",fontSize:"0.7em",textAlign:"end"}},"\u0414\u043e\u0445\u043e\u0434\u044b"),c.a.createElement(X,{sum:$.totalSum(O,!0),fs:"1.4em"})),c.a.createElement(oe.a,{width:16,height:40,fill:"#28a745"})),c.a.createElement("div",{style:{flex:"0 1 50%",display:"flex",justifyContent:"flex-start"}},c.a.createElement(ue.a,{width:16,height:40,fill:"#dc3545"}),c.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"10px"}},c.a.createElement("span",{style:{color:"#6F6F6F",fontSize:"0.7em"}},"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),c.a.createElement(X,{sum:$.totalSum(O,!1),fs:"1.4em"})))),c.a.createElement(s.u,{onRefresh:function(){C(!0),i(!0)},isFetching:y},c.a.createElement(te.a,{title:"\u0427\u0435\u043a\u0438"},c.a.createElement(s.j,null,c.a.createElement(je,{setDateFromCalendar:I}),O.map((function(e,n){return c.a.createElement(ne.a,{key:n,expandable:!0,onClick:function(){a("modal-page"),t(e)},"data-to":e._id,indicator:c.a.createElement(X,{sum:e.totalSum})},$.date(e.dateTime))}))))))},Ae=a(83),ze=a.n(Ae),Le=a(70),Fe=a.n(Le),Ne=a(230),We=a.n(Ne),Ue=a(227),Ve=a.n(Ue),De=a(229),Ke=a.n(De),Ge=a(228),qe=a.n(Ge),Me=function(e){var t=e.message,a=e.isError,r=Object(n.useState)(null),l=Object(u.a)(r,2),o=l[0],i=l[1],m=Object(n.useContext)(P),p=Object(u.a)(m,2)[1];return Object(n.useEffect)((function(){i(c.a.createElement(s.z,{layout:"vertical",onClose:function(){p({type:"UNSET_ERROR"}),i(null)},before:a?c.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--destructive)"}},c.a.createElement(qe.a,{fill:"#fff",width:18,height:18})):c.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--accent)"}},c.a.createElement(J.a,{fill:"#fff",width:18,height:18}))},t))}),[i,p,a,t]),o},Be=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)((function(){var e=new Date,t=e.getMonth()+1>9?e.getMonth()+1:"0".concat(e.getMonth()+1),a=e.getDate()>9?e.getDate():"0".concat(e.getDate());return"".concat(e.getFullYear(),"-").concat(t,"-").concat(a)})),o=Object(u.a)(l,2),m=o[0],p=o[1],f=Object(n.useState)(1),d=Object(u.a)(f,2),O=d[0],g=d[1],v=Object(n.useState)(""),h=Object(u.a)(v,2),y=h[0],C=h[1],S=Object(n.useState)(!1),k=Object(u.a)(S,2),w=k[0],x=k[1],T=Object(n.useState)(null),R=Object(u.a)(T,2),I=R[0],A=R[1],z=Object(n.useState)(null),L=Object(u.a)(z,2),F=L[0],N=L[1],W=Object(n.useContext)(P),U=Object(u.a)(W,2),V=U[0],D=U[1],G=_("/day"),M=Object(u.a)(G,2),B=M[0],H=B.response,J=B.error,Y=M[1],Z=_("/day/receipt"),Q=Object(u.a)(Z,2),X=Q[0],ee=Q[1],te=Object(n.useState)(!1),ae=Object(u.a)(te,2),ne=ae[0],ce=ae[1],re=Object(n.useState)(!1),le=Object(u.a)(re,2),oe=le[0],ie=le[1],ue=Object(s.B)();return Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppOpenCodeReaderResult":N(n.code_data);break;case"VKWebAppOpenCodeReaderFailed":console.log("add day error",n)}}))}),[]),Object(n.useEffect)((function(){ne&&(Y({method:"POST",date:m,items:[{name:a,quantity:O,price:100*y,sum:100*y*O,income:w,modifiers:[],properties:[]}]}),r(""),g(1),x(!1),C(""),ce(!1))}),[ne,ce,m,Y,w,a,y,O]),Object(n.useEffect)((function(){H&&A(c.a.createElement(Me,{message:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",isError:!1}))}),[H]),Object(n.useEffect)((function(){if(F){var e=$.qr(F);if(console.log(e),e.error){var t=e.error;return D({type:"SET_ERROR",payload:{error:t}}),N(null),void ie(!1)}var a=oe?"receive":"check",n=Object(b.a)({method:"POST"},e,{params:{action:a}});ee(n)}}),[F,ee,oe,D]),Object(n.useEffect)((function(){if(X.response){if(ie(X.response.check),202===X.response.statusCode){var e=Object(b.a)({method:"POST"},$.qr(F),{params:{action:"receive"}});ee(e)}X.response._id&&(A(c.a.createElement(Me,{message:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",isError:!1})),ie(!1),N(null))}}),[X.response,ee,F]),Object(n.useEffect)((function(){V.error&&(D({type:"SET_ERROR",payload:{error:X.error||J}}),A(c.a.createElement(Me,{message:V.error.message,isError:!0})),ie(!1),N(null))}),[X.error,J,D,V.error]),c.a.createElement(n.Fragment,null,c.a.createElement(E.a,{left:c.a.createElement(Fe.a,{key:"back",onClick:function(e){D({type:"SET_PANEL",payload:{panel:e.currentTarget.dataset.to}})},"data-to":"home"},ue===s.h?c.a.createElement(K.a,null):c.a.createElement(q.a,null))},c.a.createElement(Ke.a,{before:i.a.supports("VKWebAppOpenCodeReader")&&c.a.createElement(Fe.a,{key:"qr","data-to":"qr",onClick:function(){D({type:"UNSET_ERROR"}),i.a.send("VKWebAppOpenCodeReader",{})}},c.a.createElement(Ve.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438")),c.a.createElement(Pe.a,null,c.a.createElement(ze.a,{type:"date",top:"\u0414\u0430\u0442\u0430",name:"date",value:m,onChange:function(e){p(e.currentTarget.value)}}),c.a.createElement(ze.a,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:a,onChange:function(e){r(e.currentTarget.value)}}),c.a.createElement(ze.a,{type:"number",top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",name:"quantity",value:O,onChange:function(e){g(e.currentTarget.value)}}),c.a.createElement(ze.a,{type:"number",top:"\u0426\u0435\u043d\u0430",name:"price",value:y,onChange:function(e){C(e.currentTarget.value)}}),c.a.createElement(We.a,{name:"income",checked:w,onChange:function(e){x(e.currentTarget.checked)}},"\u0414\u043e\u0445\u043e\u0434"),c.a.createElement(j.a,{size:"xl",disabled:!m||!a||!O||!y,mode:w?"commerce":"destructive",onClick:function(){ce(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",w?"\u0434\u043e\u0445\u043e\u0434":"\u0440\u0430\u0441\u0445\u043e\u0434")),I)},He=function(e){var t=e.receipt;return c.a.createElement(s.j,null,c.a.createElement(Re,{id:t._id,dateTime:t.dateTime,items:t.items}))},Je=a(81),Ye=a.n(Je),Ze=a(231),Qe=a.n(Ze),$e=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],p=o[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),E=d[0],O=d[1],j=Object(n.useState)(""),g=Object(u.a)(j,2),v=g[0],h=g[1],y=Object(n.useState)(0),C=Object(u.a)(y,2),S=C[0],k=C[1],w=Object(n.useState)(""),x=Object(u.a)(w,2),T=x[0],R=x[1],I=Object(n.useState)(!1),A=Object(u.a)(I,2),z=A[0],L=A[1],F=Object(n.useContext)(P),N=Object(u.a)(F,2)[1],U=_("/users/profile"),V=Object(u.a)(U,2),D=V[0].response,G=V[1],M=_("/fns/password"),H=Object(u.a)(M,2),Y=H[0],Z=H[1],Q=Object(n.useState)(!1),$=Object(u.a)(Q,2),X=$[0],ee=$[1],te=Object(n.useContext)(W),ae=Object(u.a)(te,2)[1],ne=Object(n.useState)(null),ce=Object(u.a)(ne,2),re=ce[0],le=ce[1],oe=Object(s.B)();Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":r(n.email),p(n.phone);break;case"VKWebAppGetPersonalCardFailed":console.log("profile error",n)}}))}),[]),Object(n.useEffect)((function(){X&&(G({method:"PUT",update:{email:a,phone:m,name:E,kktPassword:v}}),ee(!1))}),[X,G,a,m,E,v]),Object(n.useEffect)((function(){if(z){var e={};"restore"!==T&&(e.name=E,e.email=a),e.params={type:T},e.phone=m.replace(/[ ()-]/g,""),e.phone=e.phone.replace(/^[8]/g,"+7"),e.method="POST",Z(e),L(!1)}}),[z,T,Z,E,a,m]),Object(n.useEffect)((function(){if(D){var e=D.user;e.name&&e.phone&&e.email&&e.password&&(ae((function(e){return Object(b.a)({},e,{isLoading:!1,isLoggedIn:!!D.user,currentUser:D.user||null})})),N({type:"SET_VIEW",payload:{view:"balance",panel:"home"}}))}}),[D,N,ae]),Object(n.useEffect)((function(){Y.response&&le(c.a.createElement(s.z,{layout:"vertical",onClose:function(){return le(null)},before:c.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--accent)"}},c.a.createElement(J.a,{fill:"#fff",width:14,height:14}))},Y.response.message))}),[Y.response]);return c.a.createElement(n.Fragment,null,c.a.createElement(s.o,{left:c.a.createElement(s.p,{onClick:function(){N({type:"SET_VIEW",payload:{view:"balance",panel:"home"}})}},oe===s.h?c.a.createElement(K.a,null):c.a.createElement(q.a,null))},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f(",S+1,"/3)"),c.a.createElement(s.d,null,function(e){switch(e){case 0:return c.a.createElement(s.e,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f"},c.a.createElement(s.i,{type:"text",top:"\u0418\u043c\u044f",name:"name",value:E,onChange:function(e){O(e.target.value)}}),c.a.createElement(s.a,{size:"xl",mode:"commerce",disabled:!E,onClick:function(){k(1)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"));case 1:return c.a.createElement(s.e,{top:"E-mail \u0438 \u0422\u0435\u043b\u0435\u0444\u043e\u043d",bottom:"\u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435. \u041e\u043d\u0438 \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421 \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438 \u0447\u0435\u043a\u043e\u0432."},c.a.createElement(s.i,{type:"email",top:"e-mail",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement(s.i,{type:"phone",top:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone",value:m,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",onChange:function(e){e.target.value.replace(/^[8]/,"+7"),p(e.target.value)}}),c.a.createElement(s.a,{size:"xl",onClick:function(){i.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK"),c.a.createElement(s.a,{size:"xl",mode:"commerce",disabled:!a||!m,onClick:function(){k(2)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"));case 2:return c.a.createElement(s.e,{top:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421",bottom:"\u0415\u0441\u043b\u0438 \u0412\u044b, \u043f\u043e \u043a\u0430\u043a\u0438\u043c \u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c, \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c - \u0432\u0432\u0435\u0434\u0438\u0442\u0435 0 \u0432 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043f\u0430\u0440\u043e\u043b\u044f"},c.a.createElement(s.i,{type:"number",top:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0424\u041d\u0421",name:"kktPassword",value:v,onChange:function(e){h(e.target.value)}}),c.a.createElement(s.c,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(s.a,{size:"l","data-type":"signup",onClick:function(e){R(e.currentTarget.dataset.type),L(!0)},style:{margin:"0px",width:"49%"}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),c.a.createElement(s.a,{size:"l","data-type":"restore",onClick:function(e){R(e.currentTarget.dataset.type),L(!0)},style:{margin:"0px",width:"49%"}},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c")),c.a.createElement(s.a,{size:"xl",mode:"commerce",disabled:!a&&!m,onClick:function(){ee(!0)}},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"));default:return}}(S)),re)},Xe=function(){var e=Object(n.useContext)(P),t=Object(u.a)(e,1)[0],a=Object(n.useState)(null),r=Object(u.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)(null),m=Object(u.a)(i,2),p=m[0],f=m[1],b=Object(n.useState)(null),d=Object(u.a)(b,2),E=d[0],O=d[1],j=Object(n.useCallback)((function(){o(null)}),[]);return Object(n.useEffect)((function(){if(E){var e=Object(s.B)();f(c.a.createElement(s.m,{activeModal:l,onClose:j},c.a.createElement(s.k,{id:"modal-page",onClose:j,header:c.a.createElement(s.l,{left:e!==s.h&&c.a.createElement(Fe.a,{onClick:j},c.a.createElement(Ye.a,null)),right:e===s.h&&c.a.createElement(Fe.a,{onClick:j},e===s.h?"\u0413\u043e\u0442\u043e\u0432\u043e":c.a.createElement(Qe.a,null))},$.date(E.dateTime))},c.a.createElement(He,{onClose:j,receipt:E}))))}}),[E,l,j]),c.a.createElement(s.v,{activeView:t.view,popout:t.popout,modal:p,onTransition:null},c.a.createElement(s.A,{id:"authorization",activePanel:t.panel},c.a.createElement(s.n,{id:"authorization.login"},c.a.createElement(V,{type:"login"})),c.a.createElement(s.n,{id:"authorization.register"},c.a.createElement(V,{type:"register"}))),c.a.createElement(s.A,{id:"profile",activePanel:t.panel},c.a.createElement(s.n,{id:"profile.edit"},c.a.createElement(Y,null))),c.a.createElement(s.A,{id:"registration",activePanel:t.panel},c.a.createElement(s.n,{id:"registration.finish"},c.a.createElement($e,null))),c.a.createElement(s.A,{id:"balance",activePanel:t.panel},c.a.createElement(s.n,{id:"balance.home"},c.a.createElement(Ie,{setReceiptFromBalance:O,onClickActiveModal:o})),c.a.createElement(s.n,{id:"balance.add"},c.a.createElement(Be,null))))},et=function(e){var t=e.children,a=_("/users/profile"),c=Object(u.a)(a,2),r=c[0].response,l=c[1],o=Object(n.useContext)(W),i=Object(u.a)(o,2)[1],s=Object(n.useContext)(F),m=Object(u.a)(s,1)[0],p=m.vkUserId,f=m.matchUrlParams,d=S("token"),E=Object(u.a)(d,1)[0];return Object(n.useEffect)((function(){E&&f?(l(),i((function(e){return Object(b.a)({},e,{isLoading:!0})}))):i((function(e){return Object(b.a)({},e,{isLoggedIn:!1})}))}),[l,i,E,f]),Object(n.useEffect)((function(){if(r){var e=r.user.vk_id.toString()===p?r.user:null;i((function(t){return Object(b.a)({},t,{isLoading:!1,isLoggedIn:!!e,currentUser:e})}))}}),[r,i,p]),t};i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),i.a.send("VKWebAppInit"),window.onload=function(){l.a.render(c.a.createElement(N,null,c.a.createElement(R,null,c.a.createElement(U,null,c.a.createElement(et,null,c.a.createElement(Xe,null))))),document.getElementById("root"))}}},[[283,1,2]]]);
//# sourceMappingURL=main.0abbd84f.chunk.js.map