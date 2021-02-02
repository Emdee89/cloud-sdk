(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(204)),r={id:"extension-model-sap-cloud-sdk-for-javascript-typescript",title:"Extension Model",sidebar_label:"Extension Model",description:null,keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","extension"]},l={unversionedId:"js/extension-model-sap-cloud-sdk-for-javascript-typescript",id:"js/extension-model-sap-cloud-sdk-for-javascript-typescript",isDocsHomePage:!1,title:"Extension Model",description:"Introduction",source:"@site/docs/js/extension-model.mdx",slug:"/js/extension-model-sap-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/extension-model-sap-cloud-sdk-for-javascript-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/extension-model.mdx",version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1612274107,sidebar_label:"Extension Model"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Roles",id:"roles",children:[{value:"Stakeholders and Contact Points",id:"stakeholders-and-contact-points",children:[]}]},{value:"Process Outline",id:"process-outline",children:[]},{value:"Development Guidelines",id:"development-guidelines",children:[{value:"Contribution Programming Language",id:"contribution-programming-language",children:[]},{value:"API Alignment",id:"api-alignment",children:[]},{value:"Repository",id:"repository",children:[]},{value:"Introducing Dependencies",id:"introducing-dependencies",children:[]},{value:"Coding Convention",id:"coding-convention",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]},{value:"Branching Strategy",id:"branching-strategy",children:[]}]},{value:"Documentation",id:"documentation",children:[{value:"Documentation Portal",id:"documentation-portal",children:[]},{value:"Generated API Documentation",id:"generated-api-documentation",children:[]},{value:"README",id:"readme",children:[]}]},{value:"Releases",id:"releases",children:[{value:"Release Process",id:"release-process",children:[]},{value:"License",id:"license",children:[]}]},{value:"Support",id:"support",children:[]},{value:"Maintenance",id:"maintenance",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"SAP Cloud SDK for JavaScript welcomes extensions that bring value to SAP Cloud SDK users by simplifying and/or improving cloud application development within the SAP ecosystem.\nThe contributed feature or API library becomes an extension of SAP Cloud SDK and is released under the SAP Cloud SDK umbrella into the ",Object(o.b)("inlineCode",{parentName:"p"},"@sap-cloud-sdk")," scope in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs.com"),"."),Object(o.b)("p",null,"The core modules of the SAP Cloud SDK for JavaScript are released under the Apache 2.0 open source license.\nSAP Cloud SDK extensions should also be open source with Apache 2.0.\nIf this is impossible, e.g. For legal reasons, licensing has to be clarified in person."),Object(o.b)("h2",{id:"roles"},"Roles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SAP Cloud SDK team")," - development team and Product Owner responsible for maintaining, developing, and releasing SAP Cloud SDK for JavaScript."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Contribution team")," - development team responsible for developing and contributing a feature or an API library.")),Object(o.b)("h3",{id:"stakeholders-and-contact-points"},"Stakeholders and Contact Points"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SAP Cloud SDK Team")," assigns two main stakeholders as contact points for the contribution process."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Product owner")," for organizational topics, priorities, and practicalities"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Developer")," for engineering onboarding, alignment, and consulting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Contribution team")," assigns at least one contact point with an engineering background for regular collaboration and synchronization.")),Object(o.b)("p",null,"Other stakeholders and/or contact points could be assigned if deemed necessary."),Object(o.b)("h2",{id:"process-outline"},"Process Outline"),Object(o.b)("p",null,"Below are generic steps for a successful contribution.\nThe process can be adopted for the needs of a particular contribution."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Initial alignment and approvals"),Object(o.b)("li",{parentName:"ul"},"Plan contribution collaboration."),Object(o.b)("li",{parentName:"ul"},"Prepare and configure required assets (repositories, configuration, pipelines, etc). The SAP Cloud SDK provides templates for those assets."),Object(o.b)("li",{parentName:"ul"},"Onboarding session with SAP Cloud SDK team.\nGet to ",Object(o.b)("inlineCode",{parentName:"li"},"Hello World!")),Object(o.b)("li",{parentName:"ul"},"Start of development by the contribution team"),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK Team provides ongoing consulting"),Object(o.b)("li",{parentName:"ul"},"Regular syncs on development and organizational topics"),Object(o.b)("li",{parentName:"ul"},"Successful proof-of-concept"),Object(o.b)("li",{parentName:"ul"},"Iterative development process with SAP Cloud SDK team contributing to PR reviews"),Object(o.b)("li",{parentName:"ul"},'Releasing the contribution as "Beta"'),Object(o.b)("li",{parentName:"ul"},"Iterative development.\nStabilizing the API."),Object(o.b)("li",{parentName:"ul"},'Release the contribution with "General Availability" (GA)'),Object(o.b)("li",{parentName:"ul"},"Keep functional scope up to date with customer requirements"),Object(o.b)("li",{parentName:"ul"},"Maintenance and support of the contribution by ",Object(o.b)("strong",{parentName:"li"},"Contribution Team")," or their successors")),Object(o.b)("h2",{id:"development-guidelines"},"Development Guidelines"),Object(o.b)("p",null,"This section establishes best engineering practices for a contributing team."),Object(o.b)("h3",{id:"contribution-programming-language"},"Contribution Programming Language"),Object(o.b)("p",null,"The contribution should happen in TypeScript and endorse type-safety whenever possible."),Object(o.b)("h3",{id:"api-alignment"},"API Alignment"),Object(o.b)("p",null,"To maintain a consistent API strategy, contribution, and SAP Cloud SDK teams align on the API.\nFinal approval is on the SAP Cloud SDK team."),Object(o.b)("h3",{id:"repository"},"Repository"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The repository is created on GitHub under SAP Organization by the contribution team"),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK and contribution team co-own the repository and have full access rights to it"),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK team provides a repository structure and initial content as needed.\nThis helps the contribution team to kick-start their pipeline."),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK team can audit repository settings and require reasonable updates to the configuration")),Object(o.b)("h3",{id:"introducing-dependencies"},"Introducing Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Dependency audit should happen as a part of PR review"),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK provides a guide on dependency choices to the contributing team")),Object(o.b)("h3",{id:"coding-convention"},"Coding Convention"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Contribution team should use coding conventions of the SAP Cloud SDK unless it's explicitly approved to be otherwise"),Object(o.b)("li",{parentName:"ul"},"Most of the coding convention rules should be enforced by automated code checkers and linters like ESLint and Prettier"),Object(o.b)("li",{parentName:"ul"},"Enforcement happens via continuous integration pipeline"),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK team provides guidelines on coding conventions that can't be automatically enforced")),Object(o.b)("h3",{id:"pull-requests"},"Pull Requests"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pull request should contain some logical and complete pile of work"),Object(o.b)("li",{parentName:"ul"},"Pull request should be ",Object(o.b)("strong",{parentName:"li"},"small")," for easy review"),Object(o.b)("li",{parentName:"ul"},"Preferably Pull request should contain a tangible incremental value"),Object(o.b)("li",{parentName:"ul"},"Pull request need to be reviewed by at least one of the SAP Cloud SAP Cloud SDK team members")),Object(o.b)("h3",{id:"branching-strategy"},"Branching Strategy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"main")," branch has to be ",Object(o.b)("strong",{parentName:"li"},"release ready")," at all times.\nIn other words: up to date, tested, and documented")),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"SAP Cloud SDK for JavaScript has two types of documentation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Documentation portal"),Object(o.b)("li",{parentName:"ul"},"Generated API documentation")),Object(o.b)("h3",{id:"documentation-portal"},"Documentation Portal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After reaching ",Object(o.b)("inlineCode",{parentName:"li"},"Beta"),", features or API libraries have to be documented by the contribution team on SAP Cloud SDK's documentation portal"),Object(o.b)("li",{parentName:"ul"},"Documentation has to be kept up to date by the contribution team")),Object(o.b)("h3",{id:"generated-api-documentation"},"Generated API Documentation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"API documentation has to be generated"),Object(o.b)("li",{parentName:"ul"},"SAP Cloud SDK team provides means to generate API documentation on the available codebase")),Object(o.b)("h3",{id:"readme"},"README"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Contribution team maintains ",Object(o.b)("inlineCode",{parentName:"li"},"README")," on the contribution repository according to development needs")),Object(o.b)("h2",{id:"releases"},"Releases"),Object(o.b)("h3",{id:"release-process"},"Release Process"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Every library released with SAP Cloud SDK should use ","[semantic versioning]","(",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://semver.org/"}),"https://semver.org/")),Object(o.b)("li",{parentName:"ul"},"Breaking API changes have to be avoided."),Object(o.b)("li",{parentName:"ul"},"If a breaking change is introduced, the old API must be marked deprecated instead of being removed.\nA grace period of 6 months to be observed before removal can be considered."),Object(o.b)("li",{parentName:"ul"},"The contribution team has to set on a regular release cycle.\nSAP Cloud SDK uses 2 weeks released cycle and it's preferred regularity."),Object(o.b)("li",{parentName:"ul"},"All the new features have to be released as ",Object(o.b)("inlineCode",{parentName:"li"},"Beta")," first.\n",Object(o.b)("inlineCode",{parentName:"li"},"General availability")," release is triggered when API is stabilized and no breaking changes are planned."),Object(o.b)("li",{parentName:"ul"},"If a new module is to be released, its naming has to be aligned with the SAP Cloud SDK team"),Object(o.b)("li",{parentName:"ul"},"Practicalities of releasing npm module into SAP Cloud SDK's namespace are provided by SAP Cloud SDK team"),Object(o.b)("li",{parentName:"ul"},"Release change-log has to be maintained by the contribution team")),Object(o.b)("h3",{id:"license"},"License"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open-source modules of SAP Cloud SDK for Java are licensed under Apache 2.0"),Object(o.b)("li",{parentName:"ul"},"The contribution must have the same license applied"),Object(o.b)("li",{parentName:"ul"},"Other cases have to be explicitly discussed")),Object(o.b)("h2",{id:"support"},"Support"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"General support provided by both SAP Cloud SDK and contribution teams."),Object(o.b)("li",{parentName:"ul"},"Bug-fixing and specific support related to the functional scope of the contributed library is done by the contribution team"),Object(o.b)("li",{parentName:"ul"},"Contribution team should be deemed responsible to observe reasonable support SLA"),Object(o.b)("li",{parentName:"ul"},"Initial reply within 2 days"),Object(o.b)("li",{parentName:"ul"},"Critical bug fixing - 1 week"),Object(o.b)("li",{parentName:"ul"},"Noncritical bugs- 2 weeks")),Object(o.b)("h2",{id:"maintenance"},"Maintenance"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Maintenance should be on the contributing team or its successor unless agreed otherwise.")))}u.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(r,".").concat(p)]||b[p]||d[p]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);