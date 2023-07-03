"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||s;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(3117),a=r(7294),s=r(6010),l=r(2466),i=r(6775),o=r(1980),p=r(7392),c=r(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,p]=d({queryString:r,groupId:n}),[u,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),h=(()=>{const e=o??u;return k({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,s]),tabValues:s}}var h=r(2389);const N="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:i,selectValue:o,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=p[r].value;n!==i&&(u(t),o(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},p.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:m},l,{className:(0,s.Z)("tabs__item",f,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",N)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function S(e){const t=(0,h.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},1588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(3117),a=(r(7294),r(3905)),s=r(4866),l=r(5162);const i={title:"secrets-encrypt"},o="k3s secrets-encrypt",p={unversionedId:"cli/secrets-encrypt",id:"cli/secrets-encrypt",title:"secrets-encrypt",description:"K3s supports enabling secrets encryption at rest. For more information, see Secrets Encryption.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/secrets-encrypt.md",sourceDirName:"cli",slug:"/cli/secrets-encrypt",permalink:"/kr/cli/secrets-encrypt",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/secrets-encrypt.md",tags:[],version:"current",lastUpdatedAt:1688412359,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{title:"secrets-encrypt"},sidebar:"mySidebar",previous:{title:"etcd-snapshot",permalink:"/kr/cli/etcd-snapshot"},next:{title:"token",permalink:"/kr/cli/token"}},c={},u=[{value:"Secrets Encryption Tool",id:"secrets-encryption-tool",level:2},{value:"Encryption Key Rotation",id:"encryption-key-rotation",level:3},{value:"Secrets Encryption Disable/Enable",id:"secrets-encryption-disableenable",level:3},{value:"Secrets Encryption Status",id:"secrets-encryption-status",level:3}],m={toc:u};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k3s-secrets-encrypt"},"k3s secrets-encrypt"),(0,a.kt)("p",null,"K3s supports enabling secrets encryption at rest. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/kr/security/secrets-encryption"},"Secrets Encryption"),"."),(0,a.kt)("h2",{id:"secrets-encryption-tool"},"Secrets Encryption Tool"),(0,a.kt)("admonition",{title:"Version Gate",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Available as of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1"},"v1.21.8+k3s1"))),(0,a.kt)("p",null,"K3s contains a CLI tool ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),", which enables automatic control over the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Disabling/Enabling secrets encryption"),(0,a.kt)("li",{parentName:"ul"},"Adding new encryption keys"),(0,a.kt)("li",{parentName:"ul"},"Rotating and deleting encryption keys"),(0,a.kt)("li",{parentName:"ul"},"Reencrypting secrets")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Failure to follow proper procedure for rotating encryption keys can leave your cluster permanently corrupted. Proceed with caution.")),(0,a.kt)("h3",{id:"encryption-key-rotation"},"Encryption Key Rotation"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single-Server",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"To rotate secrets encryption keys on a single-server cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start the K3s server with the flag ",(0,a.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Starting K3s without encryption and enabling it at a later time is currently ",(0,a.kt)("em",{parentName:"p"},"not")," supported.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rotate"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt"),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"K3s will reencrypt ~5 secrets per second.",(0,a.kt)("br",{parentName:"p"}),"\n","Clusters with large # of secrets can take several minutes to reencrypt.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))))),(0,a.kt)(l.Z,{value:"High-Availability",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The steps are the same for both embedded DB and external DB clusters."),(0,a.kt)("p",null,"To rotate secrets encryption keys on HA setups:"),(0,a.kt)("admonition",{title:"Notes",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Starting K3s without encryption and enabling it at a later time is currently ",(0,a.kt)("em",{parentName:"li"},"not")," supported."),(0,a.kt)("li",{parentName:"ul"},"While not required, it is recommended that you pick one server node from which to run the ",(0,a.kt)("inlineCode",{parentName:"li"},"secrets-encrypt")," commands."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start up all three K3s servers with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flag. For brevity, the servers will be referred to as S1, S2, S3.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rotate on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt on S1"),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"K3s will reencrypt ~5 secrets per second.",(0,a.kt)("br",{parentName:"p"}),"\n","Clusters with large # of secrets can take several minutes to reencrypt.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3"))))),(0,a.kt)("h3",{id:"secrets-encryption-disableenable"},"Secrets Encryption Disable/Enable"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single-Server",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"After launching a server with ",(0,a.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flag, secrets encryption can be disabled."),(0,a.kt)("p",null,"To disable secrets encryption on a single-node cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Disable"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,a.kt)("p",null,"To re-enable secrets encryption on a single node cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n"))))),(0,a.kt)(l.Z,{value:"High-Availability",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"After launching a HA cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flags, secrets encryption can be disabled."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While not required, it is recommended that you pick one server node from which to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," commands.")),(0,a.kt)("p",null,"For brevity, the three servers used in this guide will be referred to as S1, S2, S3."),(0,a.kt)("p",null,"To disable secrets encryption on a HA cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Disable on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,a.kt)("p",null,"To re-enable secrets encryption on a HA cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))))),(0,a.kt)("h3",{id:"secrets-encryption-status"},"Secrets Encryption Status"),(0,a.kt)("p",null,"The secrets-encrypt tool includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," command that displays information about the current status of secrets encryption on the node."),(0,a.kt)("p",null,"An example of the command on a single-server node:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"Another example on HA cluster, after rotating the keys, but before restarting the servers:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"Details on each section are as follows:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Encryption Status"),": Displayed whether secrets encryption is disabled or enabled on the node  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Current Rotation Stage"),": Indicates the current rotation stage on the node.",(0,a.kt)("br",{parentName:"li"}),"Stages are: ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"prepare"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"rotate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_finished"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),": Useful for HA clusters, this indicates whether all servers are on the same stage with their local files. This can be used to identify whether a restart of servers is required before proceeding to the next stage. In the HA example above, node-1 and node-2 have different hashes, indicating that they currently do not have the same encryption configuration. Restarting the servers will sync up their configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Key Table"),": Summarizes information about the secrets encryption keys found on the node.  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Active"),': The "*" indicates which, if any, of the keys are currently used for secrets encryption. An active key is used by Kubernetes to encrypt any new secrets.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Key Type"),": All keys using this tool are ",(0,a.kt)("inlineCode",{parentName:"li"},"AES-CBC")," type. See more info ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": Name of the encryption key.")))))}k.isMDXComponent=!0}}]);