import{a7 as s}from"./vendor-56e6ddcf.js";function d(t,{delay:e=0}){const o=parseInt(getComputedStyle(t).height);return{delay:e,duration:(n=>n<300?500:n<500?750:1e3)(o),easing:s,css:n=>`height: ${n*o}px`}}function m(t){t.style.backgroundColor="yellow",setTimeout(()=>t.style.backgroundColor="",1e3)}function f(){document.querySelectorAll('a[href*="#"]').forEach(t=>{t.removeEventListener("click",i),t.addEventListener("click",i)})}function i(t){let e=t.target;if(location.pathname.replace(/^\//,"")==e.pathname.replace(/^\//,"")&&location.hostname==e.hostname&&!t.ctrlKey&&!t.metaKey){let o=document.querySelector(e.hash);t.preventDefault(),e.parentElement.classList.add("clicked");let a=o.offsetTop-document.querySelector(".masthead").clientHeight+1;u(a,1e3),window.setTimeout(function(){e.parentElement.classList.remove("clicked")},1e3),history.pushState(null,null,e.hash=="#start"?" ":e.hash)}}function u(t,e=0,o=document.scrollingElement){if(o.scrollTop===t)return;const a=(o.scrollTop-t)/2;let n=0,l=null;function c(r){if(l!==null){if(n+=Math.PI*(r-l)/e,n>=Math.PI)return o.scrollTop=t;o.scrollTop=a+t+a*Math.cos(n)}l=r,window.requestAnimationFrame(c)}window.requestAnimationFrame(c)}const p=t=>({Authorization:`Basic ${btoa("admin:"+t)}`});export{d as f,p as g,m as h,f as i};
