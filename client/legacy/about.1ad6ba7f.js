import{_ as t,a as n,b as e,c as o,i as r,s as i,d as a,S as c,q as s,e as l,h as u,n as h,o as d,k as f,g as p,z as m,l as g,E as v,K as w,D as y,p as x,A as E,r as k,t as b,f as j,j as M,u as I,m as $,v as D,w as A,x as T,y as N}from"./client.ec32fafe.js";import{H as W}from"./Heading.c659dd85.js";import{C as O}from"./Contact.c4f8256d.js";import{_ as V}from"./defineProperty.b786bad4.js";function S(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(o){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function P(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function R(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?P(Object(e),!0).forEach((function(n){V(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function z(t,n,e){var o=t.slice();return o[9]=n[e],o}function C(t,n,e){var o=t.slice();return o[12]=n[e],o}function H(t,n,e){var o=t.slice();return o[15]=n[e],o}function B(t){return document.title=t[0],{c:s,l:s,m:s,d:s}}function G(t){var n;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","description"),h(n,"content",t[3])},m:function(t,e){d(t,n,e)},p:function(t,e){8&e&&h(n,"content",t[3])},d:function(t){t&&f(n)}}}function U(t){var n;return{c:function(){n=l("link"),this.h()},l:function(t){n=u(t,"LINK",{rel:!0,href:!0}),this.h()},h:function(){h(n,"rel","canonical"),h(n,"href",t[5])},m:function(t,e){d(t,n,e)},p:function(t,e){32&e&&h(n,"href",t[5])},d:function(t){t&&f(n)}}}function L(t){var n;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","keywords"),h(n,"content",t[4])},m:function(t,e){d(t,n,e)},p:function(t,e){16&e&&h(n,"content",t[4])},d:function(t){t&&f(n)}}}function _(t){var n,e,o,r,i,a,c=t[6].title&&q(t),s=t[6].description&&F(t),l=(t[6].url||t[5])&&J(t),u=t[6].type&&K(t),h=t[6].article&&X(t),v=t[6].images&&t[6].images.length&&it(t);return{c:function(){c&&c.c(),n=p(),s&&s.c(),e=p(),l&&l.c(),o=p(),u&&u.c(),r=p(),h&&h.c(),i=p(),v&&v.c(),a=m()},l:function(t){c&&c.l(t),n=g(t),s&&s.l(t),e=g(t),l&&l.l(t),o=g(t),u&&u.l(t),r=g(t),h&&h.l(t),i=g(t),v&&v.l(t),a=m()},m:function(t,f){c&&c.m(t,f),d(t,n,f),s&&s.m(t,f),d(t,e,f),l&&l.m(t,f),d(t,o,f),u&&u.m(t,f),d(t,r,f),h&&h.m(t,f),d(t,i,f),v&&v.m(t,f),d(t,a,f)},p:function(t,d){t[6].title?c?c.p(t,d):((c=q(t)).c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),t[6].description?s?s.p(t,d):((s=F(t)).c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),t[6].url||t[5]?l?l.p(t,d):((l=J(t)).c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null),t[6].type?u?u.p(t,d):((u=K(t)).c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),t[6].article?h?h.p(t,d):((h=X(t)).c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null),t[6].images&&t[6].images.length?v?v.p(t,d):((v=it(t)).c(),v.m(a.parentNode,a)):v&&(v.d(1),v=null)},d:function(t){c&&c.d(t),t&&f(n),s&&s.d(t),t&&f(e),l&&l.d(t),t&&f(o),u&&u.d(t),t&&f(r),h&&h.d(t),t&&f(i),v&&v.d(t),t&&f(a)}}}function q(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:title"),h(n,"content",e=t[6].title)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].title)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function F(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:description"),h(n,"content",e=t[6].description)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].description)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function J(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:url"),h(n,"content",e=t[6].url||t[5])},m:function(t,e){d(t,n,e)},p:function(t,o){96&o&&e!==(e=t[6].url||t[5])&&h(n,"content",e)},d:function(t){t&&f(n)}}}function K(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:type"),h(n,"content",e=t[6].type.toLowerCase())},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].type.toLowerCase())&&h(n,"content",e)},d:function(t){t&&f(n)}}}function X(t){var n,e,o,r,i,a,c=t[6].article.publishedTime&&Q(t),s=t[6].article.modifiedTime&&Y(t),l=t[6].article.expirationTime&&Z(t),u=t[6].article.section&&tt(t),h=t[6].article.authors&&t[6].article.authors.length&&nt(t),v=t[6].article.tags&&t[6].article.tags.length&&ot(t);return{c:function(){c&&c.c(),n=p(),s&&s.c(),e=p(),l&&l.c(),o=p(),u&&u.c(),r=p(),h&&h.c(),i=p(),v&&v.c(),a=m()},l:function(t){c&&c.l(t),n=g(t),s&&s.l(t),e=g(t),l&&l.l(t),o=g(t),u&&u.l(t),r=g(t),h&&h.l(t),i=g(t),v&&v.l(t),a=m()},m:function(t,f){c&&c.m(t,f),d(t,n,f),s&&s.m(t,f),d(t,e,f),l&&l.m(t,f),d(t,o,f),u&&u.m(t,f),d(t,r,f),h&&h.m(t,f),d(t,i,f),v&&v.m(t,f),d(t,a,f)},p:function(t,d){t[6].article.publishedTime?c?c.p(t,d):((c=Q(t)).c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),t[6].article.modifiedTime?s?s.p(t,d):((s=Y(t)).c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),t[6].article.expirationTime?l?l.p(t,d):((l=Z(t)).c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null),t[6].article.section?u?u.p(t,d):((u=tt(t)).c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),t[6].article.authors&&t[6].article.authors.length?h?h.p(t,d):((h=nt(t)).c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null),t[6].article.tags&&t[6].article.tags.length?v?v.p(t,d):((v=ot(t)).c(),v.m(a.parentNode,a)):v&&(v.d(1),v=null)},d:function(t){c&&c.d(t),t&&f(n),s&&s.d(t),t&&f(e),l&&l.d(t),t&&f(o),u&&u.d(t),t&&f(r),h&&h.d(t),t&&f(i),v&&v.d(t),t&&f(a)}}}function Q(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","article:published_time"),h(n,"content",e=t[6].article.publishedTime)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].article.publishedTime)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function Y(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","article:modified_time"),h(n,"content",e=t[6].article.modifiedTime)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].article.modifiedTime)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function Z(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","article:expiration_time"),h(n,"content",e=t[6].article.expirationTime)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].article.expirationTime)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function tt(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","article:section"),h(n,"content",e=t[6].article.section)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[6].article.section)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function nt(t){for(var n,e=t[6].article.authors,o=[],r=0;r<e.length;r+=1)o[r]=et(H(t,e,r));return{c:function(){for(var t=0;t<o.length;t+=1)o[t].c();n=m()},l:function(t){for(var e=0;e<o.length;e+=1)o[e].l(t);n=m()},m:function(t,e){for(var r=0;r<o.length;r+=1)o[r].m(t,e);d(t,n,e)},p:function(t,r){if(64&r){var i;for(e=t[6].article.authors,i=0;i<e.length;i+=1){var a=H(t,e,i);o[i]?o[i].p(a,r):(o[i]=et(a),o[i].c(),o[i].m(n.parentNode,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=e.length}},d:function(t){v(o,t),t&&f(n)}}}function et(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","article:author"),h(n,"content",e=t[15])},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[15])&&h(n,"content",e)},d:function(t){t&&f(n)}}}function ot(t){for(var n,e=t[6].article.tags,o=[],r=0;r<e.length;r+=1)o[r]=rt(C(t,e,r));return{c:function(){for(var t=0;t<o.length;t+=1)o[t].c();n=m()},l:function(t){for(var e=0;e<o.length;e+=1)o[e].l(t);n=m()},m:function(t,e){for(var r=0;r<o.length;r+=1)o[r].m(t,e);d(t,n,e)},p:function(t,r){if(64&r){var i;for(e=t[6].article.tags,i=0;i<e.length;i+=1){var a=C(t,e,i);o[i]?o[i].p(a,r):(o[i]=rt(a),o[i].c(),o[i].m(n.parentNode,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=e.length}},d:function(t){v(o,t),t&&f(n)}}}function rt(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","article:tag"),h(n,"content",e=t[12])},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[12])&&h(n,"content",e)},d:function(t){t&&f(n)}}}function it(t){for(var n,e=t[6].images,o=[],r=0;r<e.length;r+=1)o[r]=lt(z(t,e,r));return{c:function(){for(var t=0;t<o.length;t+=1)o[t].c();n=m()},l:function(t){for(var e=0;e<o.length;e+=1)o[e].l(t);n=m()},m:function(t,e){for(var r=0;r<o.length;r+=1)o[r].m(t,e);d(t,n,e)},p:function(t,r){if(64&r){var i;for(e=t[6].images,i=0;i<e.length;i+=1){var a=z(t,e,i);o[i]?o[i].p(a,r):(o[i]=lt(a),o[i].c(),o[i].m(n.parentNode,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=e.length}},d:function(t){v(o,t),t&&f(n)}}}function at(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:image:alt"),h(n,"content",e=t[9].alt)},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[9].alt)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function ct(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:image:width"),h(n,"content",e=t[9].width.toString())},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[9].width.toString())&&h(n,"content",e)},d:function(t){t&&f(n)}}}function st(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),this.h()},h:function(){h(n,"property","og:image:height"),h(n,"content",e=t[9].height.toString())},m:function(t,e){d(t,n,e)},p:function(t,o){64&o&&e!==(e=t[9].height.toString())&&h(n,"content",e)},d:function(t){t&&f(n)}}}function lt(t){var n,e,o,r,i,a,c=t[9].alt&&at(t),s=t[9].width&&ct(t),v=t[9].height&&st(t);return{c:function(){n=l("meta"),o=p(),c&&c.c(),r=p(),s&&s.c(),i=p(),v&&v.c(),a=m(),this.h()},l:function(t){n=u(t,"META",{property:!0,content:!0}),o=g(t),c&&c.l(t),r=g(t),s&&s.l(t),i=g(t),v&&v.l(t),a=m(),this.h()},h:function(){h(n,"property","og:image"),h(n,"content",e=t[9].url)},m:function(t,e){d(t,n,e),d(t,o,e),c&&c.m(t,e),d(t,r,e),s&&s.m(t,e),d(t,i,e),v&&v.m(t,e),d(t,a,e)},p:function(t,o){64&o&&e!==(e=t[9].url)&&h(n,"content",e),t[9].alt?c?c.p(t,o):((c=at(t)).c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null),t[9].width?s?s.p(t,o):((s=ct(t)).c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null),t[9].height?v?v.p(t,o):((v=st(t)).c(),v.m(a.parentNode,a)):v&&(v.d(1),v=null)},d:function(t){t&&f(n),t&&f(o),c&&c.d(t),t&&f(r),s&&s.d(t),t&&f(i),v&&v.d(t),t&&f(a)}}}function ut(t){var n,e,o,r,i,a,c,s=t[7].site&&ht(t),v=t[7].title&&dt(t),w=t[7].description&&ft(t),y=t[7].image&&pt(t),x=t[7].imageAlt&&mt(t);return{c:function(){n=l("meta"),e=p(),s&&s.c(),o=p(),v&&v.c(),r=p(),w&&w.c(),i=p(),y&&y.c(),a=p(),x&&x.c(),c=m(),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),e=g(t),s&&s.l(t),o=g(t),v&&v.l(t),r=g(t),w&&w.l(t),i=g(t),y&&y.l(t),a=g(t),x&&x.l(t),c=m(),this.h()},h:function(){h(n,"name","twitter:card"),h(n,"content","summary_large_image")},m:function(t,l){d(t,n,l),d(t,e,l),s&&s.m(t,l),d(t,o,l),v&&v.m(t,l),d(t,r,l),w&&w.m(t,l),d(t,i,l),y&&y.m(t,l),d(t,a,l),x&&x.m(t,l),d(t,c,l)},p:function(t,n){t[7].site?s?s.p(t,n):((s=ht(t)).c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),t[7].title?v?v.p(t,n):((v=dt(t)).c(),v.m(r.parentNode,r)):v&&(v.d(1),v=null),t[7].description?w?w.p(t,n):((w=ft(t)).c(),w.m(i.parentNode,i)):w&&(w.d(1),w=null),t[7].image?y?y.p(t,n):((y=pt(t)).c(),y.m(a.parentNode,a)):y&&(y.d(1),y=null),t[7].imageAlt?x?x.p(t,n):((x=mt(t)).c(),x.m(c.parentNode,c)):x&&(x.d(1),x=null)},d:function(t){t&&f(n),t&&f(e),s&&s.d(t),t&&f(o),v&&v.d(t),t&&f(r),w&&w.d(t),t&&f(i),y&&y.d(t),t&&f(a),x&&x.d(t),t&&f(c)}}}function ht(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","twitter:site"),h(n,"content",e=t[7].site)},m:function(t,e){d(t,n,e)},p:function(t,o){128&o&&e!==(e=t[7].site)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function dt(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","twitter:title"),h(n,"content",e=t[7].title)},m:function(t,e){d(t,n,e)},p:function(t,o){128&o&&e!==(e=t[7].title)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function ft(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","twitter:description"),h(n,"content",e=t[7].description)},m:function(t,e){d(t,n,e)},p:function(t,o){128&o&&e!==(e=t[7].description)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function pt(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","twitter:image"),h(n,"content",e=t[7].image)},m:function(t,e){d(t,n,e)},p:function(t,o){128&o&&e!==(e=t[7].image)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function mt(t){var n,e;return{c:function(){n=l("meta"),this.h()},l:function(t){n=u(t,"META",{name:!0,content:!0}),this.h()},h:function(){h(n,"name","twitter:image:alt"),h(n,"content",e=t[7].imageAlt)},m:function(t,e){d(t,n,e)},p:function(t,o){128&o&&e!==(e=t[7].imageAlt)&&h(n,"content",e)},d:function(t){t&&f(n)}}}function gt(t){var n,e,o='<script type="application/ld+json">'.concat(JSON.stringify(R({"@context":"https://schema.org"},t[8]))+"<","/script>")+"";return{c:function(){e=m(),this.h()},l:function(t){e=m(),this.h()},h:function(){n=new w(e)},m:function(t,r){n.m(o,t,r),d(t,e,r)},p:function(t,e){256&e&&o!==(o='<script type="application/ld+json">'.concat(JSON.stringify(R({"@context":"https://schema.org"},t[8]))+"<","/script>")+"")&&n.p(o)},d:function(t){t&&f(e),t&&n.d()}}}function vt(t){var n,e,o,r,i,a,c,d,p,g,v=t[0]&&B(t),w=t[3]&&G(t),k=t[5]&&U(t),b=t[4]&&L(t),j=t[6]&&_(t),M=t[7]&&ut(t),I=t[8]&&gt(t);return{c:function(){v&&v.c(),n=l("meta"),o=l("meta"),w&&w.c(),i=m(),k&&k.c(),a=m(),b&&b.c(),c=m(),j&&j.c(),d=m(),M&&M.c(),p=m(),I&&I.c(),g=m(),this.h()},l:function(t){var e=y('[data-svelte="svelte-1f0hxex"]',document.head);v&&v.l(e),n=u(e,"META",{name:!0,content:!0}),o=u(e,"META",{name:!0,content:!0}),w&&w.l(e),i=m(),k&&k.l(e),a=m(),b&&b.l(e),c=m(),j&&j.l(e),d=m(),M&&M.l(e),p=m(),I&&I.l(e),g=m(),e.forEach(f),this.h()},h:function(){h(n,"name","robots"),h(n,"content",e="".concat(t[1]?"noindex":"index",",").concat(t[2]?"nofollow":"follow")),h(o,"name","googlebot"),h(o,"content",r="".concat(t[1]?"noindex":"index",",").concat(t[2]?"nofollow":"follow"))},m:function(t,e){v&&v.m(document.head,null),x(document.head,n),x(document.head,o),w&&w.m(document.head,null),x(document.head,i),k&&k.m(document.head,null),x(document.head,a),b&&b.m(document.head,null),x(document.head,c),j&&j.m(document.head,null),x(document.head,d),M&&M.m(document.head,null),x(document.head,p),I&&I.m(document.head,null),x(document.head,g)},p:function(t,s){var l=E(s,1)[0];t[0]?v||((v=B(t)).c(),v.m(n.parentNode,n)):v&&(v.d(1),v=null),6&l&&e!==(e="".concat(t[1]?"noindex":"index",",").concat(t[2]?"nofollow":"follow"))&&h(n,"content",e),6&l&&r!==(r="".concat(t[1]?"noindex":"index",",").concat(t[2]?"nofollow":"follow"))&&h(o,"content",r),t[3]?w?w.p(t,l):((w=G(t)).c(),w.m(i.parentNode,i)):w&&(w.d(1),w=null),t[5]?k?k.p(t,l):((k=U(t)).c(),k.m(a.parentNode,a)):k&&(k.d(1),k=null),t[4]?b?b.p(t,l):((b=L(t)).c(),b.m(c.parentNode,c)):b&&(b.d(1),b=null),t[6]?j?j.p(t,l):((j=_(t)).c(),j.m(d.parentNode,d)):j&&(j.d(1),j=null),t[7]?M?M.p(t,l):((M=ut(t)).c(),M.m(p.parentNode,p)):M&&(M.d(1),M=null),t[8]?I?I.p(t,l):((I=gt(t)).c(),I.m(g.parentNode,g)):I&&(I.d(1),I=null)},i:s,o:s,d:function(t){v&&v.d(t),f(n),f(o),w&&w.d(t),f(i),k&&k.d(t),f(a),b&&b.d(t),f(c),j&&j.d(t),f(d),M&&M.d(t),f(p),I&&I.d(t),f(g)}}}function wt(t,n,e){var o=n.title,r=void 0===o?void 0:o,i=n.noindex,a=void 0!==i&&i,c=n.nofollow,s=void 0!==c&&c,l=n.description,u=void 0===l?void 0:l,h=n.keywords,d=void 0===h?void 0:h,f=n.canonical,p=void 0===f?void 0:f,m=n.openGraph,g=void 0===m?void 0:m,v=n.twitter,w=void 0===v?void 0:v,y=n.jsonLd,x=void 0===y?void 0:y;return t.$$set=function(t){"title"in t&&e(0,r=t.title),"noindex"in t&&e(1,a=t.noindex),"nofollow"in t&&e(2,s=t.nofollow),"description"in t&&e(3,u=t.description),"keywords"in t&&e(4,d=t.keywords),"canonical"in t&&e(5,p=t.canonical),"openGraph"in t&&e(6,g=t.openGraph),"twitter"in t&&e(7,w=t.twitter),"jsonLd"in t&&e(8,x=t.jsonLd)},[r,a,s,u,d,p,g,w,x]}var yt=function(n){t(s,c);var e=S(s);function s(t){var n;return o(this,s),n=e.call(this),r(a(n),t,wt,vt,i,{title:0,noindex:1,nofollow:2,description:3,keywords:4,canonical:5,openGraph:6,twitter:7,jsonLd:8}),n}return s}();function xt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(o){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function Et(t){var n,e,o,r,i,a,c,m,v,w,y,E,O,V,S,P,R,z,C,H,B,G,U,L,_,q,F,J,K,X,Q,Y,Z,tt,nt,et,ot,rt,it,at,ct,st,lt,ut,ht,dt,ft,pt,mt,gt,vt,wt,yt,xt,Et,kt,bt,jt,Mt,It,$t,Dt,At,Tt,Nt,Wt,Ot,Vt,St,Pt,Rt,zt,Ct,Ht,Bt,Gt,Ut,Lt,_t,qt,Ft,Jt,Kt,Xt,Qt,Yt,Zt,tn,nn,en,on,rn,an,cn,sn,ln,un,hn,dn,fn,pn,mn,gn,vn,wn,yn,xn,En,kn,bn,jn,Mn,In,$n,Dn,An,Tn,Nn,Wn,On;return i=new W({props:{text:"Why Us",size:"text-2xl sm:text-3xl md:text-4xl",heading:"font-heading1 border-b-2",color:"text-pink-500"}}),{c:function(){n=l("section"),e=l("div"),o=l("div"),r=l("div"),k(i.$$.fragment),a=p(),c=l("p"),m=b("Our results and 480+ happy clients clearly indicate that we possess\r\n        exception skills and expertise."),v=p(),w=l("div"),y=l("div"),E=l("div"),O=l("div"),V=j("svg"),S=j("path"),P=j("path"),R=j("line"),z=j("line"),C=j("line"),H=p(),B=l("h2"),G=b("Personalised Support"),U=p(),L=l("p"),_=b("We eliminate hoops in communication and deliver a direct and\r\n            personalised support via chat, skype/zoom, emailing, remote\r\n            connection etc."),q=p(),F=l("div"),J=l("div"),K=l("div"),X=j("svg"),Q=j("path"),Y=j("path"),Z=j("path"),tt=p(),nt=l("h2"),et=b("Immediate And Efficient Communication"),ot=p(),rt=l("p"),it=b("We streamline communication between our team and your team by\r\n            posting progress updates on regularl basis, so we can be on same\r\n            board."),at=p(),ct=l("div"),st=l("div"),lt=l("div"),ut=j("svg"),ht=j("path"),dt=j("rect"),ft=j("rect"),pt=j("rect"),mt=j("path"),gt=j("line"),vt=p(),wt=l("h2"),yt=b("Flexible And Dynamic"),xt=p(),Et=l("p"),kt=b("We help your business to move fast in today's digital era where\r\n            business presence is 24 x 7 and opportunity might come at any\r\n            time.progress updates on regularl basis, so we can be on same board."),bt=p(),jt=l("div"),Mt=l("div"),It=l("div"),$t=j("svg"),Dt=j("path"),At=j("line"),Tt=j("path"),Nt=j("line"),Wt=j("line"),Ot=j("path"),Vt=p(),St=l("h2"),Pt=b("Effective And Impactful Outcomes"),Rt=p(),zt=l("p"),Ct=b("We focus on the customer experience from the day start. In\r\n            combination with our agile approach towards each product, we deliver\r\n            the qaulity that improve your business presence and makes an impact."),Ht=p(),Bt=l("div"),Gt=l("div"),Ut=l("div"),Lt=j("svg"),_t=j("path"),qt=j("path"),Ft=j("path"),Jt=p(),Kt=l("h2"),Xt=b("Great ROI"),Qt=p(),Yt=l("p"),Zt=b("Although we’re a team, we do not overcharge to our clients just to\r\n            keep our team members work loaded. We have been accurate and digital\r\n            from the start. Using our small team, we focus on delivering the\r\n            best product design/development, without wasting your time and\r\n            budget."),tn=p(),nn=l("div"),en=l("div"),on=l("div"),rn=j("svg"),an=j("path"),cn=j("circle"),sn=p(),ln=l("h2"),un=b("Undivided attention"),hn=p(),dn=l("p"),fn=b("When we take on your project, our team is fully committed from start\r\n            to finish. It means constant progress, uninterrupted focus and\r\n            tangible results. When you decide to work with us, your project will\r\n            get all attention that it deserves."),pn=p(),mn=l("div"),gn=l("div"),vn=l("div"),wn=j("svg"),yn=j("path"),xn=j("path"),En=j("path"),kn=j("path"),bn=j("path"),jn=j("line"),Mn=j("line"),In=j("path"),$n=p(),Dn=l("h2"),An=b("Small yet result oriented"),Tn=p(),Nn=l("p"),Wn=b("We are a team of passionate designers, developers with a strong zeal\r\n            to work with SMEs, emerging startups and individuals who need\r\n            technical help. We love coming to work every day and figuring out a\r\n            better World Wide Web for businesses and the end-users."),this.h()},l:function(t){n=u(t,"SECTION",{id:!0,class:!0});var s=M(n);e=u(s,"DIV",{class:!0});var l=M(e);o=u(l,"DIV",{class:!0});var h=M(o);r=u(h,"DIV",{class:!0});var d=M(r);I(i.$$.fragment,d),d.forEach(f),a=g(h),c=u(h,"P",{class:!0});var p=M(c);m=$(p,"Our results and 480+ happy clients clearly indicate that we possess\r\n        exception skills and expertise."),p.forEach(f),h.forEach(f),v=g(l),w=u(l,"DIV",{class:!0});var x=M(w);y=u(x,"DIV",{class:!0});var k=M(y);E=u(k,"DIV",{class:!0});var b=M(E);O=u(b,"DIV",{class:!0});var j=M(O);V=u(j,"svg",{class:!0,viewBox:!0,width:!0,height:!0,xmlns:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var D=M(V);S=u(D,"path",{d:!0},1),M(S).forEach(f),P=u(D,"path",{d:!0},1),M(P).forEach(f),R=u(D,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(R).forEach(f),z=u(D,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(z).forEach(f),C=u(D,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(C).forEach(f),D.forEach(f),j.forEach(f),H=g(b),B=u(b,"H2",{class:!0});var A=M(B);G=$(A,"Personalised Support"),A.forEach(f),U=g(b),L=u(b,"P",{class:!0});var T=M(L);_=$(T,"We eliminate hoops in communication and deliver a direct and\r\n            personalised support via chat, skype/zoom, emailing, remote\r\n            connection etc."),T.forEach(f),b.forEach(f),k.forEach(f),q=g(x),F=u(x,"DIV",{class:!0});var N=M(F);J=u(N,"DIV",{class:!0});var W=M(J);K=u(W,"DIV",{class:!0});var On=M(K);X=u(On,"svg",{class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var Vn=M(X);Q=u(Vn,"path",{stroke:!0,d:!0},1),M(Q).forEach(f),Y=u(Vn,"path",{d:!0},1),M(Y).forEach(f),Z=u(Vn,"path",{d:!0},1),M(Z).forEach(f),Vn.forEach(f),On.forEach(f),tt=g(W),nt=u(W,"H2",{class:!0});var Sn=M(nt);et=$(Sn,"Immediate And Efficient Communication"),Sn.forEach(f),ot=g(W),rt=u(W,"P",{class:!0});var Pn=M(rt);it=$(Pn,"We streamline communication between our team and your team by\r\n            posting progress updates on regularl basis, so we can be on same\r\n            board."),Pn.forEach(f),W.forEach(f),N.forEach(f),at=g(x),ct=u(x,"DIV",{class:!0});var Rn=M(ct);st=u(Rn,"DIV",{class:!0});var zn=M(st);lt=u(zn,"DIV",{class:!0});var Cn=M(lt);ut=u(Cn,"svg",{class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var Hn=M(ut);ht=u(Hn,"path",{stroke:!0,d:!0},1),M(ht).forEach(f),dt=u(Hn,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),M(dt).forEach(f),ft=u(Hn,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),M(ft).forEach(f),pt=u(Hn,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),M(pt).forEach(f),mt=u(Hn,"path",{d:!0},1),M(mt).forEach(f),gt=u(Hn,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(gt).forEach(f),Hn.forEach(f),Cn.forEach(f),vt=g(zn),wt=u(zn,"H2",{class:!0});var Bn=M(wt);yt=$(Bn,"Flexible And Dynamic"),Bn.forEach(f),xt=g(zn),Et=u(zn,"P",{class:!0});var Gn=M(Et);kt=$(Gn,"We help your business to move fast in today's digital era where\r\n            business presence is 24 x 7 and opportunity might come at any\r\n            time.progress updates on regularl basis, so we can be on same board."),Gn.forEach(f),zn.forEach(f),Rn.forEach(f),bt=g(x),jt=u(x,"DIV",{class:!0});var Un=M(jt);Mt=u(Un,"DIV",{class:!0});var Ln=M(Mt);It=u(Ln,"DIV",{class:!0});var _n=M(It);$t=u(_n,"svg",{class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var qn=M($t);Dt=u(qn,"path",{stroke:!0,d:!0},1),M(Dt).forEach(f),At=u(qn,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(At).forEach(f),Tt=u(qn,"path",{d:!0},1),M(Tt).forEach(f),Nt=u(qn,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(Nt).forEach(f),Wt=u(qn,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(Wt).forEach(f),Ot=u(qn,"path",{d:!0},1),M(Ot).forEach(f),qn.forEach(f),_n.forEach(f),Vt=g(Ln),St=u(Ln,"H2",{class:!0});var Fn=M(St);Pt=$(Fn,"Effective And Impactful Outcomes"),Fn.forEach(f),Rt=g(Ln),zt=u(Ln,"P",{class:!0});var Jn=M(zt);Ct=$(Jn,"We focus on the customer experience from the day start. In\r\n            combination with our agile approach towards each product, we deliver\r\n            the qaulity that improve your business presence and makes an impact."),Jn.forEach(f),Ln.forEach(f),Un.forEach(f),Ht=g(x),Bt=u(x,"DIV",{class:!0});var Kn=M(Bt);Gt=u(Kn,"DIV",{class:!0});var Xn=M(Gt);Ut=u(Xn,"DIV",{class:!0});var Qn=M(Ut);Lt=u(Qn,"svg",{class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var Yn=M(Lt);_t=u(Yn,"path",{stroke:!0,d:!0},1),M(_t).forEach(f),qt=u(Yn,"path",{d:!0},1),M(qt).forEach(f),Ft=u(Yn,"path",{d:!0},1),M(Ft).forEach(f),Yn.forEach(f),Qn.forEach(f),Jt=g(Xn),Kt=u(Xn,"H2",{class:!0});var Zn=M(Kt);Xt=$(Zn,"Great ROI"),Zn.forEach(f),Qt=g(Xn),Yt=u(Xn,"P",{class:!0});var te=M(Yt);Zt=$(te,"Although we’re a team, we do not overcharge to our clients just to\r\n            keep our team members work loaded. We have been accurate and digital\r\n            from the start. Using our small team, we focus on delivering the\r\n            best product design/development, without wasting your time and\r\n            budget."),te.forEach(f),Xn.forEach(f),Kn.forEach(f),tn=g(x),nn=u(x,"DIV",{class:!0});var ne=M(nn);en=u(ne,"DIV",{class:!0});var ee=M(en);on=u(ee,"DIV",{class:!0});var oe=M(on);rn=u(oe,"svg",{class:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var re=M(rn);an=u(re,"path",{d:!0},1),M(an).forEach(f),cn=u(re,"circle",{cx:!0,cy:!0,r:!0},1),M(cn).forEach(f),re.forEach(f),oe.forEach(f),sn=g(ee),ln=u(ee,"H2",{class:!0});var ie=M(ln);un=$(ie,"Undivided attention"),ie.forEach(f),hn=g(ee),dn=u(ee,"P",{class:!0});var ae=M(dn);fn=$(ae,"When we take on your project, our team is fully committed from start\r\n            to finish. It means constant progress, uninterrupted focus and\r\n            tangible results. When you decide to work with us, your project will\r\n            get all attention that it deserves."),ae.forEach(f),ee.forEach(f),ne.forEach(f),pn=g(x),mn=u(x,"DIV",{class:!0});var ce=M(mn);gn=u(ce,"DIV",{class:!0});var se=M(gn);vn=u(se,"DIV",{class:!0});var le=M(vn);wn=u(le,"svg",{class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var ue=M(wn);yn=u(ue,"path",{stroke:!0,d:!0},1),M(yn).forEach(f),xn=u(ue,"path",{d:!0},1),M(xn).forEach(f),En=u(ue,"path",{d:!0},1),M(En).forEach(f),kn=u(ue,"path",{d:!0},1),M(kn).forEach(f),bn=u(ue,"path",{d:!0},1),M(bn).forEach(f),jn=u(ue,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(jn).forEach(f),Mn=u(ue,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(Mn).forEach(f),In=u(ue,"path",{d:!0},1),M(In).forEach(f),ue.forEach(f),le.forEach(f),$n=g(se),Dn=u(se,"H2",{class:!0});var he=M(Dn);An=$(he,"Small yet result oriented"),he.forEach(f),Tn=g(se),Nn=u(se,"P",{class:!0});var de=M(Nn);Wn=$(de,"We are a team of passionate designers, developers with a strong zeal\r\n            to work with SMEs, emerging startups and individuals who need\r\n            technical help. We love coming to work every day and figuring out a\r\n            better World Wide Web for businesses and the end-users."),de.forEach(f),se.forEach(f),ce.forEach(f),x.forEach(f),l.forEach(f),s.forEach(f),this.h()},h:function(){h(r,"class","my-10 text-center"),h(c,"class","lg:w-1/2 w-full leading-relaxed text-black text-2xl font-body"),h(o,"class","flex flex-wrap w-full mb-20 flex-col items-center text-center"),h(S,"d","M18 8h1a4 4 0 0 1 0 8h-1"),h(P,"d","M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"),h(R,"x1","6"),h(R,"y1","1"),h(R,"x2","6"),h(R,"y2","4"),h(z,"x1","10"),h(z,"y1","1"),h(z,"x2","10"),h(z,"y2","4"),h(C,"x1","14"),h(C,"y1","1"),h(C,"x2","14"),h(C,"y2","4"),h(V,"class","h-8 w-8 text-pink-500"),h(V,"viewBox","0 0 24 24"),h(V,"width","24"),h(V,"height","24"),h(V,"xmlns","http://www.w3.org/2000/svg"),h(V,"fill","none"),h(V,"stroke","currentColor"),h(V,"stroke-width","2"),h(V,"stroke-linecap","round"),h(V,"stroke-linejoin","round"),h(O,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(B,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(L,"class","leading-relaxed text-base font-body"),h(E,"class","shadow p-6 rounded-lg"),h(y,"class","xl:w-1/3 md:w-1/2 p-4"),h(Q,"stroke","none"),h(Q,"d","M0 0h24v24H0z"),h(Y,"d","M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"),h(Z,"d","M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"),h(X,"class","h-8 w-8 text-pink-500"),h(X,"width","24"),h(X,"height","24"),h(X,"viewBox","0 0 24 24"),h(X,"stroke-width","2"),h(X,"stroke","currentColor"),h(X,"fill","none"),h(X,"stroke-linecap","round"),h(X,"stroke-linejoin","round"),h(K,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(nt,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(rt,"class","leading-relaxed text-base font-body"),h(J,"class","shadow p-6 rounded-lg"),h(F,"class","xl:w-1/3 md:w-1/2 p-4"),h(ht,"stroke","none"),h(ht,"d","M0 0h24v24H0z"),h(dt,"x","3"),h(dt,"y","15"),h(dt,"width","6"),h(dt,"height","6"),h(dt,"rx","2"),h(ft,"x","15"),h(ft,"y","15"),h(ft,"width","6"),h(ft,"height","6"),h(ft,"rx","2"),h(pt,"x","9"),h(pt,"y","3"),h(pt,"width","6"),h(pt,"height","6"),h(pt,"rx","2"),h(mt,"d","M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"),h(gt,"x1","12"),h(gt,"y1","9"),h(gt,"x2","12"),h(gt,"y2","12"),h(ut,"class","h-8 w-8 text-pink-500"),h(ut,"width","24"),h(ut,"height","24"),h(ut,"viewBox","0 0 24 24"),h(ut,"stroke-width","2"),h(ut,"stroke","currentColor"),h(ut,"fill","none"),h(ut,"stroke-linecap","round"),h(ut,"stroke-linejoin","round"),h(lt,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(wt,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(Et,"class","leading-relaxed text-base font-body"),h(st,"class","shadow p-6 rounded-lg"),h(ct,"class","xl:w-1/3 md:w-1/2 p-4"),h(Dt,"stroke","none"),h(Dt,"d","M0 0h24v24H0z"),h(At,"x1","3"),h(At,"y1","4"),h(At,"x2","21"),h(At,"y2","4"),h(Tt,"d","M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"),h(Nt,"x1","12"),h(Nt,"y1","16"),h(Nt,"x2","12"),h(Nt,"y2","20"),h(Wt,"x1","9"),h(Wt,"y1","20"),h(Wt,"x2","15"),h(Wt,"y2","20"),h(Ot,"d","M8 12l3 -3l2 2l3 -3"),h($t,"class","h-8 w-8 text-pink-500"),h($t,"width","24"),h($t,"height","24"),h($t,"viewBox","0 0 24 24"),h($t,"stroke-width","2"),h($t,"stroke","currentColor"),h($t,"fill","none"),h($t,"stroke-linecap","round"),h($t,"stroke-linejoin","round"),h(It,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(St,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(zt,"class","leading-relaxed text-base font-body"),h(Mt,"class","shadow p-6 rounded-lg"),h(jt,"class","xl:w-1/3 md:w-1/2 p-4"),h(_t,"stroke","none"),h(_t,"d","M0 0h24v24H0z"),h(qt,"d","M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"),h(Ft,"d","M12 3v3m0 12v3"),h(Lt,"class","h-8 w-8 text-pink-500"),h(Lt,"width","24"),h(Lt,"height","24"),h(Lt,"viewBox","0 0 24 24"),h(Lt,"stroke-width","2"),h(Lt,"stroke","currentColor"),h(Lt,"fill","none"),h(Lt,"stroke-linecap","round"),h(Lt,"stroke-linejoin","round"),h(Ut,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(Kt,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(Yt,"class","leading-relaxed text-base font-body"),h(Gt,"class","shadow p-6 rounded-lg"),h(Bt,"class","xl:w-1/3 md:w-1/2 p-4"),h(an,"d","M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"),h(cn,"cx","12"),h(cn,"cy","12"),h(cn,"r","3"),h(rn,"class","h-8 w-8 text-pink-500"),h(rn,"viewBox","0 0 24 24"),h(rn,"fill","none"),h(rn,"stroke","currentColor"),h(rn,"stroke-width","2"),h(rn,"stroke-linecap","round"),h(rn,"stroke-linejoin","round"),h(on,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(ln,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(dn,"class","leading-relaxed text-base font-body"),h(en,"class","shadow p-6 rounded-lg"),h(nn,"class","xl:w-1/3 md:w-1/2 p-4"),h(yn,"stroke","none"),h(yn,"d","M0 0h24v24H0z"),h(xn,"d","M4 8v-2a2 2 0 0 1 2 -2h2"),h(En,"d","M4 16v2a2 2 0 0 0 2 2h2"),h(kn,"d","M16 4h2a2 2 0 0 1 2 2v2"),h(bn,"d","M16 20h2a2 2 0 0 0 2 -2v-2"),h(jn,"x1","9"),h(jn,"y1","10"),h(jn,"x2","9.01"),h(jn,"y2","10"),h(Mn,"x1","15"),h(Mn,"y1","10"),h(Mn,"x2","15.01"),h(Mn,"y2","10"),h(In,"d","M9.5 15a3.5 3.5 0 0 0 5 0"),h(wn,"class","h-8 w-8 text-pink-500"),h(wn,"width","24"),h(wn,"height","24"),h(wn,"viewBox","0 0 24 24"),h(wn,"stroke-width","2"),h(wn,"stroke","currentColor"),h(wn,"fill","none"),h(wn,"stroke-linecap","round"),h(wn,"stroke-linejoin","round"),h(vn,"class","w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"),h(Dn,"class","text-lg text-gray-900 font-medium title-font mb-2"),h(Nn,"class","leading-relaxed text-base font-body"),h(gn,"class","shadow p-6 rounded-lg"),h(mn,"class","xl:w-1/3 md:w-1/2 p-4"),h(w,"class","flex flex-wrap -m-4"),h(e,"class","container px-5 py-24 pb-20 mx-auto"),h(n,"id","whyus"),h(n,"class","text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 svelte-1u9un97")},m:function(t,s){d(t,n,s),x(n,e),x(e,o),x(o,r),D(i,r,null),x(o,a),x(o,c),x(c,m),x(e,v),x(e,w),x(w,y),x(y,E),x(E,O),x(O,V),x(V,S),x(V,P),x(V,R),x(V,z),x(V,C),x(E,H),x(E,B),x(B,G),x(E,U),x(E,L),x(L,_),x(w,q),x(w,F),x(F,J),x(J,K),x(K,X),x(X,Q),x(X,Y),x(X,Z),x(J,tt),x(J,nt),x(nt,et),x(J,ot),x(J,rt),x(rt,it),x(w,at),x(w,ct),x(ct,st),x(st,lt),x(lt,ut),x(ut,ht),x(ut,dt),x(ut,ft),x(ut,pt),x(ut,mt),x(ut,gt),x(st,vt),x(st,wt),x(wt,yt),x(st,xt),x(st,Et),x(Et,kt),x(w,bt),x(w,jt),x(jt,Mt),x(Mt,It),x(It,$t),x($t,Dt),x($t,At),x($t,Tt),x($t,Nt),x($t,Wt),x($t,Ot),x(Mt,Vt),x(Mt,St),x(St,Pt),x(Mt,Rt),x(Mt,zt),x(zt,Ct),x(w,Ht),x(w,Bt),x(Bt,Gt),x(Gt,Ut),x(Ut,Lt),x(Lt,_t),x(Lt,qt),x(Lt,Ft),x(Gt,Jt),x(Gt,Kt),x(Kt,Xt),x(Gt,Qt),x(Gt,Yt),x(Yt,Zt),x(w,tn),x(w,nn),x(nn,en),x(en,on),x(on,rn),x(rn,an),x(rn,cn),x(en,sn),x(en,ln),x(ln,un),x(en,hn),x(en,dn),x(dn,fn),x(w,pn),x(w,mn),x(mn,gn),x(gn,vn),x(vn,wn),x(wn,yn),x(wn,xn),x(wn,En),x(wn,kn),x(wn,bn),x(wn,jn),x(wn,Mn),x(wn,In),x(gn,$n),x(gn,Dn),x(Dn,An),x(gn,Tn),x(gn,Nn),x(Nn,Wn),On=!0},p:s,i:function(t){On||(A(i.$$.fragment,t),On=!0)},o:function(t){T(i.$$.fragment,t),On=!1},d:function(t){t&&f(n),N(i)}}}var kt=function(n){t(s,c);var e=xt(s);function s(t){var n;return o(this,s),n=e.call(this),r(a(n),t,null,Et,i,{}),n}return s}();function bt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(o){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function jt(t){var n,e,o,r,i,a,c,m,v,w,y,E,j,V;return n=new yt({props:{title:"About Us",description:"We are a team of passionate ui/ux designers, developers, and coders",openGraph:{title:"Open Graph Title",description:"Open Graph Description",url:"https://www.example.com/page",type:"website",images:[{url:"https://www.example.com/images/og-image.jpg",width:850,height:650,alt:"Og Image Alt"}]}}}),a=new W({props:{text:"Who We Are",size:"text-4xl sm:text-5xl md:text-6xl",heading:"font-heading1 text-center mb-8",color:"text-pink-500"}}),y=new kt({}),j=new O({props:{contactbg:"bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0"}}),{c:function(){k(n.$$.fragment),e=p(),o=l("section"),r=l("div"),i=l("div"),k(a.$$.fragment),c=p(),m=l("p"),v=b("We are a team of passionate ui/ux designers, developers, and coders with\r\n        a strong zeal to work with SMEs, emerging startups and individuals who\r\n        need technical help. In the last 12 years, We got the opportunity to\r\n        work with many clients across the globe and We figured out that most of\r\n        my client's wanted someone who they could trust as a technical partner\r\n        for their products. Someone, who can give suggestions right from what\r\n        tech should be picked up, how to get the UX right, how we should plan\r\n        the product to launch and a lot more..."),w=p(),k(y.$$.fragment),E=p(),k(j.$$.fragment),this.h()},l:function(t){I(n.$$.fragment,t),e=g(t),o=u(t,"SECTION",{class:!0});var s=M(o);r=u(s,"DIV",{class:!0});var l=M(r);i=u(l,"DIV",{class:!0});var h=M(i);I(a.$$.fragment,h),c=g(h),m=u(h,"P",{class:!0});var d=M(m);v=$(d,"We are a team of passionate ui/ux designers, developers, and coders with\r\n        a strong zeal to work with SMEs, emerging startups and individuals who\r\n        need technical help. In the last 12 years, We got the opportunity to\r\n        work with many clients across the globe and We figured out that most of\r\n        my client's wanted someone who they could trust as a technical partner\r\n        for their products. Someone, who can give suggestions right from what\r\n        tech should be picked up, how to get the UX right, how we should plan\r\n        the product to launch and a lot more..."),d.forEach(f),h.forEach(f),l.forEach(f),s.forEach(f),w=g(t),I(y.$$.fragment,t),E=g(t),I(j.$$.fragment,t),this.h()},h:function(){h(m,"class","lg:w-1/2 w-full leading-relaxed text-gray-500"),h(i,"class","flex flex-wrap w-full mb-20 flex-col items-center text-center"),h(r,"class","container py-24 mx-auto"),h(o,"class","text-gray-600 body-font")},m:function(t,s){D(n,t,s),d(t,e,s),d(t,o,s),x(o,r),x(r,i),D(a,i,null),x(i,c),x(i,m),x(m,v),d(t,w,s),D(y,t,s),d(t,E,s),D(j,t,s),V=!0},p:s,i:function(t){V||(A(n.$$.fragment,t),A(a.$$.fragment,t),A(y.$$.fragment,t),A(j.$$.fragment,t),V=!0)},o:function(t){T(n.$$.fragment,t),T(a.$$.fragment,t),T(y.$$.fragment,t),T(j.$$.fragment,t),V=!1},d:function(t){N(n,t),t&&f(e),t&&f(o),N(a),t&&f(w),N(y,t),t&&f(E),N(j,t)}}}var Mt=function(n){t(s,c);var e=bt(s);function s(t){var n;return o(this,s),n=e.call(this),r(a(n),t,null,jt,i,{}),n}return s}();export default Mt;
