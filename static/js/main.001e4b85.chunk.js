(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(24),r=c.n(n),o=c(6),i=c(7),l=c(1),j=function(e){var t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],n=c[1];return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"home__container",children:[Object(l.jsx)("div",{className:"home__logo",children:Object(l.jsx)("img",{src:"/images/Google_2015_logo.svg.webp",alt:"google"})}),Object(l.jsxs)("form",{className:"home__form",onSubmit:function(t){e.history.push({pathname:"/search",state:a})},children:[Object(l.jsx)("input",{type:"text",className:"home__input",onChange:function(e){return n(e.target.value)},value:a,required:!0}),Object(l.jsx)("div",{className:"home__group",children:Object(l.jsx)("input",{type:"submit",className:"home__btn",value:"Google Search"})}),Object(l.jsx)(i.b,{className:"search__icon"}),Object(l.jsx)(i.a,{className:"microphone"})]})]})})},h=(c(33),c(27)),u=c(2),m=c(9),b=c.n(m),p=c(12),d=c(13),x=c.n(d),O="AIzaSyBRmBmOdiSGHO4EFrtezlgkhTUbnvZ1wV4",f="7b49a6a51e633e716",v=function(e){var t=e.results,c=e.info;return Object(l.jsxs)("div",{className:"show",children:[Object(l.jsx)("div",{className:"show_info",children:c?"Total results: ".concat(c.totalResults):""}),t.length>0?t.map((function(e){return Object(l.jsxs)("div",{className:"show_details",children:[Object(l.jsx)("div",{className:"show__link",children:Object(l.jsx)("a",{href:e.displayLink,children:e.displayLink})}),Object(l.jsx)("div",{className:"show__title",children:Object(l.jsx)("a",{href:e.link,children:e.title})}),Object(l.jsx)("div",{className:"show__description",children:Object(l.jsx)("p",{children:e.snippet})})]})})):""]})},_=function(e){var t=Object(s.useState)(e.location.state?e.location.state:""),c=Object(o.a)(t,2),n=c[0],r=c[1],j=Object(s.useState)([]),h=Object(o.a)(j,2),u=h[0],m=h[1],d=Object(s.useState)(""),_=Object(o.a)(d,2),g=_[0],N=_[1],w=function(){var e=Object(p.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(O,"&cx=").concat(f,"&q=").concat(n));case 4:(c=e.sent)&&(m(c.data.items),N(c.data.searchInformation)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return a.a.useEffect((function(){function t(){return(t=Object(p.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.location.state){t.next=11;break}return t.prev=1,t.next=4,x.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(O,"&cx=").concat(f,"&q=").concat(n));case 4:(c=t.sent)&&(m(c.data.items),N(c.data.searchInformation)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsxs)("div",{className:"search_form",children:[Object(l.jsx)("div",{className:"search__form-logo",children:Object(l.jsx)("img",{src:"/images/Google_2015_logo.svg.webp",alt:"google",onClick:function(){e.history.push("/")}})}),Object(l.jsx)("div",{className:"search__form-input",children:Object(l.jsxs)("form",{className:"home__form",onSubmit:w,children:[Object(l.jsx)("input",{type:"text",className:"home__input",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(l.jsx)(i.b,{className:"search__icon"}),Object(l.jsx)(i.a,{className:"microphone"})]})})]}),Object(l.jsx)(v,{results:u,info:g})]})};var g=function(){return Object(l.jsx)(h.a,{children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",exact:!0,component:j}),Object(l.jsx)(u.a,{path:"/search",exact:!0,component:_})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.001e4b85.chunk.js.map