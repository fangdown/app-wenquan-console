"use strict";(self.webpackChunkwenjuan_fe=self.webpackChunkwenjuan_fe||[]).push([[868],{98250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var s=n(65043),c=n(73216),i=n(42919),l=n(86491),a=n(87021),o=n(80788),r=n(42522),d=n(48371),p=n(89280),x=n(51118),u=n(6051),j=n(85578),m=n(96651),h=n(36282),_=n(9025),A=n(66885),y=n(682),S=n(81803);const v="StatHeader_header-wrapper__wN6+F",C="StatHeader_header__kL3Pp",f="StatHeader_left__u30Pb",g="StatHeader_right__k86LH",N="StatHeader_main__C1JWN";var k=n(70579);const{Title:w}=p.A,T=()=>{const e=(0,c.Zp)(),{id:t}=(0,c.g)(),{title:n,isPublished:i}=(0,d.A)(),l=(0,s.useRef)(null);function o(){const e=l.current;null!=e&&(e.select(),document.execCommand("copy"),x.Ay.success("\u62f7\u8d1d\u6210\u529f"))}const r=(0,s.useMemo)((()=>{if(!i)return null;const e="http://localhost:3000/question/".concat(t),n=(0,k.jsx)("div",{style:{textAlign:"center"},children:(0,k.jsx)(S.Ay,{value:e,size:150})});return(0,k.jsxs)(u.A,{children:[(0,k.jsx)(j.A,{value:e,style:{width:"300px"},ref:l}),(0,k.jsx)(m.A,{title:"\u62f7\u8d1d\u94fe\u63a5",children:(0,k.jsx)(a.Ay,{icon:(0,k.jsx)(_.A,{}),onClick:o})}),(0,k.jsx)(h.A,{content:n,children:(0,k.jsx)(a.Ay,{icon:(0,k.jsx)(A.A,{})})})]})}),[t,i]);return(0,k.jsx)("div",{className:v,children:(0,k.jsxs)("div",{className:C,children:[(0,k.jsx)("div",{className:f,children:(0,k.jsxs)(u.A,{children:[(0,k.jsx)(a.Ay,{type:"link",icon:(0,k.jsx)(y.A,{}),onClick:()=>e(-1),children:"\u8fd4\u56de"}),(0,k.jsx)(w,{children:n})]})}),(0,k.jsx)("div",{className:N,children:r}),(0,k.jsx)("div",{className:g,children:(0,k.jsx)(a.Ay,{type:"primary",onClick:()=>e("/question/edit/".concat(t)),children:"\u7f16\u8f91\u95ee\u5377"})})]})})};var I=n(98139),L=n.n(I),H=n(63393),b=n(82925);const z="ComponentList_container__nDJo9",F="ComponentList_component-wrapper__r8jAj",P="ComponentList_selected__TkfQ7",q="ComponentList_component__Bo2F3",D=e=>{const{selectedComponentId:t,setSelectedComponentId:n,setSelectedComponentType:s}=e,{componentList:c}=(0,H.A)();return(0,k.jsx)("div",{className:z,children:c.filter((e=>!e.isHidden)).map((e=>{const{fe_id:c,props:i,type:l}=e,a=(0,b.T)(l);if(null==a)return null;const{Component:o}=a,r=F,d=P,p=L()({[r]:!0,[d]:c===t});return(0,k.jsx)("div",{className:p,onClick:()=>{n(c),s(l)},children:(0,k.jsx)("div",{className:q,children:(0,k.jsx)(o,{...i})})},c)}))})};var Z=n(56833),E=n(68292),J=n(26998),X=n(55293);var B=n(29515);const{Title:M}=p.A,O=e=>{const{selectedComponentId:t,setSelectedComponentId:n,setSelectedComponentType:l}=e,{id:a=""}=(0,c.g)(),[o,r]=(0,s.useState)(1),[d,p]=(0,s.useState)(B.zv),[x,u]=(0,s.useState)(0),[j,m]=(0,s.useState)([]),{loading:h}=(0,J.A)((async()=>await async function(e,t){const n="/api/stat/".concat(e);return await X.A.get(n,{params:t})}(a,{page:o,pageSize:d})),{refreshDeps:[a,o,d],onSuccess(e){const{total:t,list:n=[]}=e;u(t),m(n)}}),{componentList:_}=(0,H.A)(),A=_.map((e=>{const{fe_id:s,title:c,props:i={},type:a}=e,o=i.title||c;return{title:(0,k.jsx)("div",{style:{cursor:"pointer"},onClick:()=>{n(s),l(a)},children:(0,k.jsx)("span",{style:{color:s===t?"#1890ff":"inherit"},children:o})}),dataIndex:s}})),y=j.map((e=>({...e,key:e._id}))),S=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z.A,{columns:A,dataSource:y,pagination:!1}),(0,k.jsx)("div",{style:{textAlign:"center",marginTop:"18px"},children:(0,k.jsx)(E.A,{total:x,pageSize:d,current:o,onChange:e=>r(e),onShowSizeChange:(e,t)=>{r(e),p(t)}})})]});return(0,k.jsxs)("div",{children:[(0,k.jsxs)(M,{level:3,children:["\u7b54\u5377\u6570\u91cf: ",!h&&x]}),h&&(0,k.jsx)("div",{style:{textAlign:"center"},children:(0,k.jsx)(i.A,{})}),!h&&S]})},{Title:Q}=p.A,R=e=>{const{selectedComponentId:t,selectedComponentType:n}=e,{id:i=""}=(0,c.g)(),[l,a]=(0,s.useState)([]),{run:o}=(0,J.A)((async(e,t)=>await async function(e,t){const n="/api/stat/".concat(e,"/").concat(t);return await X.A.get(n)}(e,t)),{manual:!0,onSuccess(e){a(e.stat)}});return(0,s.useEffect)((()=>{t&&o(i,t)}),[i,t]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Q,{level:3,children:"\u56fe\u8868\u7edf\u8ba1"}),(0,k.jsx)("div",{children:function(){if(!t)return(0,k.jsx)("div",{children:"\u672a\u9009\u4e2d\u7ec4\u4ef6"});const{StatComponent:e}=(0,b.T)(n)||{};return null==e?(0,k.jsx)("div",{children:"\u8be5\u7ec4\u4ef6\u65e0\u7edf\u8ba1\u56fe\u8868"}):(0,k.jsx)(e,{stat:l})}()})]})},U="Stat_container__pl8X0",W="Stat_content-wrapper__iZEDi",G="Stat_content__XONmd",K="Stat_left__oouL0",V="Stat_main__SfUiq",Y="Stat_right__-8it7",$=()=>{const e=(0,c.Zp)(),{loading:t}=(0,r.A)(),{title:n,isPublished:p}=(0,d.A)(),[x,u]=(0,s.useState)(""),[j,m]=(0,s.useState)("");(0,o.A)("\u95ee\u5377\u7edf\u8ba1 - ".concat(n));const h=(0,k.jsx)("div",{style:{textAlign:"center",marginTop:"60px"},children:(0,k.jsx)(i.A,{})});return(0,k.jsxs)("div",{className:U,children:[(0,k.jsx)(T,{}),(0,k.jsxs)("div",{className:W,children:[t&&h,!t&&(0,k.jsx)("div",{className:G,children:"boolean"!==typeof p||p?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:K,children:(0,k.jsx)(D,{selectedComponentId:x,setSelectedComponentId:u,setSelectedComponentType:m})}),(0,k.jsx)("div",{className:V,children:(0,k.jsx)(O,{selectedComponentId:x,setSelectedComponentId:u,setSelectedComponentType:m})}),(0,k.jsx)("div",{className:Y,children:(0,k.jsx)(R,{selectedComponentId:x,selectedComponentType:j})})]}):(0,k.jsx)("div",{style:{flex:"1"},children:(0,k.jsx)(l.Ay,{status:"warning",title:"\u8be5\u9875\u9762\u5c1a\u672a\u53d1\u5e03",extra:(0,k.jsx)(a.Ay,{type:"primary",onClick:()=>e(-1),children:"\u8fd4\u56de"})})})})]})]})}}}]);
//# sourceMappingURL=statPage.369134a1.chunk.js.map