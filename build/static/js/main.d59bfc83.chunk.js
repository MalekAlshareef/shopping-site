(this["webpackJsonpshopping-site"]=this["webpackJsonpshopping-site"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c.n(n),s=c(25),a=c.n(s),r=(c(48),c(39)),o=c(13),j=(c(49),c(50),c(40)),l=c.n(j),d=c(41),u=c.n(d),h=c(20),b=c(2),m=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(b.jsx)(m.Provider,{value:Object(n.useReducer)(t,c),children:i})},p=function(){return Object(n.useContext)(m)},g=c(32),x=(g.a.initializeApp({apiKey:"AIzaSyB8ieRWJbotRAIKJvqn-DjltXmclDj1w38",authDomain:"shopping-site-1c346.firebaseapp.com",projectId:"shopping-site-1c346",storageBucket:"shopping-site-1c346.appspot.com",messagingSenderId:"301839349555",appId:"1:301839349555:web:514b85a01006cb6cf5b046",measurementId:"G-51W6GMK5XM"}).firestore(),g.a.auth());function _(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,i=c.user;t[1];return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(b.jsxs)("div",{className:"header_search",children:[Object(b.jsx)("input",{className:"header_searchInput",type:"text"}),Object(b.jsx)(l.a,{className:"header_searchIcon"})]}),Object(b.jsxs)("div",{className:"header_nav",children:[Object(b.jsx)(h.b,{to:!i&&"/login",children:Object(b.jsxs)("div",{onClick:function(){i&&x.signOut()},className:"header_option",children:[Object(b.jsxs)("span",{className:"header_optionLineOn",children:["Hello, ",null===i||void 0===i?void 0:i.email]}),Object(b.jsx)("span",{className:"header_optionLineTw",children:i?"Sign Out":"Sign In"})]})}),Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOn",children:"Return"}),Object(b.jsx)("span",{className:"header_optionLineTw",children:"Orders"})]}),Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOn",children:"Your"}),Object(b.jsx)("span",{className:"header_optionLineTw",children:"Prime"})]}),Object(b.jsx)(h.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header_optionBasket",children:[Object(b.jsx)(u.a,{}),Object(b.jsx)("span",{className:"header_optionLineTw header_basketCount",children:n.length})]})})]})]})}c(62),c(63);function f(e){var t=e.id,c=e.title,n=e.image,i=e.price,s=e.rating,a=p(),r=Object(o.a)(a,2),j=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product_info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product_price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:i})]}),Object(b.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(b.jsx)("img",{src:n}),Object(b.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:i,rating:s}})},children:"Add to Basket"})]})}function v(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home_container",children:[Object(b.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(f,{id:1,title:"The Lean Startup",price:29.99,image:"https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg",rating:3}),Object(b.jsx)(f,{id:2,title:"Ryzen 7 Processor",price:280.99,image:"https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg",rating:3})]}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(f,{id:3,title:"Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone",price:999.99,image:"https://m.media-amazon.com/images/I/51rQZN9RahL._AC_SL1000_.jpg",rating:4}),Object(b.jsx)(f,{id:4,title:"Sunny Days Entertainment Large Police Car \u2013 Lights and Sounds Vehicle with Motorized Drive and Soft Grip Tires",price:19.99,image:"https://m.media-amazon.com/images/I/912ZSagjzAL._AC_SL1500_.jpg",rating:3}),Object(b.jsx)(f,{id:5,title:"JOYIN 10 in 1 Die-cast Police Patrol Rescue Truck Mini Police Vehicles Truck Toy Set in Carrier Truck",price:29.99,image:"https://m.media-amazon.com/images/I/81JlUXLcxnL._AC_SL1500_.jpg",rating:5})]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)(f,{id:6,title:"Gaming Monitor 32in",price:349.99,image:"https://m.media-amazon.com/images/I/71eZx8RnyoL._AC_SL1500_.jpg",rating:4})})]})})}var N=c(10);c(64),c(65);function k(e){var t=e.id,c=e.image,n=e.title,i=e.price,s=e.rating,a=p(),r=Object(o.a)(a,2),j=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct_image",src:c}),Object(b.jsxs)("div",{className:"checkoutProduct_info",children:[Object(b.jsx)("p",{className:"checkoutProduct_title",children:n}),Object(b.jsxs)("p",{className:"checkoutProduct_price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:i})]}),Object(b.jsx)("div",{className:"checkoutProduct_rating",children:Array(s).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(b.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})}c(66);var S=c(42),C=c.n(S),A=c(33),y=c(22),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},L=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(A.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ${action.id}) as its not in the basket"),Object(y.a)(Object(y.a)({},e),{},{basket:n});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});default:return e}};function P(){var e=p(),t=Object(o.a)(e,2),c=t[0].basket;t[1];return Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(C.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:T(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})}function E(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,i=c.user;t[1];return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout_left",children:[Object(b.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Hello, ",null===i||void 0===i?void 0:i.email]}),Object(b.jsx)("h2",{className:"checkout_title",children:"Your shopping Basket"}),n.map((function(e){return Object(b.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(b.jsx)("div",{className:"checkout_right",children:Object(b.jsx)(P,{})})]})}c(68);function I(){var e=Object(N.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(""),r=Object(o.a)(a,2),j=r[0],l=r[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(b.jsxs)("div",{className:"login_container",children:[Object(b.jsx)("h1",{children:"Sign-in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{type:"password",value:j,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),x.signInWithEmailAndPassword(i,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By signing-in you agree to our terms of use."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(i,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Create an Account"})]})]})}var w=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){x.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{path:"/login",children:Object(b.jsx)(I,{})}),Object(b.jsxs)(N.a,{path:"/checkout",children:[Object(b.jsx)(_,{}),Object(b.jsx)(E,{})]}),Object(b.jsxs)(N.a,{path:"/",children:[Object(b.jsx)(_,{}),Object(b.jsx)(v,{})]})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{basket:[],user:null},reducer:L,children:Object(b.jsx)(w,{})})}),document.getElementById("root")),B()}},[[70,1,2]]]);
//# sourceMappingURL=main.d59bfc83.chunk.js.map