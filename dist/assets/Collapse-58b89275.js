import{a as tt,g as et,s as T,_ as o,r as y,u as nt,bi as it,aa as ot,b as rt,h as st,bj as at,an as lt,j as C,c as dt,d as pt,bk as N}from"./index-4567d11c.js";function ct(n){return tt("MuiCollapse",n)}et("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ht=n=>{const{orientation:e,classes:r}=n,p={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return pt(p,ct,r)},mt=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ft=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),gt=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),P=y.forwardRef(function(e,r){const p=nt({props:e,name:"MuiCollapse"}),{addEndListener:S,children:U,className:_,collapsedSize:f="0px",component:A,easing:$,in:D,onEnter:j,onEntered:W,onEntering:b,onExit:I,onExited:k,onExiting:M,orientation:F="vertical",style:z,timeout:a=it.standard,TransitionComponent:q=ot}=p,B=rt(p,ut),g=o({},p,{orientation:F,collapsedSize:f}),c=ht(g),H=st(),G=at(),l=y.useRef(null),v=y.useRef(),x=typeof f=="number"?`${f}px`:f,u=F==="horizontal",h=u?"width":"height",E=y.useRef(null),J=lt(r,E),d=t=>i=>{if(t){const s=E.current;i===void 0?t(s):t(s,i)}},R=()=>l.current?l.current[u?"clientWidth":"clientHeight"]:0,K=d((t,i)=>{l.current&&u&&(l.current.style.position="absolute"),t.style[h]=x,j&&j(t,i)}),O=d((t,i)=>{const s=R();l.current&&u&&(l.current.style.position="");const{duration:m,easing:w}=N({style:z,timeout:a,easing:$},{mode:"enter"});if(a==="auto"){const L=H.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${L}ms`,v.current=L}else t.style.transitionDuration=typeof m=="string"?m:`${m}ms`;t.style[h]=`${s}px`,t.style.transitionTimingFunction=w,b&&b(t,i)}),Q=d((t,i)=>{t.style[h]="auto",W&&W(t,i)}),V=d(t=>{t.style[h]=`${R()}px`,I&&I(t)}),X=d(k),Y=d(t=>{const i=R(),{duration:s,easing:m}=N({style:z,timeout:a,easing:$},{mode:"exit"});if(a==="auto"){const w=H.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${w}ms`,v.current=w}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[h]=x,t.style.transitionTimingFunction=m,M&&M(t)}),Z=t=>{a==="auto"&&G.start(v.current||0,t),S&&S(E.current,t)};return C.jsx(q,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:E,timeout:a==="auto"?null:a},B,{children:(t,i)=>C.jsx(mt,o({as:A,className:dt(c.root,_,{entered:c.entered,exited:!D&&x==="0px"&&c.hidden}[t]),style:o({[u?"minWidth":"minHeight"]:x},z),ref:J},i,{ownerState:o({},g,{state:t}),children:C.jsx(ft,{ownerState:o({},g,{state:t}),className:c.wrapper,ref:l,children:C.jsx(gt,{ownerState:o({},g,{state:t}),className:c.wrapperInner,children:U})})}))}))});P.muiSupportAuto=!0;const Et=P;export{Et as C};
