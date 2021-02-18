(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(205)),o=(n(206),{title:"Use the OpenAPI Generator to Generate Type-Safe Clients",sidebar_label:"Generate an OpenAPI Client",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/generate-openapi-client",id:"js/features/openapi/generate-openapi-client",isDocsHomePage:!1,title:"Use the OpenAPI Generator to Generate Type-Safe Clients",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/generate-openapi-client.mdx",slug:"/js/features/openapi/generate-openapi-client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/generate-openapi-client.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1613665762,sidebar_label:"Generate an OpenAPI Client",sidebar:"someSidebar",previous:{title:"OpenAPI Overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview"},next:{title:"Executing a Request Using a Generated OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"}},p=[{value:"Generate a Client via the Command-Line Interface",id:"generate-a-client-via-the-command-line-interface",children:[]},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",children:[]},{value:"Transpile to JavaScript",id:"transpile-to-javascript",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The OpenAPI generator is in beta state."))),Object(i.b)("h2",{id:"generate-a-client-via-the-command-line-interface"},"Generate a Client via the Command-Line Interface"),Object(i.b)("p",null,"Many SAP systems like SAP S/4HANA, SAP Concur and SAP Cloud Platform provide REST APIs to the user.\nA common way to specify these services is via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./overview"}),"OpenAPI")," specification files.\nYou can generate type-safe OpenAPI clients using these specification files with the SAP Cloud SDK.\nAn example how such a file looks like can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/blob/main/test-resources/openapi-service-specs/test-service.json"}),"here")," and is discussed in detail in the guide on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./execute-openapi-request"}),"how to execute an OpenAPI request"),"."),Object(i.b)("p",null,"Run this command to install the OpenAPI generator globally:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm i @sap-cloud-sdk/openapi-generator -g\n")),Object(i.b)("p",null,"Then you can generate an OpenAPI client via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"generate-openapi-client -i directoryWithOpenApiFiles -o outputDirectory\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"directoryWithOpenApiFiles")," points to the directory containing your specification file and ",Object(i.b)("inlineCode",{parentName:"p"},"outputDirectory")," to the target folder where the generated client will be saved.\nFor additional options on the command use the ",Object(i.b)("inlineCode",{parentName:"p"},"--help")," flag."),Object(i.b)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),Object(i.b)("p",null,"The generator can also be executed programmatically in JavaScript code directly.\nIn the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/tree/main/packages/openapi-generator"}),"generator package")," the a method ",Object(i.b)("inlineCode",{parentName:"p"},"generateClients")," is exported.\nThis method takes the same options as the command-line tool and generates OpenAPI clients:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { generateClients } from '@sap-cloud-sdk/openapi-generator'\n\nconst generatorOptions = {\n  inputDir: 'directoryWithOpenApiFiles';\n  outputDir: 'myOutputDirectory';\n}\n\ngenerateClients(generatorOptions)\n")),Object(i.b)("h2",{id:"transpile-to-javascript"},"Transpile to JavaScript"),Object(i.b)("p",null,"The generator transpiles the TypeScript client to JavaScript by default.\nIf the JavaScript client is not needed, the flag ",Object(i.b)("inlineCode",{parentName:"p"},"generateJS")," disables the generation of JavaScript sources:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"generate-openapi-client -i directoryWithOpenApiFiles -o outputDirectory --generateJS false\n")),Object(i.b)("p",null,"A minimal default tsconfig.json is used in the transpilation process from TypeScript to JavaScript.\nIf you want to use your one configuration you can provide it via the flag ",Object(i.b)("inlineCode",{parentName:"p"},"tsConfig"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"generate-openapi-client -i directoryWithOpenApiFiles -o outputDirectory --tsConfig pathToYourTsConfig\n")))}l.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(21),r=n(207);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,p=i.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},207:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);