(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(218)),r={id:"cloud-foundry-xsuaa-service",title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CF XSUAA Service",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","xsuaa","destination","connectivity"],image:null},c={unversionedId:"java/guides/cloud-foundry-xsuaa-service",id:"java/guides/cloud-foundry-xsuaa-service",isDocsHomePage:!1,title:"SAP BTP, Cloud Foundry Environment XSUAA Explained",description:"Understand how the XSUAA service works on Cloud Foundry and leverage it for your applications",source:"@site/docs/java/guides/cf-xsuaa.mdx",slug:"/java/guides/cloud-foundry-xsuaa-service",permalink:"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-xsuaa.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1618572905,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"CF XSUAA Service",sidebar:"someSidebar",previous:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"},next:{title:"Managing Dependencies",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies"}},s=[{value:"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases",id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases",children:[{value:"Read the Application Properties",id:"read-the-application-properties",children:[]}]},{value:"Authorization Code Grant",id:"authorization-code-grant",children:[{value:"Get Authorization Code",id:"get-authorization-code",children:[]},{value:"Get OAuth2 Access Token",id:"get-oauth2-access-token",children:[]}]},{value:"JSON Web Token Bearer Token Grant",id:"json-web-token-bearer-token-grant",children:[]},{value:"Client Credentials Grant",id:"client-credentials-grant",children:[]},{value:"Refresh Token Grant",id:"refresh-token-grant",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When developing and deploying an application it quickly becomes important to understand how authentication and authorizations work on the SAP BTP, Cloud Foundry environment.\nIn our tutorials and documentation, we recommend using ",Object(i.b)("inlineCode",{parentName:"p"},"approuter")," as a proxy service to handle authentication management to your implemented application.\nThe following steps will show what happens behind the scenes.\nThe requests can be manually reproduced by a REST client of your choice, e.g. Postman or Insomnia."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"XSUAA service is developed independently of SAP Cloud SDK")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The following documentation only touches a subset of features of the XSUAA Service on Cloud Foundry.\nThe SAP Cloud SDK and XSUAA are developed independently.\nWe do not provide in-depth support on XSUAA topics beyond SAP Cloud SDK use cases.\nMind, if some information seems outdated - get in touch with us and refer to ",Object(i.b)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/"},"official XSUAA docs"),"."))),Object(i.b)("h2",{id:"sap-btp-cloud-foundry-environment-xsuaa-key-use-cases"},"SAP BTP, Cloud Foundry Environment XSUAA Key Use-Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User Login: ",Object(i.b)("inlineCode",{parentName:"li"},"Authorization Code Grant")),Object(i.b)("li",{parentName:"ul"},"SAP BTP Service Usage on behalf of a User: ",Object(i.b)("inlineCode",{parentName:"li"},"JWT Bearer Token Grant")),Object(i.b)("li",{parentName:"ul"},"SAP BTP Service Usage on behalf of a service: ",Object(i.b)("inlineCode",{parentName:"li"},"Client Credentials Grant")),Object(i.b)("li",{parentName:"ul"},"Resolve User Access Token: ",Object(i.b)("inlineCode",{parentName:"li"},"Refresh Token Grant"))),Object(i.b)("h3",{id:"read-the-application-properties"},"Read the Application Properties"),Object(i.b)("p",null,"To create a request, we need to parse the XSUAA connection data."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Take note of your "',Object(i.b)("em",{parentName:"p"},"application route"),"\". That's the URL for which an authorization request will be built.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("strong",{parentName:"p"},"system-provided")," environment variables of your application on Cloud Foundry.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Extract values ",Object(i.b)("inlineCode",{parentName:"p"},"_url_"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_clientid_"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_clientsecret_")," from the JSON value, located in the object ",Object(i.b)("inlineCode",{parentName:"p"},"VCAP_SERVICES.xsuaa[0].credentials"),"."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Depending on your setup, the ",Object(i.b)("inlineCode",{parentName:"p"},"xsuaa")," array may have more than one entry.\nBecause your application can be bound to multiple instances, e.g. through different service plans."))),Object(i.b)("h2",{id:"authorization-code-grant"},"Authorization Code Grant"),Object(i.b)("p",null,"Since we start without an existing access token, our journey begins with the browser flow of ",Object(i.b)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#authorization-code-grant"},"Authorization Code Grant"),"."),Object(i.b)("p",null,"This flow is split into two steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get authorization code on behalf of a single-sign-on login form."),Object(i.b)("li",{parentName:"ul"},"Get personal access token from authorization code.")),Object(i.b)("h3",{id:"get-authorization-code"},"Get Authorization Code"),Object(i.b)("p",null,"You will likely need to run the following HTTP request in your browser and check the HTTP response."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make the following request:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"GET https://[xsuaa.url]/oauth/authorize\n\nQuery parameters:\n\nclient_id=[xsuaa.clientid]\nredirect_uri=[application.route]\nresponse_type=code\n")),Object(i.b)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},'Optional values can be set for "scope" and "login_hint".\nUse ',Object(i.b)("inlineCode",{parentName:"p"},"scope=uaa.user"),' here when facing unexpected "Unauthorized" response for the resulting ',Object(i.b)("inlineCode",{parentName:"p"},"[code]")," in the next request.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Submit login form via a browser or REST API debugging tools like POSTMAN or Insomnia.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the HTTP response and extract ",Object(i.b)("inlineCode",{parentName:"p"},"[code]")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"Location")," header."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"HTTP/1.1 302 Found\nStrict-Transport-Security: max-age=31536000\nSet-Cookie: X-Uaa-Csrf=[...]; Path=/; Max-Age=86400; Expires=[...]; HttpOnly\nCache-Control: no-store\nContent-Language: en\nLocation: [application.route]?code=[code]\nX-XSS-Protection: 1; mode=block\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\n")))),Object(i.b)("h3",{id:"get-oauth2-access-token"},"Get OAuth2 Access Token"),Object(i.b)("p",null,"With the authorization code we can now request a real access token from the OAuth2 service endpoint:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make the following request:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nredirect_uri=[application.route]\ncode=[code]\ngrant_type=authorization_code\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the response:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),Object(i.b)("p",{parentName:"li"},"Congratulation, now you've fetched a valid ",Object(i.b)("inlineCode",{parentName:"p"},"access_token"),".\nIt can be further evaluated and forwarded."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Some applications like ",Object(i.b)("inlineCode",{parentName:"p"},"_approuter_")," will save the ",Object(i.b)("inlineCode",{parentName:"p"},"refresh_token")," to the user session for you.\nThis enables the automatic retrieval of new access tokens after the existing one has expired during the active session."))),Object(i.b)("h2",{id:"json-web-token-bearer-token-grant"},"JSON Web Token Bearer Token Grant"),Object(i.b)("p",null,"Several services on the SAP BTP, require a dedicated OAuth2 access token, e.g. ",Object(i.b)("em",{parentName:"p"},"Connectivity Service")," and ",Object(i.b)("em",{parentName:"p"},"Destination Service"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("strong",{parentName:"p"},"system-provided")," environment variables of your application.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the JSON value, locate the object ",Object(i.b)("inlineCode",{parentName:"p"},"VCAP_SERVICES.destination[0].credentials"),". Make note of ",Object(i.b)("inlineCode",{parentName:"p"},"clientid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"clientsecret"),", ",Object(i.b)("inlineCode",{parentName:"p"},"uri"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make the following request:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\nassertion=[access_token]\ngrant_type=urn:ietf:params:oauth:grant-type:jwt-bearer\nresponse_type=token\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the response:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),Object(i.b)("p",{parentName:"li"},"Congratulation, you have a valid ",Object(i.b)("inlineCode",{parentName:"p"},"destination_access_token"),".\nIt can be used to query the ",Object(i.b)("inlineCode",{parentName:"p"},"destination.uri")," linked destination service on behalf of the current user."))),Object(i.b)("h2",{id:"client-credentials-grant"},"Client Credentials Grant"),Object(i.b)("p",null,"Some applications require access to a platform service without an active user session, with ",Object(i.b)("em",{parentName:"p"},"technical user")," credentials.\nFor example, reading a list of destinations does not require a user access token.\nInstead, we can request an access token on behalf of the service binding itself.\nHere we use the ",Object(i.b)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#without-authorization"},"Client Credentials Grant"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make a request:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[destination.clientid]\nclient_secret=[destination.clientsecret]\ngrant_type=client_credentials\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the response:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'{\n  "access_token": [destination_access_token],\n  "token_type": "bearer",\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),Object(i.b)("p",{parentName:"li"},"Congratulation, you have a valid ",Object(i.b)("inlineCode",{parentName:"p"},"destination_access_token"),".\nIt can be used to query the ",Object(i.b)("inlineCode",{parentName:"p"},"destination.uri")," linked destination service on behalf of the service binding."))),Object(i.b)("h2",{id:"refresh-token-grant"},"Refresh Token Grant"),Object(i.b)("p",null,"If the current access token is expired, a new one can be requested with the ",Object(i.b)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/api/uaa/version/74.23.0/index.html#refresh-token"},"Refresh Token flow"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make a request:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"POST https://[xsuaa.url]/oauth/token\n\nHeaders\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=[xsuaa.clientid]\nclient_secret=[xsuaa.clientsecret]\nrefresh_token=[refresh_token]\ngrant_type=refresh_token\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the response:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'{\n  "access_token": [access_token],\n  "token_type": "bearer",\n  "id_token": [...],\n  "refresh_token": [refresh_token],\n  "expires_in": [...],\n  "scope": [...],\n  "jti": [...]\n}\n')),Object(i.b)("p",{parentName:"li"},"Congratulation, you now have a refreshed ",Object(i.b)("inlineCode",{parentName:"p"},"access_token"),"."))))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);