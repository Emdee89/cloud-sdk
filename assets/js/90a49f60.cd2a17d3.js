(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9321],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4809:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={},s={unversionedId:"js/features/odata/common/query-parameter/filter-functions",id:"js/features/odata/common/query-parameter/filter-functions",isDocsHomePage:!1,title:"filter-functions",description:"There are predefined filter functions e.g. length, substring, substringOf in the core library, that allow for a wide range of filter expressions:",source:"@site/docs/js/features/odata/common/query-parameter/filter-functions.mdx",sourceDirName:"js/features/odata/common/query-parameter",slug:"/js/features/odata/common/query-parameter/filter-functions",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter-functions",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter-functions.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1620136451,formattedLastUpdatedAt:"5/4/2021",frontMatter:{}},u=[],l={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are predefined filter functions e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substring"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"substringOf")," in the core library, that allow for a wide range of filter expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Fetch all business partners who have a first name shorter than 5 letters\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(length(BusinessPartner.FIRST_NAME).lessThan(5))\n  .execute(destination);\n")),(0,a.kt)("p",null,"For filter functions with ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," as a return types, the filter function can be used directly as a filter without ",(0,a.kt)("inlineCode",{parentName:"p"},".equal(true)"),".\nLogically, the two following examples are equivalent to each other:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /*\n    $filter=startswith(FirstName, 'Bob') eq true\n  */\n  .filter(\n    startsWith(BusinessPartner.FIRST_NAME, 'Bob').equal(true)\n  )\n")),(0,a.kt)("p",null,"The filter expression can be shortened:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /*\n    $filter=startswith(FirstName, 'Bob')\n  */\n  .filter(\n    startsWith(BusinessPartner.FIRST_NAME, 'Bob')\n  )\n")),(0,a.kt)("p",null,"However, as some services might not support both versions shown above, you might have to choose one of them to fit the target system."))}c.isMDXComponent=!0}}]);