var V=Object.defineProperty;var K=(t,e,n)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>K(t,typeof e!="symbol"?e+"":e,n);import{n as w,p as Q,h as F,q as T,r as v,v as z,w as k,x as W,y as M,z as B,f as X,A as Y,B as Z,C as tt,D as et,E as D,F as nt,G as it,H as st,I as rt,J as at}from"./scheduler.355Muk5a.js";const N=typeof window<"u";let q=N?()=>window.performance.now():()=>Date.now(),R=N?t=>requestAnimationFrame(t):w;const p=new Set;function G(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&R(G)}function H(t){let e;return p.size===0&&R(G),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const C=new Map;let O=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:T(e),rules:{}};return C.set(t,n),n}function J(t,e,n,i,r,a,u,l=0){const d=16.666/i;let s=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*a(g);s+=g*100+`%{${u(m,1-m)}}
`}const f=s+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,_=Q(t),{stylesheet:c,rules:$}=C.get(_)||ft(_,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${i}ms linear ${r}ms 1 both`,O+=1,o}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||ut())}function ut(){R(()=>{O||(C.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),C.clear())})}let x;function L(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function b(t,e,n){t.dispatchEvent(W(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const U={duration:0};function wt(t,e,n){const i={direction:"in"};let r=e(t,n,i),a=!1,u,l,d=0;function s(){u&&P(t,u)}function f(){const{delay:_=0,duration:c=300,easing:$=M,tick:h=w,css:g}=r||U;g&&(u=J(t,0,1,c,_,$,g,d++)),h(0,1);const m=q()+_,E=m+c;l&&l.abort(),a=!0,k(()=>b(t,!0,"start")),l=H(A=>{if(a){if(A>=E)return h(1,0),b(t,!0,"end"),s(),a=!1;if(A>=m){const j=$((A-m)/c);h(j,1-j)}}return a})}let o=!1;return{start(){o||(o=!0,P(t),z(r)?(r=r(i),L().then(f)):f())},invalidate(){o=!1},end(){a&&(s(),a=!1)}}}function xt(t,e,n){const i={direction:"out"};let r=e(t,n,i),a=!0,u;const l=y;l.r+=1;let d;function s(){const{delay:f=0,duration:o=300,easing:_=M,tick:c=w,css:$}=r||U;$&&(u=J(t,1,0,o,f,_,$));const h=q()+f,g=h+o;k(()=>b(t,!1,"start")),"inert"in t&&(d=t.inert,t.inert=!0),H(m=>{if(a){if(m>=g)return c(0,1),b(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const E=_((m-h)/o);c(1-E,E)}}return a})}return z(r)?L().then(()=>{r=r(i),s()}):s(),{end(f){f&&"inert"in t&&(t.inert=d),f&&r.tick&&r.tick(1,0),a&&(u&&P(t,u),a=!1)}}}function vt(t){t&&t.c()}function Et(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),k(()=>{const a=t.$$.on_mount.map(nt).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...a):v(a),t.$$.on_mount=[]}),r.forEach(k)}function dt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(it.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(t,e,n,i,r,a,u=null,l=[-1]){const d=et;D(t);const s=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:B(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(o,_,...c)=>{const $=c.length?c[0]:_;return s.ctx&&r(s.ctx[o],s.ctx[o]=$)&&(!s.skip_bound&&s.bound[o]&&s.bound[o]($),f&&_t(t,o)),_}):[],s.update(),f=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){rt();const o=X(e.target);s.fragment&&s.fragment.l(o),o.forEach(F)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),at(),Y()}D(d)}class kt{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){dt(this,1),this.$destroy=w}$on(e,n){if(!z(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{kt as S,pt as a,Et as b,vt as c,yt as d,dt as e,wt as f,gt as g,xt as h,St as i,lt as m,ct as t};
//# sourceMappingURL=index.Npz84Iwx.js.map