import{j as e,aL as o,S as t,ax as r,f as l,bR as c,T as s,l as m,L as a,m as n,k as h,aR as d,aQ as u,aG as x,aM as g,bT as j,aO as p,O as b,a5 as f}from"./index-7c4d6238.js";import{u as y}from"./auth-e4923acc.js";const k=()=>e.jsx(o,{fullScreen:!1,children:e.jsxs(t,{component:r,spacing:3,alignItems:"center",children:[e.jsx(l,{component:"img",src:c,sx:{height:"auto",width:50}}),e.jsx(s,{variant:"h5",fontWeight:900,children:"Check Your Email"}),e.jsx(s,{align:"center",sx:{maxWidth:400},children:"Password reset request has been sent to your email. Please check your email to reset your password."}),e.jsx(m,{size:"large",variant:"outlined",component:a,to:`${n.base}account/login`,children:"Back to Login"})]})}),w=()=>e.jsxs(h,{component:t,spacing:3,sx:{height:"90vh",justifyContent:"center",mx:{sm:6}},children:[e.jsx(s,{variant:"h5",fontWeight:900,children:"Reset Password"}),e.jsx(s,{variant:"subtitle1",children:"Please enter your registered email address. An email notification with a password reset code will be sent to you."}),e.jsx(d,{label:"Email",name:"email",type:"text",size:"medium",hide:!0}),e.jsx(u,{size:"large",sx:{fontWeight:"bold"},children:"Reset Password"}),e.jsxs(s,{textAlign:"center",children:["Remember your password?"," ",e.jsx(x,{component:a,fontWeight:"bold",to:`${n.base}account/login`,children:"Login"})]})]}),C=()=>{const{forgot:i}=y();return e.jsxs(e.Fragment,{children:[e.jsx(g,{initialValues:{email:""},validationSchema:j,onSubmit:i,children:()=>e.jsx(p,{children:e.jsx(w,{})})}),e.jsx(b,{})]})},S=()=>f([{path:"/*",element:e.jsx(C,{}),children:[{path:"success",element:e.jsx(k,{})}]}]);export{S as default};
