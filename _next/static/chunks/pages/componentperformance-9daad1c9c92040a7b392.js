_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"6y2K":function(t,e,n){"use strict";n.r(e),n.d(e,"columns",(function(){return X})),n.d(e,"ComponentPerformancePage",(function(){return q}));var a=n("nKUr"),r=n("o0o1"),o=n.n(r),c=n("HaE+"),i=n("1OyB"),s=n("vuIU"),u=n("JX7q"),l=n("Ji7U"),d=n("md7G"),f=n("foSv"),p=n("rePB"),b=n("q1tI"),j=n("/MKj"),g=n("ANjH"),h=n("9xET"),O=n.n(h),m=n("ZPTe"),v=n.n(m),D=n("k4Da"),w=n.n(D),y=n("bNQv"),x=n.n(y),P=n("20a2"),k=n.n(P),S=n("wd/R"),_=n.n(S),C=n("TlR6"),I=n("9At1"),N=n("K4dc"),R=n("Zb9X"),T=n("8Gie"),z=n("WrOz"),U=n("PGnZ"),E=n.n(U),M=n("32PK"),V=n("LhTS"),A=n("6UAj"),F=n("2Dw/");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var X=[{title:"Comp. Name",dataIndex:"component",sorter:function(t,e){return t.component.localeCompare(e.component)},sortDirections:["descend","ascend"],width:110},{title:"Mp Downloads",dataIndex:"Downloads",sorter:function(t,e){return t.Downloads-e.Downloads},width:100},{title:"Imports into Forms",dataIndex:"overallUsage",sorter:function(t,e){return t.overallUsage-e.overallUsage},sortDirections:["descend","ascend"],width:100},{title:"Went Live",dataIndex:"liveUsage",sorter:function(t,e){return t.liveUsage-e.liveUsage},sortDirections:["descend","ascend"],width:100},{title:"No. of Debug",dataIndex:"debug",sorter:function(t,e){return t.debug-e.debug},sortDirections:["descend","ascend"],width:100},{title:"No. of releases",dataIndex:"release",sorter:function(t,e){return t.release-e.release},sortDirections:["descend","ascend"],width:100},{title:"Viz / Downloads",dataIndex:"vizDownloads",sorter:function(t,e){return t.vizDownloads-e.vizDownloads},sortDirections:["descend","ascend"],width:100},{title:"Live / Viz",dataIndex:"liveViz",sorter:function(t,e){return t.liveViz-e.liveViz},sortDirections:["descend","ascend"],width:80},{title:"Project vs Hits",dataIndex:"output",width:200}],q=function(t){Object(l.a)(n,t);var e=L(n);function n(t){var r;Object(i.a)(this,n),r=e.call(this,t),Object(p.a)(Object(u.a)(r),"getData",function(){var t=Object(c.a)(o.a.mark((function t(e){var n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.setState({loading:!0}),t.next=4,N.c.get("api/v1_1/marketplace/analytics",{params:{from_date:e[0],to_date:e[1]}});case 4:n=t.sent,a=n.data,c=a.map((function(t){return J(J({},t),{},{output:r.getTokenizedString(t)})})),r.setState({loading:!1,data:c,originalData:c}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),r.setState({loading:!1,data:[],originalData:[]});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()),Object(p.a)(Object(u.a)(r),"setDate",(function(t,e){r.setState({dates:t,momentDates:e}),r.getData(t)})),Object(p.a)(Object(u.a)(r),"filterData",(function(t){var e=r.state.originalData;r.setState({data:w()(e,(function(e){return e.component.toString().toLowerCase().includes(t.toString().toLowerCase())}))})})),Object(p.a)(Object(u.a)(r),"onRowClickParent",(function(t){var e=r.state.dates,n={data:encodeURIComponent(JSON.stringify(t)),from_date:e[0],to_date:e[1]};k.a.replace({pathname:"/analyticsdetails",query:n})})),Object(p.a)(Object(u.a)(r),"onChange",(function(t,e,n,a){var o=a.currentDataSource;r.setState({loading:!1,data:o,originalData:o})})),Object(p.a)(Object(u.a)(r),"renderContent",(function(t){var e=r.state,n=e.loading,o=e.dates,c=e.momentDates,i=e.data;return t?Object(a.jsxs)(b.Fragment,{children:[Object(a.jsxs)(O.a,{children:[Object(a.jsx)(v.a,{span:14,children:Object(a.jsx)(T.a,{title:"Component Performance",subRoutes:[{name:"Dashboard",path:"".concat(F.a,"marketplace/dashboard")},{name:"Analytics",path:"/analytics"}]})}),Object(a.jsx)(v.a,{span:10,className:E.a.datePanel,children:Object(a.jsx)(z.a,{setDate:r.setDate,defaultDateValuesInMoment:c,defaultDateValues:o})})]}),Object(a.jsxs)(O.a,{children:[Object(a.jsx)(v.a,{children:Object(a.jsx)(A.a,{data:i,columns:X,fileNameSuffix:"components_performance_analytics"})}),Object(a.jsx)(v.a,{className:E.a.filterTablePanel,children:Object(a.jsx)(V.a,{onRowClick:r.onRowClickParent,showPagination:!0,data:i,onChange:r.onChange,loading:n,columns:X})})]})]}):Object(a.jsx)(M.a,{})}));var s=n.getFormattedDate(new Date),l=n.getFormattedDate(new Date((new Date).getTime()-6048e5));return r.state={data:[],originalData:[],loading:!1,dates:[l,s],momentDates:[_()(l),_()(s)]},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this.state.dates;this.getData(t)}},{key:"getTokenizedString",value:function(t){var e=t.output.split(",");e.pop();var n="";return x()(e,(function(t){var e=t.split("/");if(e.length>1){var a="".concat(e[0]," ").concat(e[1].split(":")[1]);n+="".concat(a," , ")}else if(1===e.length){var r=e[0].replace(/:/g," ");n+="".concat(r," , ")}})),n=n.substring(0,n.length-2)}},{key:"render",value:function(){var t=this.props,e=t.marketplace,n=t.url,r=e.config,o=e.moderatorMenu;return Object(a.jsxs)(R.a,{config:r,url:n,children:[Object(a.jsx)(C.a,{filterData:this.filterData,placeholder:"Search for Marketplace Assets",search:!0}),Object(a.jsx)("div",{children:this.renderContent(o&&o.subMenu&&o.subMenu.length>0)})]})}}],[{key:"getFormattedDate",value:function(t){var e=t,n=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return"".concat(r,"-").concat(a,"-").concat(n)}},{key:"getInitialProps",value:function(){var t=Object(c.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.a)(e);case 2:return t.next=4,e.store.dispatch(I.b.getConfig(!0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(b.Component);e.default=Object(j.b)((function(t){return{marketplace:t.marketplace}}),(function(t){return Object(g.bindActionCreators)(J({},I.b),t)}))(q)},TsVu:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/componentperformance",function(){return n("6y2K")}])}},[["TsVu",1,2,5,8,11,14,0,3,4,6,9,10,12,13,15,16,17,19,20,21,7]]]);