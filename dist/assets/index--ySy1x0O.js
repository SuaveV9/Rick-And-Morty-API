var me=Object.defineProperty;var _e=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>(_e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function T(){}function oe(e){return e()}function ee(){return Object.create(null)}function k(e){e.forEach(oe)}function ie(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function te(e,t){return e===t?!0:(V||(V=document.createElement("a")),V.href=t,e===V.href)}function $e(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function ae(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function N(){return b(" ")}function z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){return Array.from(e.childNodes)}function F(e,t){t=""+t,e.data!==t&&(e.data=t)}let Z;function G(e){Z=e}const q=[],ne=[];let M=[];const re=[],ye=Promise.resolve();let Q=!1;function we(){Q||(Q=!0,ye.then(fe))}function W(e){M.push(e)}const J=new Set;let I=0;function fe(){if(I!==0)return;const e=Z;do{try{for(;I<q.length;){const t=q[I];I++,G(t),Ee(t.$$)}}catch(t){throw q.length=0,I=0,t}for(G(null),q.length=0,I=0;ne.length;)ne.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];J.has(n)||(J.add(n),n())}M.length=0}while(q.length);for(;re.length;)re.pop()();Q=!1,J.clear(),G(e)}function Ee(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function Oe(e){const t=[],n=[];M.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),M=t}const D=new Set;let j;function Ce(){j={r:0,c:[],p:j}}function Ne(){j.r||k(j.c),j=j.p}function K(e,t){e&&e.i&&(D.delete(e),e.i(t))}function X(e,t,n,r){if(e&&e.o){if(D.has(e))return;D.add(e),j.c.push(()=>{D.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Pe(e){e&&e.c()}function de(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),W(()=>{const c=e.$$.on_mount.map(oe).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...c):k(c),e.$$.on_mount=[]}),l.forEach(W)}function he(e,t){const n=e.$$;n.fragment!==null&&(Oe(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(q.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,n,r,l,c,f=null,E=[-1]){const _=Z;G(e);const a=e.$$={fragment:null,ctx:[],props:c,update:T,not_equal:l,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:ee(),dirty:E,skip_bound:!1,root:t.target||_.$$.root};f&&f(a.root);let v=!1;if(a.ctx=n?n(e,t.props||{},(g,$,...L)=>{const m=L.length?L[0]:$;return a.ctx&&l(a.ctx[g],a.ctx[g]=m)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](m),v&&Le(e,g)),$}):[],a.update(),v=!0,k(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const g=ve(t.target);a.fragment&&a.fragment.l(g),g.forEach(Y)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),de(e,t.target,t.anchor),fe()}G(_)}class ge{constructor(){H(this,"$$");H(this,"$$set")}$destroy(){he(this,1),this.$destroy=T}$on(t,n){if(!ie(n))return T;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Se);function xe(e){let t,n,r,l,c,f=e[0].name+"",E,_,a,v,g=e[0].gender+"",$,L,m,O,A=e[0].location.name+"",S,R,y,P,x=e[0].status+"",B,C,i,U,u=e[0].species+"",d;return{c(){t=p("div"),n=p("img"),l=N(),c=p("h2"),E=b(f),_=N(),a=p("h3"),v=b("Gender: "),$=b(g),L=N(),m=p("p"),O=b("Location: "),S=b(A),R=N(),y=p("p"),P=b("Status: "),B=b(x),C=N(),i=p("p"),U=b("Specie: "),d=b(u),te(n.src,r=e[0].image)||h(n,"src",r),h(n,"alt","character"),h(c,"class","name-character"),h(a,"class","info"),h(m,"class","info"),h(y,"class","info"),h(i,"class","info"),h(t,"class","character")},m(o,w){ae(o,t,w),s(t,n),s(t,l),s(t,c),s(c,E),s(t,_),s(t,a),s(a,v),s(a,$),s(t,L),s(t,m),s(m,O),s(m,S),s(t,R),s(t,y),s(y,P),s(y,B),s(t,C),s(t,i),s(i,U),s(i,d)},p(o,[w]){w&1&&!te(n.src,r=o[0].image)&&h(n,"src",r),w&1&&f!==(f=o[0].name+"")&&F(E,f),w&1&&g!==(g=o[0].gender+"")&&F($,g),w&1&&A!==(A=o[0].location.name+"")&&F(S,A),w&1&&x!==(x=o[0].status+"")&&F(B,x),w&1&&u!==(u=o[0].species+"")&&F(d,u)},i:T,o:T,d(o){o&&Y(t)}}}function Ae(e,t,n){let{character:r}=t;return e.$$set=l=>{"character"in l&&n(0,r=l.character)},[r]}class je extends ge{constructor(t){super(),pe(this,t,Ae,xe,ue,{character:0})}}function ce(e,t,n){const r=e.slice();return r[5]=t[n],r}function se(e){let t,n;return t=new je({props:{character:e[5]}}),{c(){Pe(t.$$.fragment)},m(r,l){de(t,r,l),n=!0},p(r,l){const c={};l&1&&(c.character=r[5]),t.$set(c)},i(r){n||(K(t.$$.fragment,r),n=!0)},o(r){X(t.$$.fragment,r),n=!1},d(r){he(t,r)}}}function Be(e){let t,n,r,l,c,f,E,_,a,v,g,$,L,m,O,A,S,R,y,P,x,B,C=le(e[0]),i=[];for(let u=0;u<C.length;u+=1)i[u]=se(ce(e,C,u));const U=u=>X(i[u],1,1,()=>{i[u]=null});return{c(){t=p("main"),n=p("h1"),n.textContent="Rick and Morty Characters",r=N(),l=p("div"),c=p("div"),f=p("button"),E=b("Previous"),a=N(),v=p("button"),v.textContent="Next",g=N(),$=p("div");for(let u=0;u<i.length;u+=1)i[u].c();L=N(),m=p("div"),O=p("button"),A=b("Previous"),R=N(),y=p("button"),y.textContent="Next",h(n,"class","title"),h(f,"class","btn"),f.disabled=_=e[1]===1,h(v,"class","btn"),h(c,"class","btns"),h($,"class","grid"),h(O,"class","btn-2"),O.disabled=S=e[1]===1,h(y,"class","btn-2"),h(m,"class","btns"),h(l,"class","container")},m(u,d){ae(u,t,d),s(t,n),s(t,r),s(t,l),s(l,c),s(c,f),s(f,E),s(c,a),s(c,v),s(l,g),s(l,$);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m($,null);s(l,L),s(l,m),s(m,O),s(O,A),s(m,R),s(m,y),P=!0,x||(B=[z(f,"click",e[2]),z(v,"click",e[3]),z(O,"click",e[2]),z(y,"click",e[3])],x=!0)},p(u,[d]){if((!P||d&2&&_!==(_=u[1]===1))&&(f.disabled=_),d&1){C=le(u[0]);let o;for(o=0;o<C.length;o+=1){const w=ce(u,C,o);i[o]?(i[o].p(w,d),K(i[o],1)):(i[o]=se(w),i[o].c(),K(i[o],1),i[o].m($,null))}for(Ce(),o=C.length;o<i.length;o+=1)U(o);Ne()}(!P||d&2&&S!==(S=u[1]===1))&&(O.disabled=S)},i(u){if(!P){for(let d=0;d<C.length;d+=1)K(i[d]);P=!0}},o(u){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)X(i[d]);P=!1},d(u){u&&Y(t),be(i,u),x=!1,k(B)}}}function Ie(e,t,n){let r=[],l=1;async function c(){const a=await(await fetch("https://rickandmortyapi.com/api/character?page="+l)).json();console.log(c),n(0,r=a.results)}c();function f(){n(1,l--,l),c()}function E(){n(1,l++,l),c()}return[r,l,f,E]}class qe extends ge{constructor(t){super(),pe(this,t,Ie,Be,ue,{})}}new qe({target:document.getElementById("app")});