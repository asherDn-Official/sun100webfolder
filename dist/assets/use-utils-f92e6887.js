import{bu as m,N as g,Q as y}from"./index-4567d11c.js";var v=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,r=[],s=0;s<t.rangeCount;s++)r.push(t.getRangeAt(s));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||r.forEach(function(o){t.addRange(o)}),e&&e.focus()}},C=v,d={"text/plain":"Text","text/html":"Url",default:"Text"},b="Copy to clipboard: #{key}, Enter";function w(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function D(t,e){var r,s,o,l,c,a,i=!1;e||(e={}),r=e.debug||!1;try{o=C(),l=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(n){if(n.stopPropagation(),e.format)if(n.preventDefault(),typeof n.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=d[e.format]||d.default;window.clipboardData.setData(u,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t);e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))}),document.body.appendChild(a),l.selectNodeContents(a),c.addRange(l);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");i=!0}catch(n){r&&console.error("unable to copy using execCommand: ",n),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),i=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),s=w("message"in e?e.message:b),window.prompt(s,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(l):c.removeAllRanges()),a&&document.body.removeChild(a),o()}return i}var x=D;const f=m(x),h=()=>{const t=y;return{inviteCopy:o=>{f(`${window.location.origin}/account/register/${o}`),t({message:"Copied!",variant:"success"})},contentCopy:o=>{f(o),t({message:"Copied!",variant:"success"})},send:(o,l,c,a)=>{g("sendMailNotification",{toUid:o,title:l,subject:c,message:a})}}};export{h as u};
