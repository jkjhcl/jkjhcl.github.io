_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{XKlS:function(e,t,o){"use strict";var n=o("nKUr"),a=(o("q1tI"),o("4IMT")),i=o.n(a),c=o("zk85"),s=o.n(c),l=o("mOvS"),r=o.n(l)()().publicRuntimeConfig,d=function(e){if(e)return Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/icons/filterCross.svg"),alt:"icon",className:s.a.filterCloseIcon})},u=function(e){return"download"===e?Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/download.svg"),alt:"Download icon",className:s.a.downloadIcon}):null},m=function(e){return e?Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/icons/codeIcon.png"),alt:"Code icon",className:s.a.codeIcon}):null},v=function(e){var t=e.title,o=e.type,a=e.color,c=e.active,l=e.selected,r=e.children,v=e.className,g=e.onClick,p=e.featured,b=e.href,j=e.target,f=e.disabled,h=e.isCode;return Object(n.jsxs)(i.a,{title:t,className:"\n      ".concat(s.a.konyButton,"\n      ").concat(s.a[o]?s.a[o]:"","\n      ").concat(s.a[a]?s.a[a]:"","\n      ").concat(c?s.a.active:"","\n      ").concat(l?s.a.selected:"","\n      ").concat(p?s.a.featured:"","\n      ").concat(v,"\n    "),onClick:g,href:b||null,target:j,disabled:f,children:[u(o),m(h),r||t,d(l)]})};v.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=v},kACj:function(e,t,o){"use strict";o.r(t);var n=o("nKUr"),a=o("o0o1"),i=o.n(a),c=o("HaE+"),s=o("q1tI"),l=o("Djov"),r=o("9xET"),d=o.n(r),u=o("ZPTe"),m=o.n(u),v=o("DG/x"),g=o("XKlS"),p=o("PGnZ"),b=o.n(p),j=o("mOvS"),f=o.n(j),h=o("6EMX"),S=o("8SHQ"),x=o("t3Un"),O=o("ah2r"),y=o("vDqi"),k=o.n(y),_=f()().publicRuntimeConfig.hikesData;t.default=function(e){var t,o=e.url,a=Object(s.useState)(null),r=a[0],u=a[1],p=Object(s.useState)(null),j=p[0],f=p[1],y=Object(s.useState)(null),I=y[0],N=y[1],B=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,a,c,s,l,r,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.d?o.asPath.substring(1):o.asPath.replace("/".concat(S.b),"").substring(1),e.next=3,Object(h.a)(_);case 3:return n=e.sent,a=n.filter((function(e){return e.categoryTours.some((function(e){return e.alias==t}))})),f(a[0].categoryAlias),c=a.map((function(e){return Object.assign({},e,{categoryTours:e.categoryTours})}))[0],s=c.categoryTours.filter((function(e){return e.alias==t}))[0],u(s),l=Object(O.a)("langid"),e.prev=10,e.next=13,k.a.get("".concat(S.c,"/locales/").concat(l,"/common.json"));case 13:r=e.sent,N(r.data),e.next=23;break;case 17:return e.prev=17,e.t0=e.catch(10),e.next=21,k.a.get("".concat(S.c,"/locales/en-US/common.json"));case 21:d=e.sent,N(d.data);case 23:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){return B(),function(){}}),[]);var E=function(e){return e.preventDefault(),e.message=function(){var e=new Date,t=Object(x.a)(null===r||void 0===r?void 0:r.fileName,j);return{namespace:"hike",msg_id:"id_".concat(e.getTime()),msg_type:"POST",request:{context:"tour",category:null===r||void 0===r?void 0:r.category,title:null===r||void 0===r?void 0:r.title,checksum:null===r||void 0===r?void 0:r.checksum,download_url:t,version:null===r||void 0===r?void 0:r.hikeVersion,filename:null===r||void 0===r?void 0:r.fileName,kuid:null===r||void 0===r?void 0:r.kuid,id:"".concat(null===r||void 0===r?void 0:r.nid).concat(null===r||void 0===r?void 0:r.fid).concat(e.getTime()),langid:Object(O.a)("langid")}}}(),"undefined"!==typeof e.message&&(console.log(e.message),getVizSource().postMessage(e.message,"*")),!1},C=S.d?null===r||void 0===r?void 0:r.image:"/".concat(S.b).concat(null===r||void 0===r?void 0:r.image);return Object(n.jsxs)("div",{className:b.a.hikeBody,children:[Object(n.jsx)(l.a,{search:null}),Object(n.jsxs)("div",{className:b.a.tourContainer,children:[Object(n.jsx)(v.a,{title:null===r||void 0===r?void 0:r.title,search:null}),Object(n.jsxs)("div",{className:b.a.tourInfo,children:[Object(n.jsx)("div",{className:b.a.tourThumb,children:Object(n.jsx)("img",{src:C,alt:"Hike Thumbnail"})}),Object(n.jsxs)("div",{className:b.a.tourDesc,children:[Object(n.jsx)("h2",{className:b.a.tourTitle,children:null===r||void 0===r?void 0:r.title}),Object(n.jsxs)("h3",{className:b.a.tourVersion,children:[null===I||void 0===I?void 0:I.hike_version," ",null===r||void 0===r?void 0:r.hikeVersion]}),Object(n.jsx)("div",{className:b.a.tourBody,dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.description}}),Object(n.jsxs)(d.a,{className:b.a.metaData,children:[Object(n.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:b.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:b.a.tourHeader,children:null===I||void 0===I?void 0:I.platform_version}),Object(n.jsx)("div",{className:b.a.tourContent,children:null===r||void 0===r?void 0:r.platformVersion})]}),Object(n.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:b.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:b.a.tourHeader,children:null===I||void 0===I?void 0:I.categories}),Object(n.jsx)("ul",{className:b.a.tourContent,children:null===r||void 0===r||null===(t=r.category)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)("li",{children:e})}))})]})]}),Object(n.jsx)("h3",{className:b.a.tourTime,children:"".concat(null===r||void 0===r?void 0:r.cards," ").concat(null===I||void 0===I?void 0:I.step," - ").concat(null===r||void 0===r?void 0:r.time)}),Object(n.jsx)("div",{className:b.a.tourDetails,dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.details}})]})]}),Object(n.jsx)("div",{className:b.a.startBtn,children:Object(n.jsx)(g.a,{title:null===I||void 0===I?void 0:I.start,type:"blue",onClick:function(e){return E(e)}})})]})]})}},t3Un:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return a}));var n=o("8SHQ"),a=function(t,o){(e&&e.env?"master":void 0)||n.a;var a="".concat(n.c,"/contents/").concat(o,"/zips/").concat(t),i="https://jkjhcl.github.io/".concat(n.b,"/contents/").concat(o,"/zips/").concat(t);return n.d?a:i}}).call(this,o("8oxB"))},zJMs:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tour",function(){return o("kACj")}])},zk85:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}},[["zJMs",1,2,5,0,3,4,18,23,7]]]);