(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{177:function(e,t,a){e.exports=a(280)},280:function(e,t,a){"use strict";a.r(t);a(178),a(204),a(206),a(207),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246);var n=a(0),c=a.n(n),i=a(34),r=a.n(i),l=a(18),d=a.n(l),m=a(76),o=a.n(m),s=a(29),u=a(48),p=a.n(u),f=a(116),b=a.n(f),E=(a(255),a(9)),h=a(107),k=a.n(h),v=a(108),y=a.n(v),_=a(109),O=a.n(_),j=a(54),q=a.n(j),C=a(112),w=a.n(C),g=a(75),S=a.n(g),K=a(78),R=a.n(K),T=a(47),V=a.n(T),A=a(41),P=a.n(A),W=a(77),x=a.n(W),I=a(113),U=a.n(I),z=a(110),D=a(111),G=function(){function e(){Object(z.a)(this,e)}return Object(D.a)(e,null,[{key:"qr",value:function(e){var t,a,n,c,i;if(e){var r=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),l=Object(s.a)(r,6);t=l[1],a=l[2],n=l[3],c=l[4],i=l[5]}return{dt:t,sum:a,fn:n,i:c,fp:i}}},{key:"date",value:function(e){var t,a=new Date(e);switch(a.getMonth()+1){case 1:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 2:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 3:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 4:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 5:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 6:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 7:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 8:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 9:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 10:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 11:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 12:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f"}return"".concat(a.getDate()," ").concat(t," ").concat(a.getFullYear())}}]),e}(),F=function(e){var t=e.id,a=e.go,n=e.fetchedUser,i=e.qr,r=e.receipts;return c.a.createElement(w.a,{id:t},c.a.createElement(S.a,null,"\u0411\u0430\u043b\u0430\u043d\u0441"),n&&c.a.createElement(V.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(P.a,{before:n.photo_200?c.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(V.a,{title:"\u0427\u0435\u043a\u0438"},c.a.createElement(E.i,null,r.map((function(e,t){return c.a.createElement(P.a,{key:t,expandable:!0,onClick:a,"data-to":e._id,indicator:e.totalSum/100},G.date(e.dateTime))})))),c.a.createElement(V.a,{title:"Profile"},c.a.createElement(x.a,null,c.a.createElement(R.a,{size:"xl",level:"2",onClick:a,"data-to":"profile"},"Profile"))),c.a.createElement(V.a,{title:"QR Reader"},c.a.createElement(x.a,null,c.a.createElement(R.a,{size:"xl",level:"2",onClick:function(){d.a.send("VKWebAppOpenCodeReader",{})}},"Open QR reader"),c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,"qr.dt = ".concat(i.dt)),c.a.createElement("li",null,"qr.sum = ".concat(i.sum)),c.a.createElement("li",null,"qr.fn = ".concat(i.fn)),c.a.createElement("li",null,"qr.i = ".concat(i.i)),c.a.createElement("li",null,"qr.fp = ".concat(i.fp)))))))},J=a(114),M=a.n(J),Q=a(115),B=a.n(Q),N=function(e){var t=e.id,a=e.go,i=Object(n.useState)(""),r=Object(s.a)(i,2),l=r[0],m=r[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),p=u[0],f=u[1],b=Object(E.n)();return Object(n.useEffect)((function(){d.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":m(n.email),f(n.phone)}}))}),[]),c.a.createElement(E.j,{id:t},c.a.createElement(E.k,{left:c.a.createElement(E.f,{onClick:a,"data-to":"home"},b===E.g?c.a.createElement(M.a,null):c.a.createElement(B.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement(E.d,null,c.a.createElement(E.e,null,c.a.createElement(E.i,null,c.a.createElement(E.b,null,c.a.createElement(E.h,{title:"E-mail"},l||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c email")),c.a.createElement(E.b,null,c.a.createElement(E.h,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},p||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d")))),c.a.createElement(E.a,{size:"xl",level:"2",onClick:function(){d.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK")))},Y=function(e){var t=e.id;return c.a.createElement(E.j,{id:t},c.a.createElement(E.k,{before:c.a.createElement(q.a,null)},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))},H=function(e){var t=e.items,a=e.id,n=e.dateTime,i=t.map((function(e,t){return c.a.createElement(E.e,{title:e.name,key:t},c.a.createElement(E.i,null,e.price?c.a.createElement(P.a,{indicator:e.price/100},"\u0426\u0435\u043d\u0430"):null,e.quantity?c.a.createElement(P.a,{indicator:e.quantity},"\u041a\u043e\u043b-\u0432\u043e"):null,c.a.createElement(P.a,{indicator:e.income?e.sum/100:-1*e.sum/100},"\u0421\u0443\u043c\u043c\u0430")))}));return c.a.createElement(E.j,{id:a},c.a.createElement(E.k,null,G.date(n)),i)},L=function(){var e=Object(n.useState)("home"),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(null),l=Object(s.a)(r,2),m=l[0],u=l[1],f=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),h=Object(s.a)(f,2),v=h[0],_=h[1],j=Object(n.useState)(""),C=Object(s.a)(j,2),w=C[0],g=C[1],S=Object(n.useState)([{_id:"5ddf911573e0c321bc89f1ef",receipts:[{fn:"9289000100521868",fd:"12691",fp:"339287482"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-12T00:00:00.000",items:[{modifiers:[],properties:[],_id:"5ddf911573e0c321bc89f1f0",name:"test",sum:1e3,income:!0},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa20",sum:490,quantity:1,name:"\u041f\u0430\u043a\u0435\u0442-\u043c\u0430\u0439\u043a\u0430 \u041c\u0430\u0433\u043d\u0438\u0442",price:490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1f",sum:5490,quantity:1,name:"4 \u0421\u0415\u0417\u041e\u041d\u0410 \u0420\u0430\u0433\u0443 \u043e\u0432\u043e\u0449\u043d\u043e\u0435 0,4\u043a\u0433(\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439 \u0425\u041a \u041e\u041e\u041e):20",price:5490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1e",sum:22038,quantity:1.225,name:"\u0421\u043a\u0443\u043c\u0431\u0440\u0438\u044f \u0441/\u043c \u0443\u043f (\u0432\u0435\u0441):6",price:17990},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1d",sum:4490,quantity:1,name:"\u041a\u0420\u0410\u0421\u041a\u0418 \u041b\u0415\u0422\u0410 \u0421\u043e\u0442\u0435 400 \u0433 \u043f/\u0443\u043f(\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043e\u0432\u043e\u0449\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f):8",price:4490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1c",sum:3490,quantity:1,name:"MR RICCO Organic \u041c\u0430\u0439\u043e\u043d\u0435\u0437 \u043f\u0435\u0440\u0435\u043f \u044f\u0439\u0446\u0430 67% 375\u0433 \u0434/\u043f(\u041d\u044d\u0444\u0438\u0441):12",price:3490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1b",sum:6490,quantity:1,name:'\u0422\u0432\u043e\u0440\u043e\u0433 \u043e\u0431\u0435\u0437\u0436\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0412\u0435\u043c\u043e\u043b 0,5% 0,25\u043a\u0433 \u043a\u043e\u043d\u0442 (\u0417\u0410\u041e "\u0412\u0435\u043c\u043e\u043b") :18',price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1a",sum:6490,quantity:1,name:"\u0421\u043c\u0435\u0442\u0430\u043d\u0430 15% 0,45\u043a\u0433 \u0444/\u043f (\u041c\u043e\u043b\u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442 \u041a\u0443\u043d\u0433\u0443\u0440\u0441\u043a\u0438\u0439)",price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa19",sum:7780,quantity:2,name:"\u041c\u043e\u043b\u043e\u043a\u043e \u043f\u0430\u0441\u0442 2,5% 1\u043b \u0444/\u043f (\u041c\u0430\u0421\u041a\u043e):15",price:3890},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa18",sum:4790,quantity:1,name:"\u042f\u0439\u0446\u043e \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0435 \u04211 10\u0448\u0442 \u0431\u043e\u043a\u0441 :20",price:4790}],totalSum:-60548,__v:0},{_id:"5de8d0037a0bbc1cd8169744",receipts:[{fn:"9280440300403604",fd:"8950",fp:"0648032311"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-29T00:00:00.000",totalSum:-3663,items:[{modifiers:[],properties:[],_id:"5de8d0037a0bbc1cd8169746",sum:1063,price:1063,quantity:1,name:"\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"},{modifiers:[],properties:[],_id:"5de8d0037a0bbc1cd8169745",sum:2600,price:2600,quantity:1,name:"\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"}],__v:0}]),K=Object(s.a)(S,2),R=K[0];K[1];Object(n.useEffect)((function(){d.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppUpdateConfig":var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c);break;case"VKWebAppOpenCodeReaderResult":g(n.code_data)}})),function(){var e;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(d.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,u(e),_(null);case 5:case"end":return t.stop()}}))}()}),[]);var T=G.qr(w),V=function(e){i(e.currentTarget.dataset.to)};return c.a.createElement(E.c,{activeStory:a,tabbar:c.a.createElement(E.l,null,c.a.createElement(E.m,{selected:"home"===a,onClick:V,"data-to":"home"},c.a.createElement(k.a,null)),c.a.createElement(E.m,{onClick:function(){d.a.send("VKWebAppOpenCodeReader",{})}},c.a.createElement(O.a,{height:28,width:28})),c.a.createElement(E.m,{selected:"profile"===a,onClick:V,"data-to":"profile"},c.a.createElement(y.a,null)),c.a.createElement(E.m,{selected:"info"===a,onClick:V,"data-to":"info"},c.a.createElement(q.a,null)))},c.a.createElement(p.a,{id:"home",activePanel:"home",popout:v},c.a.createElement(F,{id:"home",fetchedUser:m,go:V,qr:T,receipts:R})),c.a.createElement(p.a,{id:"profile",activePanel:"profile",popout:v},c.a.createElement(N,{id:"profile",go:V})),c.a.createElement(p.a,{id:"info",activePanel:"info",popout:v},c.a.createElement(Y,{id:"info",go:V})),R.map((function(e,t){return c.a.createElement(p.a,{id:e._id,activePanel:e._id,key:t},c.a.createElement(H,{id:e._id,dateTime:e.dateTime,items:e.items}))})))};d.a.send("VKWebAppInit"),r.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.a1e47214.chunk.js.map