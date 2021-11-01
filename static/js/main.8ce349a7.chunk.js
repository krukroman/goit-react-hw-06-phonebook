(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={container:"ContactsFilter_container__xAYob",label:"ContactsFilter_label__1fDbQ",input:"ContactsFilter_input__1Nam5"}},34:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),s=n(12),o=n.n(s),i=n(3),l=n(20),b=n(4),u=n(5),d=n(21),j=n.n(d),m=n(7),O=n(14),_=n(2),f=n(11),h={addContact:Object(b.b)("contacts/add",(function(t,e){return{payload:{id:Object(f.a)(),name:t,number:e}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")};var p=Object(b.c)([],(a={},Object(m.a)(a,h.addContact,(function(t,e){var n=e.payload;if(!function(t,e){var n=e.toLocaleLowerCase();return t.find((function(t){return t.name.toLocaleLowerCase().includes(n)}))}(t,n.name))return[].concat(Object(O.a)(t),[n]);alert("Contact with ".concat(n.name," allready exists"))})),Object(m.a)(a,h.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),x=Object(b.c)("",Object(m.a)({},h.changeFilter,(function(t,e){return e.payload}))),C=Object(_.b)({items:p,filter:x}),v={key:"contacts",storage:j.a,blacklist:["filter"]},N=Object(b.d)({ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}),g=Object(b.a)({reducer:{contacts:Object(u.g)(v,C)},middleware:[N],devTools:!1}),y=Object(u.h)(g),F=(n(34),n(18)),L=n(6),k=n.n(L),w=n(1);function A(){var t=Object(c.useState)(""),e=Object(F.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),s=Object(F.a)(r,2),o=s[0],l=s[1],b=Object(i.b)(),u=Object(f.a)(),d=Object(f.a)(),j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}};return Object(w.jsx)("div",{className:k.a.container,children:Object(w.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault(),b(h.addContact(n,o)),a(""),l("")},children:[Object(w.jsxs)("label",{className:k.a.label,htmlFor:u,children:["Name",Object(w.jsx)("input",{className:k.a.input,type:"text",name:"name",onChange:j,value:n,id:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(w.jsxs)("label",{className:k.a.label,htmlFor:d,children:["Phone number",Object(w.jsx)("input",{className:k.a.input,type:"tel",name:"number",onChange:j,value:o,id:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(w.jsx)("button",{className:k.a.btn,type:"submit",children:"Add contact"})]})})}var E=function(t){return t.contacts.items},D=function(t){return t.contacts.filter},S=function(t){var e=E(t),n=D(t).toLocaleLowerCase();return Object(O.a)(e).sort((function(t,e){return t.name.localeCompare(e.name)})).filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))},z=n(8),B=n.n(z);function q(t){var e=t.name,n=t.number,a=t.onDelete;return Object(w.jsxs)("div",{className:B.a.container,children:[Object(w.jsxs)("div",{className:B.a.info,children:[Object(w.jsx)("p",{className:B.a.name,children:e}),Object(w.jsx)("p",{className:B.a.number,children:n})]}),Object(w.jsx)("button",{className:B.a.btn,type:"button",onClick:a,children:"Delete"})]})}var Z=n(9),J=n.n(Z);function P(){var t=Object(i.c)(S),e=Object(i.b)();return Object(w.jsxs)("div",{className:J.a.container,children:[Object(w.jsx)("h2",{className:J.a.title,children:"Contacts"}),0!==t.length?Object(w.jsx)("ul",{className:J.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(w.jsx)("li",{className:J.a.item,children:Object(w.jsx)(q,{name:a,number:c,onDelete:function(){return function(t){return e(h.deleteContact(t))}(n)}})},n)}))}):Object(w.jsx)("p",{className:J.a.status,children:"Contacts list is empty, or filtered name doesn`t exists. Please add contact, or type correct query in filter"})]})}var Q=n(15),R=n.n(Q);function M(){var t=Object(i.c)(E),e=Object(i.c)(D),n=Object(i.b)();return Object(w.jsx)("div",{className:R.a.container,children:Object(w.jsxs)("label",{className:R.a.label,children:["Filter by name",Object(w.jsx)("input",{className:R.a.input,type:"text",value:e,onChange:function(t){return n(h.changeFilter(t.target.value))},placeholder:"Contacts: ".concat(t.length)})]})})}function T(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A,{}),Object(w.jsx)(M,{}),Object(w.jsx)(P,{})]})}function H(){return Object(w.jsx)(T,{})}o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(i.a,{store:g,children:Object(w.jsx)(l.a,{loading:null,persistor:y,children:Object(w.jsx)(H,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={container:"ContactsEditor_container__1WfgF",form:"ContactsEditor_form__Cx8xv",label:"ContactsEditor_label__1dTS6",input:"ContactsEditor_input__3tbsC",btn:"ContactsEditor_btn__2iclQ"}},8:function(t,e,n){t.exports={container:"Contact_container__2Bz7P",name:"Contact_name__1QREy",number:"Contact_number__HfRFB",btn:"Contact_btn__tKDNF"}},9:function(t,e,n){t.exports={container:"ContactsList_container__3R_a2",title:"ContactsList_title__23qkv",list:"ContactsList_list__1SBnp",item:"ContactsList_item__3FZ2k",status:"ContactsList_status__3XmEn"}}},[[36,1,2]]]);
//# sourceMappingURL=main.8ce349a7.chunk.js.map