(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{220:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(220)),i={},s={unversionedId:"js/features/odata/common/query-parameter/filter-functions",id:"js/features/odata/common/query-parameter/filter-functions",isDocsHomePage:!1,title:"filter-functions",description:"There are predefined filter functions e.g. length, substring, substringOf in the core library, that allow for a wide range of filter expressions:",source:"@site/docs/js/features/odata/common/query-parameter/filter-functions.mdx",slug:"/js/features/odata/common/query-parameter/filter-functions",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter-functions",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter-functions.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1618604900,formattedLastUpdatedAt:"4/16/2021"},c=[],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are predefined filter functions e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"length"),", ",Object(o.b)("inlineCode",{parentName:"p"},"substring"),", ",Object(o.b)("inlineCode",{parentName:"p"},"substringOf")," in the core library, that allow for a wide range of filter expressions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"/*\n  Fetch all business partners who have a first name shorter than 5 letters\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(length(BusinessPartner.FIRST_NAME).lessThan(5))\n  .execute(destination);\n")),Object(o.b)("p",null,"For filter functions with ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," as a return types, the filter function can be used directly as a filter without ",Object(o.b)("inlineCode",{parentName:"p"},".equal(true)"),".\nLogically, the two following examples are equivalent to each other:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"  /*\n    $filter=startswith(FirstName, 'Bob') eq true\n  */\n  .filter(\n    startsWith(BusinessPartner.FIRST_NAME, 'Bob').equal(true)\n  )\n")),Object(o.b)("p",null,"The filter expression can be shortened:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"  /*\n    $filter=startswith(FirstName, 'Bob')\n  */\n  .filter(\n    startsWith(BusinessPartner.FIRST_NAME, 'Bob')\n  )\n")),Object(o.b)("p",null,"However, as some services might not support both versions shown above, you might have to choose one of them to fit the target system."))}u.isMDXComponent=!0}}]);