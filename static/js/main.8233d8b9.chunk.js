(this["webpackJsonpvk-mini-apps-empty"]=this["webpackJsonpvk-mini-apps-empty"]||[]).push([[0],{187:function(e,t,a){e.exports=a(291)},276:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);a(188),a(214),a(216),a(217),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256);var n=a(0),r=a.n(n),i=a(42),c=a.n(i),s=a(30),u=a.n(s),o=a(15),l=(a(264),a(40)),m=a(41),d=function(){function e(){Object(l.a)(this,e)}return Object(m.a)(e,null,[{key:"qr",value:function(e){var t,a,n,r,i;if(e){var c=e.match(/t=(\w{8}T\w+)&s=(\w+\.*\w+)&fn=(\w+)&i=(\w+)&fp=(\w+)/),s=Object(o.a)(c,6);t=s[1],a=s[2],n=s[3],r=s[4],i=s[5]}return{dt:t,sum:a,fn:n,i:r,fp:i}}},{key:"date",value:function(e){var t,a=new Date(e);switch(a.getMonth()+1){case 1:t="\u044f\u043d\u0432\u0430\u0440\u044f";break;case 2:t="\u0444\u0435\u0432\u0440\u0430\u043b\u044f";break;case 3:t="\u043c\u0430\u0440\u0442\u0430";break;case 4:t="\u0430\u043f\u0440\u0435\u043b\u044f";break;case 5:t="\u043c\u0430\u044f";break;case 6:t="\u0438\u044e\u043d\u044f";break;case 7:t="\u0438\u044e\u043b\u044f";break;case 8:t="\u0430\u0432\u0433\u0443\u0441\u0442\u0430";break;case 9:t="\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f";break;case 10:t="\u043e\u043a\u0442\u044f\u0431\u0440\u044f";break;case 11:t="\u043d\u043e\u044f\u0431\u0440\u044f";break;case 12:t="\u0434\u0435\u043a\u0430\u0431\u0440\u044f"}return"".concat(a.getDate()," ").concat(t," ").concat(a.getFullYear())}},{key:"sum",value:function(e){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(e/100)}},{key:"totalReceiptSum",value:function(e){return e.map((function(e){return e.totalSum})).reduce((function(e,t){return e+t}))}},{key:"totalSum",value:function(e,t){var a=function(e,t){return e+t},n=e.map((function(e){return e.items.map((function(e){return t?e.income?e.sum:0:e.income?0:e.sum})).reduce(a)})).reduce(a);return t?n:-1*n}}]),e}(),p=a(21),f=a.n(p),b=a(126),h=a(43),y=function(){function e(){Object(l.a)(this,e),this._apiBase="http://localhost:3000/api"}return Object(m.a)(e,[{key:"callApi",value:function(){var e=Object(h.a)(f.a.mark((function e(t,a,n){var r,i,c,s,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.token,i=Object(b.a)(n,["token"]),c={"Content-Type":"application/json",Authorization:r?"Token ".concat(r):""},e.next=4,fetch("".concat(this._apiBase).concat(a),{method:t,mode:"cors",headers:c,body:"GET"!==t?JSON.stringify(i):null});case 4:if((s=e.sent).ok){e.next=9;break}throw(u=new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")).subMessage="\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",u;case 9:return e.next=11,s.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"userLogin",value:function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.callApi("POST","/users/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"userRegister",value:function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.callApi("POST","/users",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"userCurrent",value:function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.callApi("GET","/users/current",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"userUpdate",value:function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.callApi("PUT","/users/current",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=a(125),E=a(62),O=a(57),j=a(63),k=a(12),g=a(59),x=a.n(g),w=a(60),_=a.n(w),q=a(61),S=a.n(q),C=a(123),T=a.n(C),A=a(124),I=a.n(A),M=function(e){var t=e.sum,a=e.fs,n=t>0?{color:"#28a745",fontSize:a}:{color:"#dc3545",fontSize:a};return r.a.createElement("span",{style:n},d.sum(t))},R=a(122),B=a.n(R),F=(a(276),a(58)),U=a.n(F),z=function(e){var t=e.items,a=e.id,n=t.map((function(e,t){var a=e.income?e.sum:-1*e.sum;return r.a.createElement("div",{key:t,className:"receipt-item"},r.a.createElement("span",{className:"receipt-item-name"},e.name),e.price?r.a.createElement("span",null,d.sum(e.price)):null,e.quantity?r.a.createElement("span",null,e.quantity):null,a?r.a.createElement("span",null,r.a.createElement(M,{sum:a})):null)}));return r.a.createElement(U.a,{id:a},r.a.createElement("div",{className:"receipt-item"},r.a.createElement("span",{className:"receipt-item-name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("span",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("span",null,"\u041a\u043e\u043b-\u0432\u043e"),r.a.createElement("span",null,"\u0421\u0443\u043c\u043c\u0430")),r.a.createElement(k.i,null),n)},N=a(79),H=a.n(N),D=a(112),P=a.n(D),K=a(47),L=a.n(K),V=a(113),W=a.n(V),G=a(114),J=a.n(G),Y=a(115),Q=a.n(Y),X=a(80),Z=a(64),$=a.n(Z),ee=a(116),te=a.n(ee),ae=a(117),ne=a.n(ae),re=a(120),ie=a.n(re),ce=a(118),se=a.n(ce),ue=a(119),oe=a.n(ue),le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",quantity:1,price:0,sum:0,income:!1},a.onChange=function(e){var t=e.currentTarget,n=t.name,r=t.value,i=t.checked;"checkbox"!==t.type?a.setState(Object(X.a)({},n,r)):a.setState(Object(X.a)({},n,i))},a}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Object(k.j)(),t=this.props,a=t.id,n=t.go;return r.a.createElement(x.a,{id:a},r.a.createElement(_.a,{left:r.a.createElement(L.a,{key:"back",onClick:n,"data-to":"balance"},e===k.a?r.a.createElement(ne.a,null):r.a.createElement(te.a,null))},r.a.createElement(oe.a,{before:r.a.createElement(L.a,{key:"qr"},r.a.createElement(se.a,null))},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438")),r.a.createElement(U.a,null,r.a.createElement($.a,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:this.state.name,onChange:this.onChange}),r.a.createElement($.a,{type:"number",top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",name:"quantity",value:this.state.quantity,onChange:this.onChange}),r.a.createElement($.a,{type:"number",top:"\u0426\u0435\u043d\u0430",name:"price",value:this.state.price,onChange:this.onChange}),r.a.createElement(ie.a,{name:"income",value:this.state.income,onChange:this.onChange},"\u0414\u043e\u0445\u043e\u0434"),r.a.createElement(S.a,{size:"xl",mode:this.state.income?"commerce":"destructive"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",this.state.income?"\u0434\u043e\u0445\u043e\u0434":"\u0440\u0430\u0441\u0445\u043e\u0434")))}}]),t}(n.Component),me=a(121),de=a.n(me),pe=function(e){var t=e.id;return r.a.createElement(k.f,{id:t},r.a.createElement(k.g,{before:r.a.createElement(de.a,null)},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))},fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={activeModal:null,modalHistory:[]},a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a.setActiveModal=function(e){e=e||null;var t=a.state.modalHistory?Object(v.a)(a.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),a.setState({activeModal:e,modalHistory:t})},a}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.receipts,n=(t.fetchedUser,t.qr,t.go),i=t.popout,c=t.id,s=Object(k.j)(),u=r.a.createElement(k.e,{activeModal:this.state.activeModal},a.map((function(t,a){return r.a.createElement(k.c,{key:a,id:t._id,onClose:e.modalBack,header:r.a.createElement(k.d,{left:s!==k.a&&r.a.createElement(L.a,{onClick:e.modalBack},r.a.createElement(H.a,null)),right:s===k.a&&r.a.createElement(L.a,{onClick:e.modalBack},s===k.a?"\u0413\u043e\u0442\u043e\u0432\u043e":r.a.createElement(P.a,null))},d.date(t.dateTime))},r.a.createElement(k.b,null,r.a.createElement(z,{id:t._id,dateTime:t.dateTime,items:t.items})))})));return r.a.createElement(B.a,{id:"home",activePanel:c,popout:i,modal:u},r.a.createElement(x.a,{id:"balance"},r.a.createElement(_.a,null,"Balance"),r.a.createElement(k.h,{icon:r.a.createElement(W.a,null),header:r.a.createElement(M,{sum:d.totalReceiptSum(a),fs:"2em"}),action:r.a.createElement(S.a,{size:"l",onClick:n,"data-to":"addnote"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434 / \u0440\u0430\u0441\u0445\u043e\u0434")},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u043e\u0445\u043e\u0434\u044b/\u0440\u0430\u0441\u0445\u043e\u0434\u044b"),r.a.createElement(k.i,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:"1em"}},r.a.createElement("div",{style:{flex:"0 1 50%",display:"flex",justifyContent:"flex-end"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingRight:"10px"}},r.a.createElement("span",{style:{color:"#6F6F6F",fontSize:"0.7em",textAlign:"end"}},"\u0414\u043e\u0445\u043e\u0434\u044b"),r.a.createElement(M,{sum:d.totalSum(a,!0),fs:"1.4em"})),r.a.createElement(J.a,{width:16,height:40,fill:"#28a745"})),r.a.createElement("div",{style:{flex:"0 1 50%",display:"flex",justifyContent:"flex-start"}},r.a.createElement(Q.a,{width:16,height:40,fill:"#dc3545"}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"10px"}},r.a.createElement("span",{style:{color:"#6F6F6F",fontSize:"0.7em"}},"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),r.a.createElement(M,{sum:d.totalSum(a,!1),fs:"1.4em"})))),r.a.createElement(T.a,{title:"\u0427\u0435\u043a\u0438"},r.a.createElement(k.b,null,a.map((function(t,a){return r.a.createElement(I.a,{key:a,expandable:!0,onClick:function(t){return e.setActiveModal(t.currentTarget.dataset.to)},"data-to":t._id,indicator:r.a.createElement(M,{sum:t.totalSum})},d.date(t.dateTime))}))))),r.a.createElement(le,{id:"addnote",go:n}),r.a.createElement(pe,{id:"info"}))}}]),t}(n.Component),be=function(){new y;var e=Object(n.useState)("balance"),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),s=Object(o.a)(c,2),l=s[0],m=(s[1],Object(n.useState)(null)),p=Object(o.a)(m,2),b=(p[0],p[1],Object(n.useState)(null)),v=Object(o.a)(b,2),E=v[0],O=(v[1],Object(n.useState)("")),j=Object(o.a)(O,2),k=j[0],g=j[1],x=Object(n.useState)([{_id:"5ddf911573e0c321bc89f1ef",receipts:[{fn:"9289000100521868",fd:"12691",fp:"339287482"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-12T00:00:00.000",items:[{modifiers:[],properties:[],_id:"5ddf911573e0c321bc89f1f0",name:"test",sum:1e3,income:!0},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa20",sum:490,quantity:1,name:"\u041f\u0430\u043a\u0435\u0442-\u043c\u0430\u0439\u043a\u0430 \u041c\u0430\u0433\u043d\u0438\u0442",price:490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1f",sum:5490,quantity:1,name:"4 \u0421\u0415\u0417\u041e\u041d\u0410 \u0420\u0430\u0433\u0443 \u043e\u0432\u043e\u0449\u043d\u043e\u0435 0,4\u043a\u0433(\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439 \u0425\u041a \u041e\u041e\u041e):20",price:5490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1e",sum:22038,quantity:1.225,name:"\u0421\u043a\u0443\u043c\u0431\u0440\u0438\u044f \u0441/\u043c \u0443\u043f (\u0432\u0435\u0441):6",price:17990},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1d",sum:4490,quantity:1,name:"\u041a\u0420\u0410\u0421\u041a\u0418 \u041b\u0415\u0422\u0410 \u0421\u043e\u0442\u0435 400 \u0433 \u043f/\u0443\u043f(\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043e\u0432\u043e\u0449\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f):8",price:4490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1c",sum:3490,quantity:1,name:"MR RICCO Organic \u041c\u0430\u0439\u043e\u043d\u0435\u0437 \u043f\u0435\u0440\u0435\u043f \u044f\u0439\u0446\u0430 67% 375\u0433 \u0434/\u043f(\u041d\u044d\u0444\u0438\u0441):12",price:3490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1b",sum:6490,quantity:1,name:'\u0422\u0432\u043e\u0440\u043e\u0433 \u043e\u0431\u0435\u0437\u0436\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0412\u0435\u043c\u043e\u043b 0,5% 0,25\u043a\u0433 \u043a\u043e\u043d\u0442 (\u0417\u0410\u041e "\u0412\u0435\u043c\u043e\u043b") :18',price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa1a",sum:6490,quantity:1,name:"\u0421\u043c\u0435\u0442\u0430\u043d\u0430 15% 0,45\u043a\u0433 \u0444/\u043f (\u041c\u043e\u043b\u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442 \u041a\u0443\u043d\u0433\u0443\u0440\u0441\u043a\u0438\u0439)",price:6490},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa19",sum:7780,quantity:2,name:"\u041c\u043e\u043b\u043e\u043a\u043e \u043f\u0430\u0441\u0442 2,5% 1\u043b \u0444/\u043f (\u041c\u0430\u0421\u041a\u043e):15",price:3890},{modifiers:[],properties:[],_id:"5de8e27933db3f375c2daa18",sum:4790,quantity:1,name:"\u042f\u0439\u0446\u043e \u0441\u0442\u043e\u043b\u043e\u0432\u043e\u0435 \u04211 10\u0448\u0442 \u0431\u043e\u043a\u0441 :20",price:4790}],totalSum:-60548,__v:0},{_id:"5de8d0037a0bbc1cd8169744",receipts:[{fn:"9280440300403604",fd:"8950",fp:"0648032311"}],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-29T00:00:00.000",totalSum:-3663,items:[{modifiers:[],properties:[],_id:"5de8d0037a0bbc1cd8169746",sum:1063,price:1063,quantity:1,name:"\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"},{modifiers:[],properties:[],_id:"5de8d0037a0bbc1cd8169745",sum:2600,price:2600,quantity:1,name:"\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"}],__v:0},{_id:"5ddf912273e0c321bc89f1f5",receipts:[],userId:"5dce89f495636e23345b7d34",dateTime:"2019-11-15T00:00:00.000",items:[{modifiers:[],properties:[],_id:"5ddf912273e0c321bc89f1f6",name:"test",sum:1e6,income:!0},{modifiers:[],properties:[],_id:"5ddf99d96db8bf32044d2009",name:"test",sum:15e5,income:!0}],totalSum:25e5,__v:0},{_id:"5ddf912273e0c321bc89f1f6",receipts:[],userId:"5dce89f495636e23345b7d34",dateTime:"2020-02-09T14:16:00",items:[{price:590,properties:[],sum:590,name:"\u041f\u0430\u043a\u0435\u0442-\u043c\u0430\u0439\u043a\u0430 \u041c\u0430\u0433\u043d\u0438\u0442",quantity:1,modifiers:[]},{price:6292,properties:[],sum:881,name:"\u042f\u0411\u041b\u041e\u041a\u0418 \u043d\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0436\u0430\u0439 1\u043a\u0433",quantity:.14,modifiers:[]},{price:6291,properties:[],sum:10821,name:"\u042f\u0411\u041b\u041e\u041a\u0418 \u043d\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0436\u0430\u0439 1\u043a\u0433",quantity:1.72,modifiers:[]},{price:32447,properties:[],sum:16483,name:"\u0410\u0412\u041e\u041a\u0410\u0414\u041e 1\u043a\u0433",quantity:.508,modifiers:[]},{price:14832,properties:[],sum:2907,name:"\u041e\u0413\u0423\u0420\u0426\u042b \u0433\u043b\u0430\u0434\u043a\u0438\u0435 1\u043a\u0433",quantity:.196,modifiers:[]},{price:14831,properties:[],sum:9610,name:"\u041e\u0413\u0423\u0420\u0426\u042b \u0433\u043b\u0430\u0434\u043a\u0438\u0435 1\u043a\u0433",quantity:.648,modifiers:[]},{price:4490,properties:[],sum:8980,name:"\u0421\u0418\u0411\u0418\u0420\u0421\u041a\u0410\u042f \u042f\u0413\u041e\u0414\u0410 \u041f\u0440\u043e\u0442\u0435\u0440\u0442 \u0417\u0435\u043c\u043b\u044f\u043d\u0438\u043a\u04300,2",quantity:2,modifiers:[]},{price:4240,properties:[],sum:8480,name:"\u041c\u043e\u043b\u043e\u043a\u043e \u043f\u0430\u0441\u0442 2,5% 1\u043b \u0444/\u043f (\u041d\u044b\u0442\u0432\u0435\u043d\u0441\u043a\u0438\u0439",quantity:2,modifiers:[]},{price:1590,properties:[],sum:1590,name:"\u0421\u0410\u0414\u042b \u041f\u0420\u0418\u0414\u041e\u041d\u042c\u042f \u0421\u043e\u043a \u044f\u0431\u043b\u043e\u043a\u043e \u043f\u0435\u0440\u0441\u0438\u043a 0,2\u043b",quantity:1,modifiers:[]},{price:1590,properties:[],sum:1590,name:"\u0421\u0410\u0414\u042b \u041f\u0420\u0418\u0414\u041e\u041d\u042c\u042f \u0421\u043e\u043a \u043c\u0443\u043b\u044c\u0442\u0438\u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0439 0,",quantity:1,modifiers:[]}],totalSum:-61932,__v:0}]),w=Object(o.a)(x,2),_=w[0],q=(w[1],function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(null),s=Object(o.a)(c,2),l=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),b=p[0],y=p[1],v=Object(n.useState)({}),E=Object(o.a)(v,2),O=E[0],j=E[1];return Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.sendPromise(e,O).then((function(e){i(e.data),y(!1)})).catch((function(e){m(e.data),y(!1)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}b&&function(){t.apply(this,arguments)}()}),[b]),[{response:r,error:l,isLoading:b},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j(e),y(!0)}]}("VKWebAppGetUserInfo")),S=Object(o.a)(q,2),C=S[0],T=(C.response,C.isLoading,C.error,S[1]);Object(n.useEffect)((function(){u.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;switch(a){case"VKWebAppUpdateConfig":var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r);break;case"VKWebAppOpenCodeReaderResult":g(n.code_data)}})),T({})}),[]);var A=d.qr(k);return r.a.createElement(fe,{id:a,fetchedUser:l,go:function(e){i(e.currentTarget.dataset.to)},qr:A,receipts:_,popout:E})};u.a.send("VKWebAppInit"),c.a.render(r.a.createElement(be,null),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.8233d8b9.chunk.js.map