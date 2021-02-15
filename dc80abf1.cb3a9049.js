(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{178:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return u})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(205)),c=r(209),i=r(206),u={id:"generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d={unversionedId:"js/features/odata/generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript",id:"js/features/odata/generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript",isDocsHomePage:!1,title:"Redirecting",source:"@site/docs/js/features/odata/redirect-generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript.mdx",slug:"/js/features/odata/generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript",permalink:"/cloud-sdk/docs/js/features/odata/generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/redirect-generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1613378229},s=[],f={toc:s};function p(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)(c.Redirect,{to:Object(i.a)("docs/js/features/odata/generate-odata-client"),mdxType:"Redirect"}))}p.isMDXComponent=!0},205:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return v}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=a.a.createContext({}),s=function(t){var e=a.a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},f=function(t){var e=s(t.components);return a.a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},l=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),f=s(r),l=n,v=f["".concat(c,".").concat(l)]||f[l]||p[l]||o;return r?a.a.createElement(v,i(i({ref:e},d),{},{components:r})):a.a.createElement(v,i({ref:e},d))}));function v(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},206:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var n=r(21),a=r(207);function o(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,u=o.absolute,d=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+s:s}(o,r,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},207:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}))},209:function(t,e,r){"use strict";r.r(e);var n=r(10);r.d(e,"MemoryRouter",(function(){return n.d})),r.d(e,"Prompt",(function(){return n.f})),r.d(e,"Redirect",(function(){return n.g})),r.d(e,"Route",(function(){return n.h})),r.d(e,"Router",(function(){return n.i})),r.d(e,"StaticRouter",(function(){return n.j})),r.d(e,"Switch",(function(){return n.k})),r.d(e,"generatePath",(function(){return n.l})),r.d(e,"matchPath",(function(){return n.m})),r.d(e,"useHistory",(function(){return n.n})),r.d(e,"useLocation",(function(){return n.o})),r.d(e,"useParams",(function(){return n.p})),r.d(e,"useRouteMatch",(function(){return n.q})),r.d(e,"withRouter",(function(){return n.r})),r.d(e,"BrowserRouter",(function(){return n.a})),r.d(e,"HashRouter",(function(){return n.b})),r.d(e,"Link",(function(){return n.c})),r.d(e,"NavLink",(function(){return n.e}))}}]);