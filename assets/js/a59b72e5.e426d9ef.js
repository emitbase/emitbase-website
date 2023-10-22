"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,title:"Thresholds"},a=void 0,s={unversionedId:"guides/thresholds",id:"guides/thresholds",title:"Thresholds",description:"In the thresholds, you define the logic of alerts using two available methods: SQL and CRON.",source:"@site/docs/guides/thresholds.md",sourceDirName:"guides",slug:"/guides/thresholds",permalink:"/docs/guides/thresholds",draft:!1,editUrl:"https://github.com/emitbase/emitbase-website/tree/main/docs/guides/thresholds.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Thresholds"},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Notifications",permalink:"/docs/guides/notifications"}},l={},c=[{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the thresholds, you define the logic of alerts using two available methods: SQL and CRON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"<id-alert>:\n  expression: '<SQL>'\n  cron: '<CRON>'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Thresholds and ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/notifications"},"Notifications")," are linked with the 'id-alert' identifier. To set up a threshold with the identifier 'first_threshold,' you also need a notification YAML file with the same identifier, 'first_threshold'.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"first_threshold:\n  expression: 'select * from metrics where temp > 30'\n  cron: '*/5 * * * *'\n")))}u.isMDXComponent=!0}}]);