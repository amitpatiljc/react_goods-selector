(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(6),r=c(4),a=c(5),d=c(8),l=c(7),i=c(1),u=c.n(i),j=(c(13),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.addSelectedGood=function(t){e.setState((function(e){return{selectedGood:[].concat(Object(s.a)(e.selectedGood),[t])}}))},e.removeSelectedGood=function(t){e.setState((function(e){return{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}}))},e.createMessage=function(e){switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e[0]," is selected");case 2:return"".concat(e.join(" and ")," are selected");default:return"".concat(e.slice(0,-1).join(", ")," and ").concat(e[e.length-1]," are selected")}},e.clearGoods=function(){return e.setState({selectedGood:[]})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("h1",{className:"title",children:[this.createMessage(this.state.selectedGood)," ",Object(j.jsx)("button",{type:"button",onClick:this.clearGoods,children:"Clear"})]})}),Object(j.jsx)("ul",{children:h.map((function(t){var c=e.state.selectedGood.includes(t)?"Remove":"Select";return Object(j.jsxs)("div",{className:"goods-container",children:[Object(j.jsx)("li",{children:t},t),Object(j.jsx)("button",{type:"button",onClick:function(){return e.state.selectedGood.includes(t)?e.removeSelectedGood(t):e.addSelectedGood(t)},children:c})]})}))})]})}}]),c}(u.a.Component),f=b;o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6481b45d.chunk.js.map