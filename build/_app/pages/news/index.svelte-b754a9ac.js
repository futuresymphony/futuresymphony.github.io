import{S as T,i as k,s as q,v as p,a as u,w as _,c as w,x as h,b as c,f as v,t as g,A as b,g as $,H as B,k as d,p as H,l as N,m as M,q as S,n as x,G as z,r as A}from"../../chunks/index-5b3145ec.js";import{T as C}from"../../chunks/Tab-93c32197.js";import{N as E}from"../../chunks/News-70ab8dc9.js";import{M as G}from"../../chunks/MetaTags-271be665.js";import{s as L,c as R,X}from"../../chunks/stores-360d0bab.js";import"../../chunks/9-a0152778.js";function j(o){let s,n=o[0]("news.archive.title")+"",a,i,e,r,f,l;return e=new E({}),{c(){s=d("h1"),a=H(n),i=u(),p(e.$$.fragment),r=u(),f=d("br"),this.h()},l(t){s=N(t,"H1",{class:!0});var m=M(s);a=S(m,n),m.forEach($),i=w(t),_(e.$$.fragment,t),r=w(t),f=N(t,"BR",{}),this.h()},h(){x(s,"class","cover-heading")},m(t,m){c(t,s,m),z(s,a),c(t,i,m),h(e,t,m),c(t,r,m),c(t,f,m),l=!0},p(t,m){(!l||m&1)&&n!==(n=t[0]("news.archive.title")+"")&&A(a,n)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){t&&$(s),t&&$(i),b(e,t),t&&$(r),t&&$(f)}}}function y(o){let s,n,a,i;return s=new G({props:{title:o[0]("news.archive.meta.title"),description:o[0]("news.archive.meta.description")}}),a=new C({props:{oversize:!0,$$slots:{default:[j]},$$scope:{ctx:o}}}),{c(){p(s.$$.fragment),n=u(),p(a.$$.fragment)},l(e){_(s.$$.fragment,e),n=w(e),_(a.$$.fragment,e)},m(e,r){h(s,e,r),c(e,n,r),h(a,e,r),i=!0},p(e,[r]){const f={};r&1&&(f.title=e[0]("news.archive.meta.title")),r&1&&(f.description=e[0]("news.archive.meta.description")),s.$set(f);const l={};r&3&&(l.$$scope={dirty:r,ctx:e}),a.$set(l)},i(e){i||(v(s.$$.fragment,e),v(a.$$.fragment,e),i=!0)},o(e){g(s.$$.fragment,e),g(a.$$.fragment,e),i=!1},d(e){b(s,e),e&&$(n),b(a,e)}}}function D(o,s,n){let a;return B(o,X,i=>n(0,a=i)),L.set(!1),R.set(!1),[a]}class Q extends T{constructor(s){super(),k(this,s,D,y,q,{})}}export{Q as default};
