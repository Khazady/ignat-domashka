(this["webpackJsonpignat-homework"]=this["webpackJsonpignat-homework"]||[]).push([[0],{14:function(e,t,a){e.exports={list:"Matters_list__YvJfd",high:"Matters_high__2bd92",medium:"Matters_medium__2i88a",low:"Matters_low__ARuko",inactive:"Matters_inactive__3Du7Y",priority:"Matters_priority__1PZai"}},24:function(e,t,a){e.exports={wrapper:"Message_wrapper__1wZzo",messageAnim:"Message_messageAnim__14uVg",img:"Message_img__2GcJr",cloud:"Message_cloud__1B7AV",name:"Message_name__3NTgP",message:"Message_message__1Y5Gk",time:"Message_time__1bscx"}},26:function(e,t,a){e.exports={select:"Select_select__EaFfL",main:"Select_main__F9utF",items:"Select_items__iADtT",item:"Select_item__3f1_y",selected:"Select_selected__3QByA"}},40:function(e,t,a){e.exports={wrapper:"HomeWork3_wrapper__mLm05",button:"HomeWork3_button__1u6xn",counter:"HomeWork3_counter__281R1"}},41:function(e,t,a){},43:function(e,t,a){e.exports={button:"Button_button__17Bf0"}},44:function(e,t,a){e.exports={input:"Input_input__2YE-2",error:"Input_error__1_2Mi"}},46:function(e,t,a){e.exports={Select:"HomeWork7_Select__3kXl7",Radio:"HomeWork7_Radio__WUq7C"}},47:function(e,t,a){e.exports={clock:"homeWork9_clock__3CdEI",date:"homeWork9_date__3U_oF"}},49:function(e,t,a){e.exports={dark:"HomeWork12_dark__3E2sn","dark-text":"HomeWork12_dark-text__iXUvv",red:"HomeWork12_red__wE-C7","red-text":"HomeWork12_red-text__3Got6",some:"HomeWork12_some__1UoTE","some-text":"HomeWork12_some-text__kwkdN"}},57:function(e,t,a){e.exports={name:"FullName_name__3kKTb",nameAnim:"FullName_nameAnim__3osDg"}},63:function(e,t,a){e.exports={spinnerContainer:"Preloader_spinnerContainer__1kiqZ"}},64:function(e,t,a){e.exports=a.p+"static/media/preloader.64b2b081.svg"},73:function(e,t,a){e.exports=a(85)},78:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(78),a(79),a(57)),i=a.n(o);var u=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:i.a.name},e.message))},m=a(24),s=a.n(m);var E=function(e){return r.a.createElement("div",{className:s.a.wrapper},r.a.createElement("div",null,r.a.createElement("img",{className:s.a.img,src:"https://pbs.twimg.com/profile_images/1085971393659981824/0eEoQ2Xd_400x400.jpg",alt:"avatar"})),r.a.createElement("div",{className:s.a.cloud},r.a.createElement("p",{className:s.a.name},e.name),r.a.createElement("p",{className:s.a.message},e.message),r.a.createElement("p",{className:s.a.time},e.time)))},v=a(16),d=a(14),h=a.n(d),_=a(43),f=a.n(_);var p=function(e){return r.a.createElement("button",Object.assign({onClick:e.onClick,className:[f.a.button,e.error?f.a.error:""].join("")},e),e.text)};var g=function(){var e=[{id:1,title:"job",priority:"high"},{id:2,title:"gym",priority:"medium"},{id:3,title:"girlfriend",priority:"high"},{id:4,title:"university",priority:"low"},{id:5,title:"courses",priority:"high"}],t=Object(n.useState)(e),a=Object(v.a)(t,2),c=a[0],l=a[1];function o(e){return"high"===e.priority?h.a.high:"medium"===e.priority?h.a.medium:"low"===e.priority?h.a.low:h.a.inactive}var i=c.map((function(e){return r.a.createElement("li",{className:h.a.list,key:e.id},r.a.createElement("div",{className:"".concat(h.a.priority," ").concat(o(e))},e.title," ",e.priority),r.a.createElement(p,{className:h.a.low,onClick:function(){!function(e){var t=c.filter((function(t){return t.id!==e}));l(t)}(e.id)},text:"X"}))})),u=r.a.createElement("li",{className:h.a.list},r.a.createElement("span",null,"Sort by priority "),r.a.createElement(p,{onClick:function(){m("all")},className:h.a.inactive,text:"All"}),r.a.createElement(p,{onClick:function(){m("high")},className:h.a.high,text:"High"}),r.a.createElement(p,{onClick:function(){m("medium")},className:h.a.medium,text:"Medium"}),r.a.createElement(p,{onClick:function(){m("low")},className:h.a.low,text:"Low"}));function m(t){var a;a="all"===t?e:e.filter((function(e){return e.priority===t})),l(a)}return r.a.createElement("ul",null,i,u)},k=a(12),w=a(9),b=a(8),C=a(40),N=a.n(C),y=a(111),O=a(2),j=a(44),x=a.n(j),H=a(60),S=a.n(H);var M=function(e){var t=e.onEnter,a=e.error,n=Object(O.a)(e,["onEnter","error"]),c=S()(x.a.input,e.error?"".concat(x.a.error):"");return r.a.createElement(r.a.Fragment,null,"                    ",r.a.createElement("input",Object.assign({className:c,onKeyPress:function(e){13===e.charCode&&t&&t()},placeholder:a?"ERROR":""},n,{type:"text"})))},T=a(105),A=a(109);var F=function(e){return r.a.createElement(T.a,{label:e.labelText,control:r.a.createElement(A.a,{color:"primary",checked:e.checked,onChange:e.onChange})})},W=[];var R=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(b.a)(l,2),i=o[0],u=o[1],m=function(){return a&&(W.push({id:Object(y.a)(),name:a}),u(W.length),alert("Hello ".concat(a)),void c(""))},s=W.map((function(e){return" "+e.name})),E=Object(n.useState)(!1),v=Object(b.a)(E,2),d=v[0],h=v[1];return r.a.createElement("div",{className:N.a.wrapper},r.a.createElement(M,{value:a,onChange:function(e){return c(e.currentTarget.value)},onEnter:m,error:!a}),r.a.createElement(p,{className:N.a.button,onClick:m,text:"Hello"}),r.a.createElement("span",{className:N.a.counter},"Names Counter: ",i),r.a.createElement(p,{text:"Alert all names",onClick:function(){alert(s)}}),r.a.createElement(F,{onChange:function(e){return h(e.currentTarget.checked)},checked:d,labelText:"Checkbox button"}))};function D(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Added my own common Button, CheckBox, Input components"))}function I(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],l=a[1],o=function(){l(!1),e.onChange(e.value)};return c?r.a.createElement(M,{value:e.value,autoFocus:!0,onBlur:function(){return o()},onChange:function(t){return e.onChange(t.currentTarget.value)},onKeyPress:function(e){return 13===e.charCode&&o()}}):r.a.createElement("span",{onClick:function(){return l(!0),void e.onChange(e.value)}},e.value)}function B(){var e=Object(n.useState)("CLICK ME"),t=Object(b.a)(e,2),a=t[0],c=t[1];return r.a.createElement(I,{value:a,onChange:c})}var G=a(26),K=a.n(G);function L(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(e.value),i=Object(b.a)(o,2),u=i[0],m=i[1];Object(n.useEffect)((function(){m(e.value)}),[e.value]);var s=e.items.find((function(t){return t.value===e.value})),E=e.items.find((function(e){return e.value===u})),v=function(){return l(!c)};return r.a.createElement("div",{className:K.a.select},r.a.createElement("span",{className:K.a.main,tabIndex:0,onKeyUp:function(t){if("ArrowDown"===t.key||"ArrowUp"===t.key){for(var a=0;a<e.items.length;a++)if(e.items[a].value===u){var n="ArrowDown"===t.key?e.items[a+1]:e.items[a-1];if(n)return void e.onChange(n.value)}s||e.onChange(e.items[0].value)}"Enter"!==t.key&&"Escape"!==t.key||l(!1)},onClick:v},s&&s.title),c&&r.a.createElement("div",{className:K.a.items},e.items.map((function(t){return r.a.createElement("div",{key:t.value,className:K.a.item+" "+(E===t?K.a.selected:""),onMouseEnter:function(){return m(t.value)},onClick:function(){return a=t.value,e.onChange(a),void v();var a}},t.title)}))))}var P=a(112),U=a(108);var J=function(e){return r.a.createElement(P.a,{"aria-label":"city",name:"city1",value:e.value,onChange:function(t){return e.onChange(t.currentTarget.value)}},e.items.map((function(e){return r.a.createElement(T.a,{value:e.value,control:r.a.createElement(U.a,null),label:e.title})})))},Y=a(46),X=a.n(Y);function Z(){var e=[{value:"1",title:"Minsk"},{value:"2",title:"Moscow"},{value:"3",title:"Kyiv"}],t=Object(n.useState)("1"),a=Object(b.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:X.a.Select},r.a.createElement(L,{value:c,onChange:l,items:e})),r.a.createElement("div",{className:X.a.Radio},r.a.createElement(J,{onChange:l,items:e,value:c})))}var q=a(107),Q=a(42),V=function(e,t){switch(t.type){case"SORT":switch(t.payload){case"up":return Object(Q.a)(e.map((function(e){return e})).sort((function(e,t){return e.name>t.name?1:-1})));case"down":return Object(Q.a)(e.sort((function(e,t){return e.name>t.name?-1:1})));default:return e}case"CHECK":switch(t.payload){case"18":return Object(Q.a)(e.filter((function(e){return e.age>=18})));default:return e}default:return e}},z=function(e){return{type:"SORT",payload:e}};function $(){var e=Object(n.useState)([{id:"1",name:"Daniel",age:17},{id:"2",name:"Andrew",age:25},{id:"3",name:"Michael",age:43},{id:"4",name:"John",age:12}]),t=Object(b.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{key:e.id},e.name," - ",e.age," age")}))),r.a.createElement(q.a,{onClick:function(){c(V(a,z("up")))}},"sort asc"),r.a.createElement(q.a,{onClick:function(){c(V(a,z("down")))}},"sort desc"),r.a.createElement(q.a,{onClick:function(){c(V(a,{type:"CHECK",payload:"18"}))}},"check adults"))}var ee=a(47),te=a.n(ee);function ae(){var e=function(e){return e<10?"0"+e:e},t=Object(n.useState)(new Date),a=Object(b.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(0),i=Object(b.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)(!1),E=Object(b.a)(s,2),v=E[0],d=E[1],h=function(){return clearInterval(u)},_=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,e(c.getHours())),":",r.a.createElement("span",null,e(c.getMinutes())),":",r.a.createElement("span",null,e(c.getSeconds()))),f=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,e(c.getDay())),".",r.a.createElement("span",null,e(c.getMonth())),".",r.a.createElement("span",null,e(c.getFullYear())));return r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},r.a.createElement("div",null,r.a.createElement("div",{className:te.a.clock},_),r.a.createElement(q.a,{variant:"contained",color:"primary",onClick:function(){h();var e=window.setInterval((function(){l(new Date)}),1e3);m(e)}},"start"),r.a.createElement(q.a,{variant:"contained",color:"secondary",onClick:h},"stop")),v&&r.a.createElement("span",{className:te.a.date},f))}var ne=a(22),re=a(63),ce=a.n(re),le=a(64),oe=a.n(le);function ie(){return r.a.createElement("div",{className:ce.a.spinnerContainer},r.a.createElement("img",{src:oe.a,alt:"Preloader spinner"}))}var ue=a(38),me={loading:!1},se=function(e){return{type:"CHANGE-LOADING",loading:e}};function Ee(){var e=Object(ne.b)(),t=Object(ne.c)((function(e){return e.loading.loading}));return r.a.createElement("div",null,t?r.a.createElement(ie,null):r.a.createElement(q.a,{onClick:function(){e(se(!0)),setTimeout((function(){e(se(!1))}),2e3),console.log("loading...")}},"set loading..."))}var ve=a(65),de=a(41),he=a.n(de),_e=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=(e.className,e.value),c=Object(ve.a)(e,["type","onChange","onChangeRange","className","value"]),l="".concat(he.a.range," ").concat(n<50?he.a.small:he.a.big);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a([+e.currentTarget.value])},className:l},c)))},fe=a(86),pe=a(110),ge=function(e){var t=e.onChange,a=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{id:"range-slider",gutterBottom:!0},"Double Range"),r.a.createElement(pe.a,{value:a,onChange:function(e,a){t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))};function ke(){var e=Object(n.useState)([0,100]),t=Object(b.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,a[0]),r.a.createElement(_e,{value:a[0],onChangeRange:c})),r.a.createElement("div",null,r.a.createElement("span",null,a[0]),r.a.createElement(ge,{value:[a[0],a[1]],onChange:c}),r.a.createElement("span",null,a[1])))}var we=a(49),be=a.n(we),Ce={currentTheme:"dark"},Ne=[{value:"dark",title:"dark"},{value:"red",title:"red"},{value:"some",title:"some"}];function ye(){var e=Object(ne.c)((function(e){return e.currentTheme.currentTheme})),t=Object(n.useState)(Ne[0].value),a=Object(b.a)(t,2),c=a[0],l=a[1],o=Object(ne.b)();return r.a.createElement("div",{className:be.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:be.a[e+"-text"]},"homeworks 12"),r.a.createElement("hr",null),r.a.createElement(L,{items:Ne,value:c,onChange:l}),r.a.createElement(p,{onClick:function(){return o({type:"CHANGE-THEME",currentTheme:c})},text:"change theme"}))}var Oe=function(){return r.a.createElement(k.b,null,r.a.createElement("div",{className:"header"},r.a.createElement(k.c,{exact:!0,to:"/homework_1",className:"hw",activeClassName:"hw-active"},"Homework \u21161 "),r.a.createElement(k.c,{exact:!0,to:"/homework_2",className:"hw",activeClassName:"hw-active"},"Homework \u21162 "),r.a.createElement(k.c,{exact:!0,to:"/homework_3",className:"hw",activeClassName:"hw-active"},"Homework \u21163"),r.a.createElement(k.c,{exact:!0,to:"/homework_4",className:"hw",activeClassName:"hw-active"},"Homework \u21164"),r.a.createElement(k.c,{exact:!0,to:"/homework_5_6",className:"hw",activeClassName:"hw-active"},"Homework \u21165-6"),r.a.createElement(k.c,{exact:!0,to:"/homework_7",className:"hw",activeClassName:"hw-active"},"Homework \u21167"),r.a.createElement(k.c,{exact:!0,to:"/homework_8",className:"hw",activeClassName:"hw-active"},"Homework \u21168"),r.a.createElement(k.c,{exact:!0,to:"/homework_9",className:"hw",activeClassName:"hw-active"},"Homework \u21169"),r.a.createElement(k.c,{exact:!0,to:"/homework_10",className:"hw",activeClassName:"hw-active"},"Homework \u211610"),r.a.createElement(k.c,{exact:!0,to:"/homework_11",className:"hw",activeClassName:"hw-active"},"Homework \u211611"),r.a.createElement(k.c,{exact:!0,to:"/homework_12",className:"hw",activeClassName:"hw-active"},"Homework \u211612")),r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{path:"/homework_1",render:function(){return r.a.createElement(u,{message:"\u0422\u044b\u0448\u043a\u0435\u0432\u0438\u0447 \u041c\u0438\u0445\u0430\u0438\u043b \u041a\u0430\u0437\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"})}}),r.a.createElement(w.a,{path:"/homework_1",render:function(){return r.a.createElement(E,{name:"Kenshiro",message:"Omae Wa Mou Shindeiru",time:"04:20"})}}),r.a.createElement(w.a,{path:"/homework_2",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(w.a,{path:"/homework_3",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(w.a,{path:"/homework_4",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(w.a,{path:"/homework_5_6",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(w.a,{path:"/homework_7",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(w.a,{path:"/homework_8",render:function(){return r.a.createElement($,null)}}),r.a.createElement(w.a,{path:"/homework_9",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(w.a,{path:"/homework_10",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(w.a,{path:"/homework_11",render:function(){return r.a.createElement(ke,null)}}),r.a.createElement(w.a,{path:"/homework_12",render:function(){return r.a.createElement(ye,null)}})))},je=a(30),xe=Object(je.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING":return Object(ue.a)({},e,{loading:t.loading});default:return e}},currentTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(ue.a)({},e,{currentTheme:t.currentTheme});default:return e}}}),He=Object(je.c)(xe),Se=He;window.store=He,l.a.render(r.a.createElement(k.a,null,r.a.createElement(ne.a,{store:Se},r.a.createElement(Oe,null))),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1e2c9a13.chunk.js.map