(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),o=(n(0),n(214)),r={id:"sdk-connectivity-http-client",title:"Use the HttpClient Accessor To Configure Requests To Remote Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"HttpClient",description:"This article describes how the SAP Cloud SDK for Java can be used to prepare instances of HttpClient. This class enables connections to other systems and services like SAP S/4HANA or SAP Business Technology Platform services.",keywords:["sap","cloud","sdk","destination","java","connectivity","http"]},c={unversionedId:"java/features/connectivity/sdk-connectivity-http-client",id:"java/features/connectivity/sdk-connectivity-http-client",isDocsHomePage:!1,title:"Use the HttpClient Accessor To Configure Requests To Remote Services",description:"This article describes how the SAP Cloud SDK for Java can be used to prepare instances of HttpClient. This class enables connections to other systems and services like SAP S/4HANA or SAP Business Technology Platform services.",source:"@site/docs/java/features/connectivity/http-client.mdx",slug:"/java/features/connectivity/sdk-connectivity-http-client",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/connectivity/http-client.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1617791662,formattedLastUpdatedAt:"4/7/2021",sidebar_label:"HttpClient",sidebar:"someSidebar",previous:{title:"Use Destinations To Connect To Other Systems and Services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service"},next:{title:"Multitenancy With the Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}},l=[{value:"General Usage",id:"general-usage",children:[]},{value:"Customization",id:"customization",children:[]},{value:"Overriding Default Behavior",id:"overriding-default-behavior",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SAP Cloud SDK offers basic functionality that helps with connecting to other systems and services like SAP S/4HANA Cloud or On-premise edition.\nThe SAP Cloud SDK leverages the existing API of ",Object(o.b)("inlineCode",{parentName:"p"},"HttpClient")," and applies conveniently managed properties, e.g. according to a specific destination configuration."),Object(o.b)("p",null,"In the following paragraphs, the ",Object(o.b)("inlineCode",{parentName:"p"},"HttpClientAccessor")," API and its usage will be described."),Object(o.b)("h2",{id:"general-usage"},"General Usage"),Object(o.b)("p",null,"In general an ",Object(o.b)("inlineCode",{parentName:"p"},"HttpClient")," can be instantiated through the ",Object(o.b)("inlineCode",{parentName:"p"},"HttpClientAcessor"),".\nThe SAP Cloud SDK itself uses the accessor class for all internal requests as well."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"HttpClient client = HttpClientAccessor.getHttpClient();\n")),Object(o.b)("p",null,"If On-premise the goal is to create a client with properties according to a specific destination, it can be provided as argument:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'HttpDestination destination = DestinationAccess.getDestination("my-destination").asHttp();\nHttpClient client = HttpClientAccessor.getHttpClient(destination);\n')),Object(o.b)("p",null,"When using a destination, the configured destination URL will be used as base path for the subsequent requests for ",Object(o.b)("inlineCode",{parentName:"p"},"client"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please note that similar to other accessor-based APIs, the SAP Cloud SDK offers methods with a ",Object(o.b)("inlineCode",{parentName:"p"},"try")," prefix to allow for optional VAVR-enhanced API access."))),Object(o.b)("h2",{id:"customization"},"Customization"),Object(o.b)("p",null,"When the properties of ",Object(o.b)("inlineCode",{parentName:"p"},"HttpClient")," are not working for the application, e.g. timeout is too short or too long, then the generation can be customized.\nPlease find the ",Object(o.b)("inlineCode",{parentName:"p"},"HttpClientFactory")," interface and the provided implementation ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultHttpClientFactory"),".\nThey offer a similar method ",Object(o.b)("inlineCode",{parentName:"p"},"createHttpClient")," with optional destination argument:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"HttpClientFactory factory = new DefaultHttpClientFactory();\n\nHttpClient genericClient = factory.createHttpClient();\nHttpClient destinationClient = factory.createHttpClient(destination);\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultHttpClientFactory")," type offers a static builder, to enable custom properties for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeoutMilliseconds")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"maxConnectionsPerRoute")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"maxConnectionsTotal"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"HttpClientFactory customFactory = DefaultHttpClientFactory.builder()\n  .timeoutMilliseconds(60000)\n  .maxConnectionsPerRoute(100)\n  .maxConnectionsTotal(200)\n  .build();\n")),Object(o.b)("p",null,"When inheriting from ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultHttpClientFactory")," it's possible to provide even deeper customization:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'DefaultHttpClientFactory customFactory = new DefaultHttpClientFactory() {\n  @Override\n  protected RequestConfig.Builder getRequestConfigBuilder( HttpDestinationProperties destination ) {\n    return super.getRequestConfigBuilder(destination)\n      .setProxy(new HttpHost("proxy", 8080, "http"));\n  }\n  @Override\n  protected HttpClientBuilder getHttpClientBuilder( HttpDestinationProperties destination ) {\n    return super.getHttpClientBuilder(destination)\n      .setUserAgent("SDK");\n  }\n};\n')),Object(o.b)("p",null,"It is possible to take advantage of calls to ",Object(o.b)("inlineCode",{parentName:"p"},"super")," - or use your own objects directly.\nThis inheritance enables custom implementation for the following methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getHttpClientBuilder")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getRequestConfigBuilder")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getSocketConfigBuilder")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getConnectionManager"))),Object(o.b)("h2",{id:"overriding-default-behavior"},"Overriding Default Behavior"),Object(o.b)("p",null,"Now the customization of the HTTP client factory is available and we can adjust the default behavior for the accessor:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"HttpClientFactory factory = new MyCustomHttpClientFactory();\nHttpClientAccessor.setHttpClientFactory(factory);\n")),Object(o.b)("p",null,"From now on the custom factory will be used for every explicit and implicit HTTP request running through the SAP Cloud SDK."))}p.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);