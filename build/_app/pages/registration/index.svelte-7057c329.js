import{S as z,i as G,s as K,_ as W,v as A,j as R,e as B,t as k,k as D,w as P,l as E,c as I,a as j,g as v,d as p,b as Z,x as T,f as d,F,h as q,n as w,o as J,p as b,A as S,J as L,m as C,X as x,a2 as H,Q as N,a3 as M,a4 as Q}from"../../chunks/vendor-d9d57f64.js";import{R as ee,I as O,a as te,B as V}from"../../chunks/Button-39c9f27a.js";import{l as U,c as se}from"../../chunks/stores-b871fb0f.js";const re=!1;function oe(i){let t,s,e,o,r,n,u;t=new O({props:{type:"info",$$slots:{default:[ie]},$$scope:{ctx:i}}});let a=i[3]&&X(i);function _(l){i[10](l)}function h(l){i[11](l)}let g={newRegistration:!0,$$slots:{default:[ue]},$$scope:{ctx:i}};return i[0]!==void 0&&(g.dto=i[0]),i[2]!==void 0&&(g.regulationsAccepted=i[2]),o=new te({props:g}),i[9](o),N.push(()=>M(o,"dto",_)),N.push(()=>M(o,"regulationsAccepted",h)),{c(){A(t.$$.fragment),s=R(),a&&a.c(),e=R(),A(o.$$.fragment)},l(l){P(t.$$.fragment,l),s=E(l),a&&a.l(l),e=E(l),P(o.$$.fragment,l)},m(l,c){T(t,l,c),d(l,s,c),a&&a.m(l,c),d(l,e,c),T(o,l,c),u=!0},p(l,c){const y={};c&16384&&(y.$$scope={dirty:c,ctx:l}),t.$set(y),l[3]?a?(a.p(l,c),c&8&&b(a,1)):(a=X(l),a.c(),b(a,1),a.m(e.parentNode,e)):a&&(C(),w(a,1,1,()=>{a=null}),J());const f={};c&16390&&(f.$$scope={dirty:c,ctx:l}),!r&&c&1&&(r=!0,f.dto=l[0],Q(()=>r=!1)),!n&&c&4&&(n=!0,f.regulationsAccepted=l[2],Q(()=>n=!1)),o.$set(f)},i(l){u||(b(t.$$.fragment,l),b(a),b(o.$$.fragment,l),u=!0)},o(l){w(t.$$.fragment,l),w(a),w(o.$$.fragment,l),u=!1},d(l){S(t,l),l&&p(s),a&&a.d(l),l&&p(e),i[9](null),S(o,l)}}}function ne(i){let t,s;return t=new O({props:{type:"success",$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,o){T(t,e,o),s=!0},p(e,o){const r={};o&16385&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ie(i){let t,s,e,o;return{c(){t=k("As a first step, please submit the following information. You will receive an email from "),s=B("tt"),e=k("registration@futuresymphony.lt"),o=k(" with further instructions.")},l(r){t=v(r,"As a first step, please submit the following information. You will receive an email from "),s=I(r,"TT",{});var n=j(s);e=v(n,"registration@futuresymphony.lt"),n.forEach(p),o=v(r," with further instructions.")},m(r,n){d(r,t,n),d(r,s,n),F(s,e),d(r,o,n)},d(r){r&&p(t),r&&p(s),r&&p(o)}}}function X(i){let t,s;return t=new O({props:{type:"error",$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,o){T(t,e,o),s=!0},p(e,o){const r={};o&16392&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ae(i){let t=(i[3]==="Email already used."?"This email address has already been used. Please choose a different one.":i[3]==="Invalid form."?"An error has occured. Please check your input.":i[3]==="Too many requests."?"Please wait before submitting another form.":"An error has occured. Please try again later, or contact us.")+"",s;return{c(){s=k(t)},l(e){s=v(e,t)},m(e,o){d(e,s,o)},p(e,o){o&8&&t!==(t=(e[3]==="Email already used."?"This email address has already been used. Please choose a different one.":e[3]==="Invalid form."?"An error has occured. Please check your input.":e[3]==="Too many requests."?"Please wait before submitting another form.":"An error has occured. Please try again later, or contact us.")+"")&&q(s,t)},d(e){e&&p(s)}}}function le(i){let t;return{c(){t=k("Save")},l(s){t=v(s,"Save")},m(s,e){d(s,t,e)},d(s){s&&p(t)}}}function fe(i){let t;return{c(){t=k("Submit")},l(s){t=v(s,"Submit")},m(s,e){d(s,t,e)},d(s){s&&p(t)}}}function ue(i){let t,s,e,o;return t=new V({props:{type:"outline",$$slots:{default:[le]},$$scope:{ctx:i}}}),t.$on("click",i[7]),e=new V({props:{type:"primary",disabled:!i[2],$$slots:{default:[fe]},$$scope:{ctx:i}}}),e.$on("click",i[8]),{c(){A(t.$$.fragment),s=R(),A(e.$$.fragment)},l(r){P(t.$$.fragment,r),s=E(r),P(e.$$.fragment,r)},m(r,n){T(t,r,n),d(r,s,n),T(e,r,n),o=!0},p(r,n){const u={};n&16384&&(u.$$scope={dirty:n,ctx:r}),t.$set(u);const a={};n&4&&(a.disabled=!r[2]),n&16384&&(a.$$scope={dirty:n,ctx:r}),e.$set(a)},i(r){o||(b(t.$$.fragment,r),b(e.$$.fragment,r),o=!0)},o(r){w(t.$$.fragment,r),w(e.$$.fragment,r),o=!1},d(r){S(t,r),r&&p(s),S(e,r)}}}function ce(i){let t,s,e=i[0].email+"",o,r;return{c(){t=k("Your registration has been submitted. Please follow the instructions that have been sent to your email address, "),s=B("tt"),o=k(e),r=k(".")},l(n){t=v(n,"Your registration has been submitted. Please follow the instructions that have been sent to your email address, "),s=I(n,"TT",{});var u=j(s);o=v(u,e),u.forEach(p),r=v(n,".")},m(n,u){d(n,t,u),d(n,s,u),F(s,o),d(n,r,u)},p(n,u){u&1&&e!==(e=n[0].email+"")&&q(o,e)},d(n){n&&p(t),n&&p(s),n&&p(r)}}}function me(i){let t,s,e,o,r=i[5]("registration.title")+"",n,u,a,_,h,g;t=new W({props:{title:i[5]("registration.meta.title"),description:i[5]("registration.meta.description")}});const l=[ne,oe],c=[];function y(f,$){return f[4]?0:1}return a=y(i),_=c[a]=l[a](i),{c(){A(t.$$.fragment),s=R(),e=B("h1"),o=B("b"),n=k(r),u=R(),_.c(),h=D(),this.h()},l(f){P(t.$$.fragment,f),s=E(f),e=I(f,"H1",{class:!0});var $=j(e);o=I($,"B",{});var m=j(o);n=v(m,r),m.forEach(p),$.forEach(p),u=E(f),_.l(f),h=D(),this.h()},h(){Z(e,"class","cover-heading")},m(f,$){T(t,f,$),d(f,s,$),d(f,e,$),F(e,o),F(o,n),d(f,u,$),c[a].m(f,$),d(f,h,$),g=!0},p(f,[$]){const m={};$&32&&(m.title=f[5]("registration.meta.title")),$&32&&(m.description=f[5]("registration.meta.description")),t.$set(m),(!g||$&32)&&r!==(r=f[5]("registration.title")+"")&&q(n,r);let Y=a;a=y(f),a===Y?c[a].p(f,$):(C(),w(c[Y],1,1,()=>{c[Y]=null}),J(),_=c[a],_?_.p(f,$):(_=c[a]=l[a](f),_.c()),b(_,1),_.m(h.parentNode,h))},i(f){g||(b(t.$$.fragment,f),b(_),g=!0)},o(f){w(t.$$.fragment,f),w(_),g=!1},d(f){S(t,f),f&&p(s),f&&p(e),f&&p(u),c[a].d(f),f&&p(h)}}}function pe(i,t,s){let e,o,r;L(i,U,m=>s(12,e=m)),L(i,se,m=>s(13,o=m)),L(i,x,m=>s(5,r=m));let{dto:n=new ee}=t,u,a=re,_="",h=!1;async function g(){if(u.reportValidity()){H(U,e=!0,e);const m=await fetch(new URL("new_registration.php",o).toString(),{method:"POST",body:JSON.stringify(n)});m.status===200?(s(3,_=""),s(4,h=!0),localStorage.removeItem("newRegistrationDto")):s(3,_=await m.text()),H(U,e=!1,e)}}const l=()=>u.saveForm(),c=()=>g();function y(m){N[m?"unshift":"push"](()=>{u=m,s(1,u)})}function f(m){n=m,s(0,n)}function $(m){a=m,s(2,a)}return i.$$set=m=>{"dto"in m&&s(0,n=m.dto)},[n,u,a,_,h,r,g,l,c,y,f,$]}class ge extends z{constructor(t){super();G(this,t,pe,me,K,{dto:0})}}export{ge as default};
