(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},176:function(e,t,a){e.exports=a(285)},276:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);a(177),a(203),a(205),a(206),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),i=a(20),o=a.n(i),m=a(74),s=a.n(m),u=a(37),p=a(108),d=a.n(p),E=a(107),f=a.n(E),b=(a(254),a(54)),h=a.n(b),v=a(47),w=a.n(v),g=a(42),O=a.n(g),k=a(48),j=a.n(k),C=a(103),y=a.n(C),x=a(57),P=a.n(x),K=a(104),V=a.n(K),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser,c=e.qr;return l.a.createElement(h.a,{id:t},l.a.createElement(w.a,null,"Example"),n&&l.a.createElement(j.a,{title:"User Data Fetched with VK Connect"},l.a.createElement(y.a,{before:n.photo_200?l.a.createElement(V.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(j.a,{title:"Navigation Example"},l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))),l.a.createElement(j.a,{title:"Profile"},l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"profile"},"Profile"))),l.a.createElement(j.a,{title:"QR Reader"},l.a.createElement(P.a,null,l.a.createElement(O.a,{size:"xl",level:"2",onClick:function(){o.a.send("VKWebAppOpenCodeReader",{})}},"Open QR reader"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"qr.dt = ".concat(c.dt)),l.a.createElement("li",null,"qr.sum = ".concat(c.sum)),l.a.createElement("li",null,"qr.fn = ".concat(c.fn)),l.a.createElement("li",null,"qr.i = ".concat(c.i)),l.a.createElement("li",null,"qr.fp = ".concat(c.fp)))))))},q=a(21),R=a(106),S=a.n(R),W=a(55),T=a.n(W),_=a(56),z=a.n(_),U=a(105),I=a.n(U),G=(a(276),Object(q.h)()),N=function(e){return l.a.createElement(h.a,{id:e.id},l.a.createElement(w.a,{left:l.a.createElement(S.a,{onClick:e.go,"data-to":"home"},G===q.d?l.a.createElement(T.a,null):l.a.createElement(z.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:I.a,alt:"Persik The Cat"}))},J=function(e){var t=e.id,a=e.go,c=Object(n.useState)(""),r=Object(u.a)(c,2),i=r[0],m=r[1],s=Object(n.useState)(""),p=Object(u.a)(s,2),d=p[0],E=p[1],f=Object(q.h)();return Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":m(n.email),E(n.phone)}}))}),[]),l.a.createElement(q.f,{id:t},l.a.createElement(q.g,{left:l.a.createElement(q.c,{onClick:a,"data-to":"home"},f===q.d?l.a.createElement(T.a,null):l.a.createElement(z.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(q.a,null,l.a.createElement(q.b,null,l.a.createElement(q.b,{top:"E-mail"},l.a.createElement(q.e,{type:"email",top:"E-mail",name:"email",value:i,onChange:function(e){return m(e.currentTarget.value)},status:i?"valid":"error",bottom:i?"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0432\u0435\u0440\u043d\u043e!":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443"})),l.a.createElement(q.b,{top:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},l.a.createElement(q.e,{type:"phone",top:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone",value:d,onChange:function(e){return E(e.currentTarget.value)},status:d?"valid":"error",bottom:d?"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0432\u0432\u0435\u0434\u0435\u043d \u0432\u0435\u0440\u043d\u043e!":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"})),l.a.createElement(O.a,{size:"xl",level:"2",onClick:function(){o.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK"))))},Q=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(u.a)(r,2),m=i[0],p=i[1],E=Object(n.useState)(l.a.createElement(f.a,{size:"large"})),b=Object(u.a)(E,2),h=b[0],v=b[1],w=Object(n.useState)(""),g=Object(u.a)(w,2),O=g[0],k=g[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppUpdateConfig":var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l);break;case"VKWebAppOpenCodeReaderResult":k(n.code_data)}})),function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,p(e),v(null);case 5:case"end":return t.stop()}}))}()}),[]);var j=function(e){var t,a,n,l,c;return e&&(e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),t=e.match(/t=([0-9]{8}T[0-9]+)/)[1],a=e.match(/s=(\w+\.*\w+)/)[1].split(/\.*/).join(""),n=e.match(/fn=(\w+)/)[1],l=e.match(/i=(\w+)/)[1],c=e.match(/fp=(\w+)/)[1]),{dt:t,sum:a,fn:n,i:l,fp:c}}(O),C=function(e){c(e.currentTarget.dataset.to)};return l.a.createElement(d.a,{activePanel:a,popout:h},l.a.createElement(A,{id:"home",fetchedUser:m,go:C,qr:j}),l.a.createElement(N,{id:"persik",go:C}),l.a.createElement(J,{id:"profile",go:C}))};o.a.send("VKWebAppInit"),r.a.render(l.a.createElement(Q,null),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.ceebc774.chunk.js.map