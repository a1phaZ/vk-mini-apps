(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{175:function(e,t,a){e.exports=a(278)},278:function(e,t,a){"use strict";a.r(t);a(176),a(202),a(204),a(205),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244);var n=a(0),c=a.n(n),i=a(34),r=a.n(i),l=a(18),m=a.n(l),o=a(76),d=a.n(o),u=a(31),s=a(48),p=a.n(s),f=a(114),E=a.n(f),b=(a(253),a(9)),h=a(107),v=a.n(h),y=a(75),O=a.n(y),_=a(78),j=a.n(_),k=a(47),q=a.n(k),C=a(38),w=a.n(C),g=a(77),K=a.n(g),R=a(108),S=a.n(R),V=function(e){var t=e.id,a=e.go,n=e.fetchedUser,i=e.qr,r=e.receipts;return c.a.createElement(v.a,{id:t},c.a.createElement(O.a,null,"\u0411\u0430\u043b\u0430\u043d\u0441"),n&&c.a.createElement(q.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(w.a,{before:n.photo_200?c.a.createElement(S.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(q.a,{title:"\u0427\u0435\u043a\u0438"},c.a.createElement(b.i,null,r.map((function(e,t){return c.a.createElement(w.a,{key:t,expandable:!0,onClick:a,"data-to":e._id,indicator:e.totalSum/100},e.dateTime)})))),c.a.createElement(q.a,{title:"Profile"},c.a.createElement(K.a,null,c.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"profile"},"Profile"))),c.a.createElement(q.a,{title:"QR Reader"},c.a.createElement(K.a,null,c.a.createElement(j.a,{size:"xl",level:"2",onClick:function(){m.a.send("VKWebAppOpenCodeReader",{})}},"Open QR reader"),c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,"qr.dt = ".concat(i.dt)),c.a.createElement("li",null,"qr.sum = ".concat(i.sum)),c.a.createElement("li",null,"qr.fn = ".concat(i.fn)),c.a.createElement("li",null,"qr.i = ".concat(i.i)),c.a.createElement("li",null,"qr.fp = ".concat(i.fp)))))))},A=a(109),P=a.n(A),W=a(110),x=a.n(W),I=function(e){var t=e.id,a=e.go,i=Object(n.useState)(""),r=Object(u.a)(i,2),l=r[0],o=r[1],d=Object(n.useState)(""),s=Object(u.a)(d,2),p=s[0],f=s[1],E=Object(b.n)();return Object(n.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":o(n.email),f(n.phone)}}))}),[]),c.a.createElement(b.j,{id:t},c.a.createElement(b.k,{left:c.a.createElement(b.f,{onClick:a,"data-to":"home"},E===b.g?c.a.createElement(P.a,null):c.a.createElement(x.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement(b.d,null,c.a.createElement(b.e,null,c.a.createElement(b.i,null,c.a.createElement(b.b,null,c.a.createElement(b.h,{title:"E-mail"},l||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c email")),c.a.createElement(b.b,null,c.a.createElement(b.h,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},p||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d")))),c.a.createElement(b.a,{size:"xl",level:"2",onClick:function(){m.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK")))},T=a(111),U=a.n(T),z=a(112),G=a.n(z),J=a(113),Q=a.n(J),B=a(54),D=a.n(B),F=function(e){var t=e.id;return c.a.createElement(b.j,{id:t},c.a.createElement(b.k,{before:c.a.createElement(D.a,null)},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))},M=function(e){var t=e._id,a=e.dateTime,n=e.items.map((function(e,t){return c.a.createElement(b.e,{title:e.name,key:t},c.a.createElement(b.i,null,e.price?c.a.createElement(w.a,{indicator:e.price/100},"\u0426\u0435\u043d\u0430"):null,e.quantity?c.a.createElement(w.a,{indicator:e.quantity},"\u041a\u043e\u043b-\u0432\u043e"):null,c.a.createElement(w.a,{indicator:e.income?e.sum/100:-1*e.sum/100},"\u0421\u0443\u043c\u043c\u0430")))}));return c.a.createElement(b.j,{id:t},c.a.createElement(b.k,null,a),n)},N=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(null),l=Object(u.a)(r,2),o=l[0],s=l[1],f=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),h=Object(u.a)(f,2),v=h[0],y=h[1],O=Object(n.useState)(""),_=Object(u.a)(O,2),j=_[0],k=_[1],q=Object(n.useState)([{_id:"5ddf911573e0c321bc89f1ef",receipts:[{fn:"9289000100521868",fd:"12691",fp:"339287482"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-12T00:00:00.000",items:[{modifiers:[],properties:[],_id:"5ddf911573e0c321bc89f1f0",name:"test",sum:1e3,income:!0},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa20",sum:490,quantity:1,name:"\u041f\u0430\u043a\u0435\u0442-\u043c\u0430\u0439\u043a\u0430 \u041c\u0430\u0433\u043d\u0438\u0442",price:490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1f",sum:5490,quantity:1,name:"4 \u0421\u0415\u0417\u041e\u041d\u0410 \u0420\u0430\u0433\u0443 \u043e\u0432\u043e\u0449\u043d\u043e\u0435 0,4\u043a\u0433(\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439 \u0425\u041a \u041e\u041e\u041e):20",price:5490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1e",sum:22038,quantity:1.225,name:"\u0421\u043a\u0443\u043c\u0431\u0440\u0438\u044f \u0441/\u043c \u0443\u043f (\u0432\u0435\u0441):6",price:17990},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1d",sum:4490,quantity:1,name:"\u041a\u0420\u0410\u0421\u041a\u0418 \u041b\u0415\u0422\u0410 \u0421\u043e\u0442\u0435 400 \u0433 \u043f/\u0443\u043f(\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043e\u0432\u043e\u0449\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f):8",price:4490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1c",sum:3490,quantity:1,name:"MR RICCO Organic \u041c\u0430\u0439\u043e\u043d\u0435\u0437 \u043f\u0435\u0440\u0435\u043f \u044f\u0439\u0446\u0430 67% 375\u0433 \u0434/\u043f(\u041d\u044d\u0444\u0438\u0441):12",price:3490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1b",sum:6490,quantity:1,name:'\u0422\u0432\u043e\u0440\u043e\u0433 \u043e\u0431\u0435\u0437\u0436\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0412\u0435\u043c\u043e\u043b 0,5% 0,25\u043a\u0433 \u043a\u043e\u043d\u0442 (\u0417\u0410\u041e "\u0412\u0435\u043c\u043e\u043b") :18',price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1a",sum:6490,quantity:1,name:"\u0421\u043c\u0435\u0442\u0430\u043d\u0430 15% 0,45\u043a\u0433 \u0444/\u043f (\u041c\u043e\u043b\u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442 \u041a\u0443\u043d\u0433\u0443\u0440\u0441\u043a\u0438\u0439)",price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa19",sum:7780,quantity:2,name:"\u041c\u043e\u043b\u043e\u043a\u043e \u043f\u0430\u0441\u0442 2,5% 1\u043b \u0444/\u043f (\u041c\u0430\u0421\u041a\u043e):15",price:3890},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa18",sum:4790,quantity:1,name:"\u042f\u0439\u0446\u043e \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0435 \u04211 10\u0448\u0442 \u0431\u043e\u043a\u0441 :20",price:4790}],totalSum:-60548,__v:0}]),C=Object(u.a)(q,2),w=C[0];C[1];Object(n.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppUpdateConfig":var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c);break;case"VKWebAppOpenCodeReaderResult":k(n.code_data)}})),function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(m.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,s(e),y(null);case 5:case"end":return t.stop()}}))}()}),[]);var g=function(e){var t,a,n,c,i;if(e){var r=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),l=Object(u.a)(r,6);t=l[1],a=l[2],n=l[3],c=l[4],i=l[5]}return{dt:t,sum:a,fn:n,i:c,fp:i}}(j),K=function(e){i(e.currentTarget.dataset.to)};return c.a.createElement(b.c,{activeStory:a,tabbar:c.a.createElement(b.l,null,c.a.createElement(b.m,{selected:"home"===a,onClick:K,"data-to":"home"},c.a.createElement(U.a,null)),c.a.createElement(b.m,{onClick:function(){m.a.send("VKWebAppOpenCodeReader",{})}},c.a.createElement(Q.a,{height:28,width:28})),c.a.createElement(b.m,{selected:"profile"===a,onClick:K,"data-to":"profile"},c.a.createElement(G.a,null)),c.a.createElement(b.m,{selected:"info"===a,onClick:K,"data-to":"info"},c.a.createElement(D.a,null)))},c.a.createElement(p.a,{id:"home",activePanel:"home",popout:v},c.a.createElement(V,{id:"home",fetchedUser:o,go:K,qr:g,receipts:w})),c.a.createElement(p.a,{id:"profile",activePanel:"profile",popout:v},c.a.createElement(I,{id:"profile",go:K})),c.a.createElement(p.a,{id:"info",activePanel:"info",popout:v},c.a.createElement(F,{id:"info",go:K})),w.map((function(e,t){return c.a.createElement(p.a,{id:e._id,activePanel:e._id,key:t},c.a.createElement(M,e))})))};m.a.send("VKWebAppInit"),r.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.f332bc3d.chunk.js.map