"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{73:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(9439),r=n(824),s=n(5350),i=n(7438),c=n(7236),u=n(2259),l=n(2791),o=n(5984),d=n(7234),m=n(4420),h=n(6351),x=n(184);function p(){var e=(0,m.v9)(h.BY),t=(0,m.I0)(),n=(0,l.useState)(""),p=(0,a.Z)(n,2),j=p[0],v=p[1],f=(0,l.useState)(""),b=(0,a.Z)(f,2),g=b[0],y=b[1],C=function(e){switch(e.target.name){case"name":v(e.target.value);break;case"number":y(e.target.value)}};return(0,x.jsxs)(r.xu,{mt:4,children:[(0,x.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name===j.trim()})))alert("".concat(j," is already in contacts"));else{var a={name:j.trim(),number:g.trim(),id:(0,o.x0)()};v(""),y(""),t((0,d.uK)(a))}},children:[(0,x.jsxs)(s.NI,{children:[(0,x.jsx)(i.l,{children:"Name"}),(0,x.jsx)(c.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:j,onChange:C,required:!0})]}),(0,x.jsxs)(s.NI,{mt:2,children:[(0,x.jsx)(i.l,{children:"Number"}),(0,x.jsx)(c.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:g,onChange:C,required:!0})]}),(0,x.jsx)(u.z,{mt:4,colorScheme:"teal",type:"submit",children:"Add contact"})]}),(0,x.jsx)("hr",{})]})}var j=n(3473),v=function(e){var t=e.contact,n=(0,m.I0)(),r=(0,l.useState)(!1),s=(0,a.Z)(r,2),i=s[0],c=s[1],u=(0,l.useState)(t.name),o=(0,a.Z)(u,2),h=o[0],p=o[1],j=(0,l.useState)(t.number),v=(0,a.Z)(j,2),f=v[0],b=v[1],g=function(e){switch(e.target.name){case"name":p(e.target.value);break;case"phone":b(e.target.value)}};return(0,x.jsxs)("li",{children:[i?(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"text",name:"name",value:h,onChange:g}),(0,x.jsx)("input",{type:"text",name:"phone",value:f,onChange:g})]}):(0,x.jsx)("span",{children:"".concat(t.name,": ").concat(t.number)}),(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{type:"button",onClick:function(){if(c((function(e){return!e})),i){var e={name:h.trim(),number:f.trim(),id:t.id};n((0,d.mP)(e))}},children:i?"Save":"Edit"}),(0,x.jsx)("button",{type:"button",onClick:function(){return n((0,d.GK)(t.id))},children:"Delete"})]})]})};function f(){var e=(0,m.v9)(h.DI),t=(0,m.I0)();return(0,l.useEffect)((function(){t((0,d.yF)())}),[t]),(0,x.jsx)(r.xu,{mt:4,children:(0,x.jsx)(j.QI,{listStyleType:"none",p:0,children:e.map((function(e){return(0,x.jsx)(j.HC,{mb:2,children:(0,x.jsx)(v,{contact:e})},e.id)}))})})}var b=n(6895);function g(){var e=(0,m.v9)(h.Gd),t=(0,m.I0)();return(0,x.jsx)("div",{children:(0,x.jsxs)("label",{children:[" ","Find contacts by name:",(0,x.jsx)("input",{type:"text",name:"filter",title:"Enter first letters or numbers",placeholder:"Enter first letters",value:e,onChange:function(e){t((0,b.h)(e.target.value))}})]})})}var y=n(6154),C=function(){var e=(0,m.v9)(h.VF),t=(0,m.v9)(h.CV);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(g,{}),null!==e&&(0,x.jsx)("p",{children:"Oops, an error has occurred..."}),t&&(0,x.jsx)(y.Bb,{height:"80",width:"80",color:"grey",ariaLabel:"loading"}),(0,x.jsx)(f,{})]})}}}]);
//# sourceMappingURL=73.0ffbc909.chunk.js.map