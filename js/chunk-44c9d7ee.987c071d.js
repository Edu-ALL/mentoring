(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c9d7ee"],{"0460":function(e,t,c){},"0462":function(e,t,c){},1854:function(e,t,c){"use strict";c("0460")},"4b2c":function(e,t,c){"use strict";c("8462")},5699:function(e,t,c){"use strict";c("7fd8")},"77e2":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={id:"alumniDashboard"},l={class:"container px-0 mt-4 mb-3"};function o(e,t,c,o,r,s){var d=Object(a["resolveComponent"])("v-navbar"),i=Object(a["resolveComponent"])("v-home"),m=Object(a["resolveComponent"])("v-activity");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createVNode"])(d,{menus:r.menus},null,8,["menus"]),Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])((function(){return[""==r.menus.menu?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0})):Object(a["createCommentVNode"])("",!0)]})),_:1}),Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])((function(){return["activity"==r.menus.menu?(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0,menus:r.menus},null,8,["menus"])):Object(a["createCommentVNode"])("",!0)]})),_:1})])])}var r=c("8ce3"),s=c.n(r),d=c("547b"),i=c.n(d),m={id:"navbar",class:"sticky-top"},b=Object(a["createStaticVNode"])('<div class="navbar-mentor" data-v-33803fd4><div class="container" data-v-33803fd4><div class="row py-2 align-items-center" data-v-33803fd4><div class="col-6" data-v-33803fd4><img src="'+s.a+'" alt="" class="navbar-mentor-logo" data-v-33803fd4></div><div class="col-6" data-v-33803fd4><div class="navbar-mentor-img float-end" data-v-33803fd4><img src="'+i.a+'" alt="" data-bs-toggle="dropdown" data-v-33803fd4></div><div class="navbar-mentor-title float-end mt-2 me-2" data-v-33803fd4> Hello, Alumni Name </div></div></div></div></div>',1),u={class:"menus shadow-sm"},j={class:"container"},O={class:"text-end d-md-none d-block"},N={class:"col p-1"},V=Object(a["createTextVNode"])(" Home "),v=Object(a["createTextVNode"])(" My Activities ");function E(e,t,c,n,l,o){var r=this,s=Object(a["resolveComponent"])("vue-feather");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[b,Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",O,[Object(a["createVNode"])(s,{type:"menu",onClick:t[0]||(t[0]=function(e){return o.sidebarCheck()})})]),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["row",l.sidebarClass])},[Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["btn btn-menus shadow-sm",""==c.menus.menu?"active":""]),onClick:t[1]||(t[1]=function(e){return r.$router.push({path:"/alumni/"})})},[Object(a["createVNode"])(s,{type:"home",class:"float-start mt-1 me-2",size:"16"}),V],2),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["btn btn-menus shadow-sm","activity"==c.menus.menu?"active":""]),onClick:t[2]||(t[2]=function(e){return r.$router.push({path:"/alumni/activity"})})},[Object(a["createVNode"])(s,{type:"clipboard",class:"float-start mt-1 me-2",size:"16"}),v],2)])],2)])])])}var h={name:"navbar",props:{menus:Object},data:function(){return{sidebar:!1,sidebarClass:"d-md-block d-none"}},methods:{sidebarCheck:function(){this.sidebar,this.sidebar,0==this.sidebar?(this.sidebar=!0,this.sidebarClass="d-block sidebar"):(this.sidebar=!1,this.sidebarClass="d-md-block d-none")}}},p=(c("ca11"),c("4b2c"),c("6b0d")),f=c.n(p);const k=f()(h,[["render",E],["__scopeId","data-v-33803fd4"]]);var y=k,g={id:"home"},C=Object(a["createElementVNode"])("div",{class:"row"},null,-1),w={class:"row"},B=Object(a["createElementVNode"])("h5",null,"Overview",-1),x={class:"col-md-3"},T={class:"card h-card shadow-sm"},F={class:"card-body"},S={class:"row align-items-center"},D={class:"col-4 text-center"},$=Object(a["createElementVNode"])("div",{class:"col-8"},[Object(a["createElementVNode"])("div",{class:"h-count"},"21"),Object(a["createElementVNode"])("div",{class:"h-label"},"Essay Total")],-1),_={class:"col-md-3"},z={class:"card h-card shadow-sm"},A={class:"card-body"},G={class:"row align-items-center"},L={class:"col-4 text-center"},H=Object(a["createElementVNode"])("div",{class:"col-8"},[Object(a["createElementVNode"])("div",{class:"h-count"},"11"),Object(a["createElementVNode"])("div",{class:"h-label"},"1on1 Call")],-1),J={class:"row mt-4"},P=Object(a["createElementVNode"])("h5",null,"Recent Activities",-1),I={class:"col-md-6"},R={class:"card-white"},M=Object(a["createElementVNode"])("h6",{class:"act-title"},[Object(a["createElementVNode"])("div",{class:"float-end"},"Pending"),Object(a["createElementVNode"])("div",{class:""},"1on1 Call")],-1),q={class:"table table-borderless"},K=Object(a["createElementVNode"])("td",null,"Full Name",-1),Q=Object(a["createElementVNode"])("td",{class:"text-end"},"23 January 2022",-1),U=[K,Q],W={class:"col-md-6"},X={class:"card-white"},Y=Object(a["createElementVNode"])("h6",{class:"act-title"},[Object(a["createElementVNode"])("div",{class:"float-end"},"History"),Object(a["createElementVNode"])("div",{class:""},"1on1 Call")],-1),Z={class:"table table-borderless"},ee=Object(a["createElementVNode"])("td",null,"Full Name",-1),te=Object(a["createElementVNode"])("td",{class:"text-center"},"23 January 2022",-1),ce=Object(a["createElementVNode"])("td",{class:"text-end"},[Object(a["createElementVNode"])("button",{class:"btn btn-sm btn-alumni btn-type-1 m-0 py-1"}," Result ")],-1),ae=[ee,te,ce];function ne(e,t,c,n,l,o){var r=Object(a["resolveComponent"])("vue-feather");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[C,Object(a["createElementVNode"])("div",w,[B,Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("div",D,[Object(a["createVNode"])(r,{type:"book-open",class:"h-ico"})]),$])])])]),Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",z,[Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("div",G,[Object(a["createElementVNode"])("div",L,[Object(a["createVNode"])(r,{type:"phone-call",class:"h-ico"})]),H])])])])]),Object(a["createElementVNode"])("div",J,[P,Object(a["createElementVNode"])("div",I,[Object(a["createElementVNode"])("div",R,[M,Object(a["createElementVNode"])("table",q,[Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(3,(function(e){return Object(a["createElementVNode"])("tr",{key:e},U)})),64))])])])]),Object(a["createElementVNode"])("div",W,[Object(a["createElementVNode"])("div",X,[Y,Object(a["createElementVNode"])("table",Z,[Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(3,(function(e){return Object(a["createElementVNode"])("tr",{class:"align-middle",key:e},ae)})),64))])])])])])])}var le={name:"homeAlumni"};const oe=f()(le,[["render",ne]]);var re=oe,se={id:"activity"},de={class:"container"},ie={class:"row"},me={class:"col-md-12"},be={class:"card-white"},ue={class:""},je={class:"row"},Oe={class:"col-md-12 mt-4"};function Ne(e,t,c,n,l,o){var r=this,s=Object(a["resolveComponent"])("v-pending"),d=Object(a["resolveComponent"])("v-history");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",se,[Object(a["createElementVNode"])("div",de,[Object(a["createElementVNode"])("div",ie,[Object(a["createElementVNode"])("div",me,[Object(a["createElementVNode"])("div",be,[Object(a["createElementVNode"])("div",ue,[Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["btn btn-mentoring position-relative me-3 btn-type-2 py-1",""==c.menus.submenu?"btn-type-1":" btn-type-2"]),onClick:t[0]||(t[0]=function(e){return r.$router.push({path:"/alumni/activity"})})},"Pending",2),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["btn btn-mentoring position-relative me-3 btn-type-2 py-1","history"==c.menus.submenu?"btn-type-1":" btn-type-2"]),onClick:t[1]||(t[1]=function(e){return r.$router.push({path:"/alumni/activity/history"})})},"History",2)]),Object(a["createElementVNode"])("div",je,[Object(a["createElementVNode"])("div",Oe,[Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])((function(){return[""==c.menus.submenu?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0})):Object(a["createCommentVNode"])("",!0)]})),_:1}),Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])((function(){return["history"==c.menus.submenu?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:0})):Object(a["createCommentVNode"])("",!0)]})),_:1})])])])])])])])}var Ve={id:"pending"},ve={class:"card-white m-0"},Ee=Object(a["createElementVNode"])("div",{class:"row mb-4"},[Object(a["createElementVNode"])("div",{class:"col-md-6 text-start"},[Object(a["createElementVNode"])("input",{type:"text",class:"form-mentoring",placeholder:"Search"})])],-1),he={class:"table table-borderless table-hover pointer"},pe=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",null,"Full Name"),Object(a["createElementVNode"])("th",null,"Email"),Object(a["createElementVNode"])("th",null,"School Name"),Object(a["createElementVNode"])("th",null,"Grade"),Object(a["createElementVNode"])("th",null,"Date & Time"),Object(a["createElementVNode"])("th",{width:"15%"},"Action")])],-1),fe=Object(a["createElementVNode"])("td",null,"Full Name",-1),ke=Object(a["createElementVNode"])("td",null,"Email",-1),ye=Object(a["createElementVNode"])("td",null,"School Name",-1),ge=Object(a["createElementVNode"])("td",null,"Grade",-1),Ce=Object(a["createElementVNode"])("td",null,"Date & Time",-1),we=Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("button",{class:"btn btn-sm btn-mentoring mb-1 btn-primary py-1"}," Set Location "),Object(a["createElementVNode"])("button",{class:"btn btn-sm btn-mentoring btn-success py-1"}," Location ")],-1),Be=[fe,ke,ye,ge,Ce,we],xe=Object(a["createStaticVNode"])('<hr><nav class="mt-2"><ul class="pagination justify-content-center"><li class="page-item"><a class="page-link" href="#">Previous</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Next</a></li></ul></nav>',2);function Te(e,t,c,n,l,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ve,[Object(a["createElementVNode"])("div",ve,[Ee,Object(a["createElementVNode"])("table",he,[pe,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(10,(function(e){return Object(a["createElementVNode"])("tr",{key:e,class:"align-middle"},Be)})),64))])]),xe])])}var Fe={name:"pending",components:{}};c("a07a");const Se=f()(Fe,[["render",Te]]);var De=Se,$e={id:"pending"},_e={class:"card-white m-0"},ze=Object(a["createElementVNode"])("div",{class:"row mb-4"},[Object(a["createElementVNode"])("div",{class:"col-md-6 text-start"},[Object(a["createElementVNode"])("input",{type:"text",class:"form-mentoring",placeholder:"Search"})])],-1),Ae={class:"table table-borderless table-hover pointer"},Ge=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",null,"Full Name"),Object(a["createElementVNode"])("th",null,"Email"),Object(a["createElementVNode"])("th",null,"School Name"),Object(a["createElementVNode"])("th",null,"Grade"),Object(a["createElementVNode"])("th",null,"Date & Time"),Object(a["createElementVNode"])("th",{width:"15%"},"Action")])],-1),Le=Object(a["createElementVNode"])("td",null,"Full Name",-1),He=Object(a["createElementVNode"])("td",null,"Email",-1),Je=Object(a["createElementVNode"])("td",null,"School Name",-1),Pe=Object(a["createElementVNode"])("td",null,"Grade",-1),Ie=Object(a["createElementVNode"])("td",null,"Date & Time",-1),Re=["onClick"],Me=Object(a["createStaticVNode"])('<hr><nav class="mt-2"><ul class="pagination justify-content-center"><li class="page-item"><a class="page-link" href="#">Previous</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Next</a></li></ul></nav>',2),qe={key:0},Ke=Object(a["createElementVNode"])("div",{class:"vue-modal vue-modal-lg"},[Object(a["createElementVNode"])("h5",null,"Files Detail"),Object(a["createElementVNode"])("hr"),Object(a["createElementVNode"])("div",{class:"row"},[Object(a["createElementVNode"])("div",{class:"col-md-6"},[Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("label",null,"Full Name"),Object(a["createTextVNode"])(),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" Lorem Ipsum ")]),Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("label",null,"Email"),Object(a["createTextVNode"])(),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" Email@email.com ")]),Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("label",null,"School Name"),Object(a["createTextVNode"])(),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" School Name ")]),Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("label",null,"Grade"),Object(a["createTextVNode"])(),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" Grade ")])]),Object(a["createElementVNode"])("div",{class:"col-md-6"},[Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("label",null,"Grade"),Object(a["createTextVNode"])(),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" No ")]),Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("button",{class:"btn btn-sm btn-primary btn-mentoring"}," Download File ")]),Object(a["createElementVNode"])("div",{class:"mb-2"},[Object(a["createElementVNode"])("label",null,"Verification Status"),Object(a["createTextVNode"])(),Object(a["createElementVNode"])("br"),Object(a["createElementVNode"])("select",{name:"",id:"",class:"form-control form-mentoring"},[Object(a["createElementVNode"])("option",{value:""},"Verify"),Object(a["createElementVNode"])("option",{value:""},"Not Verify")])])])])],-1);function Qe(e,t,c,n,l,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",$e,[Object(a["createElementVNode"])("div",_e,[ze,Object(a["createElementVNode"])("table",Ae,[Ge,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(10,(function(e){return Object(a["createElementVNode"])("tr",{key:e,class:"align-middle"},[Le,He,Je,Pe,Ie,Object(a["createElementVNode"])("td",null,[(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:"btn btn-sm btn-mentoring mb-1 btn-primary py-1",key:e,onClick:function(t){return o.checkDetail(e)}}," Result ",8,Re))])])})),64))])]),Me]),Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])((function(){return[l.detail?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",qe,[Ke,Object(a["createElementVNode"])("div",{class:"vue-modal-overlay",onClick:t[0]||(t[0]=function(e){return l.detail=!1})})])):Object(a["createCommentVNode"])("",!0)]})),_:1})])}var Ue={name:"history",components:{},data:function(){return{detail:!1}},methods:{checkDetail:function(e){console.log(e),this.detail=!0}}};c("5699");const We=f()(Ue,[["render",Qe]]);var Xe=We,Ye={name:"activity",props:{menus:Object},components:{"v-pending":De,"v-history":Xe}};c("d7c5");const Ze=f()(Ye,[["render",Ne]]);var et=Ze,tt={name:"alumniDashboard",components:{"v-navbar":y,"v-home":re,"v-activity":et},data:function(){return{menus:{menu:"",submenu:"",id:""}}},updated:function(){this.menus.menu=this.$route.params.menu,this.menus.submenu=this.$route.params.submenu,this.menus.id=this.$route.params.key},created:function(){document.title="Alumni Dashboard",this.menus.menu=this.$route.params.menu,this.menus.submenu=this.$route.params.submenu,this.menus.id=this.$route.params.key}};c("1854");const ct=f()(tt,[["render",o],["__scopeId","data-v-311767bc"]]);t["default"]=ct},"7fd8":function(e,t,c){},8462:function(e,t,c){},"9cc0":function(e,t,c){},a07a:function(e,t,c){"use strict";c("9cc0")},af94:function(e,t,c){},ca11:function(e,t,c){"use strict";c("af94")},d7c5:function(e,t,c){"use strict";c("0462")}}]);
//# sourceMappingURL=chunk-44c9d7ee.987c071d.js.map