(this["webpackJsonpignat-homework"]=this["webpackJsonpignat-homework"]||[]).push([[0],[,,,function(e,t,a){e.exports={list:"Matters_list__YvJfd",high:"Matters_high__2bd92",medium:"Matters_medium__2i88a",low:"Matters_low__ARuko",inactive:"Matters_inactive__3Du7Y",priority:"Matters_priority__1PZai"}},,function(e,t,a){e.exports={wrapper:"Message_wrapper__1wZzo",messageAnim:"Message_messageAnim__14uVg",img:"Message_img__2GcJr",cloud:"Message_cloud__1B7AV",name:"Message_name__3NTgP",message:"Message_message__1Y5Gk",time:"Message_time__1bscx"}},,,,function(e,t,a){e.exports={wrapper:"HomeWork3_wrapper__mLm05",button:"HomeWork3_button__1u6xn",counter:"HomeWork3_counter__281R1"}},,function(e,t,a){e.exports={button:"Button_button__17Bf0"}},function(e,t,a){e.exports={input:"Input_input__2YE-2",error:"Input_error__1_2Mi"}},,,,,,,function(e,t,a){e.exports={name:"FullName_name__3kKTb",nameAnim:"FullName_nameAnim__3osDg"}},,,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),c=(a(28),a(29),a(19)),l=a.n(c);var m=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:l.a.name},e.message))},s=a(5),u=a.n(s);var _=function(e){return r.a.createElement("div",{className:u.a.wrapper},r.a.createElement("div",null,r.a.createElement("img",{className:u.a.img,src:"https://pbs.twimg.com/profile_images/1085971393659981824/0eEoQ2Xd_400x400.jpg",alt:"avatar"})),r.a.createElement("div",{className:u.a.cloud},r.a.createElement("p",{className:u.a.name},e.name),r.a.createElement("p",{className:u.a.message},e.message),r.a.createElement("p",{className:u.a.time},e.time)))},p=a(7),h=a(3),g=a.n(h);var E=function(){var e=[{id:1,title:"job",priority:"high"},{id:2,title:"gym",priority:"medium"},{id:3,title:"girlfriend",priority:"high"},{id:4,title:"university",priority:"low"},{id:5,title:"courses",priority:"high"}],t=Object(n.useState)(e),a=Object(p.a)(t,2),o=a[0],i=a[1];function c(e){return"high"===e.priority?g.a.high:"medium"===e.priority?g.a.medium:"low"===e.priority?g.a.low:g.a.inactive}var l=o.map((function(e){return r.a.createElement("li",{className:g.a.list,key:e.id},r.a.createElement("div",{className:"".concat(g.a.priority," ").concat(c(e))},e.title," ",e.priority),r.a.createElement("button",{className:g.a.low,onClick:function(){!function(e){var t=o.filter((function(t){return t.id!==e}));i(t)}(e.id)}},"X"))})),m=r.a.createElement("li",{className:g.a.list},r.a.createElement("span",null,"Sort by priority "),r.a.createElement("button",{onClick:function(){s("all")},className:g.a.inactive},"All"),r.a.createElement("button",{onClick:function(){s("high")},className:g.a.high},"High"),r.a.createElement("button",{onClick:function(){s("medium")},className:g.a.medium},"Medium"),r.a.createElement("button",{onClick:function(){s("low")},className:g.a.low},"Low"));function s(t){var a;a="all"===t?e:e.filter((function(e){return e.priority===t})),i(a)}return r.a.createElement("ul",null,l,m)},d=a(8),f=a(1),w=a(9),v=a.n(w),b=a(37),N=a(11),k=a.n(N);var y=function(e){return r.a.createElement("button",Object.assign({className:[k.a.button,e.error?k.a.error:""].join("")},e),e.text)},x=a(22),M=a(12),j=a.n(M),C=a(20),O=a.n(C);var A=function(e){var t=e.onEnter,a=e.error,n=Object(x.a)(e,["onEnter","error"]),o=O()(j.a.input,e.error?"".concat(j.a.error):"");return r.a.createElement(r.a.Fragment,null,"                    ",r.a.createElement("input",Object.assign({className:o,onKeyPress:function(e){13===e.charCode&&t&&t()},placeholder:a?"ERROR":""},n,{type:"text"})))},H=[];var S=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(0),c=Object(p.a)(i,2),l=c[0],m=c[1],s=function(){return a&&(H.push({id:Object(b.a)(),name:a}),m(H.length),alert("Hello ".concat(a)),void o(""))},u=H.map((function(e){return" "+e.name}));return r.a.createElement("div",{className:v.a.wrapper},r.a.createElement(A,{value:a,onChange:function(e){return o(e.currentTarget.value)},onEnter:s,error:!a}),r.a.createElement(y,{className:v.a.button,onClick:s,text:"Hello"}),r.a.createElement("span",{className:v.a.counter},"Names Counter: ",l),r.a.createElement(y,{text:"Alert all names",onClick:function(){alert(u)}}))};var W=function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"header"},r.a.createElement(d.b,{exact:!0,to:"/homework_1",className:"hw",activeClassName:"hw-active"},"Homework \u21161 "),r.a.createElement(d.b,{exact:!0,to:"/homework_2",className:"hw",activeClassName:"hw-active"},"Homework \u21162 "),r.a.createElement(d.b,{exact:!0,to:"/homework_3",className:"hw",activeClassName:"hw-active"},"Homework \u21163")),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{path:"/homework_1",render:function(){return r.a.createElement(m,{message:"\u0422\u044b\u0448\u043a\u0435\u0432\u0438\u0447 \u041c\u0438\u0445\u0430\u0438\u043b \u041a\u0430\u0437\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"})}}),r.a.createElement(f.a,{path:"/homework_1",render:function(){return r.a.createElement(_,{name:"Kenshiro",message:"Omae Wa Mou Shindeiru",time:"04:20"})}}),r.a.createElement(f.a,{path:"/homework_2",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(f.a,{path:"/homework_3",render:function(){return r.a.createElement(S,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.870e2bc6.chunk.js.map