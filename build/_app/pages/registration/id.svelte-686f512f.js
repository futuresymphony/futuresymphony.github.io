var ue=Object.defineProperty;var x=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var ee=(i,t,r)=>t in i?ue(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,te=(i,t)=>{for(var r in t||(t={}))ce.call(t,r)&&ee(i,r,t[r]);if(x)for(var r of x(t))_e.call(t,r)&&ee(i,r,t[r]);return i};import{S as pe,i as me,s as de,e as C,t as y,j as O,k as z,c as U,a as L,g as v,d,l as F,b as H,f as h,F as N,h as S,n as w,o as W,p as $,J as Y,u as ge,m as X,X as be,T as re,ai as M,U as Z,H as G,v as E,w as I,x as j,A as R,aj as le,ak as oe,G as he,ac as ke}from"../../chunks/vendor-2afdf9ad.js";import{b as $e,R as we,a as K}from"../../chunks/RegistrationForm-65da05cb.js";import{B as ie}from"../../chunks/Button-31bae42d.js";import{b as ye,l as J,c as ve}from"../../chunks/stores-5e02f367.js";import{h as Se}from"../../chunks/index-de995227.js";function se(i,t,r){const e=i.slice();return e[20]=t[r],e}function Oe(i){let t,r=i[9]("registration.notfound")+"",e,l,s,o=i[9]("error.goBack")+"",n;return{c(){t=C("div"),e=y(r),l=O(),s=C("a"),n=y(o),this.h()},l(c){t=U(c,"DIV",{class:!0});var f=L(t);e=v(f,r),l=F(f),s=U(f,"A",{href:!0,class:!0});var a=L(s);n=v(a,o),a.forEach(d),f.forEach(d),this.h()},h(){H(s,"href","/"),H(s,"class","link"),H(t,"class","center svelte-pts9xi")},m(c,f){h(c,t,f),N(t,e),N(t,l),N(t,s),N(s,n)},p(c,f){f&512&&r!==(r=c[9]("registration.notfound")+"")&&S(e,r),f&512&&o!==(o=c[9]("error.goBack")+"")&&S(n,o)},i:G,o:G,d(c){c&&d(t)}}}function Fe(i){let t,r,e,l,s,o,n,c,f,a=!i[10]&&De(i);const k=[Ie,Ee],_=[];function g(u,b){return u[4].length===0?0:1}r=g(i),e=_[r]=k[r](i);let p=i[5]&&fe(i);function Q(u){i[16](u)}function q(u){i[17](u)}let T={disabled:i[3],$$slots:{default:[Ae]},$$scope:{ctx:i}};return i[0]!==void 0&&(T.dto=i[0]),i[6]!==void 0&&(T.changed=i[6]),o=new we({props:T}),i[15](o),Z.push(()=>le(o,"dto",Q)),Z.push(()=>le(o,"changed",q)),{c(){a&&a.c(),t=O(),e.c(),l=O(),p&&p.c(),s=O(),E(o.$$.fragment)},l(u){a&&a.l(u),t=F(u),e.l(u),l=F(u),p&&p.l(u),s=F(u),I(o.$$.fragment,u)},m(u,b){a&&a.m(u,b),h(u,t,b),_[r].m(u,b),h(u,l,b),p&&p.m(u,b),h(u,s,b),j(o,u,b),f=!0},p(u,b){u[10]||a.p(u,b);let A=r;r=g(u),r===A?_[r].p(u,b):(X(),w(_[A],1,1,()=>{_[A]=null}),W(),e=_[r],e?e.p(u,b):(e=_[r]=k[r](u),e.c()),$(e,1),e.m(l.parentNode,l)),u[5]?p?(p.p(u,b),b&32&&$(p,1)):(p=fe(u),p.c(),$(p,1),p.m(s.parentNode,s)):p&&(X(),w(p,1,1,()=>{p=null}),W());const D={};b&8&&(D.disabled=u[3]),b&8389611&&(D.$$scope={dirty:b,ctx:u}),!n&&b&1&&(n=!0,D.dto=u[0],oe(()=>n=!1)),!c&&b&64&&(c=!0,D.changed=u[6],oe(()=>c=!1)),o.$set(D)},i(u){f||($(a),$(e),$(p),$(o.$$.fragment,u),f=!0)},o(u){w(a),w(e),w(p),w(o.$$.fragment,u),f=!1},d(u){a&&a.d(u),u&&d(t),_[r].d(u),u&&d(l),p&&p.d(u),u&&d(s),i[15](null),R(o,u)}}}function De(i){let t,r;return t=new K({props:{type:"info",$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const s={};l&8389120&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ne(i){let t=i[9]("registration.editingAllowedUntil")+"",r,e,l=i[9]("registration.confirmationAfterDeadline")+"",s;return{c(){r=y(t),e=O(),s=y(l)},l(o){r=v(o,t),e=F(o),s=v(o,l)},m(o,n){h(o,r,n),h(o,e,n),h(o,s,n)},p(o,n){n&512&&t!==(t=o[9]("registration.editingAllowedUntil")+"")&&S(r,t),n&512&&l!==(l=o[9]("registration.confirmationAfterDeadline")+"")&&S(s,l)},d(o){o&&d(r),o&&d(e),o&&d(s)}}}function Ee(i){let t,r;return t=new K({props:{type:"warning",$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const s={};l&8389138&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ie(i){let t,r;return t=new K({props:{type:"success",$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const s={};l&8389120&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function ne(i){let t,r=i[9](i[20].labels[0].dataset.label)+"",e,l,s,o;function n(){return i[12](i[20])}return{c(){t=C("li"),e=y(r),l=O(),this.h()},l(c){t=U(c,"LI",{class:!0});var f=L(t);e=v(f,r),l=F(f),f.forEach(d),this.h()},h(){H(t,"class","svelte-pts9xi")},m(c,f){h(c,t,f),N(t,e),N(t,l),s||(o=he(t,"click",n),s=!0)},p(c,f){i=c,f&528&&r!==(r=i[9](i[20].labels[0].dataset.label)+"")&&S(e,r)},d(c){c&&d(t),s=!1,o()}}}function je(i){let t=i[9]("registration.missingForComplete")+"",r,e,l,s=i[4],o=[];for(let n=0;n<s.length;n+=1)o[n]=ne(se(i,s,n));return{c(){r=y(t),e=O(),l=C("ul");for(let n=0;n<o.length;n+=1)o[n].c()},l(n){r=v(n,t),e=F(n),l=U(n,"UL",{});var c=L(l);for(let f=0;f<o.length;f+=1)o[f].l(c);c.forEach(d)},m(n,c){h(n,r,c),h(n,e,c),h(n,l,c);for(let f=0;f<o.length;f+=1)o[f].m(l,null)},p(n,c){if(c&512&&t!==(t=n[9]("registration.missingForComplete")+"")&&S(r,t),c&530){s=n[4];let f;for(f=0;f<s.length;f+=1){const a=se(n,s,f);o[f]?o[f].p(a,c):(o[f]=ne(a),o[f].c(),o[f].m(l,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=s.length}},d(n){n&&d(r),n&&d(e),n&&d(l),ke(o,n)}}}function Re(i){let t=i[9]("registration.complete")+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&512&&t!==(t=e[9]("registration.complete")+"")&&S(r,t)},d(e){e&&d(r)}}}function fe(i){let t,r;return t=new K({props:{type:"error",$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const s={};l&8389152&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Be(i){let t=i[9](...i[5])+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&544&&t!==(t=e[9](...e[5])+"")&&S(r,t)},d(e){e&&d(r)}}}function Ce(i){let t;return{c(){t=C("div")},l(r){t=U(r,"DIV",{}),L(t).forEach(d)},m(r,e){h(r,t,e)},p:G,i:G,o:G,d(r){r&&d(t)}}}function Ue(i){let t,r;return t=new ie({props:{type:"outline",disabled:i[8],$$slots:{default:[Le]},$$scope:{ctx:i}}}),t.$on("click",i[13]),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const s={};l&256&&(s.disabled=e[8]),l&8389120&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Le(i){let t=i[9]("registration.form.cancel")+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&512&&t!==(t=e[9]("registration.form.cancel")+"")&&S(r,t)},d(e){e&&d(r)}}}function Je(i){let t,r;return t=new ie({props:{type:"primary",disabled:i[8],$$slots:{default:[Te]},$$scope:{ctx:i}}}),t.$on("click",i[14]),{c(){E(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const s={};l&256&&(s.disabled=e[8]),l&8389128&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Te(i){let t=(i[3]?i[9]("registration.form.edit"):i[9]("registration.form.save"))+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&520&&t!==(t=(e[3]?e[9]("registration.form.edit"):e[9]("registration.form.save"))+"")&&S(r,t)},d(e){e&&d(r)}}}function Ae(i){let t,r,e,l,s;const o=[Ue,Ce],n=[];function c(a,k){return a[3]?1:0}t=c(i),r=n[t]=o[t](i);let f=!i[10]&&Je(i);return{c(){r.c(),e=O(),f&&f.c(),l=z()},l(a){r.l(a),e=F(a),f&&f.l(a),l=z()},m(a,k){n[t].m(a,k),h(a,e,k),f&&f.m(a,k),h(a,l,k),s=!0},p(a,k){let _=t;t=c(a),t===_?n[t].p(a,k):(X(),w(n[_],1,1,()=>{n[_]=null}),W(),r=n[t],r?r.p(a,k):(r=n[t]=o[t](a),r.c()),$(r,1),r.m(e.parentNode,e)),a[10]||f.p(a,k)},i(a){s||($(r),$(f),s=!0)},o(a){w(r),w(f),s=!1},d(a){n[t].d(a),a&&d(e),f&&f.d(a),a&&d(l)}}}function Pe(i){let t,r=i[9]("registration.yourRegistration")+"",e,l,s,o,n,c;const f=[Fe,Oe],a=[];function k(_,g){return _[0]?0:_[2]?1:-1}return~(s=k(i))&&(o=a[s]=f[s](i)),{c(){t=C("h1"),e=y(r),l=O(),o&&o.c(),n=z(),this.h()},l(_){t=U(_,"H1",{class:!0});var g=L(t);e=v(g,r),g.forEach(d),l=F(_),o&&o.l(_),n=z(),this.h()},h(){H(t,"class","cover-heading")},m(_,g){h(_,t,g),N(t,e),h(_,l,g),~s&&a[s].m(_,g),h(_,n,g),c=!0},p(_,[g]){(!c||g&512)&&r!==(r=_[9]("registration.yourRegistration")+"")&&S(e,r);let p=s;s=k(_),s===p?~s&&a[s].p(_,g):(o&&(X(),w(a[p],1,1,()=>{a[p]=null}),W()),~s?(o=a[s],o?o.p(_,g):(o=a[s]=f[s](_),o.c()),$(o,1),o.m(n.parentNode,n)):o=null)},i(_){c||($(o),c=!0)},o(_){w(o),c=!1},d(_){_&&d(t),_&&d(l),~s&&a[s].d(_),_&&d(n)}}}function Ve(i,t,r){let e,l,s;Y(i,J,m=>r(8,e=m)),Y(i,ve,m=>r(19,l=m)),Y(i,be,m=>r(9,s=m));let{dto:o=null}=t;ye.set(!0);let n,c,f=!1,a=!1,k=[],_=null,g=!1,p=null,Q=new Date>new Date("Jun 30 2022 23:59:59 GMT+0200");async function q(){if(r(5,_=null),await re(),n.reportValidity("#firstName, #lastName, #email, #dateOfBirth, #country, #idCopy, #pieceScore, #pieceDemo, #proofOfPayment")){console.log(`saving registration ${c}`),M(J,e=!0,e);let m=await fetch(new URL("registration.php",l).toString(),{method:"POST",body:JSON.stringify(o)});if(m.status===200){let B=new FormData;B.append("reg_key",c);for(let V of Object.entries(o.files))V[1]&&B.append(V[0],V[1][0]);if(m=await fetch(new URL(`files.php?key=${c}`,l).toString(),{method:"POST",body:B}),m.status===200)return r(0,o.files.idCopyFile=void 0,o),r(0,o.files.pieceDemoFile=void 0,o),r(0,o.files.pieceScoreFile=void 0,o),r(0,o.files.proofOfPaymentFile=void 0,o),r(6,g=!1),M(J,e=!1,e),r(4,k=n.getInvalid()),!0}let P=await m.text();if(P==="Invalid form.")r(5,_=["registration.form.error.invalidForm",{}]);else if(P.startsWith("Invalid file type or size:")){let B=P.split(": ").pop();r(5,_=["registration.form.error.fileError",{values:{files:B}}])}else r(5,_=["registration.form.error.errorOccurred",{}]);M(J,e=!1,e)}return!1}ge(async()=>{if(M(J,e=!0,e),c=window.location.search.substring(1),console.log(`loading registration ${c}`),c==="1")r(0,o=JSON.parse('{"reg_key":"1","firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"2001-01-11","country":"DE","pieceTitle":"My piece","pieceDemo":"","pieceScore":"score.pdf","idCopy":"","instrumentation":[[true],[true],[true],[true],[true],[true],[true],[true,true],[false,true],[false],[true],[false],[true,true],[false],[false],[false],[false],[false],[true],[true,true,true,true,true,true],[true,true,true,true,false],[true,true,true,true],[true,false,false],[false,false]],"scoreConfirmations":[true,false,false],"proofOfPayment":"","files":{"idCopyFile":null,"pieceScoreFile":null,"pieceDemoFile":null,"proofOfPaymentFile":null}}'));else{const m=await fetch(new URL(`registration.php?key=${c}`,l).toString());if(m.status===200){let P=JSON.parse(await m.text());r(0,o=Object.assign(new $e,Object.fromEntries(Object.entries(P).filter(([B,V])=>V!==null))))}}M(J,e=!1,e),r(2,f=!0),await re(),n&&(r(4,k=n.getInvalid()),r(3,a=!0))});const T=m=>{m.closest("#submissionSection")&&n.toggleSubsection("#submissionSection","open"),m.closest("#paymentSection")&&n.toggleSubsection("#paymentSection","open"),m.labels[0].scrollIntoView({behavior:"smooth",block:"center"}),Se(m.labels[0])},u=()=>{r(3,a=!0),r(5,_=null),r(0,o=te({},p))},b=async()=>{r(3,a=!a&&(!g||await q())),(a||_)&&document.getElementById("back").click(),a&&n.closeSubsections(),r(7,p=!a&&!_?JSON.parse(JSON.stringify(o)):p)};function A(m){Z[m?"unshift":"push"](()=>{n=m,r(1,n)})}function D(m){o=m,r(0,o)}function ae(m){g=m,r(6,g)}return i.$$set=m=>{"dto"in m&&r(0,o=m.dto)},[o,n,f,a,k,_,g,p,e,s,Q,q,T,u,b,A,D,ae]}class Xe extends pe{constructor(t){super();me(this,t,Ve,Pe,de,{dto:0})}}export{Xe as default};
