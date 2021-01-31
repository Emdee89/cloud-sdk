(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(3),a=n(7),r=(n(0),n(204)),o=(n(205),{title:"Executing a Request Using a Generated OpenAPI Client",sidebar_label:"Execute an OpenAPI Request",description:"This article describes how to generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/execute-openapi-request",id:"js/features/openapi/execute-openapi-request",isDocsHomePage:!1,title:"Executing a Request Using a Generated OpenAPI Client",description:"This article describes how to generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/execute-openapi-request.mdx",slug:"/js/features/openapi/execute-openapi-request",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/execute-openapi-request.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1612121074,sidebar_label:"Execute an OpenAPI Request",sidebar:"someSidebar",previous:{title:"Use the OpenAPI Generator to Generate Type-Safe Clients",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},next:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"}},s=[{value:"How to Use the Client",id:"how-to-use-the-client",children:[{value:"<code>GET</code> Operation Without Parameters",id:"get-operation-without-parameters",children:[]},{value:"<code>GET</code> Operation With Parameter",id:"get-operation-with-parameter",children:[]},{value:"<code>GET</code> Operations With Longer Paths",id:"get-operations-with-longer-paths",children:[]},{value:"<code>POST</code> Operations",id:"post-operations",children:[]}]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The OpenAPI generator is in beta state."))),Object(r.b)("h2",{id:"how-to-use-the-client"},"How to Use the Client"),Object(r.b)("p",null,"The API of the OpenAPI clients are similar to the ones for ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../odata/execute-odata-request"}),"OData"),".\nWhat methods are available in a client depend on the service specification.\nWe will use the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/blob/main/test-resources/openapi-service-specs/test-service.json"}),"test service")," as an example to explain how the specification relates to methods in the generated client."),Object(r.b)("p",null,"The test service is simple and only has three paths: ",Object(r.b)("inlineCode",{parentName:"p"},"/entities"),", ",Object(r.b)("inlineCode",{parentName:"p"},"/entities/{entityId}")," and ",Object(r.b)("inlineCode",{parentName:"p"},"entities/count"),".\nWe will explain how the ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," operation for the three paths are executed as well as the ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," operations."),Object(r.b)("p",null,"The central entry point to execute methods is the ",Object(r.b)("inlineCode",{parentName:"p"},"TestServiceApi")," object which provides all available methods.\nThe name of the ",Object(r.b)("inlineCode",{parentName:"p"},"API")," object derives from the OpenAPI specification file name.\nIn this example, it is called ",Object(r.b)("inlineCode",{parentName:"p"},"test-service.json"),"."),Object(r.b)("h3",{id:"get-operation-without-parameters"},Object(r.b)("inlineCode",{parentName:"h3"},"GET")," Operation Without Parameters"),Object(r.b)("p",null,"The root path ",Object(r.b)("inlineCode",{parentName:"p"},"/entites")," in combination with the operation ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," will retrieve all entities.\nThe SAP Cloud SDK uses the ",Object(r.b)("inlineCode",{parentName:"p"},"operationId")," value of the specification file to name the method if possible.\nIn the example the ",Object(r.b)("inlineCode",{parentName:"p"},"operationId")," is ",Object(r.b)("inlineCode",{parentName:"p"},"getAllEntities")," and the method is executed in the following way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { TestServiceApi } from './outputDirectory/test-service';\n\nconst allTestEntities = await TestServiceApi.getAllEntities().execute(\n  myDestination\n);\n")),Object(r.b)("p",null,"The type of ",Object(r.b)("inlineCode",{parentName:"p"},"allTestEntities")," is ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<TestEntity[]>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"myDestination")," is the destination object explained in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../connectivity/destination"}),"connectivity guide"),"."),Object(r.b)("h3",{id:"get-operation-with-parameter"},Object(r.b)("inlineCode",{parentName:"h3"},"GET")," Operation With Parameter"),Object(r.b)("p",null,"The path ",Object(r.b)("inlineCode",{parentName:"p"},"/entities/{entityId}")," has a parameter of type ",Object(r.b)("inlineCode",{parentName:"p"},"string")," and it will return the entity by the given key.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"operationId")," is ",Object(r.b)("inlineCode",{parentName:"p"},"getEntityByKey")," and the path parameter is passed as an argument:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { TestServiceApi } from './outputDirectory/test-service';\n\nconst myEntity = await TestServiceApi.getEntityByKey('myId').execute(\n  myDestination\n);\n")),Object(r.b)("p",null,"Note that the result of this request is also typed as ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<TestEntity>"),"."),Object(r.b)("h3",{id:"get-operations-with-longer-paths"},Object(r.b)("inlineCode",{parentName:"h3"},"GET")," Operations With Longer Paths"),Object(r.b)("p",null,"The path ",Object(r.b)("inlineCode",{parentName:"p"},"root/someThing")," will get ",Object(r.b)("inlineCode",{parentName:"p"},"someThing")," from the root entity.\nIn our example we have a ",Object(r.b)("inlineCode",{parentName:"p"},"entities/count")," which will return the number of entities and is named ",Object(r.b)("inlineCode",{parentName:"p"},"countEntities"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { TestServiceApi } from './outputDirectory/test-service';\n\nconst numberOfEntities = await TestServiceApi.countEntities().execute(\n  myDestination\n);\n")),Object(r.b)("p",null,"where the type of the response is ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<number>"),"."),Object(r.b)("h3",{id:"post-operations"},Object(r.b)("inlineCode",{parentName:"h3"},"POST")," Operations"),Object(r.b)("p",null,"For the ",Object(r.b)("inlineCode",{parentName:"p"},"entities")," path the operation ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," is also allowed.\nThis corresponds to the creation of new entities.\nYou create a entity in the following way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { TestServiceApi, TestEntity } from './outputDirectory/test-service';\n\nconst testEntity: TestEntity = {\n  keyProperty: 'some-id-in-uuid-format',\n  stringProperty: 'myProperty'\n};\nconst createResponse = await TestServiceApi.createEntity(testEntity).execute(\n  restDestination\n);\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," operation is ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/blob/main/test-resources/rest-service-specs/test-service.json"}),"specified")," to return no content and status code ",Object(r.b)("inlineCode",{parentName:"p"},"201 Created"),".\nHence the ",Object(r.b)("inlineCode",{parentName:"p"},"createResponse")," is typed as ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<void>"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If your server requires CSRF tokens for a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," request, you have to fetch and provide it manually as custom header in the ",Object(r.b)("inlineCode",{parentName:"p"},"execute()")," method.\nThe OpenAPI clients currently don't support automatic token fetching."))))}l.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=i,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(21),a=n(206);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+l:l}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},206:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);