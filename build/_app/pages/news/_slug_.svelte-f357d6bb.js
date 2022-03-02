import{_ as J,a as O,b as Q,c as U,d as X,e as K,f as R,g as W,h as Y}from"../../chunks/9-d4043988.js";import{ab as Z,S as x,i as ee,s as se,_ as ae,e as b,j as $,c as v,a as h,l as w,d as f,D as L,b as p,f as d,F as j,G as S,H as te,v as D,w as A,x as B,p as G,n as N,A as C,J as y,a6 as le,a7 as ie,k as F,X as re,M as ne,Q as oe}from"../../chunks/vendor-da6078aa.js";import{T as _e}from"../../chunks/Tab-da180e46.js";import{s as ue,b as fe}from"../../chunks/stores-af26b35b.js";const me=()=>{const s=Z("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},ce={subscribe(s){return me().page.subscribe(s)}};function ge(s){let a,t,l,i,u,r,e;return{c(){a=b("div"),t=b("img"),i=$(),u=b("span"),this.h()},l(o){a=v(o,"DIV",{class:!0});var _=h(a);t=v(_,"IMG",{src:!0,alt:!0,class:!0}),i=w(_),u=v(_,"SPAN",{class:!0}),h(u).forEach(f),_.forEach(f),this.h()},h(){L(t.src,l=`/images/news/${s[4].images.regular}`)||p(t,"src",l),p(t,"alt","News subject"),p(t,"class","svelte-1hvaqjy"),p(u,"class","image-frame-close svelte-1hvaqjy"),p(a,"class","image-frame svelte-1hvaqjy")},m(o,_){d(o,a,_),j(a,t),j(a,i),j(a,u),s[5](a),r||(e=S(a,"click",s[3]),r=!0)},p:te,d(o){o&&f(a),s[5](null),r=!1,e()}}}function pe(s){let a,t,l=s[4].title[s[2]]+"",i,u,r,e=s[4].date[s[2]]+"",o,_,m,c,P,H,k,T=s[4].content.full[s[2]]+"",M,E;return{c(){a=b("h1"),t=b("b"),i=$(),u=b("span"),r=b("i"),o=$(),_=b("div"),m=b("img"),H=$(),k=new le,this.h()},l(n){a=v(n,"H1",{class:!0});var g=h(a);t=v(g,"B",{});var V=h(t);V.forEach(f),g.forEach(f),i=w(n),u=v(n,"SPAN",{class:!0});var I=h(u);r=v(I,"I",{});var z=h(r);z.forEach(f),I.forEach(f),o=w(n),_=v(n,"DIV",{class:!0});var q=h(_);m=v(q,"IMG",{class:!0,src:!0,alt:!0}),H=w(q),k=ie(q),q.forEach(f),this.h()},h(){p(a,"class","cover-heading"),p(u,"class","date svelte-1hvaqjy"),p(m,"class","news-image svelte-1hvaqjy"),L(m.src,c=`/images/news/${s[4].images.small}`)||p(m,"src",c),p(m,"alt",P=s[4].images.small),k.a=null,p(_,"class","content svelte-1hvaqjy")},m(n,g){d(n,a,g),j(a,t),t.innerHTML=l,d(n,i,g),d(n,u,g),j(u,r),r.innerHTML=e,d(n,o,g),d(n,_,g),j(_,m),j(_,H),k.m(T,_),M||(E=S(m,"click",s[3]),M=!0)},p(n,g){g&4&&l!==(l=n[4].title[n[2]]+"")&&(t.innerHTML=l),g&4&&e!==(e=n[4].date[n[2]]+"")&&(r.innerHTML=e),g&4&&T!==(T=n[4].content.full[n[2]]+"")&&k.p(T)},d(n){n&&f(a),n&&f(i),n&&f(u),n&&f(o),n&&f(_),M=!1,E()}}}function be(s){let a,t=s[4]&&pe(s);return{c(){t&&t.c(),a=F()},l(l){t&&t.l(l),a=F()},m(l,i){t&&t.m(l,i),d(l,a,i)},p(l,i){l[4]&&t.p(l,i)},d(l){t&&t.d(l),l&&f(a)}}}function ve(s){let a,t,l,i,u;a=new ae({props:{title:s[1]("news.slug.meta.title"),description:s[4]&&s[4].meta?s[4].meta[s[2]]:""}});let r=s[4].images.regular&&ge(s);return i=new _e({props:{oversize:!0,$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){D(a.$$.fragment),t=$(),r&&r.c(),l=$(),D(i.$$.fragment)},l(e){A(a.$$.fragment,e),t=w(e),r&&r.l(e),l=w(e),A(i.$$.fragment,e)},m(e,o){B(a,e,o),d(e,t,o),r&&r.m(e,o),d(e,l,o),B(i,e,o),u=!0},p(e,[o]){const _={};o&2&&(_.title=e[1]("news.slug.meta.title")),o&4&&(_.description=e[4]&&e[4].meta?e[4].meta[e[2]]:""),a.$set(_),e[4].images.regular&&r.p(e,o);const m={};o&260&&(m.$$scope={dirty:o,ctx:e}),i.$set(m)},i(e){u||(G(a.$$.fragment,e),G(i.$$.fragment,e),u=!0)},o(e){N(a.$$.fragment,e),N(i.$$.fragment,e),u=!1},d(e){C(a,e),e&&f(t),r&&r.d(e),e&&f(l),C(i,e)}}}function de(s,a,t){let l,i,u;y(s,ce,c=>t(6,l=c)),y(s,re,c=>t(1,i=c)),y(s,ne,c=>t(2,u=c));let r;ue.set(!1),fe.set(!1);function e(){_.images.regular&&r.classList.toggle("active")}let _=Object.values({"./articles/1.json":J,"./articles/2.json":O,"./articles/3.json":Q,"./articles/4.json":U,"./articles/5.json":X,"./articles/6.json":K,"./articles/7.json":R,"./articles/8.json":W,"./articles/9.json":Y}).find(c=>c.slug===l.params.slug);function m(c){oe[c?"unshift":"push"](()=>{r=c,t(0,r)})}return[r,i,u,e,_,m]}class ke extends x{constructor(a){super();ee(this,a,de,ve,se,{})}}export{ke as default};
