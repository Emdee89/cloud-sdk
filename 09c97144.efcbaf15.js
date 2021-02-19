(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(205)),a={title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},c={unversionedId:"js/features/eslint-configuration",id:"js/features/eslint-configuration",isDocsHomePage:!1,title:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",source:"@site/docs/js/features/eslint-configuration.mdx",slug:"/js/features/eslint-configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/eslint-configuration.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1613729181,sidebar_label:"Shared ESLint configuration",sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"},next:{title:"Migrate to our Open Source Version",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The SAP Cloud SDK provides a configuration with our recommended ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://eslint.org/"}),"ESLint")," rules and plugin.\nIt extends the ",Object(i.b)("inlineCode",{parentName:"p"},"eslint:recommended")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@typescript-eslint/recommended")," configurations.\nIt also uses the ",Object(i.b)("inlineCode",{parentName:"p"},"eslint-config-prettier")," to avoid any formatting conflicts when using the highly recommended ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://prettier.io/"}),"Prettier"),"."),Object(i.b)("p",null,"To add the configuration please adjust your ESLint configuration (usually called ",Object(i.b)("inlineCode",{parentName:"p"},".eslintrc")," or ",Object(i.b)("inlineCode",{parentName:"p"},".eslintrc.js"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "extends": "@sap-cloud-sdk"\n}\n')),Object(i.b)("p",null,"or if you want to combine this configuration with others:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "extends": ["example-config", "@sap-cloud-sdk"]\n}\n')),Object(i.b)("p",null,"This configuration depends on plugins ",Object(i.b)("inlineCode",{parentName:"p"},"eslint-plugin-import")," and ",Object(i.b)("inlineCode",{parentName:"p"},"eslint-plugin-unused-imports"),", which need to be installed in your project."),Object(i.b)("p",null,"ESLint merges these shareable configurations with your configuration.\nAny rule configured in your ",Object(i.b)("inlineCode",{parentName:"p"},".eslintrc.js")," will overwrite the setting for this rule in the shareable configuration."))}l.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);