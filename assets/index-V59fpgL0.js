var ye=Object.defineProperty;var ke=(n,e,t)=>e in n?ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var X=(n,e,t)=>(ke(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();function x(){}function Ce(n,e){for(const t in e)n[t]=e[t];return n}function $e(n){return n()}function oe(){return Object.create(null)}function U(n){n.forEach($e)}function _e(n){return typeof n=="function"}function R(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Z;function ne(n,e){return n===e?!0:(Z||(Z=document.createElement("a")),Z.href=e,n===Z.href)}function Le(n){return Object.keys(n).length===0}function I(n,e,t,r){if(n){const l=xe(n,e,t,r);return n[0](l)}}function xe(n,e,t,r){return n[1]&&r?Ce(t.ctx.slice(),n[1](r(e))):t.ctx}function z(n,e,t,r){if(n[2]&&r){const l=n[2](r(t));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],u=Math.max(e.dirty.length,l.length);for(let f=0;f<u;f+=1)s[f]=e.dirty[f]|l[f];return s}return e.dirty|l}return e.dirty}function O(n,e,t,r,l,s){if(l){const u=xe(e,t,r,s);n.p(u,l)}}function N(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function g(n,e){n.appendChild(e)}function w(n,e,t){n.insertBefore(e,t||null)}function v(n){n.parentNode&&n.parentNode.removeChild(n)}function p(n){return document.createElement(n)}function j(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function W(n){return document.createTextNode(n)}function C(){return W(" ")}function ve(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function o(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Me(n){return Array.from(n.childNodes)}let le;function D(n){le=n}function we(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const H=[],ae=[];let V=[];const ie=[],Se=Promise.resolve();let re=!1;function Be(){re||(re=!0,Se.then(be))}function se(n){V.push(n)}const J=new Set;let G=0;function be(){if(G!==0)return;const n=le;do{try{for(;G<H.length;){const e=H[G];G++,D(e),Re(e.$$)}}catch(e){throw H.length=0,G=0,e}for(D(null),H.length=0,G=0;ae.length;)ae.pop()();for(let e=0;e<V.length;e+=1){const t=V[e];J.has(t)||(J.add(t),t())}V.length=0}while(H.length);for(;ie.length;)ie.pop()();re=!1,J.clear(),D(n)}function Re(n){if(n.fragment!==null){n.update(),U(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(se)}}function Fe(n){const e=[],t=[];V.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),V=e}const K=new Set;let E;function ce(){E={r:0,c:[],p:E}}function ue(){E.r||U(E.c),E=E.p}function y(n,e){n&&n.i&&(K.delete(n),n.i(e))}function k(n,e,t,r){if(n&&n.o){if(K.has(n))return;K.add(n),E.c.push(()=>{K.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Te(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function B(n){n&&n.c()}function M(n,e,t){const{fragment:r,after_update:l}=n.$$;r&&r.m(e,t),se(()=>{const s=n.$$.on_mount.map($e).filter(_e);n.$$.on_destroy?n.$$.on_destroy.push(...s):U(s),n.$$.on_mount=[]}),l.forEach(se)}function S(n,e){const t=n.$$;t.fragment!==null&&(Fe(t.after_update),U(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Pe(n,e){n.$$.dirty[0]===-1&&(H.push(n),Be(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function F(n,e,t,r,l,s,u=null,f=[-1]){const m=le;D(n);const i=n.$$={fragment:null,ctx:[],props:s,update:x,not_equal:l,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:e.target||m.$$.root};u&&u(i.root);let d=!1;if(i.ctx=t?t(n,e.props||{},(a,$,...c)=>{const h=c.length?c[0]:$;return i.ctx&&l(i.ctx[a],i.ctx[a]=h)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](h),d&&Pe(n,a)),$}):[],i.update(),d=!0,U(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const a=Me(e.target);i.fragment&&i.fragment.l(a),a.forEach(v)}else i.fragment&&i.fragment.c();e.intro&&y(n.$$.fragment),M(n,e.target,e.anchor),be()}D(m)}class T{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){S(this,1),this.$destroy=x}$on(e,t){if(!_e(t))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const l=r.indexOf(t);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ae);const je="/Svelte-Tailwind-LandingPage/assets/logo-RN08AYtz.svg";function Ee(n){let e,t,r;const l=n[5].default,s=I(l,n,n[4],null);return{c(){e=p("button"),s&&s.c(),o(e,"class",t=`${n[3]&&"hidden md:block"} rounded-full shadow-xl ${n[0]} px-6 py-3 text-${n[1]} transition-colors duration-300 ${n[2]} focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed`)},m(u,f){w(u,e,f),s&&s.m(e,null),r=!0},p(u,[f]){s&&s.p&&(!r||f&16)&&O(s,l,u,u[4],r?z(l,u[4],f,null):N(u[4]),null),(!r||f&15&&t!==(t=`${u[3]&&"hidden md:block"} rounded-full shadow-xl ${u[0]} px-6 py-3 text-${u[1]} transition-colors duration-300 ${u[2]} focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed`))&&o(e,"class",t)},i(u){r||(y(s,u),r=!0)},o(u){k(s,u),r=!1},d(u){u&&v(e),s&&s.d(u)}}}function Ge(n,e,t){let{$$slots:r={},$$scope:l}=e,{bgColor:s="bg-brightRed"}=e,{color:u="white"}=e,{hover:f="hover:bg-brightRedLight"}=e,{hidden:m=!1}=e;return n.$$set=i=>{"bgColor"in i&&t(0,s=i.bgColor),"color"in i&&t(1,u=i.color),"hover"in i&&t(2,f=i.hover),"hidden"in i&&t(3,m=i.hidden),"$$scope"in i&&t(4,l=i.$$scope)},[s,u,f,m,l,r]}class Y extends T{constructor(e){super(),F(this,e,Ge,Ee,R,{bgColor:0,color:1,hover:2,hidden:3})}}function He(n){let e,t,r;return{c(){e=p("button"),e.innerHTML='<div class="h-2 w-7 border-t-4 border-darkBlue transition-all"></div> <div class="h-2 w-7 border-t-4 border-darkBlue transition-all"></div> <div class="h-2 w-7 border-t-4 border-darkBlue transition-all"></div>',o(e,"id","menu-btn"),o(e,"class","hamburger focus:outline-none md:hidden")},m(l,s){w(l,e,s),t||(r=ve(e,"click",n[0]),t=!0)},p:x,i:x,o:x,d(l){l&&v(e),t=!1,r()}}}function Ie(n){function e(t){we.call(this,n,t)}return[e]}class ze extends T{constructor(e){super(),F(this,e,Ie,He,R,{})}}function Oe(n){let e;return{c(){e=p("div"),e.innerHTML='<div class="absolute left-6 right-6 mt-10 flex flex-col items-center space-y-6 bg-white py-8 font-bold drop-shadow-md"><a href="#">Pricing</a> <a href="#">Product</a> <a href="#">About Us</a> <a href="#">Careers</a> <a href="#">Community</a></div>',o(e,"class","md:hidden")},m(t,r){w(t,e,r)},p:x,i:x,o:x,d(t){t&&v(e)}}}class Ne extends T{constructor(e){super(),F(this,e,null,Oe,R,{})}}function Ve(n){let e,t,r;return{c(){e=p("button"),e.innerHTML='<div class="-ml-0.5 h-2 w-7 rotate-45 border-t-4 border-darkBlue"></div> <div class="-mt-2 h-2 w-7 -rotate-45 border-t-4 border-darkBlue"></div>',o(e,"id","menu-btn"),o(e,"class","hamburger relative focus:outline-none md:hidden")},m(l,s){w(l,e,s),t||(r=ve(e,"click",n[0]),t=!0)},p:x,i:x,o:x,d(l){l&&v(e),t=!1,r()}}}function We(n){function e(t){we.call(this,n,t)}return[e]}class qe extends T{constructor(e){super(),F(this,e,We,Ve,R,{})}}function De(n){let e;return{c(){e=W("Get Started")},m(t,r){w(t,e,r)},d(t){t&&v(e)}}}function Ue(n){let e,t;return e=new qe({}),e.$on("click",n[1]),{c(){B(e.$$.fragment)},m(r,l){M(e,r,l),t=!0},p:x,i(r){t||(y(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Ye(n){let e,t;return e=new ze({}),e.$on("click",n[1]),{c(){B(e.$$.fragment)},m(r,l){M(e,r,l),t=!0},p:x,i(r){t||(y(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function fe(n){let e,t;return e=new Ne({}),{c(){B(e.$$.fragment)},m(r,l){M(e,r,l),t=!0},i(r){t||(y(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Ze(n){let e,t,r,l,s,u,f,m,i,d,a,$,c;m=new Y({props:{hidden:!0,$$slots:{default:[De]},$$scope:{ctx:n}}});const h=[Ye,Ue],_=[];function b(P,A){return P[0]?1:0}d=b(n),a=_[d]=h[d](n);let L=n[0]&&fe();return{c(){e=p("nav"),t=p("div"),r=p("img"),s=C(),u=p("div"),u.innerHTML='<a href="#" class="hover:text-darkGrayishBlue">Pricing</a> <a href="#" class="hover:text-darkGrayishBlue">Product</a> <a href="#" class="hover:text-darkGrayishBlue">About Us</a> <a href="#" class="hover:text-darkGrayishBlue">Career</a> <a href="#" class="hover:text-darkGrayishBlue">Community</a>',f=C(),B(m.$$.fragment),i=C(),a.c(),$=C(),L&&L.c(),ne(r.src,l=je)||o(r,"src",l),o(r,"alt",""),o(u,"class","hidden space-x-6 md:flex"),o(t,"class","flex items-center justify-between"),o(e,"class","container relative mx-auto p-6")},m(P,A){w(P,e,A),g(e,t),g(t,r),g(t,s),g(t,u),g(t,f),M(m,t,null),g(t,i),_[d].m(t,null),g(e,$),L&&L.m(e,null),c=!0},p(P,[A]){const q={};A&4&&(q.$$scope={dirty:A,ctx:P}),m.$set(q);let Q=d;d=b(P),d===Q?_[d].p(P,A):(ce(),k(_[Q],1,1,()=>{_[Q]=null}),ue(),a=_[d],a?a.p(P,A):(a=_[d]=h[d](P),a.c()),y(a,1),a.m(t,null)),P[0]?L?A&1&&y(L,1):(L=fe(),L.c(),y(L,1),L.m(e,null)):L&&(ce(),k(L,1,1,()=>{L=null}),ue())},i(P){c||(y(m.$$.fragment,P),y(a),y(L),c=!0)},o(P){k(m.$$.fragment,P),k(a),k(L),c=!1},d(P){P&&v(e),S(m),_[d].d(),L&&L.d()}}}function Ke(n,e,t){let r=!1;return[r,()=>{t(0,r=!r)}]}class Qe extends T{constructor(e){super(),F(this,e,Ke,Ze,R,{})}}const Xe="/Svelte-Tailwind-LandingPage/assets/illustration-intro-i5QEpSL7.svg";function Je(n){let e;return{c(){e=W("Get Started")},m(t,r){w(t,e,r)},d(t){t&&v(e)}}}function et(n){let e,t,r,l,s,u,f,m,i,d,a,$;return i=new Y({props:{$$slots:{default:[Je]},$$scope:{ctx:n}}}),{c(){e=p("section"),t=p("div"),r=p("div"),l=p("h1"),l.textContent="Bring everyone together to build better products",s=C(),u=p("p"),u.textContent="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",f=C(),m=p("div"),B(i.$$.fragment),d=C(),a=p("div"),a.innerHTML=`<img src="${Xe}" alt=""/>`,o(l,"class","max-w-sm text-center text-4xl font-bold md:text-left md:text-5xl"),o(u,"class","max-w-sm text-center text-darkGrayishBlue md:text-left"),o(m,"class","flex justify-center md:justify-start"),o(r,"class","mb-16 flex flex-col space-y-12 md:w-1/2"),o(a,"class","md:w-1/2"),o(t,"class","container mx-auto mt-10 flex flex-col-reverse items-center px-6 md:flex-row md:justify-between"),o(e,"id","hero")},m(c,h){w(c,e,h),g(e,t),g(t,r),g(r,l),g(r,s),g(r,u),g(r,f),g(r,m),M(i,m,null),g(t,d),g(t,a),$=!0},p(c,[h]){const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),i.$set(_)},i(c){$||(y(i.$$.fragment,c),$=!0)},o(c){k(i.$$.fragment,c),$=!1},d(c){c&&v(e),S(i)}}}class tt extends T{constructor(e){super(),F(this,e,null,et,R,{})}}const nt=n=>({}),de=n=>({}),rt=n=>({}),me=n=>({}),st=n=>({}),ge=n=>({});function lt(n){let e,t,r,l,s,u,f,m,i;const d=n[1].num,a=I(d,n,n[0],ge),$=n[1].heading,c=I($,n,n[0],me),h=n[1].paragraph,_=I(h,n,n[0],de);return{c(){e=p("div"),t=p("div"),r=p("p"),a&&a.c(),l=C(),s=p("h3"),c&&c.c(),u=C(),f=p("div"),m=p("p"),_&&_.c(),o(r,"class","rounded-full bg-brightRed px-4 py-2 text-white md:py-1"),o(s,"class","text-base font-bold md:text-lg"),o(t,"class","flex items-center space-x-2 rounded-l-full bg-brightRedSupLight md:bg-transparent"),o(m,"class","text-darkGrayishBlue"),o(e,"class","flex flex-col space-y-5")},m(b,L){w(b,e,L),g(e,t),g(t,r),a&&a.m(r,null),g(t,l),g(t,s),c&&c.m(s,null),g(e,u),g(e,f),g(f,m),_&&_.m(m,null),i=!0},p(b,[L]){a&&a.p&&(!i||L&1)&&O(a,d,b,b[0],i?z(d,b[0],L,st):N(b[0]),ge),c&&c.p&&(!i||L&1)&&O(c,$,b,b[0],i?z($,b[0],L,rt):N(b[0]),me),_&&_.p&&(!i||L&1)&&O(_,h,b,b[0],i?z(h,b[0],L,nt):N(b[0]),de)},i(b){i||(y(a,b),y(c,b),y(_,b),i=!0)},o(b){k(a,b),k(c,b),k(_,b),i=!1},d(b){b&&v(e),a&&a.d(b),c&&c.d(b),_&&_.d(b)}}}function ot(n,e,t){let{$$slots:r={},$$scope:l}=e;return n.$$set=s=>{"$$scope"in s&&t(0,l=s.$$scope)},[l,r]}class ee extends T{constructor(e){super(),F(this,e,ot,lt,R,{})}}function at(n){let e;return{c(){e=p("span"),e.textContent="01",o(e,"slot","num")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function it(n){let e;return{c(){e=p("span"),e.textContent="Track company-wide progress",o(e,"slot","heading")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function ct(n){let e;return{c(){e=p("span"),e.textContent="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",o(e,"slot","paragraph")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function ut(n){let e;return{c(){e=p("span"),e.textContent="02",o(e,"slot","num")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function ft(n){let e;return{c(){e=p("span"),e.textContent="Advanced built-in reports",o(e,"slot","heading")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function dt(n){let e;return{c(){e=p("span"),e.textContent="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",o(e,"slot","paragraph")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function mt(n){let e;return{c(){e=p("span"),e.textContent="03",o(e,"slot","num")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function gt(n){let e;return{c(){e=p("span"),e.textContent="Everything you need in one place",o(e,"slot","heading")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function pt(n){let e;return{c(){e=p("span"),e.textContent="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",o(e,"slot","paragraph")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function ht(n){let e,t,r,l,s,u,f,m,i,d,a;return u=new ee({props:{$$slots:{paragraph:[ct],heading:[it],num:[at]},$$scope:{ctx:n}}}),m=new ee({props:{$$slots:{paragraph:[dt],heading:[ft],num:[ut]},$$scope:{ctx:n}}}),d=new ee({props:{$$slots:{paragraph:[pt],heading:[gt],num:[mt]},$$scope:{ctx:n}}}),{c(){e=p("section"),t=p("div"),r=p("div"),r.innerHTML='<h2 class="max-w-md text-center text-4xl font-bold md:text-left">What&#39;s different about Manage?</h2> <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>',l=C(),s=p("div"),B(u.$$.fragment),f=C(),B(m.$$.fragment),i=C(),B(d.$$.fragment),o(r,"class","flex flex-col space-y-8 md:w-1/2"),o(s,"class","flex flex-col space-y-8 md:w-1/2"),o(t,"class","container mx-auto mt-10 flex flex-col space-y-16 px-4 md:flex-row md:space-y-0"),o(e,"id","features")},m($,c){w($,e,c),g(e,t),g(t,r),g(t,l),g(t,s),M(u,s,null),g(s,f),M(m,s,null),g(s,i),M(d,s,null),a=!0},p($,[c]){const h={};c&1&&(h.$$scope={dirty:c,ctx:$}),u.$set(h);const _={};c&1&&(_.$$scope={dirty:c,ctx:$}),m.$set(_);const b={};c&1&&(b.$$scope={dirty:c,ctx:$}),d.$set(b)},i($){a||(y(u.$$.fragment,$),y(m.$$.fragment,$),y(d.$$.fragment,$),a=!0)},o($){k(u.$$.fragment,$),k(m.$$.fragment,$),k(d.$$.fragment,$),a=!1},d($){$&&v(e),S(u),S(m),S(d)}}}class $t extends T{constructor(e){super(),F(this,e,null,ht,R,{})}}const _t=n=>({}),pe=n=>({}),xt=n=>({}),he=n=>({});function vt(n){let e,t,r,l,s,u,f,m,i;const d=n[3].name,a=I(d,n,n[2],he),$=n[3].paragraph,c=I($,n,n[2],pe);return{c(){e=p("div"),t=p("img"),l=C(),s=p("h2"),a&&a.c(),u=C(),f=p("p"),c&&c.c(),ne(t.src,r=n[0])||o(t,"src",r),o(t,"alt",""),o(e,"class",m=(n[1]&&"hidden md:flex")+" flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3")},m(h,_){w(h,e,_),g(e,t),g(e,l),g(e,s),a&&a.m(s,null),g(e,u),g(e,f),c&&c.m(f,null),i=!0},p(h,[_]){(!i||_&1&&!ne(t.src,r=h[0]))&&o(t,"src",r),a&&a.p&&(!i||_&4)&&O(a,d,h,h[2],i?z(d,h[2],_,xt):N(h[2]),he),c&&c.p&&(!i||_&4)&&O(c,$,h,h[2],i?z($,h[2],_,_t):N(h[2]),pe),(!i||_&2&&m!==(m=(h[1]&&"hidden md:flex")+" flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3"))&&o(e,"class",m)},i(h){i||(y(a,h),y(c,h),i=!0)},o(h){k(a,h),k(c,h),i=!1},d(h){h&&v(e),a&&a.d(h),c&&c.d(h)}}}function wt(n,e,t){let{$$slots:r={},$$scope:l}=e,{src:s=""}=e,{hidden:u=!1}=e;return n.$$set=f=>{"src"in f&&t(0,s=f.src),"hidden"in f&&t(1,u=f.hidden),"$$scope"in f&&t(2,l=f.$$scope)},[s,u,l,r]}class te extends T{constructor(e){super(),F(this,e,wt,vt,R,{src:0,hidden:1})}}const bt="/Svelte-Tailwind-LandingPage/assets/avatar-anisha-zop13RjP.png",yt="/Svelte-Tailwind-LandingPage/assets/avatar-ali-d4wwSRZl.png",kt="/Svelte-Tailwind-LandingPage/assets/avatar-richard-xw17kfbC.png";function Ct(n){let e;return{c(){e=p("span"),e.textContent="Anisha Li",o(e,"slot","name")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function Lt(n){let e;return{c(){e=p("span"),e.textContent="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",o(e,"slot","paragraph")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function Mt(n){let e;return{c(){e=p("span"),e.textContent="Ali Bravo",o(e,"slot","name")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function St(n){let e;return{c(){e=p("span"),e.textContent="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",o(e,"slot","paragraph")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function Bt(n){let e;return{c(){e=p("span"),e.textContent="Richard Watts",o(e,"slot","name")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function Rt(n){let e;return{c(){e=p("span"),e.textContent="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",o(e,"slot","paragraph")},m(t,r){w(t,e,r)},p:x,d(t){t&&v(e)}}}function Ft(n){let e;return{c(){e=W("Get Started")},m(t,r){w(t,e,r)},d(t){t&&v(e)}}}function Tt(n){let e,t,r,l,s,u,f,m,i,d,a,$,c,h;return u=new te({props:{src:bt,hidden:!0,$$slots:{paragraph:[Lt],name:[Ct]},$$scope:{ctx:n}}}),m=new te({props:{src:yt,$$slots:{paragraph:[St],name:[Mt]},$$scope:{ctx:n}}}),d=new te({props:{src:kt,hidden:!0,$$slots:{paragraph:[Rt],name:[Bt]},$$scope:{ctx:n}}}),c=new Y({props:{$$slots:{default:[Ft]},$$scope:{ctx:n}}}),{c(){e=p("section"),t=p("div"),r=p("h2"),r.textContent="What they've said",l=C(),s=p("div"),B(u.$$.fragment),f=C(),B(m.$$.fragment),i=C(),B(d.$$.fragment),a=C(),$=p("div"),B(c.$$.fragment),o(r,"class","text-center text-4xl font-bold"),o(s,"class","mt-24 flex flex-col md:flex-row md:space-x-6"),o($,"class","my-16"),o(t,"class","container mx-auto mt-32 flex max-w-6xl flex-col items-center px-5"),o(e,"id","testimonial")},m(_,b){w(_,e,b),g(e,t),g(t,r),g(t,l),g(t,s),M(u,s,null),g(s,f),M(m,s,null),g(s,i),M(d,s,null),g(t,a),g(t,$),M(c,$,null),h=!0},p(_,[b]){const L={};b&1&&(L.$$scope={dirty:b,ctx:_}),u.$set(L);const P={};b&1&&(P.$$scope={dirty:b,ctx:_}),m.$set(P);const A={};b&1&&(A.$$scope={dirty:b,ctx:_}),d.$set(A);const q={};b&1&&(q.$$scope={dirty:b,ctx:_}),c.$set(q)},i(_){h||(y(u.$$.fragment,_),y(m.$$.fragment,_),y(d.$$.fragment,_),y(c.$$.fragment,_),h=!0)},o(_){k(u.$$.fragment,_),k(m.$$.fragment,_),k(d.$$.fragment,_),k(c.$$.fragment,_),h=!1},d(_){_&&v(e),S(u),S(m),S(d),S(c)}}}class Pt extends T{constructor(e){super(),F(this,e,null,Tt,R,{})}}function At(n){let e;return{c(){e=W("Get Started")},m(t,r){w(t,e,r)},d(t){t&&v(e)}}}function jt(n){let e,t,r,l,s,u;return s=new Y({props:{bgColor:"bg-white",color:"brightRed",hover:"hover:bg-gray-800 text-brightRed",$$slots:{default:[At]},$$scope:{ctx:n}}}),{c(){e=p("section"),t=p("div"),r=p("h2"),r.textContent="Simplify how your team works today.",l=C(),B(s.$$.fragment),o(r,"class","text-center text-5xl font-bold leading-tight text-white md:max-w-lg md:text-4xl"),o(t,"class","container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0"),o(e,"id","cta"),o(e,"class","bg-brightRed")},m(f,m){w(f,e,m),g(e,t),g(t,r),g(t,l),M(s,t,null),u=!0},p(f,[m]){const i={};m&1&&(i.$$scope={dirty:m,ctx:f}),s.$set(i)},i(f){u||(y(s.$$.fragment,f),u=!0)},o(f){k(s.$$.fragment,f),u=!1},d(f){f&&v(e),S(s)}}}class Et extends T{constructor(e){super(),F(this,e,null,jt,R,{})}}function Gt(n){let e;return{c(){e=W("Go")},m(t,r){w(t,e,r)},d(t){t&&v(e)}}}function Ht(n){let e,t,r,l,s,u,f,m;return s=new Y({props:{$$slots:{default:[Gt]},$$scope:{ctx:n}}}),{c(){e=p("div"),t=p("div"),r=p("input"),l=C(),B(s.$$.fragment),u=C(),f=p("div"),f.textContent=`Copyright © ${new Date().getFullYear()}, All Rights Reserved`,o(r,"type","text"),o(r,"placeholder","Updates in your inbox..."),o(r,"class","rounded-full px-4 focus:outline-none md:h-10 md:px-2"),o(t,"class","flex justify-center space-x-3 md:flex-col md:items-center md:space-y-3 lg:flex-row lg:items-center lg:space-y-0"),o(f,"class","hidden text-center text-sm text-white md:block md:pt-6"),o(e,"class","md:w-1/3 lg:w-1/2")},m(i,d){w(i,e,d),g(e,t),g(t,r),g(t,l),M(s,t,null),g(e,u),g(e,f),m=!0},p(i,[d]){const a={};d&1&&(a.$$scope={dirty:d,ctx:i}),s.$set(a)},i(i){m||(y(s.$$.fragment,i),m=!0)},o(i){k(s.$$.fragment,i),m=!1},d(i){i&&v(e),S(s)}}}class It extends T{constructor(e){super(),F(this,e,null,Ht,R,{})}}function zt(n){let e;return{c(){e=p("div"),e.innerHTML='<div class="flex flex-col space-y-3 text-white"><a href="#" class="hover:text-brightRed">Home</a> <a href="#" class="hover:text-brightRed">Pricing</a> <a href="#" class="hover:text-brightRed">Products</a> <a href="#" class="hover:text-brightRed">About</a></div> <div class="flex flex-col space-y-3 text-white"><a href="#" class="hover:text-brightRed">Careers</a> <a href="#" class="hover:text-brightRed">Community</a> <a href="#" class="hover:text-brightRed">Privacy Policy</a></div>',o(e,"class","flex justify-around md:w-1/3")},m(t,r){w(t,e,r)},p:x,i:x,o:x,d(t){t&&v(e)}}}class Ot extends T{constructor(e){super(),F(this,e,null,zt,R,{})}}const Nt="/Svelte-Tailwind-LandingPage/assets/logo-white-DqtZteWH.svg";function Vt(n){let e,t;return{c(){e=j("svg"),t=j("path"),o(t,"fill","#FFF"),o(t,"d","M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"),o(t,"class","svelte-1uuo9k6"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","h-12 md:h-8 svelte-1uuo9k6"),o(e,"viewBox","0 0 20 30")},m(r,l){w(r,e,l),g(e,t)},p:x,i:x,o:x,d(r){r&&v(e)}}}class Wt extends T{constructor(e){super(),F(this,e,null,Vt,R,{})}}function qt(n){let e,t;return{c(){e=j("svg"),t=j("path"),o(t,"fill","#FFF"),o(t,"d","M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"),o(t,"class","svelte-1uuo9k6"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","h-12 md:h-8 svelte-1uuo9k6"),o(e,"viewBox","0 0 20 30")},m(r,l){w(r,e,l),g(e,t)},p:x,i:x,o:x,d(r){r&&v(e)}}}class Dt extends T{constructor(e){super(),F(this,e,null,qt,R,{})}}function Ut(n){let e,t;return{c(){e=j("svg"),t=j("path"),o(t,"fill","#FFF"),o(t,"d","M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"),o(t,"class","svelte-1uuo9k6"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","h-12 md:h-8 svelte-1uuo9k6"),o(e,"viewBox","0 0 20 30")},m(r,l){w(r,e,l),g(e,t)},p:x,i:x,o:x,d(r){r&&v(e)}}}class Yt extends T{constructor(e){super(),F(this,e,null,Ut,R,{})}}function Zt(n){let e,t;return{c(){e=j("svg"),t=j("path"),o(t,"fill","#FFF"),o(t,"d","M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"),o(t,"class","svelte-1uuo9k6"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","h-12 md:h-8 svelte-1uuo9k6"),o(e,"viewBox","0 0 20 30")},m(r,l){w(r,e,l),g(e,t)},p:x,i:x,o:x,d(r){r&&v(e)}}}class Kt extends T{constructor(e){super(),F(this,e,null,Zt,R,{})}}function Qt(n){let e,t;return{c(){e=j("svg"),t=j("path"),o(t,"fill","#FFF"),o(t,"d","M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"),o(t,"class","svelte-1uuo9k6"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"class","h-12 md:h-8 svelte-1uuo9k6"),o(e,"viewBox","0 0 20 30")},m(r,l){w(r,e,l),g(e,t)},p:x,i:x,o:x,d(r){r&&v(e)}}}class Xt extends T{constructor(e){super(),F(this,e,null,Qt,R,{})}}function Jt(n,e,t){const r=n.slice();return r[1]=e[t],r}function en(n,e){let t,r,l,s;return r=new e[1]({}),{key:n,first:null,c(){t=p("a"),B(r.$$.fragment),l=C(),o(t,"href","#"),this.first=t},m(u,f){w(u,t,f),M(r,t,null),g(t,l),s=!0},p:x,i(u){s||(y(r.$$.fragment,u),s=!0)},o(u){k(r.$$.fragment,u),s=!1},d(u){u&&v(t),S(r)}}}function tn(n){let e,t,r,l,s=[],u=new Map,f,m=Te(n[0]);const i=d=>d[1];for(let d=0;d<m.length;d+=1){let a=Jt(n,m,d),$=i(a);u.set($,s[d]=en($,a))}return{c(){e=p("div"),t=p("div"),t.innerHTML=`<img src="${Nt}" alt="" class="bg-gre h-8 md:h-6"/>`,r=C(),l=p("div");for(let d=0;d<s.length;d+=1)s[d].c();o(l,"class","flex space-x-8 md:space-x-5"),o(e,"class","flex flex-col-reverse items-center justify-between space-y-12 space-y-reverse md:w-1/3 md:flex-col")},m(d,a){w(d,e,a),g(e,t),g(e,r),g(e,l);for(let $=0;$<s.length;$+=1)s[$]&&s[$].m(l,null);f=!0},p:x,i(d){if(!f){for(let a=0;a<m.length;a+=1)y(s[a]);f=!0}},o(d){for(let a=0;a<s.length;a+=1)k(s[a]);f=!1},d(d){d&&v(e);for(let a=0;a<s.length;a+=1)s[a].d()}}}function nn(n){return[[Wt,Dt,Yt,Kt,Xt]]}class rn extends T{constructor(e){super(),F(this,e,nn,tn,R,{})}}function sn(n){let e,t,r,l,s,u,f,m,i,d;return r=new rn({}),s=new Ot({}),f=new It({}),{c(){e=p("footer"),t=p("div"),B(r.$$.fragment),l=C(),B(s.$$.fragment),u=C(),B(f.$$.fragment),m=C(),i=p("div"),i.textContent=`Copyright © ${new Date().getFullYear()}, All Rights Reserved`,o(t,"class","container mx-auto flex flex-col-reverse justify-center space-y-8 space-y-reverse px-6 py-10 md:flex-row md:justify-between md:space-y-0 md:px-2"),o(i,"class","pb-4 text-center text-white md:hidden"),o(e,"class","bg-veryDarkBlue")},m(a,$){w(a,e,$),g(e,t),M(r,t,null),g(t,l),M(s,t,null),g(t,u),M(f,t,null),g(e,m),g(e,i),d=!0},p:x,i(a){d||(y(r.$$.fragment,a),y(s.$$.fragment,a),y(f.$$.fragment,a),d=!0)},o(a){k(r.$$.fragment,a),k(s.$$.fragment,a),k(f.$$.fragment,a),d=!1},d(a){a&&v(e),S(r),S(s),S(f)}}}class ln extends T{constructor(e){super(),F(this,e,null,sn,R,{})}}function on(n){let e,t,r,l,s,u,f,m,i,d,a,$;return e=new Qe({}),r=new tt({}),s=new $t({}),f=new Pt({}),i=new Et({}),a=new ln({}),{c(){B(e.$$.fragment),t=C(),B(r.$$.fragment),l=C(),B(s.$$.fragment),u=C(),B(f.$$.fragment),m=C(),B(i.$$.fragment),d=C(),B(a.$$.fragment)},m(c,h){M(e,c,h),w(c,t,h),M(r,c,h),w(c,l,h),M(s,c,h),w(c,u,h),M(f,c,h),w(c,m,h),M(i,c,h),w(c,d,h),M(a,c,h),$=!0},p:x,i(c){$||(y(e.$$.fragment,c),y(r.$$.fragment,c),y(s.$$.fragment,c),y(f.$$.fragment,c),y(i.$$.fragment,c),y(a.$$.fragment,c),$=!0)},o(c){k(e.$$.fragment,c),k(r.$$.fragment,c),k(s.$$.fragment,c),k(f.$$.fragment,c),k(i.$$.fragment,c),k(a.$$.fragment,c),$=!1},d(c){c&&(v(t),v(l),v(u),v(m),v(d)),S(e,c),S(r,c),S(s,c),S(f,c),S(i,c),S(a,c)}}}class an extends T{constructor(e){super(),F(this,e,null,on,R,{})}}new an({target:document.getElementById("app")});
