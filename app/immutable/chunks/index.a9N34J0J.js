var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,h as w,i as B,j as S,k as I,l as b,m as q,p as L,q as N,v as P,w as T,x as D}from"./scheduler.D3hV8Tfu.js";let p=!1;function H(){p=!0}function M(){p=!1}function O(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:O(1,l,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,l=Math.max(f,l)}const u=[],a=[];let c=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);c>=r;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);u.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<u.length&&a[r].claim_order>=u[s].claim_order;)s++;const o=s<u.length?u[s]:null;e.insertBefore(a[r],o)}}function F(e,t){if(p){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){p&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function V(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return e.dataset.svelteH}function W(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,l=!1){G(e);const u=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function A(e,t,n,i){return E(e,l=>l.nodeName===t,l=>{const u=[];for(let a=0;a<l.attributes.length;a++){const c=l.attributes[a];n[c.name]||u.push(c.name)}u.forEach(a=>l.removeAttribute(a))},()=>i(t))}function ce(e,t,n){return A(e,t,n,U)}function ue(e,t,n){return A(e,t,n,V)}function J(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function fe(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t){e.value=t??""}function de(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function me(e,t,n){for(let i=0;i<e.options.length;i+=1){const l=e.options[i];if(l.__value===t){l.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function he(e){const t=e.querySelector(":checked");return t&&t.__value}function pe(e,t){return new e(t)}const m=new Set;let _;function $e(){_={r:0,c:[],p:_}}function ye(){_.r||h(_.c),_=_.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function xe(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ge(e){e&&e.c()}function ve(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),b(()=>{const u=e.$$.on_mount.map(P).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),l.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(q(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(T.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,l,u,a=null,c=[-1]){const r=L;N(e);const s=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:l,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(f,d,...g)=>{const v=g.length?g[0]:d;return s.ctx&&l(s.ctx[f],s.ctx[f]=v)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](v),o&&Y(e,f)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){H();const f=W(t.target);s.fragment&&s.fragment.l(f),f.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),M(),B()}N(r)}class be{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{X as A,V as B,ue as C,ne as D,me as E,he as F,be as S,W as a,J as b,ce as c,R as d,U as e,fe as f,te as g,F as h,we as i,oe as j,ae as k,se as l,_e as m,le as n,re as o,xe as p,ye as q,K as r,ie as s,x as t,de as u,$e as v,pe as w,ge as x,ve as y,Q as z};
