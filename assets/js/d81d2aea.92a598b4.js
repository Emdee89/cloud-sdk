(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(216)),i={id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi"],image:null},s={unversionedId:"java/features/rest/overview",id:"java/features/rest/overview",isDocsHomePage:!1,title:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",source:"@site/docs/java/features/rest/overview.mdx",slug:"/java/features/rest/overview",permalink:"/cloud-sdk/docs/java/features/rest/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/rest/overview.mdx",version:"current",lastUpdatedBy:"Emdee89",lastUpdatedAt:1618538293,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Generic Advanced OData Client",permalink:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},next:{title:"Generate a Typed OpenAPI Client",permalink:"/cloud-sdk/docs/java/features/rest/generate-rest-client"}},c=[{value:"OpenAPI Based Type-Safe Client for RESTful Services in Java",id:"openapi-based-type-safe-client-for-restful-services-in-java",children:[{value:"Pregenerated Type-Safe OpenAPI Client",id:"pregenerated-type-safe-openapi-client",children:[]}]},{value:"Why Using SAP Cloud SDK for Java With OpenAPI Services?",id:"why-using-sap-cloud-sdk-for-java-with-openapi-services",children:[]},{value:"I&#39;m Providing a Service on SAP Business Technology Platform. How Can I Ship It With SAP Cloud SDK?",id:"im-providing-a-service-on-sap-business-technology-platform-how-can-i-ship-it-with-sap-cloud-sdk",children:[]},{value:"Feedback",id:"feedback",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Released as generally available")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"OpenAPI code generator and type-safe client are released as generally available and ready for productive use."))),Object(o.b)("h2",{id:"openapi-based-type-safe-client-for-restful-services-in-java"},"OpenAPI Based Type-Safe Client for RESTful Services in Java"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," standard is a popular format to define RESTful APIs.\nTogether with ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/overview"},"OData")," it is one of the key API definition formats used at SAP.\nThe SAP Cloud SDK provides convenient tooling to make the consumption of OpenAPI services easy and convenient.\nWe provide a customized ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/rest/generate-rest-client"},"OpenAPI code generator")," capable of converting an OpenAPI specification into a type-safe Java client library nicely integrated with the SAP Business Technology Platform abstractions also provided by the SAP Cloud SDK.\nYou can use that generator to create a client for an OpenAPI-based API of your choice.\nTo speed up things for developers and reduce maintenance, we are working with different SAP services to release pre-generated client libraries available through ",Object(o.b)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cloud.sdk*"},"Maven Central"),".\nAnother way to get a client library is to generate it yourself based on API specifications available at ",Object(o.b)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub"),".\nIf you encounter any problems or errors with OpenAPI tooling give us feedback via our ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels"),"."),Object(o.b)("h3",{id:"pregenerated-type-safe-openapi-client"},"Pregenerated Type-Safe OpenAPI Client"),Object(o.b)("p",null,"We ship pre-generated type-safe OpenAPI client libraries as modules in collaboration with popular SAP services available on SAP Business Technology Platform and beyond."),Object(o.b)("p",null,"Depending on the scope, modules could be available only internally within SAP or publicly released.\nThe ",Object(o.b)("a",{parentName:"p",href:"clients/scp-workflow-rest-api"},"SAP Workflow service")," is an example of a publicly released API module."),Object(o.b)("h2",{id:"why-using-sap-cloud-sdk-for-java-with-openapi-services"},"Why Using SAP Cloud SDK for Java With OpenAPI Services?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You'll benefit from type-safety, less code boilerplate, and better developer experience."),Object(o.b)("li",{parentName:"ul"},"We take care of various complexities around the development of applications and extensions on the SAP Business Technology Platform."),Object(o.b)("li",{parentName:"ul"},"You'll get convenience abstractions for Destinations, Authentication, Service bindings, CSRF and ETag tokens, Headers, and much more."),Object(o.b)("li",{parentName:"ul"},"We hide the complexities of cloud development making many tasks ridiculously easy."),Object(o.b)("li",{parentName:"ul"},"You're getting best in class support from the SAP Cloud SDK development team"),Object(o.b)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating, and shipping the latest version of services that we release."),Object(o.b)("li",{parentName:"ul"},"Our documentation is written by developers for developers.\nWe keep it relevant and up to date.")),Object(o.b)("h2",{id:"im-providing-a-service-on-sap-business-technology-platform-how-can-i-ship-it-with-sap-cloud-sdk"},"I'm Providing a Service on SAP Business Technology Platform. How Can I Ship It With SAP Cloud SDK?"),Object(o.b)("p",null,"Reach out to us via internal communication channels and we'll provide you with information on contributing."),Object(o.b)("h2",{id:"feedback"},"Feedback"),Object(o.b)("p",null,"We are happy to hear from you via internal communication channels or our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new/choose"},"GitHub repository"),"."))}p.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(f,s(s({ref:t},l),{},{components:a})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);