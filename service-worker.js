!function(){"use strict";const e=["/client/client.7dbc5fb7.js","/client/inject_styles.5607aec6.js","/client/index.582dc933.js","/client/ClientReview.4a9853ff.js","/client/Heading.68a1e604.js","/client/Services.1a91d34b.js","/client/Contact.581f1e62.js","/client/_commonjsHelpers.1e235def.js","/client/portfolio.52024a83.js","/client/services.7b53fb63.js","/client/contact.e80dbf5b.js","/client/about.afec11f1.js","/client/[permalink].2638cbe3.js","/client/Tags.d1dc7d35.js","/client/posts.70daeb7b.js","/client/Bloghero.f679bbee.js","/client/[slug].ec2223d8.js"].concat(["/service-worker-index.html","/app1.png","/app2.png","/client/clay.jpg","/client/Jamie.png","/client/liam.png","/client/Sophie.jpg","/client/Tomasz.jpg","/digital-marketing.png","/ecommerce1.jpg","/favicon-old.png","/favicon.ico","/favicon.svg","/g/g/seo2-400-400.png","/g/g/seo2-400-400.webp","/g/home-hero-1200.jpg","/g/home-hero-1200.webp","/g/home-hero-400.jpg","/g/home-hero-400.webp","/g/home-hero-800.jpg","/g/home-hero-800.webp","/g/seo2-400.png","/g/seo2-400.webp","/global.css","/Google-reviews-logo.png","/home-hero.jpg","/images/app1.png","/images/app2.png","/images/behuppy.png","/images/effective-communication.svg","/images/effective-communication2.svg","/images/flexible-dynamic.svg","/images/Google-reviews-logo.png","/images/great-roi.svg","/images/homehero.jpg","/images/impactful-outcome.svg","/images/impossiblefoods.png","/images/inetmart-biz.png","/images/logo.svg","/images/personalsupport.svg","/images/pph100.png","/images/pphlogo.svg","/images/pphtext.png","/images/results-oriented.svg","/images/seo2.png","/images/skype-seeklogo.com.svg","/images/stars.svg","/images/successkid.jpg","/images/undivided-attention.svg","/images/upwork.png","/images/upwork.svg","/index.css","/info-1.png","/info-2.png","/logo-192.png","/logo-512.png","/logo.svg","/manifest.json","/portfolio/adamsweddingphotography.jpg","/portfolio/ariachairs.jpg","/portfolio/azneuro.jpg","/portfolio/bannerbuzz-co-uk.jpg","/portfolio/basicslife.jpg","/portfolio/boomtrain.jpg","/portfolio/brandrefinery-co-uk.jpg","/portfolio/characterfancydress-co-uk.jpg","/portfolio/chicagofoodplanet.jpg","/portfolio/digitalnomadkit.jpg","/portfolio/eatinglondontours-co-uk.jpg","/portfolio/full.jpg","/portfolio/jesslacey.jpg","/portfolio/jrmsupplies.jpg","/portfolio/latofieldsestate.jpg","/portfolio/learn-netrush.jpg","/portfolio/lockwoodstickhill-co-uk.jpg","/portfolio/lynnkwagner.jpg","/portfolio/malfordoflondon.jpg","/portfolio/myespritsain.jpg","/portfolio/nuvoplumbing-co-uk.jpg","/portfolio/rebel-performance.jpg","/portfolio/rksdesign.jpg","/portfolio/skinmedico.jpg","/portfolio/sktmarine-sg.jpg","/portfolio/sktmarine.jpg","/portfolio/smartheartworkshops-co-uk.jpg","/portfolio/travelcupio.jpg","/portfolio/vanishingpoint-be.jpg","/portfolio/vaporsolo.jpg","/portfolio/velasca.jpg","/portfolio/zeeandco-co-uk.jpg","/reviews/pphlogo.svg","/reviews/stars.svg","/reviews/upwork.svg","/seo1.png","/seo2.png","/staffing2.png","/svelte-logo-mask.svg","/Taieri.png","/tailwind.css"]),o=new Set(e);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1623127275324").then(o=>o.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const o of e)"cache1623127275324"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&o.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1623127275324").then(async o=>{try{const i=await fetch(e.request);return o.put(e.request,i.clone()),i}catch(i){const s=await o.match(e.request);if(s)return s;throw i}}))))})}();
