"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4,title:"Integration with slack"},o=void 0,l={unversionedId:"guides/integration-with-slack",id:"guides/integration-with-slack",title:"Integration with slack",description:"If you have defined Thresholds and want to send slack messages in Notificatioms, here is a simple guide.",source:"@site/docs/guides/integration-with-slack.md",sourceDirName:"guides",slug:"/guides/integration-with-slack",permalink:"/docs/guides/integration-with-slack",draft:!1,editUrl:"https://github.com/emitbase/emitbase-website/tree/main/docs/guides/integration-with-slack.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Integration with slack"},sidebar:"tutorialSidebar",previous:{title:"Integration with email",permalink:"/docs/guides/integration-with-email"},next:{title:"Deployment",permalink:"/docs/category/deployment"}},s={},c=[{value:"Create Slack App",id:"create-slack-app",level:2},{value:"Configure permissions",id:"configure-permissions",level:2},{value:"Install Slack App to your workspace",id:"install-slack-app-to-your-workspace",level:2},{value:"Add credentials to profiles",id:"add-credentials-to-profiles",level:2},{value:"Add Slack App to your channel",id:"add-slack-app-to-your-channel",level:2},{value:"Run Emitbase \ud83d\ude80",id:"run-emitbase-",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you have defined ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/thresholds"},"Thresholds")," and want to send slack messages in ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/notifications"},"Notificatioms"),", here is a simple guide."),(0,r.kt)("h2",{id:"create-slack-app"},"Create Slack App"),(0,r.kt)("p",null,"For sending messages to Slack, you must create a Slack App:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Slack Apps."),(0,r.kt)("li",{parentName:"ol"},"Click 'Create an App' and select the 'From scratch' option."),(0,r.kt)("li",{parentName:"ol"},"Enter your App Name (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"my-first-emitbase-project"),")."),(0,r.kt)("li",{parentName:"ol"},"Select your workspace."),(0,r.kt)("li",{parentName:"ol"},"Click 'Create App'.")),(0,r.kt)("h2",{id:"configure-permissions"},"Configure permissions"),(0,r.kt)("p",null,"You need to configure the proper permissions to send Slack messages from Emitbase:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open OAuth & Permissions (you can find it in the left menu)."),(0,r.kt)("li",{parentName:"ol"},"Scroll down to Bot Token Scopes."),(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"chat:write")," scope.")),(0,r.kt)("h2",{id:"install-slack-app-to-your-workspace"},"Install Slack App to your workspace"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Basic Information in the left menu."),(0,r.kt)("li",{parentName:"ol"},"Click on Install to Workspace in the Building Apps for Slack section.")),(0,r.kt)("h2",{id:"add-credentials-to-profiles"},"Add credentials to profiles"),(0,r.kt)("p",null,"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles.yml"),", and add correct credentials:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  notifications:\n    dev:\n      slack:\n        port: 3000\n        channel: <your-slack-channel>\n        signingSecret: <your-signing-secret>\n        token: <your-token>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel"),": To find the Channel ID, click on your channel, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"#general"),", and a modal window will open. You can locate the Channel ID at the bottom."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signingSecret"),": You can find the signingSecret in the Basic Information menu under the App Credentials section."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token"),": You can find the token in the OAuth & Permissions menu under the OAuth Tokens for Your Workspace section.")),(0,r.kt)("p",null,"The entire ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles.yml")," file will look like this (with your credentials):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"emitbase:\n  databases:\n    dev:\n      host: <database-host>\n      database: <database-name>\n      port: <database-port>\n      user: <database-username>\n      password: <database-password>\n\n  notifications:\n    dev:\n      slack:\n        port: 3000\n        channel: <your-slack-channel>\n        signingSecret: <your-signing-secret>\n        token: <your-token>\n\n  target: dev\n\n")),(0,r.kt)("h2",{id:"add-slack-app-to-your-channel"},"Add Slack App to your channel"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on your channel, for example, `#general``, to open the modal window."),(0,r.kt)("li",{parentName:"ol"},"Open the Integrations tab."),(0,r.kt)("li",{parentName:"ol"},"Click Add an App."),(0,r.kt)("li",{parentName:"ol"},"Add the Slack App you just created.")),(0,r.kt)("h2",{id:"run-emitbase-"},"Run Emitbase \ud83d\ude80"),(0,r.kt)("p",null,"If you have everything configured, including ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/thresholds"},"Thresholds")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/notifications"},"Notifications"),", you can run Emitbase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker build -t emitbase .\n$ docker run -it emitbase\n")))}u.isMDXComponent=!0}}]);