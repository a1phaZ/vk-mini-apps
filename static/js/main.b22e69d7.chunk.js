(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{177:function(e,t,a){e.exports=a(280)},280:function(e,t,a){"use strict";a.r(t);a(178),a(204),a(206),a(207),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246);var n=a(0),c=a.n(n),r=a(34),i=a.n(r),l=a(18),m=a.n(l),o=a(78),d=a.n(o),u=a(29),s=a(48),p=a.n(s),f=a(116),b=a.n(f),E=(a(255),a(9)),y=a(109),h=a.n(y),k=a(110),v=a.n(k),_=a(111),O=a.n(_),j=a(54),q=a.n(j),w=a(114),g=a.n(w),C=a(77),R=a.n(C),S=a(80),U=a.n(S),I=a(47),K=a.n(I),T=a(41),V=a.n(T),A=a(79),P=a.n(A),W=a(115),x=a.n(W),F=a(112),z=a(113),B=function(){function e(){Object(F.a)(this,e)}return Object(z.a)(e,null,[{key:"qr",value:function(e){var t,a,n,c,r;if(e){var i=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),l=Object(u.a)(i,6);t=l[1],a=l[2],n=l[3],c=l[4],r=l[5]}return{dt:t,sum:a,fn:n,i:c,fp:r}}},{key:"date",value:function(e){var t,a=new Date(e);switch(a.getMonth()+1){case 1:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 2:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 3:t="\u043c\u0430\u0440\u0442\u0430";break;case 4:t="\u0430\u043f\u0440\u0435\u043b\u044f";break;case 5:t="\u043c\u0430\u044f";break;case 6:t="\u0438\u044e\u043d\u044f";break;case 7:t="\u0438\u044e\u043b\u044f";break;case 8:t="\u0430\u0432\u0433\u0443\u0441\u0442\u0430";break;case 9:t="\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";break;case 10:t="\u043e\u043a\u0442\u044f\u0431\u0440\u044f";break;case 11:t="\u043d\u043e\u044f\u0431\u0440\u044f";break;case 12:t="\u0434\u0435\u043a\u0430\u0431\u0440\u044f"}return"".concat(a.getDate()," ").concat(t," ").concat(a.getFullYear())}}]),e}(),N=function(e){var t=e.id,a=e.go,n=e.fetchedUser,r=e.qr,i=e.receipts;return c.a.createElement(g.a,{id:t},c.a.createElement(R.a,null,"\u0411\u0430\u043b\u0430\u043d\u0441"),n&&c.a.createElement(K.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(V.a,{before:n.photo_200?c.a.createElement(x.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(K.a,{title:"\u0427\u0435\u043a\u0438"},c.a.createElement(E.i,null,i.map((function(e,t){return c.a.createElement(V.a,{key:t,expandable:!0,onClick:a,"data-to":e._id,indicator:new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e.totalSum/100),style:e.totalSum>0?{color:"#28a745"}:{color:"#dc3545"}},B.date(e.dateTime))})))),c.a.createElement(K.a,{title:"Profile"},c.a.createElement(P.a,null,c.a.createElement(U.a,{size:"xl",level:"2",onClick:a,"data-to":"profile"},"Profile"))),c.a.createElement(K.a,{title:"QR Reader"},c.a.createElement(P.a,null,c.a.createElement(U.a,{size:"xl",level:"2",onClick:function(){m.a.send("VKWebAppOpenCodeReader",{})}},"Open QR reader"),c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,"qr.dt = ".concat(r.dt)),c.a.createElement("li",null,"qr.sum = ".concat(r.sum)),c.a.createElement("li",null,"qr.fn = ".concat(r.fn)),c.a.createElement("li",null,"qr.i = ".concat(r.i)),c.a.createElement("li",null,"qr.fp = ".concat(r.fp)))))))},D=a(55),G=a.n(D),J=a(56),M=a.n(J),Q=function(e){var t=e.id,a=e.go,r=Object(n.useState)(""),i=Object(u.a)(r,2),l=i[0],o=i[1],d=Object(n.useState)(""),s=Object(u.a)(d,2),p=s[0],f=s[1],b=Object(E.n)();return Object(n.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppGetPersonalCardResult":o(n.email),f(n.phone)}}))}),[]),c.a.createElement(E.j,{id:t},c.a.createElement(E.k,{left:c.a.createElement(E.f,{onClick:a,"data-to":"home"},b===E.g?c.a.createElement(G.a,null):c.a.createElement(M.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement(E.d,null,c.a.createElement(E.e,null,c.a.createElement(E.i,null,c.a.createElement(E.b,null,c.a.createElement(E.h,{title:"E-mail"},l||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c email")),c.a.createElement(E.b,null,c.a.createElement(E.h,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"},p||"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d")))),c.a.createElement(E.a,{size:"xl",level:"2",onClick:function(){m.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 VK")))},Y=function(e){var t=e.id;return c.a.createElement(E.j,{id:t},c.a.createElement(E.k,{before:c.a.createElement(q.a,null)},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))},H=function(e){var t=e.items,a=e.id,n=e.dateTime,r=e.go,i=Object(E.n)(),l=t.map((function(e,t){var a=e.income?e.sum/100:-1*e.sum/100;return c.a.createElement(E.e,{title:e.name,key:t},c.a.createElement(E.i,null,e.price?c.a.createElement(V.a,{indicator:new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e.price/100)},"\u0426\u0435\u043d\u0430"):null,e.quantity?c.a.createElement(V.a,{indicator:e.quantity},"\u041a\u043e\u043b-\u0432\u043e"):null,c.a.createElement(V.a,{indicator:new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(a),style:a>0?{color:"#28a745"}:{color:"#dc3545"}},"\u0421\u0443\u043c\u043c\u0430")))}));return c.a.createElement(E.j,{id:a},c.a.createElement(E.k,{left:c.a.createElement(E.f,{onClick:r,"data-to":"home"},i===E.g?c.a.createElement(G.a,null):c.a.createElement(M.a,null))},B.date(n)),l)},L=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(u.a)(i,2),o=l[0],s=l[1],f=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),y=Object(u.a)(f,2),k=y[0],_=y[1],j=Object(n.useState)(""),w=Object(u.a)(j,2),g=w[0],C=w[1],R=Object(n.useState)([{_id:"5ddf911573e0c321bc89f1ef",receipts:[{fn:"9289000100521868",fd:"12691",fp:"339287482"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-12T00:00:00.000",items:[{modifiers:[],properties:[],_id:"5ddf911573e0c321bc89f1f0",name:"test",sum:1e3,income:!0},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa20",sum:490,quantity:1,name:"\u041f\u0430\u043a\u0435\u0442-\u043c\u0430\u0439\u043a\u0430 \u041c\u0430\u0433\u043d\u0438\u0442",price:490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1f",sum:5490,quantity:1,name:"4 \u0421\u0415\u0417\u041e\u041d\u0410 \u0420\u0430\u0433\u0443 \u043e\u0432\u043e\u0449\u043d\u043e\u0435 0,4\u043a\u0433(\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439 \u0425\u041a \u041e\u041e\u041e):20",price:5490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1e",sum:22038,quantity:1.225,name:"\u0421\u043a\u0443\u043c\u0431\u0440\u0438\u044f \u0441/\u043c \u0443\u043f (\u0432\u0435\u0441):6",price:17990},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1d",sum:4490,quantity:1,name:"\u041a\u0420\u0410\u0421\u041a\u0418 \u041b\u0415\u0422\u0410 \u0421\u043e\u0442\u0435 400 \u0433 \u043f/\u0443\u043f(\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043e\u0432\u043e\u0449\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f):8",price:4490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1c",sum:3490,quantity:1,name:"MR RICCO Organic \u041c\u0430\u0439\u043e\u043d\u0435\u0437 \u043f\u0435\u0440\u0435\u043f \u044f\u0439\u0446\u0430 67% 375\u0433 \u0434/\u043f(\u041d\u044d\u0444\u0438\u0441):12",price:3490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1b",sum:6490,quantity:1,name:'\u0422\u0432\u043e\u0440\u043e\u0433 \u043e\u0431\u0435\u0437\u0436\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0412\u0435\u043c\u043e\u043b 0,5% 0,25\u043a\u0433 \u043a\u043e\u043d\u0442 (\u0417\u0410\u041e "\u0412\u0435\u043c\u043e\u043b") :18',price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1a",sum:6490,quantity:1,name:"\u0421\u043c\u0435\u0442\u0430\u043d\u0430 15% 0,45\u043a\u0433 \u0444/\u043f (\u041c\u043e\u043b\u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442 \u041a\u0443\u043d\u0433\u0443\u0440\u0441\u043a\u0438\u0439)",price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa19",sum:7780,quantity:2,name:"\u041c\u043e\u043b\u043e\u043a\u043e \u043f\u0430\u0441\u0442 2,5% 1\u043b \u0444/\u043f (\u041c\u0430\u0421\u041a\u043e):15",price:3890},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa18",sum:4790,quantity:1,name:"\u042f\u0439\u0446\u043e \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0435 \u04211 10\u0448\u0442 \u0431\u043e\u043a\u0441 :20",price:4790}],totalSum:-60548,__v:0},{_id:"5de8d0037a0bbc1cd8169744",receipts:[{fn:"9280440300403604",fd:"8950",fp:"0648032311"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-29T00:00:00.000",totalSum:-3663,items:[{modifiers:[],properties:[],_id:"5de8d0037a0bbc1cd8169746",sum:1063,price:1063,quantity:1,name:"\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"},{modifiers:[],properties:[],_id:"5de8d0037a0bbc1cd8169745",sum:2600,price:2600,quantity:1,name:"\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"}],__v:0}]),S=Object(u.a)(R,2),U=S[0];S[1];Object(n.useEffect)((function(){m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppUpdateConfig":var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c);break;case"VKWebAppOpenCodeReaderResult":C(n.code_data)}})),function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(m.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,s(e),_(null);case 5:case"end":return t.stop()}}))}()}),[]);var I=B.qr(g),K=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(E.c,{activeStory:a,tabbar:c.a.createElement(E.l,null,c.a.createElement(E.m,{selected:"home"===a,onClick:K,"data-to":"home"},c.a.createElement(h.a,null)),c.a.createElement(E.m,{onClick:function(){m.a.send("VKWebAppOpenCodeReader",{})}},c.a.createElement(O.a,{height:28,width:28})),c.a.createElement(E.m,{selected:"profile"===a,onClick:K,"data-to":"profile"},c.a.createElement(v.a,null)),c.a.createElement(E.m,{selected:"info"===a,onClick:K,"data-to":"info"},c.a.createElement(q.a,null)))},c.a.createElement(p.a,{id:"home",activePanel:"home",popout:k},c.a.createElement(N,{id:"home",fetchedUser:o,go:K,qr:I,receipts:U})),c.a.createElement(p.a,{id:"profile",activePanel:"profile",popout:k},c.a.createElement(Q,{id:"profile",go:K})),c.a.createElement(p.a,{id:"info",activePanel:"info",popout:k},c.a.createElement(Y,{id:"info",go:K})),U.map((function(e,t){return c.a.createElement(p.a,{id:e._id,activePanel:e._id,key:t},c.a.createElement(H,{id:e._id,dateTime:e.dateTime,items:e.items,go:K}))})))};m.a.send("VKWebAppInit"),i.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.b22e69d7.chunk.js.map