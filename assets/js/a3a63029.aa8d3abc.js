"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(f,o(o({ref:t},c),{},{components:a})):i.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3,title:"Integration with email"},o=void 0,s={unversionedId:"guides/integration-with-email",id:"guides/integration-with-email",title:"Integration with email",description:"If you have defined Thresholds and want to send email Notificatioms, here is a simple guide. The guide uses Gmail as a service for sending emails via Simple Mail Transfer Protocol (SMTP). The principles described in this guide also apply to other email services.",source:"@site/docs/guides/integration-with-email.md",sourceDirName:"guides",slug:"/guides/integration-with-email",permalink:"/emitbase-website/docs/guides/integration-with-email",draft:!1,editUrl:"https://github.com/emitbase/emitbase-website/tree/main/docs/guides/integration-with-email.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Integration with email"},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/emitbase-website/docs/guides/notifications"},next:{title:"Integration with slack",permalink:"/emitbase-website/docs/guides/integration-with-slack"}},l={},p=[{value:"Get an App Password",id:"get-an-app-password",level:2},{value:"Add credentials to profiles",id:"add-credentials-to-profiles",level:2},{value:"Run Emitbase \ud83d\ude80",id:"run-emitbase-",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you have defined ",(0,n.kt)("a",{parentName:"p",href:"/emitbase-website/docs/guides/thresholds"},"Thresholds")," and want to send email ",(0,n.kt)("a",{parentName:"p",href:"/emitbase-website/docs/guides/notifications"},"Notificatioms"),", here is a simple guide. The guide uses ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/intl/en/gmail/about/"},"Gmail")," as a service for sending emails via Simple Mail Transfer Protocol (SMTP). The principles described in this guide also apply to other email services."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You need to turn on ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/185839"},"2-Step Verification")," to make it work with Gmail.")),(0,n.kt)("h2",{id:"get-an-app-password"},"Get an App Password"),(0,n.kt)("p",null,"If you have enabled 2-Step Verification, you must create an app-specific password for your Emitbae project."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://myaccount.google.com/apppasswords"},"Google App Passwords")," (sign in to your account, if necessary)."),(0,n.kt)("li",{parentName:"ol"},"Enter your app name (i.e. ",(0,n.kt)("inlineCode",{parentName:"li"},"my-first-emitbase-project"),"), then click Generate."),(0,n.kt)("li",{parentName:"ol"},"Copy the app password.")),(0,n.kt)("h2",{id:"add-credentials-to-profiles"},"Add credentials to profiles"),(0,n.kt)("p",null,"Open your ",(0,n.kt)("inlineCode",{parentName:"p"},"profiles.yml"),", and add correct credentials:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  notifications:\n    dev:\n      email:\n        host: smtp.gmail.com\n        port: 587\n        user: <your-email-user>\n        password: <your-app-password-from-previous-step>\n")),(0,n.kt)("p",null,"The entire ",(0,n.kt)("inlineCode",{parentName:"p"},"profiles.yml")," file will look like this (with your credentials):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"emitbase:\n  databases:\n    dev:\n      host: <database-host>\n      database: <database-name>\n      port: <database-port>\n      user: <database-username>\n      password: <database-password>\n\n  notifications:\n    dev:\n      email:\n        host: smtp.gmail.com\n        port: 587\n        user: <your-email-user>\n        password: <your-app-password-from-previous-step>\n\n  target: dev\n\n")),(0,n.kt)("h2",{id:"run-emitbase-"},"Run Emitbase \ud83d\ude80"),(0,n.kt)("p",null,"If you have everything configured, including ",(0,n.kt)("a",{parentName:"p",href:"/emitbase-website/docs/guides/thresholds"},"Thresholds")," and ",(0,n.kt)("a",{parentName:"p",href:"/emitbase-website/docs/guides/notifications"},"Notifications"),", you can run Emitbase:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker build -t emitbase .\n$ docker run -it emitbase\n")))}u.isMDXComponent=!0}}]);