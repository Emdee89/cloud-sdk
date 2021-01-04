(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(206)),o=a(215),c=a(216),s={id:"getting-started",title:"Quick Start",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},l={unversionedId:"overview/getting-started",id:"overview/getting-started",isDocsHomePage:!1,title:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/getting-started.mdx",slug:"/overview/getting-started",permalink:"/cloud-sdk/docs/overview/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/overview/getting-started.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1609756059,sidebar_label:"Quick Start",sidebar:"someSidebar",previous:{title:"About the SAP Cloud SDK",permalink:"/cloud-sdk/docs/overview/overview-cloud-sdk"},next:{title:"Benefits",permalink:"/cloud-sdk/docs/overview/benefits"}},d=[{value:"Create Your First App",id:"create-your-first-app",children:[]},{value:"Hello, World!",id:"hello-world",children:[{value:"Getting Started - JavaScript",id:"getting-started---javascript",children:[]},{value:"Getting Started - Java",id:"getting-started---java",children:[]},{value:"Mock and Test Servers for OData and SAP S/4HANA",id:"mock-and-test-servers-for-odata-and-sap-s4hana",children:[]}]}],p={toc:d};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-your-first-app"},"Create Your First App"),Object(i.b)("p",null,"You can choose between ",Object(i.b)("inlineCode",{parentName:"p"},"JavaScript")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Java")," when developing with the SAP Cloud SDK.\nCheck these two examples to initialize an application for your favorite development environment."),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"js",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Prerequisites")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you have the latest stable version of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," installed.\nThis example assumes you're running macOS or Linux.\nCheck out our detailed ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/getting-started"}),"getting started guide")," for more information."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install -g @sap-cloud-sdk/cli\n\n$ sap-cloud-sdk init my-sdk-project\n\n+---------------------------------------------------------------+\n| \u2705 Init finished successfully.                                |\n|                                                               |\n| \ud83d\ude80 Next steps:                                                |\n| - Run the application locally (`npm run start:dev`)           |\n| - Deploy your application (`npm run deploy`)                  |\n|                                                               |\n| \ud83d\udd28 Consider setting up Jenkins to continuously build your app |\n| Use `sap-cloud-sdk add-cx-server` to create the setup script  |\n+---------------------------------------------------------------+\n"))),Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Prerequisites")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure your have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://adoptopenjdk.net/"}),"Java 8")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://maven.apache.org/install.html"}),"maven")," installed.\nThis example assumes you're running macOS or Linux.\nCheck detailed ","[getting started]"," guide for more information(../java/getting-started.mdx)"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'$ mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes"\\\n"-DarchetypeArtifactId=scp-cf-tomee" "-DarchetypeVersion=RELEASE"\n')))),Object(i.b)("h2",{id:"hello-world"},"Hello, World!"),Object(i.b)("p",null,"This example is not a classical ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World"),".\nThere is much more to it than just bootstrapping a starter application.\nThe SAP Cloud SDK is a complex and flexible library addressing a vast range of use-cases.\nEach of them would require a ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World")," of its own, and we have them!"),Object(i.b)("p",null,"To continue discovering the SAP Cloud SDK for your favorite programming language check the respective getting started guides and comprehensive tutorials for multiple use cases."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"There is no full feature parity between JavaScript and Java libraries.\nPlease, review the respective documentation sections to find out more."))),Object(i.b)("h3",{id:"getting-started---javascript"},"Getting Started - JavaScript"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../js/getting-started"}),"A comprehensive getting started guide for JavaScript developers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:javascript"}),"Tutorials covering SAP Cloud SDK for JavaScript on the SAP Developers portal"))),Object(i.b)("h3",{id:"getting-started---java"},"Getting Started - Java"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../java/getting-started"}),"A comprehensive getting started guide for Java developers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"}),"Tutorials covering SAP Cloud SDK for Java on the SAP Developers portal"))),Object(i.b)("h3",{id:"mock-and-test-servers-for-odata-and-sap-s4hana"},"Mock and Test Servers for OData and SAP S/4HANA"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We created a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.wdf.sap.corp/MA/book-bupa-mock-odata"}),"service")," that mocks SAP S/4HANA Business Partner service. You can host it on your own machine to practice with the SAP Cloud SDK."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://services.odata.org/V4/TripPinServiceRW"}),"TripPin reference service")," used in official OData v4 documentation to provide ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.odata.org/getting-started/basic-tutorial/"}),"tutorials and learning materials"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://services.odata.org/V4/OData/"}),"Northwind reference service")," has a complex data model allowing to try out advanced OData v4 features with the SAP Cloud SDK.")))}u.isMDXComponent=!0},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},213:function(e,t,a){"use strict";var n=a(0),r=a(214);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},214:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},215:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(213),o=a(210),c=a(55),s=a.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,u=e.groupId,b=e.className,m=Object(i.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(n.useState)(c),j=f[0],O=f[1],g=n.Children.toArray(e.children);if(null!=u){var y=v[u];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&O(y)}var N=function(e){O(e),null!=u&&h(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},216:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);