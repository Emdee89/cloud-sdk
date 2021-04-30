(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(221)),a=(n(222),{title:"OpenAPI Overview",sidebar_label:"Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/overview",id:"js/features/openapi/overview",isDocsHomePage:!1,title:"OpenAPI Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/overview.mdx",slug:"/js/features/openapi/overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/overview.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1619788419,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"On-Premise Connectivity",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"},next:{title:"Use the OpenAPI Generator to Generate Typed Clients",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The OpenAPI generator is a command-line tool to generate clients from ",Object(o.b)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specifications"),".\nOpenAPI specifications are the standard to define RESTful web services in a language-agnostic way.\nIt is comparable to the ",Object(o.b)("inlineCode",{parentName:"p"},"edmx")," service definitions for ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData clients"),".\nThe generated OpenAPI clients make use of the SAP Cloud SDK's connectivity layer.\nThat means, that the mechanisms for ",Object(o.b)("a",{parentName:"p",href:"../connectivity/destination"},"destination lookup"),", ",Object(o.b)("a",{parentName:"p",href:"../connectivity/on-premise"},"On-premise connectivity")," and ",Object(o.b)("a",{parentName:"p",href:"../connectivity/proxy"},"proxy handling")," are applied when consuming services through the generated clients."),Object(o.b)("p",null,"As you would expect, an Open Source ",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI generator (OpenAPITools)")," already exists.\nIt offers client generation for various programming languages, including TypeScript.\nThe main difference between the generator by the SAP Cloud SDK and the generator by OpenAPITools is the aforementioned use of the SAP Cloud SDK's connectivity layer.\nFurther, the OpenAPITools generator requires a Java runtime environment to be used.\nThis is not required by the SAP Cloud SDK's generator.\nAs it is written in TypeScript it requires a Node.js environment."),Object(o.b)("p",null,"If you are interested in using an OpenAPI client in your project, find more information in the guides on ",Object(o.b)("a",{parentName:"p",href:"./generate-openapi-client"},"the generation of a client")," and ",Object(o.b)("a",{parentName:"p",href:"./execute-openapi-request"},"the usage of the client"),"."))}u.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,b=l["".concat(a,".").concat(f)]||l[f]||d[f]||o;return n?i.a.createElement(b,c(c({ref:t},p),{},{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(16),i=n(223);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},223:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);