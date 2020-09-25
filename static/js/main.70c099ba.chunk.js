(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},33:function(e,t,n){},34:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),l=n.n(r),i=(n(33),n(34),n(8)),c=n(1),u=n.n(c),s=n(2),m=n(3);function d(){var e=Object(s.a)(["\n  color: red;\n"]);return d=function(){return e},e}function f(){var e=Object(s.a)(["\n  color: green;\n"]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  height: 200px;\n  width: 320px;\n  border: 2px solid black;\n  border-radius: 10px;\n  background-color: rgb(255, 255, 255);\n  margin: 20px;\n  padding: 20px;\n  font-size: 18px;\n\n  p:first-child {\n    border-bottom: 2px solid black;\n    display: flex;\n    justify-content: center;\n    font-size: 22px;\n    padding-bottom: 5px;\n  }\n"]);return p=function(){return e},e}function b(){var e=Object(s.a)(["\n  background-color: rgb(118, 118, 167);\n\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  border-radius: 5px;\n"]);return b=function(){return e},e}function g(){var e=Object(s.a)(["\n  background-color: rgb(55, 55, 117);\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  padding: 10px;\n  margin-left: 20px;\n  border-radius: 5px;\n"]);return g=function(){return e},e}function v(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return v=function(){return e},e}function h(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n"]);return h=function(){return e},e}function x(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  /* background-color: rgb(130, 140, 155); */\n  background-color: rgb(198, 188, 230);\n"]);return x=function(){return e},e}function E(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return E=function(){return e},e}function O(){var e=Object(s.a)(["\n  text-align: center;\n  padding: 20px;\n"]);return O=function(){return e},e}function j(){var e=Object(s.a)(["\n  background-color: rgb(104, 104, 179);\n  border-bottom: 10px solid black;\n  display: flex;\n  justify-content: center;\n  max-height: 320px;\n  height: 300px;\n  padding: 0 20px 0 20px;\n\n  h1 {\n    font-size: 80px;\n    color: white;\n    font-weight: 600;\n  }\n"]);return j=function(){return e},e}function C(){var e=Object(s.a)(["\n  font-size: 26px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return C=function(){return e},e}function y(){var e=Object(s.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 18px;\n  border: 1px solid gray;\n  margin: 5px;\n"]);return y=function(){return e},e}var k=m.a.input(y()),w=m.a.label(C()),S=m.a.div(j()),T=m.a.div(O()),D=m.a.div(E()),I=m.a.div(x()),B=m.a.div(h()),z=m.a.div(v()),R=m.a.div(g()),P=m.a.div(b()),q=m.a.div(p()),L=m.a.span(f()),G=m.a.span(d()),M=n(6),N=n(5),A=n(7),F=n.n(A),J=function(e){return o.a.createElement(w,null,e.label,o.a.createElement(k,Object.assign({},e,{placeholder:e.hint,type:e.type})))},U=function(){var e=Object(a.useState)({email:"",password:"",passwordConfirm:""}),t=Object(M.a)(e,2),n=t[0],r=t[1];return o.a.createElement(R,null,o.a.createElement(J,{hint:"Digite seu email...",type:"email",label:"email",onChange:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{email:e.target.value}))}}),o.a.createElement(J,{hint:"Senha...",type:"password",label:"Senha",onChange:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{password:e.target.value}))}}),o.a.createElement(J,{hint:"Confirme a Senha...",type:"password",label:"Senha",onChange:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{passwordConfirm:e.target.value}))}}),o.a.createElement(J,{type:"submit",value:"Cadastrar",onClick:function(){F.a.post("https://reqres.in/api/register",n).then((function(e){(e.status=200)&&n.password===n.passwordConfirm&&window.location.reload()})).catch((function(e){n.email.length>3&&n.password.length>3&&alert("Email ou Senha invalidos")})),""===n.email&&""===n.password?u.a.fire({title:"Campos Invalidos",text:"Campo Email e Senha n\xe3o podem ser vazios",icon:"error",confirmButtonText:"Ok"}):""===n.email?u.a.fire({title:"Email Invalido",text:"Campo Email n\xe3o pode ser vazio",icon:"error",confirmButtonText:"Ok"}):""===n.password?u.a.fire({title:"Senha Invalido",text:"Campo Senha n\xe3o pode ser vazio",icon:"error",confirmButtonText:"Ok"}):n.email.length<=3?u.a.fire({title:"Email Invalido",text:"Campo Email n\xe3o pode ser menor que 4 caracteres",icon:"error",confirmButtonText:"Ok"}):n.password<=3&&u.a.fire({title:"Senha Invalido",text:"Campo Senha n\xe3o pode ser menor que 4 caracteres",icon:"error",confirmButtonText:"Ok"})}}))},V=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(M.a)(t,2),r=n[0],l=n[1];return o.a.createElement(P,null,o.a.createElement(J,{hint:"Digite seu email...",type:"email",label:"email",onChange:function(e){return l(Object(N.a)(Object(N.a)({},r),{},{email:e.target.value}))}}),o.a.createElement(J,{hint:"Senha...",type:"password",label:"Senha",onChange:function(e){return l(Object(N.a)(Object(N.a)({},r),{},{password:e.target.value}))}}),o.a.createElement(J,{type:"submit",value:"Acessar",onClick:function(){F.a.post("https://reqres.in/api/login",r).then((function(e){console.log(e),console.log(e.data.token),200===e.status&&(localStorage.setItem("@covid19/token",e.data.token),window.location.reload())})).catch((function(e){r.email.length>3&&r.password.length>3&&u.a.fire({title:"Usu\xe1rio Invalido",text:"Email ou Senha invalidos",icon:"error",confirmButtonText:"Ok"})})),""===r.email&&""===r.password?u.a.fire({title:"Campos Invalidos",text:"Campo Email e Senha n\xe3o podem ser vazios",icon:"error",confirmButtonText:"Ok"}):""===r.email?u.a.fire({title:"Email Invalido",text:"Campo Email n\xe3o pode ser vazio",icon:"error",confirmButtonText:"Ok"}):""===r.password?u.a.fire({title:"Senha Invalido",text:"Campo Senha n\xe3o pode ser vazio",icon:"error",confirmButtonText:"Ok"}):r.email.length<=3?u.a.fire({title:"Email Invalido",text:"Campo Email n\xe3o pode ser menor que 4 caracteres",icon:"error",confirmButtonText:"Ok"}):r.password<=3&&u.a.fire({title:"Senha Invalido",text:"Campo Senha n\xe3o pode ser menor que 4 caracteres",icon:"error",confirmButtonText:"Ok"})}}))},W=(n(52),function(e){return o.a.createElement("button",Object.assign({},e,{className:e.typebtn}),e.text)}),Z=function(e){var t=Object(a.useState)(!0),n=Object(M.a)(t,2),r=n[0],l=n[1],i=Object(a.useState)(!1),c=Object(M.a)(i,2),u=c[0],s=c[1];return e.logged?o.a.createElement(D,null,o.a.createElement(W,{text:"Logout",typebtn:"btnRed",onClick:function(){localStorage.removeItem("@covid19/token"),window.location.reload()}})):!1===e.logged?o.a.createElement(T,null,r&&o.a.createElement(W,{text:"Cadastrar",typebtn:"btnRed",onClick:function(){l(!1),s(!0)}}),u&&o.a.createElement(W,{text:"Login",typebtn:"btnGreen",onClick:function(){l(!0),s(!1)}}),r&&o.a.createElement(V,null),u&&o.a.createElement(U,null)):void 0},$=function(e){return o.a.createElement(S,null,o.a.createElement("h1",null,"Casos de Covid 19 no Mundo"),o.a.createElement("div",null,o.a.createElement(Z,{logged:e.isLogged})))},H=function(e){var t=Object(a.useState)({totalConfirm:"",totalRecover:"",totalDeath:""}),n=Object(M.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){F.a.get("https://api.covid19api.com/summary").then((function(e){l({totalConfirm:e.data.Global.TotalConfirmed,totalRecover:e.data.Global.TotalRecovered,totalDeath:e.data.Global.TotalDeaths})})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",e,o.a.createElement("div",null,o.a.createElement(q,null,o.a.createElement("p",null,"Casos Globais"),o.a.createElement("p",null,"Casos Confirmados: ",r.totalConfirm),o.a.createElement("p",null,o.a.createElement(L,null,"Pacientes Recuperados: "),r.totalRecover),o.a.createElement("p",null,o.a.createElement(G,null,"Mortes: "),r.totalDeath))))},K=n(11),Q=n.n(K),X=n(27),Y=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)({totalConfirm:"",totalRecover:"",totalDeath:""}),s=Object(i.a)(c,2),m=s[0],d=s[1],f=Object(a.useState)(!1),p=Object(i.a)(f,2),b=p[0],g=p[1],v=e.isLogged,h=new Date,x=new Date;h.setDate(h.getDate()-1),x.setDate(x.getDate()-2),h=h.toISOString().slice(0,10),x=x.toISOString().slice(0,10);var E=function(){var e=Object(X.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://api.covid19api.com/country/".concat(t,"?from=").concat(x,"T00:00:00Z&to=").concat(h,"T00:00:00Z")).then((function(e){if(200===e.status){var t=e.data[0];d({totalConfirm:t.Confirmed,totalRecover:t.Recovered,totalDeath:t.Deaths}),console.log("stat->",e.status)}})).catch((function(e){g(!1),u.a.fire({title:"Pa\xeds Invalido",text:"Digite um pa\xeds V\xe1lido",icon:"error",confirmButtonText:"Ok"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();switch(Object(a.useEffect)((function(){E("brazil")}),[]),e.searchType){case"static":return o.a.createElement("div",null,o.a.createElement(q,null,o.a.createElement("p",null,"Casos do Brasil"),o.a.createElement("p",null,"Casos Confirmados: ",m.totalConfirm),o.a.createElement("p",null,o.a.createElement(L,null,"Pacientes Recuperados: "),m.totalRecover),o.a.createElement("p",null,o.a.createElement(G,null,"Mortes: "),m.totalDeath)));case"dynamic":return v?o.a.createElement("div",null,b&&o.a.createElement(q,null,o.a.createElement("p",null,"Casos ",r),o.a.createElement("p",null,"Casos Confirmados: ",m.totalConfirm),o.a.createElement("p",null,o.a.createElement(L,null,"Pacientes Recuperados: "),m.totalRecover),o.a.createElement("p",null,o.a.createElement(G,null,"Mortes: "),m.totalDeath)),o.a.createElement("div",{className:"search"},o.a.createElement(J,{hint:"Pesquisa por Pa\xeds...",type:"text",onChange:function(e){return l(e.target.value)}}),o.a.createElement(W,{typebtn:"btnGrey",text:"Pesquisar",onClick:function(){if(""===r)return g(!1),void u.a.fire({title:"Vazio!",text:"O campo n\xe3o pode ser vazio",icon:"error",confirmButtonText:"Ok"});r.length<=3?(u.a.fire({title:"Pa\xeds Invalido!",text:"Digite um pa\xeds com mais de 3 caracteres",icon:"error",confirmButtonText:"Ok"}),g(!1)):(E(r),g(!0))}}))):o.a.createElement(o.a.Fragment,null);default:return o.a.createElement(o.a.Fragment,null)}},_=function(e){return o.a.createElement(I,e,o.a.createElement("div",null,o.a.createElement(B,null,o.a.createElement(H,null),o.a.createElement(Y,{searchType:"static"})),o.a.createElement(z,null,o.a.createElement(Y,{searchType:"dynamic",isLogged:e.isLogged}))))},ee=(n(54),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){null!==localStorage.getItem("@covid19/token")&&r(!0)}),[]);return console.log("ta logado? ->",n),o.a.createElement("div",null,o.a.createElement($,{isLogged:n}),o.a.createElement(_,{onClick:function(){!1===n&&u.a.fire({title:"Usu\xe1rio n\xe3o est\xe1 logado",text:"Por favor, fa\xe7a o login antes de Continuar",icon:"error",confirmButtonText:"Ok"})},isLogged:n}))});var te=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.70c099ba.chunk.js.map