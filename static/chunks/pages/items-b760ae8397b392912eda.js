_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"2sl1":function(e,t,c){"use strict";c.r(t);var s=c("nKUr"),n=c("o0o1"),a=c.n(n),r=c("HaE+"),i=c("q1tI"),u=c("20a2"),o=c("nHUQ"),j=c("em2M"),d=function(e){var t=e.item,c=Object(u.useRouter)();return Object(s.jsxs)("div",{"data-testid":"product",className:"product",onClick:function(){event.preventDefault(),c.push("/items/".concat(t.id))},children:[Object(s.jsx)("img",{className:"productImage",height:"auto",width:"100px",src:t.picture}),Object(s.jsxs)("div",{className:"productDesc",children:[Object(s.jsx)("p",{children:t.title}),Object(s.jsxs)("h4",{className:"amount",children:["$ ",t.price.amount]}),t.free_shipping&&Object(s.jsx)("span",{className:"shipment",children:"Env\xedo gratis"})]})]})},l=c("ywTR"),b=c("ypj9");t.default=function(){var e=Object(u.useRouter)(),t=Object(i.useState)(""),c=t[0],n=t[1],p=Object(i.useState)(!1),h=p[0],m=p[1],O=Object(i.useState)(""),x=O[0],f=O[1];return Object(i.useEffect)((function(){m(!0),Object(r.a)(a.a.mark((function t(){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.query.search){t.next=11;break}return t.next=3,Object(o.b)(e.query.search);case 3:if(c=t.sent,n(c.items),!c){t.next=10;break}return t.next=8,Object(j.a)(c.categories);case 8:s=t.sent,f(s);case 10:m(!1);case 11:case"end":return t.stop()}}),t)})))()}),[e.query.search]),Object(s.jsxs)("div",{children:[Object(s.jsx)(l.a,{value:e.query.search}),x&&!h&&Object(s.jsx)(b.a,{categories:x}),h||""===c?Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("img",{src:"/loading.gif",height:"200px",className:"loading",alt:"loading"})}):c.length&&null!=c?c.map((function(e){return Object(s.jsx)(d,{item:e})})):Object(s.jsx)("div",{className:"notFoundContainer",children:Object(s.jsx)("p",{children:"No encontramos resultados para tu busqueda"})})]})}},"Rw/9":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return c("2sl1")}])}},[["Rw/9",0,2,1,3]]]);