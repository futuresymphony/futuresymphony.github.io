import{S as K,i as Y,s as Z,_ as x,v as A,j as S,e as U,t as I,k as N,w as R,l as T,c as D,a as H,g as E,d as g,b as ee,x as j,f as $,F as C,h as F,n as w,o as q,p as d,A as B,J,m as M,M as te,X as re,a2 as L,Q as V,a3 as P,a4 as Q,a5 as W,a6 as X}from"../../chunks/vendor-21361551.js";import{R as se,d as ie,I as O,a as oe,B as ne}from"../../chunks/Button-40eb04ae.js";import{l as y}from"../../chunks/stores-d7cb5688.js";import"../../chunks/index-5525c3de.js";function le(n){let t,r,e,s,i,f,_,c;t=new O({props:{type:"info",$$slots:{default:[ae]},$$scope:{ctx:n}}});let a=n[3]&&z(n),u=n[4]&&G(n);function h(l){n[10](l)}function k(l){n[11](l)}let b={newRegistration:!0,$$slots:{default:[ce]},$$scope:{ctx:n}};return n[0]!==void 0&&(b.dto=n[0]),n[2]!==void 0&&(b.regulationsAccepted=n[2]),i=new oe({props:b}),n[9](i),V.push(()=>P(i,"dto",h)),V.push(()=>P(i,"regulationsAccepted",k)),{c(){A(t.$$.fragment),r=S(),a&&a.c(),e=S(),u&&u.c(),s=S(),A(i.$$.fragment)},l(l){R(t.$$.fragment,l),r=T(l),a&&a.l(l),e=T(l),u&&u.l(l),s=T(l),R(i.$$.fragment,l)},m(l,o){j(t,l,o),$(l,r,o),a&&a.m(l,o),$(l,e,o),u&&u.m(l,o),$(l,s,o),j(i,l,o),c=!0},p(l,o){const p={};o&16448&&(p.$$scope={dirty:o,ctx:l}),t.$set(p),l[3]?a?(a.p(l,o),o&8&&d(a,1)):(a=z(l),a.c(),d(a,1),a.m(e.parentNode,e)):a&&(M(),w(a,1,1,()=>{a=null}),q()),l[4]?u?(u.p(l,o),o&16&&d(u,1)):(u=G(l),u.c(),d(u,1),u.m(s.parentNode,s)):u&&(M(),w(u,1,1,()=>{u=null}),q());const m={};o&16452&&(m.$$scope={dirty:o,ctx:l}),!f&&o&1&&(f=!0,m.dto=l[0],Q(()=>f=!1)),!_&&o&4&&(_=!0,m.regulationsAccepted=l[2],Q(()=>_=!1)),i.$set(m)},i(l){c||(d(t.$$.fragment,l),d(a),d(u),d(i.$$.fragment,l),c=!0)},o(l){w(t.$$.fragment,l),w(a),w(u),w(i.$$.fragment,l),c=!1},d(l){B(t,l),l&&g(r),a&&a.d(l),l&&g(e),u&&u.d(l),l&&g(s),n[9](null),B(i,l)}}}function fe(n){let t,r;return t=new O({props:{type:"success",$$slots:{default:[pe]},$$scope:{ctx:n}}}),{c(){A(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,s){j(t,e,s),r=!0},p(e,s){const i={};s&16449&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){B(t,e)}}}function ae(n){let t,r=n[6]("registration.firstStep")+"",e,s=n[6]("registration.editingAllowedUntil")+"",i;return{c(){t=new W,e=S(),i=I(s),this.h()},l(f){t=X(f),e=T(f),i=E(f,s),this.h()},h(){t.a=e},m(f,_){t.m(r,f,_),$(f,e,_),$(f,i,_)},p(f,_){_&64&&r!==(r=f[6]("registration.firstStep")+"")&&t.p(r),_&64&&s!==(s=f[6]("registration.editingAllowedUntil")+"")&&F(i,s)},d(f){f&&t.d(),f&&g(e),f&&g(i)}}}function z(n){let t,r;return t=new O({props:{type:"warning",$$slots:{default:[ue]},$$scope:{ctx:n}}}),{c(){A(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,s){j(t,e,s),r=!0},p(e,s){const i={};s&16456&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){B(t,e)}}}function ue(n){let t=n[6](n[3])+"",r;return{c(){r=I(t)},l(e){r=E(e,t)},m(e,s){$(e,r,s)},p(e,s){s&72&&t!==(t=e[6](e[3])+"")&&F(r,t)},d(e){e&&g(r)}}}function G(n){let t,r;return t=new O({props:{type:"error",$$slots:{default:[me]},$$scope:{ctx:n}}}),{c(){A(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,s){j(t,e,s),r=!0},p(e,s){const i={};s&16464&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){B(t,e)}}}function me(n){let t=n[6](n[4])+"",r;return{c(){r=I(t)},l(e){r=E(e,t)},m(e,s){$(e,r,s)},p(e,s){s&80&&t!==(t=e[6](e[4])+"")&&F(r,t)},d(e){e&&g(r)}}}function _e(n){let t=n[6]("registration.form.submit")+"",r;return{c(){r=I(t)},l(e){r=E(e,t)},m(e,s){$(e,r,s)},p(e,s){s&64&&t!==(t=e[6]("registration.form.submit")+"")&&F(r,t)},d(e){e&&g(r)}}}function ce(n){let t,r,e,s;return e=new ne({props:{type:"primary",disabled:!n[2],$$slots:{default:[_e]},$$scope:{ctx:n}}}),e.$on("click",n[8]),{c(){t=U("div"),r=S(),A(e.$$.fragment)},l(i){t=D(i,"DIV",{}),H(t).forEach(g),r=T(i),R(e.$$.fragment,i)},m(i,f){$(i,t,f),$(i,r,f),j(e,i,f),s=!0},p(i,f){const _={};f&4&&(_.disabled=!i[2]),f&16448&&(_.$$scope={dirty:f,ctx:i}),e.$set(_)},i(i){s||(d(e.$$.fragment,i),s=!0)},o(i){w(e.$$.fragment,i),s=!1},d(i){i&&g(t),i&&g(r),B(e,i)}}}function pe(n){let t,r=n[6]("registration.success",{values:{email:n[0].email}})+"",e;return{c(){t=new W,e=N(),this.h()},l(s){t=X(s),e=N(),this.h()},h(){t.a=e},m(s,i){t.m(r,s,i),$(s,e,i)},p(s,i){i&65&&r!==(r=s[6]("registration.success",{values:{email:s[0].email}})+"")&&t.p(r)},d(s){s&&g(e),s&&t.d()}}}function ge(n){let t,r,e,s,i=n[6]("registration.title")+"",f,_,c,a,u,h;t=new x({props:{title:n[6]("registration.meta.title"),description:n[6]("registration.meta.description")}});const k=[fe,le],b=[];function l(o,p){return o[5]?0:1}return c=l(n),a=b[c]=k[c](n),{c(){A(t.$$.fragment),r=S(),e=U("h1"),s=U("b"),f=I(i),_=S(),a.c(),u=N(),this.h()},l(o){R(t.$$.fragment,o),r=T(o),e=D(o,"H1",{class:!0});var p=H(e);s=D(p,"B",{});var m=H(s);f=E(m,i),m.forEach(g),p.forEach(g),_=T(o),a.l(o),u=N(),this.h()},h(){ee(e,"class","cover-heading")},m(o,p){j(t,o,p),$(o,r,p),$(o,e,p),C(e,s),C(s,f),$(o,_,p),b[c].m(o,p),$(o,u,p),h=!0},p(o,[p]){const m={};p&64&&(m.title=o[6]("registration.meta.title")),p&64&&(m.description=o[6]("registration.meta.description")),t.$set(m),(!h||p&64)&&i!==(i=o[6]("registration.title")+"")&&F(f,i);let v=c;c=l(o),c===v?b[c].p(o,p):(M(),w(b[v],1,1,()=>{b[v]=null}),q(),a=b[c],a?a.p(o,p):(a=b[c]=k[c](o),a.c()),d(a,1),a.m(u.parentNode,u))},i(o){h||(d(t.$$.fragment,o),d(a),h=!0)},o(o){w(t.$$.fragment,o),w(a),h=!1},d(o){B(t,o),o&&g(r),o&&g(e),o&&g(_),b[c].d(o),o&&g(u)}}}function $e(n,t,r){let e,s,i;J(n,y,m=>r(12,e=m)),J(n,te,m=>r(13,s=m)),J(n,re,m=>r(6,i=m));let{dto:f=new se}=t,_,c=ie,a="",u="",h=!1;async function k(){if(_.reportValidity()){L(y,e=!0,e),r(0,f.lang=s,f);const m=await fetch(new URL("new_registration.php",`${window.location.origin}/api/`).toString(),{method:"POST",body:JSON.stringify(f)});if(m.status===200)r(4,u=""),r(3,a=""),r(5,h=!0),localStorage.removeItem("newRegistrationDto");else{let v=await m.text();v==="Email already used."?r(3,a="registration.form.error.emailUsed"):v==="Invalid form."?r(4,u="registration.form.error.invalidForm"):v==="Too many requests."?r(4,u="registration.form.error.pleaseWait"):r(4,u="registration.form.error.errorOccurred")}L(y,e=!1,e)}}const b=()=>k();function l(m){V[m?"unshift":"push"](()=>{_=m,r(1,_)})}function o(m){f=m,r(0,f)}function p(m){c=m,r(2,c)}return n.$$set=m=>{"dto"in m&&r(0,f=m.dto)},[f,_,c,a,u,h,i,k,b,l,o,p]}class ke extends K{constructor(t){super();Y(this,t,$e,ge,Z,{dto:0})}}export{ke as default};
