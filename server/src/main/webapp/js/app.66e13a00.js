(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/WenjunBookstoreTransact/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"007e":function(t,e){},"043a":function(t,e,a){"use strict";a("f39f")},"0447":function(t,e,a){t.exports=a.p+"img/Call Me by Your Name.1495706b.png"},"04ba":function(t,e,a){t.exports=a.p+"img/Odyssey.e9cdfeae.png"},"07b1":function(t,e,a){t.exports=a.p+"img/History Smashers-The Titanic.0e0c730d.png"},"0ca6":function(t,e,a){},1844:function(t,e,a){},"1ea8":function(t,e,a){t.exports=a.p+"img/American History.800f0285.png"},"28be":function(t,e,a){},"2a8f":function(t,e,a){},"310b":function(t,e,a){t.exports=a.p+"img/Gone Girl.7311635a.png"},3996:function(t,e,a){"use strict";a("8f94")},"43f1":function(t,e,a){var r={"./1984.png":"8bef","./A Brief History of Earth.png":"64a3","./American History.png":"1ea8","./Anna Karenina.png":"8227","./Call Me by Your Name.png":"0447","./Children of Time.png":"b800","./Da Vinci Code.png":"b204","./Ender's Game.png":"90cb","./Gone Girl.png":"310b","./History Smashers-Pearl Harbor.png":"d1d5","./History Smashers-The Titanic.png":"07b1","./Home Again.png":"f702","./I, Robot.png":"b936","./Jane Eyre.png":"8d9d","./Little Women.png":"645d","./Murder on the Orient Express.png":"7989","./Odyssey.png":"04ba","./One Last Stop.png":"5e99","./Pride and Prejudice.png":"78b9","./Ringworld.png":"6d47","./Snow Crash.png":"61c7","./The Bride Test.png":"5fc6","./The Fifth Season.png":"634f","./The Girl with the Dragon Tattoo.png":"8e01","./The Great Gatsby.png":"f187","./The Moon Stone.png":"e6c2","./The Notebook.png":"915a","./The Three-Body Problem.png":"873b","./The Wish.png":"b7fe","./Timelines from Black History.png":"c7cc","./Vietnam-A History of the War.png":"6487"};function o(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id="43f1"},4680:function(t,e,a){},5028:function(t,e,a){"use strict";a("2a8f")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view",{key:t.$route.fullPath,attrs:{id:"router-view"}}),a("app-footer")],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"container"},[r("section",{staticClass:"header-dropdown-part"},[r("header-dropdown-menu")],1),r("section",{staticClass:"text-logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"img-style",attrs:{src:a("8fd1"),alt:"Book Galaxy Logo"}})])],1),r("section",{staticClass:"login-cart-and-search-bar"},[r("button",{staticClass:"button cart"},[r("router-link",{attrs:{to:"/cart"}},[r("span",{staticClass:"fa-stack"},[r("i",{staticClass:"fas fa-shopping-cart fa-stack-1x cart-icon-style"},[r("strong",{staticClass:"cart-number-style"},[t._v(" "+t._s(t.$store.state.cart.numberOfItems)+" ")])])])])],1),t._m(0),t._m(1),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button login login-style"},[a("strong",{staticClass:"top-text;"},[t._v(" WH ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"search-form",attrs:{action:"category.html"}},[a("input",{staticClass:"search-bar",attrs:{type:"text",placeholder:"Search any book, album, etc"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"search-button",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-search submit-style"})])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-dropdown"},[t._m(0),a("ul",[t._l(t.$store.state.categories,(function(e){return[a("li",{key:e.categoryId},[a("router-link",{staticClass:"header-dropdown unselected-link",attrs:{tabindex:"1",to:{name:"category",params:{name:e.name}}}},[t._v(" "+t._s(e.name)+" ")])],1)]}))],2)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button categories-button",staticStyle:{float:"left"}},[a("i",{staticClass:"fas fa-caret-down",staticStyle:{float:"left"}}),t._v(" Categories ")])}],u={name:"HeaderDropdownMenu"},m=u,d=(a("9118"),a("2877")),p=Object(d["a"])(m,c,l,!1,null,"635bb29d",null),f=p.exports,h={name:"AppHeader",components:{HeaderDropdownMenu:f},component:{HeaderDropdownMenu:f}},b=h,g=(a("043a"),Object(d["a"])(b,n,i,!1,null,"cf457606",null)),v=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"container"},[t._m(0),a("section",{staticClass:"links"},[a("router-link",{attrs:{to:"/"}},[t._v("about")]),a("router-link",{attrs:{to:"/"}},[t._v("contact")]),a("router-link",{attrs:{to:"/"}},[t._v("directions")])],1),a("section",{staticClass:"links social-media-icons"},[a("router-link",{staticClass:"social-media-icons-link",attrs:{to:"/"}},[a("i",{staticClass:"fab fa-facebook-square"})]),a("router-link",{staticClass:"social-media-icons-link",attrs:{to:"/"}},[a("i",{staticClass:"fab fa-instagram"})]),a("router-link",{staticClass:"social-media-icons-link",attrs:{to:"/"}},[a("i",{staticClass:"fab fa-twitter"})])],1)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"copyright"},[a("p",[t._v("2021 Book Galaxy by Wenjun Han")])])}],C={name:"AppFooter"},k=C,$=(a("ba73"),Object(d["a"])(k,_,y,!1,null,"56ca1276",null)),x=$.exports,E={name:"App",components:{AppHeader:v,AppFooter:x},created:function(){this.$store.dispatch("fetchCategories")}},S=E,T=Object(d["a"])(S,o,s,!1,null,null,null),O=T.exports,w=a("8c4f"),D=a("bb51"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-page"},[a("category-nav"),a("category-book-list")],1)},A=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"category-nav"},[a("ul",{staticClass:"category-buttons unselected-category-button"},[t._l(t.$store.state.categories,(function(e){return[t.$store.state.selectedCategoryName===e.name?a("li",{key:e.categoryId,staticClass:"button category-buttons selected-category-button",attrs:{id:"button selected-category-button"}},[t._v(" "+t._s(e.name)+" ")]):a("li",{key:e.categoryId},[a("router-link",{staticClass:"button category-buttons unselected-category-button",attrs:{tabindex:"1",to:{name:"category",params:{name:e.name}}}},[t._v(" "+t._s(e.name)+" ")])],1)]}))],2)])},q=[],R={name:"CategoryNav"},j=R,P=(a("5028"),Object(d["a"])(j,I,q,!1,null,"502caa8a",null)),L=P.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[t._l(t.$store.state.selectedCategoryBooks,(function(t){return[a("li",{key:t.bookId},[a("category-book-list-item",{attrs:{book:t}})],1)]}))],2)},M=[],G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"book-box"},[r("div",{staticClass:"book-image"},[r("img",{staticStyle:{height:"200px"},attrs:{src:a("43f1")("./"+t.bookImageFileName(t.book)),alt:t.book.title}})]),r("div",{staticClass:"book-title"},[t._v(t._s(t.book.title))]),r("div",{staticClass:"book-author"},[t._v(t._s(t.book.author))]),r("div",{staticClass:"book-price"},[t._v(t._s(t._f("asDollarsAndCents")(t.book.price)))]),r("button",{staticClass:"button add-to-cart",on:{click:function(e){return t.addToCart(t.book)}}},[t._v(" Add to Cart ")]),t.book.isPublic?r("button",{staticClass:"button read-now"},[t._v("Read Now")]):t._e()])},H=[],F={name:"categoryBookListItem",props:{book:{type:Object,required:!0}},methods:{addToCart(t){this.$store.dispatch("addToCart",t)},bookImageFileName(t){let e=t.title;return e+".png"}}},Y=F,z=(a("8527"),Object(d["a"])(Y,G,H,!1,null,"4cb301e8",null)),J=z.exports,W={name:"CategoryBookList",components:{CategoryBookListItem:J}},U=W,K=(a("58b8"),Object(d["a"])(U,B,M,!1,null,"7e05d13a",null)),V=K.exports,Q={name:"category",components:{CategoryNav:L,CategoryBookList:V},data:function(){return{cateName:this.cateName}},created:function(){const t=this;this.$store.dispatch("selectCategory",this.$route.params.name),this.$store.dispatch("fetchSelectedCategoryBooks").catch((function(){t.$router.push("/404")}))}},X=Q,Z=(a("93b1"),Object(d["a"])(X,N,A,!1,null,"4acc54ee",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-page"},[0===t.$store.state.cart.numberOfItems?a("section",{staticClass:"empty-cart-page"},[a("div",{staticStyle:{padding:"3em 1.5em"}},[t._v("Your cart is empty.")]),a("router-link",{attrs:{tabindex:"1",to:{name:"category",params:{name:t.$store.state.selectedCategoryName||"Classics"}}}},[a("button",{staticClass:"button continue-shop-buttons"},[t._v("Continue Shopping")])])],1):a("section",{staticClass:"non-empty-cart-page"},[1===t.$store.state.cart.numberOfItems?a("p",[t._v(" Your cart has 1 book in it. ")]):a("p",[t._v(" Your cart has "+t._s(t.$store.state.cart.numberOfItems)+" books in it. ")]),a("p",[t._v(" Your total amount is "+t._s(t._f("asDollarsAndCents")(t.$store.state.cart.subtotal))+". ")]),a("div",{staticClass:"cart-buttons"},[a("router-link",{attrs:{tabindex:"1",to:{name:"category",params:{name:t.$store.state.selectedCategoryName||"Classics"}}}},[a("button",{staticClass:"button continue-shop-buttons"},[t._v(" Continue Shopping ")])]),a("router-link",{attrs:{to:"../Checkout"}},[a("button",{staticClass:"button checkout-button"},[t._v("Checkout")])])],1),a("cart-table"),a("button",{staticClass:"button link-like-button",on:{click:function(e){return t.clearCart()}}},[t._v(" Clear the Cart")])],1)])},at=[],rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-table"},[r("ul",[t._m(0),t._l(t.$store.state.cart.items,(function(e){return r("li",{key:e.book.bookId},[r("div",{staticClass:"cart-book-image"},[r("img",{staticStyle:{width:"100px",height:"auto"},attrs:{src:a("43f1")("./"+t.bookImageFileName(e.book)),alt:e.book.title}})]),r("div",{staticClass:"cart-book-title"},[t._v(t._s(e.book.title))]),r("div",{staticClass:"cart-book-price"},[t._v(" "+t._s(t._f("asDollarsAndCents")(e.book.price))+" ")]),r("div",{staticClass:"cart-book-quantity"},[r("button",{staticClass:"icon-button dec-button",on:{click:function(a){return t.updateCart(e.book,e.quantity-1)}}},[r("i",{staticClass:"fas fa-minus-circle"})]),r("span",{staticClass:"row-book-quantity"},[t._v(t._s(e.quantity))]),r("button",{staticClass:"icon-button inc-button",on:{click:function(a){return t.updateCart(e.book,e.quantity+1)}}},[r("i",{staticClass:"fas fa-plus-circle"})])]),r("div",{staticClass:"subtotal"},[t._v(" "+t._s(t._f("asDollarsAndCents")(e.quantity*e.book.price))+" ")])])})),r("div",{staticClass:"row-sep"}),r("li",[r("div",{staticClass:"cart-heading-book"},[t._v("Total")]),r("div",{staticClass:"cart-book-quantity",staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.$store.state.cart.numberOfItems)+" ")]),r("div",{staticClass:"cart-book-price"},[t._v(" "+t._s(t._f("asDollarsAndCents")(t.$store.state.cart.subtotal))+" ")])])],2)])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"cart-heading"},[a("div",{staticClass:"cart-heading-book"},[t._v("Book")]),a("div",{staticClass:"cart-heading-quantity"},[t._v("Quantity")]),a("div",{staticClass:"cart-heading-subtotal"},[t._v("Amount")])])}],st={name:"CartTable",methods:{bookImageFileName(t){let e=t.title;return e+".png"},updateCart(t,e){this.$store.dispatch("updateCart",{book:t,quantity:e})}}},nt=st,it=(a("f83b"),Object(d["a"])(nt,rt,ot,!1,null,"785f533d",null)),ct=it.exports,lt={name:"Cart",components:{CartTable:ct},methods:{clearCart(){this.$store.dispatch("clearCart")}}},ut=lt,mt=(a("3996"),Object(d["a"])(ut,et,at,!1,null,"d53e45fc",null)),dt=mt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-page"},[0===t.$store.state.cart.numberOfItems?a("section",{staticClass:"empty-cart-page"},[a("div",{staticStyle:{padding:"3em 1.5em",display:"flex","flex-direction":"column"}},[a("p",{staticStyle:{"padding-bottom":"3em"}},[t._v(" Your cart is empty. Please add items to your cart to checkout. ")]),a("router-link",{attrs:{tabindex:"1",to:{name:"category",params:{name:t.$store.state.selectedCategoryName||"Classics"}}}},[a("button",{staticClass:"button continue-shop-buttons"},[t._v(" Continue Shopping ")])])],1)]):t._e(),t.cart.empty?t._e():a("section",{staticClass:"checkout-page-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submitOrder.apply(null,arguments)}}},[a("div",[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{lazy:!0}}],attrs:{type:"text",size:"20",id:"name",name:"name"},domProps:{value:t.$v.name.$model},on:{change:function(e){return t.$set(t.$v.name,"$model",e.target.value)}}})]),t.$v.name.$error?[t.$v.name.required?t.$v.name.minLength?t.$v.name.maxLength?a("span",{staticClass:"error"},[t._v(" An unexpected error occurred. ")]):a("span",{staticClass:"error"},[t._v(" Name can have at most "+t._s(t.$v.name.$params.maxLength.max)+" letters. ")]):a("span",{staticClass:"error"},[t._v(" Name must have at least "+t._s(t.$v.name.$params.minLength.min)+" letters. ")]):a("span",{staticClass:"error"},[t._v("Name is required")])]:t._e(),a("div",[a("label",{attrs:{for:"address"}},[t._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.address.$model,expression:"$v.address.$model",modifiers:{lazy:!0}}],staticClass:"textField",attrs:{type:"text",size:"20",id:"address",name:"address"},domProps:{value:t.$v.address.$model},on:{change:function(e){return t.$set(t.$v.address,"$model",e.target.value)}}})]),t.$v.address.$error?[t.$v.address.required?t.$v.address.minLength?t.$v.address.maxLength?a("span",{staticClass:"error"},[t._v(" An unexpected error occurred. ")]):a("span",{staticClass:"error"},[t._v(" Address can have at most "+t._s(t.$v.name.$params.maxLength.max)+" letters. ")]):a("span",{staticClass:"error"},[t._v(" Address must have at least "+t._s(t.$v.name.$params.minLength.min)+" letters. ")]):a("span",{staticClass:"error"},[t._v("Address is required")])]:t._e(),a("div",[a("label",{attrs:{for:"phone"}},[t._v("Phone")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.phone.$model,expression:"$v.phone.$model",modifiers:{lazy:!0}}],staticClass:"textField",attrs:{type:"text",size:"20",id:"phone",name:"phone"},domProps:{value:t.$v.phone.$model},on:{change:function(e){return t.$set(t.$v.phone,"$model",e.target.value)}}})]),t.$v.phone.$error?[t.$v.phone.required?t.$v.phone.phone?t._e():a("span",{staticClass:"error"},[t._v("Please enter a valid phone number")]):a("span",{staticClass:"error"},[t._v("Phone is required")])]:t._e(),a("div",[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.email.$model,expression:"$v.email.$model",modifiers:{lazy:!0}}],staticClass:"textField",attrs:{type:"text",size:"20",id:"email",name:"email"},domProps:{value:t.$v.email.$model},on:{change:function(e){return t.$set(t.$v.email,"$model",e.target.value)}}})]),t.$v.email.$error?[t.$v.email.required?t.$v.email.email?t._e():a("span",{staticClass:"error"},[t._v("Please enter a valid email address")]):a("span",{staticClass:"error"},[t._v("Email is required")])]:t._e(),a("div",[a("label",{attrs:{for:"ccNumber"}},[t._v("Credit card")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.ccNumber.$model,expression:"$v.ccNumber.$model",modifiers:{lazy:!0}}],staticClass:"textField",attrs:{type:"text",size:"20",id:"ccNumber",name:"ccNumber"},domProps:{value:t.$v.ccNumber.$model},on:{change:function(e){return t.$set(t.$v.ccNumber,"$model",e.target.value)}}})]),t.$v.ccNumber.$error?[t.$v.ccNumber.required?t.$v.ccNumber.creditCard?t._e():a("span",{staticClass:"error"},[t._v("Please enter a valid credit card number")]):a("span",{staticClass:"error"},[t._v("Credit card number is required")])]:t._e(),a("div",[a("label",[t._v("Exp Date")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.ccExpiryMonth,expression:"ccExpiryMonth"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.ccExpiryMonth=e.target.multiple?a:a[0]}}},t._l(t.months,(function(e,r){return a("option",{key:r,domProps:{value:r+1}},[t._v(" "+t._s(e)+" ("+t._s(r+1)+") ")])})),0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.ccExpiryYear,expression:"ccExpiryYear"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.ccExpiryYear=e.target.multiple?a:a[0]}}},t._l(15,(function(e,r){return a("option",{key:r,domProps:{value:2020+r+1}},[t._v(" "+t._s(t.yearFrom(r))+" ")])})),0)]),a("input",{staticClass:"button submit-button",attrs:{type:"submit",name:"submit",disabled:"PENDING"==t.checkoutStatus,value:"Complete Purchase"}})],2),a("section",{staticClass:"purchase-info-box"},[a("section",[a("div",{staticClass:"total-charge-box"},[a("p",[t._v(" Your credit card will be charged "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.cart.subtotal+t.cart.surcharge)))]),t._v(" in total. ")])]),a("div",[a("ul",[a("li",[t._v(" Subtotal: "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.cart.subtotal)))])]),a("li",[t._v(" Surcharge: "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.cart.surcharge)))])]),t._m(0),a("li",[t._v(" Total: "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.cart.subtotal+t.cart.surcharge)))])])])])]),a("section",{directives:[{name:"show",rawName:"v-show",value:""!=t.checkoutStatus,expression:"checkoutStatus != ''"}],staticClass:"checkoutStatusBox"},["ERROR"==t.checkoutStatus?a("div",[t._v(" Error: Please fix the problems above and try again. ")]):"PENDING"==t.checkoutStatus?a("div",[t._v("Processing...")]):"OK"==t.checkoutStatus?a("div",[t._v("Order placed...")]):a("div",[t._v(" An unexpected error occurred, please try again. ")])])])])])},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticStyle:{display:"flex","flex-direction":"row"}},[a("div",{staticClass:"row-sep-transparent"}),a("div",{staticClass:"row-sep-visible"})])}],ht=a("b5ae"),bt=a("7a9e"),gt=a.n(bt),vt=a("6d96"),_t=a.n(vt);const yt=t=>_t()(t,"en-US"),Ct=t=>gt()(t);var kt={data(){return{name:"",address:"",phone:"",email:"",ccNumber:"",ccExpiryMonth:(new Date).getMonth()+1,ccExpiryYear:(new Date).getFullYear(),checkoutStatus:""}},validations:{name:{required:ht["required"],minLength:Object(ht["minLength"])(4),maxLength:Object(ht["maxLength"])(45)},phone:{required:ht["required"],phone:yt},ccNumber:{required:ht["required"],creditCard:Ct},address:{required:ht["required"],minLength:Object(ht["minLength"])(4),maxLength:Object(ht["maxLength"])(45)},email:{required:ht["required"],email:ht["email"]}},computed:{cart(){return this.$store.state.cart},months(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}},methods:{submitOrder(){console.log("Submit order"),this.$v.$touch(),this.$v.$invalid?this.checkoutStatus="ERROR":(this.checkoutStatus="PENDING",setTimeout(()=>{this.$store.dispatch("placeOrder",{name:this.name,address:this.address,phone:this.phone,email:this.email,ccNumber:this.ccNumber,ccExpiryMonth:this.ccExpiryMonth,ccExpiryYear:this.ccExpiryYear}).then(()=>{this.checkoutStatus="OK",this.$router.push({name:"confirmation"})}).catch(t=>{this.checkoutStatus="SERVER_ERROR",console.log("Error placing order",t)})},1e3))},yearFrom(t){return(new Date).getFullYear()+t}}},$t=kt,xt=(a("89f6"),Object(d["a"])($t,pt,ft,!1,null,"c7eb3a22",null)),Et=xt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"confirmation-page"},[a("ul",[t._m(0),a("li",[t._v(" Confirmation #: "),a("b",[t._v(t._s(t.$store.state.orderDetails.order.confirmationNumber))])]),a("li",[t._v("Order Time: "+t._s(t.orderTime))])]),t._m(1),a("confirmation-table"),a("div",[a("ul",{staticClass:"customer-info"},[a("li",[t._v(" Subtotal: "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.$store.state.orderDetails.order.amount-t.$store.state.cart.surcharge)))])]),a("li",[t._v(" Surcharge: "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.$store.state.cart.surcharge)))])]),a("li",[t._v(" Total: "),a("b",[t._v(t._s(t._f("asDollarsAndCents")(t.$store.state.orderDetails.order.amount)))])])])]),a("ul",{staticClass:"customer-info"},[t._m(2),a("li",[t._v(" "+t._s(t.$store.state.orderDetails.customer.customerName)+" ")]),a("li",[t._v(t._s(t.$store.state.orderDetails.customer.address))]),a("li",[t._v(t._s(t.$store.state.orderDetails.customer.email))]),a("li",[t._v(t._s(t.$store.state.orderDetails.customer.phone))]),a("li",[t._v(t._s(t.hideCCNumber)+"("+t._s(t.ccExpMonth)+" - "+t._s(t.ccExpYear)+")")])]),a("div",{attrs:{id:"customerInfo"}})],1)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"large-text"},[a("b",[t._v("Thank you for your order!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchase-summary"},[a("b",[t._v("Purchase Summary")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"purchase-summary"},[a("b",[t._v("Customer Information")])])}],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),t._l(this.$store.state.orderDetails.lineItems,(function(e,r){return a("tr",{key:e.productId},[a("td",[t._v(" "+t._s(t.$store.state.orderDetails.books[r].title)+" ")]),a("td",[t._v(t._s(e.quantity))]),a("td",[t._v(" "+t._s(t._f("asDollarsAndCents")(t.$store.state.orderDetails.books[r].price))+" ")])])}))],2)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"table-title"},[t._v("Book Title")]),a("td",{staticClass:"table-title"},[t._v("Quantity")]),a("td",{staticClass:"table-title"},[t._v("Price")])])}],Dt={name:"ConfirmationTable"},Nt=Dt,At=(a("ad1b"),Object(d["a"])(Nt,Ot,wt,!1,null,"10f11852",null)),It=At.exports,qt={name:"Confirmation",components:{ConfirmationTable:It},computed:{hideCCNumber(){let t=this.$store.state.orderDetails.customer.ccNumber,e="**** **** ****"+t.substr(t.length-4,4);return e},ccExpYear(){let t=this.$store.state.orderDetails.customer.ccExpDate,e=new Date(t),a=e.getUTCFullYear();return a},ccExpMonth(){let t=this.$store.state.orderDetails.customer.ccExpDate,e=new Date(t),a=e.getMonth()+1;return a},orderTime(){let t=this.$store.state.orderDetails.order.dateCreated,e=new Date(t);return e}}},Rt=qt,jt=(a("739c"),Object(d["a"])(Rt,St,Tt,!1,null,"6eb27902",null)),Pt=jt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notfound-page"},[a("p",[t._v("We're sorry that page cannot be found on this site.")]),a("router-link",{attrs:{to:{name:"home"}}},[a("button",{staticClass:"continue-button"},[t._v("Continue")])])],1)},Bt=[],Mt={name:"NotFound"},Gt=Mt,Ht=(a("db78"),Object(d["a"])(Gt,Lt,Bt,!1,null,"759931dc",null)),Ft=Ht.exports;r["a"].use(w["a"]);var Yt=new w["a"]({mode:"history",base:"/WenjunBookstoreTransact/",routes:[{path:"/",name:"home",component:D["default"],alias:["/home","/index.html"]},{path:"/category/:name",name:"category",component:tt,props:!0},{path:"/category",redirect:"category/Classics"},{path:"/cart",name:"cart",component:dt},{path:"*",component:Ft},{path:"/checkout",name:"checkout",component:Et},{path:"/confirmation",name:"confirmation",component:Pt}]}),zt=(a("aede"),a("2f62"));const Jt={"http:":":8080","https:":":8443"},Wt=location.protocol+"//"+location.hostname+Jt[location.protocol]+"/WenjunBookstoreTransact/api";var Ut={fetchCategories(){const t=location.protocol+"//"+location.hostname+Jt[location.protocol]+"/WenjunBookstoreTransact/api/categories";return console.log("GET from "+t),fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok.")}).catch(t=>{console.log("Error fetching category data",t)})},fetchSelectedCategoryBooks(t){const e=location.protocol+"//"+location.hostname+Jt[location.protocol]+"/WenjunBookstoreTransact/api/categories/name/"+t+"/books";return console.log("GET from "+e),fetch(e).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok.")}).catch(t=>{throw console.log("Error fetching category data",t),t})},placeOrder(t){return console.log("POSTing to "+Wt+"/orders"),fetch(Wt+"/orders",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok.")})}};class Kt{constructor(t){this._book=t,this._quantity=1}get book(){return this._book}get quantity(){return this._quantity}set quantity(t){this._quantity=t}get bookId(){return this._book.bookId}get price(){return this._book.price}get total(){return this._quantity*this.price}increment(){this._quantity++}decrement(){this._quantity>0&&this._quantity--}toJSON(){return{book:this._book,quantity:this._quantity}}}class Vt{constructor(){this._items=[]}get numberOfItems(){return this._items.reduce((t,e)=>t+e.quantity,0)}get empty(){return this._items.length<=0}get subtotal(){return this._items.reduce((t,e)=>t+e.book.price*e.quantity,0)}get total(){return this.subtotal+this.surcharge}get surcharge(){return 500}get items(){return Vt.frozenArray(this._items)}clear(){this._items=[]}addItem(t,e=1){let a=this._items.find(e=>e.book.bookId==t.bookId);if(a)a.quantity++;else{let a=new Kt(t);a.quantity=e,this._items.push(a)}}update(t,e){if(e<0||e>99)return;let a=this._items.findIndex(e=>e.book.bookId==t.bookId);-1!==a&&(0!==e?this._items[a].quantity=e:this._items.splice(a,1))}toJSON(){return{items:Vt.frozenArray(this._items)}}static frozenArray(t){let e=[];return Object.keys(t).forEach(a=>{e.push(t[a])}),Object.freeze(e)}}r["a"].use(zt["a"]);const Qt="cart",Xt="orderDetail";var Zt=new zt["a"].Store({state:{categories:[],selectedCategoryName:"",selectedCategoryBooks:[],orderDetails:null,cart:new Vt},mutations:{SET_CATEGORIES(t,e){t.categories=e},SELECT_CATEGORY(t,e){t.selectedCategoryName=e},SET_SELECTED_CATEGORY_BOOKS(t,e){t.selectedCategoryBooks=e},ADD_TO_CART(t,e){t.cart.addItem(e,1),localStorage.setItem(Qt,JSON.stringify(this.state.cart))},UPDATE_CART(t,{book:e,quantity:a}){t.cart.update(e,a),localStorage.setItem(Qt,JSON.stringify(this.state.cart))},CLEAR_CART(t){t.cart.clear(),localStorage.setItem(Qt,JSON.stringify(this.state.cart))},SET_CART(t,e){localStorage.setItem(Qt,JSON.stringify(e));let a=new Vt;e.items.forEach(t=>{a.addItem(t.book,t.quantity)}),t.cart=a},CLEAR_ORDER_DETAILS(t){sessionStorage.removeItem(Xt),t.orderDetails=null},SET_ORDER_DETAILS(t,e){t.orderDetails=e,sessionStorage.setItem(Xt,JSON.stringify(e))}},actions:{fetchCategories(t){Ut.fetchCategories().then(e=>{console.log("Data: ",e),t.commit("SET_CATEGORIES",e)}).catch(t=>{console.log("Error: "+t)})},fetchSelectedCategoryBooks(t){return Ut.fetchSelectedCategoryBooks(t.state.selectedCategoryName).then(e=>{console.log("Data: "+e),t.commit("SET_SELECTED_CATEGORY_BOOKS",e)}).catch(t=>{throw console.log("Error: "+t),t})},addToCart(t,e){t.commit("ADD_TO_CART",e)},updateCart(t,{book:e,quantity:a}){t.commit("UPDATE_CART",{book:e,quantity:a})},selectCategory(t,e){t.commit("SELECT_CATEGORY",e)},clearCart(t){t.commit("CLEAR_CART")},placeOrder({commit:t,state:e},a){return t("CLEAR_ORDER_DETAILS"),Ut.placeOrder({cart:e.cart,customerForm:a}).then(e=>{t("CLEAR_CART"),t("SET_ORDER_DETAILS",e)})}}}),te=a("1dce"),ee=a.n(te),ae=a("558c"),re=a.n(ae);r["a"].config.productionTip=!1,r["a"].use(ee.a),r["a"].use(re.a),new r["a"]({router:Yt,store:Zt,render:function(t){return t(O)},created(){const t=localStorage.getItem(Qt);if(t){const e=JSON.parse(t);this.$store.commit("SET_CART",e)}const e=sessionStorage.getItem(Xt);if(e){const t=JSON.parse(e);this.$store.commit("SET_ORDER_DETAILS",t)}const a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});r["a"].filter("asDollarsAndCents",(function(t){return a.format(t/100)}))}}).$mount("#app")},"58b8":function(t,e,a){"use strict";a("a71d")},"5e99":function(t,e,a){t.exports=a.p+"img/One Last Stop.494e5c26.png"},"5fc6":function(t,e,a){t.exports=a.p+"img/The Bride Test.1d529e56.png"},"61c7":function(t,e,a){t.exports=a.p+"img/Snow Crash.53cb5fb3.png"},"634f":function(t,e,a){t.exports=a.p+"img/The Fifth Season.b0f2310a.png"},"645d":function(t,e,a){t.exports=a.p+"img/Little Women.1dc23788.png"},6487:function(t,e,a){t.exports=a.p+"img/Vietnam-A History of the War.b3d6c866.png"},"64a3":function(t,e,a){t.exports=a.p+"img/A Brief History of Earth.d34a399b.png"},"69f0":function(t,e,a){},"6d47":function(t,e,a){t.exports=a.p+"img/Ringworld.20d67e13.png"},"739c":function(t,e,a){"use strict";a("69f0")},"78b9":function(t,e,a){t.exports=a.p+"img/Pride and Prejudice.4a6b4226.png"},7989:function(t,e,a){t.exports=a.p+"img/Murder on the Orient Express.f4483328.png"},"7ad4":function(t,e,a){"use strict";var r=a("007e"),o=a.n(r);e["default"]=o.a},"80d5":function(t,e,a){},8227:function(t,e,a){t.exports=a.p+"img/Anna Karenina.e526a933.png"},8527:function(t,e,a){"use strict";a("bc6b")},8589:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",[r("img",{attrs:{src:a("cb9b"),alt:"Hero_img_LOTR",width:"100%",height:"auto"}}),r("router-link",{attrs:{to:"../category/Classics"}},[r("button",{staticClass:"shop-book-button"},[t._v("Shop Book")])]),r("p",{staticClass:"welcome-text"},[t._v("Start your journey with us")])],1)])},o=[]},"873b":function(t,e,a){t.exports=a.p+"img/The Three-Body Problem.06e6b69d.png"},"89f6":function(t,e,a){"use strict";a("28be")},"8bef":function(t,e,a){t.exports=a.p+"img/1984.7fbcb38a.png"},"8d9d":function(t,e,a){t.exports=a.p+"img/Jane Eyre.9e5e07af.png"},"8e01":function(t,e,a){t.exports=a.p+"img/The Girl with the Dragon Tattoo.b12142e9.png"},"8f94":function(t,e,a){},"8fd1":function(t,e,a){t.exports=a.p+"img/Bookshop_logo.fb10c580.png"},"90cb":function(t,e,a){t.exports=a.p+"img/Ender's Game.343021e9.png"},9118:function(t,e,a){"use strict";a("4680")},"915a":function(t,e,a){t.exports=a.p+"img/The Notebook.c02b2ca2.png"},"934c":function(t,e,a){},"93b1":function(t,e,a){"use strict";a("80d5")},a71d:function(t,e,a){},ad1b:function(t,e,a){"use strict";a("0ca6")},adb5:function(t,e,a){"use strict";a("934c")},aede:function(t,e,a){},b204:function(t,e,a){t.exports=a.p+"img/Da Vinci Code.da6282a2.png"},b5c0:function(t,e,a){},b7fe:function(t,e,a){t.exports=a.p+"img/The Wish.3d58845f.png"},b800:function(t,e,a){t.exports=a.p+"img/Children of Time.2de5a816.png"},b936:function(t,e,a){t.exports=a.p+"img/I, Robot.5e9db25f.png"},ba73:function(t,e,a){"use strict";a("1844")},bb51:function(t,e,a){"use strict";var r=a("8589"),o=a("7ad4"),s=(a("adb5"),a("2877")),n=Object(s["a"])(o["default"],r["a"],r["b"],!1,null,"f96ca7dc",null);e["default"]=n.exports},bc6b:function(t,e,a){},c7cc:function(t,e,a){t.exports=a.p+"img/Timelines from Black History.41d757d0.png"},cb9b:function(t,e,a){t.exports=a.p+"img/hero.f5ee34fc.png"},d1d5:function(t,e,a){t.exports=a.p+"img/History Smashers-Pearl Harbor.b430d08f.png"},db78:function(t,e,a){"use strict";a("ea22")},e6c2:function(t,e,a){t.exports=a.p+"img/The Moon Stone.3a52d54a.png"},ea22:function(t,e,a){},f187:function(t,e,a){t.exports=a.p+"img/The Great Gatsby.a717f53f.png"},f39f:function(t,e,a){},f702:function(t,e,a){t.exports=a.p+"img/Home Again.0ed09b1e.png"},f83b:function(t,e,a){"use strict";a("b5c0")}});
//# sourceMappingURL=app.66e13a00.js.map