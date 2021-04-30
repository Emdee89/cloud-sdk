(window.webpackJsonp=window.webpackJsonp||[]).push([[139,12,23,49,54],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(221)),s=(n(222),n(280)),i={title:"Executing a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"This article describes how to generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]},c={unversionedId:"js/features/openapi/execute-openapi-request",id:"js/features/openapi/execute-openapi-request",isDocsHomePage:!1,title:"Executing a Request Using a Generated OpenAPI Client",description:"This article describes how to generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/execute-openapi-request.mdx",slug:"/js/features/openapi/execute-openapi-request",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/execute-openapi-request.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1619788419,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Execute an OpenAPI Request",sidebar:"someSidebar",previous:{title:"Use the OpenAPI Generator to Generate Typed Clients",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},next:{title:"What is the SAP Cloud SDK CLI?",permalink:"/cloud-sdk/docs/js/features/cli/overview"}},u=[{value:"Executing a Request",id:"executing-a-request",children:[{value:"Passing Parameters",id:"passing-parameters",children:[]},{value:"Setting Custom Headers",id:"setting-custom-headers",children:[]},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",children:[]},{value:"Getting a Raw Response",id:"getting-a-raw-response",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The usage of the OpenAPI clients is similar to the clients for ",Object(o.b)("a",{parentName:"p",href:"../odata/execute-odata-request"},"OData"),".\nThe OpenAPI clients consist of at least one API, which in turn has at least one function.\nWhat APIs and functions are available in a client depends on the service specification."),Object(o.b)("h2",{id:"executing-a-request"},"Executing a Request"),Object(o.b)("p",null,"The request execution always follows the same structure.\nYou invoke a function of an API, optionally configure your request and then execute it against a ",Object(o.b)("a",{parentName:"p",href:"../connectivity/destination"},"destination"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const responseData = await MyApi.myFunction().execute(destination);\n")),Object(o.b)("p",null,"In the example above we invoke the function ",Object(o.b)("inlineCode",{parentName:"p"},"myFunction")," of the API ",Object(o.b)("inlineCode",{parentName:"p"},"MyApi")," without further configuration and execute it against a destination named ",Object(o.b)("inlineCode",{parentName:"p"},"destination"),".\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," method returns the response data directly as a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),", if available.\nResponses without response body, result in the return type ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<void>"),"."),Object(o.b)("p",null,"You can configure your request by ",Object(o.b)("a",{parentName:"p",href:"#setting-custom-headers"},"setting custom headers"),", ",Object(o.b)("a",{parentName:"p",href:"#setting-a-custom-request-configuration"},"a custom request configuration")," or ",Object(o.b)("a",{parentName:"p",href:"#disabling-csrf-token-fetching"},"disabling CSRF token fetching"),".\nIf you need more information than the response data, you can also ",Object(o.b)("a",{parentName:"p",href:"#getting-a-raw-response"},"get the raw response"),"."),Object(o.b)("h3",{id:"passing-parameters"},"Passing Parameters"),Object(o.b)("p",null,"Often, resources are accessible under paths that require path parameters and/or query parameters and write requests often send a request body to modify resources.\nThe clients generated by the SAP Cloud SDK OpenAPI generator require you to set the parameters that are mandatory and allow you to set those that are optional."),Object(o.b)("h4",{id:"path-parameters"},"Path Parameters"),Object(o.b)("p",null,"Path parameters are always mandatory.\nIf path parameters are present in the path pattern for a request, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"'/my-resource/{resourceId}'"),", those are the first mandatory arguments in the generated function, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId)"),".\nThe types of the arguments depend on the specification.\nTheir names are always camel case and the order is determined by their occurrence in the path pattern."),Object(o.b)("h4",{id:"query-parameters"},"Query Parameters"),Object(o.b)("p",null,"Query parameters can be both mandatory and optional.\nIf query parameters for a certain API function exist, they are always the last argument of the function.\nQuery parameters are provided as an object, e.g. if you can set a ",Object(o.b)("inlineCode",{parentName:"p"},"limit")," parameter, ",Object(o.b)("inlineCode",{parentName:"p"},"MyApi.getMyResource(resourceId, { limit: 10 })"),".\nThe types of the parameters depend on the specification.\nTheir names are as specified in the original OpenAPI document."),Object(o.b)("h4",{id:"request-bodies"},"Request Bodies"),Object(o.b)("p",null,"Request bodies can be both mandatory and optional.\nThe according function argument is always ",Object(o.b)("inlineCode",{parentName:"p"},"body")," and it is always between the path and query parameters, e.g. when the body is a simple object containing a title, ",Object(o.b)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, { title: 'My Title' }, { lang: 'en' })"),".\nIt the request body is optional, you have to pass ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),", e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MyApi.updateMyResource(resourceId, undefined, { lang: 'en' })"),"."),Object(o.b)("h3",{id:"setting-custom-headers"},"Setting Custom Headers"),Object(o.b)("p",null,"The SAP Cloud SDK sets all mandatory headers by default.\nTo set additional headers or change the default values used in the headers, use the ",Object(o.b)("inlineCode",{parentName:"p"},"addCustomHeaders")," method.\nYou can pass an object, where the key is the name of the header and the value, well the value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"MyApi.myFunction()\n  .addCustomHeaders({\n    apikey: 'my-api-key'\n  })\n  .execute(destination);\n")),Object(o.b)("p",null,"Custom headers take precedence over default headers.\nThe example above can be used to execute requests against the sandbox systems of the SAP API Business Hub."),Object(o.b)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),Object(o.b)(s.a,{mdxType:"CustomRequestConfig"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),Object(o.b)(s.b,{mdxType:"CustomRequestConfigNote"}),Object(o.b)("h3",{id:"getting-a-raw-response"},"Getting a Raw Response"),Object(o.b)(s.c,{mdxType:"ExecuteRawOverview"}),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),Object(o.b)(s.d,{mdxType:"ExecuteRawUseCases"}))}p.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||l[m]||o;return n?r.a.createElement(b,i(i({ref:t},u),{},{components:n})):r.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n(16),r=n(223);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,s=o.forcePrependBaseUrl,i=void 0!==s&&s,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+d:d}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},223:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return l}));var a=n(0),r=n.n(a),o=n(61),s=n(73),i=n(70),c=n(63);function u(){return r.a.createElement(o.default,null)}function d(){return r.a.createElement(s.default,null)}function p(){return r.a.createElement(i.default,null)}function l(){return r.a.createElement(c.default,null)}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(221)),s={},i={unversionedId:"js/features/common/custom-request-config",id:"js/features/common/custom-request-config",isDocsHomePage:!1,title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs/js/features/common/custom-request-config.mdx",slug:"/js/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1619788419,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, the SAP Cloud SDK uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most of the request options like ",Object(o.b)("inlineCode",{parentName:"p"},"url"),", ",Object(o.b)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases passing additional options to axios might be required.\nTo achieve this you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, which is typically used when downloading a file from an endpoint."))}d.isMDXComponent=!0},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(221)),s={},i={unversionedId:"js/features/common/execute-raw-use-cases",id:"js/features/common/execute-raw-use-cases",isDocsHomePage:!1,title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs/js/features/common/execute-raw-use-cases.mdx",slug:"/js/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-use-cases.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1619788419,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Typical cases, where you might need to use ",Object(o.b)("inlineCode",{parentName:"p"},"executeRaw")," are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),Object(o.b)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method or request headers."),Object(o.b)("li",{parentName:"ul"},"Debugging purposes.")))}d.isMDXComponent=!0},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(221)),s={},i={unversionedId:"js/features/common/execute-raw-overview",id:"js/features/common/execute-raw-overview",isDocsHomePage:!1,title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs/js/features/common/execute-raw-overview.mdx",slug:"/js/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-overview.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1619788419,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",Object(o.b)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",Object(o.b)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," - the response headers"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")," - the response body"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"request")," - the original request")))}d.isMDXComponent=!0},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(221)),s={},i={unversionedId:"js/features/common/custom-request-config-note",id:"js/features/common/custom-request-config-note",isDocsHomePage:!1,title:"custom-request-config-note",description:"To ensure API consistency we do not allow to override the following options:",source:"@site/docs/js/features/common/custom-request-config-note.mdx",slug:"/js/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/features/common/custom-request-config-note",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/custom-request-config-note.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1619788419,formattedLastUpdatedAt:"4/30/2021"},c=[],u={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To ensure API consistency we do not allow to override the following options:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"baseURL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params"))))))}d.isMDXComponent=!0}}]);