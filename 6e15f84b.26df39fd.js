(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{201:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(201)),i={},c={unversionedId:"js/features/odata/common/operations/update",id:"js/features/odata/common/operations/update",isDocsHomePage:!1,title:"update",description:"The Update request builder allows you to send PUT or PATCH requests.",source:"@site/docs/js/features/odata/common/operations/update.mdx",slug:"/js/features/odata/common/operations/update",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/update",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/update.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1607520553},s=[],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Update request builder allows you to send ",Object(o.b)("inlineCode",{parentName:"p"},"PUT")," or ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," requests.\nBy default ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," is used to only update the changed fields:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder().update(businessPartner);\n")),Object(o.b)("p",null,"In the example above only the changed fields of the given ",Object(o.b)("inlineCode",{parentName:"p"},"businessPartner")," instance are sent to the ",Object(o.b)("inlineCode",{parentName:"p"},"BusinessPartner")," service using ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH"),"."),Object(o.b)("p",null,"To update the whole entity use ",Object(o.b)("inlineCode",{parentName:"p"},"replaceWholeEntityWithPut"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .replaceWholeEntityWithPut();\n")),Object(o.b)("p",null,"This will send a ",Object(o.b)("inlineCode",{parentName:"p"},"PUT")," request and thereby replace the whole entity."),Object(o.b)("p",null,"Entities can only be updated if ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#handling-of-etags"}),"ETags")," match.\nIf you want to force an update of the entity regardless of the ETag configure the request to ignore version identifiers with ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n")))}p.isMDXComponent=!0}}]);