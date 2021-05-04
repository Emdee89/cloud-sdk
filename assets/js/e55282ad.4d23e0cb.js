(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8979],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=a,v=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return t?r.createElement(v,i(i({ref:n},l),{},{components:t})):r.createElement(v,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return o},Z:function(){return i}});var r=t(2263),a=t(3919);function o(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,d=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(s)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+l:l}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7294),a=t(944),o=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var l=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,u=e.values,p=e.groupId,h=e.className,v=(0,a.Z)(),m=v.tabGroupChoices,f=v.setTabGroupChoices,y=(0,r.useState)(l),g=y[0],k=y[1],b=r.Children.toArray(e.children),N=[];if(null!=p){var w=m[p];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&k(w)}var x=function(e){var n=e.currentTarget,t=N.indexOf(n),r=u[t].value;k(r),null!=p&&(f(p,r),setTimeout((function(){var e,t,r,a,o,i,c,d;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,d=i.innerWidth,t>=0&&o<=d&&a<=c&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case d:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case c:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},h)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:x,onClick:x},t)}))),n?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},944:function(e,n,t){"use strict";var r=t(7294),a=t(9443);n.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8755:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.align;return r.createElement("span",{className:n?"col text--right":""},r.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},r.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}},7276:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=(t(4996),t(8755)),s=(t(1395),t(8215),{id:"sap-currency-conversion-extension-library-for-cloud-sdk-for-java",title:"Currency Conversion",sidebar_label:"Currency Conversion",description:"The Currency Conversion library allows you to perform currency exchange rate conversions in your cloud applications. You provide the market data from your own data sources, and the library handles the conversion. You can make bulk or single conversions based on direct or indirect rates. You can also perform conversions using inverse rates or a reference currency.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","currency conversion","extension"]}),c={unversionedId:"java/extensions/sap-currency-conversion-extension-library-for-cloud-sdk-for-java",id:"java/extensions/sap-currency-conversion-extension-library-for-cloud-sdk-for-java",isDocsHomePage:!1,title:"Currency Conversion",description:"The Currency Conversion library allows you to perform currency exchange rate conversions in your cloud applications. You provide the market data from your own data sources, and the library handles the conversion. You can make bulk or single conversions based on direct or indirect rates. You can also perform conversions using inverse rates or a reference currency.",source:"@site/docs/java/extensions/currency-conversion.mdx",sourceDirName:"java/extensions",slug:"/java/extensions/sap-currency-conversion-extension-library-for-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/extensions/sap-currency-conversion-extension-library-for-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/extensions/currency-conversion.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1620136451,formattedLastUpdatedAt:"5/4/2021",sidebar_label:"Currency Conversion",frontMatter:{id:"sap-currency-conversion-extension-library-for-cloud-sdk-for-java",title:"Currency Conversion",sidebar_label:"Currency Conversion",description:"The Currency Conversion library allows you to perform currency exchange rate conversions in your cloud applications. You provide the market data from your own data sources, and the library handles the conversion. You can make bulk or single conversions based on direct or indirect rates. You can also perform conversions using inverse rates or a reference currency.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","currency conversion","extension"]},sidebar:"someSidebar",previous:{title:"Extensions Overview",permalink:"/cloud-sdk/docs/java/extensions/extensions-supported-by-sap-cloud-sdk-for-java"},next:{title:"Video Tutorial: Getting Started",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Concepts",id:"concepts",children:[{value:"Currency Conversion",id:"currency-conversion",children:[]},{value:"Data Adapter",id:"data-adapter",children:[]},{value:"Direct Conversions",id:"direct-conversions",children:[]},{value:"Indirect Conversions By Using an Inverse Rate",id:"indirect-conversions-by-using-an-inverse-rate",children:[]},{value:"Indirect Conversions By Using a Reference Rate",id:"indirect-conversions-by-using-a-reference-rate",children:[]},{value:"Fixed Rate",id:"fixed-rate",children:[]},{value:"Non-Fixed Rate",id:"non-fixed-rate",children:[]},{value:"Default and Overwriting Tenant",id:"default-and-overwriting-tenant",children:[]},{value:"Default and Overwriting Tenant Setting",id:"default-and-overwriting-tenant-setting",children:[]},{value:"Big Decimal",id:"big-decimal",children:[]},{value:"Rounding Off",id:"rounding-off",children:[]}]},{value:"Features",id:"features",children:[{value:"Convert Currencies",id:"convert-currencies",children:[]},{value:"Multitenancy With Currency Conversion",id:"multitenancy-with-currency-conversion",children:[]}]},{value:"Code Example",id:"code-example",children:[]},{value:"Troubleshooting and FAQ",id:"troubleshooting-and-faq",children:[{value:"Getting Support",id:"getting-support",children:[]},{value:"Frequently Asked Questions",id:"frequently-asked-questions",children:[]}]},{value:"Where To Look Next",id:"where-to-look-next",children:[]}],l={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"MvnBadge"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Currency Conversion is an extension library built on SAP Cloud SDK.\nYou can use this library to facilitate currency exchange rate conversions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The library does not provide any market data out-of-the-box.\nYou must provide the currency exchange rates to the library from your own data sources.\nYou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.sap.com/products/market-rates-management.html"},"SAP Market Rates Management")," service or any other of your choice."))),(0,o.kt)("p",null,"You can use the library for the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Direct one-to-one conversions, from a source currency to a target currency."),(0,o.kt)("li",{parentName:"ul"},'Indirect conversions by using inverse rates or a "reference currency".'),(0,o.kt)("li",{parentName:"ul"},"Fixed rate conversions, for when you have the exact currency exchange rate that you want to use in your conversion operations."),(0,o.kt)("li",{parentName:"ul"},'Non-fixed rate conversions, for when you have a set of exchange rates, as opposed to the exact rate.\nThe library will pick the "best rate" from the set depending on ',(0,o.kt)("a",{parentName:"li",href:"#non-fixed-rate"},"various factors"),".")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Adding the Currency Conversion library to your list of dependencies will allow you to perform the following tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Convert a single or list of amounts from one currency to another by using a fixed rate."),(0,o.kt)("li",{parentName:"ul"},"Convert a single or list of amounts from one currency to another by using exchange rates provided at runtime."),(0,o.kt)("li",{parentName:"ul"},"Convert a single or list of amounts from one currency to another by using tenant-specific rates provided at runtime."),(0,o.kt)("li",{parentName:"ul"},"Configure the conversion process for users or tenants accessing your application.")),(0,o.kt)("p",null,"Add the dependency in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file under the existing ",(0,o.kt)("em",{parentName:"p"},"dependencies")," tag as follows:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Dependency version is handled via the SAP Cloud SDK BOM")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When your project uses the SAP Cloud SDK Bill-of-Material (BOM) ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of the POM file, then you can omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," tag.\nOtherwise, mention the latest SAP Cloud SDK version in the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," tag."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>com.sap.cloud.sdk.services</groupId>\n   <artifactId>currency-conversion-core</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"The library works within the tenant context, therefore, depending on the landscape you operate in, add one of the following dependencies in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file, in addition to that of the libraries.\nAdding this additional dependency helps the library detect your tenants automatically.\nWithout it, you would have to manually pass this information.\nTherefore, we recommend adding one or more of the following dependencies, based on your landscape."),(0,o.kt)("p",null,"If you want to run the library in the Cloud Foundry environment, use the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n  <artifactId>tenant-scp-cf</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"If you want to run the library in the Neo environment, use the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n  <artifactId>tenant-scp-neo</artifactId>\n</dependency>\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your project was generated from one of SAP Cloud SDK archetypes these dependencies should already present in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")))),(0,o.kt)("p",null,"If your IDE hasn't resolved the dependencies, run ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn clean install")," in the root directory of your project."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("h3",{id:"currency-conversion"},"Currency Conversion"),(0,o.kt)("p",null,"Currency Conversion is a Java library that you can use to convert currency exchange rates.\nYou can perform conversions either with one currency pair or perform multiple conversions through a single API call.\nYou can use a data adapter to provide exchange rates, configuration settings, and so on."),(0,o.kt)("h3",{id:"data-adapter"},"Data Adapter"),(0,o.kt)("p",null,"The data adapter provides the library with access to relevant exchange rates and configurations.\nYou use the data adapter to send currency exchange rates to the library."),(0,o.kt)("p",null,"At runtime, the conversion library interacts with the data adapter by calling the relevant methods to provide the information you request."),(0,o.kt)("h3",{id:"direct-conversions"},"Direct Conversions"),(0,o.kt)("p",null,"Direct conversions happen between a source currency and a target currency, by using the exact rate from the source to the target currency.\nA conversion request with USD as the source currency and EUR as the target currency is performed only if an exchange rate from USD to EUR is available.\nConversions will fail if, say, only the rate from EUR to USD is available."),(0,o.kt)("p",null,"However, this scenario is covered by indirect conversions as described in the following section."),(0,o.kt)("h3",{id:"indirect-conversions-by-using-an-inverse-rate"},"Indirect Conversions By Using an Inverse Rate"),(0,o.kt)("p",null,"You can request a conversion from INR to USD even if the rates available are from USD to INR.\nYou (or your consumers) enable the inverse rates setting for each exchange rate type.\nYou can then provide the rate type information by using the data adapter.\nNote that inverse rates are only used if no direct rates are available.\nFor example, if you have enabled the inverse rate type for INR to USD and if a direct rate is available for this currency pair, it will still be given precedence over the inverse rate.\nIf a direct rate from INR to USD is not found, the library looks for the USD to INR rate."),(0,o.kt)("h3",{id:"indirect-conversions-by-using-a-reference-rate"},"Indirect Conversions By Using a Reference Rate"),(0,o.kt)("p",null,"A currency conversion can be performed by using a reference or intermediate currency outside of your desired currency pair.\nA conversion from INR to USD can be performed by using a reference currency, say EUR, with the currency exchange rates for INR to EUR and USD to EUR.\nNote that this can be done only if a reference currency for these rates is specified in when you define these exchange rate pairs, in the 'toCurrency' field."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Indirect conversions using inverse rates and reference currencies are disabled by default.\nYou can use the data adapter implementation to specify whether you want to enable them, for each exchange rate type."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a reference currency is provided, it takes precedence over direct rates.\nThe conversion will be performed based on the reference currency specified.\nInverse rates are not considered in this scenario."))),(0,o.kt)("h3",{id:"fixed-rate"},"Fixed Rate"),(0,o.kt)("p",null,"The exact exchange rate provided at run-time.\nThe library uses the run-time rates to perform the conversion."),(0,o.kt)("h3",{id:"non-fixed-rate"},"Non-Fixed Rate"),(0,o.kt)("p",null,'A set of exchange rates you provide to the library.\nThe library picks the "best rate" from the list and uses it to perform each conversion.\nThis "best rate" is determined by using various factors such as the from currency, to currency, the date time for which the conversion is requested, and the exchange rate type.\nIf provided, the provider and source are also taken into consideration.\nThe inversion and reference currency settings, if set, are considered to decide which rate to use.'),(0,o.kt)("p",null,"You must implement the data adapter to enable the library to read the exchange rates from your data source."),(0,o.kt)("h3",{id:"default-and-overwriting-tenant"},"Default and Overwriting Tenant"),(0,o.kt)("p",null,'By default, the conversion library operates in the context of the calling tenant, that is, the customer that uses your application to initiate a Currency Conversion call.\nThis is a "default tenant".\nYou can choose to override this tenant by using the ',(0,o.kt)("inlineCode",{parentName:"p"},"TenantAccessor")," class to perform conversions for them."),(0,o.kt)("h3",{id:"default-and-overwriting-tenant-setting"},"Default and Overwriting Tenant Setting"),(0,o.kt)("p",null,"By default, the conversion library works with the default tenant settings you provide as part of the data adapter implementation.\nThese settings can include the default data provider and default data provider source for your application's consumers'.\nHowever, if your business case requires you to provide exchange rates to your consumers, instead of them providing their own rates, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"OverrideTenantSetting")," class to provide a different default provider and source while calling the conversion API."),(0,o.kt)("h3",{id:"big-decimal"},"Big Decimal"),(0,o.kt)("p",null,"The library uses the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/math/BigDecimal.html"},"Big Decimal"),' class, which allows you to control the precision and scale of your currency exchange rates.\nFor direct conversions, the scale of the result is calculated by adding the scale of the amount and the exchange rate.\nFor example, if you have two exchange rates: 13.74 and 1.32, the result would be 15.0600.\nFor indirect conversions, the scales are added as well, with the rounding rule of "',(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/math/RoundingMode.html#HALF_UP"},"half up"),'" applied.'),(0,o.kt)("p",null,"The library returns the converted amount both as a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Big Decimal"),".\nYou can work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Big Decimal")," object and specify a scale of your choice."),(0,o.kt)("h3",{id:"rounding-off"},"Rounding Off"),(0,o.kt)("p",null,"Rounded off values represent the usable currency amounts to your business case.\nThis means that the amounts are rounded down to a usable precision and value."),(0,o.kt)("p",null,'This is done by using an exponent value of the target currency.\nAn exponent represents the relationship between a major and minor currency unit as a mathematical function.\nFor example, 100 cents make one US Dollar (USD).\nWe can represent this relationship by using a "base value" and an "exponent value".\nFor all rounding off calculations, the base value is fixed as 10.\nTherefore, in this example, the exponent will be 2.'),(0,o.kt)("p",null,'Additionally, converted amounts in the library response are rounded off to a "scale" equal to the exponent of the target currency.\nThis means that if the source currency\'s exponent value is 2 (as is the case in our example), there will be two digits after the decimal in the rounded off amount.'),(0,o.kt)("p",null,"Exponents for all currencies are published by ISO and this information is also available in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/util/Currency.html"},"Currency")," class."),(0,o.kt)("p",null,"This rounding down logic is applied to all conversion amounts."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The library provides both the unrounded and rounded-off amounts in the result set.\nYou can choose which one to opt for, based on your use case."))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"convert-currencies"},"Convert Currencies"),(0,o.kt)("p",null,"Get currency exchange rates converted from a base currency to a target currency by using the Currency Conversion library."),(0,o.kt)("h4",{id:"get-bulk-conversions"},"Get Bulk Conversions"),(0,o.kt)("p",null,"Get multiple currency pairs converted through a single call.\nYou can use the library methods to get more than one currency pair converted at the same time."),(0,o.kt)("h4",{id:"get-direct-and-indirect-conversions"},"Get Direct and Indirect Conversions"),(0,o.kt)("p",null,"Get direct and indirect currency conversions for your currency pairs.\nDirect conversions are one-to-one conversions between a source and a target currency.\nIndirect conversions are performed by using inverse rates or a reference currency."),(0,o.kt)("h3",{id:"multitenancy-with-currency-conversion"},"Multitenancy With Currency Conversion"),(0,o.kt)("p",null,"Based on the dependency added to ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),", the library identifies the environment you are operating on and the tenant context.\nThe library automatically derives the tenant context by using the ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/19838225037e4e52ba36d2bb95176126/1.0/en-US/com/sap/cloud/sdk/cloudplatform/tenant/Tenant.html"},"Tenant abstraction")," provided by the SAP Cloud SDK.\nTo override the default conversion configuration, manually add an exchange rate provider and an exchange rate provider code to the API request, as follows.\nIf you do this, the default configuration settings are not taken into consideration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"TenantAccessor.executeWithTenant(providerTenant, CallableWhichPerformsCurrencyConversion);\n\nTenantAccessor.executeWithTenant(() -> MyProviderTenant, () -> {\n  // Call the Currency Conversion library here.\n});\n")),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The code example that follows, shows the end-to-end process flow in using the Currency Conversion library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Initialize the Currency Conversion Library.\nCurrencyConverter currConverter = new CurrencyConverter();\n\n// Initialize the Data Adapter implementation you would like to use.\nDataAdapter dataAdapter = new DataAdapterImpl();\n\n// Prepare the parameter for your conversion request.\nConversionParametersForNonFixedRate parameter =\n    ConversionParametersForNonFixedRate.builder()\n      .fromAmount(new CurrencyAmount("500.123"))\n      .fromCurrency(Currency.getInstance("EUR"))\n      .toCurrency(Currency.getInstance("USD"))\n      .exchangeRateType(new RateType("MID"))\n      .build();\n\n// Call the conversion library for a single conversion.\n\ntry {\n      SingleNonFixedRateConversionResult singleConversionresult =\n        currConverter.convertCurrencyWithNonFixedRate(param, dataAdapter);\n      convertedAmount =\n        singleConversionresult.getConvertedAmount().getDecimalValue();\n} catch(ConversionException ex){\n      //Exception handling here\n}\n\n// Or... if you would like to perform bulk conversions, use the following...\n\nList<ConversionParametersForNonFixedRate> paramList = new ArrayList<>();\n\nparamList.add(parameter);\n\nConversionParametersForNonFixedRate parameter2 =\n    ConversionParametersForNonFixedRate.builder()\n      .fromAmount(new CurrencyAmount("485.324"))\n      .fromCurrency(Currency.getInstance("JPY"))\n      .toCurrency(Currency.getInstance("USD"))\n      .exchangeRateType(new RateType("MID"))\n      .build();\n\nparamList.add(parameter2);\n\n// ...and so on.\n\n// Call the conversion library for bulk conversion.\n\nBulkNonFixedRateConversionResult bulkConversionresult = null;\n\ntry {\n  bulkConversionresult =\n    currConverter.convertCurrenciesWithNonFixedRate(paramList, dataAdapter);\n} catch (ConversionException ex){\n    //Exception handling here;\n}\n\n// Process the results.\n\nfor(ConversionParametersForNonFixedRate param: paramList) {\n    if(bulkConversionresult.get(param).isSuccess()) {\n      convertedAmount =\n        bulkConversionresult.get(param).get().getConvertedAmount().getDecimalValue();\n    } else {\n      // Handle specific failures.\n      bulkConversionresult.get(param).getCause().getMessage();\n    }\n}\n\n')),(0,o.kt)("h2",{id:"troubleshooting-and-faq"},"Troubleshooting and FAQ"),(0,o.kt)("h3",{id:"getting-support"},"Getting Support"),(0,o.kt)("p",null,"You can report a BCP incident or error through the SAP Support Portal Information published on the SAP site.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"XX-S4C-SDK-CC")," as the component."),(0,o.kt)("h3",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Question")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do you provide currency exchange rates from a data provider?"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Answer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No.\nThe library requires you to provide your own exchange rates.\nIt facilitates direct currency conversions for both fixed and non-fixed rates based on your exchange rate set."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Question")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Are your conversion results consistent with those provided by SAP S/4HANA?"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Answer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No.\nWe do not use the configuration tables based on SAP S/4HANA and therefore our results are different."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Question")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Why are my conversion requests failing?"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Answer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conversion requests fail due to several reasons, including but not limited to the following:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The library could not determine the exchange rate record for your conversion request: If this happens, check your Data Adapter settings and the exchange rate list you have provided."),(0,o.kt)("li",{parentName:"ul"},"The library found multiple exchange rates for the same conversion request, and there was no default exchange rate provider specified.\nIf this happens, set a default exchange rate provider."),(0,o.kt)("li",{parentName:"ul"},"The library found duplicate exchange rate records from the same exchange rates provider.")),(0,o.kt)("p",{parentName:"div"},"You can handle the individual status of a success or failure exception.\nTo learn more, see ",(0,o.kt)("a",{parentName:"p",href:"#code-example"},"Code Example"),"."))),(0,o.kt)("h2",{id:"where-to-look-next"},"Where To Look Next"),(0,o.kt)("p",null,"Find the SAP Currency Conversion library ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/7080b5b59e8243ecb48e34c1b107538b/Latest/en-US"},"API documentation")," on the SAP Help Portal."))}u.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);