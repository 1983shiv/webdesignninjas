import{_ as t,a as s,b as r,c as a,i as e,d as n,S as o,s as l,g as f,r as c,e as i,D as m,k as u,l as p,u as d,h as g,j as x,n as $,o as v,v as h,p as y,A as w,w as b,x as D,y as E}from"./client.a19cde40.js";import"./defineProperty.b786bad4.js";import{b as j}from"./Tags.2f9b631c.js";import{B as R,P as A,S as I}from"./Bloghero.e240d1b8.js";function S(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=s(t);if(a){var o=s(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return r(this,e)}}function L(t){var s,r,a,e,n,o,l,j,S,L,P,V;return document.title=s="Latest Articles for "+t[0],a=new R({props:{title1:"Latest Articles for ",title2:t[0]}}),j=new A({props:{posts:t[1]}}),P=new I({}),{c:function(){r=f(),c(a.$$.fragment),e=f(),n=i("section"),o=i("div"),l=i("div"),c(j.$$.fragment),S=f(),L=i("div"),c(P.$$.fragment),this.h()},l:function(t){m('[data-svelte="svelte-1otp67r"]',document.head).forEach(u),r=p(t),d(a.$$.fragment,t),e=p(t),n=g(t,"SECTION",{class:!0});var s=x(n);o=g(s,"DIV",{class:!0});var f=x(o);l=g(f,"DIV",{class:!0});var c=x(l);d(j.$$.fragment,c),c.forEach(u),S=p(f),L=g(f,"DIV",{class:!0});var i=x(L);d(P.$$.fragment,i),i.forEach(u),f.forEach(u),s.forEach(u),this.h()},h:function(){$(l,"class","container my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"),$(L,"class","container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"),$(o,"class","flex flex-wrap mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"),$(n,"class","text-gray-600 body-font relative mb-4")},m:function(t,s){v(t,r,s),h(a,t,s),v(t,e,s),v(t,n,s),y(n,o),y(o,l),h(j,l,null),y(o,S),y(o,L),h(P,L,null),V=!0},p:function(t,r){var e=w(r,1)[0];(!V||1&e)&&s!==(s="Latest Articles for "+t[0])&&(document.title=s);var n={};1&e&&(n.title2=t[0]),a.$set(n);var o={};2&e&&(o.posts=t[1]),j.$set(o)},i:function(t){V||(b(a.$$.fragment,t),b(j.$$.fragment,t),b(P.$$.fragment,t),V=!0)},o:function(t){D(a.$$.fragment,t),D(j.$$.fragment,t),D(P.$$.fragment,t),V=!1},d:function(t){t&&u(r),E(a,t),t&&u(e),t&&u(n),E(j),E(P)}}}function P(t){var s=t.params.slug;return{slug:s,posts:j(s)}}function V(t,s,r){var a=s.slug,e=s.posts;return t.$$set=function(t){"slug"in t&&r(0,a=t.slug),"posts"in t&&r(1,e=t.posts)},[a,e]}var B=function(s){t(f,o);var r=S(f);function f(t){var s;return a(this,f),s=r.call(this),e(n(s),t,V,L,l,{slug:0,posts:1}),s}return f}();export default B;export{P as preload};
