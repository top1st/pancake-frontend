(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1009:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c,r=n(8),i=n(4),a=n(57),s=(n(0),n(5)),o=n(2),u=n(1),j=["title","stat"],b=function(t){var e=t.title,n=t.stat,c=Object(a.a)(t,j);return Object(u.jsxs)(o.p,Object(i.a)(Object(i.a)({},c),{},{children:[Object(u.jsx)(o.Fc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:e}),null===n?Object(u.jsx)(o.kc,{height:"24px",width:"50%",mx:"auto"}):Object(u.jsx)(o.Fc,{fontWeight:"600",textAlign:"center",children:n})]}))},l=Object(s.e)(o.cb)(c||(c=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(t){return t.theme.colors.invertedContrast}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.radii.card}));e.b=l},1012:function(t,e,n){"use strict";var c,r,i,a=n(3),s=n.n(a),o=n(9),u=n(4),j=n(7),b=n(57),l=n(8),d=n(0),O=n(2),x=n(5),h=n(39),f=n(13),p=n(247),m=n(1),v=["onValidAddress","onAddressClick"];!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var g=x.e.div(c||(c=Object(l.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),w=Object(x.e)(O.Fc)(r||(r=Object(l.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),y={isFetching:!1,resultFound:i.NOT_VALID,value:""},k=function(){return Promise.resolve(!0)};e.a=function(t){var e=t.onValidAddress,n=void 0===e?k:e,c=t.onAddressClick,r=Object(b.a)(t,v),a=Object(d.useState)(y),l=Object(j.a)(a,2),x=l[0],F=l[1],A=Object(f.b)().t,D=x.isFetching,S=x.resultFound,I=x.value;return Object(d.useEffect)((function(){!1!==Object(h.j)(I)?function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!0})})),t.next=4,n(I);case 4:e=t.sent,F((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!1,resultFound:e?i.FOUND:i.NOT_FOUND})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),F((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!1})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()():F((function(t){return Object(u.a)(Object(u.a)({},t),{},{resultFound:i.NOT_VALID})}))}),[I,n,F]),Object(m.jsxs)(O.p,Object(u.a)(Object(u.a)({position:"relative"},r),{},{children:[Object(m.jsx)(O.lb,{placeholder:A("Search %subject%",{subject:A("Address").toLowerCase()}),value:x.value,onChange:function(t){var e=t.target.value;F((function(t){return Object(u.a)(Object(u.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),D&&Object(m.jsx)(O.p,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(g,{isOpen:S!==i.NOT_VALID,children:S===i.FOUND?Object(m.jsx)(w,{onClick:function(){F(y),c(x.value)},children:x.value}):Object(m.jsx)(O.Fc,{px:"16px",fontWeight:"bold",children:A("No results found.")})})]}))}},1017:function(t,e,n){"use strict";var c=n(4),r=(n(0),n(492)),i=n(111),a=n(1);e.a=function(t){var e=Object(i.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(a.jsx)(r.a,Object(c.a)({background:e},t))}},1022:function(t,e,n){"use strict";var c,r=n(8),i=n(5).e.div.attrs((function(t){return{alt:t.alt}}))(c||(c=Object(r.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(t){return t.src}),(function(t){return t.borderColor||"#f2ecf2"}));e.a=i},1030:function(t,e,n){"use strict";var c=n(4),r=(n(0),n(95)),i=n(1012),a=n(140),s=n(1);e.a=function(t){var e=Object(r.g)();return Object(s.jsx)(i.a,Object(c.a)({onAddressClick:function(t){e.push("".concat(a.a,"/profile/").concat(t))}},t))}},1031:function(t,e,n){"use strict";var c=n(4),r=n(57),i=(n(0),n(2)),a=n(1),s=["title","description","children"];e.a=function(t){var e=t.title,n=t.description,o=t.children,u=Object(r.a)(t,s);return Object(a.jsxs)(i.db,Object(c.a)(Object(c.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},u),{},{children:[Object(a.jsxs)(i.p,{children:[Object(a.jsx)(i.eb,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:e}),n]}),Object(a.jsx)(i.p,{children:o})]}))}},1033:function(t,e,n){"use strict";var c,r=n(8),i=n(2),a=n(5),s=Object(a.e)(i.uc)(c||(c=Object(r.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(t){return t.theme.colors.cardBorder}));e.a=s},1036:function(t,e,n){"use strict";var c,r=n(4),i=n(57),a=(n(0),n(2)),s=n(8),o=n(5).e.div.attrs((function(t){return{alt:t.alt}}))(c||(c=Object(s.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(t){var e=t.src,n=t.theme;return e?"background-image: url('".concat(e,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(t){return t.src}),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.md})),u=n(1),j=["bannerImage","bannerAlt","avatar","children"];e.a=function(t){var e=t.bannerImage,n=t.bannerAlt,c=t.avatar,s=t.children,b=Object(i.a)(t,j);return Object(u.jsx)(a.cb,Object(r.a)(Object(r.a)({flexDirection:"column",mb:"24px"},b),{},{children:Object(u.jsxs)(a.p,{position:"relative",pb:"56px",children:[Object(u.jsx)(o,{src:e,alt:n}),Object(u.jsx)(a.p,{position:"absolute",bottom:0,left:-4,children:Object(u.jsxs)(a.cb,{alignItems:"flex-end",children:[c,s]})})]})}))}},1047:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return m}));var c,r=n(8),i=n(4),a=n(57),s=(n(0),n(2)),o=n(13),u=n(106),j=n(5),b=n(1),l=["amount"],d=["cost","bnbBusdPrice"],O=["title","children"],x=function(t){var e=t.amount,n=Object(a.a)(t,l);return Object(b.jsxs)(s.cb,Object(i.a)(Object(i.a)({alignItems:"center"},n),{},{children:[Object(b.jsx)(s.l,{width:"16px",mx:"4px"}),Object(b.jsx)(s.Fc,{fontWeight:"600",children:e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:4})})]}))},h=function(t){var e=t.cost,n=t.bnbBusdPrice,c=Object(a.a)(t,d),r=Object(u.d)(n,e);return Object(b.jsxs)(s.cb,Object(i.a)(Object(i.a)({alignItems:"center"},c),{},{children:[r>0&&Object(b.jsx)(s.Fc,{fontSize:"12px",color:"textSubtle",children:"($".concat(r.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")}),Object(b.jsx)(x,{amount:e})]}))},f=function(t){var e=t.title,n=t.children,c=Object(a.a)(t,O);return Object(b.jsxs)(s.cb,Object(i.a)(Object(i.a)({alignItems:"center",justifyContent:"space-between"},c),{},{children:[Object(b.jsx)(s.Fc,{fontSize:"12px",color:"textSubtle",maxWidth:"120px",ellipsis:!0,title:e,children:e}),Object(b.jsx)(s.p,{children:n})]}))},p=Object(j.e)(s.z)(c||(c=Object(r.a)(["\n  border-radius: 8px;\n  max-width: 320px;\n  transition: opacity 200ms;\n\n  & > div {\n    border-radius: 8px;\n  }\n\n  "," {\n    &:hover {\n      cursor: pointer;\n      opacity: 0.6;\n    }\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),m=function(t){var e=t.lowestPrice,n=t.isFetching,c=t.bnbBusdPrice,r=Object(o.b)().t;return n||e?Object(b.jsx)(f,{title:r("Lowest price"),children:n?Object(b.jsx)(s.kc,{height:"24px",width:"30px"}):Object(b.jsx)(h,{cost:e,bnbBusdPrice:c})}):null}},1048:function(t,e,n){"use strict";n.d(e,"b",(function(){return b}));var c=n(3),r=n.n(c),i=n(4),a=n(9),s=n(7),o=n(0),u=n(86),j=n(140),b=function(){var t=Object(o.useState)({isFetching:!1,data:null}),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c((function(t){return Object(i.a)(Object(i.a)({},t),{},{isFetching:!0})})),t.next=3,Object(u.h)(j.b);case 3:e=t.sent,c({isFetching:!1,data:e.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[c]),n};e.a=function(t){var e=Object(o.useState)({isFetching:!1,data:null}),n=Object(s.a)(e,2),c=n[0],j=n[1];return Object(o.useEffect)((function(){(function(){var e=Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j((function(t){return Object(i.a)(Object(i.a)({},t),{},{isFetching:!0})})),e.next=3,Object(u.h)(t);case 3:n=e.sent,j({isFetching:!1,data:n.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,j]),c}},1067:function(t,e,n){var c=n(1143),r=n(223);t.exports=function(t){return t&&t.length?c(t,r):0}},1069:function(t,e,n){"use strict";var c,r=n(0),i=n(95),a=n(2),s=n(33),o=n(13),u=n(331),j=n(1017),b=n(1031),l=n(1009),d=n(1036),O=n(1022),x=n(1033),h=n(140),f=n(8),p=n(113),m=n(5),v=n(1030),g=n(1),w=Object(m.e)(p.a)(c||(c=Object(f.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(t){return t.theme.colors.primary})),y=function(){var t=Object(o.b)().t;return Object(g.jsxs)(a.cb,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(g.jsxs)(w,{to:"".concat(h.a,"/collections"),children:[Object(g.jsx)(a.N,{color:"primary",width:"24px"}),t("All Collections")]}),Object(g.jsx)(a.p,{children:Object(g.jsx)(v.a,{})})]})},k=n(4),F=n(3),A=n.n(F),D=n(9),S=n(7),I=n(57),C=n(86),N=["collectionAddress"],L=function(t){var e=t.collectionAddress,n=Object(I.a)(t,N),c=Object(r.useState)(null),i=Object(S.a)(c,2),a=i[0],s=i[1],u=Object(o.b)().t;Object(r.useEffect)((function(){(function(){var t=Object(D.a)(A.a.mark((function t(){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.n)(e);case 2:n=t.sent,s(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,s]);var j=null===a?null:a.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(g.jsx)(l.a,Object(k.a)({title:u("Lowest (%symbol%)",{symbol:"MATIC"}),stat:j},n))};e.a=function(t){var e=t.collection,n=Object(i.i)().collectionAddress,c=e.totalSupply,r=e.numberTokensListed,f=e.totalVolumeBNB,p=e.banner,m=e.avatar,v=Object(o.b)().t,w=Object(i.h)(),k=w.pathname,F=w.hash,A=f?parseFloat(f).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",D=[{label:v("Items"),href:"".concat(h.a,"/collections/").concat(n,"#items")},{label:v("Traits"),href:"".concat(h.a,"/collections/").concat(n,"#traits")},{label:v("Activity"),href:"".concat(h.a,"/collections/").concat(n,"#activity")}];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(j.a,{children:[Object(g.jsx)(y,{}),Object(g.jsx)(d.a,{bannerImage:p.large,avatar:Object(g.jsx)(O.a,{src:m})}),Object(g.jsx)(b.a,{title:e.name,description:e.description?Object(g.jsx)(a.Fc,{color:"textSubtle",children:v(e.description)}):null,children:Object(g.jsxs)(l.b,{children:[Object(g.jsx)(l.a,{title:v("Items"),stat:Object(s.e)(Number(c),0,0)}),Object(g.jsx)(l.a,{title:v("Items listed"),stat:r?Object(s.e)(Number(r),0,0):"0"}),Object(g.jsx)(L,{collectionAddress:e.address}),Object(g.jsx)(l.a,{title:v("Vol. (%symbol%)",{symbol:"MATIC"}),stat:A})]})})]}),Object(g.jsx)(u.a,{children:Object(g.jsx)(x.a,{items:D,activeItem:"".concat(k).concat(F||"#items"),mt:"24px",mb:"8px"})})]})}},1087:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return l}));var c=n(3),r=n.n(c),i=n(9),a=n(7),s=n(0),o=n(86),u=n(140),j=function(t){var e,n,c=null===(e=t.attributes)||void 0===e||null===(n=e.find((function(t){return"bunnyId"===t.traitType})))||void 0===n?void 0:n.value;return c?c.toString():null},b=function(t){var e=Object(s.useState)(!1),n=Object(a.a)(e,2),c=n[0],u=n[1],j=Object(s.useState)(null),b=Object(a.a)(j,2),l=b[0],d=b[1];return Object(s.useEffect)((function(){t&&function(){var e=Object(i.a)(r.a.mark((function e(){var n,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,Object(o.u)({otherId:t,isTradable:!0},1,"currentAskPrice","asc");case 4:(n=e.sent).length>0&&(c=Object(a.a)(n,1),i=c[0],d(parseFloat(i.currentAskPrice)));case 6:return e.prev=6,u(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),{isFetching:c,lowestPrice:l}},l=function(t){var e,n=Object(s.useState)(!1),c=Object(a.a)(n,2),b=c[0],l=c[1],d=Object(s.useState)(null),O=Object(a.a)(d,2),x=O[0],h=O[1],f=(null===(e=t.collectionAddress)||void 0===e?void 0:e.toLowerCase())===u.b.toLowerCase();return Object(s.useEffect)((function(){f&&t&&function(){var e=Object(i.a)(r.a.mark((function e(){var n,c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j(t),e.prev=1,l(!0),e.next=5,Object(o.u)({otherId:n,isTradable:!0},1,"currentAskPrice","asc");case 5:(c=e.sent).length>0&&(i=Object(a.a)(c,1),s=i[0],h(parseFloat(s.currentAskPrice)));case 7:return e.prev=7,l(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}()()}),[f,t]),{isFetching:b,lowestPrice:x}}},1142:function(t,e,n){var c=n(417),r=n(230);t.exports=function(t){return r(c(t).toLowerCase())}},1143:function(t,e){t.exports=function(t,e){for(var n,c=-1,r=t.length;++c<r;){var i=e(t[c]);void 0!==i&&(n=void 0===n?i:n+i)}return n}},1629:function(t,e,n){"use strict";n.r(e);var c,r,i,a,s=n(0),o=n(95),u=n(331),j=n(79),b=n(991),l=n(244),d=n(1069),O=n(3),x=n.n(O),h=n(9),f=n(7),p=n(2),m=n(489),v=n.n(m),g=n(1067),w=n.n(g),y=n(33),k=n(86),F=n(13),A=n(4),D=n(57),S=n(1),I=["initialOpenState","title","children"],C=function(t){var e=t.initialOpenState,n=void 0===e||e,c=t.title,r=t.children,i=Object(D.a)(t,I),a=Object(s.useState)(n),o=Object(f.a)(a,2),u=o[0],j=o[1];return Object(S.jsxs)(p.z,Object(A.a)(Object(A.a)({},i),{},{children:[Object(S.jsx)(p.C,{p:"16px",children:Object(S.jsxs)(p.cb,{alignItems:"center",justifyContent:"space-between",children:[Object(S.jsx)(p.eb,{as:"h3",children:c}),Object(S.jsx)(p.hb,{variant:"text",scale:"sm",onClick:function(){return j(!u)},children:u?Object(S.jsx)(p.P,{width:"24px"}):Object(S.jsx)(p.M,{width:"24px"})})]})}),u&&r]}))},N=n(1087),L=n(1047),T=n(140),B=n(8),H=n(5),P=H.e.button(c||(c=Object(B.a)(["\n  border: none;\n  cursor: pointer;\n  background: none;\n  color: ",";\n  font-weight: bold;\n"])),(function(t){return t.theme.colors.secondary})),z=H.e.div(r||(r=Object(B.a)(["\n  -webkit-overflow-scrolling: touch;\n  min-width: 320px;\n  overflow-x: auto;\n"]))),V=Object(H.e)(p.ib)(i||(i=Object(B.a)(["\n  flex: none;\n  & > img {\n    border-radius: 8px;\n  }\n"]))),E=H.e.tr(a||(a=Object(B.a)(["\n  cursor: pointer;\n\n  &:hover {\n    td {\n      opacity: 0.65;\n    }\n  }\n"]))),_=function(t){var e=t.thumbnailSrc,n=t.name;return Object(S.jsxs)(p.cb,{alignItems:"center",children:[Object(S.jsx)(V,{src:e,width:48,height:48,mr:"8px"}),Object(S.jsx)(p.Fc,{children:n})]})},U=function(t){var e=t.bunnyId,n=Object(N.a)(e),c=n.isFetching,r=n.lowestPrice;return c?Object(S.jsx)(p.cb,{justifyContent:"flex-end",width:"100px",children:Object(S.jsx)(p.kc,{height:"24px",width:"48px"})}):r?Object(S.jsx)(L.a,{justifyContent:"flex-end",amount:r,width:"100px"}):null},R=function(t){var e=t.collectionAddress,n=Object(s.useState)(null),c=Object(f.a)(n,2),r=c[0],i=c[1],a=Object(s.useState)("asc"),u=Object(f.a)(a,2),j=u[0],b=u[1],l=Object(F.b)().t,d=Object(o.g)().push;Object(s.useEffect)((function(){(function(){var t=Object(h.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.s)(e);case 2:n=t.sent,i(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,i]);var O=r?w()(Object.values(r.attributesDistribution)):0,m=Object(s.useMemo)((function(){return r?Object.keys(r.data).sort(function(t){var e=t.raritySort,n=t.data;return function(t,c){var r,i,a=null!==(r=n.attributesDistribution[t])&&void 0!==r?r:0,s=null!==(i=n.attributesDistribution[c])&&void 0!==i?i:0;return"asc"===e?a-s:s-a}}({raritySort:j,data:r})):[]}),[j,r]);return Object(S.jsx)(S.Fragment,{children:r?Object(S.jsx)(C,{title:l("Bunny Id"),children:Object(S.jsx)(z,{children:Object(S.jsxs)(p.Bc,{children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Hc,{textAlign:"left",children:l("Name")}),Object(S.jsx)(p.Hc,{children:l("Count")}),Object(S.jsx)(p.Hc,{children:Object(S.jsx)(P,{type:"button",onClick:function(){b((function(t){return"asc"===t?"desc":"asc"}))},children:Object(S.jsxs)(p.cb,{alignItems:"center",children:[l("Rarity"),"asc"===j?Object(S.jsx)(p.h,{color:"secondary"}):Object(S.jsx)(p.d,{color:"secondary"})]})})}),Object(S.jsx)(p.Hc,{textAlign:"right",children:l("Lowest")})]})}),Object(S.jsx)("tbody",{children:m.map((function(t){var n,c=r.data[t];if(!c)return null;var i=null!==(n=r.attributesDistribution[t])&&void 0!==n?n:0,a=i/O*100;return Object(S.jsxs)(E,{onClick:function(){d("".concat(T.a,"/collections/").concat(e,"/").concat(t))},title:l("Click to view NFT"),children:[Object(S.jsx)(p.Dc,{children:Object(S.jsx)(_,{thumbnailSrc:c.image.thumbnail,name:c.name})}),Object(S.jsx)(p.Dc,{textAlign:"center",children:Object(y.e)(i,0,0)}),Object(S.jsx)(p.Dc,{textAlign:"center",children:"".concat(Object(y.e)(a,0,2),"%")}),Object(S.jsx)(p.Dc,{textAlign:"right",width:"100px",children:Object(S.jsx)(U,{bunnyId:t})})]},t)}))})]})})}):Object(S.jsx)(C,{title:l("Loading..."),children:Object(S.jsxs)(p.Bc,{children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Hc,{textAlign:"left",children:l("Name")}),Object(S.jsx)(p.Hc,{children:l("Count")}),Object(S.jsx)(p.Hc,{children:l("Rarity")}),Object(S.jsx)(p.Hc,{children:l("Lowest")})]})}),Object(S.jsx)("tbody",{children:v()(19).map((function(t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Dc,{children:Object(S.jsxs)(p.cb,{alignItems:"center",children:[Object(S.jsx)(p.kc,{height:"48px",width:"48px",mr:"8px"}),Object(S.jsx)(p.kc,{width:"100px"})]})}),Object(S.jsx)(p.Dc,{children:Object(S.jsx)(p.kc,{})}),Object(S.jsx)(p.Dc,{children:Object(S.jsx)(p.kc,{})})]},t)}))})]})})})},M=n(15),W=n(35),Q=n(1142),J=n.n(Q),Y=n(335),G=n.n(Y),$=n(1048),q=function(t){var e=t.collectionAddress,n=Object($.a)(e),c=n.data,r=n.isFetching,i=Object(s.useState)({}),a=Object(f.a)(i,2),o=a[0],u=a[1],j=Object(F.b)().t;return r?Object(S.jsx)(C,{title:j("Loading..."),children:Object(S.jsxs)(p.Bc,{children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Hc,{textAlign:"left",children:j("Name")}),Object(S.jsx)(p.Hc,{width:"100px",children:j("Count")}),Object(S.jsx)(p.Hc,{width:"160px",children:j("Rarity")})]})}),Object(S.jsx)("tbody",{children:v()(19).map((function(t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Dc,{children:Object(S.jsx)(p.kc,{width:"100px"})}),Object(S.jsx)(p.Dc,{children:Object(S.jsx)(p.kc,{})}),Object(S.jsx)(p.Dc,{children:Object(S.jsx)(p.kc,{})})]},t)}))})]})}):Object(S.jsx)(S.Fragment,{children:c&&Object.keys(c).map((function(t,e){var n=w()(Object.values(c[t])),r=Object.keys(c[t]).reduce((function(e,r){var i=c[t][r],a=i/n*100;return[].concat(Object(W.a)(e),[{value:r,count:i,rarity:a}])}),[]),i=o[t]||"desc";return Object(S.jsx)(C,{title:J()(t),initialOpenState:e<=1,mb:"32px",children:Object(S.jsx)(z,{children:Object(S.jsxs)(p.Bc,{children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Hc,{textAlign:"left",children:j("Name")}),Object(S.jsx)(p.Hc,{width:"100px",children:j("Count")}),Object(S.jsx)(p.Hc,{width:"160px",children:Object(S.jsx)(P,{type:"button",onClick:function(){u((function(e){return e[t]?Object(A.a)(Object(A.a)({},e),{},Object(M.a)({},t,"asc"===e[t]?"desc":"asc")):Object(A.a)(Object(A.a)({},e),{},Object(M.a)({},t,"asc"))}))},children:Object(S.jsxs)(p.cb,{alignItems:"center",children:[j("Rarity"),"asc"===o[t]?Object(S.jsx)(p.h,{color:"secondary"}):Object(S.jsx)(p.d,{color:"secondary"})]})})})]})}),Object(S.jsx)("tbody",{children:G()(r,"rarity",i).map((function(t){var e=t.value,n=t.count,c=t.rarity;return Object(S.jsxs)("tr",{children:[Object(S.jsx)(p.Dc,{children:J()(e)}),Object(S.jsx)(p.Dc,{textAlign:"center",children:Object(y.e)(n,0,0)}),Object(S.jsx)(p.Dc,{textAlign:"center",children:"".concat(Object(y.e)(c,0,2),"%")})]},e)}))})]})})},t)}))})};e.default=function(){var t=Object(o.i)().collectionAddress,e=Object(j.b)(),n=Object(b.e)(t);return Object(s.useEffect)((function(){t&&e(Object(l.d)(t))}),[t,e]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{collection:n}),Object(S.jsx)(u.a,{py:"40px",children:t===T.b?Object(S.jsx)(R,{collectionAddress:t}):Object(S.jsx)(q,{collectionAddress:t})})]})}}}]);
//# sourceMappingURL=10.4a1be46c.chunk.js.map