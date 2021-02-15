(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{112:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return u})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(205)),c=r(209),i=r(206),u={id:"use-typed-odata-client-for-javascript-and-typescript",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d={unversionedId:"js/features/odata/use-typed-odata-client-for-javascript-and-typescript",id:"js/features/odata/use-typed-odata-client-for-javascript-and-typescript",isDocsHomePage:!1,title:"Redirecting",source:"@site/docs/js/features/odata/redirect-use-typed-odata-client-for-javascript-and-typescript.mdx",slug:"/js/features/odata/use-typed-odata-client-for-javascript-and-typescript",permalink:"/cloud-sdk/docs/js/features/odata/use-typed-odata-client-for-javascript-and-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/redirect-use-typed-odata-client-for-javascript-and-typescript.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1613378229},s=[],f={toc:s};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)(c.Redirect,{to:Object(i.a)("docs/js/features/odata/odata-v2-client"),mdxType:"Redirect"}))}p.isMDXComponent=!0},205:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var d=o.a.createContext({}),s=function(t){var e=o.a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},f=function(t){var e=s(t.components);return o.a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},l=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),f=s(r),l=n,y=f["".concat(c,".").concat(l)]||f[l]||p[l]||a;return r?o.a.createElement(y,i(i({ref:e},d),{},{components:r})):o.a.createElement(y,i({ref:e},d))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},206:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return c}));var n=r(21),o=r(207);function a(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,c=a.forcePrependBaseUrl,i=void 0!==c&&c,u=a.absolute,d=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+s:s}(a,r,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},207:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},209:function(t,e,r){"use strict";r.r(e);var n=r(10);r.d(e,"MemoryRouter",(function(){return n.d})),r.d(e,"Prompt",(function(){return n.f})),r.d(e,"Redirect",(function(){return n.g})),r.d(e,"Route",(function(){return n.h})),r.d(e,"Router",(function(){return n.i})),r.d(e,"StaticRouter",(function(){return n.j})),r.d(e,"Switch",(function(){return n.k})),r.d(e,"generatePath",(function(){return n.l})),r.d(e,"matchPath",(function(){return n.m})),r.d(e,"useHistory",(function(){return n.n})),r.d(e,"useLocation",(function(){return n.o})),r.d(e,"useParams",(function(){return n.p})),r.d(e,"useRouteMatch",(function(){return n.q})),r.d(e,"withRouter",(function(){return n.r})),r.d(e,"BrowserRouter",(function(){return n.a})),r.d(e,"HashRouter",(function(){return n.b})),r.d(e,"Link",(function(){return n.c})),r.d(e,"NavLink",(function(){return n.e}))}}]);