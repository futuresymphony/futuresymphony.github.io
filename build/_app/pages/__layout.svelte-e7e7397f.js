import{S as Ie,i as Pe,s as je,e as d,j as A,c as v,a as _,l as N,d as c,D as he,b as a,E as fe,f as X,F as s,G as ne,H as Te,I as Le,J as pe,M as de,K as Je,t as G,g as W,L as Oe,m as qe,n as ue,o as Qe,p as ce,N as Re,O as Ve,P as ze,h as se,X as De,u as Ke,Q as Xe,R as x,v as _e,w as we,x as Ee,A as Se,T as Ze,U as Be,$ as $e,V as xe}from"../chunks/vendor-f477cbc2.js";import et from"./ImageFrame.svelte-1196e599.js";import{s as tt,a as it,b as at,i as He}from"../chunks/stores-680160e9.js";import{i as st}from"../chunks/index-c77d0dab.js";function ot(t){let i,e,l,n,o,m,y,f;return{c(){i=d("div"),e=d("img"),n=A(),o=d("img"),this.h()},l(h){i=v(h,"DIV",{class:!0});var u=_(i);e=v(u,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,"data-lang":!0}),n=N(u),o=v(u,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,"data-lang":!0}),u.forEach(c),this.h()},h(){he(e.src,l=t[1]==="en"?Ce:Fe)||a(e,"src",l),a(e,"alt","English"),a(e,"width","300"),a(e,"height","150"),a(e,"class","flag svelte-4jkryo"),a(e,"data-lang","en"),he(o.src,m=t[1]==="lt"?Ae:Ne)||a(o,"src",m),a(o,"alt","Lietuvi\u0173"),a(o,"width","300"),a(o,"height","150"),a(o,"class","flag svelte-4jkryo"),a(o,"data-lang","lt"),a(i,"class","flags svelte-4jkryo"),fe(i,"big",t[0])},m(h,u){X(h,i,u),s(i,e),s(i,n),s(i,o),y||(f=[ne(e,"click",t[2]),ne(e,"mouseenter",Ue),ne(e,"mouseleave",t[3]),ne(o,"click",t[2]),ne(o,"mouseenter",Ue),ne(o,"mouseleave",t[3])],y=!0)},p(h,[u]){u&2&&!he(e.src,l=h[1]==="en"?Ce:Fe)&&a(e,"src",l),u&2&&!he(o.src,m=h[1]==="lt"?Ae:Ne)&&a(o,"src",m),u&1&&fe(i,"big",h[0])},i:Te,o:Te,d(h){h&&c(i),y=!1,Le(f)}}}const Ce="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30' width='100%25'%3E%3CclipPath id='t'%3E%3Cpath d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z'/%3E%3C/clipPath%3E%3Cpath d='M0,0 v30 h60 v-30 z' fill='%2300247d'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' clip-path='url(%23t)' stroke='%23cf142b' stroke-width='4'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='%23cf142b' stroke-width='6'/%3E%3C/svg%3E%0A",Fe="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30' width='100%25'%3E%3CclipPath id='t'%3E%3Cpath d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z'/%3E%3C/clipPath%3E%3Cpath d='M0,0 v30 h60 v-30 z' fill='rgba(54, 54, 54, 1)'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='rgba(255, 255, 255, 1)' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' clip-path='url(%23t)' stroke='rgba(90, 90, 90, 1)' stroke-width='4'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='rgba(255, 255, 255, 1)' stroke-width='10'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='rgba(90, 90, 90, 1)' stroke-width='6'/%3E%3C/svg%3E%0A",Ae="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='30' viewBox='0 0 60 30'%3E%3Crect fill='%23C1272D' width='60' height='30'/%3E%3Crect fill='%23006A44' width='60' height='20'/%3E%3Crect fill='%23FDB913' width='60' height='10'/%3E%3C/svg%3E",Ne="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='30' viewBox='0 0 60 30'%3E%3Crect fill='rgba(92, 92, 92, 1)' width='60' height='30'/%3E%3Crect fill='rgba(58, 58, 58, 1)' width='60' height='20'/%3E%3Crect fill='rgba(152, 152, 152, 1)' width='60' height='10'/%3E%3C/svg%3E";function Ue(){this.src=this.dataset.lang==="en"?Ce:Ae}function nt(t,i,e){let l;pe(t,de,f=>e(1,l=f));let{big:n=!1}=i;const o=Je();function m(){de.set(this.dataset.lang),o("localeChange")}function y(){let f=this.dataset.lang;f!==l&&(this.src=f==="en"?Fe:Ne)}return t.$$set=f=>{"big"in f&&e(0,n=f.big)},[n,l,m,y]}class Ye extends Ie{constructor(i){super();Pe(this,i,nt,ot,je,{big:0})}}function Ge(t){let i,e,l,n,o,m,y,f=t[13]("index.headline2")+"";return{c(){i=d("div"),e=d("span"),l=G("FUTURE"),n=d("br"),o=G("SYMPHONY"),m=A(),y=d("span"),this.h()},l(h){i=v(h,"DIV",{class:!0});var u=_(i);e=v(u,"SPAN",{class:!0});var I=_(e);l=W(I,"FUTURE"),n=v(I,"BR",{}),o=W(I,"SYMPHONY"),I.forEach(c),m=N(u),y=v(u,"SPAN",{class:!0});var C=_(y);C.forEach(c),u.forEach(c),this.h()},h(){a(e,"class","svelte-5w7pu5"),a(y,"class","sub svelte-5w7pu5"),a(i,"class","landing svelte-5w7pu5")},m(h,u){X(h,i,u),s(i,e),s(e,l),s(e,n),s(e,o),s(i,m),s(i,y),y.innerHTML=f,t[17](i)},p(h,u){u[0]&8192&&f!==(f=h[13]("index.headline2")+"")&&(y.innerHTML=f)},d(h){h&&c(i),t[17](null)}}}function rt(t){let i,e,l,n,o,m=t[13]("nav.about")+"",y,f,h,u,I=t[13]("nav.news")+"",C,k,g,b,E=t[13]("nav.participants")+"",K,H,J,j,Y=t[13]("nav.sponsors")+"",Z,ee,O,V,z=t[13]("nav.contacts")+"",U,w,B,T;return B=new Ye({}),{c(){i=d("div"),e=d("nav"),l=d("ul"),n=d("li"),o=d("a"),y=G(m),f=A(),h=d("li"),u=d("a"),C=G(I),k=A(),g=d("li"),b=d("a"),K=G(E),H=A(),J=d("li"),j=d("a"),Z=G(Y),ee=A(),O=d("li"),V=d("a"),U=G(z),w=A(),_e(B.$$.fragment),this.h()},l(M){i=v(M,"DIV",{class:!0});var F=_(i);e=v(F,"NAV",{});var L=_(e);l=v(L,"UL",{class:!0});var S=_(l);n=v(S,"LI",{class:!0});var p=_(n);o=v(p,"A",{href:!0,class:!0});var P=_(o);y=W(P,m),P.forEach(c),p.forEach(c),f=N(S),h=v(S,"LI",{class:!0});var te=_(h);u=v(te,"A",{href:!0,class:!0});var q=_(u);C=W(q,I),q.forEach(c),te.forEach(c),k=N(S),g=v(S,"LI",{class:!0});var $=_(g);b=v($,"A",{href:!0,class:!0});var Q=_(b);K=W(Q,E),Q.forEach(c),$.forEach(c),H=N(S),J=v(S,"LI",{class:!0});var oe=_(J);j=v(oe,"A",{href:!0,class:!0});var ie=_(j);Z=W(ie,Y),ie.forEach(c),oe.forEach(c),ee=N(S),O=v(S,"LI",{class:!0});var D=_(O);V=v(D,"A",{href:!0,class:!0});var R=_(V);U=W(R,z),R.forEach(c),D.forEach(c),S.forEach(c),L.forEach(c),w=N(F),we(B.$$.fragment,F),F.forEach(c),this.h()},h(){a(o,"href","/#about"),a(o,"class","svelte-5w7pu5"),a(n,"class","svelte-5w7pu5"),a(u,"href","/#news"),a(u,"class","svelte-5w7pu5"),a(h,"class","svelte-5w7pu5"),a(b,"href","/#participants"),a(b,"class","svelte-5w7pu5"),a(g,"class","svelte-5w7pu5"),a(j,"href","/#sponsors"),a(j,"class","svelte-5w7pu5"),a(J,"class","svelte-5w7pu5"),a(V,"href","/#contacts"),a(V,"class","svelte-5w7pu5"),a(O,"class","svelte-5w7pu5"),a(l,"class","nav masthead-nav svelte-5w7pu5"),a(i,"class","desktop-nav svelte-5w7pu5")},m(M,F){X(M,i,F),s(i,e),s(e,l),s(l,n),s(n,o),s(o,y),t[26](n),s(l,f),s(l,h),s(h,u),s(u,C),t[27](h),s(l,k),s(l,g),s(g,b),s(b,K),t[28](g),s(l,H),s(l,J),s(J,j),s(j,Z),t[29](J),s(l,ee),s(l,O),s(O,V),s(V,U),t[30](O),s(i,w),Ee(B,i,null),T=!0},p(M,F){(!T||F[0]&8192)&&m!==(m=M[13]("nav.about")+"")&&se(y,m),(!T||F[0]&8192)&&I!==(I=M[13]("nav.news")+"")&&se(C,I),(!T||F[0]&8192)&&E!==(E=M[13]("nav.participants")+"")&&se(K,E),(!T||F[0]&8192)&&Y!==(Y=M[13]("nav.sponsors")+"")&&se(Z,Y),(!T||F[0]&8192)&&z!==(z=M[13]("nav.contacts")+"")&&se(U,z)},i(M){T||(ce(B.$$.fragment,M),T=!0)},o(M){ue(B.$$.fragment,M),T=!1},d(M){M&&c(i),t[26](null),t[27](null),t[28](null),t[29](null),t[30](null),Se(B)}}}function lt(t){let i,e,l,n,o,m,y,f,h,u,I,C,k,g,b,E,K=t[13]("nav.about")+"",H,J,j,Y=t[13]("nav.news")+"",Z,ee,O,V=t[13]("nav.participants")+"",z,U,w,B=t[13]("nav.sponsors")+"",T,M,F,L=t[13]("nav.contacts")+"",S,p,P,te,q,$,Q,oe,ie;return $=new Ye({props:{big:!0}}),$.$on("localeChange",t[25]),{c(){i=d("div"),e=d("div"),l=A(),n=d("a"),o=G("FUTURE SYMPHONY"),m=A(),y=d("div"),f=d("span"),h=A(),u=d("span"),I=A(),C=d("span"),k=A(),g=d("div"),b=d("div"),E=d("a"),H=G(K),J=A(),j=d("a"),Z=G(Y),ee=A(),O=d("a"),z=G(V),U=A(),w=d("a"),T=G(B),M=A(),F=d("a"),S=G(L),p=A(),P=d("hr"),te=A(),q=d("div"),_e($.$$.fragment),this.h()},l(D){i=v(D,"DIV",{class:!0});var R=_(i);e=v(R,"DIV",{}),_(e).forEach(c),l=N(R),n=v(R,"A",{class:!0,href:!0});var ve=_(n);o=W(ve,"FUTURE SYMPHONY"),ve.forEach(c),m=N(R),y=v(R,"DIV",{class:!0});var re=_(y);f=v(re,"SPAN",{class:!0}),_(f).forEach(c),h=N(re),u=v(re,"SPAN",{class:!0}),_(u).forEach(c),I=N(re),C=v(re,"SPAN",{class:!0}),_(C).forEach(c),re.forEach(c),k=N(R),g=v(R,"DIV",{class:!0});var le=_(g);b=v(le,"DIV",{class:!0});var ae=_(b);E=v(ae,"A",{href:!0,class:!0});var ge=_(E);H=W(ge,K),ge.forEach(c),J=N(ae),j=v(ae,"A",{href:!0,class:!0});var ke=_(j);Z=W(ke,Y),ke.forEach(c),ee=N(ae),O=v(ae,"A",{href:!0,class:!0});var be=_(O);z=W(be,V),be.forEach(c),U=N(ae),w=v(ae,"A",{href:!0,class:!0});var ye=_(w);T=W(ye,B),ye.forEach(c),M=N(ae),F=v(ae,"A",{href:!0,class:!0});var r=_(F);S=W(r,L),r.forEach(c),ae.forEach(c),p=N(le),P=v(le,"HR",{class:!0}),te=N(le),q=v(le,"DIV",{class:!0});var me=_(q);we($.$$.fragment,me),me.forEach(c),le.forEach(c),R.forEach(c),this.h()},h(){a(n,"class","title svelte-5w7pu5"),a(n,"href","/#start"),a(f,"class","line svelte-5w7pu5"),a(u,"class","line svelte-5w7pu5"),a(C,"class","line svelte-5w7pu5"),a(y,"class","menu-icon svelte-5w7pu5"),fe(y,"open",t[10]),a(E,"href","/#about"),a(E,"class","svelte-5w7pu5"),a(j,"href","/#news"),a(j,"class","svelte-5w7pu5"),a(O,"href","/#participants"),a(O,"class","svelte-5w7pu5"),a(w,"href","/#sponsors"),a(w,"class","svelte-5w7pu5"),a(F,"href","/#contacts"),a(F,"class","svelte-5w7pu5"),a(b,"class","links svelte-5w7pu5"),a(P,"class","svelte-5w7pu5"),a(q,"class","language svelte-5w7pu5"),a(g,"class","menu svelte-5w7pu5"),fe(g,"active",t[10]),a(i,"class","mobile-nav svelte-5w7pu5")},m(D,R){X(D,i,R),s(i,e),s(i,l),s(i,n),s(n,o),s(i,m),s(i,y),s(y,f),s(y,h),s(y,u),s(y,I),s(y,C),s(i,k),s(i,g),s(g,b),s(b,E),s(E,H),t[19](E),s(b,J),s(b,j),s(j,Z),t[20](j),s(b,ee),s(b,O),s(O,z),t[21](O),s(b,U),s(b,w),s(w,T),t[22](w),s(b,M),s(b,F),s(F,S),t[23](F),s(g,p),s(g,P),s(g,te),s(g,q),Ee($,q,null),Q=!0,oe||(ie=[ne(y,"click",t[18]),ne(b,"click",t[24]),ne(g,"touchmove",mt)],oe=!0)},p(D,R){R[0]&1024&&fe(y,"open",D[10]),(!Q||R[0]&8192)&&K!==(K=D[13]("nav.about")+"")&&se(H,K),(!Q||R[0]&8192)&&Y!==(Y=D[13]("nav.news")+"")&&se(Z,Y),(!Q||R[0]&8192)&&V!==(V=D[13]("nav.participants")+"")&&se(z,V),(!Q||R[0]&8192)&&B!==(B=D[13]("nav.sponsors")+"")&&se(T,B),(!Q||R[0]&8192)&&L!==(L=D[13]("nav.contacts")+"")&&se(S,L),R[0]&1024&&fe(g,"active",D[10])},i(D){Q||(ce($.$$.fragment,D),Q=!0)},o(D){ue($.$$.fragment,D),Q=!1},d(D){D&&c(i),t[19](null),t[20](null),t[21](null),t[22](null),t[23](null),Se($),oe=!1,Le(ie)}}}function We(t){let i,e,l,n;return{c(){i=d("a"),e=d("img"),this.h()},l(o){i=v(o,"A",{id:!0,href:!0,class:!0,title:!0});var m=_(i);e=v(m,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),m.forEach(c),this.h()},h(){he(e.src,l=ct)||a(e,"src",l),a(e,"width","150"),a(e,"height","150"),a(e,"alt","arr.svg"),a(e,"class","svelte-5w7pu5"),a(i,"id","back"),a(i,"href","#start"),a(i,"class","back svelte-5w7pu5"),a(i,"title",n=t[13]("nav.back"))},m(o,m){X(o,i,m),s(i,e),t[33](i)},p(o,m){m[0]&8192&&n!==(n=o[13]("nav.back"))&&a(i,"title",n)},d(o){o&&c(i),t[33](null)}}}function ut(t){let i,e,l,n,o,m,y,f,h,u,I=t[13]("privacy.link")+"",C,k,g,b,E,K,H,J,j,Y,Z=new Date().getFullYear()+"",ee,O,V=(t[11]?"FSC":"Future Symphony Competition")+"",z,U,w=t[12]&&Ge(t);const B=[lt,rt],T=[];function M(p,P){return p[11]?0:1}l=M(t),n=T[l]=B[l](t);const F=t[16].default,L=Oe(F,t,t[15],null);let S=t[14]&&We(t);return{c(){w&&w.c(),i=A(),e=d("div"),n.c(),o=A(),m=d("div"),L&&L.c(),y=A(),S&&S.c(),f=A(),h=d("div"),u=d("a"),C=G(I),k=G(`
    \xA0 | \xA0
    `),g=d("div"),b=d("a"),E=d("img"),H=G(`
        \xA0 | \xA0`),J=A(),j=d("a"),Y=G("\xA9 2018 - "),ee=G(Z),O=A(),z=G(V),this.h()},l(p){w&&w.l(p),i=N(p),e=v(p,"DIV",{class:!0});var P=_(e);n.l(P),P.forEach(c),o=N(p),m=v(p,"DIV",{class:!0});var te=_(m);L&&L.l(te),te.forEach(c),y=N(p),S&&S.l(p),f=N(p),h=v(p,"DIV",{class:!0});var q=_(h);u=v(q,"A",{href:!0,class:!0});var $=_(u);C=W($,I),$.forEach(c),k=W(q,`
    \xA0 | \xA0
    `),g=v(q,"DIV",{class:!0});var Q=_(g);b=v(Q,"A",{href:!0,class:!0,target:!0});var oe=_(b);E=v(oe,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),oe.forEach(c),H=W(Q,`
        \xA0 | \xA0`),Q.forEach(c),J=N(q),j=v(q,"A",{href:!0,class:!0});var ie=_(j);Y=W(ie,"\xA9 2018 - "),ee=W(ie,Z),O=N(ie),z=W(ie,V),ie.forEach(c),q.forEach(c),this.h()},h(){a(e,"class","masthead active svelte-5w7pu5"),a(m,"class","content svelte-5w7pu5"),a(u,"href","/privacy"),a(u,"class","svelte-5w7pu5"),he(E.src,K=pt)||a(E,"src",K),a(E,"alt","fb_icon.svg"),a(E,"width","20"),a(E,"height","20"),a(E,"class","svelte-5w7pu5"),a(b,"href","https://www.facebook.com/FScompetition"),a(b,"class","social svelte-5w7pu5"),a(b,"target","_blank"),a(g,"class","desktop-only svelte-5w7pu5"),a(j,"href","https://futuresymphony.lt"),a(j,"class","svelte-5w7pu5"),a(h,"class","mastfoot svelte-5w7pu5")},m(p,P){w&&w.m(p,P),X(p,i,P),X(p,e,P),T[l].m(e,null),t[31](e),X(p,o,P),X(p,m,P),L&&L.m(m,null),t[32](m),X(p,y,P),S&&S.m(p,P),X(p,f,P),X(p,h,P),s(h,u),s(u,C),s(h,k),s(h,g),s(g,b),s(b,E),s(g,H),s(h,J),s(h,j),s(j,Y),s(j,ee),s(j,O),s(j,z),t[34](h),U=!0},p(p,P){p[12]?w?w.p(p,P):(w=Ge(p),w.c(),w.m(i.parentNode,i)):w&&(w.d(1),w=null);let te=l;l=M(p),l===te?T[l].p(p,P):(qe(),ue(T[te],1,1,()=>{T[te]=null}),Qe(),n=T[l],n?n.p(p,P):(n=T[l]=B[l](p),n.c()),ce(n,1),n.m(e,null)),L&&L.p&&(!U||P[0]&32768)&&Re(L,F,p,p[15],U?ze(F,p[15],P,null):Ve(p[15]),null),p[14]?S?S.p(p,P):(S=We(p),S.c(),S.m(f.parentNode,f)):S&&(S.d(1),S=null),(!U||P[0]&8192)&&I!==(I=p[13]("privacy.link")+"")&&se(C,I),(!U||P[0]&2048)&&V!==(V=(p[11]?"FSC":"Future Symphony Competition")+"")&&se(z,V)},i(p){U||(ce(n),ce(L,p),U=!0)},o(p){ue(n),ue(L,p),U=!1},d(p){w&&w.d(p),p&&c(i),p&&c(e),T[l].d(),t[31](null),p&&c(o),p&&c(m),L&&L.d(p),t[32](null),p&&c(y),S&&S.d(p),p&&c(f),p&&c(h),t[34](null)}}}const ct="data:image/svg+xml,%3Csvg viewBox='0 0 2048 2048' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1523 1212q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z' fill='%23EEEEEE'/%3E%3C/svg%3E",pt="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20px' viewBox='0 0 266.893 266.895' enable-background='new 0 0 266.893 266.895'%3E%3Cpath fill='%23304369' d='M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z'/%3E%3Cpath fill='%23FFFFFF' d='M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z'/%3E%3C/svg%3E",mt=t=>t.preventDefault();function ht(t,i,e){let l,n,o,m;pe(t,tt,r=>e(12,l=r)),pe(t,it,r=>e(42,n=r)),pe(t,De,r=>e(13,o=r)),pe(t,at,r=>e(14,m=r));let{$$slots:y={},$$scope:f}=i,h,u,I,C,k,g,b,E,K,H,J,j,Y,Z,ee,O=0,V,z=!1,U=!1;const w=()=>window.scrollY;function B(){w()>=O?(u.classList.add("active"),e(1,u.style.top="0",u),k.classList.add("active"),C==null||C.classList.add("active")):(u.classList.remove("active"),e(1,u.style.top="",u),k.classList.remove("active"),C==null||C.classList.remove("active"))}function T(){[g,b,E,K,H].forEach(r=>r.classList.remove("active")),document.activeElement.blur()}function M(){T(),J<=w()&&w()<j?g.classList.add("active"):j<=w()&&w()<Y?b.classList.add("active"):Y<=w()&&w()<Z?E.classList.add("active"):Z<=w()&&w()<ee?K.classList.add("active"):ee<=w()&&H.classList.add("active")}function F(){const r=me=>Math.floor(me-150);J=r(n["#about"].offsetTop),j=r(n["#news"].offsetTop),Y=r(n["#participants"].offsetTop),Z=r(n["#sponsors"].offsetTop),ee=r(n["#contacts"].offsetTop)}function L(){let r=window.location.hash,me=r?document.querySelector(r).offsetTop:0;window.scrollTo(0,me-u.scrollHeight+1)}function S(){l&&(e(0,h.style.height=window.innerHeight+"px",h),e(0,h.style["margin-bottom"]=-u.clientHeight-1+"px",h),O=Math.floor(h.clientHeight-u.clientHeight-1),F()),e(2,I.style["margin-top"]=u.scrollHeight-1+"px",I),V!==window.innerWidth&&(L(),V=window.innerWidth),B()}Ke(()=>(S(),window.addEventListener("resize",S),l?(window.addEventListener("scroll",B),window.addEventListener("scroll",M),de.subscribe(async()=>{await Xe(),F(),B(),M()})):window.location.pathname.startsWith("/news")?b.classList.add("active"):window.location.pathname.startsWith("/registration")&&E.classList.add("active"),()=>{window.removeEventListener("resize",S),window.removeEventListener("scroll",B),window.removeEventListener("scroll",M)}));function p(r){x[r?"unshift":"push"](()=>{h=r,e(0,h)})}const P=()=>e(10,z=!z);function te(r){x[r?"unshift":"push"](()=>{g=r,e(5,g)})}function q(r){x[r?"unshift":"push"](()=>{b=r,e(6,b)})}function $(r){x[r?"unshift":"push"](()=>{E=r,e(7,E)})}function Q(r){x[r?"unshift":"push"](()=>{K=r,e(8,K)})}function oe(r){x[r?"unshift":"push"](()=>{H=r,e(9,H)})}const ie=()=>e(10,z=!z),D=()=>e(10,z=!1);function R(r){x[r?"unshift":"push"](()=>{g=r,e(5,g)})}function ve(r){x[r?"unshift":"push"](()=>{b=r,e(6,b)})}function re(r){x[r?"unshift":"push"](()=>{E=r,e(7,E)})}function le(r){x[r?"unshift":"push"](()=>{K=r,e(8,K)})}function ae(r){x[r?"unshift":"push"](()=>{H=r,e(9,H)})}function ge(r){x[r?"unshift":"push"](()=>{u=r,e(1,u)})}function ke(r){x[r?"unshift":"push"](()=>{I=r,e(2,I)})}function be(r){x[r?"unshift":"push"](()=>{C=r,e(3,C)})}function ye(r){x[r?"unshift":"push"](()=>{k=r,e(4,k)})}return t.$$set=r=>{"$$scope"in r&&e(15,f=r.$$scope)},typeof window!="undefined"&&e(11,U=window.innerWidth<=700),[h,u,I,C,k,g,b,E,K,H,z,U,l,o,m,f,y,p,P,te,q,$,Q,oe,ie,D,R,ve,re,le,ae,ge,ke,be,ye]}class ft extends Ie{constructor(i){super();Pe(this,i,ht,ut,je,{},null,[-1,-1])}}const dt={meta:{title:"Future Symphony Competition",description:'3rd "Future Symphony" international composition competition for symphony orchestra'},headline2:"3<sup>RD</sup> INTERNATIONAL MUSIC COMPOSITION COMPETITION<br>FOR SYMPHONY ORCHESTRA"},vt={about:"ABOUT",news:"NEWS",participants:"FOR PARTICIPANTS",sponsors:"SPONSORS & PARTNERS",contacts:"CONTACTS",back:"Back to top"},gt={title:"Welcome!"},kt={title:"News",older:"Older news",readmore:"Read more",slug:{meta:{title:"News - Future Symphony Competition"}},archive:{title:"News archive",meta:{title:"News Archive - Future Symphony Competition",description:'News archive of the "Future Symphony" international composition competition for symphony orchestra'}}},bt={title:"For Participants",registration:"Start registration"},yt={title:"Sponsors and Partners",financedBy:"This project is financed by",patron:"Founding sponsor",mainSponsors:"Main sponsors",sponsors:"Sponsors",infSponsor:"Informational sponsor",partners:"Partners"},_t={title:"Contacts",organizer:"Event organizer",vsi:"PI",projectManagement:"Project management",orchestraManagement:"Orchestra management",communicationAssistance:"Communication assistance",email:"E-mail",socialMedia:"Social Media",webdesign:"Web design & administration"},wt={title:"Competition regulations",meta:{title:"Regulations - Future Symphony Competition",description:'Regulations for the 3rd "Future Symphony" international composition competition for symphony orchestra'}},Et={title:"Registration to the competition",meta:{title:"Registration - Future Symphony Competition",description:'Registration to the 3rd "Future Symphony" Competition opens on the 1st of March 2022.'},firstStep:"As a first step, please submit the following information. You will receive an email from <tt>registration@futuresymphony.lt</tt> with further instructions.",regulationsAccepted:"I agree with the <a href='/files/fsc_regulations_EN_2022-02-24.pdf' target='_blank' class='link'>Regulations of the Competition</a> and the <a href='/privacy' target='_blank' class='link'>Privacy Policy</a>.",success:"Your registration has been submitted. Please follow the instructions that have been sent to your email address, <tt>{email}</tt>.",resend:{alreadyRegistered:"If you already registered but can not find the confirmation email, please click",didNotReceive:"If you did not receive an email, please click",here:"here",enterYourEmail:"To resend the confirmation link, please enter your email address",yourEmail:"Your email address...",success:"Success! Please follow the instructions in the confirmation email. If you did not receive an email, please contact us.",notFound:"Could not find a registration under this email address. Please check your input or contact us.",sendAgain:"To resend the confirmation link again, please click",pleaseWait:"Please wait before submitting another request."},yourRegistration:"Your registration",editingAllowedUntil:"Applications can be submitted and revised until the 30th of June 2022 23:59 EEST (Lithuanian time).",confirmationAfterDeadline:"You will receive an email confirming your registration after this deadline.",complete:"Your registration is complete!",missingForComplete:"Following fields are missing for your registration to be complete:",notfound:"Registration not found.",scoreConfirmations:{"1":"I confirm that the submitted piece has not been performed in paid concerts, broadcast on the Internet, radio or television, performed in other competitions or won any prizes.","2":"I confirm that the submitted piece meets the score requirements (see section IV of the <a href='/files/fsc_regulations_EN_2022-02-24.pdf' target='_blank' class='link'>regulations</a>).","3":"I confirm that I will not disclose the authorship of my piece until the announcement of the results of the 2nd round.",label:"Score submission - agreements"},form:{firstName:"Name",lastName:"Surname",email:"Email address",dateOfBirth:"Date of birth",country:"Country",idCopy:"ID document",scoreSubmission:"Score submission",pieceTitle:"Piece title",annotation:"Annotation",pieceScore:"Score",pieceDemo:"Demo file",instrumentation:"Instrumentation",min30:"The score instrumentation requires at least <b>30 performers</b>.",youSelected:"You selected <b>{number} {number, plural, =1 {performer} other {performers}}</b>.",max30:"You can choose up to <b>35 performers</b>.",remarks:"Remarks",proofOfPayment:"Proof of payment",billingAddress:{label:"Billing address",placeholder:"Street, house no., postcode, city, country"},referrer:{title:"How did you hear about FSC?",wordOfMouth:"Word of mouth",edInst:"Educational institution",other:"Other"},upload:"Upload",maxSize:"Max.",maxChars:"Max. {number} characters",optional:"optional",pleaseSelect:"Please select...",pleaseEnter:"Please enter something...",inputSaved:"Input saved.",save:"Save",submit:"Submit",edit:"Edit",cancel:"Cancel",error:{emailUsed:"This email address has already been used. Please choose a different one.",invalidForm:"An error has occured. Please check your input.",pleaseWait:"Please wait before submitting another registration.",email:"An error has occurred while sending the confirmation email. Please try again later, or contact us.",fileError:"Following files are invalid: {files}. Please check your input and try again.",errorOccurred:"An error has occurred. Please try again later, or contact us."},validation:{fileSize:"Please select a smaller file.",fileType:"Please select a file with the correct type."}}},St={firstFlute:"1st Flute",secondFlute:"2nd Flute / Piccolo / Alto Flute",firstOboe:"1st Oboe",secondOboe:"2nd Oboe / English Horn",firstClarinet:"1st Clarinet",secondClarinet:"2nd Clarinet / Bass Clarinet",saxophone:"Saxophone (alto / tenor)",bassoon:"Bassoon",frenchHorn:"French Horn",trumpet:"Trumpet",trombone:"Trombone",timpani:"Timpani",percussion:"Percussion",pianoCelesta:"Piano / Celesta",harp:"Harp",accordion:"Accordion",electricGuitar:"Electric Guitar",femaleNarrator:"Female Narrator",maleNarrator:"Male Narrator",iViolin:"I Violin",iiViolin:"II Violin",viola:"Viola",violoncello:"Violoncello",doublebass:"Doublebass"},It={title:"Payment",amount:"Amount",recipient:"Recipient",purpose:"Purpose of payment",regToFSC:"registration to FSC",ukraine:"All Ukrainian composers can participate in the competition free of charge. Upload of the payment receipt is optional.",sanctioned:"It is allowed to participate in the Competition free of charge for participants from all countries that fell on (or might fall till June 30th, 2022) the list of international transaction restrictions. Such participants will not receive a cash prize in case of winning unless the application fee is paid before the end of the registration deadline."},Pt={link:"Privacy Policy",title:"Privacy Policy of PI \u201EMuzikinis pir\u0161tas\u201C",meta:{title:"Privacy Policy - Future Symphony Competition",description:"Privacy Policy of the 3rd Future Symphony Competition"}},jt={title:"Error - Future Symphony Competition",pageNotFound:"Page not found",goBack:"Go back"},Ct={about2:"Future Symphony Orchestra at the final concert of the first Future Symphony Competition in 2018",orchestra_1:"Future Symphony Orchestra at the final concert of the second Future Symphony Competition in 2020",finalists:"Six of the seven finalists of the second Future Symphony Competition at the final concert (2020)",philharmonic:"Rehearsal at the Lithuanian National Philharmonic in Vilnius - showplace of the 2020 Future Symphony Competition final concert",audience_18:"Audience at the final concert of the first Future Symphony Competition in 2018",jury_18:"Jury at the final concert of the first Future Symphony Competition in 2018"};var Ft={index:dt,nav:vt,about:gt,news:kt,participants:bt,sponsors:yt,contacts:_t,regulations:wt,registration:Et,orchestra:St,payment:It,privacy:Pt,error:jt,gallery:Ct};const At={meta:{title:"Future Symphony Konkursas",description:"III \u201EFuture Symphony\u201C tarptautinis kompozicij\u0173 simfoniniam orkestrui konkursas"},headline2:"III TARPTAUTINIS KOMPOZICIJ\u0172 SIMFONINIAM<br>ORKESTRUI KONKURSAS"},Nt={about:"APIE",news:"NAUJIENOS",participants:"DALYVIAMS",sponsors:"R\u0116M\u0116JAI & PARTNERIAI",contacts:"KONTAKTAI",back:"\u012E prad\u017Ei\u0105"},Mt={title:"Sveiki atvyk\u0119!"},Tt={title:"Naujienos",older:"Senesn\u0117s naujienos",readmore:"Skaityti daugiau",slug:{meta:{title:"Naujienos - Future Symphony Konkursas"}},archive:{title:"Naujien\u0173 archyvas",meta:{title:"Naujien\u0173 archyvas - Future Symphony Konkursas",description:"Naujien\u0173 archyvas \u201EFuture Symphony\u201C tarptautiniam kompozicij\u0173 simfoniniam orkestrui konkursui"}}},Lt={title:"Dalyviams",registration:"Prad\u0117ti registracij\u0105"},Ot={title:"R\u0117m\u0117jai ir partneriai",financedBy:"Projekt\u0105 finansuoja",patron:"Mecenatas",mainSponsors:"Pagrindiniai r\u0117m\u0117jai",sponsors:"R\u0117m\u0117jai",infSponsor:"Informacinis r\u0117m\u0117jas",partners:"Partneriai"},Rt={title:"Kontaktai",organizer:"Projekto organizatorius",vsi:"V\u0161\u012E",projectManagement:"Projekto vadyba",orchestraManagement:"Orkestro vadyba",communicationAssistance:"Komunikacijos asistent\u0117",email:"El. pa\u0161tas",socialMedia:"Socialiniai tinklai",webdesign:"Interneto svetain\u0117s dizainas ir administravimas"},Vt={title:"Konkurso nuostatai",meta:{title:"Nuostatai - Future Symphony Konkursas",description:"Nuostatai III-am \u201EFuture Symphony\u201C tarptautiniam kompozicij\u0173 simfoniniam orkestrui konkursui"}},zt={title:"Registracija \u012F konkurs\u0105",meta:{title:"Registracija - Future Symphony konkursas",description:"Registracija \u012F III-j\u012F \u201EFuture Symphony\u201C konkurs\u0105 atsidaro 2022 m. kovo 1 d."},firstStep:"Pirmiausia pateikite \u0161i\u0105 informacij\u0105. I\u0161 <tt>registration@futuresymphony.lt</tt> gausite el. lai\u0161k\u0105 su tolimesn\u0117mis instrukcijomis.",regulationsAccepted:"Sutinku su <a href='/files/fsc_regulations_LT_2022-02-24.pdf' target='_blank' class='link'>Konkurso nuostatais</a> ir <a href='/privacy' target='_blank' class='link'>Privatumo politika.</a>",success:"J\u016Bs\u0173 registracija pateikta. Vykdykite instrukcijas, kurios buvo i\u0161si\u0173stos j\u016Bs\u0173 el. pa\u0161to adresu <tt>{email}</tt>.",resend:{alreadyRegistered:"Jei jau u\u017Esiregistravote, bet nerandate patvirtinimo el. lai\u0161ko, spustel\u0117kite",didNotReceive:"Jeigu negavote el. lai\u0161ko, spustel\u0117kite",here:"\u010Dia",enterYourEmail:"Nor\u0117dami gauti pakartotin\u0105 patvirtinimo nuoroda, \u012Fveskite savo el. pa\u0161to adres\u0105",yourEmail:"J\u016Bs\u0173 el. pa\u0161to adresas...",success:"\u012E nurodyt\u0105 el. pa\u0161t\u0105 i\u0161si\u0173stas lai\u0161kas su tolimesn\u0117mis instrukcijomis. Jei negavote lai\u0161ko, pra\u0161om susisiekti su mumis.",notFound:"Registracijos \u0161iuo el. pa\u0161to adresu nerasta. Patikrinkite \u012Fvest\u0105 el. pa\u0161to adres\u0105 arba susisiekti su mumis.",sendAgain:"Nor\u0117dami gauti pakartotin\u0105 patvirtinimo nuoroda dar karta, spustel\u0117kite",pleaseWait:"Palaukite prie\u0161 pateikdami kit\u0105 u\u017Eklaus\u0105."},yourRegistration:"J\u016Bs\u0173 registracija",editingAllowedUntil:"Parai\u0161kas teikti ir koreguoti galima iki 2021 m. bir\u017Eelio 30 d. 23:59 EEST (Lietuvos laiku).",confirmationAfterDeadline:"Pasibaigus \u0161iam terminui, gausite el. lai\u0161k\u0105, patvirtinant\u012F j\u016Bs\u0173 registracij\u0105.",complete:"J\u016Bs\u0173 registracija baigta!",missingForComplete:"Kad registracija b\u016Bt\u0173 u\u017Ebaigta, tr\u016Bksta \u0161i\u0173 lauk\u0173:",notfound:"Registracija nerasta.",scoreConfirmations:{"1":"Patvirtinu, kad mano pateiktas k\u016Brinys n\u0117ra skamb\u0117j\u0119s mokamuose koncertuose, transliuotas internete, radijuje ar televizijoje, atliktas kituose konkursuose ar juose laim\u0117j\u0119s bet koki\u0173 priz\u0173.","2":"Patvirtinu, kad mano pateiktas k\u016Brinys atitinka visus partit\u016Bros nurodymus (\u017Er. <a href='/files/fsc_regulations_LT_2022-02-24.pdf' target='_blank' class='link'>Nuostat\u0173</a> IV punkt\u0105).","3":"Patvirtinu, kad neatskleisiu savo k\u016Brinio autoryst\u0117s iki pat konkurso 2-ojo turo rezultat\u0173 paskelbimo.",label:"K\u016Brinio pateikimas - patvirtinimai"},form:{firstName:"Vardas",lastName:"Pavard\u0117",email:"Elektroninis pa\u0161tas",dateOfBirth:"Gimimo data",country:"\u0160alis",idCopy:"ID dokumentas",scoreSubmission:"K\u016Brinio pateikimas",pieceTitle:"K\u016Brinio pavadinimas",annotation:"Anotacija",pieceScore:"Partit\u016Bra",pieceDemo:"Demo \u012Fra\u0161as",instrumentation:"Instrumentuot\u0117",min30:"K\u016Brinio instrumentuot\u0117je privalo b\u016Bti bent <b>30 atlik\u0117j\u0173</b>.",youSelected:"J\u016Bs pasirinkote <b>{number} {number, plural, =0 {atlik\u0117j\u0173} =1 {atlik\u0117j\u0105} other {atlik\u0117jus}}</b>.",max30:"Galite pasirinkti iki <b>35 atlik\u0117j\u0173</b>.",remarks:"Pastabos",proofOfPayment:"Perlaid\u0105 patvirtinantis dokumentas",billingAddress:{label:"Atsiskaitymo adresas",placeholder:"Gatv\u0117, namo nr., pa\u0161to kodas, miestas, \u0161alis"},referrer:{title:"Kaip su\u017Einojote apie konkurs\u0105?",wordOfMouth:"I\u0161 l\u016Bp\u0173 \u012F l\u016Bpas",edInst:"\u0160vietimo \u012Fstaiga",other:"Kita"},upload:"\u012Ekelti",maxSize:"Iki",maxChars:"Iki {number} spaudos \u017Eenkl\u0173",optional:"neprivaloma",pleaseSelect:"Pra\u0161ome pasirinkti...",pleaseEnter:"\u012Eveskite k\u0105 nors...",inputSaved:"\u012Evestis i\u0161saugota.",save:"I\u0161saugoti",submit:"Pateikti",edit:"Redaguoti",cancel:"At\u0161aukti",error:{emailUsed:"\u0160is el. pa\u0161to adresas jau buvo naudojamas. Pra\u0161au pasirinkite kit\u0105.",invalidForm:"\u012Evyko klaida. Patikrinkite \u012Fvest\u0105 informacij\u0105.",pleaseWait:"Palaukite prie\u0161 pateikdami kit\u0105 registracij\u0105.",emailError:"Siun\u010Diant patvirtinimo el. lai\u0161k\u0105 \u012Fvyko klaida. Bandykite dar kart\u0105 v\u0117liau arba susisiekite su mumis.",fileError:"\u0160ie failai yra netinkami: {files}. Patikrinkite \u012Fkeltus failus ir bandykite dar kart\u0105.",errorOccurred:"\u012Evyko klaida. Bandykite dar kart\u0105 v\u0117liau arba susisiekite su mumis."},validation:{fileSize:"Pasirinkite ma\u017Eesn\u012F fail\u0105.",fileType:"Please select a file with the correct type."}}},Dt={firstFlute:"1 Fleita",secondFlute:"2 Fleita / piccolo / altin\u0117 fleita",firstOboe:"1 Obojus",secondOboe:"2 Obojus / angl\u0173 ragas",firstClarinet:"1 Klarnetas",secondClarinet:"2 Klarnetas / bosinis klarnetas",saxophone:"Saksofonas (altinis / tenorinis)",bassoon:"Fagotas",frenchHorn:"Valtorna",trumpet:"Trimitas",trombone:"Trombonas",timpani:"Timpanai",percussion:"Perkusija",pianoCelesta:"Fortepijonas / \u010Delesta",harp:"Arfa",accordion:"Akordeonas",electricGuitar:"Elektrin\u0117 gitara",femaleNarrator:"Naratorius (mot. balsas)",maleNarrator:"Naratorius (vyr. balsas)",iViolin:"I smuikas",iiViolin:"II smuikas",viola:"Altas",violoncello:"Violon\u010Del\u0117",doublebass:"Kontrabosas"},Kt={title:"Apmok\u0117jimas",amount:"Suma",recipient:"Gav\u0117jas",purpose:"Mok\u0117jimo paskirtis",regToFSC:"registracija FSC",ukraine:"Visi ukrainie\u010Diai kompozitoriai gali dalyvauti konkurse nemokamai. Mok\u0117jim\u0105 patvirtinan\u010Dio dokumento \u012Fk\u0117limas yra neprivalomas.",sanctioned:"Konkurse nemokamai gali dalyvauti dalyviai i\u0161 vis\u0173 \u0161ali\u0173, kurios pateko (arba gali patekti iki 2022 m. bir\u017Eelio 30 d.) \u012F tarptautini\u0173 pinig\u0173 perlaid\u0173 apribojim\u0173 s\u0105ra\u0161\u0105. Tokiems dalyviams \u017Einotina, jog prizo laim\u0117jimo atveju laim\u0117jimas negal\u0117s b\u016Bti pervestas, nebent iki bendrojo registracijos termino pabaigos bus sumok\u0117tas dalyvio mokestis."},Bt={link:"Privatumo Politika",title:"V\u0161\u012E \u201EMuzikinis pir\u0161tas\u201C privatumo politika",meta:{title:"Privatumo politika - Future Symphony Konkursas",description:"III-ojo \u201EFuture Symphony\u201C konkurso privatumo politika"}},Ht={title:"Klaida - Future Symphony Konkursas",pageNotFound:"Puslapis nerastas",goBack:"Gr\u012F\u017Eti"},Ut={about2:"Future Symphony Orchestra baigiamajame I-ojo Future Symphony konkurso koncerte 2018 metais",orchestra_1:"Future Symphony Orchestra baigiamajame II-ojo Future Symphony konkurso koncerte 2020 metais",finalists:"\u0160e\u0161i i\u0161 septyni\u0173 finalinink\u0173 antrojo Future Symphony konkurso baigiamajame koncerte (2020 m.)",philharmonic:"Repeticija Lietuvos nacionalin\u0117 filharmonija Vilniuje \u2013 2020 m. Future Symphony konkurso finalinio koncerto vieta",audience_18:"Pirmojo Future Symphony konkurso baigiamojo koncerto publika (2018 m.)",jury_18:"Pirmojo Future Symphony konkurso baigiamojo koncerto \u017Eiuri (2018 m.)"};var Yt={index:At,nav:Nt,about:Mt,news:Tt,participants:Lt,sponsors:Ot,contacts:Rt,regulations:Vt,registration:zt,orchestra:Dt,payment:Kt,privacy:Bt,error:Ht,gallery:Ut};const{document:Me}=xe;function Gt(t){let i,e;const l=t[2].default,n=Oe(l,t,t[4],null);return{c(){i=d("div"),n&&n.c(),this.h()},l(o){i=v(o,"DIV",{class:!0});var m=_(i);n&&n.l(m),m.forEach(c),this.h()},h(){a(i,"class","cover-container")},m(o,m){X(o,i,m),n&&n.m(i,null),e=!0},p(o,m){n&&n.p&&(!e||m&16)&&Re(n,l,o,o[4],e?ze(l,o[4],m,null):Ve(o[4]),null)},i(o){e||(ce(n,o),e=!0)},o(o){ue(n,o),e=!1},d(o){o&&c(i),n&&n.d(o)}}}function Wt(t){let i,e,l,n,o,m,y,f,h,u,I;Me.title=i=t[0]("index.meta.title"),f=new ft({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}});let C={};return u=new et({props:C}),t[3](u),{c(){e=A(),l=d("div"),n=A(),o=d("div"),m=d("div"),y=A(),_e(f.$$.fragment),h=A(),_e(u.$$.fragment),this.h()},l(k){Ze('[data-svelte="svelte-7qtigi"]',Me.head).forEach(c),e=N(k),l=v(k,"DIV",{class:!0}),_(l).forEach(c),n=N(k),o=v(k,"DIV",{class:!0,id:!0});var b=_(o);m=v(b,"DIV",{class:!0});var E=_(m);y=N(E),we(f.$$.fragment,E),E.forEach(c),b.forEach(c),h=N(k),we(u.$$.fragment,k),this.h()},h(){a(l,"class","cover-picture"),a(m,"class","site-wrapper-inner"),a(o,"class","site-wrapper"),a(o,"id","start")},m(k,g){X(k,e,g),X(k,l,g),X(k,n,g),X(k,o,g),s(o,m),s(m,y),Ee(f,m,null),X(k,h,g),Ee(u,k,g),I=!0},p(k,[g]){(!I||g&1)&&i!==(i=k[0]("index.meta.title"))&&(Me.title=i);const b={};g&16&&(b.$$scope={dirty:g,ctx:k}),f.$set(b);const E={};u.$set(E)},i(k){I||(ce(f.$$.fragment,k),ce(u.$$.fragment,k),I=!0)},o(k){ue(f.$$.fragment,k),ue(u.$$.fragment,k),I=!1},d(k){k&&c(e),k&&c(l),k&&c(n),k&&c(o),Se(f),k&&c(h),t[3](null),Se(u,k)}}}function Jt(t,i,e){let l,n;pe(t,De,f=>e(0,l=f)),pe(t,He,f=>e(1,n=f));let{$$slots:o={},$$scope:m}=i;Be("en",Ft),Be("lt",Yt),$e({initialLocale:"en",fallbackLocale:"en"}),Ke(()=>{var f;de.set((f=localStorage.getItem("locale"))!=null?f:"en"),de.subscribe(h=>localStorage.setItem("locale",h)),"scrollRestoration"in history&&(history.scrollRestoration="manual"),setTimeout(()=>document.body.classList.remove("preload"),150),st()});function y(f){x[f?"unshift":"push"](()=>{n=f,He.set(n)})}return t.$$set=f=>{"$$scope"in f&&e(4,m=f.$$scope)},[l,n,o,y,m]}class $t extends Ie{constructor(i){super();Pe(this,i,Jt,Wt,je,{})}}export{$t as default};
