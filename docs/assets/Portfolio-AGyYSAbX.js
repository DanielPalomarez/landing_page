import{_ as r,r as _,l as m,o as i,c as l,a as t,h as c,F as g,f as u,n as v,p as f,g as p}from"./index-3O286Wrh.js";const h={setup(){let e=_(1);return{slideIndex:e,slides:[1,2,3],changeSlide(a){e.value+=a,e.value==0&&(e.value=3),e.value==4&&(e.value=1),m.log(e.value)},currentSlide(a){e.value=a}}}},n=e=>(f("data-v-cdbf388e"),e=e(),p(),e),x={class:"col-12 py-5 col-md-12"},C={class:"img-container"},k={key:0,class:"slides fade"},I=n(()=>t("img",{class:"img rounded",src:"https://mms.businesswire.com/media/20201003005002/en/827178/5/SSBU_Steve_%26_Alex_3.jpg",alt:"steve"},null,-1)),S=[I],b={key:1,class:"slides fade"},y=n(()=>t("img",{class:"img rounded",src:"https://videogames.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAwMzI2MDAzMTMyNzM2NjIw/fortnite-khaby-lame.jpg",alt:""},null,-1)),M=[y],j={key:2,class:"slides fade"},w=n(()=>t("img",{class:"img rounded",src:"https://i.pinimg.com/474x/15/7d/f7/157df7d860957b35c81f16fc794a5065.jpg",alt:""},null,-1)),z=[w],B=["title","onClick"],N=n(()=>t("i",{class:"mdi mdi-circle"},null,-1)),A=[N];function D(e,d,a,s,F,V){return i(),l("div",x,[t("div",C,[s.slideIndex==1?(i(),l("div",k,S)):c("",!0),s.slideIndex==2?(i(),l("div",b,M)):c("",!0),s.slideIndex==3?(i(),l("div",j,z)):c("",!0),t("a",{title:"previous image",class:"prev",onClick:d[0]||(d[0]=o=>s.changeSlide(-1))},"❮"),t("a",{title:"next image",class:"next",onClick:d[1]||(d[1]=o=>s.changeSlide(1))},"❯")]),t("div",null,[(i(!0),l(g,null,u(s.slides,o=>(i(),l("span",{title:`image ${o}`,role:"button",class:v([{activeDot:s.slideIndex==o},"px-1 dot"]),onClick:q=>s.currentSlide(o),key:o},A,10,B))),128))])])}const L=r(h,[["render",D],["__scopeId","data-v-cdbf388e"]]);export{L as default};
