(this["webpackJsonptemp-bbs"]=this["webpackJsonptemp-bbs"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),u=(n(11),n(2)),s=(n(12),n(0)),j=function(t){return Object(s.jsx)("div",{children:t.log.map((function(t,e){return Object(s.jsxs)("div",{children:[t.name,Object(s.jsx)("br",{}),t.text]},e)}))})},o=n(4),b=n.n(o),l=n(6);var O,f=(O=function(t){var e=t.loadData,n=Object(c.useState)("\u540d\u7121\u3057"),r=Object(u.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(""),b=Object(u.a)(o,2),l=b[0],O=b[1],f=Object(c.useState)(e),d=Object(u.a)(f,2),x=d[0],h=d[1],p=function(){var t=JSON.stringify(x);localStorage.setItem("log",t)};return Object(s.jsxs)("section",{children:[Object(s.jsx)("h4",{id:"title",children:"React-BBS"}),Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),x.push({name:a,text:l}),h(x),p()},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){return i(t.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:l,onChange:function(t){return O(t.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"\u6295\u7a3f"})]})}),Object(s.jsx)("h4",{id:"title",children:"\u30ed\u30b0"}),Object(s.jsx)(j,{log:x})]})},function(){var t=Object(c.useState)(null),e=Object(u.a)(t,2),n=e[0],r=e[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var t=Object(l.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=localStorage.getItem("log"),n=JSON.parse(e),r(n);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=Object(s.jsx)("div",{children:"\u30ed\u30fc\u30c9\u4e2d"});return n?Object(s.jsx)(O,{loadData:n}):i}),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.495a602a.chunk.js.map