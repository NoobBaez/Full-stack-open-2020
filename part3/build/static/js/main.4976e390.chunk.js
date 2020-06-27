(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),i=t(3),l=t.n(i),m=function(){return l.a.get("/persons").then((function(e){return e.data}))},f=function(e){return l.a.post("/persons",e).then((function(e){return e.data}))},s=function(e){return l.a.delete("".concat("/persons","/").concat(e)).then((function(e){return e.data}))},d=function(e){return l.a.put("".concat("/persons","/").concat(e.id),e).then((function(e){return e.data}))},h=function(e){var n=e.onChange;return r.a.createElement("form",null,"filter shown with",r.a.createElement("input",{type:"text",onChange:n}))},b=function(e){var n=e.person,t=e.handleOnDelete;return r.a.createElement("button",{onClick:function(){return t(n)}},"delete")},p=function(e){var n=e.persons,t=e.handleOnDelete;return n.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement(b,{person:e,handleOnDelete:t}))}))},v=function(e){var n=e.newName,t=e.newNumber,a=e.handleOnSubmit,u=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("button",{type:"submit"},"add"))},E=function(e){var n=e.notification;return n?r.a.createElement("p",{className:n.isSuccess?"successNotification":"errorNotification"}," ",n.message):null},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(),i=Object(o.a)(c,2),l=i[0],b=i[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),O=w[0],C=w[1],N=Object(a.useState)(""),j=Object(o.a)(N,2),S=j[0],k=j[1],D=Object(a.useState)(),y=Object(o.a)(D,2),x=y[0],I=y[1];Object(a.useEffect)((function(){m().then((function(e){u(e)}))}),[]);var J=function(){C(""),k("")},L=function(e){d(e).then((function(e){u(t.map((function(n){return n.name===e.name?e:n}))),J()})).catch((function(){I({message:"Information of ".concat(e.name," has been removed from server"),isSuccess:!1}),u(t.filter((function(n){return n.id!==e.id}))),setTimeout((function(){I(null)}),5e3)}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{notification:x}),r.a.createElement(h,{onChange:function(e){var n=e.target.value.toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().trim().includes(n)}));b(a)}}),r.a.createElement("h3",null,"add a new number"),r.a.createElement(v,{newName:O,newNumber:S,handleOnSubmit:function(e){(e.preventDefault(),function(){if(""===O.trim()||S.length<3)return!1;var e=t.find((function(e){return e.name===O}));if(e){if(window.confirm("".concat(O," is already added to phonebook, replace the old number with a new one?"))){var n={id:e.id,name:O,number:S};L(n),C(""),k("")}return!1}return!0}())&&f({name:O,number:S}).then((function(e){u(t.concat(e)),J(),I({message:"Added ".concat(O),isSuccess:!0}),setTimeout((function(){I(null)}),5e3)}))},handleNameChange:function(e){return C(e.target.value)},handleNumberChange:function(e){return k(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(p,{persons:l||t,handleOnDelete:function(e){window.confirm("Delete ".concat(e.name))&&(s(e.id),u(t.filter((function(n){return n.id!==e.id}))))}}))};t(36);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4976e390.chunk.js.map