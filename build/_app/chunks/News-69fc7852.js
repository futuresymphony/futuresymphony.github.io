import{_ as U,a as W,b as Y,c as Z,d as $,e as x,f as ee,g as se,h as te,i as le,j as ae,k as ne,l as re,m as oe,n as ie,o as _e}from"./9-19a0e722.js";import{S as ce,i as fe,s as ue,e as v,j as T,c as g,a as w,l as S,d,D as P,b as u,K as V,f as N,E as m,k as z,Q as B,ag as de,L as C,X as he,R as me,t as F,g as G,F as ve,h as K}from"./vendor-e7083a84.js";function Q(n,s,l){const a=n.slice();return a[7]=s[l].article,a[9]=l,a}function R(n){let s,l,a,r,_,i,t,e,c,o=n[7].title[n[4]]+"",b,j,k,M=n[7].date[n[4]]+"",A,p,I=(n[7].content.short?n[7].content.short[n[4]]:n[7].content.full[n[4]])+"",L,D;return{c(){s=v("a"),l=v("div"),a=v("img"),i=T(),t=v("div"),e=v("span"),c=v("b"),b=T(),j=v("div"),k=v("i"),A=T(),p=v("div"),this.h()},l(f){s=g(f,"A",{href:!0,class:!0});var h=w(s);l=g(h,"DIV",{class:!0,"data-readmore":!0});var H=w(l);a=g(H,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,loading:!0}),i=S(H),t=g(H,"DIV",{class:!0});var E=w(t);e=g(E,"SPAN",{class:!0});var O=w(e);c=g(O,"B",{});var X=w(c);X.forEach(d),O.forEach(d),b=S(E),j=g(E,"DIV",{class:!0});var q=w(j);k=g(q,"I",{});var y=w(k);y.forEach(d),q.forEach(d),A=S(E),p=g(E,"DIV",{class:!0});var J=w(p);J.forEach(d),E.forEach(d),H.forEach(d),h.forEach(d),this.h()},h(){P(a.src,r=`/images/news/${n[7].images.small}`)||u(a,"src",r),u(a,"alt",_=n[7].images.small),u(a,"width","248"),u(a,"height","350"),u(a,"class","news-image-small svelte-1itnect"),u(a,"loading","lazy"),u(e,"class","title svelte-1itnect"),u(j,"class","date svelte-1itnect"),u(p,"class","text svelte-1itnect"),u(t,"class","news-content svelte-1itnect"),u(l,"class","news-item dropshadow svelte-1itnect"),u(l,"data-readmore",L=n[3]("news.readmore")),u(s,"href",D=`/news/${n[7].slug}`),u(s,"class","news-link svelte-1itnect"),V(s,"fixed",!n[0]),V(s,"hidden",n[9]>=n[1])},m(f,h){N(f,s,h),m(s,l),m(l,a),m(l,i),m(l,t),m(t,e),m(e,c),c.innerHTML=o,m(t,b),m(t,j),m(j,k),k.innerHTML=M,m(t,A),m(t,p),p.innerHTML=I},p(f,h){h&4&&!P(a.src,r=`/images/news/${f[7].images.small}`)&&u(a,"src",r),h&4&&_!==(_=f[7].images.small)&&u(a,"alt",_),h&20&&o!==(o=f[7].title[f[4]]+"")&&(c.innerHTML=o),h&20&&M!==(M=f[7].date[f[4]]+"")&&(k.innerHTML=M),h&20&&I!==(I=(f[7].content.short?f[7].content.short[f[4]]:f[7].content.full[f[4]])+"")&&(p.innerHTML=I),h&8&&L!==(L=f[3]("news.readmore"))&&u(l,"data-readmore",L),h&4&&D!==(D=`/news/${f[7].slug}`)&&u(s,"href",D),h&1&&V(s,"fixed",!f[0]),h&2&&V(s,"hidden",f[9]>=f[1])},d(f){f&&d(s)}}}function ge(n){let s,l=n[3]("news.showOlder")+"",a,r,_;return{c(){s=v("span"),a=F(l),this.h()},l(i){s=g(i,"SPAN",{class:!0});var t=w(s);a=G(t,l),t.forEach(d),this.h()},h(){u(s,"class","center link older svelte-1itnect")},m(i,t){N(i,s,t),m(s,a),r||(_=ve(s,"click",n[5]),r=!0)},p(i,t){t&8&&l!==(l=i[3]("news.showOlder")+"")&&K(a,l)},d(i){i&&d(s),r=!1,_()}}}function we(n){let s,l,a=n[3]("news.older")+"",r;return{c(){s=v("div"),l=v("a"),r=F(a),this.h()},l(_){s=g(_,"DIV",{class:!0});var i=w(s);l=g(i,"A",{href:!0,class:!0});var t=w(l);r=G(t,a),t.forEach(d),i.forEach(d),this.h()},h(){u(l,"href","/news"),u(l,"class","link"),u(s,"class","center svelte-1itnect")},m(_,i){N(_,s,i),m(s,l),m(l,r)},p(_,i){i&8&&a!==(a=_[3]("news.older")+"")&&K(r,a)},d(_){_&&d(s)}}}function be(n){let s,l,a=n[2],r=[];for(let e=0;e<a.length;e+=1)r[e]=R(Q(n,a,e));function _(e,c){if(e[0])return we;if(e[1]<e[2].length)return ge}let i=_(n),t=i&&i(n);return{c(){for(let e=0;e<r.length;e+=1)r[e].c();s=T(),t&&t.c(),l=z()},l(e){for(let c=0;c<r.length;c+=1)r[c].l(e);s=S(e),t&&t.l(e),l=z()},m(e,c){for(let o=0;o<r.length;o+=1)r[o].m(e,c);N(e,s,c),t&&t.m(e,c),N(e,l,c)},p(e,[c]){if(c&31){a=e[2];let o;for(o=0;o<a.length;o+=1){const b=Q(e,a,o);r[o]?r[o].p(b,c):(r[o]=R(b),r[o].c(),r[o].m(s.parentNode,s))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}i===(i=_(e))&&t?t.p(e,c):(t&&t.d(1),t=i&&i(e),t&&(t.c(),t.m(l.parentNode,l)))},i:B,o:B,d(e){de(r,e),e&&d(s),t&&t.d(e),e&&d(l)}}}function pe(n,s,l){let a,r;C(n,he,o=>l(3,a=o)),C(n,me,o=>l(4,r=o));let{latest:_=!1}=s;const i={"../../routes/news/articles/1.json":U,"../../routes/news/articles/10.json":W,"../../routes/news/articles/11.json":Y,"../../routes/news/articles/12.json":Z,"../../routes/news/articles/13.json":$,"../../routes/news/articles/14.json":x,"../../routes/news/articles/15.json":ee,"../../routes/news/articles/16.json":se,"../../routes/news/articles/2.json":te,"../../routes/news/articles/3.json":le,"../../routes/news/articles/4.json":ae,"../../routes/news/articles/5.json":ne,"../../routes/news/articles/6.json":re,"../../routes/news/articles/7.json":oe,"../../routes/news/articles/8.json":ie,"../../routes/news/articles/9.json":_e};let t=10,e=Object.entries(i).map(([o,b])=>({id:o.match(/\d+/)[0],article:b}));e.sort((o,b)=>Number(b.id)-Number(o.id)),e=_?e.slice(0,3):e;const c=()=>l(1,t+=5);return n.$$set=o=>{"latest"in o&&l(0,_=o.latest)},[_,t,e,a,r,c]}class Ee extends ce{constructor(s){super();fe(this,s,pe,be,ue,{latest:0})}}export{Ee as N};
