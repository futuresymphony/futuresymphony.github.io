import{_ as R,a as U,b as W,c as Y,d as Z,e as y,f as $,g as x,h as ee,i as se}from"./9-89318159.js";import{S as ae,i as le,s as te,e as m,j as D,c as v,a as g,l as L,d as f,D as z,b as _,E as B,f as T,F as u,t as ne,g as re,h as ie,k as C,H as F,aa as oe,J as G,X as _e,M as ce}from"./vendor-7dd77b39.js";function J(o,l,r){const t=o.slice();return t[5]=l[r].article,t}function O(o){let l,r,t,i,a,e,n,s,d,E=o[5].date[o[3]]+"",V,b,p,k=o[5].title[o[3]]+"",A,w,M=o[5].content.full[o[3]]+"",N,H;return{c(){l=m("a"),r=m("div"),t=m("img"),e=D(),n=m("div"),s=m("div"),d=m("i"),V=D(),b=m("span"),p=m("b"),A=D(),w=m("div"),this.h()},l(c){l=v(c,"A",{href:!0,class:!0});var h=g(l);r=v(h,"DIV",{class:!0,"data-readmore":!0});var I=g(r);t=v(I,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,loading:!0}),e=L(I),n=v(I,"DIV",{class:!0});var j=g(n);s=v(j,"DIV",{class:!0});var S=g(s);d=v(S,"I",{});var X=g(d);X.forEach(f),S.forEach(f),V=L(j),b=v(j,"SPAN",{class:!0});var q=g(b);p=v(q,"B",{});var K=g(p);K.forEach(f),q.forEach(f),A=L(j),w=v(j,"DIV",{class:!0});var Q=g(w);Q.forEach(f),j.forEach(f),I.forEach(f),h.forEach(f),this.h()},h(){z(t.src,i=`/images/news/${o[5].images.small}`)||_(t,"src",i),_(t,"alt",a=o[5].images.small),_(t,"width","248"),_(t,"height","350"),_(t,"class","news-image-small svelte-11nfhns"),_(t,"loading","lazy"),_(s,"class","date svelte-11nfhns"),_(b,"class","title svelte-11nfhns"),_(w,"class","text svelte-11nfhns"),_(n,"class","news-content svelte-11nfhns"),_(r,"class","news-item dropshadow svelte-11nfhns"),_(r,"data-readmore",N=o[2]("news.readmore")),_(l,"href",H=`/news/${o[5].slug}`),_(l,"class","news-link svelte-11nfhns"),B(l,"fixed",!o[0])},m(c,h){T(c,l,h),u(l,r),u(r,t),u(r,e),u(r,n),u(n,s),u(s,d),d.innerHTML=E,u(n,V),u(n,b),u(b,p),p.innerHTML=k,u(n,A),u(n,w),w.innerHTML=M},p(c,h){h&2&&!z(t.src,i=`/images/news/${c[5].images.small}`)&&_(t,"src",i),h&2&&a!==(a=c[5].images.small)&&_(t,"alt",a),h&10&&E!==(E=c[5].date[c[3]]+"")&&(d.innerHTML=E),h&10&&k!==(k=c[5].title[c[3]]+"")&&(p.innerHTML=k),h&10&&M!==(M=c[5].content.full[c[3]]+"")&&(w.innerHTML=M),h&4&&N!==(N=c[2]("news.readmore"))&&_(r,"data-readmore",N),h&2&&H!==(H=`/news/${c[5].slug}`)&&_(l,"href",H),h&1&&B(l,"fixed",!c[0])},d(c){c&&f(l)}}}function P(o){let l,r,t=o[2]("news.older")+"",i;return{c(){l=m("div"),r=m("a"),i=ne(t),this.h()},l(a){l=v(a,"DIV",{class:!0});var e=g(l);r=v(e,"A",{href:!0,class:!0});var n=g(r);i=re(n,t),n.forEach(f),e.forEach(f),this.h()},h(){_(r,"href","/news"),_(r,"class","link"),_(l,"class","center svelte-11nfhns")},m(a,e){T(a,l,e),u(l,r),u(r,i)},p(a,e){e&4&&t!==(t=a[2]("news.older")+"")&&ie(i,t)},d(a){a&&f(l)}}}function fe(o){let l,r,t=o[1],i=[];for(let e=0;e<t.length;e+=1)i[e]=O(J(o,t,e));let a=o[0]&&P(o);return{c(){for(let e=0;e<i.length;e+=1)i[e].c();l=D(),a&&a.c(),r=C()},l(e){for(let n=0;n<i.length;n+=1)i[n].l(e);l=L(e),a&&a.l(e),r=C()},m(e,n){for(let s=0;s<i.length;s+=1)i[s].m(e,n);T(e,l,n),a&&a.m(e,n),T(e,r,n)},p(e,[n]){if(n&15){t=e[1];let s;for(s=0;s<t.length;s+=1){const d=J(e,t,s);i[s]?i[s].p(d,n):(i[s]=O(d),i[s].c(),i[s].m(l.parentNode,l))}for(;s<i.length;s+=1)i[s].d(1);i.length=t.length}e[0]?a?a.p(e,n):(a=P(e),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},i:F,o:F,d(e){oe(i,e),e&&f(l),a&&a.d(e),e&&f(r)}}}function de(o,l,r){let t,i;G(o,_e,s=>r(2,t=s)),G(o,ce,s=>r(3,i=s));let{latest:a=!1}=l,n=Object.entries({"../routes/news/articles/1.json":R,"../routes/news/articles/10.json":U,"../routes/news/articles/2.json":W,"../routes/news/articles/3.json":Y,"../routes/news/articles/4.json":Z,"../routes/news/articles/5.json":y,"../routes/news/articles/6.json":$,"../routes/news/articles/7.json":x,"../routes/news/articles/8.json":ee,"../routes/news/articles/9.json":se}).map(([s,d])=>({id:s.match(/\d+/)[0],article:d}));return n.sort((s,d)=>Number(d.id)-Number(s.id)),n=a?n.slice(0,3):n,o.$$set=s=>{"latest"in s&&r(0,a=s.latest)},[a,n,t,i]}class me extends ae{constructor(l){super();le(this,l,de,fe,te,{latest:0})}}export{me as N};
