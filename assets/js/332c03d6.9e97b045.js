(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return n?a.a.createElement(b,s(s({ref:t},d),{},{components:n})):a.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(214)),o={},s={unversionedId:"js/features/odata/common/etag",id:"js/features/odata/common/etag",isDocsHomePage:!1,title:"etag",description:"An ETag is a version identifier that is often used to implement an optimistic locking mechanism.",source:"@site/docs/js/features/odata/common/etag.mdx",slug:"/js/features/odata/common/etag",permalink:"/cloud-sdk/docs/js/features/odata/common/etag",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/etag.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1617791662,formattedLastUpdatedAt:"4/7/2021"},c=[],d={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"},"ETag")," is a version identifier that is often used to implement an optimistic locking mechanism.\nThe SAP Cloud SDK will try to read version identifiers from responses and set them when sending OData requests."),Object(i.b)("p",null,"Consider the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"async function modifyBusinessPartner(id) {\n  const destination = { url: 'https://my.s4-system.com' };\n\n  const businessPartner = await BusinessPartner.requestBuilder()\n    .getByKey(id)\n    .execute(myDestination);\n\n  // do some modification\n  applyModification(businessPartner);\n\n  return BusinessPartner.requestBuilder()\n    .update(businessPartner)\n    .execute(destination);\n}\n")),Object(i.b)("p",null,"When executing ",Object(i.b)("inlineCode",{parentName:"p"},"getAll")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getByKey")," requests the SAP Cloud SDK will automatically attempt to extract the version identifier from the response and store it within the returned entity (",Object(i.b)("inlineCode",{parentName:"p"},"partner")," in the example above).\nWhen executing ",Object(i.b)("inlineCode",{parentName:"p"},"update")," requests the version identifier will be sent in the ",Object(i.b)("inlineCode",{parentName:"p"},"If-match")," request header."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."),Object(i.b)("p",{parentName:"div"},"By default, an ETag is sent if it's present on the entity being modified.\n",Object(i.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier()")," will instead always send a ",Object(i.b)("inlineCode",{parentName:"p"},"*")," which acts as a wildcard to match all ETags."))))}p.isMDXComponent=!0}}]);