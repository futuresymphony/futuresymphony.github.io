import{S as E,i as S,s as q,a0 as x,v as u,j as _,w as h,l as w,x as b,f as p,p as v,n as d,A as g,d as l,J as z,e as j,t as A,c as k,a as T,g as C,b as F,F as B,h as H,X as J}from"../../chunks/vendor-91cd0159.js";import{T as L}from"../../chunks/Tab-009c7605.js";import{N as M}from"../../chunks/News-e2ad3e9f.js";import{s as R,b as X}from"../../chunks/stores-f23d94f9.js";import"../../chunks/9-c597bae1.js";function y(f){let s,r,a=f[0]("news.archive.title")+"",i,e,n,m,c,$;return n=new M({}),{c(){s=j("h1"),r=j("b"),i=A(a),e=_(),u(n.$$.fragment),m=_(),c=j("br"),this.h()},l(t){s=k(t,"H1",{class:!0});var o=T(s);r=k(o,"B",{});var N=T(r);i=C(N,a),N.forEach(l),o.forEach(l),e=w(t),h(n.$$.fragment,t),m=w(t),c=k(t,"BR",{}),this.h()},h(){F(s,"class","cover-heading")},m(t,o){p(t,s,o),B(s,r),B(r,i),p(t,e,o),b(n,t,o),p(t,m,o),p(t,c,o),$=!0},p(t,o){(!$||o&1)&&a!==(a=t[0]("news.archive.title")+"")&&H(i,a)},i(t){$||(v(n.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),$=!1},d(t){t&&l(s),t&&l(e),g(n,t),t&&l(m),t&&l(c)}}}function D(f){let s,r,a,i;return s=new x({props:{title:f[0]("news.archive.meta.title"),description:f[0]("news.archive.meta.description")}}),a=new L({props:{oversize:!0,$$slots:{default:[y]},$$scope:{ctx:f}}}),{c(){u(s.$$.fragment),r=_(),u(a.$$.fragment)},l(e){h(s.$$.fragment,e),r=w(e),h(a.$$.fragment,e)},m(e,n){b(s,e,n),p(e,r,n),b(a,e,n),i=!0},p(e,[n]){const m={};n&1&&(m.title=e[0]("news.archive.meta.title")),n&1&&(m.description=e[0]("news.archive.meta.description")),s.$set(m);const c={};n&3&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){i||(v(s.$$.fragment,e),v(a.$$.fragment,e),i=!0)},o(e){d(s.$$.fragment,e),d(a.$$.fragment,e),i=!1},d(e){g(s,e),e&&l(r),g(a,e)}}}function G(f,s,r){let a;return z(f,J,i=>r(0,a=i)),R.set(!1),X.set(!1),[a]}class U extends E{constructor(s){super();S(this,s,G,D,q,{})}}export{U as default};
