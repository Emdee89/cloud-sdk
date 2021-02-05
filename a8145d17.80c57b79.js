(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(204)),a=n(205),c={id:"sap-teched",title:"The Cloud SDK at SAP TechEd",sidebar_label:"SAP TechEd",description:"The SAP Cloud SDK actively participated in the global tech-education summit organized by SAP. We organize learning session and workshops to boost your knowledge about cloud-native development and Intelligent Enterprise.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d={unversionedId:"community/sap-teched",id:"community/sap-teched",isDocsHomePage:!1,title:"The Cloud SDK at SAP TechEd",description:"The SAP Cloud SDK actively participated in the global tech-education summit organized by SAP. We organize learning session and workshops to boost your knowledge about cloud-native development and Intelligent Enterprise.",source:"@site/docs/community/tech-ed.mdx",slug:"/community/sap-teched",permalink:"/cloud-sdk/docs/community/sap-teched",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/community/tech-ed.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1612547752,sidebar_label:"SAP TechEd",sidebar:"someSidebar",previous:{title:"Update Call for SAP Community",permalink:"/cloud-sdk/docs/community/community-call"},next:{title:"Cloud Application Model",permalink:"/cloud-sdk/docs/related-projects/cloud-application-model"}},u=[{value:"TechEd 2020",id:"teched-2020",children:[{value:"Introduction",id:"introduction",children:[]},{value:"Exercise",id:"exercise",children:[]}]}],l={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"teched-2020"},"TechEd 2020"),Object(i.b)("h3",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"In 2020 we ran two sessions of a workshop about extending SAP S/4HANA in a cloud-native way.\nNo worries if you have missed it!"),Object(i.b)("p",null,"Check the introduction deck to understand why side-by-side extensibility matters and how to do it in a healthy way.\nThen put your knowledge into practice by following our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#exercise"}),"exercise")," hosted on GitHub."),Object(i.b)("embed",{src:Object(a.a)("decks/teched/teched-2020.pdf"),type:"application/pdf",frameBorder:"0","top-toolbar-height":"56","full-frame":"",scrolling:"auto",height:"500px",width:"100%"}),Object(i.b)("h3",{id:"exercise"},"Exercise"),Object(i.b)("p",null,"The exercise for this workshop is hosted in this ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP-samples/teched2020-DT261"}),"GitHub repository"),".\nYou can run all the code locally or deploy it to the SAP Cloud Platform and test it there.\nFor that, we recommend creating a free trial account and activating Business Application Studio.\nYou'll find detailed instructions on how to do it in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk/blob/main/README.md"}),Object(i.b)("inlineCode",{parentName:"a"},"README.md"))," of the repository."))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||p[b]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(21),o=n(206);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,d=i.absolute,u=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},206:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);