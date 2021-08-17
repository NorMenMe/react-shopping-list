(this["webpackJsonpinstagram-app"]=this["webpackJsonpinstagram-app"]||[]).push([[0],{40:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(16),s=c.n(a),i=c(24),j=c.n(i),o=c(27),l=c(13),b=(c(40),c(41),c(17)),d=c(5),u=c(54),m=c(53),p=c(2);var h=function(){return Object(p.jsx)("div",{className:"container-title",children:Object(p.jsx)(b.b,{to:"/create",className:"title",children:"A movie shopping list."})})},O=Object(r.createContext)(),x=c(19),v=c(55);var f=function(e){var t=e.movie,c=Object(r.useContext)(O),n=c.movieShow,a=c.setMovieShow;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"wrapper-img",children:Object(p.jsx)("img",{className:"card-img-top img",src:t.Poster,alt:"Card cap"})}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"wrapper-card",children:[Object(p.jsx)("h3",{className:"card-title",children:t.Title}),Object(p.jsxs)("p",{id:"price",children:["\u20ac",t.price]}),Object(p.jsx)("div",{className:"wrapper-button-basket",children:Object(p.jsx)(v.a,{variant:"info",onClick:function(){return a([].concat(Object(x.a)(n),[t]))},children:"Add to basket"})})]})})]},t.imdbID)})};var N=function(){var e=Object(r.useContext)(O).search.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(f,{movie:e})})}));return Object(p.jsx)("div",{className:"wrapper-list",children:e})};var w=function(){var e=Object(r.useContext)(O),t=e.handleInputChange,c=e.handleFormSubmit,n=e.entry;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:c,children:[Object(p.jsxs)("div",{className:"container-input",children:[Object(p.jsx)("label",{htmlFor:"product",id:"label",children:"Get your movies !!!"}),Object(p.jsx)("input",{type:"text",id:"product",onChange:t,value:n,placeholder:"movie name"})]}),Object(p.jsx)("div",{className:"wrapper-btn",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Search"})})]})})};var S=function(){return Object(p.jsxs)("div",{className:"wrapper-create",children:[Object(p.jsx)("div",{className:"container-form",children:Object(p.jsx)(w,{})}),Object(p.jsx)(N,{})]})};var g=function(e){var t=e.movie,c=e.index,n=e.onRemoveUpdate,a=e.arrForSum,s=e.setArrForSum,i=Object(r.useState)(0),j=Object(l.a)(i,2),o=j[0],b=j[1];return Object(p.jsxs)("li",{className:"listItem",children:[Object(p.jsx)("div",{className:"number-items",children:Object(p.jsx)("p",{children:c+1})}),Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("p",{children:t.Title})}),Object(p.jsxs)("div",{className:"wrapper-counter",children:[Object(p.jsx)("div",{className:"wrapper-increment",onClick:function(){b(o+1),s([].concat(Object(x.a)(a),[t.price]))},children:Object(p.jsx)("span",{children:"+"})}),Object(p.jsx)("span",{className:"count",children:o}),Object(p.jsx)("div",{className:"wrapper-decrement",onClick:function(){b(o-1);var e=a.indexOf(t.price),c=Object(x.a)(a);c.splice(e,1),s(c)},children:Object(p.jsx)("span",{children:"-"})})]}),Object(p.jsx)("div",{className:"price",children:Object(p.jsxs)("p",{children:["\u20ac",t.price]})}),Object(p.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return n(t.imdbID,t.price)},children:"Delete item"})]},c)};var k=function(){var e=Object(r.useContext)(O),t=e.movieShow,c=e.setMovieShow,n=Object(r.useState)([]),a=Object(l.a)(n,2),s=a[0],i=a[1],j=Object(r.useState)(0),o=Object(l.a)(j,2),b=o[0],d=o[1],u=function(e,r){var n=t.filter((function(t){return t.imdbID!==e}));c(n);var a=s.filter((function(e){return e!==r}));i(a)},m=t.map((function(e,t){return Object(p.jsx)(g,{movie:e,index:t,onRemoveUpdate:u,arrForSum:s,setArrForSum:i})}));return Object(r.useEffect)((function(){var e=s.reduce((function(e,t){return e+Number(t)}),0).toFixed(2);d(e)}),[s]),Object(p.jsxs)("div",{className:"wrapper-basket",children:[Object(p.jsx)("h4",{children:"Shopping basket"}),Object(p.jsx)("ul",{className:"wrapper-ul",children:m}),Object(p.jsx)("div",{children:Object(p.jsxs)("p",{className:"total",children:["Total \u20ac",b]})})]})},C=c(31),F=c(32);var y=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),s=Object(l.a)(a,2),i=s[0],x=s[1],v=Object(r.useState)([]),f=Object(l.a)(v,2),N=f[0],w=f[1],g=function(e){return e.price=(10*Math.random()).toFixed(2),e},y=function(){var e=Object(o.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=b88fec9&s=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:(r=e.sent).Error?(x([]),alert(r.Error)):x(r.Search.map(g));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(u.a,{bg:"info",expand:"lg",children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)(C.a,{size:"60px"})}),Object(p.jsxs)("div",{className:"wrapper-home-basket",children:[Object(p.jsx)(b.b,{to:"/",id:"home",children:"Home"}),Object(p.jsx)(b.b,{to:"/basket",id:"basket",children:Object(p.jsx)(F.a,{size:"35px",className:"icon-basket"})})]})]})}),Object(p.jsx)(O.Provider,{value:{handleInputChange:function(e){return n(e.target.value)},handleFormSubmit:function(e){e.preventDefault(),c.length>0&&" "!==c?(y(),n("")):alert("please enter the movie name!")},entry:c,search:i,setSearch:x,movieShow:N,setMovieShow:w},children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",component:h}),Object(p.jsx)(d.a,{exact:!0,path:"/create",component:S}),Object(p.jsx)(d.a,{exact:!0,path:"/basket",component:k})]})})]})};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0b6a334f.chunk.js.map