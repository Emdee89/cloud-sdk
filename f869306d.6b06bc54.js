(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(205)),i={},c={unversionedId:"js/features/odata/v4/filter-one-to-many",id:"js/features/odata/v4/filter-one-to-many",isDocsHomePage:!1,title:"filter-one-to-many",description:"OData V4 introduces lambda operators e.g., any/all, so that the root property of the one-to-many navigation properties can be filtered.",source:"@site/docs/js/features/odata/v4/filter-one-to-many.mdx",slug:"/js/features/odata/v4/filter-one-to-many",permalink:"/cloud-sdk/docs/js/features/odata/v4/filter-one-to-many",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/filter-one-to-many.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1613787640},l=[],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"OData V4 introduces ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators"}),"lambda operators")," e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"any"),"/",Object(o.b)("inlineCode",{parentName:"p"},"all"),", so that the root property of the one-to-many navigation properties can be filtered.\nBelow is an example that demonstrates how to use the lambda operator ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///api/1.28.1/modules/sap_cloud_sdk_core#any"}),"any"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/*\n  Get all people that have at least one friend that matches all the following conditions:\n    - Has first name 'firstName'\n    - Has last name 'lastName'\n*/\n.filter(\n  any(\n    People.FRIENDS.filter(\n      People.FIRST_NAME.equals('firstName'),\n      People.LAST_NAME.equals('lastName')\n    )\n  )\n)\n")),Object(o.b)("p",null,"The generated ",Object(o.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the URL will be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"$filter=(/any(a0:((a0/Friends/FirstName eq 'firstName' and a0/Friends/LastName eq 'lastName'))))\n")))}p.isMDXComponent=!0}}]);