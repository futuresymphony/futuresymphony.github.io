import"./index-5b3145ec.js";function s(t){const e=t-1;return e*e*e+1}function m(t,{delay:e=0}){const o=parseInt(getComputedStyle(t).height);return{delay:e,duration:(n=>n<300?500:n<500?750:1e3)(o),easing:s,css:n=>`height: ${n*o}px`}}function d(t){t.style.backgroundColor="yellow",setTimeout(()=>t.style.backgroundColor="",1e3)}function f(){document.querySelectorAll('a[href*="#"]').forEach(t=>{t.removeEventListener("click",i),t.addEventListener("click",i)})}function i(t){let e=t.target;if(location.pathname.replace(/^\//,"")==e.pathname.replace(/^\//,"")&&location.hostname==e.hostname&&!t.ctrlKey&&!t.metaKey){let o=document.querySelector(e.hash);t.preventDefault(),e.parentElement.classList.add("clicked");let c=o.offsetTop-document.querySelector(".masthead").clientHeight+1;u(c,1e3),window.setTimeout(function(){e.parentElement.classList.remove("clicked")},1e3),history.pushState(null,null,e.hash=="#start"?" ":e.hash)}}function u(t,e=0,o=document.scrollingElement){if(o.scrollTop===t)return;const c=(o.scrollTop-t)/2;let n=0,l=null;function a(r){if(l!==null){if(n+=Math.PI*(r-l)/e,n>=Math.PI)return o.scrollTop=t;o.scrollTop=c+t+c*Math.cos(n)}l=r,window.requestAnimationFrame(a)}window.requestAnimationFrame(a)}const p=t=>({Authorization:`Basic ${btoa("admin:"+t)}`});export{s as c,m as f,p as g,d as h,f as i};
