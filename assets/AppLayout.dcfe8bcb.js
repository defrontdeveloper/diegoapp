import{i as t}from"./address.dbac7aeb.js";import{j as a,a as e,r as d,u as h,L as i,F as m}from"./index.5917084e.js";var p="/assets/mail.22984d84.svg",g="/assets/phone.a7e5b123.svg",v="/assets/facebook.78ac26fc.svg",f="/assets/instagram.12a5d588.svg",k="/assets/twiter.42af9b85.svg",N="/assets/tiktok.521a765e.svg";const b=()=>a("footer",{children:e("div",{className:"container",children:[a("h4",{className:"logo",children:"LOGO"}),a("span",{children:"Somos expertos en morfolog\xEDa, visagismo y t\xE9cnicas de micropigmentaci\xF3n capilar"}),e("div",{className:"row addres",children:[e("div",{className:"col",children:[a("img",{src:t,alt:"",loading:"lazy"}),a("span",{children:"Jr. Prolongaci\xF3n mariano otero 261 VILLA DE SOL 1 interior 09 zona sur Nueva York."})]}),e("div",{className:"col",children:[a("img",{src:p,alt:"",loading:"lazy"}),a("span",{children:"micropigmentacion@gmail.com"})]}),e("div",{className:"col",children:[a("img",{src:g,alt:"",loading:"lazy"}),a("span",{children:"+51 984 455 235"})]})]}),e("div",{children:[a("span",{children:"S\xEDguenos en nuestras redes sociales"}),e("div",{className:"social",children:[a("a",{href:"http://",target:"_blank",rel:"noopener noreferrer",children:a("img",{src:v,alt:"",loading:"lazy"})}),a("a",{href:"http://",target:"_blank",rel:"noopener noreferrer",children:a("img",{src:f,alt:"",loading:"lazy"})}),a("a",{href:"http://",target:"_blank",rel:"noopener noreferrer",children:a("img",{src:k,alt:"",loading:"lazy"})}),a("a",{href:"http://",target:"_blank",rel:"noopener noreferrer",children:a("img",{src:N,alt:"",loading:"lazy"})})]})]})]})});const u=()=>{const[n,o]=d.exports.useState(!1),l=h(),s=()=>{window.scrollTo({top:0,behavior:"smooth"})},c=[{path:"/",name:"Inicio"},{path:"/nosotros",name:"Nosotros"},{path:"/galeria",name:"Galeria"},{path:"/contacto",name:"Contacto"}];return a("header",{children:a("nav",{className:"nav",children:a("div",{className:"container",children:e("div",{className:"nav-wrapper",children:[a("div",{className:"nav-logo",children:a("h3",{className:"logo",onClick:s,children:a(i,{to:"/",children:"Mi LOGO"})})}),e("div",{className:`nav-btn ${n&&"nav-btn-open"}`,onClick:()=>o(!n),children:[a("span",{}),a("span",{}),a("span",{})]}),a("ul",{className:`nav-links ${n&&"nav-links-open"}`,children:c.map(r=>a("li",{onClick:s,children:a(i,{to:r.path,onClick:()=>o(!n),className:l.pathname===r.path?"active":"",children:r.name})},r.name))})]})})})})},L=({children:n})=>e(m,{children:[a(u,{}),n,a(b,{})]});export{L as default};
