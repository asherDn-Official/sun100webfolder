import{a as L,g as U,s as B,_ as R,r as w,u as K,b as E,bA as $,bB as _,j as e,c as V,d as Q,V as X,bC as J,ao as N,bl as ee,bD as se,ai as te,an as ne,ap as oe,R as x,U as A,I as re,B as r,q as ie,P as p,T as n,G as c,bE as M,l as v,L as le,O as ce,i as ae,h as de,t as H,D as xe,$ as he,bF as ue,aE as me,aL as O,bG as P,v as q,bc as pe,bH as fe,Q as je,a5 as ge,a4 as ye}from"./index-7c4d6238.js";import{R as be}from"./responsive-table-51bed081.js";import{S as Ce,F as we,C as Re}from"./FormControlLabel-0ca67999.js";import"./TableRow-2a5a6a71.js";import"./Pagination-2b50fa8d.js";function Fe(s){return L("MuiFormGroup",s)}U("MuiFormGroup",["root","row","error"]);const ke=["className","row"],ve=s=>{const{classes:t,row:o,error:i}=s;return Q({root:["root",o&&"row",i&&"error"]},Fe,t)},Se=B("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,o.row&&t.row]}})(({ownerState:s})=>R({display:"flex",flexDirection:"column",flexWrap:"wrap"},s.row&&{flexDirection:"row"})),Ie=w.forwardRef(function(t,o){const i=K({props:t,name:"MuiFormGroup"}),{className:a,row:d=!1}=i,u=E(i,ke),h=$(),l=_({props:i,muiFormControl:h,states:["error"]}),m=R({},i,{row:d,error:l.error}),y=ve(m);return e.jsx(Se,R({className:V(y.root,a),ownerState:m,ref:o},u))}),Ae=Ie,We=X(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Be=X(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Me=B("span",{shouldForwardProp:J})({position:"relative",display:"flex"}),Ne=B(We)({transform:"scale(1)"}),Te=B(Be)(({theme:s,ownerState:t})=>R({left:0,position:"absolute",transform:"scale(0)",transition:s.transitions.create("transform",{easing:s.transitions.easing.easeIn,duration:s.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:s.transitions.create("transform",{easing:s.transitions.easing.easeOut,duration:s.transitions.duration.shortest})}));function Y(s){const{checked:t=!1,classes:o={},fontSize:i}=s,a=R({},s,{checked:t});return e.jsxs(Me,{className:o.root,ownerState:a,children:[e.jsx(Ne,{fontSize:i,className:o.background,ownerState:a}),e.jsx(Te,{fontSize:i,className:o.dot,ownerState:a})]})}const Le=w.createContext(void 0),Z=Le;function Ue(){return w.useContext(Z)}function Ee(s){return L("MuiRadio",s)}const Ve=U("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),z=Ve,Qe=["checked","checkedIcon","color","icon","name","onChange","size","className"],Xe=s=>{const{classes:t,color:o,size:i}=s,a={root:["root",`color${N(o)}`,i!=="medium"&&`size${N(i)}`]};return R({},t,Q(a,Ee,t))},Oe=B(Ce,{shouldForwardProp:s=>J(s)||s==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,o.size!=="medium"&&t[`size${N(o.size)}`],t[`color${N(o.color)}`]]}})(({theme:s,ownerState:t})=>R({color:(s.vars||s).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:s.vars?`rgba(${t.color==="default"?s.vars.palette.action.activeChannel:s.vars.palette[t.color].mainChannel} / ${s.vars.palette.action.hoverOpacity})`:ee(t.color==="default"?s.palette.action.active:s.palette[t.color].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${z.checked}`]:{color:(s.vars||s).palette[t.color].main}},{[`&.${z.disabled}`]:{color:(s.vars||s).palette.action.disabled}}));function Pe(s,t){return typeof t=="object"&&t!==null?s===t:String(s)===String(t)}const D=e.jsx(Y,{checked:!0}),G=e.jsx(Y,{}),ze=w.forwardRef(function(t,o){var i,a;const d=K({props:t,name:"MuiRadio"}),{checked:u,checkedIcon:h=D,color:l="primary",icon:m=G,name:y,onChange:b,size:C="medium",className:S}=d,j=E(d,Qe),g=R({},d,{color:l,size:C}),I=Xe(g),F=Ue();let f=u;const T=se(b,F&&F.onChange);let k=y;return F&&(typeof f>"u"&&(f=Pe(F.value,d.value)),typeof k>"u"&&(k=F.name)),e.jsx(Oe,R({type:"radio",icon:w.cloneElement(m,{fontSize:(i=G.props.fontSize)!=null?i:C}),checkedIcon:w.cloneElement(h,{fontSize:(a=D.props.fontSize)!=null?a:C}),ownerState:g,classes:I,name:k,checked:f,onChange:T,ref:o,className:V(I.root,S)},j))}),De=ze;function Ge(s){return L("MuiRadioGroup",s)}U("MuiRadioGroup",["root","row","error"]);const Ke=["actions","children","className","defaultValue","name","onChange","value"],Je=s=>{const{classes:t,row:o,error:i}=s;return Q({root:["root",o&&"row",i&&"error"]},Ge,t)},He=w.forwardRef(function(t,o){const{actions:i,children:a,className:d,defaultValue:u,name:h,onChange:l,value:m}=t,y=E(t,Ke),b=w.useRef(null),C=Je(t),[S,j]=te({controlled:m,default:u,name:"RadioGroup"});w.useImperativeHandle(i,()=>({focus:()=>{let f=b.current.querySelector("input:not(:disabled):checked");f||(f=b.current.querySelector("input:not(:disabled)")),f&&f.focus()}}),[]);const g=ne(o,b),I=oe(h),F=w.useMemo(()=>({name:I,onChange(f){j(f.target.value),l&&l(f,f.target.value)},value:S}),[I,l,j,S]);return e.jsx(Z.Provider,{value:F,children:e.jsx(Ae,R({role:"radiogroup",ref:g,className:V(C.root,d)},y,{children:a}))})}),qe=He,Ye=X(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert"),Ze="/assets/gift-4a707011.svg",$e="/assets/valut-848e6d3b.svg",_e="/assets/ticket-5d370265.svg",es="/assets/card-00cc1b9b.svg",ss="data:image/png;base64,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",ts="/assets/green-5ea7a24d.png",ns="/assets/orenge-0814ee96.png",os=()=>{const{dashboard:s}=x.useContext(A),{pathname:t}=re();return e.jsx(r,{children:e.jsxs(ie,{sx:{px:{xs:0,sm:1},backgroundImage:`url(${ts}), url(${ns})`,backgroundSize:"50% auto, 50% auto",backgroundPosition:"bottom left, top right",backgroundRepeat:"no-repeat, no-repeat",maxWidth:{md:"fullWidth"}},children:[e.jsx(r,{sx:{display:"flex",justifyContent:"center"},children:e.jsxs(p,{sx:{p:3,width:{md:"80%",xs:"90%"},borderRadius:3},elevation:0,children:[e.jsx(n,{variant:"h5",fontWeight:700,color:"inherit",sx:{display:{sm:"none",md:"block",xs:"none"},bgcolor:"#FFFFFF"},children:"Staking Overview"}),e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{item:!0,md:4,sm:6,width:{sm:"50%",md:"33%",xs:"50%"},children:e.jsxs(p,{sx:{width:"100%",border:"1px solid #DFE7FF",height:"103px",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx(r,{component:"img",src:es,sx:{mx:2}}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsxs(n,{fontWeight:700,color:"text.secondary",variant:"caption",children:[" ","Total Staked"," "]}),e.jsx(n,{fontWeight:700,children:s==null?void 0:s.active})]})]})}),e.jsx(c,{item:!0,md:4,sm:6,width:{sm:"50%",md:"33%",xs:"50%"},children:e.jsxs(p,{sx:{width:"100%",border:"1px solid #DFE7FF",height:"103px",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx(r,{component:"img",src:Ze,sx:{mx:2}}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsxs(n,{fontWeight:700,color:"text.secondary",variant:"caption",children:[" ","Total Rewards Earned"," "]}),e.jsx(n,{fontWeight:700,children:s==null?void 0:s.reward})]})]})}),e.jsx(c,{item:!0,md:4,sm:12,width:{sm:"100%",md:"33%",xs:"100%"},children:e.jsxs(p,{sx:{width:"100%",border:"1px solid #DFE7FF",height:"103px",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx(r,{component:"img",src:_e,sx:{mx:2}}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsxs(n,{fontWeight:700,color:"text.secondary",variant:"caption",children:["Staking Positions"," "]}),e.jsxs(n,{fontWeight:700,children:[" ",`${s==null?void 0:s.active} Actives`]})]})]})})]})]})}),e.jsx(r,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(p,{sx:{width:{md:"80%",xs:"90%"},m:3,borderRadius:2},elevation:0,children:e.jsx(c,{container:!0,children:M.map((o,i)=>{var a,d,u,h;return e.jsx(c,{item:!0,md:12/((a=M)==null?void 0:a.length),sm:12/((d=M)==null?void 0:d.length),xs:12/((u=M)==null?void 0:u.length),sx:{display:"flex",justifyContent:"center"},children:e.jsx(v,{disableRipple:!0,fullWidth:!0,component:le,to:o.toLowerCase(),sx:((h=t.split("/")[2])==null?void 0:h.split("%20").join(" "))==o.toLowerCase()?{color:"#fff",borderRadius:2,backgroundColor:"primary.main",padding:1.25,"&:hover":{backgroundColor:"primary.main"}}:{color:t==="/"?"#fff":"text.primary"},children:e.jsx(n,{variant:"body1",fontWeight:700,color:"inherit",children:o})},i)})})})})}),e.jsx(r,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(ce,{})})]})})},rs=()=>{const s=ae(de().breakpoints.down("md")),{stakingHistory:t}=x.useContext(A);return e.jsxs(H,{direction:"column",spacing:2,children:[e.jsx(n,{variant:"h6",fontWeight:900,children:"Locked Staking"}),s?e.jsx(r,{children:t==null?void 0:t.map(o=>e.jsxs(r,{sx:{display:"flex",my:2},children:[e.jsx(r,{sx:{width:"10px",background:"linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}),e.jsxs(c,{container:!0,sx:{my:2},children:[e.jsx(c,{item:!0,xs:12,md:12,sm:12,children:e.jsx(c,{container:!0,spacing:4,children:["Token","Time","Size"].map(i=>e.jsx(c,{item:!0,xs:4,md:4,sm:4,children:e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(n,{fontWeight:500,children:i}),e.jsx(n,{children:o[`${i}`]})]})}))})}),e.jsx(xe,{sx:{border:"px solid #D1D1D6",width:"80%",mx:"10%",my:1}}),e.jsx(c,{item:!0,xs:12,md:12,sm:12,children:e.jsx(c,{container:!0,children:["Reward Account","Daily Reward","Reward Token"].map(i=>e.jsx(c,{item:!0,xs:4,md:4,sm:4,children:e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(n,{fontWeight:500,children:i}),e.jsx(n,{children:o[`${i}`]})]})}))})})]})]}))}):e.jsx(be,{titles:["Token","Time","Size","Reward Account","Daily Reward","Reward Token","Remaining Lock-In Period"],data:t,sx:{minHeight:"250px"},hide_pagination:!0})]})},is=()=>{var b,C,S;const{staking_reward:s,Redeem_amount:t,openModel:o,setOpenModel:i}=x.useContext(A),a=()=>{i(!1)},[d,u]=x.useState(null),h=!!d,l=j=>{u(j.currentTarget)},m=()=>{u(null)},y=x.useCallback(async()=>{i(!0),u(null)},[s==null?void 0:s.balance]);return e.jsxs(H,{direction:"column",spacing:2,sx:{m:{md:0,sm:2,xs:2}},children:[e.jsx(n,{variant:"h6",fontWeight:900,children:"Rewards"}),e.jsxs(c,{container:!0,spacing:2,children:[e.jsx(c,{item:!0,md:3,sm:12,xs:12,children:e.jsxs(c,{container:!0,sx:{display:"flex",flexDirection:{md:"column",sm:"row",xs:"row"},justifyContent:{sm:"space-between",xs:"space-between"},alignItems:{sm:"center",xs:"center",md:"flex-start"}},children:[e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{fontWeight:700,children:"Available Rewards"})}),e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{sx:{my:1.5,mx:{md:0,sm:2,xs:2},textAlign:{md:"center",sm:"end",xs:"end"}},children:`${(b=s==null?void 0:s.balance)==null?void 0:b.toFixed(2)} ${(s==null?void 0:s.coin)||""}`})})]})}),e.jsx(c,{item:!0,md:3,sm:12,xs:12,children:e.jsxs(c,{container:!0,sx:{display:"flex",flexDirection:{md:"column",sm:"row",xs:"row"},justifyContent:{sm:"space-between",xs:"space-between"},alignItems:{sm:"center",xs:"center",md:"flex-start"}},children:[e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{fontWeight:700,children:" Estimated USDT"})}),e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{sx:{my:1.5,mx:{md:0,sm:2,xs:2},textAlign:{md:"center",sm:"end",xs:"end"}},children:(C=s==null?void 0:s.estimatedValue)==null?void 0:C.toFixed(2)})})]})}),e.jsx(c,{item:!0,md:3,sm:12,xs:12,children:e.jsxs(c,{container:!0,sx:{display:"flex",flexDirection:{md:"column",sm:"row",xs:"row"},justifyContent:{sm:"space-between",xs:"space-between",md:"flex-start"},alignItems:{sm:"center",xs:"center",md:"flex-start"}},children:[e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{fontWeight:700,children:" Daily Rewards"})}),e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{sx:{my:1.5,mx:{md:0,sm:2,xs:2},textAlign:{md:"center",sm:"end",xs:"end"}},children:((S=s==null?void 0:s.daily)==null?void 0:S.toFixed(2))||0})})]})}),e.jsx(c,{item:!0,md:3,sm:12,xs:12,children:e.jsxs(c,{container:!0,sx:{display:"flex",flexDirection:{md:"column",sm:"row",xs:"row"},justifyContent:{sm:"space-between",xs:"space-between",md:"flex-start"},alignItems:{sm:"center",xs:"center",md:"flex-start"}},children:[e.jsx(c,{item:!0,md:12,sm:6,xs:6,children:e.jsx(n,{fontWeight:700,children:" Action"})}),e.jsxs(c,{item:!0,md:12,sm:6,xs:6,children:[e.jsx(he,{onClick:l,id:"IconMenu",sx:{mx:{md:0,sm:2,xs:2},textAlign:{md:"center",sm:"end",xs:"end"},float:{md:"none",sm:"right",xs:"right"}},children:e.jsx(Ye,{})}),e.jsx(ue,{id:"IconMenu",anchorEl:d,open:h,onClose:m,MenuListProps:{"aria-labelledby":"basic-button"},children:e.jsx(me,{onClick:y,children:e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{component:"img",src:`https://api.sun100.io${s==null?void 0:s.baseCoinImg}`,sx:{width:"30px",mx:2}}),e.jsx(n,{fontSize:"20px",children:"Redeem Reward"})]})})})]})]})})]}),e.jsx(ds,{open:o,onClose:a,data:s})]})},ls=()=>{const{poolResult:s,model:t}=x.useContext(A),[o,i]=x.useState(!1),[a,d]=x.useState(),u=x.useCallback(l=>()=>{i(!0),d(l)},[]),h=x.useCallback(()=>{i(l=>!l)},[]);return e.jsxs(r,{sx:{width:{md:"88%",xs:"90%"},m:3,borderRadius:2},children:[e.jsx(c,{container:!0,spacing:2,children:s==null?void 0:s.map((l,m)=>e.jsx(c,{item:!0,md:4,xs:12,sm:6,children:e.jsxs(p,{sx:{borderRadius:5},children:[e.jsx(r,{sx:{display:"flex",justifyContent:"flex-end",borderTopRightRadius:"10px"},children:e.jsx(v,{variant:"text",sx:{background:"#FF640B1A",width:"100px",borderTopRightRadius:"70px",borderBottomLeftRadius:"100px",fontSize:"x-small"},children:"Trending"})}),e.jsx(r,{sx:{background:"#FF640B1A",width:"118px",height:"40px",mx:1.5,display:"flex",alignItems:"center",justifyContent:"center",border:" 1px solid #DFE7FF",borderRadius:"81.54px"},children:e.jsx(n,{variant:"body1",fontWeight:700,color:"inherit",children:(l==null?void 0:l.baseCoin)||""})}),e.jsx(r,{sx:{p:2,width:"100%"},children:e.jsxs(p,{sx:{width:"100%",border:"1px solid #DFE7FF",height:"103px",display:"flex",justifyContent:"flex-start",alignItems:"center",px:3},children:[e.jsx(r,{component:"img",src:$e,sx:{mx:2}}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(n,{fontWeight:700,children:"SUN100"}),e.jsx(n,{fontWeight:700,color:"#1EB38A",children:`${(l==null?void 0:l.totalAmount)||0}`})]})]})}),e.jsxs(r,{sx:{p:2,width:"100%"},children:[e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",my:1},children:[e.jsxs(n,{fontWeight:700,color:"text.secondary",children:["Daily Rewards"," "]}),e.jsx(n,{fontWeight:700,color:"#1EB38A",children:`${l==null?void 0:l.dailyReturnsInPcnt} %`})]}),e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",my:1},children:[e.jsxs(n,{fontWeight:700,color:"text.secondary",children:["Monthly Rewards"," "]}),e.jsx(n,{fontWeight:700,color:"#1EB38A",children:`${l==null?void 0:l.monthlyReturnsInPcnt} %`})]}),e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",my:1},children:[e.jsx(n,{fontWeight:700,color:"text.secondary",children:"Lock-in Period"}),e.jsx(n,{fontWeight:700,children:l==null?void 0:l.pool_name})]}),e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",my:1},children:[e.jsx(n,{fontWeight:700,color:"text.secondary",children:"Network Type"}),e.jsx(n,{fontWeight:700,children:l==null?void 0:l.networkType})]}),e.jsx(r,{sx:{display:"flex",flexDirection:"column",my:1},children:e.jsx(v,{variant:"contained",sx:{borderRadius:"20px",my:1,background:"linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",color:"white"},onClick:u(m),children:"Stake Now"})})]})]})}))}),t=="1"&&e.jsx(as,{userData:s==null?void 0:s[a||0],open:o,onClose:h}),t=="2"&&e.jsx(cs,{open:o,onClose:h})]})},cs=({onClose:s,open:t})=>{const{resetStak:o}=x.useContext(A),i=()=>{o(),s()};return e.jsx(O,{icon:!1,open:t,onClose:s,children:e.jsxs(p,{sx:{display:"flex",alignItems:"center",flexDirection:"column",width:"444px"},children:[e.jsx(p,{sx:{width:"90%",m:1},children:e.jsxs(r,{sx:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{component:"img",src:ss}),e.jsx(n,{sx:{mx:2},fontWeight:700,variant:"h5",children:"Success"}),e.jsx(n,{sx:{mx:2},variant:"body1",children:"you have Sucessfully locked"}),e.jsx(n,{sx:{mx:2},variant:"body1",children:"SUN100 with USDT"})]})}),e.jsx(r,{sx:{mb:2},children:e.jsx(v,{size:"large",variant:"contained",sx:{borderRadius:"20px",my:1,mx:1,background:"linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",width:"225px"},onClick:i,children:"Continue"})})]})})},as=({userData:s,open:t,onClose:o})=>{const i=je,{add_stake:a}=x.useContext(A),[d,u]=x.useState(""),[h,l]=x.useState(!1),[m,y]=x.useState(""),b=.003,C=P(s==null?void 0:s.createdAt),j=P().diff(C,"day");console.log("cos",j);let g=0;j<=30?g=2e4:j<=60?g=5e4:j<=90?g=1e5:j<=180?g=25e4:j<=365&&(g=5e5);const I=d&&!isNaN(Number(d))?(Number(d)*b).toFixed(2):"0.00",F=x.useCallback(k=>{let{value:W}=k.target;W=W.replace(/\D/g,""),Number(W)>g?y(`Max staking amount allowed: ${g} SUN100`):y(""),u(W)},[g]),f=x.useCallback(k=>{const{checked:W}=k.target;l(W)},[]),T=x.useCallback(async()=>{if(h){const k={poolId:Number(s==null?void 0:s.spId),amount:Number(d)};await a(k)}else i({message:"please accept the terms and conditions",variant:"info"})},[s,d,h]);return e.jsx(O,{icon:!0,open:t,onClose:o,children:e.jsxs(p,{sx:{display:"flex",alignItems:"center",flexDirection:"column",width:"444px"},children:[e.jsx(p,{sx:{width:"90%",m:1},children:e.jsx(n,{sx:{mx:2},fontWeight:700,variant:"h6",children:`Stake ${s==null?void 0:s.baseCoin}`})}),e.jsxs(p,{sx:{width:"90%",m:1},children:[e.jsx(n,{sx:{mx:2},children:`Available ${s==null?void 0:s.baseCoin} to Stake`}),e.jsx(n,{sx:{mx:2},fontWeight:700,children:`${(s==null?void 0:s.totalAmount)||0} ${s==null?void 0:s.baseCoin}`})]}),e.jsxs(p,{sx:{bgcolor:"#fff6f0",width:"90%",m:1,p:2,color:"#000000"},children:[e.jsx(n,{fontWeight:700,variant:"h6",sx:{color:"#000000"},children:"Enter amount to stake"}),e.jsxs(r,{sx:{display:"flex",my:2,color:"#000000"},children:[e.jsx(q,{value:d,onChange:F,placeholder:"Enter amount to stake",size:"medium",error:!!m,helperText:m||"",sx:{"& .MuiOutlinedInput-root":{borderRadius:"15px 0px 0px 15px",padding:0,"& .MuiOutlinedInput-input":{padding:"7px 10px",color:"#000000"}}},fullWidth:!0}),e.jsx(v,{variant:"contained",sx:{borderRadius:"0px 15px 15px 0px"},size:"medium",children:"SUN100"})]}),e.jsxs(pe,{children:[e.jsx(fe,{id:"demo-radio-buttons-group-label",children:e.jsx(n,{fontWeight:700,variant:"h6",color:"#000000",children:"Staking Period"})}),e.jsx(qe,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"36",name:"row-radio-buttons-group",sx:{display:"flex",color:"#000000"},children:e.jsx(we,{value:"36",control:e.jsx(De,{}),label:"36 Months"})})]}),e.jsxs(c,{container:!0,spacing:2,sx:{my:1,width:"100%"},children:[e.jsx(c,{md:4,xs:4,sm:4,item:!0,children:e.jsxs(r,{sx:{width:"100%",border:"1px dashed  #FF640B",borderRadius:"15px",bgcolor:"#FFFFFF",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(n,{sx:{color:"#FF640B"},fontWeight:700,textAlign:"center",variant:"h6",children:s==null?void 0:s.dailyReturnsInPcnt}),e.jsx(n,{textAlign:"center",variant:"body1",fontWeight:500,color:"#000000",sx:{px:2},children:"Daily Rewards"})]})}),e.jsx(c,{md:8,xs:8,sm:8,item:!0,children:e.jsxs(r,{sx:{width:"100%",border:"1px dashed  #FF640B",borderRadius:"15px",bgcolor:"#FFFFFF",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(n,{sx:{color:"#FF640B"},fontWeight:700,textAlign:"center",variant:"h6",children:`${I} ${s==null?void 0:s.baseCoin}`}),e.jsx(n,{textAlign:"center",variant:"body1",fontWeight:500,children:"SUN100 Daily Reward"})]})})]})]}),e.jsxs(r,{sx:{m:1,p:2},children:[e.jsx(n,{variant:"body2",children:"The deposited Sun100 will be locked for 36 months , and you will be unable to withdraw Sun100 within the locking period, Daily Reward wil be paid out directly to your wallet and be withdrawn at your ease"}),e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(Re,{onChange:f,checked:h}),e.jsxs(n,{variant:"body2",children:["I agree to the ",e.jsx("a",{children:"Terms and conditions"})]})]})]}),e.jsxs(r,{sx:{mb:2},children:[e.jsx(v,{variant:"outlined",sx:{borderRadius:"20px",my:1,mx:1},size:"large",onClick:o,children:"cancel"}),e.jsx(v,{size:"large",variant:"contained",sx:{borderRadius:"20px",my:1,mx:1,background:"linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",width:"225px",color:"white"},disabled:!!m||Number(d||"0")==0,onClick:T,children:"Stake Now"})]})]})})},ds=({open:s,onClose:t,data:o})=>{const{Redeem_amount:i}=x.useContext(A),[a,d]=x.useState(""),u=x.useCallback(l=>{let{value:m}=l.target;m=m.replace(/\D/g,""),d(m)},[]),h=x.useCallback(async()=>{await i(Number(a||"0"))},[a]);return e.jsx(O,{icon:!0,open:s,onClose:t,children:e.jsxs(p,{sx:{display:"flex",alignItems:"center",flexDirection:"column",width:"444px"},children:[e.jsx(n,{fontWeight:700,children:"Confirm your rewards transfer to Spot wallet"}),e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",width:"80%"},children:[e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center",my:2},children:[e.jsx(n,{fontWeight:600,children:"Sun 100"}),e.jsx(n,{children:o==null?void 0:o.balance})]}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center",my:2},children:[e.jsx(n,{fontWeight:600,children:"Estimated USDT"}),e.jsx(n,{children:o==null?void 0:o.estimatedValue})]})]}),e.jsx(p,{sx:{width:"90%",m:1,p:2},children:e.jsx(r,{sx:{display:"flex"},children:e.jsx(q,{value:a,onChange:u,placeholder:"Enter amount ",size:"medium",fullWidth:!0})})}),e.jsxs(r,{sx:{mb:2},children:[e.jsx(v,{variant:"outlined",sx:{borderRadius:"20px",my:1,mx:1},size:"large",onClick:t,children:"cancel"}),e.jsx(v,{size:"large",variant:"contained",sx:{borderRadius:"20px",my:1,mx:1,background:"linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",width:"225px"},disabled:Number(a||"0")==0,onClick:h,children:"Redeem Now"})]})]})})},fs=()=>ge([{path:"/",element:e.jsx(os,{}),children:[{path:"/",element:e.jsx(ye,{to:"staking"})},{path:"staking",element:e.jsx(ls,{})},{path:"rewards",element:e.jsx(is,{})},{path:"staking history",element:e.jsx(rs,{})}]}]);export{fs as default};
