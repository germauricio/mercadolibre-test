_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{GMzB:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items/[productId]",function(){return t("RH4F")}])},RH4F:function(e,c,t){"use strict";t.r(c);var s=t("nKUr"),n=t("o0o1"),r=t.n(n),i=t("HaE+"),a=t("q1tI"),d=function(e){var c=e.item;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"productContainer",children:[Object(s.jsx)("div",{className:"leftColumn",children:Object(s.jsx)("img",{src:c.picture})}),Object(s.jsxs)("div",{className:"rightColumn",children:[Object(s.jsxs)("p",{children:["new"==c.condition?"Nuevo":"Usado"," - ",c.sold_quantity," vendidos "]}),Object(s.jsx)("h1",{children:c.title}),Object(s.jsxs)("div",{className:"price",children:[Object(s.jsxs)("span",{className:"priceAmount",children:["$ ",c.price.amount]}),0!==c.price.decimals&&Object(s.jsx)("span",{className:"priceDecimals",children:c.price.decimals})]}),Object(s.jsx)("div",{className:"buyButton",children:Object(s.jsx)("button",{children:Object(s.jsx)("strong",{children:"Comprar ahora"})})})]})]}),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"description",children:[Object(s.jsx)("h3",{children:"Descripci\xf3n del producto"}),Object(s.jsx)("p",{children:c.description})]})})]})},j=t("20a2"),o=t("nHUQ"),u=t("ywTR"),l=t("em2M"),b=t("ypj9");c.default=function(){var e=Object(j.useRouter)(),c=Object(a.useState)(""),t=c[0],n=c[1],p=Object(a.useState)(""),O=p[0],x=p[1],h=Object(a.useState)(!1),m=h[0],N=h[1];return Object(a.useEffect)((function(){N(!0),Object(i.a)(r.a.mark((function c(){var t,s,i;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e.query.productId){c.next=14;break}return c.next=3,Object(o.a)(e.query.productId);case 3:if(t=c.sent,n(t),!t){c.next=13;break}return c.next=8,Object(l.b)(t.id);case 8:return s=c.sent,c.next=11,Object(l.a)([s]);case 11:i=c.sent,x(i);case 13:N(!1);case 14:case"end":return c.stop()}}),c)})))()}),[e.query.productId]),Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{}),O&&!m&&Object(s.jsx)(b.a,{categories:O}),m||""===t?Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("img",{src:"/loading.gif",height:"200px",className:"loading",alt:"loading"})}):t?Object(s.jsx)(d,{item:t}):Object(s.jsx)("div",{className:"notFoundContainer",children:Object(s.jsx)("p",{children:"No encontramos resultados para tu busqueda"})})]})}}},[["GMzB",0,2,1,3]]]);