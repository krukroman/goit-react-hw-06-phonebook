(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),o=(n(17),n(11)),i=n(2);var l=n(7),u=n(3),b=n.n(u),m=n(0);function j(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),j=u[0],d=u[1],_=Object(l.a)(),f=Object(l.a)(),O=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}};return Object(m.jsx)("div",{className:b.a.container,children:Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(r,j),s(""),d("")},children:[Object(m.jsxs)("label",{className:b.a.label,htmlFor:_,children:["Name",Object(m.jsx)("input",{className:b.a.input,type:"text",name:"name",onChange:O,value:r,id:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,htmlFor:f,children:["Phone number",Object(m.jsx)("input",{className:b.a.input,type:"tel",name:"number",onChange:O,value:j,id:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:b.a.btn,type:"submit",children:"Add contact"})]})})}var d=n(4),_=n.n(d);function f(t){var e=t.name,n=t.number,a=t.onDelete;return Object(m.jsxs)("div",{className:_.a.container,children:[Object(m.jsxs)("div",{className:_.a.info,children:[Object(m.jsx)("p",{className:_.a.name,children:e}),Object(m.jsx)("p",{className:_.a.number,children:n})]}),Object(m.jsx)("button",{className:_.a.btn,type:"button",onClick:a,children:"Delete"})]})}var O=n(5),p=n.n(O);function h(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsxs)("div",{className:p.a.container,children:[Object(m.jsx)("h2",{className:p.a.title,children:"Contacts"}),0!==e.length?Object(m.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsx)("li",{className:p.a.item,children:Object(m.jsx)(f,{name:a,number:c,onDelete:function(){return n(e)}})},e)}))}):Object(m.jsx)("p",{className:p.a.status,children:"Contacts list is empty, or filtered name doesn`t exists. Please add contact, or type correct query in filter"})]})}var x=n(9),C=n.n(x);function v(t){var e=t.value,n=t.onChange;return Object(m.jsx)("div",{className:C.a.container,children:Object(m.jsxs)("label",{className:C.a.label,children:["Filter by name",Object(m.jsx)("input",{className:C.a.input,type:"text",value:e,onChange:n})]})})}function N(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,s]}("contacts",[]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],b=s[1],d=function(t){var e=t.toLocaleLowerCase();return n.find((function(t){return t.name.toLocaleLowerCase().includes(e)}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{onSubmit:function(t,e){if(d(t))alert("".concat(t," is allready in contacts list"));else{var n={id:Object(l.a)(),name:t,number:e};c((function(t){return[n].concat(Object(o.a)(t))}))}}}),Object(m.jsx)(v,{value:u,onChange:function(t){var e=t.target.value;b(e)}}),Object(m.jsx)(h,{contacts:function(){var t=u.toLocaleLowerCase();return Object(o.a)(n).sort((function(t,e){return t.name.localeCompare(e.name)})).filter((function(e){return e.name.toLocaleLowerCase().includes(t)}))}(),onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={container:"ContactsEditor_container__3c_D1",form:"ContactsEditor_form__2WW7j",label:"ContactsEditor_label__3pTeo",input:"ContactsEditor_input__cxNx1",btn:"ContactsEditor_btn__rxaF9"}},4:function(t,e,n){t.exports={container:"Contact_container__12a0V",name:"Contact_name__2Ido0",number:"Contact_number__3pF_E",btn:"Contact_btn__1PgPY"}},5:function(t,e,n){t.exports={container:"ContactsList_container__37cgZ",title:"ContactsList_title__28gev",list:"ContactsList_list__20Xlo",item:"ContactsList_item__18FIZ",status:"ContactsList_status__11K3E"}},9:function(t,e,n){t.exports={container:"ContactsFilter_container__2NtOK",label:"ContactsFilter_label__3Ma3W",input:"ContactsFilter_input__2U-kA"}}},[[19,1,2]]]);
//# sourceMappingURL=main.b7c68e94.chunk.js.map