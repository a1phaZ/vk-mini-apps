(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{284:function(e,t,a){e.exports=a(483)},390:function(e,t){},392:function(e,t){},425:function(e,t){},426:function(e,t){},481:function(e,t,a){},483:function(e,t,a){"use strict";a.r(t);a(285),a(311),a(313),a(314),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352),a(353);var n=a(51),c=a.n(n),r=a(66),l=a(0),o=a.n(l),u=a(205),i=a.n(u),s=a(29),m=a.n(s),f=a(3),p=(a(362),a(5)),d=a(30),b=a(67),E=a.n(b),O=a(63),j=a.n(O),v=a(213),g=a.n(v),h=a(214),y=a.n(h),S=a(234),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(l.useState)((function(){return localStorage.getItem(e)||t})),n=Object(f.a)(a,2),c=n[0],r=n[1];return Object(l.useEffect)((function(){localStorage.setItem(e,c)}),[c,e]),[c,r]},C=a(215),w=a.n(C),T={view:"authorization",panel:"authorization.login",popout:null,error:null},x=function(e,t){switch(t.type){case"SET_VIEW":return Object(d.a)({},e,{view:t.payload.view,panel:"".concat(t.payload.view,".").concat(t.payload.panel)});case"SET_PANEL":return Object(d.a)({},e,{panel:"".concat(e.view,".").concat(t.payload.panel)});case"SHOW_LOADING":return Object(d.a)({},e,{popout:o.a.createElement(p.t,null,o.a.createElement(p.w,null))});case"HIDE_LOADING":return Object(d.a)({},e,{popout:null});case"SET_ERROR":return Object(d.a)({},e,{error:t.payload.error});case"UNSET_ERROR":return Object(d.a)({},e,{error:null});default:return e}},R=Object(l.createContext)(),_=function(e){var t=e.children,a=Object(l.useReducer)(x,T);return o.a.createElement(R.Provider,{value:a},t)},I=function(e){var t=Object(l.useState)(!1),a=Object(f.a)(t,2),n=a[0],o=a[1],u=Object(l.useState)(null),i=Object(f.a)(u,2),s=i[0],m=i[1],p=Object(l.useState)(null),d=Object(f.a)(p,2),b=d[0],E=d[1],O=Object(l.useState)({}),j=Object(f.a)(O,2),v=j[0],g=j[1],h=k("token"),y=Object(f.a)(h,1)[0],C=Object(l.useContext)(R),T=Object(f.a)(C,2)[1],x="https://balance.z-labz.ru:8080/api",_=Object(l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(e),o(!0),T({type:"SHOW_LOADING"})}),[T]),I=v.method,A=void 0===I?"GET":I,P=v.params,N=Object(S.a)(v,["method","params"]);return Object(l.useEffect)((function(){if(n){var t={"Content-Type":"application/json",Authorization:y?"Token ".concat(y):""},a=P?w.a.stringify(P):null,l=a?"".concat(x).concat(e,"?").concat(a):"".concat(x).concat(e);(function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l,{method:A,mode:"cors",headers:t,body:"GET"!==A?JSON.stringify(N):null}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){o(!1),T({type:"HIDE_LOADING"}),m(e)})).catch((function(e){o(!1),T({type:"HIDE_LOADING"}),T({type:"SET_ERROR",payload:{error:e}}),E(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),[n,N,A,e,x,y,P,T]),[{isLoading:n,response:s,error:b},_]},A=a(134),P=a.n(A),N=a(216),L=a.n(N),F=Object(l.createContext)([{},function(){}]),U=function(e){var t=e.children,a=function(){var e=Object(l.useState)(""),t=Object(f.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(!1),r=Object(f.a)(c,2),o=r[0],u=r[1],i=Object(l.useState)(null),s=Object(f.a)(i,2),m=s[0],p=s[1],d=Object(l.useState)(!1),b=Object(f.a)(d,2),E=b[0],O=b[1];return Object(l.useEffect)((function(){if(o){var e=P.a.parse(a);if(e){p(e.vk_user_id);var t={};Object.keys(e).sort().forEach((function(a){"vk_"===a.slice(0,3)&&(t[a]=e[a])}));var n=P.a.stringify(t),c=L.a.createHmac("sha256","Zs6DYRE8Z2mZ44LfciKW").update(n).digest().toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=$/,"");O(c===e.sign)}}}),[o,a]),[{vkUserId:m,matchUrlParams:E},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(e),u(!0)}]}(),n=Object(f.a)(a,2),c=n[0],r=c.vkUserId,u=c.matchUrlParams,i=n[1],s=Object(l.useState)({vkUserId:null,matchUrlParams:!1}),m=Object(f.a)(s,2),p=m[0],d=m[1];return Object(l.useEffect)((function(){i(window.location.search.slice(1))}),[i]),Object(l.useEffect)((function(){r&&d({vkUserId:r,matchUrlParams:u})}),[r,u]),o.a.createElement(F.Provider,{value:[p,d]},t)},W=Object(l.createContext)([{},function(e){}]),z=function(e){var t=e.children,a=Object(l.useState)({isLoading:!1,isLoggedIn:null,currentUser:null}),n=Object(f.a)(a,2),c=n[0],r=n[1];return o.a.createElement(W.Provider,{value:[c,r]},t)},D=function(e){var t=e.go,a=e.goView,n=e.type,u=Object(l.useState)(""),i=Object(f.a)(u,2),s=i[0],m=i[1],b=Object(l.useState)(""),O=Object(f.a)(b,2),v=O[0],h=O[1],S=Object(l.useState)(null),C=Object(f.a)(S,2),w=C[0],T=C[1],x=I("/users/".concat(n)),_=Object(f.a)(x,2),A=_[0],P=A.response,N=A.error,L=_[1],U=Object(l.useContext)(F),z=Object(f.a)(U,1)[0].vkUserId,D=Object(l.useState)(!1),V=Object(f.a)(D,2),K=V[0],q=V[1],M=Object(l.useContext)(W),G=Object(f.a)(M,2),B=G[0],H=G[1],J=k("token"),Y=Object(f.a)(J,2)[1],Z=Object(l.useContext)(R),Q=Object(f.a)(Z,2)[1];Object(l.useEffect)((function(){if(B.isLoggedIn){var e=B.currentUser,t=e.name,a=e.phone,n=e.email,c=e.password;Q(t&&a&&n&&c?{type:"SET_VIEW",payload:{view:"balance",panel:"home"}}:{type:"SET_VIEW",payload:{view:"profile",panel:"edit"}})}}),[B,Q]),Object(l.useEffect)((function(){"login"!==n&&(s.length===v.length?s!==v&&T({status:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0432\u043e\u0434 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443."}):T(null))}),[s,v,n]),Object(l.useEffect)((function(){K&&(L({method:"POST",user:{id:+z,password:s}}),q(!1))}),[K,L,s,z]),Object(l.useEffect)((function(){P&&(!P.user&&P.error?T(P.error):Y(P.user.token),H((function(e){return Object(d.a)({},e,{isLoading:!1,isLoggedIn:!!P.user,currentUser:P.user||null})})))}),[P,H,t,a,Y]),Object(l.useEffect)((function(){N&&T(N)}),[N]);var $=function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,4),"password"===e.target.name?m(e.target.value):h(e.target.value)},X=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(l.Fragment,null,o.a.createElement(E.a,null,"login"===n?"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement(p.s,{icon:"login"===n?o.a.createElement(g.a,null):o.a.createElement(y.a,null),header:"login"===n?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},o.a.createElement(p.d,null,w?o.a.createElement(p.f,{header:w.status,mode:"error"},w.message):null,o.a.createElement(p.e,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},o.a.createElement(p.i,{name:"password",type:"number",onChange:$,align:"center",value:s})),"login"!==n?o.a.createElement(p.e,{top:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},o.a.createElement(p.i,{type:"number",name:"confirmPassword",onChange:$,align:"center",value:v})):null,o.a.createElement(j.a,{size:"l",onClick:X},"login"===n?"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))),o.a.createElement(p.c,null,o.a.createElement(j.a,{stretched:!0,mode:"tertiary",onClick:function(e){Q({type:"SET_PANEL",payload:{panel:e.currentTarget.dataset.to}})},"data-to":"login"===n?"register":"login"},"login"===n?"\u041d\u0435\u0442 \u043f\u0430\u0440\u043e\u043b\u044f?":"\u0415\u0441\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c?")))},V=a(93),K=a.n(V),q=a(94),M=a.n(q),G=a(81),B=a.n(G),H=a(50),J=a.n(H),Y=function(){var e=Object(l.useState)(""),t=Object(f.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(""),r=Object(f.a)(c,2),u=r[0],i=r[1],s=Object(l.useState)(""),b=Object(f.a)(s,2),E=b[0],O=b[1],j=Object(l.useState)(""),v=Object(f.a)(j,2),g=v[0],h=v[1],y=Object(l.useState)(!1),S=Object(f.a)(y,2),k=S[0],C=S[1],w=Object(l.useState)(!0),T=Object(f.a)(w,2),x=T[0],_=T[1],A=Object(l.useState)(null),P=Object(f.a)(A,2),N=P[0],L=P[1],F=Object(l.useState)(""),U=Object(f.a)(F,2),z=U[0],D=U[1],V=I("/users/profile"),q=Object(f.a)(V,2),G=q[0].response,H=q[1],Y=I("/fns/password"),Z=Object(f.a)(Y,2),Q=Z[0],$=Z[1],X=Object(l.useState)(!1),ee=Object(f.a)(X,2),te=ee[0],ae=ee[1],ne=Object(l.useContext)(W),ce=Object(f.a)(ne,2),re=ce[0],le=ce[1],oe=Object(l.useContext)(R),ue=Object(f.a)(oe,2)[1],ie=Object(p.B)();return Object(l.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,c=t.data;switch(a){case"VKWebAppGetPersonalCardResult":n(c.email),i(c.phone),console.log("profile",c);break;case"VKWebAppGetPersonalCardFailed":console.log("profile error",c)}}))}),[]),Object(l.useEffect)((function(){var e=re.currentUser,t=e.email,a=e.name,c=e.phone,r=e.password;n(t||""),O(a||""),i(c||""),h(r||""),_(!!t&&!!a&&!!c&&!!r)}),[re]),Object(l.useEffect)((function(){te&&(H({method:"PUT",update:{email:a,phone:u,name:E,kktPassword:g}}),ae(!1))}),[te,H,a,u,E,g]),Object(l.useEffect)((function(){if(k){var e={};"restore"!==z&&(e.name=E,e.email=a),e.params={type:z},e.phone=u.replace(/[ ()-]/g,""),e.method="POST",$(e),C(!1)}}),[k,z,$,E,a,u]),Object(l.useEffect)((function(){if(G){var e=G.user;e.name&&e.phone&&e.email&&e.password&&(le((function(e){return Object(d.a)({},e,{isLoading:!1,isLoggedIn:!!G.user,currentUser:G.user||null})})),ue({type:"SET_VIEW",payload:{view:"balance",panel:"home"}}))}}),[G,ue,le]),Object(l.useEffect)((function(){Q.response&&L(o.a.createElement(p.z,{layout:"vertical",onClose:function(){return L(null)},before:o.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--accent)"}},o.a.createElement(J.a,{fill:"#fff",width:14,height:14}))},Q.response.message))}),[Q.response]),o.a.createElement(l.Fragment,null,o.a.createElement(p.o,{left:x&&o.a.createElement(p.p,{onClick:function(){ue({type:"SET_VIEW",payload:{view:"balance",panel:"home"}})}},ie===p.h?o.a.createElement(K.a,null):o.a.createElement(M.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement(p.d,null,k&&o.a.createElement(p.f,{header:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d",mode:"default"},"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0438\u0434\u0442\u0438 \u043a \u0432\u0430\u043c \u0432 \u0441\u043c\u0441. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043f\u043e\u043b\u0435. \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043f\u0440\u0438\u0448\u0435\u043b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435."),o.a.createElement(p.i,{type:"text",top:"\u0418\u043c\u044f",name:"name",value:E,onChange:function(e){O(e.target.value)}}),o.a.createElement(p.e,{top:"E-mail \u0438 \u0422\u0435\u043b\u0435\u0444\u043e\u043d",bottom:"\u042d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435. \u041e\u043d\u0438 \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421 \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438 \u0447\u0435\u043a\u043e\u0432."},o.a.createElement(p.i,{type:"email",top:"e-mail",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",value:a,onChange:function(e){n(e.target.value)}}),o.a.createElement(p.i,{type:"phone",top:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone",value:u,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",onChange:function(e){i(e.target.value)}}),o.a.createElement(p.a,{size:"xl",onClick:function(){m.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK")),o.a.createElement(p.e,{top:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421"},o.a.createElement(p.i,{type:"number",top:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 \u0424\u041d\u0421",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0424\u041d\u0421",name:"kktPassword",value:g,onChange:function(e){h(e.target.value)}}),o.a.createElement(p.c,{style:{display:"flex"}},o.a.createElement(p.a,{size:"l","data-type":"signup",onClick:function(e){D(e.currentTarget.dataset.type),C(!0)}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),o.a.createElement(p.a,{size:"l","data-type":"restore",onClick:function(e){D(e.currentTarget.dataset.type),C(!0)}},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"))),o.a.createElement(p.a,{size:"xl",mode:"commerce",onClick:function(){ae(!0)}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")),N)},Z=a(217),Q=a(218),$=function(){function e(){Object(Z.a)(this,e)}return Object(Q.a)(e,null,[{key:"qr",value:function(e){var t,a,n,c,r;if(e){var l=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),o=Object(f.a)(l,6);t=o[1],a=o[2],n=o[3],c=o[4],r=o[5]}return t&&a&&n&&c&&r?{dt:t,sum:a.replace(/[.]/g,""),fn:n,i:c,fp:r}:{error:{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f QR \u043a\u043e\u0434\u0430"}}}},{key:"date",value:function(e){var t,a=new Date(e);switch(a.getMonth()+1){case 1:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 2:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 3:t="\u043c\u0430\u0440\u0442\u0430";break;case 4:t="\u0430\u043f\u0440\u0435\u043b\u044f";break;case 5:t="\u043c\u0430\u044f";break;case 6:t="\u0438\u044e\u043d\u044f";break;case 7:t="\u0438\u044e\u043b\u044f";break;case 8:t="\u0430\u0432\u0433\u0443\u0441\u0442\u0430";break;case 9:t="\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";break;case 10:t="\u043e\u043a\u0442\u044f\u0431\u0440\u044f";break;case 11:t="\u043d\u043e\u044f\u0431\u0440\u044f";break;case 12:t="\u0434\u0435\u043a\u0430\u0431\u0440\u044f"}return"".concat(a.getDate()," ").concat(t," ").concat(a.getFullYear())}},{key:"sum",value:function(e){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e/100)}},{key:"totalReceiptSum",value:function(e){if(0===e.length)return 0;return e.map((function(e){return e.sum||e.totalSum})).reduce((function(e,t){return e+t}))}},{key:"totalSumWithParams",value:function(e){if(0===e.length)return 0;return e.map((function(e){var t=e.income,a=e.sum;return t?a:-1*a})).reduce((function(e,t){return e+t}))}},{key:"totalSum",value:function(e,t){if(0===e.length)return 0;var a=function(e,t){return e+t},n=e.map((function(e){return e.items.map((function(e){return t?e.income?e.sum:0:e.income?0:e.sum})).reduce(a)})).reduce(a);return t?n:-1*n}}]),e}(),X=function(e){var t=e.sum,a=e.fs,n=t>=0?{color:"#28a745",fontSize:a}:{color:"#dc3545",fontSize:a};return o.a.createElement("span",{style:n},$.sum(t))},ee=a(98),te=a.n(ee),ae=a(96),ne=a.n(ae),ce=a(219),re=a.n(ce),le=a(220),oe=a.n(le),ue=a(221),ie=a.n(ue),se=a(235),me=a(485),fe=a(486),pe=a(487),de=a(222),be=a.n(de),Ee=a(223),Oe=a.n(Ee),je=function(e){var t=e.setDateFromCalendar,a=Object(l.useState)(new Date),n=Object(f.a)(a,2),c=n[0],r=n[1];Object(l.useEffect)((function(){t(c)}),[c,t]);return o.a.createElement(p.g,null,o.a.createElement(p.j,null,o.a.createElement(p.b,{before:o.a.createElement(p.a,{onClick:function(){r(Object(me.a)(c,1))},mode:"secondary"},o.a.createElement(be.a,null)),asideContent:o.a.createElement(p.a,{onClick:function(){r(Object(se.a)(c,1))},mode:"secondary"},o.a.createElement(Oe.a,null)),style:{textAlign:"center",fontWeight:"bold"}},Object(fe.a)(c,"LLLL yyyy",{locale:pe.a}).toLocaleUpperCase())))},ve=a(224),ge=a.n(ve),he=a(225),ye=a.n(he),Se=a(226),ke=a.n(Se),Ce=function(e){var t=e.before,a=e.onClick,n=void 0===a?function(){}:a,c=e.view,r=e.mode,l=e.title;return o.a.createElement(ne.a,{before:t,onClick:n,"data-view":c,"data-mode":r},l)},we=function(){var e=Object(l.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1],c=Object(l.useContext)(R),r=Object(f.a)(c,2)[1];Object(l.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppOpenPayFormResult":n.status&&console.log("\u041f\u043b\u0430\u0442\u0435\u0436 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d");break;case"VKWebAppOpenPayFormFailed":console.log("profile error",n)}}))}));var u=function(){n(!a)};return o.a.createElement(l.Fragment,null,o.a.createElement(E.a,null,o.a.createElement(p.q,{aside:o.a.createElement(ge.a,{style:{transform:"rotate(".concat(a?"180deg":"0",")")}}),onClick:u},"Balance")),o.a.createElement(p.r,{opened:a,onClose:u},o.a.createElement(p.j,null,o.a.createElement(Ce,{before:o.a.createElement(ye.a,null),onClick:function(e){var t=e.currentTarget.dataset,a=t.view,n=t.mode;r({type:"SET_VIEW",payload:{view:a,panel:n}})},view:"profile",mode:"edit",title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),o.a.createElement(Ce,{before:o.a.createElement(ke.a,null),onClick:function(){m.a.send("VKWebAppOpenPayForm",{app_id:7252987,action:"pay-to-user",params:{amount:100,description:"\u041d\u0430 \u043a\u043e\u0444\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443",user_id:3479465}})},view:"donation",mode:"donate",title:"\u041d\u0430 \u043a\u043e\u0444\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443"}))))},Te=a(233),xe=(a(481),a(97)),Re=a.n(xe),_e=function(e){var t=e.items,a=e.id,n=e.isSearch,c=void 0!==n&&n,r=t.map((function(e,t){var a=e.income?e.sum:-1*e.sum;return o.a.createElement("div",{key:t,className:"receipt-item"},o.a.createElement("span",{className:"receipt-item-name"},e.name),e.price&&!c?o.a.createElement("span",{className:"receipt-item-price"},$.sum(e.price)):null,e.quantity&&!c?o.a.createElement("span",{className:"receipt-item-quantity"},e.quantity):null,e.dateTime&&c?o.a.createElement("span",{className:"receipt-item-dateTime"},$.date(e.dateTime)):null,a?o.a.createElement("span",{className:"receipt-item-sum"},o.a.createElement(X,{sum:a})):null)}));return o.a.createElement(Re.a,{id:a,className:"receipt-item-wrapper"},o.a.createElement("div",{className:"receipt-item"},o.a.createElement("span",{className:"receipt-item-name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),c?o.a.createElement("span",{className:"receipt-item-dateTime"},"\u0414\u0430\u0442\u0430"):o.a.createElement(l.Fragment,null,o.a.createElement("span",{className:"receipt-item-price"},"\u0426\u0435\u043d\u0430"),o.a.createElement("span",{className:"receipt-item-quantity"},"\u041a\u043e\u043b-\u0432\u043e")),o.a.createElement("span",{className:"receipt-item-sum"},"\u0421\u0443\u043c\u043c\u0430")),o.a.createElement(p.y,null),r,o.a.createElement(p.y,null),o.a.createElement("div",{className:"receipt-total"},o.a.createElement("span",{className:""},"\u0418\u0442\u043e\u0433\u043e:"),o.a.createElement("span",null,o.a.createElement(X,{sum:$.totalSumWithParams(t)}))))},Ie=function(e){var t=e.receipts,a=Object(l.useState)(""),n=Object(f.a)(a,2),c=n[0],r=n[1],u=Object(l.useState)([]),i=Object(f.a)(u,2),s=i[0],m=i[1],d=Object(l.useState)([]),b=Object(f.a)(d,2),E=b[0],O=b[1];return Object(l.useEffect)((function(){if(t){var e=[];t.map((function(e){var t=e.dateTime;return e.items.map((function(e){return e.dateTime=t,e}))})).forEach((function(t){e.push.apply(e,Object(Te.a)(t))})),m(e)}}),[t]),Object(l.useEffect)((function(){O(c?s.filter((function(e){return e.name.toLowerCase().indexOf(c)>-1})):[])}),[c,s]),o.a.createElement(l.Fragment,null,o.a.createElement(p.x,{value:c,onChange:function(e){r(e.target.value.toLowerCase())}}),o.a.createElement(te.a,{title:"\u041f\u043e\u0438\u0441\u043a"},E.length>0&&o.a.createElement(_e,{id:E._id,isSearch:!0,items:E})))},Ae=function(e){var t=e.setReceiptFromBalance,a=e.onClickActiveModal,n=Object(l.useState)(!0),c=Object(f.a)(n,2),r=c[0],u=c[1],i=Object(l.useState)(new Date),s=Object(f.a)(i,2),m=s[0],d=s[1],b=Object(l.useState)([]),E=Object(f.a)(b,2),O=E[0],v=E[1],g=Object(l.useState)(!1),h=Object(f.a)(g,2),y=h[0],S=h[1],k=I("/day"),C=Object(f.a)(k,2),w=C[0].response,T=C[1],x=Object(l.useContext)(R),_=Object(f.a)(x,2)[1],A=Object(l.useCallback)((function(e){d(e),u(!0)}),[]);return Object(l.useEffect)((function(){r&&(T({params:{date:Object(fe.a)(m,"yyyy-MM-dd")}}),u(!1),S(!1))}),[r,u,T,m]),Object(l.useEffect)((function(){w&&v(w)}),[w,t]),o.a.createElement(l.Fragment,null,o.a.createElement(we,{title:"\u0411\u0430\u043b\u0430\u043d\u0441"}),o.a.createElement(Ie,{receipts:O}),o.a.createElement(p.s,{icon:o.a.createElement(re.a,null),header:o.a.createElement(X,{sum:$.totalReceiptSum(O),fs:"2em"}),action:o.a.createElement(j.a,{size:"l",onClick:function(e){_({type:"SET_PANEL",payload:{panel:e.currentTarget.dataset.to}})},"data-to":"add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434 / \u0440\u0430\u0441\u0445\u043e\u0434")},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u043e\u0445\u043e\u0434\u044b/\u0440\u0430\u0441\u0445\u043e\u0434\u044b"),o.a.createElement(p.y,null),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:"1em"}},o.a.createElement("div",{style:{flex:"0 1 50%",display:"flex",justifyContent:"flex-end"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingRight:"10px"}},o.a.createElement("span",{style:{color:"#6F6F6F",fontSize:"0.7em",textAlign:"end"}},"\u0414\u043e\u0445\u043e\u0434\u044b"),o.a.createElement(X,{sum:$.totalSum(O,!0),fs:"1.4em"})),o.a.createElement(oe.a,{width:16,height:40,fill:"#28a745"})),o.a.createElement("div",{style:{flex:"0 1 50%",display:"flex",justifyContent:"flex-start"}},o.a.createElement(ie.a,{width:16,height:40,fill:"#dc3545"}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"10px"}},o.a.createElement("span",{style:{color:"#6F6F6F",fontSize:"0.7em"}},"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),o.a.createElement(X,{sum:$.totalSum(O,!1),fs:"1.4em"})))),o.a.createElement(p.u,{onRefresh:function(){S(!0),u(!0)},isFetching:y},o.a.createElement(te.a,{title:"\u0427\u0435\u043a\u0438"},o.a.createElement(p.j,null,o.a.createElement(je,{setDateFromCalendar:A}),O.map((function(e,n){return o.a.createElement(ne.a,{key:n,expandable:!0,onClick:function(){a("modal-page"),t(e)},"data-to":e._id,indicator:o.a.createElement(X,{sum:e.totalSum})},$.date(e.dateTime))}))))))},Pe=a(82),Ne=a.n(Pe),Le=a(68),Fe=a.n(Le),Ue=a(230),We=a.n(Ue),ze=a(227),De=a.n(ze),Ve=a(229),Ke=a.n(Ve),qe=a(228),Me=a.n(qe),Ge=function(e){var t=e.message,a=e.isError,n=Object(l.useState)(null),c=Object(f.a)(n,2),r=c[0],u=c[1],i=Object(l.useContext)(R),s=Object(f.a)(i,2)[1];return Object(l.useEffect)((function(){u(o.a.createElement(p.z,{layout:"vertical",onClose:function(){s({type:"UNSET_ERROR"}),u(null)},before:a?o.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--destructive)"}},o.a.createElement(Me.a,{fill:"#fff",width:18,height:18})):o.a.createElement(B.a,{size:24,style:{backgroundColor:"var(--accent)"}},o.a.createElement(J.a,{fill:"#fff",width:18,height:18}))},t))}),[u,s,a,t]),r},Be=function(){var e=Object(l.useState)(""),t=Object(f.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)((function(){var e=new Date,t=e.getMonth()+1>9?e.getMonth()+1:"0".concat(e.getMonth()+1),a=e.getDate()>9?e.getDate():"0".concat(e.getDate());return"".concat(e.getFullYear(),"-").concat(t,"-").concat(a)})),r=Object(f.a)(c,2),u=r[0],i=r[1],s=Object(l.useState)(1),b=Object(f.a)(s,2),O=b[0],v=b[1],g=Object(l.useState)(""),h=Object(f.a)(g,2),y=h[0],S=h[1],k=Object(l.useState)(!1),C=Object(f.a)(k,2),w=C[0],T=C[1],x=Object(l.useState)(null),_=Object(f.a)(x,2),A=_[0],P=_[1],N=Object(l.useState)(null),L=Object(f.a)(N,2),F=L[0],U=L[1],W=Object(l.useContext)(R),z=Object(f.a)(W,2),D=z[0],V=z[1],q=I("/day"),G=Object(f.a)(q,2),B=G[0],H=B.response,J=B.error,Y=G[1],Z=I("/day/receipt"),Q=Object(f.a)(Z,2),X=Q[0],ee=Q[1],te=Object(l.useState)(!1),ae=Object(f.a)(te,2),ne=ae[0],ce=ae[1],re=Object(l.useState)(!1),le=Object(f.a)(re,2),oe=le[0],ue=le[1],ie=Object(p.B)();return Object(l.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppOpenCodeReaderResult":U(n.code_data);break;case"VKWebAppOpenCodeReaderFailed":console.log("add day error",n)}}))}),[]),Object(l.useEffect)((function(){ne&&(Y({method:"POST",date:u,items:[{name:a,quantity:O,price:100*y,sum:100*y*O,income:w,modifiers:[],properties:[]}]}),n(""),v(1),T(!1),S(""),ce(!1))}),[ne,ce,u,Y,w,a,y,O]),Object(l.useEffect)((function(){H&&P(o.a.createElement(Ge,{message:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",isError:!1}))}),[H]),Object(l.useEffect)((function(){if(F){var e=$.qr(F);if(e.error){var t=e.error;return V({type:"SET_ERROR",payload:{e:t}}),void U(null)}var a=oe?"receive":"check",n=Object(d.a)({method:"POST"},e,{params:{action:a}});ee(n)}}),[F,ee,oe,V]),Object(l.useEffect)((function(){if(X.response){if(ue(X.response.check),202===X.response.statusCode){var e=Object(d.a)({method:"POST"},$.qr(F),{params:{action:"receive"}});ee(e)}X.response._id&&(P(o.a.createElement(Ge,{message:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",isError:!1})),ue(!1),U(null))}}),[X.response,ee,F]),Object(l.useEffect)((function(){D.error&&(V({type:"SET_ERROR",payload:{error:X.error||J}}),P(o.a.createElement(Ge,{message:D.error.message,isError:!0})),ue(!1),U(null))}),[X.error,J,V,D.error]),o.a.createElement(l.Fragment,null,o.a.createElement(E.a,{left:o.a.createElement(Fe.a,{key:"back",onClick:function(e){V({type:"SET_PANEL",payload:{panel:e.currentTarget.dataset.to}})},"data-to":"home"},ie===p.h?o.a.createElement(K.a,null):o.a.createElement(M.a,null))},o.a.createElement(Ke.a,{before:m.a.supports("VKWebAppOpenCodeReader")&&o.a.createElement(Fe.a,{key:"qr","data-to":"qr",onClick:function(){V({type:"UNSET_ERROR"}),m.a.send("VKWebAppOpenCodeReader",{})}},o.a.createElement(De.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438")),o.a.createElement(Re.a,null,o.a.createElement(Ne.a,{type:"date",top:"\u0414\u0430\u0442\u0430",name:"date",value:u,onChange:function(e){i(e.currentTarget.value)}}),o.a.createElement(Ne.a,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:a,onChange:function(e){n(e.currentTarget.value)}}),o.a.createElement(Ne.a,{type:"number",top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",name:"quantity",value:O,onChange:function(e){v(e.currentTarget.value)}}),o.a.createElement(Ne.a,{type:"number",top:"\u0426\u0435\u043d\u0430",name:"price",value:y,onChange:function(e){S(e.currentTarget.value)}}),o.a.createElement(We.a,{name:"income",checked:w,onChange:function(e){T(e.currentTarget.checked)}},"\u0414\u043e\u0445\u043e\u0434"),o.a.createElement(j.a,{size:"xl",disabled:!u||!a||!O||!y,mode:w?"commerce":"destructive",onClick:function(){ce(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",w?"\u0434\u043e\u0445\u043e\u0434":"\u0440\u0430\u0441\u0445\u043e\u0434")),A)},He=function(e){var t=e.receipt;return o.a.createElement(p.j,null,o.a.createElement(_e,{id:t._id,dateTime:t.dateTime,items:t.items}))},Je=a(79),Ye=a.n(Je),Ze=a(231),Qe=a.n(Ze),$e=function(){var e=Object(l.useContext)(R),t=Object(f.a)(e,1)[0],a=Object(l.useState)(null),n=Object(f.a)(a,2),c=n[0],r=n[1],u=Object(l.useState)(null),i=Object(f.a)(u,2),s=i[0],m=i[1],d=Object(l.useState)(null),b=Object(f.a)(d,2),E=b[0],O=b[1],j=Object(l.useCallback)((function(){r(null)}),[]);return Object(l.useEffect)((function(){if(E){var e=Object(p.B)();m(o.a.createElement(p.m,{activeModal:c,onClose:j},o.a.createElement(p.k,{id:"modal-page",onClose:j,header:o.a.createElement(p.l,{left:e!==p.h&&o.a.createElement(Fe.a,{onClick:j},o.a.createElement(Ye.a,null)),right:e===p.h&&o.a.createElement(Fe.a,{onClick:j},e===p.h?"\u0413\u043e\u0442\u043e\u0432\u043e":o.a.createElement(Qe.a,null))},$.date(E.dateTime))},o.a.createElement(He,{onClose:j,receipt:E}))))}}),[E,c,j]),o.a.createElement(p.v,{activeView:t.view,popout:t.popout,modal:s,onTransition:null},o.a.createElement(p.A,{id:"authorization",activePanel:t.panel},o.a.createElement(p.n,{id:"authorization.login"},o.a.createElement(D,{type:"login"})),o.a.createElement(p.n,{id:"authorization.register"},o.a.createElement(D,{type:"register"}))),o.a.createElement(p.A,{id:"profile",activePanel:t.panel},o.a.createElement(p.n,{id:"profile.edit"},o.a.createElement(Y,null))),o.a.createElement(p.A,{id:"balance",activePanel:t.panel},o.a.createElement(p.n,{id:"balance.home"},o.a.createElement(Ae,{setReceiptFromBalance:O,onClickActiveModal:r})),o.a.createElement(p.n,{id:"balance.add"},o.a.createElement(Be,null))))},Xe=function(e){var t=e.children,a=I("/users/profile"),n=Object(f.a)(a,2),c=n[0].response,r=n[1],o=Object(l.useContext)(W),u=Object(f.a)(o,2)[1],i=Object(l.useContext)(F),s=Object(f.a)(i,1)[0],m=s.vkUserId,p=s.matchUrlParams,b=k("token"),E=Object(f.a)(b,1)[0];return Object(l.useEffect)((function(){E&&p?(r(),u((function(e){return Object(d.a)({},e,{isLoading:!0})}))):u((function(e){return Object(d.a)({},e,{isLoggedIn:!1})}))}),[r,u,E,p]),Object(l.useEffect)((function(){if(c){var e=c.user.vk_id.toString()===m?c.user:null;u((function(t){return Object(d.a)({},t,{isLoading:!1,isLoggedIn:!!e,currentUser:e})}))}}),[c,u,m]),t},et=function(e){var t=e.children;return Object(l.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if(console.log({type:a,data:n}),"VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}}))}),[]),t},tt=a(232),at=document.createElement("div");document.body.appendChild(at),tt.init({container:at,tool:["console","elements"]});var nt=Object(s.applyMiddleware)((function(e){e.send,e.subscribe;return function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(a,n);case 2:return r=t.sent,console.log(r),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}))(m.a);nt.send("VKWebAppInit"),nt.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if(console.log({type:a,data:n}),"VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),window.onload=function(){i.a.render(o.a.createElement(et,null,o.a.createElement(U,null,o.a.createElement(_,null,o.a.createElement(z,null,o.a.createElement(Xe,null,o.a.createElement($e,null)))))),document.getElementById("root"))}}},[[284,1,2]]]);
//# sourceMappingURL=main.0d4a9a50.chunk.js.map