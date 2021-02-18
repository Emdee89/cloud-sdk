(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(205)),s={},i={unversionedId:"js/features/odata/common/operations/delete",id:"js/features/odata/common/operations/delete",isDocsHomePage:!1,title:"delete",description:"The Delete request builder allows you to create DELETE requests, that delete an entity.",source:"@site/docs/js/features/odata/common/operations/delete.mdx",slug:"/js/features/odata/common/operations/delete",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/delete",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/delete.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1613665762},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Delete request builder allows you to create ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," requests, that delete an entity."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"/*\n  The following won't work on the real SAP S/4HANA BusinessPartner service because BusinessPartners cannot be deleted.\n  We added this only for the sake of the example.\n*/\nBusinessPartner.requestBuilder().delete(businessPartner);\n")),Object(o.b)("p",null,"Entities can only be deleted if ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#handling-of-etags"}),"ETags")," match.\nIf you want to force deletion of the entity regardless of the ETag configure the request to ignore version identifiers with ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .ignoreVersionIdentifier();\n")),Object(o.b)("p",null,"You can also overwrite ETags using ",Object(o.b)("inlineCode",{parentName:"p"},"setVersionIdentifier"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .setVersionIdentifier('etag');\n")),Object(o.b)("p",null,"In the example above the ETag 'ETag' is being used instead of the original one."))}u.isMDXComponent=!0}}]);