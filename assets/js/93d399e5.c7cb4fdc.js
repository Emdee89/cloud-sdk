(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3187],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5289:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={},s={unversionedId:"js/features/odata/common/batch/configure-serialization",id:"js/features/odata/common/batch/configure-serialization",isDocsHomePage:!1,title:"configure-serialization",description:"By default, URLs in the multipart representation of a request are serialized to a path relative to the service, e.g.:",source:"@site/docs/js/features/odata/common/batch/configure-serialization.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/configure-serialization",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/configure-serialization",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/configure-serialization.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620832831,formattedLastUpdatedAt:"5/12/2021",frontMatter:{}},u=[],c={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, URLs in the multipart representation of a request are serialized to a path relative to the service, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress?$format=json HTTP/1.1\n")),(0,o.kt)("p",null,"However, some services might only understand URLs relative to the entity or even absolute URLs."),(0,o.kt)("p",null,"To configure the serialization of the URLs within a batch request, you can set the subrequest path type with ",(0,o.kt)("inlineCode",{parentName:"p"},"withSubRequestPathType"),".\nYou can either set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"'relativeToService'"),", as is the default, ",(0,o.kt)("inlineCode",{parentName:"p"},"'relativeToEntity'"),", which will yield URLs relative to the entity or ",(0,o.kt)("inlineCode",{parentName:"p"},"'absolute'"),", which will produce absolute URLs.\nSee below for examples:"),(0,o.kt)("p",null,"Serialize subrequest path relative to entity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// GET /A_BusinessPartnerAddress?$format=json HTTP/1.1\nbatch(...requests).withSubRequestPathType('relativeToEntity');\n")),(0,o.kt)("p",null,"Serialize subrequest path as absolute URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// GET https://my-s4.system.com/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress?$format=json HTTP/1.1\nbatch(...requests).withSubRequestPathType('absolute');\n")))}l.isMDXComponent=!0}}]);