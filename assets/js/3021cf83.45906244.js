"use strict";(self.webpackChunkeasy_snackbars_docs=self.webpackChunkeasy_snackbars_docs||[]).push([[857],{6942:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=a(4848),r=a(8453),s=a(1470),o=a(9365);const i={sidebar_position:2},l="Getting Started",u={id:"getting-started",title:"Getting Started",description:"I quick guide on how to install and setup easy-snackbars.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/easy-snackbars-docs/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Easy Snackbars?",permalink:"/easy-snackbars-docs/docs/what-is-easy-snackbars"},next:{title:"Try it out!",permalink:"/easy-snackbars-docs/docs/try-it-out"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Wrap your app within easy snackbars provider",id:"wrap-your-app-within-easy-snackbars-provider",level:3},{value:"Hello Easy Snackbars!",id:"hello-easy-snackbars",level:2},{value:"Snackbar modes",id:"snackbar-modes",level:3}];function p(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n","\n",(0,t.jsx)(n.p,{children:"I quick guide on how to install and setup easy-snackbars."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Install the package in your React or React Native project."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"npm",label:"npm",default:!0,children:(0,t.jsx)(n.p,{children:"npm install easy-snackbars"})}),(0,t.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,t.jsx)(n.p,{children:"yarn add easy-snackbars"})})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"wrap-your-app-within-easy-snackbars-provider",children:"Wrap your app within easy snackbars provider"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="App.tsx"',children:'import * as React from "react";\n\nimport { SnackbarsProvider } from "easy-snackbars";\n\nexport default function App() {\n  return <SnackbarsProvider>{Your app here}</SnackbarsProvider>;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"hello-easy-snackbars",children:"Hello Easy Snackbars!"}),"\n",(0,t.jsx)(n.p,{children:"Import useSnackbarsContext and call displaySnackbar in one of the pages of your application.\nIf your config has worked correctly a snackbar should show up!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="Home.tsx"',children:'import React from "react";\nimport { View, Button } from "react-native";\n\nimport { useSnackbarsContext } from "easy-snackbars";\n\nexport default function Home() {\n  const { displaySnack } = useSnackbarsContext();\n\n  return (\n    <View>\n      <Button\n        title="Add info message"\n        onPress={() => {\n          displaySnack({ message: "info message" }, "info");\n        }}\n      />\n    </View>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"snackbar-modes",children:"Snackbar modes"}),"\n",(0,t.jsxs)(n.p,{children:["The second parameter of the displaySnack function defines the snack mode you want to display, the default modes are: ",(0,t.jsx)(n.em,{children:"success, error, info and warning"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>o});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var s=a(4848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(6540),r=a(4164),s=a(3104),o=a(6347),i=a(205),l=a(7485),u=a(1682),c=a(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=b({queryString:a,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=a(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(4848);function g(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),r=i[a].value;r!==t&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function k(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...n}),(0,y.jsx)(k,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);