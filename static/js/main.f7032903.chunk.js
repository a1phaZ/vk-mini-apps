(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},175:function(e,t,a){e.exports=a(279)},270:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);a(176),a(202),a(204),a(205),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),i=a(21),o=a.n(i),m=a(76),u=a.n(m),s=a(34),p=a(79),d=a.n(p),E=a(114),f=a.n(E),b=(a(253),a(52)),h=a.n(b),v=a(46),O=a.n(v),j=a(78),w=a.n(j),k=a(56),y=a.n(k),C=a(108),g=a.n(C),K=a(77),V=a.n(K),x=a(109),A=a.n(x),q=function(e){var t=e.id,a=e.go,n=e.fetchedUser,c=e.qr;return l.a.createElement(h.a,{id:t},l.a.createElement(O.a,null,"Example"),n&&l.a.createElement(y.a,{title:"User Data Fetched with VK Connect"},l.a.createElement(g.a,{before:n.photo_200?l.a.createElement(A.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(y.a,{title:"Profile"},l.a.createElement(V.a,null,l.a.createElement(w.a,{size:"xl",level:"2",onClick:a,"data-to":"profile"},"Profile"))),l.a.createElement(y.a,{title:"QR Reader"},l.a.createElement(V.a,null,l.a.createElement(w.a,{size:"xl",level:"2",onClick:function(){o.a.send("VKWebAppOpenCodeReader",{})}},"Open QR reader"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"qr.dt = ".concat(c.dt)),l.a.createElement("li",null,"qr.sum = ".concat(c.sum)),l.a.createElement("li",null,"qr.fn = ".concat(c.fn)),l.a.createElement("li",null,"qr.i = ".concat(c.i)),l.a.createElement("li",null,"qr.fp = ".concat(c.fp)))))))},P=a(12),R=(a(111),a(54)),S=a.n(R),W=a(55),_=a.n(W),U=(a(110),a(270),Object(P.n)(),function(e){var t=e.id,a=e.go,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],m=r[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),d=p[0],E=p[1],f=Object(P.n)();return Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":m(n.email),E(n.phone)}}))}),[]),l.a.createElement(P.j,{id:t},l.a.createElement(P.k,{left:l.a.createElement(P.f,{onClick:a,"data-to":"home"},f===P.g?l.a.createElement(S.a,null):l.a.createElement(_.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(P.d,null,l.a.createElement(P.e,null,l.a.createElement(P.i,null,l.a.createElement(P.b,null,l.a.createElement(P.h,{title:"E-mail"},i||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c email")),l.a.createElement(P.b,null,l.a.createElement(P.h,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},d||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d")))),l.a.createElement(P.a,{size:"xl",level:"2",onClick:function(){o.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK")))}),z=a(112),I=a.n(z),G=a(113),J=a.n(G),Q=function(){var e=Object(n.useState)("home"),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),m=i[0],p=i[1],E=Object(n.useState)(l.a.createElement(f.a,{size:"large"})),b=Object(s.a)(E,2),h=b[0],v=b[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),w=j[0],k=j[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppUpdateConfig":var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l);break;case"VKWebAppOpenCodeReaderResult":k(n.code_data)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,p(e),v(null);case 5:case"end":return t.stop()}}))}()}),[]);var y=function(e){var t,a,n,l,c;if(e){var r=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),i=Object(s.a)(r,6);t=i[1],a=i[2],n=i[3],l=i[4],c=i[5]}return{dt:t,sum:a,fn:n,i:l,fp:c}}(w),C=function(e){c(e.currentTarget.dataset.to)};return l.a.createElement(P.c,{activeStory:a,tabbar:l.a.createElement(P.l,null,l.a.createElement(P.m,{selected:"home"===a,onClick:C,"data-to":"home"},l.a.createElement(I.a,null)),l.a.createElement(P.m,{selected:"profile"===a,onClick:C,"data-to":"profile"},l.a.createElement(J.a,null)))},l.a.createElement(d.a,{id:"home",activePanel:"home",popout:h},l.a.createElement(q,{id:"home",fetchedUser:m,go:C,qr:y})),l.a.createElement(d.a,{id:"profile",activePanel:"profile",popout:h},l.a.createElement(U,{id:"profile",go:C})))};o.a.send("VKWebAppInit"),r.a.render(l.a.createElement(Q,null),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.f7032903.chunk.js.map