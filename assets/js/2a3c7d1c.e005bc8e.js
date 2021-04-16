(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(220)),o=(n(221),{title:"Use the OpenAPI Generator to Generate Typed Clients",sidebar_label:"Generate an OpenAPI Client",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/generate-openapi-client",id:"js/features/openapi/generate-openapi-client",isDocsHomePage:!1,title:"Use the OpenAPI Generator to Generate Typed Clients",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/generate-openapi-client.mdx",slug:"/js/features/openapi/generate-openapi-client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/generate-openapi-client.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1618603779,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Generate an OpenAPI Client",sidebar:"someSidebar",previous:{title:"OpenAPI Overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview"},next:{title:"Executing a Request Using a Generated OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Generate a Client Using the Command Line Interface",id:"generate-a-client-using-the-command-line-interface",children:[]},{value:"Options",id:"options",children:[]},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",children:[]},{value:"How the API Code is Generated",id:"how-the-api-code-is-generated",children:[{value:"APIs",id:"apis",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Configure Generated Client Structure and Naming",id:"configure-generated-client-structure-and-naming",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The OpenAPI generator is currently beta.\nWe do not recommend to use it in production as there might still be breaking changes."))),Object(r.b)("p",null,"REST is a common pattern to define APIs of services.\nMany SAP systems like SAP S/4HANA, SAP Concur and SAP Business Technology Platform provide their services through REST APIs.\nA common way to specify these services are ",Object(r.b)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specifications"),".\nWith the SAP Cloud SDK, you can generate typed clients for those specifications."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Run this command to install the OpenAPI generator globally:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g @sap-cloud-sdk/openapi-generator\n")),Object(r.b)("h2",{id:"generate-a-client-using-the-command-line-interface"},"Generate a Client Using the Command Line Interface"),Object(r.b)("p",null,"The SAP Cloud SDK generator is primarily intended to be used on the command line.\nYou can generate an OpenAPI client by running:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"generate-openapi-client --inputDir <inputDirectory> --outputDir <outputDirectory>\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<inputDirectory>")," points to the directory containing your specification file(s) and ",Object(r.b)("inlineCode",{parentName:"p"},"<outputDirectory>")," to the target folder where the generated client(s) will be saved."),Object(r.b)("p",null,"By default the generated clients will each contain:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"API files as ",Object(r.b)("inlineCode",{parentName:"li"},".ts"),' files - one for each "API" in the service.\nSee ',Object(r.b)("a",{parentName:"li",href:"#how-the-api-code-is-generated"},"details"),"."),Object(r.b)("li",{parentName:"ul"},"A schema directory, containing schema files (",Object(r.b)("inlineCode",{parentName:"li"},".ts"),"), one for each schema defined in the service specification."),Object(r.b)("li",{parentName:"ul"},"All of the above as transpiled sources, including JavaScript sources (",Object(r.b)("inlineCode",{parentName:"li"},".js"),"), type definition files (",Object(r.b)("inlineCode",{parentName:"li"},".d.ts"),") and sourcemap files (",Object(r.b)("inlineCode",{parentName:"li"},".js.map")," and ",Object(r.b)("inlineCode",{parentName:"li"},".d.ts.map"),")."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),"."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"tsconfig.json"),".")),Object(r.b)("p",null,"The generation always includes the TypeScript sources.\nAll other files can be excluded from the generation - see the options below."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"generate-openapi-client --help")," for additional options."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Options, Aliases ",Object(r.b)("div",{style:{width:"225px"}})),Object(r.b)("th",{parentName:"tr",align:"center"},"\xa0Default"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--inputDir"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-i")," ",Object(r.b)("em",{parentName:"td"},"(required)")),Object(r.b)("td",{parentName:"tr",align:"center"},"-"),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0Input directory or file for the OpenAPI service definitions.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--outputDir"),", ",Object(r.b)("inlineCode",{parentName:"td"},"-o")," ",Object(r.b)("em",{parentName:"td"},"(required)")),Object(r.b)("td",{parentName:"tr",align:"center"},"-"),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0Output directory for the generated OpenAPI client.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--clearOutputDir")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0Remove all files in the output directory before generation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--generateJs")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0By default, the generator will also generate transpiled ",Object(r.b)("inlineCode",{parentName:"td"},".js"),", ",Object(r.b)("inlineCode",{parentName:"td"},".js.map"),", ",Object(r.b)("inlineCode",{parentName:"td"},".d.ts")," and ",Object(r.b)("inlineCode",{parentName:"td"},".d.ts.map")," files. When set to false, the generator will only generate ",Object(r.b)("inlineCode",{parentName:"td"},".ts")," files.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--generatePackageJson")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0By default, the generator will generate a package.json file, specifying dependencies and scripts for compiling and generating documentation. When set to false, the generator will skip the generation of the package.json.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--serviceMapping")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"<inputDir>/service-mapping.json")),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0Configuration file to ensure consistent names between multiple generation runs with updated / changed metadata files. By default it will be read from the input directory as ",Object(r.b)("inlineCode",{parentName:"td"},"service-mapping.json"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--tsConfig")),Object(r.b)("td",{parentName:"tr",align:"center"},"Default configuration provided by the SAP Cloud SDK"),Object(r.b)("td",{parentName:"tr",align:"left"},'\xa0tsconfig.json file to overwrite the default "tsconfig.json".')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"--versionInPackageJson")),Object(r.b)("td",{parentName:"tr",align:"center"},"Version of the generator"),Object(r.b)("td",{parentName:"tr",align:"left"},"\xa0By default, when generating package.json file, the generator will set a version by using the generator version. It can also be set to a specific version.")))),Object(r.b)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),Object(r.b)("p",null,"The generator can also be executed programmatically in JavaScript or TypeScript code.\nAdd the ",Object(r.b)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/openapi-generator")," package to your project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm i @sap-cloud-sdk/openapi-generator\n")),Object(r.b)("p",null,"This package exports the ",Object(r.b)("inlineCode",{parentName:"p"},"generate")," function.\nIt takes the same options as the command-line tool and generates the same files:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { generate } from '@sap-cloud-sdk/openapi-generator'\n\nconst generatorOptions = {\n  inputDir: 'directoryWithOpenApiFiles';\n  outputDir: 'myOutputDirectory';\n}\n\nawait generate(generatorOptions);\n")),Object(r.b)("h2",{id:"how-the-api-code-is-generated"},"How the API Code is Generated"),Object(r.b)("p",null,"By default the generator produces one service directory for every OpenAPI specification.\nThe directory name is based on the file name of the specification and is transformed to kebab case, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"my-service"),"."),Object(r.b)("h3",{id:"apis"},"APIs"),Object(r.b)("p",null,'All operations of the service are grouped into APIs based on their tags.\nA service can consist of multiple APIs.\nIf multiple tags are specified for an operation, only the first one is considered.\nIf no tags are specified, "default" is used.'),Object(r.b)("p",null,"The API names are transformed by appending \"Api\" and transforming them to pascal case, e.g. 'my-tag' results in ",Object(r.b)("inlineCode",{parentName:"p"},"MyTagApi"),'.\nIn case the tag already ends with "api" (case independent), one "Api" will be removed, e. g. ',Object(r.b)("inlineCode",{parentName:"p"},"myapi")," results in ",Object(r.b)("inlineCode",{parentName:"p"},"MyApi"),'.\nIf your tags end with "api", but this is part of the word, e.g. "okapi", we recommend to use the OpenAPI vendor extensions and provide an explicit API name ending with "Api", e.g. "OkapiApi".\nNote, that operations are grouped into APIs based on their transformed names, not the original names.\nTherefore tags like "my-tag" and "MyTag" are treated as the same API, "MyTagApi".'),Object(r.b)("h3",{id:"operations"},"Operations"),Object(r.b)("p",null,"Every operation in the specification is reflected as a function of a generated API.\nThe function names are based on the ",Object(r.b)("inlineCode",{parentName:"p"},"operationId")," property in the specification of the operation.\nIf no ",Object(r.b)("inlineCode",{parentName:"p"},"operationId")," is given, the name is derived from the method and the path pattern, examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'resource'")," with ",Object(r.b)("inlineCode",{parentName:"li"},"post")," would result in ",Object(r.b)("inlineCode",{parentName:"li"},"createResource")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'resource/{id}'")," with ",Object(r.b)("inlineCode",{parentName:"li"},"get")," would result in ",Object(r.b)("inlineCode",{parentName:"li"},"getResourceById"))),Object(r.b)("p",null,"The function names are transformed to camel case, e.g. 'myFunction'.\nDuplicates within an API are handled by adding an index at the end of the name.\nIn cases where we have duplicate names, but one of the names is in camel case, this name remains as is.\nExample:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Original ",Object(r.b)("inlineCode",{parentName:"th"},"operationId"),"s"),Object(r.b)("th",{parentName:"tr",align:"left"},"Generated function names"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"my-function")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"myFunction2"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"myFunction")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"myFunction"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"other_function")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"otherFunction"))))),Object(r.b)("h3",{id:"configure-generated-client-structure-and-naming"},"Configure Generated Client Structure and Naming"),Object(r.b)("p",null,"In case you need more flexibility when generating clients, you can use the SAP Cloud SDK's vendor extensions for OpenAPI.\nWe provide two extenstions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#x-sap-cloud-sdk-api-name"},"x-sap-cloud-sdk-api-name")," to configure the structure and naming of the generated APIs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#x-sap-cloud-sdk-operation-name"},"x-sap-cloud-sdk-operation-name")," to configure the generated function names.")),Object(r.b)("p",null,"You can set those on different levels of the specification.\nThey take precedence before the default behavior."),Object(r.b)("h4",{id:"x-sap-cloud-sdk-api-name"},Object(r.b)("inlineCode",{parentName:"h4"},"x-sap-cloud-sdk-api-name")),Object(r.b)("p",null,"Use this extension to configure the structure of your generated APIs.\nSetting ",Object(r.b)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name"),' as a property determines which operations are grouped into one API.\nNote, that the name will be transformed to pascal case with an "Api" ending, same as in the default behavior, e.g. "MyApi".\nWhen referring to the "API name", the transformed name is meant.'),Object(r.b)("p",null,"This extension can be set on the following levels:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"operations - Operations that have the same API name are grouped into one API."),Object(r.b)("li",{parentName:"ul"},"on the path definitions - All operations below paths with the same API name are grouped into one API."),Object(r.b)("li",{parentName:"ul"},"root of the specification - All operations in the specification belong to the specified API.\nYou can think of this as the custom default name for an API.")),Object(r.b)("p",null,"This extension can be set on all of these levels in the same document.\nIn these cases the most specific use of the extension takes precedence."),Object(r.b)("h4",{id:"x-sap-cloud-sdk-operation-name"},Object(r.b)("inlineCode",{parentName:"h4"},"x-sap-cloud-sdk-operation-name")),Object(r.b)("p",null,"Use this extension to overwrite the default names for the generated functions.\nAs of the OpenAPI specification, this is the intent of the ",Object(r.b)("inlineCode",{parentName:"p"},"operationId")," field.\nHowever, the value of this property has to be unique throughout a specification file.\nMany OpenAPI validators fail if there are duplicate ",Object(r.b)("inlineCode",{parentName:"p"},"operationId"),"s.\nWith the approach of the SAP Cloud SDK OpenAPI generator this restriction might overcomplicate APIs.\nGiven that you have multiple APIs, it can make sense to have the same function names in different APIs, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"MyResource1Api.getAll()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MyResource2Api.getAll()"),".\nThe purpose of the ",Object(r.b)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-operation-name")," is to allow using duplicate names across APIs, while complying with the OpenAPI specification."))}s.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(16),i=n(222);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,c=void 0!==o&&o,l=r.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},222:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);