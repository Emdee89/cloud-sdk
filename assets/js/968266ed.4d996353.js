(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{208:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return f})),t.d(a,"metadata",(function(){return b})),t.d(a,"toc",(function(){return g})),t.d(a,"default",(function(){return L}));var s=t(3),n=t(7),c=t(0),o=t.n(c),r=t(214),i=t(226),d=t(237),u=t.n(d),v=t(238),l=t.n(v),p=t(239),k=t.n(p),m=t(247),h=t(246),y=t(248);function j(){var e=o.a.useMemo((function(){return h.a}),[]),a=o.a.useMemo((function(){return m.a}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{plugins:[k.a,l.a]},"**Legend:** :heavy_check_mark: - Generally Available, :x: - Not Available, :bulb: - Beta, :gear: - Planned"),o.a.createElement(y.a,{columns:a,data:e}))}var f={id:"overview-cloud-sdk-for-java",title:"Java SDK Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},b={unversionedId:"java/overview-cloud-sdk-for-java",id:"java/overview-cloud-sdk-for-java",isDocsHomePage:!1,title:"Java SDK Overview",description:"The SAP Cloud SDK for Java significantly simplifies extending and developing an application with SAP Business Technology Platform",source:"@site/docs/java/overview.mdx",slug:"/java/overview-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/overview-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/overview.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1616416205,formattedLastUpdatedAt:"3/22/2021",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Get Support",permalink:"/cloud-sdk/docs/overview/get-support"},next:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/getting-started"}},g=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Why the SAP Cloud SDK for Java?",id:"why-the-sap-cloud-sdk-for-java",children:[]},{value:"Feature Matrix",id:"feature-matrix",children:[]}],_={toc:g};function L(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},_,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)(i.a,{mdxType:"MvnBadge"}),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"For a quick start check ",Object(r.b)("a",{parentName:"p",href:"getting-started"},"getting started")," section."),Object(r.b)("h2",{id:"why-the-sap-cloud-sdk-for-java"},"Why the SAP Cloud SDK for Java?"),Object(r.b)("p",null,"The SAP Cloud SDK for Java allows you to develop, extend, and communicate with SAP solutions SAP S/4HANA, SAP SuccessFactors, and many others."),Object(r.b)("h2",{id:"feature-matrix"},"Feature Matrix"),Object(r.b)(j,{mdxType:"JavaFeatureTable"}))}L.isMDXComponent=!0},226:function(e,a,t){"use strict";var s=t(0),n=t.n(s);a.a=function(e){var a=e.align;return n.a.createElement("span",{className:a?"col text--right":""},n.a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}},246:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var s="/cloud-sdk/docs",n=[{name:"[SOAP](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/bb/ddb33d2ae46b3be10000000a114084/content.htm?no_cache=true)",category:"Legacy",java:{status:":heavy_check_mark:",docsLink:"",note:""},js:{status:":x:",docsLink:"",note:"Take a look at the [node-soap](https://github.com/vpulim/node-soap) library"}},{name:"[BAPI](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/4d/c89000ebfc5a9ee10000000a42189b/frameset.htm)",category:"Legacy",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/bapi-and-rfc/bapi-and-rfc-overview/)",note:""},js:{status:":x:",docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[RFC](https://help.sap.com/doc/saphelp_nw73/7.3.16/en-US/48/9f1952a81417cee10000000a421937/frameset.htm)",category:"Legacy",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/bapi-and-rfc/bapi-and-rfc-overview/)",note:""},js:{status:":x:",docsLink:"",note:"Take a look at the [SAP NetWeaver RFC SDK client bindings for Node.js](https://github.com/SAP/node-rfc)"}},{name:"[OData v2 type-safe client](https://www.odata.org/documentation/odata-version-2-0/)",category:"OData",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript)",note:""}},{name:"[OData v4 type-safe client](https://www.odata.org/documentation/)",category:"OData",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript)",note:""}},{name:"Generic OData client",category:"OData",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/odata/generic-untyped-odata-client)",note:""},js:{status:":x:",docsLink:"",note:"We expose [gelneric HTTP client](${baseUrl}/js/features/connectivity/generic-http-client) aware of connectivity abstractions"}},{name:"[OData code generator](https://www.odata.org/documentation/)",category:"OData",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/odata/generate-odata-client)",note:""}},{name:"OpenAPI 2.0 type-safe client",category:"OpenAPI",java:{status:":bulb:",docsLink:"[docs]("+s+"/java/features/rest/overview)",note:""},js:{status:":bulb:",docsLink:"[docs]("+s+"/js/features/openapi/execute-openapi-request)",note:""}},{name:"OpenAPI 3.0 type-safe client",category:"OpenAPI",java:{status:":bulb:",docsLink:"[docs]("+s+"/java/features/rest/overview)",note:""},js:{status:":bulb:",docsLink:"[docs]("+s+"/js/features/openapi/execute-openapi-request)",note:""}},{name:"OpenAPI code generator",category:"OpenAPI",java:{status:":bulb:",docsLink:"[docs]("+s+"/java/features/rest/generate-rest-client)",note:""},js:{status:":bulb:",docsLink:"[docs]("+s+"/js/features/openapi/generate-openapi-client)",note:""}},{name:"Enterprise messaging",category:"Messaging",java:{status:":gear:",docsLink:"",note:"Planned. Depends on CAP"},js:{status:":gear:",docsLink:"",note:"Planned. Depends on CAP"}},{name:"Resilience pattern",category:"Advanced",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/resilience/resilience)",note:""},js:{status:":x:",docsLink:"",note:""}},{name:"Caching pattern",category:"Advanced",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/resilience/resilience)",note:""},js:{status:":x:",docsLink:"",note:""}},{name:"[SCP Cloud Foundry](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html)",category:"Runtime",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/guides/cf-deploy)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"js/features/cli/package)",note:""}},{name:"[BTP Neo](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US)",category:"Runtime",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/guides/tutorial-overview-sdk-java/#groups-for-neo)",note:"Not recommended for new projects"},js:{status:":x:",docsLink:"",note:""}},{name:"[BTP CF Destinations](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html)",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/connectivity/sdk-connectivity-destination-service)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/destination)",note:""}},{name:"[BTP CF Service Bindings](https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/bb8009dbb7814a2a94e42983fbaa9bae.html)",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"",note:""},js:{status:":heavy_check_mark:",docsLink:"",note:""}},{name:"Authentication",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/destination#authentication-and-json-web-token-retrievjal)",note:""}},{name:"Multi-tenancy",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/multi-tenancy/multi-tenancy-thread-context)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/destination#multi-tenancy)",note:""}},{name:"Proxy",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/connectivity/sdk-connectivity-destination-service)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/destination#multi-tenancy)",note:""}},{name:"HTTP Client wrapper",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/connectivity/sdk-connectivity-http-client)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/generic-http-client)",note:""}},{name:"[Principal propagation](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e2cbb48def4342048362039cc157b12e.html?q=principal)",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/on-premise#principal-propagation)",note:""}},{name:"[Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector)",category:"Connectivity",java:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/java/features/connectivity/sdk-connectivity-destination-service#connect-to-sap-s4hana-on-premise)",note:""},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/connectivity/on-premise)",note:""}},{name:"CLI",category:"CLI",java:{status:":heavy_check_mark:",docsLink:"",note:"Via a Maven plugin "},js:{status:":heavy_check_mark:",docsLink:"[docs]("+s+"/js/features/cli/overview)",note:""}},{name:"MDI",category:"MDI",java:{status:":bulb:",docsLink:"",note:"Internal only or allow listed"},js:{status:":x:",docsLink:"",note:"Planned if requested"}},{name:"Deploy with Confidence",category:"Runtimes",java:{status:":bulb:",docsLink:"",note:"Internal only or allow listed"},js:{status:":x:",docsLink:"",note:"Planned if requested"}}]},247:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return c}));var s=[{Header:"Feature",columns:[{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}],n=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK Java",columns:[{Header:"Status",accessor:"java.status"},{Header:"Docs",accessor:"java.docsLink"},{Header:"Notes",accessor:"java.note"}]}],c=[{Header:"Feature",columns:[{Header:"Category",accessor:"category"},{Header:"Name",accessor:"name"}]},{Header:"SAP Cloud SDK JavaScript",columns:[{Header:"Status",accessor:"js.status"},{Header:"Docs",accessor:"js.docsLink"},{Header:"Notes",accessor:"js.note"}]}]},248:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var s=t(3),n=t(0),c=t.n(n),o=t(237),r=t.n(o),i=t(266),d=t(239),u=t.n(d),v=t(238),l=t.n(v);function p(e){var a=e.columns,t=e.data,n=Object(i.useTable)({columns:a,data:t}),o=n.getTableProps,d=n.getTableBodyProps,v=n.headerGroups,p=n.rows,k=n.prepareRow;return c.a.createElement("table",o(),c.a.createElement("thead",null,v.map((function(e){return c.a.createElement("tr",Object(s.a)({key:e.key},e.getHeaderGroupProps()),e.headers.map((function(e){return c.a.createElement("th",Object(s.a)({key:e.key},e.getHeaderProps()),e.render("Header"))})))}))),c.a.createElement("tbody",d(),p.map((function(e,a){return k(e),c.a.createElement("tr",Object(s.a)({key:e.key},e.getRowProps()),e.cells.map((function(e){return c.a.createElement("td",Object(s.a)({key:e.key},e.getCellProps()),c.a.createElement(r.a,{plugins:[u.a,l.a]},e.value))})))}))))}}}]);