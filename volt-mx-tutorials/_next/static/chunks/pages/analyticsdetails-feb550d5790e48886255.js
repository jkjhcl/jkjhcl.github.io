_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{CwOF:function(e,t,a){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",loaderWrapper:"_1WUHp",inline:"_1CIZH",content:"_3eG1G",center:"_2yi1U",assetListLoader:"_2dQf4"}},fS1W:function(e,t,a){"use strict";var n=a("nKUr"),o=(a("q1tI"),a("CwOF")),r=a.n(o),i=a("mOvS"),c=a.n(i)()().publicRuntimeConfig,s=function(e){var t=e.inline,a=e.size,o=e.height,i=e.width,s=e.className,l=e.style;return Object(n.jsx)("div",{style:l,className:"".concat(r.a.loaderWrapper," ").concat(t?r.a.inline:null," ").concat(s),children:Object(n.jsx)("div",{className:r.a.content,children:Object(n.jsx)("div",{className:r.a.center,children:Object(n.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/loader.svg"),alt:"Loader",height:o||a,width:i||a})})})})};s.defaultProps={inline:!1},t.a=s},osVo:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),o=a("o0o1"),r=a.n(o),i=a("HaE+"),c=a("1OyB"),s=a("vuIU"),l=a("JX7q"),d=a("Ji7U"),u=a("md7G"),p=a("foSv"),m=a("rePB"),f=a("q1tI"),b=a("/MKj"),j=a("ANjH"),g=a("9xET"),h=a.n(g),O=a("ZPTe"),D=a.n(O),v=a("k4Da"),w=a.n(v),S=a("wd/R"),y=a.n(S),x=a("TlR6"),I=a("9At1"),P=a("K4dc"),C=a("Zb9X"),U=a("8Gie"),k=a("WrOz"),E=(a("fS1W"),a("PGnZ")),_=a.n(E),R=a("32PK"),B=a("LhTS"),N=a("6UAj"),A=a("2Dw/");function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var H=function(e){Object(d.a)(a,e);var t=F(a);function a(e){var o;Object(c.a)(this,a),o=t.call(this,e),Object(m.a)(Object(l.a)(o),"columnsUsageDetail",[{title:"Mp Downloads",dataIndex:"Downloads",width:100},{title:"Imports into Forms",dataIndex:"overallUsage",width:100},{title:"Went Live",dataIndex:"liveUsage",width:100},{title:"No. of Debug",dataIndex:"debug",width:100},{title:"No. of releases",dataIndex:"release",width:100},{title:"Viz Downloads",dataIndex:"vizDownloads",width:100},{title:"Live Viz",dataIndex:"liveViz",width:80},{title:"Project vs Hits",dataIndex:"output",width:200}]),Object(m.a)(Object(l.a)(o),"columnsMetricPerformance",[{title:"Time",dataIndex:"time",sorter:function(e,t){return new Date(t.time)-new Date(e.time)},sortDirections:["descend","ascend"],width:100},{title:"Date",dataIndex:"date",sorter:function(e,t){return new Date(t.date)-new Date(e.date)},sortDirections:["descend","ascend"],width:100},{title:"Downloader ID",dataIndex:"downloaderId",sorter:function(e,t){return e.downloaderId.localeCompare(t.downloaderId)},sortDirections:["descend","ascend"],width:100},{title:"Downloader Company",dataIndex:"downloaderCompany",sorter:function(e,t){return e.downloaderId.localeCompare(t.downloaderId)},sortDirections:["descend","ascend"],width:100}]),Object(m.a)(Object(l.a)(o),"getData",function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o.setState({loading:!0}),e.next=4,P.c.get("api/v1_0/marketplace/get_analytics_details",{params:{from_date:t[0],to_date:t[1],title:o.state.componentName}});case 4:a=e.sent,o.setState({loading:!1,metricPerformanceData:a.data,originalData:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o.setState({loading:!1,metricPerformanceData:[],originalData:[]});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),Object(m.a)(Object(l.a)(o),"onChange",(function(e,t,a,n){var r=n.currentDataSource;o.setState({loading:!1,metricPerformanceData:r,originalData:r})})),Object(m.a)(Object(l.a)(o),"renderContent",(function(e){var t=o.state,a=t.loading,r=t.dates,i=t.momentDates,c=t.metricPerformanceData,s=t.usageDetail;return delete s.component,e?Object(n.jsxs)(f.Fragment,{children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(D.a,{span:16,children:Object(n.jsx)(U.a,{title:o.state.componentName,subRoutes:[{name:"Dashboard",path:"".concat(A.a,"marketplace/dashboard")},{name:"Component Performance",path:"/analytics/component"}]})}),Object(n.jsx)(D.a,{span:8,className:_.a.datePanel,children:Object(n.jsx)(k.a,{setDate:o.setDate,defaultDateValuesInMoment:i,defaultDateValues:r})})]}),Object(n.jsxs)(h.a,{children:[Object(n.jsxs)(D.a,{children:[Object(n.jsx)(D.a,{span:12,children:Object(n.jsx)("h2",{className:_.a.tableHeading,children:"Usage Detail"})}),Object(n.jsx)(D.a,{span:12,children:Object(n.jsx)(N.a,{data:c,columns:o.columnsMetricPerformance,fileNameSuffix:"analytics_details"})})]}),Object(n.jsx)(D.a,{className:_.a.filterTablePanel,children:Object(n.jsx)(B.a,{data:s,columns:o.columnsUsageDetail,onChange:o.onChange,loading:a})})]}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(D.a,{children:Object(n.jsx)("h2",{className:_.a.tableHeading,children:"Keyword Performance"})}),Object(n.jsx)(D.a,{children:Object(n.jsx)(B.a,{showPagination:!0,data:c,columns:o.columnsMetricPerformance,onChange:o.onChange,loading:a})})]})]}):Object(n.jsx)(R.a,{})}));var s=o.props.url.query,d=s.to_date,u=s.from_date,p=JSON.parse(decodeURIComponent(s.data));return o.state={componentName:p.component,metricPerformanceData:[],originalData:[],loading:!1,dates:[u,d],momentDates:[y()(u),y()(d)],usageDetail:[p]},o.setDate=o.setDate.bind(Object(l.a)(o)),o.getData=o.getData.bind(Object(l.a)(o)),o.filterData=o.filterData.bind(Object(l.a)(o)),o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.dates;this.getData(e)}},{key:"setDate",value:function(e,t){this.setState({dates:e,momentDates:t}),this.getData(e)}},{key:"filterData",value:function(e){var t=this.state.originalData;this.setState({metricPerformanceData:w()(t,(function(t){return t.date.toString().toLowerCase().includes(e.toString().toLowerCase())}))})}},{key:"render",value:function(){var e=this.props,t=e.marketplace,a=e.url,o=t.config,r=t.moderatorMenu;return Object(n.jsxs)(C.a,{config:o,url:a,children:[Object(n.jsx)(x.a,{filterData:this.filterData,placeholder:"Search for Marketplace Component"}),Object(n.jsx)("div",{children:this.renderContent(r&&r.subMenu&&r.subMenu.length>0)})]})}}],[{key:"getFormattedDate",value:function(e){var t=e,a=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();return"".concat(o,"-").concat(n,"-").concat(a)}},{key:"getInitialProps",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)(t);case 2:return e.next=4,t.store.dispatch(I.b.getConfig(!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getInitialProps",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)(t);case 2:return e.next=4,t.store.dispatch(I.b.getConfig(!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(f.Component);t.default=Object(b.b)((function(e){return{marketplace:e.marketplace}}),(function(e){return Object(j.bindActionCreators)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},I.b),e)}))(H)},zYJf:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analyticsdetails",function(){return a("osVo")}])}},[["zYJf",1,2,6,10,12,15,0,3,4,5,7,9,11,13,14,16,17,18,20,22,23,25,8]]]);