"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[4173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7462),n=a(7294),l=a(6010),i=a(2466),o=a(6550),c=a(1980),s=a(7392),u=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,s]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=c??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var v=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:o,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==o&&(d(t),c(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return n.createElement(E,(0,r.Z)({key:String(t)},e))}},7067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var r=a(7462),n=a(7294),l=a(3905);a(17);const i={linksCard:[{title:"Unlock Data Availability with the Light Client",cardLink:"/operate/node/light-client/",blockInfo:["Optimal Performance","Low Barrier to Entry","Security-Focused Design"],tutorialsInfo:[{title:"Download the Binaries for Linux ARM64",link:"https://github.com/availproject/avail-light/releases/download/v1.7.2/avail-light-apple-arm64.tar.gz"},{title:"Download the Binaries for Linux x86_64",link:"https://github.com/availproject/avail-light/releases/download/v1.7.2/avail-light-linux-aarch64.tar.gz"},{title:"Download the Binaries for Apple ARM64",link:"https://github.com/availproject/avail-light/releases/download/v1.7.2/avail-light-apple-arm64.tar.gz"}]},{title:"Maintain Data Availability as a Validator",cardLink:"/category/become-a-validator/",blockInfo:["Network Security","Governance Participation","Maintainer Rewards"],tutorialsInfo:[{title:"Already Running a Full Node?",link:"/operate/validator/already-running-full-node/"},{title:"Run a Validator Node",link:"/category/run-a-validator-node/"},{title:"Upgrade Your Validator Node",link:"/operate/validator/upgrade/"}]},{title:"Use Avail as a Base Layer to Empower Innovation",cardLink:"/category/api-reference/",blockInfo:["Ecosystem Agnostic Modularity","Robust Sovereign Chain Rollups","Optimized App-Chains"],tutorialsInfo:[{title:"Avail-Powered Validiums",link:"/api/use-case-validiums"},{title:"Avail-Powered Optimiums: Docs Coming Soon"},{title:"Avail-Powered Volitions: Docs Coming Soon"}]}]};a(4866),a(5162);var o=a(4996);const c=e=>{const{iconSrc:t,cardLink:a,title:r,blockInfo:l,tutorialsInfo:i}=e,c=e=>{e.stopPropagation()};return n.createElement("div",{onClick:()=>{window.open(a,"_self").focus()},className:"grey-card flex-row justify-content-center "},n.createElement("div",{className:"tutorial-icon"},n.createElement("img",{src:(0,o.Z)(t),alt:""})),n.createElement("div",{className:"data-info col-md-6"},n.createElement("div",{className:"title-info"},n.createElement("span",{className:"card-title"},r),n.createElement("ul",{className:"list dot-list grey-text"},l.map(((e,t)=>n.createElement("li",{key:t},e)))))),n.createElement("div",{className:"tutorial-links col"},n.createElement("span",{className:"tutorial-title"},"Links"),n.createElement("ul",{className:"list clear-list"},i.map(((e,t)=>{let{title:a,link:r}=e;return n.createElement("li",{key:t},n.createElement("a",{onClick:c,href:r,target:"_self",className:"tutorial-link"},a))})))))};a(4184);const s=function(){return n.createElement("div",{className:"bootstrap-wrapper"},n.createElement("div",{className:"section-divider"}),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"index-page exclude"},n.createElement("section",{className:"section container-fluid"},n.createElement("div",{className:"row justify-content-between"},n.createElement("h1",{className:"landing-page-h1"},n.createElement("a",{href:"https://www.availproject.org/"},"Avail")," ","Documentation Hub"))))),n.createElement("div",{className:"modular-blockchain-container"},n.createElement("p",null,"Avail is a highly robust ",n.createElement("strong",null,"modular base layer")," that is laser-focused on ",n.createElement("strong",null,"data availability"),": ordering, publishing transactions, and making it possible to seamlessly verify the availability of block data.")),n.createElement("div",{className:"justify-content-center tutorial-cards card-container"},i.linksCard.map(((e,t)=>n.createElement(c,(0,r.Z)({key:t},e)))))))},u={id:"index",title:"Home",hide_title:!0,sidebar_label:"Home"},d=void 0,m={unversionedId:"index",id:"index",title:"Home",description:"",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/index.mdx",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1697443636,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"index",title:"Home",hide_title:!0,sidebar_label:"Home"},sidebar:"avail",next:{title:"Quickstart",permalink:"/build/quickstart"}},p={},f=[],b={toc:f},v="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(v,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"Home"}))}h.isMDXComponent=!0}}]);