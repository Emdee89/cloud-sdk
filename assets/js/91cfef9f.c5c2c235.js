(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1951],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,y=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1501:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},s={unversionedId:"js/features/odata/common/entity/entity-builder",id:"js/features/odata/common/entity/entity-builder",isDocsHomePage:!1,title:"entity-builder",description:"To build an entity by assigning its properties and you can use the entity builders provided by every entity class.",source:"@site/docs/js/features/odata/common/entity/entity-builder.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/entity-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/entity-builder",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/entity-builder.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1620390756,formattedLastUpdatedAt:"5/7/2021",frontMatter:{}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To build an entity by assigning its properties and you can use the entity builders provided by every entity class.\nUse the static ",(0,a.kt)("inlineCode",{parentName:"p"},".builder")," method to access the builder, set the properties and finally use the ",(0,a.kt)("inlineCode",{parentName:"p"},".build")," method to yield the entity.\nTo set navigation properties, that link to other entities, you have to create the linked entities using their respective builder.\nNavigation properties, that are linked through a one-to-many relation have to be assigned in an array - one-to-one relations are assigned as single objects.\nThe example below shows how you would create the data from above using the entity builder.\nThe relation to the business partner address is a one-to-many relation here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BusinessPartner, BusinessPartnerAddress } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder()\n  .firstName('Peter')\n  .lastName('Pan'),\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('Neverland')\n      .build()\n  ])\n  .build();\n")),(0,a.kt)("p",null,"You can also add fields, that are unknown accoding to the specification, if you add them as custom fields.\nTo achieve this, pass an object the ",(0,a.kt)("inlineCode",{parentName:"p"},".withCustomFields")," method, where the keys denote the names of the custom fields, and the values their respective values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder()\n  .firstName('Peter')\n  .withCustomFields({\n    myCustomField: 'this is custom'\n  })\n  .build();\n")))}d.isMDXComponent=!0}}]);