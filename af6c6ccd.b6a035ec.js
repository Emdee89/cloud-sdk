(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(212)),c={id:"cf-cli",title:"SAP Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Foundry CLI",description:"Configure you Cloud Foundry CLI and bind it to SAP Cloud Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},l={unversionedId:"java/guides/cf-cli",id:"java/guides/cf-cli",isDocsHomePage:!1,title:"SAP Cloud Foundry",description:"Configure you Cloud Foundry CLI and bind it to SAP Cloud Platform",source:"@site/docs/java/guides/cf-cli.mdx",slug:"/java/guides/cf-cli",permalink:"/cloud-sdk/docs/java/guides/cf-cli",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-cli.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1615276348,sidebar_label:"Cloud Foundry CLI",sidebar:"someSidebar",previous:{title:"Caching Capabilities",permalink:"/cloud-sdk/docs/java/features/resilience/caching"},next:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"}},i=[{value:"Cloud Foundry Command-Line Interface",id:"cloud-foundry-command-line-interface",children:[]},{value:"Bind Your Command-Line Interface To SAP Cloud Foundry",id:"bind-your-command-line-interface-to-sap-cloud-foundry",children:[]},{value:"SAP Cloud Platform",id:"sap-cloud-platform",children:[]}],u={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cloud-foundry-command-line-interface"},"Cloud Foundry Command-Line Interface"),Object(r.b)("p",null,"To deploy your app developed with SAP Cloud SDK to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.sap.com/products/cloud-platform.html"}),"SAP Cloud Platform")," you'll need Cloud Foundry command-line interface (CLI).\nYou can download latest release of DEB package ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cli/releases"}),"from the official CF GitHub repository")," or follow ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager"}),"instructions")," to install it with you package manager: ",Object(r.b)("inlineCode",{parentName:"p"},"apt-get"),", ",Object(r.b)("inlineCode",{parentName:"p"},"yum")," and ",Object(r.b)("inlineCode",{parentName:"p"},"homebrew")," are supported."),Object(r.b)("p",null,"After installing the CLI you might need to reload you shell before it becomes available.\nTo check if it works run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf\n")),Object(r.b)("h2",{id:"bind-your-command-line-interface-to-sap-cloud-foundry"},"Bind Your Command-Line Interface To SAP Cloud Foundry"),Object(r.b)("p",null,"Let's associate you Cloud Foundry CLI to your SAP account by providing an API endpoint and logging in with your account."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Select endpoint depending on your region:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Europe ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.cf.eu10.hana.ondemand.com"}),"https://api.cf.eu10.hana.ondemand.com")),Object(r.b)("li",{parentName:"ul"},"US East: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.cf.us10.hana.ondemand.com"}),"https://api.cf.us10.hana.ondemand.com")),Object(r.b)("li",{parentName:"ul"},"US CENTRAL: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.cf.us20.hana.ondemand.com"}),"https://api.cf.us20.hana.ondemand.com"))),Object(r.b)("p",null,"To use a snippet for Europe run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf api https://api.cf.eu10.hana.ondemand.com\n")),Object(r.b)("p",null,"Provide your credential for SAP Cloud Foundry by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf login\n")),Object(r.b)("p",null,"For more details on ",Object(r.b)("inlineCode",{parentName:"p"},"SAP Cloud Foundry CLI")," follow this ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/cp-cf-download-cli.html"}),"official tutorial"),"."),Object(r.b)("h2",{id:"sap-cloud-platform"},"SAP Cloud Platform"),Object(r.b)("p",null,"Find out more about ",Object(r.b)("inlineCode",{parentName:"p"},"SAP Cloud Platform")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Foundry Environment")," from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/73beb06e127f4e47b849aa95344aabe1.html"}),"official documentation"),"."))}d.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,m=p["".concat(c,".").concat(s)]||p[s]||b[s]||r;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<r;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);