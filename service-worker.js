!function(){"use strict";const o=["/client/client.93d71ed3.js","/client/inject_styles.5607aec6.js","/client/index.4db6bfcf.js","/client/Heading.e0d8fc44.js","/client/Services.2e76b133.js","/client/Contact.a73e30e4.js","/client/portfolio.8c17230b.js","/client/services.bcd63a43.js","/client/contact.fac2adb6.js","/client/about.5f129f5b.js","/client/[permalink].84893ba2.js","/client/Tags.91c9d44e.js","/client/posts.6edb7c8e.js","/client/Bloghero.e51c50ff.js","/client/[slug].30485170.js"].concat(["/service-worker-index.html","/app1.png","/app2.png","/client/clay.jpg","/client/Jamie.png","/client/liam.png","/client/Sophie.jpg","/client/Tomasz.jpg","/digital-marketing.png","/ecommerce1.jpg","/favicon-old.png","/favicon.ico","/favicon.svg","/g/g/seo2-400-400.png","/g/g/seo2-400-400.webp","/g/home-hero-1200.jpg","/g/home-hero-1200.webp","/g/home-hero-400.jpg","/g/home-hero-400.webp","/g/home-hero-800.jpg","/g/home-hero-800.webp","/g/seo2-400.png","/g/seo2-400.webp","/global.css","/home-hero.jpg","/images/app1.png","/images/app2.png","/images/behuppy.png","/images/effective-communication.svg","/images/effective-communication2.svg","/images/flexible-dynamic.svg","/images/Google-reviews-logo.png","/images/great-roi.svg","/images/homehero.jpg","/images/impactful-outcome.svg","/images/impossiblefoods.png","/images/inetmart-biz.png","/images/logo.svg","/images/personalsupport.svg","/images/pph100.png","/images/pphlogo.svg","/images/pphtext.png","/images/results-oriented.svg","/images/seo2.png","/images/skype-seeklogo.com.svg","/images/stars.svg","/images/successkid.jpg","/images/undivided-attention.svg","/images/upwork.png","/images/upwork.svg","/index.css","/info-1.png","/info-2.png","/logo-192.png","/logo-512.png","/logo.svg","/manifest.json","/portfolio/adamsweddingphotography.jpg","/portfolio/ariachairs.jpg","/portfolio/azneuro.jpg","/portfolio/bannerbuzz-co-uk.jpg","/portfolio/basicslife.jpg","/portfolio/boomtrain.jpg","/portfolio/brandrefinery-co-uk.jpg","/portfolio/characterfancydress-co-uk.jpg","/portfolio/chicagofoodplanet.jpg","/portfolio/digitalnomadkit.jpg","/portfolio/eatinglondontours-co-uk.jpg","/portfolio/full.jpg","/portfolio/jesslacey.jpg","/portfolio/jrmsupplies.jpg","/portfolio/latofieldsestate.jpg","/portfolio/learn-netrush.jpg","/portfolio/lockwoodstickhill-co-uk.jpg","/portfolio/lynnkwagner.jpg","/portfolio/malfordoflondon.jpg","/portfolio/myespritsain.jpg","/portfolio/nuvoplumbing-co-uk.jpg","/portfolio/rebel-performance.jpg","/portfolio/rksdesign.jpg","/portfolio/skinmedico.jpg","/portfolio/sktmarine-sg.jpg","/portfolio/sktmarine.jpg","/portfolio/smartheartworkshops-co-uk.jpg","/portfolio/travelcupio.jpg","/portfolio/vanishingpoint-be.jpg","/portfolio/vaporsolo.jpg","/portfolio/velasca.jpg","/portfolio/zeeandco-co-uk.jpg","/reviews/pphlogo.svg","/reviews/stars.svg","/reviews/upwork.svg","/seo1.png","/seo2.png","/staffing2.png","/svelte-logo-mask.svg","/Taieri.png","/tailwind.css"]),e=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1623124525062").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",o=>{o.waitUntil(caches.keys().then(async o=>{for(const e of o)"cache1623124525062"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",o=>{if("GET"!==o.request.method||o.request.headers.has("range"))return;const i=new URL(o.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&e.has(i.pathname)?o.respondWith(caches.match(o.request)):"only-if-cached"!==o.request.cache&&o.respondWith(caches.open("offline1623124525062").then(async e=>{try{const i=await fetch(o.request);return e.put(o.request,i.clone()),i}catch(i){const s=await e.match(o.request);if(s)return s;throw i}}))))})}();
