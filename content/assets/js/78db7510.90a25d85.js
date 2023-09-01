"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,g=s["".concat(p,".").concat(m)]||s[m]||f[m]||r;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"functions-package-go",title:"Package Go Functions",sidebar_label:"Package Go Functions",description:"Learn to package Go functions in Pulsar."},i=void 0,c={unversionedId:"functions-package-go",id:"functions-package-go",title:"Package Go Functions",description:"Learn to package Go functions in Pulsar.",source:"@site/docs/functions-package-go.md",sourceDirName:".",slug:"/functions-package-go",permalink:"/docs/next/functions-package-go",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-package-go.md",tags:[],version:"current",frontMatter:{id:"functions-package-go",title:"Package Go Functions",sidebar_label:"Package Go Functions",description:"Learn to package Go functions in Pulsar."},sidebar:"docsSidebar",previous:{title:"Package Python Functions",permalink:"/docs/next/functions-package-python"},next:{title:"CLI and YAML configs",permalink:"/docs/next/functions-cli"}},p={},u=[],l={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, Go functions can be implemented only using SDK and the interface of functions is exposed in the form of SDK. Before using Go functions, you need to import ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/apache/pulsar/pulsar-function-go/pf"),".")),(0,o.kt)("p",null,"To package a Go function, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare a Go function file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the Go function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"}," go build <your Go function filename>.go\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the Go function file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," docker exec -it [CONTAINER ID] /bin/bash\n docker cp <your go function path>  CONTAINER ID:/pulsar\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Go function with the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," bin/pulsar-admin functions localrun \\\n     --go [your go function path]\n     --inputs [input topics] \\\n     --output [output topic] \\\n     --tenant [default:public] \\\n     --namespace [default:default] \\\n     --name [custom unique go function name]\n")),(0,o.kt)("p",{parentName:"li"},"The following log indicates that the Go function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))))}f.isMDXComponent=!0}}]);