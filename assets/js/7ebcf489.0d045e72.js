(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6858],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8755:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}},3150:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=a(2122),o=a(9756),i=(a(7294),a(3905)),r=a(8755),s={id:"sdk-java-troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},l={unversionedId:"java/sdk-java-troubleshooting-frequent-problems",id:"java/sdk-java-troubleshooting-frequent-problems",isDocsHomePage:!1,title:"Troubleshooting SDK Java",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",source:"@site/docs/java/troubleshooting.mdx",sourceDirName:"java",slug:"/java/sdk-java-troubleshooting-frequent-problems",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/troubleshooting.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1620390756,formattedLastUpdatedAt:"5/7/2021",sidebar_label:"Troubleshooting",frontMatter:{id:"sdk-java-troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},sidebar:"someSidebar",previous:{title:"Video Tutorial: Use the Type-Safe OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"}},d=[{value:"Solving common problems",id:"solving-common-problems",children:[]},{value:"Tenant or Principal Not Available",id:"tenant-or-principal-not-available",children:[]},{value:"Provider Instead of Subscriber Account Used",id:"provider-instead-of-subscriber-account-used",children:[]},{value:"JSON Web Token Validation Fails",id:"json-web-token-validation-fails",children:[]},{value:"Connecting to an ERP System fails",id:"connecting-to-an-erp-system-fails",children:[]},{value:"Compilation Failures in the Generated OData Virtual Data Model Classes",id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes",children:[]},{value:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version",id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",children:[]},{value:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment",id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",children:[]},{value:"Request via Cloud Connector fails with HTTP 407",id:"request-via-cloud-connector-fails-with-http-407",children:[]},{value:"No Such Method: com.google.gson.JsonParser.parseReader",id:"no-such-method-comgooglegsonjsonparserparsereader",children:[]},{value:"Class Not Found: Json Encoder",id:"class-not-found-json-encoder",children:[]}],p={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"MvnBadge"}),(0,i.kt)("h2",{id:"solving-common-problems"},"Solving common problems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if you're using the latest ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"SAP Cloud SDK version"),".\nWe release significant updates bi-weekly."),(0,i.kt)("li",{parentName:"ul"},"Try searching on ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"},"Stack Overflow"),"\nYou can ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions"},"ask there questions")," as well by tagging it with ",(0,i.kt)("inlineCode",{parentName:"li"},"sap-cloud-sdk")),(0,i.kt)("li",{parentName:"ul"},"Check this page for known solutions for most frequent problems"),(0,i.kt)("li",{parentName:"ul"},"Welcome to our ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/overview/get-support"},"awesome support")," if nothing else helps.")),(0,i.kt)("h2",{id:"tenant-or-principal-not-available"},"Tenant or Principal Not Available"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tenant or principal information is not available or an incorrect tenant is used."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A subscriber based JWT is passed in but its validation fails, causing the SAP Cloud SDK to fall back to the provider account.\nSee ",(0,i.kt)("a",{parentName:"p",href:"#jwt-validation-fails"},"JWT validation fails"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An operation is performed in an asynchronous manner without propagating the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"features/multi-tenancy/multi-tenancy-thread-context#running-asynchronous-operations"},"Running Asynchronous Operations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The SAP Cloud SDK components are not registered as listeners on incoming requests.\nSee ",(0,i.kt)("a",{parentName:"p",href:"getting-started#framework-integration"},"Framework Support"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There was no JWT in the authorization header.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A BAPI/RFC call was attempted while using resilience or multithreading capabilities of the SAP Cloud SDK.\nSee ",(0,i.kt)("a",{parentName:"p",href:"features/bapi-and-rfc/bapi-and-rfc-overview#subscriber-tenant-is-not-found-at-runtime"},"Subscriber Tenant Is Not Found at Runtime")))),(0,i.kt)("h2",{id:"provider-instead-of-subscriber-account-used"},"Provider Instead of Subscriber Account Used"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Destinations are returned only for the provider account, but not for a subscriber account."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Cloud SDK defaults back to the provider account if no tenant information is available.\nSee the above section on ",(0,i.kt)("a",{parentName:"li",href:"#tenant-or-principal-not-available"},"Tenant or Principal not available"),".")),(0,i.kt)("h2",{id:"json-web-token-validation-fails"},"JSON Web Token Validation Fails"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Logs show JWT validation exceptions, Tenant information is not available."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Cloud SDK version might be outdated.\nCheck with the ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"latest SAP Cloud SDK version"),".")),(0,i.kt)("h2",{id:"connecting-to-an-erp-system-fails"},"Connecting to an ERP System fails"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ERP system unexpectedly responds with ",(0,i.kt)("em",{parentName:"p"},"401: Unauthorized")," or ",(0,i.kt)("em",{parentName:"p"},"403: Forbidden"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Client and Locale headers will be missing if the ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," is not an ",(0,i.kt)("inlineCode",{parentName:"li"},"ErpHttpDestination"),".\nSee ",(0,i.kt)("a",{parentName:"li",href:"features/connectivity/sdk-connectivity-destination-service#connect-to-on-premise-s4hana-system"},"Connecting to SAP S/4HANA"),".")),(0,i.kt)("h2",{id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes"},"Compilation Failures in the Generated OData Virtual Data Model Classes"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Compilation fails due to missing ",(0,i.kt)("em",{parentName:"p"},"Getters")," and ",(0,i.kt)("em",{parentName:"p"},"Setters")," on entity objects."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Getters and Setters will be missing if ",(0,i.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Lombok")," is not present in the dependency tree of your project.\nSee ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java#using-the-odata-generator"},"Using the OData Generator"),"."),(0,i.kt)("li",{parentName:"ul"},"Getters and Setters will be shown red if your IDE does not support Lombok. Hence, install the Lombok plugin for your IDE.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For IntelliJ, install ",(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"the Lombok plugin"),"."),(0,i.kt)("li",{parentName:"ul"},"For Eclipse, follow ",(0,i.kt)("a",{parentName:"li",href:"https://projectlombok.org/setup/eclipse"},"this guide"),".")))),(0,i.kt)("h2",{id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version"},"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"MethodNotFound"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassDefNotFound")," or similar exceptions occur."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conflicting dependency versions may cause such issues.\nSee the section on ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/guides/manage-dependencies#dealing-with-dependency-conflicts"},"Managing Dependencies"),".")),(0,i.kt)("h2",{id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment"},"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The Java app executes multiple threads and runs with good performance on a powerful local machine."),(0,i.kt)("li",{parentName:"ul"},"The performance significantly drops after the app is deployed to SAP Business Technology Platform - Cloud Foundry and CPU utilization is always around 100%.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A powerful developer's machine usually has much better CPU and memory capacity than a standard cloud instance."),(0,i.kt)("li",{parentName:"ul"},"SAP BTP, Cloud Foundry environment provides 1/4 of CPU unit per every GB of memory.\nWith maximum memory per instance of 8 GB, you can get a maximum of 2 CPU cores."),(0,i.kt)("li",{parentName:"ul"},"All the limitations are subject to change.\nPlease check the latest details about ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94"},"SAP BTP, Cloud Foundry Environment quotas and limitations")),(0,i.kt)("li",{parentName:"ul"},"If even after achieving the maximum vertical scale of your instance, your app doesn't reach the desired performance level, try to optimize it.\nConsider scaling it horizontally or different custom solutions to boost performance where it lags.")),(0,i.kt)("h2",{id:"request-via-cloud-connector-fails-with-http-407"},"Request via Cloud Connector fails with HTTP 407"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In your application log you find the HTTP error code 407 and the request targets an On-Premise system via the SAP Cloud Connector."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You are caching the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," instance in your application code instead of retrieving it for each request.\nSince the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," object stores the JWT needed for passing the SAP Cloud Connector, the JWT does not get refreshed after its expiration."),(0,i.kt)("p",{parentName:"li"},"To solve this issue, retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," for each request again with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationAccessor")," API.\nThere is no need to worry about performance, because the SAP Cloud SDK uses an optimized built-in cache for Destinations."))),(0,i.kt)("h2",{id:"no-such-method-comgooglegsonjsonparserparsereader"},"No Such Method: com.google.gson.JsonParser.parseReader"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In your application log you find exception ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.NoSuchMethodError: com.google.gson.JsonParser.parseReader(Lcom/google/gson/stream/JsonReader;)Lcom/google/gson/JsonElement;"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your project uses the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/gson"},"GSON library")," in version ",(0,i.kt)("inlineCode",{parentName:"li"},"2.8.5")," or earlier.\nThis could happen if you do not use the SAP Cloud SDK Bill-of-Material.\nTo solve this issue, update GSON to at least version ",(0,i.kt)("inlineCode",{parentName:"li"},"2.8.6"),".")),(0,i.kt)("h2",{id:"class-not-found-json-encoder"},"Class Not Found: Json Encoder"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your application does not start and fails with the error message ",(0,i.kt)("inlineCode",{parentName:"p"},'"Could not create component [encoder] of type [com.sap.hcp.cf.logback.encoder.JsonEncoder] java.lang.ClassNotFoundException: com.sap.hcp.cf.logback.encoder.JsonEncoder"'),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your project uses the ",(0,i.kt)("a",{parentName:"li",href:"http://logback.qos.ch/"},"Logback library")," for application logging.\nThe required dependency ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.hcp.cf.logging:cf-java-logging-support-logback")," is missing.\nTo solve this issue, add this dependency to your project.\nAlso, use the SDK Bill-Of-Material in your POM to manage the version of this dependency.")))}m.isMDXComponent=!0}}]);