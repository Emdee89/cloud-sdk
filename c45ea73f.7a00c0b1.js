(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(207)),c={},i={unversionedId:"js/features/odata/common/operations/count",id:"js/features/odata/common/operations/count",isDocsHomePage:!1,title:"count",description:"The method count() allows you to get the number of elements in a collection.",source:"@site/docs/js/features/odata/common/operations/count.mdx",slug:"/js/features/odata/common/operations/count",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/count",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/count.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1614217793},s=[],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The method ",Object(o.b)("inlineCode",{parentName:"p"},"count()")," allows you to get the number of elements in a collection.\nIt is only available for ",Object(o.b)("inlineCode",{parentName:"p"},"getAll()")," requests and is added before the request execution:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().getAll().count();\n")),Object(o.b)("p",null,"The return type of count requests is a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<number>"),".\nYou can combine the ",Object(o.b)("inlineCode",{parentName:"p"},"count()")," with filter conditions.\nTo get the number of business partners with first name ",Object(o.b)("inlineCode",{parentName:"p"},"John")," execute the following request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .filter(BusinessPartner.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n")),Object(o.b)("p",null,"As defined in the OData spec ",Object(o.b)("inlineCode",{parentName:"p"},"count")," is not affected by ",Object(o.b)("inlineCode",{parentName:"p"},"top"),", ",Object(o.b)("inlineCode",{parentName:"p"},"skip"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(o.b)("inlineCode",{parentName:"h5"},"top()")," and ",Object(o.b)("inlineCode",{parentName:"h5"},"skip()")," are ignored for count")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you include these methods in a count request they will be ignored by the SAP Cloud SDK.\nSo these three requests:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"BusinessPartner.requestBuilder().getAll().top(5).count();\nBusinessPartner.requestBuilder().getAll().skip(5).count();\nBusinessPartner.requestBuilder().getAll().count();\n")),Object(o.b)("p",{parentName:"div"},"will all return the same value."))))}l.isMDXComponent=!0}}]);