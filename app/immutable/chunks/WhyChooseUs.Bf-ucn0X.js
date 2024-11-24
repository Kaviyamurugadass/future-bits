import{s as T,d as F,u as L,g as G,e as Q,f as B,n as V}from"./scheduler.D3hV8Tfu.js";import{S as H,i as q,e as v,s as C,c as x,a as b,f as y,d as h,l as d,g as p,h as m,r as M,p as z,t as U,b as J,j as K,x as N,y as j,z as D,A as S,k}from"./index.a9N34J0J.js";import{b as R}from"./paths.DyO8qjfN.js";function O(n){let e,t,a=n[0]&&W(n),s=n[1]&&P(n);return{c(){e=v("div"),a&&a.c(),t=C(),s&&s.c(),this.h()},l(l){e=x(l,"DIV",{class:!0});var i=b(e);a&&a.l(i),t=y(i),s&&s.l(i),i.forEach(h),this.h()},h(){d(e,"class","text-center mb-12")},m(l,i){p(l,e,i),a&&a.m(e,null),m(e,t),s&&s.m(e,null)},p(l,i){l[0]?a?a.p(l,i):(a=W(l),a.c(),a.m(e,t)):a&&(a.d(1),a=null),l[1]?s?s.p(l,i):(s=P(l),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(l){l&&h(e),a&&a.d(),s&&s.d()}}}function W(n){let e,t,a;return{c(){e=v("h2"),t=U(n[0]),this.h()},l(s){e=x(s,"H2",{class:!0});var l=b(e);t=J(l,n[0]),l.forEach(h),this.h()},h(){d(e,"class",a="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl "+n[4])},m(s,l){p(s,e,l),m(e,t)},p(s,l){l&1&&K(t,s[0]),l&16&&a!==(a="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl "+s[4])&&d(e,"class",a)},d(s){s&&h(e)}}}function P(n){let e,t,a;return{c(){e=v("p"),t=U(n[1]),this.h()},l(s){e=x(s,"P",{class:!0});var l=b(e);t=J(l,n[1]),l.forEach(h),this.h()},h(){d(e,"class",a="mt-4 text-xl text-gray-600 max-w-2xl mx-auto "+n[5])},m(s,l){p(s,e,l),m(e,t)},p(s,l){l&2&&K(t,s[1]),l&32&&a!==(a="mt-4 text-xl text-gray-600 max-w-2xl mx-auto "+s[5])&&d(e,"class",a)},d(s){s&&h(e)}}}function Y(n){let e,t,a,s,l,i=(n[0]||n[1])&&O(n);const c=n[7].default,u=F(c,n,n[6],null);return{c(){e=v("section"),t=v("div"),i&&i.c(),a=C(),u&&u.c(),this.h()},l(o){e=x(o,"SECTION",{class:!0});var f=b(e);t=x(f,"DIV",{class:!0});var r=b(t);i&&i.l(r),a=y(r),u&&u.l(r),r.forEach(h),f.forEach(h),this.h()},h(){d(t,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),d(e,"class",s="py-16 "+n[2]+" "+n[3])},m(o,f){p(o,e,f),m(e,t),i&&i.m(t,null),m(t,a),u&&u.m(t,null),l=!0},p(o,[f]){o[0]||o[1]?i?i.p(o,f):(i=O(o),i.c(),i.m(t,a)):i&&(i.d(1),i=null),u&&u.p&&(!l||f&64)&&L(u,c,o,o[6],l?Q(c,o[6],f,null):G(o[6]),null),(!l||f&12&&s!==(s="py-16 "+o[2]+" "+o[3]))&&d(e,"class",s)},i(o){l||(M(u,o),l=!0)},o(o){z(u,o),l=!1},d(o){o&&h(e),i&&i.d(),u&&u.d(o)}}}function Z(n,e,t){let{$$slots:a={},$$scope:s}=e,{title:l=""}=e,{subtitle:i=""}=e,{bgColor:c="bg-white"}=e,{className:u=""}=e,{titleClass:o=""}=e,{subtitleClass:f=""}=e;return n.$$set=r=>{"title"in r&&t(0,l=r.title),"subtitle"in r&&t(1,i=r.subtitle),"bgColor"in r&&t(2,c=r.bgColor),"className"in r&&t(3,u=r.className),"titleClass"in r&&t(4,o=r.titleClass),"subtitleClass"in r&&t(5,f=r.subtitleClass),"$$scope"in r&&t(6,s=r.$$scope)},[l,i,c,u,o,f,s,a]}class $ extends H{constructor(e){super(),q(this,e,Z,Y,T,{title:0,subtitle:1,bgColor:2,className:3,titleClass:4,subtitleClass:5})}}function ee(n){let e,t;const a=n[5].default,s=F(a,n,n[4],null);return{c(){e=v("div"),s&&s.c(),this.h()},l(l){e=x(l,"DIV",{class:!0});var i=b(e);s&&s.l(i),i.forEach(h),this.h()},h(){d(e,"class",n[0])},m(l,i){p(l,e,i),s&&s.m(e,null),t=!0},p(l,[i]){s&&s.p&&(!t||i&16)&&L(s,a,l,l[4],t?Q(a,l[4],i,null):G(l[4]),null),(!t||i&1)&&d(e,"class",l[0])},i(l){t||(M(s,l),t=!0)},o(l){z(s,l),t=!1},d(l){l&&h(e),s&&s.d(l)}}}const te="bg-white overflow-hidden rounded-lg";function se(n,e,t){let a,{$$slots:s={},$$scope:l}=e,{variant:i="default"}=e,{hover:c=!0}=e,{className:u=""}=e;const o={default:"shadow",elevated:"shadow-lg"},f=c?"hover:shadow-xl transition-shadow duration-300":"";return n.$$set=r=>{"variant"in r&&t(1,i=r.variant),"hover"in r&&t(2,c=r.hover),"className"in r&&t(3,u=r.className),"$$scope"in r&&t(4,l=r.$$scope)},n.$$.update=()=>{n.$$.dirty&10&&t(0,a=`${te} ${o[i]} ${f} ${u}`)},[a,i,c,u,l,s]}class A extends H{constructor(e){super(),q(this,e,se,ee,T,{variant:1,hover:2,className:3})}}function le(n){let e,t,a,s,l;return{c(){e=v("div"),t=v("img"),this.h()},l(i){e=x(i,"DIV",{class:!0});var c=b(e);t=x(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(h),this.h()},h(){B(t.src,a=n[0])||d(t,"src",a),d(t,"alt",n[1]),d(t,"class",s=n[3]+" object-contain"),d(e,"class",l="[&>img]:fill-current [&>img]:text-themeColor-900 "+n[2])},m(i,c){p(i,e,c),m(e,t)},p(i,[c]){c&1&&!B(t.src,a=i[0])&&d(t,"src",a),c&2&&d(t,"alt",i[1]),c&8&&s!==(s=i[3]+" object-contain")&&d(t,"class",s),c&4&&l!==(l="[&>img]:fill-current [&>img]:text-themeColor-900 "+i[2])&&d(e,"class",l)},i:V,o:V,d(i){i&&h(e)}}}function ae(n,e,t){let a,{src:s}=e,{alt:l=""}=e,{size:i="md"}=e,{className:c=""}=e;const u={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16",xl:"w-24 h-24","2xl":"w-48 h-48"};return n.$$set=o=>{"src"in o&&t(0,s=o.src),"alt"in o&&t(1,l=o.alt),"size"in o&&t(4,i=o.size),"className"in o&&t(2,c=o.className)},n.$$.update=()=>{n.$$.dirty&16&&t(3,a=u[i]||i)},[s,l,c,a,i]}class X extends H{constructor(e){super(),q(this,e,ae,le,T,{src:0,alt:1,size:4,className:2})}}function ie(n){let e,t,a,s,l,i="Our Vision",c,u,o="Shaping Tomorrow's Technology",f,r,I="To revolutionize industries through cutting-edge technology and sustainable innovation, empowering businesses and individuals to thrive in a connected and dynamic world.",w;return a=new X({props:{src:R+"/images/Inventing.svg",alt:"Vision illustration",size:"2xl"}}),{c(){e=v("div"),t=v("div"),N(a.$$.fragment),s=C(),l=v("h3"),l.textContent=i,c=C(),u=v("p"),u.textContent=o,f=C(),r=v("p"),r.textContent=I,this.h()},l(_){e=x(_,"DIV",{class:!0});var g=b(e);t=x(g,"DIV",{class:!0});var E=b(t);j(a.$$.fragment,E),E.forEach(h),s=y(g),l=x(g,"H3",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-wefnz6"&&(l.textContent=i),c=y(g),u=x(g,"P",{class:!0,"data-svelte-h":!0}),k(u)!=="svelte-1lgvdhd"&&(u.textContent=o),f=y(g),r=x(g,"P",{class:!0,"data-svelte-h":!0}),k(r)!=="svelte-llvcs"&&(r.textContent=I),g.forEach(h),this.h()},h(){d(t,"class","flex justify-center mb-6"),d(l,"class","text-2xl font-bold text-gray-900 text-center"),d(u,"class","mt-2 text-themeColor-800 font-medium text-center"),d(r,"class","mt-4 text-lg text-gray-600"),d(e,"class","px-6 py-8")},m(_,g){p(_,e,g),m(e,t),D(a,t,null),m(e,s),m(e,l),m(e,c),m(e,u),m(e,f),m(e,r),w=!0},p:V,i(_){w||(M(a.$$.fragment,_),w=!0)},o(_){z(a.$$.fragment,_),w=!1},d(_){_&&h(e),S(a)}}}function ne(n){let e,t,a,s,l,i="Our Mission",c,u,o="Delivering Excellence Through Innovation",f,r,I="Our mission is to deliver transformative digital solutions by leveraging advanced technologies, fostering creativity, and building partnerships. We strive to create scalable, user-centric products that solve real-world challenges and drive progress for our clients and communities.",w;return a=new X({props:{src:R+"/images/Business Presentation.svg",alt:"Mission illustration",size:"2xl"}}),{c(){e=v("div"),t=v("div"),N(a.$$.fragment),s=C(),l=v("h3"),l.textContent=i,c=C(),u=v("p"),u.textContent=o,f=C(),r=v("p"),r.textContent=I,this.h()},l(_){e=x(_,"DIV",{class:!0});var g=b(e);t=x(g,"DIV",{class:!0});var E=b(t);j(a.$$.fragment,E),E.forEach(h),s=y(g),l=x(g,"H3",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1r2sxf6"&&(l.textContent=i),c=y(g),u=x(g,"P",{class:!0,"data-svelte-h":!0}),k(u)!=="svelte-yywavt"&&(u.textContent=o),f=y(g),r=x(g,"P",{class:!0,"data-svelte-h":!0}),k(r)!=="svelte-1vp57c"&&(r.textContent=I),g.forEach(h),this.h()},h(){d(t,"class","flex justify-center mb-6"),d(l,"class","text-2xl font-bold text-gray-900 text-center"),d(u,"class","mt-2 text-themeColor-800 font-medium text-center"),d(r,"class","mt-4 text-lg text-gray-600"),d(e,"class","px-6 py-8")},m(_,g){p(_,e,g),m(e,t),D(a,t,null),m(e,s),m(e,l),m(e,c),m(e,u),m(e,f),m(e,r),w=!0},p:V,i(_){w||(M(a.$$.fragment,_),w=!0)},o(_){z(a.$$.fragment,_),w=!1},d(_){_&&h(e),S(a)}}}function oe(n){let e,t,a,s,l;return t=new A({props:{$$slots:{default:[ie]},$$scope:{ctx:n}}}),s=new A({props:{$$slots:{default:[ne]},$$scope:{ctx:n}}}),{c(){e=v("div"),N(t.$$.fragment),a=C(),N(s.$$.fragment),this.h()},l(i){e=x(i,"DIV",{class:!0});var c=b(e);j(t.$$.fragment,c),a=y(c),j(s.$$.fragment,c),c.forEach(h),this.h()},h(){d(e,"class","grid grid-cols-1 gap-8 lg:grid-cols-2")},m(i,c){p(i,e,c),D(t,e,null),m(e,a),D(s,e,null),l=!0},p(i,c){const u={};c&2&&(u.$$scope={dirty:c,ctx:i}),t.$set(u);const o={};c&2&&(o.$$scope={dirty:c,ctx:i}),s.$set(o)},i(i){l||(M(t.$$.fragment,i),M(s.$$.fragment,i),l=!0)},o(i){z(t.$$.fragment,i),z(s.$$.fragment,i),l=!1},d(i){i&&h(e),S(t),S(s)}}}function re(n){let e,t;return e=new $({props:{title:"Vision & Mission",subtitle:"Guiding principles that drive our innovation and shape our commitment to excellence in technology",bgColor:n[0],$$slots:{default:[oe]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,s){D(e,a,s),t=!0},p(a,[s]){const l={};s&1&&(l.bgColor=a[0]),s&2&&(l.$$scope={dirty:s,ctx:a}),e.$set(l)},i(a){t||(M(e.$$.fragment,a),t=!0)},o(a){z(e.$$.fragment,a),t=!1},d(a){S(e,a)}}}function ce(n,e,t){let{bgColor:a="bg-gray-50"}=e;return n.$$set=s=>{"bgColor"in s&&t(0,a=s.bgColor)},[a]}class ge extends H{constructor(e){super(),q(this,e,ce,re,T,{bgColor:0})}}function ue(n){let e,t,a='<div class="text-center"><h2 class="text-base text-themeColor-900 font-semibold tracking-wide uppercase">Why Choose Us</h2> <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Building the Future of Technology</p> <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">We combine innovation with expertise to deliver cutting-edge solutions for our clients.</p></div> <div class="mt-12"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><div class="text-themeColor-900 mb-4"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-xl font-semibold mb-2">Quality First</h3> <p class="text-gray-600">We prioritize quality in every project, ensuring robust and reliable solutions that exceed expectations.</p></div> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><div class="text-themeColor-900 mb-4"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div> <h3 class="text-xl font-semibold mb-2">Innovative Solutions</h3> <p class="text-gray-600">Our creative approach to problem-solving delivers unique and effective solutions for your business needs.</p></div> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><div class="text-themeColor-900 mb-4"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 class="text-xl font-semibold mb-2">Fast Delivery</h3> <p class="text-gray-600">Quick turnaround times without compromising on quality, keeping your projects on schedule.</p></div> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><div class="text-themeColor-900 mb-4"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div> <h3 class="text-xl font-semibold mb-2">Cutting-edge Technology</h3> <p class="text-gray-600">We leverage the latest technologies and frameworks to deliver modern, scalable, and efficient solutions.</p></div> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><div class="text-themeColor-900 mb-4"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div> <h3 class="text-xl font-semibold mb-2">24/7 Support</h3> <p class="text-gray-600">Our dedicated support team is always available to assist you, ensuring your operations run smoothly.</p></div> <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><div class="text-themeColor-900 mb-4"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg></div> <h3 class="text-xl font-semibold mb-2">Custom Solutions</h3> <p class="text-gray-600">Tailored solutions designed specifically for your unique business requirements and challenges.</p></div></div></div>',s;return{c(){e=v("section"),t=v("div"),t.innerHTML=a,this.h()},l(l){e=x(l,"SECTION",{class:!0});var i=b(e);t=x(i,"DIV",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-1cqgf69"&&(t.innerHTML=a),i.forEach(h),this.h()},h(){d(t,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),d(e,"class",s=n[0]+" py-16")},m(l,i){p(l,e,i),m(e,t)},p(l,[i]){i&1&&s!==(s=l[0]+" py-16")&&d(e,"class",s)},i:V,o:V,d(l){l&&h(e)}}}function de(n,e,t){let{bgColor:a="bg-gray-50"}=e;return n.$$set=s=>{"bgColor"in s&&t(0,a=s.bgColor)},[a]}class ve extends H{constructor(e){super(),q(this,e,de,ue,T,{bgColor:0})}}export{ge as V,ve as W};
