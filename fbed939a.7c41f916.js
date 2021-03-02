(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(212)),c={id:"generate-rest-client",title:"Generate a Typed OpenAPI Client",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",keywords:["sap","cloud","sdk","rest","java","VDM","generate"]},o={unversionedId:"java/features/rest/generate-rest-client",id:"java/features/rest/generate-rest-client",isDocsHomePage:!1,title:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",source:"@site/docs/java/features/rest/generate-rest-client.mdx",slug:"/java/features/rest/generate-rest-client",permalink:"/cloud-sdk/docs/java/features/rest/generate-rest-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/rest/generate-rest-client.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1614696014,sidebar_label:"Generate a Typed OpenAPI Client",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/rest/overview"},next:{title:"Type-Safe Client for SAP Cloud Platform Workflow REST API",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api"}},p=[{value:"Generate a Typed OpenAPI Client With OpenAPI Generator",id:"generate-a-typed-openapi-client-with-openapi-generator",children:[]},{value:"Using the OpenAPI Generator Maven Plugin",id:"using-the-openapi-generator-maven-plugin",children:[{value:"Generating Java Client Library for Multiple OpenAPI Specifications",id:"generating-java-client-library-for-multiple-openapi-specifications",children:[]},{value:"Available Parameters",id:"available-parameters",children:[]}]}],l={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"generate-a-typed-openapi-client-with-openapi-generator"},"Generate a Typed OpenAPI Client With OpenAPI Generator"),Object(i.b)("p",null,"The SAP Cloud SDK offers an OpenAPI client generator as a Maven plugin which can be used to generate a client library for a REST API based on its OpenAPI specification.\nThe OpenAPI generator is a wrapper around the public open-source ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator"}),"OpenAPI Generator")," where we have adjusted the ",Object(i.b)("inlineCode",{parentName:"p"},"mustache")," templates to integrate the generated client library with the SAP Cloud SDK core."),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Announcing General availability")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The OpenAPI client generator is now generally available and can be used in production environments."))),Object(i.b)("p",null,"The generated Java classes need the following dependency to be present in your project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-core</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"In order to use the generated client library, either the SAP Cloud SDK BOM should be part of your project's ",Object(i.b)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section or the version for the ",Object(i.b)("inlineCode",{parentName:"p"},"openapi-core")," artifact must be mentioned explicitly here."),Object(i.b)("h2",{id:"using-the-openapi-generator-maven-plugin"},"Using the OpenAPI Generator Maven Plugin"),Object(i.b)("p",null,"To use the Maven plugin following XML snippet should be added to the POM file of your project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <phase>generate-sources</phase>\n        </execution>\n    </executions>\n    <configuration>\n        <inputSpec>${project.basedir}/sample.yaml</inputSpec>\n        <outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n        <modelPackage>com.mycompany.openapi.sample.model</modelPackage>\n        <apiMaturity>released</apiMaturity>\n        <logLevel>info</logLevel>\n        \x3c!-- (Optional) You can add a custom copyright header:\n        <copyrightHeader>Copyright (c) this year, my company</copyrightHeader>\n\n        Or use the SAP copyright header:\n        <sapCopyrightHeader>true</sapCopyrightHeader>\n        --\x3e\n    </configuration>\n</plugin>\n")),Object(i.b)("p",null,"Maven will run the generator within the ",Object(i.b)("inlineCode",{parentName:"p"},"generate-sources")," phase which is executed before ",Object(i.b)("inlineCode",{parentName:"p"},"compile"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The phase ",Object(i.b)("inlineCode",{parentName:"p"},"generate-sources")," is just a recommendation from our side, it can be changed as per your project's requirement.\nRefer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference"}),"Maven build lifecycle guide")," for a complete explanation."))),Object(i.b)("p",null,"Please note that the version of the above plugin must be specified at least once in your project, preferably in the root POM.\nAlso, the version of the plugin should be the same as of the SAP Cloud SDK.\nWe recommend using a Maven property for defining the version of both the Maven plugin and the SAP Cloud SDK BOM."),Object(i.b)("h3",{id:"generating-java-client-library-for-multiple-openapi-specifications"},"Generating Java Client Library for Multiple OpenAPI Specifications"),Object(i.b)("p",null,"This Maven plugin processes one OpenAPI specification per execution.\nIn case you want to generate sources for multiple OpenAPI specifications then you need to create multiple executions of the plugin each corresponding to a particular OpenAPI specification.\nAs an example refer to the plugin XML below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>generate-sample1-id</id>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/sample1.yaml</inputSpec>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-sample2-id</id>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/sample2.yaml</inputSpec>\n            </configuration>\n        </execution>\n    </executions>\n    <configuration>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n        <modelPackage>com.mycompany.openapi.sample.api.model</modelPackage>\n        <outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiMaturity>released</apiMaturity>\n    </configuration>\n</plugin>\n")),Object(i.b)("h3",{id:"available-parameters"},"Available Parameters"),Object(i.b)("p",null,"The complete list of available parameters with their description is as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<apiPackage>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Package name for the generated API classes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<apiMaturity>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"released")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the maturity of the OpenAPI for which Java classes are generated. Possible values are ",Object(i.b)("inlineCode",{parentName:"td"},"released")," and ",Object(i.b)("inlineCode",{parentName:"td"},"beta"),". Please note if you define it as ",Object(i.b)("inlineCode",{parentName:"td"},"beta")," then ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.javadoc.io/doc/com.google.guava/guava/latest/com/google/common/annotations/Beta.html"}),"@Beta annotations")," are added to the generated classes which indicate that they are in an experimental state")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<compileScope>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"NONE")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Adds the generated sources to the compile or test phase. Respective values are ",Object(i.b)("inlineCode",{parentName:"td"},"COMPILE")," and ",Object(i.b)("inlineCode",{parentName:"td"},"TEST_COMPILE"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<copyrightHeader>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Copyright header to be added at the top of generated files")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<inputSpec>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Location of the OpenAPI specification file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<logLevel>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"info")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Defines the log level of the OpenAPI Generator. Possible values are ",Object(i.b)("inlineCode",{parentName:"td"},"info")," and ",Object(i.b)("inlineCode",{parentName:"td"},"debug"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<modelPackage>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Package name for the generated Model classes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<outputDirectory>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Output directory for generated sources")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"<sapCopyrightHeader>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"False")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Add the SAP copyright header (overrides ",Object(i.b)("inlineCode",{parentName:"td"},"copyrightHeader"),")")))))}b.isMDXComponent=!0},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);