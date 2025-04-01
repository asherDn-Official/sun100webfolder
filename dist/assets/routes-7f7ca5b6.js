import{M as L,Q as U,V as D,j as e,R as h,U as T,o as y,H as P,T as g,l as C,t as F,S as d,aM as W,bI as O,aO as N,G as j,aR as M,aQ as G,e as A,A as Q,aU as J,B as E,f as H,m as I,aV as q,J as X,I as _,L as K,v as Y,aW as Z,$ as ee,aX as te,i as se,h as ie,P as ae,q as ne,O as B,a5 as oe}from"./index-7c4d6238.js";import{R as re}from"./responsive-table-51bed081.js";import{u as ce,F as le,A as de}from"./file-wrapper-57c7a6fc.js";import{F as me}from"./full-viwer-80a26e4c.js";import{I as V}from"./intro-a059d009.js";import"./TableRow-2a5a6a71.js";import"./Pagination-2b50fa8d.js";const z=t=>{const o=U,{add:i}=L(!0),r=async a=>{a.message.length||a.image?await i(`users/${t}/tickets/${a.ticketId}/messages`,{...a,uid:t}):o({message:"Message can't be empty",variant:"error"})};return{ticket:async a=>{const c=await i(`users/${t}/tickets`,{...a,uid:t}),m={type:"user",message:a.message,time:new Date().getTime(),ticketId:c.id,uid:t,image:void 0};r(m),o({message:"Ticket Created successfully!",variant:"success"})},ticketsChat:r}},xe=D(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),ue=()=>{const[t,o]=h.useState(0),i=s=>o(s),{user:r}=h.useContext(T),{ticket:l}=z(r==null?void 0:r.uid),{data:a}=y("collection",`users/${r==null?void 0:r.uid}/tickets`).collectionSnapshot(),c=async(s,{setSubmitting:x,resetForm:f})=>{const p={...s,createdTime:new Date().getTime(),status:"pending"};await l(p),x(!1),f()},m=P(),w=s=>{m(`view/${s.id}`,{state:{subject:s.subject,message:s.message,status:s.status}})},b=["id","subject","status"],v=a==null?void 0:a.map(s=>b.reduce((f,p)=>(f[p]=s[p],f),{})),k=v?v.map(s=>({ticket:s.id,subject:s.subject,status:e.jsx(g,{bgcolor:s.status==="pending"?"#F0F0F0":"#D8FFE5",color:s.status==="pending"?"text.primary":"#098D00",p:"2px",borderRadius:"6px",textAlign:"center",textTransform:"capitalize",children:s.status==="pending"?"pending":"resolved"}),action:e.jsx(C,{onClick:()=>w(s),sx:{bgcolor:"#fcb92321",borderRadius:"6px",p:"2px",color:"primary.main","&:hover":{bgcolor:"#fcb92321"}},children:"view"})})):[];return e.jsxs(F,{id:"createTicket",direction:"column",justifyContent:"start",spacing:2,sx:{maxHeight:550,width:"100%",height:550,overflow:"auto"},children:[e.jsx(d,{direction:"row",gap:2,children:["Create Ticket","Ticket History"].map((s,x)=>e.jsx(C,{onClick:()=>i(x),disableRipple:!0,sx:{fontWeight:1e3,color:`${t===x?"text.primary":"#818898"}`,borderBottom:"2px solid",borderRadius:0,borderBottomColor:`${t===x?"primary.main":"transparent"}`,"&:hover":{backgroundColor:"transparent",borderBottomColor:`${t===x?"primary.main":"transparent"}`}},children:s}))}),{0:e.jsx(W,{initialValues:{subject:"",message:"",metamask:!1},validationSchema:O,onSubmit:c,children:({values:s})=>e.jsx(N,{children:e.jsxs(j,{container:!0,spacing:2,children:[e.jsx(j,{item:!0,xs:12,children:e.jsx(M,{type:"text",label:"Subject",name:"subject",size:"medium"})}),e.jsx(j,{item:!0,xs:12,children:e.jsx(M,{type:"text",label:"Message",name:"message",size:"medium",multiline:!0,rows:10})}),e.jsx(j,{item:!0,xs:6,sm:3,children:e.jsx(G,{size:"large",sx:{height:"fit-content",width:"fit-content"},children:"Post Ticket"})})]})})}),1:e.jsx(e.Fragment,{children:e.jsx(d,{id:"ticketList",spacing:2,sx:{width:"100%",overflow:"auto"},children:k!=null&&k.length?e.jsx(re,{data:k,titles:["Tickets","Subject","Status","Action"]},"ticket"):e.jsx(g,{variant:"h6",textAlign:"center",py:5,sx:{color:A[400]},children:"No Tickets Found"})})})}[t]]})},ge=t=>{const o=t.type==="user",{user:i}=h.useContext(T),[r,l]=h.useState(!1),a=()=>l(!r);return e.jsxs(d,{direction:o?"row-reverse":"row",spacing:1,children:[e.jsx(Q,{src:o?`https://api.sun100.io${i==null?void 0:i.profileImage}`:J,sx:{width:30,height:30}}),e.jsxs(d,{spacing:1,alignItems:o?"flex-end":"start",children:[e.jsxs(E,{sx:{bgcolor:c=>c.palette.mode==="light"?o?c.palette.grey[100]:`${c.palette.primary.main}20`:o?c.palette.background.default:c.palette.primary.dark},p:2,borderRadius:2,children:[e.jsx(g,{variant:"subtitle2",children:t.message}),t.image&&e.jsx(H,{onClick:a,component:"img",src:`${I.baseURL}${t.image}`,sx:{height:{xs:100,sm:250},width:{xs:100,sm:350},borderRadius:2,cursor:"pointer"}})]}),e.jsx(g,{color:"secondary.light",variant:"caption",children:q(t.time)}),r&&e.jsx(me,{onClick:a,src:`${I.baseURL}${t.image}`})]})]})},he=()=>{var p,$,S;const[t,o]=h.useState(""),{user:i}=h.useContext(T),{ticketId:r}=X(),{data:l}=y("collection",`users/${i==null?void 0:i.uid}/tickets/${r}/messages`).collectionSnapshot(),{data:a}=y("collection",`users/${i==null?void 0:i.uid}/tickets`).collectionSnapshot(),c=(p=a==null?void 0:a.find(n=>n.id===r))==null?void 0:p.status,{state:m}=_(),{link:w,loading:b,upload:v,setLink:k}=ce(),{ticketsChat:s}=z(i==null?void 0:i.uid);h.useEffect(()=>{var n,u;(u=document==null?void 0:document.getElementById("ticketMessageView"))==null||u.scrollTo(0,((n=document.getElementById("ticketMessageView"))==null?void 0:n.scrollHeight)||0)},[document.getElementById("ticketMessageView"),($=document.getElementById("ticketMessageView"))==null?void 0:$.scrollHeight,l==null?void 0:l.length]);const x=async()=>{const n={message:t,time:new Date().getTime(),type:"user",ticketId:r,image:w||""};s(n),o(""),k("")},f=async n=>{var u,R;return await v((R=(u=n.target)==null?void 0:u.files)==null?void 0:R[0])};return e.jsxs(d,{spacing:2,children:[e.jsx(C,{component:K,to:`${I.base}help-center`,variant:"contained",startIcon:e.jsx(xe,{}),sx:{width:"fit-content"},children:"New Ticket"}),e.jsxs(F,{direction:"column",justifyContent:"start",spacing:2,children:[e.jsxs(d,{spacing:1,children:[e.jsx(g,{variant:"h5",children:m==null?void 0:m.subject}),e.jsx(g,{variant:"body2",children:m==null?void 0:m.message})]}),e.jsx(d,{id:"ticketMessageView",spacing:2,sx:{maxHeight:360,width:"100%",height:360,overflow:"auto"},children:(S=l==null?void 0:l.sort((n,u)=>n.time-u.time))==null?void 0:S.map((n,u)=>e.jsx(ge,{...n},u))})]}),e.jsxs(F,{spacing:2,alignItems:"center",sx:{height:"fit-content",width:"100%",position:{xs:"fixed",sm:"relative"},bottom:0,left:0,bgcolor:"background.default",zIndex:1e3},children:[e.jsx(Y,{id:"standard-basic",placeholder:"Write your message..",multiline:!0,variant:"standard",fullWidth:!0,value:t,disabled:c==="closed",onChange:n=>{o(n.target.value)}}),e.jsx(Z,{component:ee,disabled:c==="closed"||b,sx:{borderRadius:2,height:"fit-content",bgcolor:n=>n.palette.mode==="dark"?"transparent":A[100]},overlap:"circular",anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:w&&e.jsx(E,{component:"span",borderRadius:60,sx:{px:1,borderRadius:20,color:"#fff",bgcolor:n=>n.palette.success.main},children:e.jsx(g,{variant:"caption",color:"inherit",children:"1"})}),children:b?e.jsx(te,{size:"small"}):e.jsx(le,{name:"ticketFiles",onChange:f,disabled:c==="closed"||b,children:e.jsx(de,{sx:{transform:"rotate(45deg)"}})})}),e.jsx(C,{disabled:c==="closed"||b,variant:"contained",onClick:x,children:"Send"})]})]})},pe=()=>{const t=se(ie().breakpoints.down("md")),{user:o}=h.useContext(T);return y("collection",`users/${o==null?void 0:o.uid}/tickets`).collectionSnapshot(),e.jsxs(e.Fragment,{children:[e.jsxs(ae,{component:d,spacing:3,sx:{bgcolor:i=>i.palette.mode==="dark"?"background.paper":"#FFFDEB",px:5},alignItems:"start",children:[e.jsx(V,{name:"invite"}),e.jsxs(d,{direction:{xs:"column",md:"row"},justifyContent:"space-between",alignItems:"center",sx:{width:"100%"},children:[e.jsxs(d,{gap:2,children:[e.jsx(g,{variant:"h4",children:"Help Center"}),e.jsx(g,{variant:"subtitle1",children:"Invite your friends to join Sun100 today. When they sign up and start trading, you’ll receive exciting cashback rewards"})]}),e.jsx(d,{children:e.jsx(H,{src:"/images/helpcenter.png",component:"img",sx:{width:{xs:100,md:150},height:{xs:100,md:150}}})})]})]}),e.jsxs(ne,{sx:{px:{xs:2},pb:5,pt:4},children:[e.jsx(V,{name:"ticket"}),e.jsxs(j,{container:!0,justifyContent:"center",spacing:2,children:[t&&e.jsx(j,{item:!0,xs:12,sx:{display:{xs:"block",md:"none"}},children:e.jsx(B,{})}),!t&&e.jsx(j,{item:!0,xs:12,md:8,sx:{display:{xs:"none",md:"block"}},children:e.jsx(B,{})})]})]})]})},Ce=()=>oe([{path:"/*",element:e.jsx(pe,{}),children:[{path:"/*",element:e.jsx(ue,{})},{path:"view/:ticketId",element:e.jsx(he,{})}]}]);export{Ce as default};
