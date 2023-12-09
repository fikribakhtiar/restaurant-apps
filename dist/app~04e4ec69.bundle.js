(()=>{"use strict";var n,A={756:(n,A,t)=>{t.d(A,{Z:()=>x});var e=t(537),a=t.n(e),i=t(645),o=t.n(i),r=t(667),p=t.n(r),d=new URL(t(879),t.b),s=o()(a());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500&family=Poppins:wght@300;400;600&display=swap);"]);var l=p()(d);s.push([n.id,`* {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style: none;\n}\n\nhtml,\nbody,\nmain {\n    width: 100%;\n    background-color: #FFFBF5;\n}\n\nbody {\n    font-family: 'Poppins';\n}\n\nheader {\n    height: 100vh;\n    width: 100%;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${l});\n    background-size: cover;\n    background-position: center;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n\n.navbar {\n    width: 100%;\n    display: flex;\n    position: absolute;\n    padding: 50px;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n}\n\n.navbar a {\n    color: #fff;\n    cursor: pointer;\n    min-height: 45px;\n    min-width: 45px;\n}\n\n.navbar .logo {\n    font-size: 2em;\n    font-weight: bold;\n    text-transform: uppercase;\n    min-height: 45px;\n    min-width: 45px;\n    color: #F7EFE5;\n}\n\n.navbar .nav-list ul {\n    display: flex;\n}\n\n.navbar .nav-list ul li {\n    margin: 0 25px;\n    padding-top: 10px;\n    min-height: 45px;\n    min-width: 45px;\n}\n\n.navbar .nav-list ul li a {\n    padding: 20px;\n    color: #F7EFE5;\n}\n\n.navbar .nav-list ul li:hover {\n    font-weight: bold;\n}\n\n.navbar #hamburger {\n    position: absolute;\n    top: 50px;\n    right: 50px;\n    font-size: 30px;\n    display: none;\n    min-height: 45px;\n    min-width: 45px;\n    color: #F7EFE5;\n}\n\n@media screen and (max-width: 900px) {\n    .navbar {\n        padding: 0;\n    }\n    .navbar .logo {\n        position: absolute;\n        top: 50px;\n        left: 50px;\n    }\n    .navbar #hamburger {\n        display: block;\n    }\n    .nav-list {\n        position: absolute;\n        background-color: #FFFBF5;\n        backdrop-filter: blur(20px);\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: -100%;\n        transition: all 0.5s ease;\n    }\n    .nav-list.open {\n        margin-left: 0;\n    }\n    .nav-list ul {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .navbar .nav-list ul li {\n        margin: 25px 0;\n        font-size: 1.2em;\n    }\n    .navbar .nav-list ul li a {\n        color: #7743DB;\n        font-weight: bold;\n    }\n    .banner-text h1 {\n        font-size: 30px;\n        color: #F7EFE5;\n    }\n}\n\n.banner {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    height: 100vh;\n    text-align: center;\n    background-position: center;\n    background-size: cover;\n}\n\n.banner-text {\n    margin: 0 auto;\n    margin-top: 60px;\n    width: 70%;\n    font-size: 20px;\n    color: #fff;\n}\n\n.banner-text h1 {\n    padding-bottom: 15px;\n    color: #F7EFE5;\n}\n\n.banner-text a {\n    width: 150px;\n    text-align: center;\n    color: #fff;\n    padding: 15px 30px;\n    font-size: 15px;\n    font-weight: bold;\n    background: transparent;\n    border: 2px solid #20b3f1;\n    border-radius: 20px;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.banner-text a:hover {\n    background-color: #38BDF8;\n}\n\n@media screen and (max-width: 506px) {\n    .navbar .logo {\n        padding-right: 105px;\n    }\n}\n\n@media screen and (max-width: 389px) {\n    .navbar .logo {\n        font-size: 1.5em;\n        left: 20px;\n        top: 20px;\n    }\n    .navbar #hamburger {\n        right: 30px;\n        top: 20px;\n    }\n    .banner-text h1 {\n        font-size: 25px;\n    }\n}\n\n.content {\n    padding: 15px 35px;\n}\n\n.headline {\n    text-align: center;\n    padding-bottom: 20px;\n    margin: 30px 100px 50px 100px;\n    border-bottom: solid;\n    border-bottom-color: #C3ACD0;\n}\n\n.headline-title {\n    color: #7743DB;\n    font-size: 30px;\n    text-transform: uppercase;\n    padding-bottom: 20px;\n}\n\n.content-post {\n    padding: 0 30px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: #F7EFE5;\n}\n\n.content-post .post {\n    margin: 10px;\n    text-align: justify;\n    border-radius: 8px;\n    margin-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.post img {\n    width: 100%;\n    max-height: 200px;\n    object-fit: cover;\n    object-position: center;\n    align-items: center;\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n\n.post div {\n    padding: 15px;\n}\n\n.post .post-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.post .post-content-title {\n    font-size: 20px;\n    margin-top: 5px;\n    padding: 5px;\n    color: #C3ACD0;\n    background-color: #7743DB;\n    text-align: center;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.post .post-content-title a {\n    color: #fff;\n    min-height: 45px;\n    min-width: 45px;\n    padding: 20px;\n}\n\n.post .post-content-city {\n    font-size: 17px;\n    margin-top: 8px;\n}\n\n.post .post-content-rating {\n    font-size: 17px;\n    margin-top: 8px;\n    text-align: right;\n}\n\n.post .post-content-desc {\n    margin-top: 10px;\n    font-size: 13px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n@media screen and (max-width: 1150px) {\n    .content-post {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n@media screen and (max-width: 750px) {\n    .content-post {\n        grid-template-columns: 1fr;\n    }\n    .headline {\n        margin: 15px 30px 50px 30px;\n    }\n}\n\n.detail-content {\n    padding: 15px 35px;\n}\n\n.detailRestaurant {\n    padding: 20px 20px;\n    margin: 10px;\n    text-align: justify;\n    align-items: center;\n    border-radius: 8px;\n    margin-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.detailRestaurant h1 {\n    margin-bottom: 20px;\n    padding-left: 10px;\n    background-color: #7743DB;\n    color: white;\n    text-align: center;\n}\n\n.detailRestaurant .restaurant-image {\n    border-radius: 20px;\n}\n\n.detailRestaurant .restaurant-info {\n    padding-top: 20px;\n}\n\n.detailRestaurant .restaurant-info h2 {\n    margin-bottom: 15px;\n    padding-left: 10px;\n    background-color: #7743DB;\n    color: white;\n}\n\n.detailRestaurant .restaurant-menu {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n}\n\n.detailRestaurant .customer-review {\n    margin-bottom: 8px;\n}\n\n.detailRestaurant .customer-review p span {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 1040px) {\n    .detailRestaurant {\n        width: 600px;\n    }\n    .detailRestaurant img {\n        width: 600px;\n    }\n}\n\n@media screen and (max-width: 855px) {\n    .detailRestaurant {\n        width: 500px;\n    }\n    .detailRestaurant img {\n        width: 500px;\n    }\n}\n\n@media screen and (max-width: 740px) {\n    .detail-content {\n        padding: 0;\n    }\n}\n\n@media screen and (max-width: 680px) {\n    .detailRestaurant {\n        width: 400px;\n    }\n    .detailRestaurant img {\n        width: 400px;\n    }\n}\n\n@media screen and (max-width: 578px) {\n    .detailRestaurant {\n        width: 300px;\n    }\n    .detailRestaurant img {\n        width: 300px;\n    }\n    .detailRestaurant .restaurant-info h2 {\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width: 460px) {\n    .detailRestaurant {\n        width: 240px;\n        margin-left: -20px;\n    }\n    .detailRestaurant img {\n        width: 240px;\n    }\n    .detailRestaurant h1 {\n        font-size: 20px;\n    }\n    .detailRestaurant .restaurant-info h2 {\n        font-size: 15px;\n    }\n}\n\n.like {\n    width: 55px;\n    height: 55px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #db0000;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    border-radius: 50%;\n    border: 0;\n    font-size: 18px;\n    color: white;\n    cursor: pointer;\n}\n\nfooter {\n    padding: 2em;\n    color: white;\n    background-color: rgb(30, 40, 46);\n    text-align: center;\n    font-weight: bold;\n    text-decoration: none;\n}`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500&family=Poppins:wght@300;400;600&display=swap');\n* {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    list-style: none;\n}\n\nhtml,\nbody,\nmain {\n    width: 100%;\n    background-color: #FFFBF5;\n}\n\nbody {\n    font-family: 'Poppins';\n}\n\nheader {\n    height: 100vh;\n    width: 100%;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\"../public/images/heros/hero-image_4.jpg\");\n    background-size: cover;\n    background-position: center;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n\n.navbar {\n    width: 100%;\n    display: flex;\n    position: absolute;\n    padding: 50px;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n}\n\n.navbar a {\n    color: #fff;\n    cursor: pointer;\n    min-height: 45px;\n    min-width: 45px;\n}\n\n.navbar .logo {\n    font-size: 2em;\n    font-weight: bold;\n    text-transform: uppercase;\n    min-height: 45px;\n    min-width: 45px;\n    color: #F7EFE5;\n}\n\n.navbar .nav-list ul {\n    display: flex;\n}\n\n.navbar .nav-list ul li {\n    margin: 0 25px;\n    padding-top: 10px;\n    min-height: 45px;\n    min-width: 45px;\n}\n\n.navbar .nav-list ul li a {\n    padding: 20px;\n    color: #F7EFE5;\n}\n\n.navbar .nav-list ul li:hover {\n    font-weight: bold;\n}\n\n.navbar #hamburger {\n    position: absolute;\n    top: 50px;\n    right: 50px;\n    font-size: 30px;\n    display: none;\n    min-height: 45px;\n    min-width: 45px;\n    color: #F7EFE5;\n}\n\n@media screen and (max-width: 900px) {\n    .navbar {\n        padding: 0;\n    }\n    .navbar .logo {\n        position: absolute;\n        top: 50px;\n        left: 50px;\n    }\n    .navbar #hamburger {\n        display: block;\n    }\n    .nav-list {\n        position: absolute;\n        background-color: #FFFBF5;\n        backdrop-filter: blur(20px);\n        width: 100%;\n        height: 100vh;\n        top: 0;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: -100%;\n        transition: all 0.5s ease;\n    }\n    .nav-list.open {\n        margin-left: 0;\n    }\n    .nav-list ul {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .navbar .nav-list ul li {\n        margin: 25px 0;\n        font-size: 1.2em;\n    }\n    .navbar .nav-list ul li a {\n        color: #7743DB;\n        font-weight: bold;\n    }\n    .banner-text h1 {\n        font-size: 30px;\n        color: #F7EFE5;\n    }\n}\n\n.banner {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    height: 100vh;\n    text-align: center;\n    background-position: center;\n    background-size: cover;\n}\n\n.banner-text {\n    margin: 0 auto;\n    margin-top: 60px;\n    width: 70%;\n    font-size: 20px;\n    color: #fff;\n}\n\n.banner-text h1 {\n    padding-bottom: 15px;\n    color: #F7EFE5;\n}\n\n.banner-text a {\n    width: 150px;\n    text-align: center;\n    color: #fff;\n    padding: 15px 30px;\n    font-size: 15px;\n    font-weight: bold;\n    background: transparent;\n    border: 2px solid #20b3f1;\n    border-radius: 20px;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.banner-text a:hover {\n    background-color: #38BDF8;\n}\n\n@media screen and (max-width: 506px) {\n    .navbar .logo {\n        padding-right: 105px;\n    }\n}\n\n@media screen and (max-width: 389px) {\n    .navbar .logo {\n        font-size: 1.5em;\n        left: 20px;\n        top: 20px;\n    }\n    .navbar #hamburger {\n        right: 30px;\n        top: 20px;\n    }\n    .banner-text h1 {\n        font-size: 25px;\n    }\n}\n\n.content {\n    padding: 15px 35px;\n}\n\n.headline {\n    text-align: center;\n    padding-bottom: 20px;\n    margin: 30px 100px 50px 100px;\n    border-bottom: solid;\n    border-bottom-color: #C3ACD0;\n}\n\n.headline-title {\n    color: #7743DB;\n    font-size: 30px;\n    text-transform: uppercase;\n    padding-bottom: 20px;\n}\n\n.content-post {\n    padding: 0 30px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: #F7EFE5;\n}\n\n.content-post .post {\n    margin: 10px;\n    text-align: justify;\n    border-radius: 8px;\n    margin-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.post img {\n    width: 100%;\n    max-height: 200px;\n    object-fit: cover;\n    object-position: center;\n    align-items: center;\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n\n.post div {\n    padding: 15px;\n}\n\n.post .post-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.post .post-content-title {\n    font-size: 20px;\n    margin-top: 5px;\n    padding: 5px;\n    color: #C3ACD0;\n    background-color: #7743DB;\n    text-align: center;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.post .post-content-title a {\n    color: #fff;\n    min-height: 45px;\n    min-width: 45px;\n    padding: 20px;\n}\n\n.post .post-content-city {\n    font-size: 17px;\n    margin-top: 8px;\n}\n\n.post .post-content-rating {\n    font-size: 17px;\n    margin-top: 8px;\n    text-align: right;\n}\n\n.post .post-content-desc {\n    margin-top: 10px;\n    font-size: 13px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n@media screen and (max-width: 1150px) {\n    .content-post {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n@media screen and (max-width: 750px) {\n    .content-post {\n        grid-template-columns: 1fr;\n    }\n    .headline {\n        margin: 15px 30px 50px 30px;\n    }\n}\n\n.detail-content {\n    padding: 15px 35px;\n}\n\n.detailRestaurant {\n    padding: 20px 20px;\n    margin: 10px;\n    text-align: justify;\n    align-items: center;\n    border-radius: 8px;\n    margin-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.detailRestaurant h1 {\n    margin-bottom: 20px;\n    padding-left: 10px;\n    background-color: #7743DB;\n    color: white;\n    text-align: center;\n}\n\n.detailRestaurant .restaurant-image {\n    border-radius: 20px;\n}\n\n.detailRestaurant .restaurant-info {\n    padding-top: 20px;\n}\n\n.detailRestaurant .restaurant-info h2 {\n    margin-bottom: 15px;\n    padding-left: 10px;\n    background-color: #7743DB;\n    color: white;\n}\n\n.detailRestaurant .restaurant-menu {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n}\n\n.detailRestaurant .customer-review {\n    margin-bottom: 8px;\n}\n\n.detailRestaurant .customer-review p span {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 1040px) {\n    .detailRestaurant {\n        width: 600px;\n    }\n    .detailRestaurant img {\n        width: 600px;\n    }\n}\n\n@media screen and (max-width: 855px) {\n    .detailRestaurant {\n        width: 500px;\n    }\n    .detailRestaurant img {\n        width: 500px;\n    }\n}\n\n@media screen and (max-width: 740px) {\n    .detail-content {\n        padding: 0;\n    }\n}\n\n@media screen and (max-width: 680px) {\n    .detailRestaurant {\n        width: 400px;\n    }\n    .detailRestaurant img {\n        width: 400px;\n    }\n}\n\n@media screen and (max-width: 578px) {\n    .detailRestaurant {\n        width: 300px;\n    }\n    .detailRestaurant img {\n        width: 300px;\n    }\n    .detailRestaurant .restaurant-info h2 {\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width: 460px) {\n    .detailRestaurant {\n        width: 240px;\n        margin-left: -20px;\n    }\n    .detailRestaurant img {\n        width: 240px;\n    }\n    .detailRestaurant h1 {\n        font-size: 20px;\n    }\n    .detailRestaurant .restaurant-info h2 {\n        font-size: 15px;\n    }\n}\n\n.like {\n    width: 55px;\n    height: 55px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #db0000;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    border-radius: 50%;\n    border: 0;\n    font-size: 18px;\n    color: white;\n    cursor: pointer;\n}\n\nfooter {\n    padding: 2em;\n    color: white;\n    background-color: rgb(30, 40, 46);\n    text-align: center;\n    font-weight: bold;\n    text-decoration: none;\n}"],sourceRoot:""}]);const x=s},46:(n,A,t)=>{var e=t(379),a=t.n(e),i=t(795),o=t.n(i),r=t(569),p=t.n(r),d=t(565),s=t.n(d),l=t(216),x=t.n(l),B=t(589),C=t.n(B),g=t(756),I={};I.styleTagTransform=C(),I.setAttributes=s(),I.insert=p().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=x(),a()(g.Z,I),g.Z&&g.Z.locals&&g.Z.locals}},t={};function e(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return A[n](i,i.exports,e),i.exports}e.m=A,n=[],e.O=(A,t,a,i)=>{if(!t){var o=1/0;for(s=0;s<n.length;s++){for(var[t,a,i]=n[s],r=!0,p=0;p<t.length;p++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](t[p])))?t.splice(p--,1):(r=!1,i<o&&(o=i));if(r){n.splice(s--,1);var d=a();void 0!==d&&(A=d)}}return A}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[t,a,i]},e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var t in A)e.o(A,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var A=e.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var t=A.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!n;)n=t[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={209:0};e.O.j=A=>0===n[A];var A=(A,t)=>{var a,i,[o,r,p]=t,d=0;if(o.some((A=>0!==n[A]))){for(a in r)e.o(r,a)&&(e.m[a]=r[a]);if(p)var s=p(e)}for(A&&A(t);d<o.length;d++)i=o[d],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(A.bind(null,0)),t.push=A.bind(null,t.push.bind(t))})(),e.nc=void 0;var a=e.O(void 0,[192,586,193,268],(()=>e(359)));a=e.O(a)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map