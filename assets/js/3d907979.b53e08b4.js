(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(214)),o={title:"Deploy to SAP Business Technology Platform",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy to SAP Business Technology Platform",description:"???",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},l={unversionedId:"js/features/cli/package",id:"js/features/cli/package",isDocsHomePage:!1,title:"Deploy to SAP Business Technology Platform",description:"???",source:"@site/docs/js/features/cli/package.mdx",slug:"/js/features/cli/package",permalink:"/cloud-sdk/docs/js/features/cli/package",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/package.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1617917127,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"Deploy to SAP Business Technology Platform",sidebar:"someSidebar",previous:{title:"Add the SAP Cloud SDK to Your Project",permalink:"/cloud-sdk/docs/js/features/cli/init"},next:{title:"Generate Clients for OData",permalink:"/cloud-sdk/docs/js/features/cli/generator"}},c=[{value:"Benefits of Using the SAP Cloud SDK CLI in Continuous Delivery",id:"benefits-of-using-the-sap-cloud-sdk-cli-in-continuous-delivery",children:[]},{value:"Set Up a Jenkins Pipeline",id:"set-up-a-jenkins-pipeline",children:[]},{value:"Pipeline Steps",id:"pipeline-steps",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"benefits-of-using-the-sap-cloud-sdk-cli-in-continuous-delivery"},"Benefits of Using the SAP Cloud SDK CLI in Continuous Delivery"),Object(r.b)("p",null,"A project initialized with the SAP Cloud SDK CLI provides all the necessary configuration to be used with ",Object(r.b)("a",{parentName:"p",href:"../../../related-projects/project-piper"},'Project "Piper"'),".\nIt also provides a cross-platform way to copy deployment files that can help if your team develops on Windows, macOS, and Linux."),Object(r.b)("h2",{id:"set-up-a-jenkins-pipeline"},"Set Up a Jenkins Pipeline"),Object(r.b)("p",null,"Follow the ",Object(r.b)("a",{parentName:"p",href:"https://sap.github.io/jenkins-library/guidedtour/"},"guide"),' at Project "Piper" to find all information necessary to set up a new pipeline server.\nYou may use the SAP Cloud SDK CLI to download the necessary files.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ sap-cloud-sdk add-cx-server\n")),Object(r.b)("h2",{id:"pipeline-steps"},"Pipeline Steps"),Object(r.b)("p",null,'The Project "Piper" pipeline contains many stages to ensure enterprise and cloud qualities.\nHere is a list of stages which you should know about.\nFor projects generated with the CLI, all these scripts are automatically maintained.'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Build"),":\nYou need to maintain the ",Object(r.b)("inlineCode",{parentName:"li"},"ci-build")," script in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Test"),":\nYou need to maintain the ",Object(r.b)("inlineCode",{parentName:"li"},"ci-it-backend")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ci-backend-unit-test")," scripts in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),".\nIf you built with ",Object(r.b)("inlineCode",{parentName:"li"},"--addFrontendScripts")," you also need to maintain ",Object(r.b)("inlineCode",{parentName:"li"},"ci-frontend-unit-test")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ci-e2e"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Package"),":\nYou may need to maintain the ",Object(r.b)("inlineCode",{parentName:"li"},"ci-package")," script in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),".\nBy default, this copies the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),", ",Object(r.b)("inlineCode",{parentName:"li"},"package-lock.json"),", ",Object(r.b)("inlineCode",{parentName:"li"},"index.js"),", and the contents of the ",Object(r.b)("inlineCode",{parentName:"li"},"dist")," folder.\nYou can use ",Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob patterns")," to include or exclude other files."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Deploy"),":\nConfigure your deployment in the ",Object(r.b)("inlineCode",{parentName:"li"},".pipeline/config.yml")," and the ",Object(r.b)("inlineCode",{parentName:"li"},"mainfest.yml"),".")))}p.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);