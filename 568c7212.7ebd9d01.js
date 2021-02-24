(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{130:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),r=(o(0),o(205)),i={id:"video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",title:"Video Tutorial: Generate Your Type-Safe OData Client",sidebar_label:"Destinations and Cloud Connector",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Cloud Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",id:"java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",isDocsHomePage:!1,title:"Video Tutorial: Generate Your Type-Safe OData Client",description:"You will learn how to generate type-safe OData client with SAP Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Cloud Platform",source:"@site/docs/java/video/connectivity-service.mdx",slug:"/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/video/connectivity-service.mdx",version:"current",lastUpdatedBy:"Emdee89",lastUpdatedAt:1614131233,sidebar_label:"Destinations and Cloud Connector",sidebar:"someSidebar",previous:{title:"Video Tutorial: Generate Your Type-Safe OData Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java"},next:{title:"Video Tutorial: Use the Type-Safe OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"}},l=[{value:"Looking for More?",id:"looking-for-more",children:[]}],s={toc:l};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Cloud-native applications are no piece of cake when you have to connect to ",Object(r.b)("strong",{parentName:"p"},"On-Premise")," systems and deliver Apps or extensions on top of that.\nWell, in SAP Cloud SDK for Java we think otherwise!\nTo prove it, we provide convenient abstractions over destinations to let you seamlessly connect to your ",Object(r.b)("strong",{parentName:"p"},"On-Premise")," system from your cloud app.\nWhat to know how?\nWatch this comprehensive video tutorial by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"}),"Max Streifeneder")," and check our docs on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../features/connectivity/sdk-connectivity-destination-service"}),"connectivity")),Object(r.b)("div",{class:"sdk-video-container"},Object(r.b)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/Ky1R0Yq-zKg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(r.b)("h2",{id:"looking-for-more"},"Looking for More?"),Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"}),"Max's channel")," for other videos on SAP Cloud SDK and other SAP technologies.\nHe speaks about difficult enterprise software topics and helps to navigate the vast SAP Cloud ecosystem to help you deliver beautiful Apps and Extensions for SAP S/4HANA and other popular SAP products."))}d.isMDXComponent=!0},205:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return v}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(o),f=n,v=u["".concat(i,".").concat(f)]||u[f]||p[f]||r;return o?a.a.createElement(v,c(c({ref:t},s),{},{components:o})):a.a.createElement(v,c({ref:t},s))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}f.displayName="MDXCreateElement"}}]);