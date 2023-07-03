"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=p(n),g=l,N=m["".concat(o,".").concat(g)]||m[g]||k[g]||r;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const r={title:"agent",weight:2},i="k3s agent",d={unversionedId:"cli/agent",id:"cli/agent",title:"agent",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/agent.md",sourceDirName:"cli",slug:"/cli/agent",permalink:"/zh/cli/agent",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/agent.md",tags:[],version:"current",lastUpdatedAt:1688412359,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{title:"agent",weight:2},sidebar:"mySidebar",previous:{title:"server",permalink:"/zh/cli/server"},next:{title:"certificate",permalink:"/zh/cli/certificate"}},o={},p=[{value:"Logging",id:"logging",level:3},{value:"\u96c6\u7fa4\u9009\u9879",id:"\u96c6\u7fa4\u9009\u9879",level:3},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u8282\u70b9",id:"\u8282\u70b9",level:3},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u81ea\u5b9a\u4e49\u6807\u5fd7",id:"\u81ea\u5b9a\u4e49\u6807\u5fd7",level:3},{value:"\u5b9e\u9a8c\u529f\u80fd",id:"\u5b9e\u9a8c\u529f\u80fd",level:3},{value:"\u5df2\u5f03\u7528",id:"\u5df2\u5f03\u7528",level:3},{value:"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",id:"agent-\u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",level:3},{value:"K3s Agent CLI \u5e2e\u52a9",id:"k3s-agent-cli-\u5e2e\u52a9",level:3}],u={toc:p};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k3s-agent"},"k3s agent"),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cServer \u4e5f\u8fd0\u884c Agent\uff0c\u56e0\u6b64\u672c\u6587\u5217\u51fa\u7684\u6240\u6709\u6807\u5fd7\u4e5f\u53ef\u7528\u4e8e Server\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u9009\u9879\u4f5c\u4e3a CLI \u6807\u5fd7\u4f20\u9012\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u9009\u9879\u4f20\u9012\u3002\u6709\u5173\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u914d\u7f6e\u6587\u4ef6"),"\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"logging"},"Logging"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-v")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u65e5\u5fd7\u7ea7\u522b\u8be6\u7ec6\u7a0b\u5ea6\u7684\u6570\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--vmodule")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"FILE_PATTERN=LOG_LEVEL \u683c\u5f0f\uff0c\u7528\u9017\u53f7\u5206\u9694\u7684\u5217\u8868\uff0c\u7528\u4e8e\u6587\u4ef6\u8fc7\u6ee4\u65e5\u5fd7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--log value, -l")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5230\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--alsologtostderr")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5230\u6807\u51c6\u9519\u8bef\u4ee5\u53ca\u6587\u4ef6\uff08\u5982\u679c\u8bbe\u7f6e\uff09")))),(0,l.kt)("h3",{id:"\u96c6\u7fa4\u9009\u9879"},"\u96c6\u7fa4\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token value, -t")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token-file")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_TOKEN_FILE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--server value, -s")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_URL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u7684 server")))),(0,l.kt)("h3",{id:"\u6570\u636e"},"\u6570\u636e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data-dir value, -d")," value"),(0,l.kt)("td",{parentName:"tr",align:null},'"/var/lib/rancher/k3s"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u72b6\u6001\u7684\u6587\u4ef6\u5939")))),(0,l.kt)("h3",{id:"\u8282\u70b9"},"\u8282\u70b9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-name")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_NODE_NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--with-node-id")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06 ID \u5c3e\u9644\u5230\u8282\u70b9\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-label")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e00\u7ec4\u6807\u7b7e\u6ce8\u518c\u548c\u542f\u52a8 kubelet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-taint")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e00\u7ec4\u6c61\u70b9\u6ce8\u518c kubelet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--protect-kernel-defaults")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u6838\u8c03\u4f18\u884c\u4e3a\u3002\u5982\u679c\u8bbe\u7f6e\u4e86\uff0c\u5f53\u5185\u6838\u53ef\u8c03\u9879\u4e0e kubelet \u9ed8\u8ba4\u503c\u4e0d\u540c\u65f6\u4f1a\u51fa\u9519\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--selinux")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_SELINUX")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 containerd \u4e2d\u542f\u7528 SELinux")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lb-server-port")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_LB_SERVER_PORT")),(0,l.kt)("td",{parentName:"tr",align:null},"Supervisor \u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u672c\u5730\u7aef\u53e3\u3002\u5982\u679c supervisor \u548c apiserver \u6ca1\u6709\u4f4d\u4e8e\u540c\u4e00\u4f4d\u7f6e\uff0c\u5219\u6bd4\u8be5\u7aef\u53e3\u5c0f 1 \u7684\u7aef\u53e3\u4e5f\u5c06\u7528\u4e8e apiserver \u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u9ed8\u8ba4\u503c\uff1a6444\uff09")))),(0,l.kt)("h3",{id:"\u8fd0\u884c\u65f6"},"\u8fd0\u884c\u65f6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--container-runtime-endpoint")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u5d4c\u5165\u5f0f containerd \u5e76\u5728\u7ed9\u5b9a\u8def\u5f84\u4f7f\u7528 CRI \u5957\u63a5\u5b57\u3002\u5f53\u4e0e --docker \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u8fd9\u4f1a\u8bbe\u7f6e cri-docker \u5957\u63a5\u5b57\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pause-image")," value"),(0,l.kt)("td",{parentName:"tr",align:null},'"docker.io/rancher/pause:3.1"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a containerd \u6216 Docker \u6c99\u7bb1\u5b9a\u5236\u7684 pause \u955c\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--private-registry")," value"),(0,l.kt)("td",{parentName:"tr",align:null},'"/etc/rancher/k3s/registries.yaml"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6")))),(0,l.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-ip value, -i")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7684 IP \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--node-external-ip")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7684\u5916\u90e8 IP \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--resolv-conf")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_RESOLV_CONF")),(0,l.kt)("td",{parentName:"tr",align:null},"Kubelet resolv.conf \u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-iface")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-conf")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel \u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-cni-conf")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel CNI \u914d\u7f6e\u6587\u4ef6")))),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6807\u5fd7"},"\u81ea\u5b9a\u4e49\u6807\u5fd7"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kubelet-arg")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"kubelet \u8fdb\u7a0b\u7684\u81ea\u5b9a\u4e49\u6807\u5fd7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kube-proxy-arg")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"kube-proxy \u8fdb\u7a0b\u7684\u81ea\u5b9a\u4e49\u6807\u5fd7")))),(0,l.kt)("h3",{id:"\u5b9e\u9a8c\u529f\u80fd"},"\u5b9e\u9a8c\u529f\u80fd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--rootless")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6839\u8fd0\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--docker")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 cri-dockerd \u800c\u4e0d\u662f containerd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--prefer-bundled-bin")),(0,l.kt)("td",{parentName:"tr",align:null},"\u504f\u5411\u6253\u5305\u7684\u7528\u6237\u7a7a\u95f4\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4e3b\u673a\u4e8c\u8fdb\u5236\u6587\u4ef6")))),(0,l.kt)("h3",{id:"\u5df2\u5f03\u7528"},"\u5df2\u5f03\u7528"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-flannel")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cluster-secret")," value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_CLUSTER_SECRET")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"--token"))))),(0,l.kt)("h3",{id:"agent-\u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"},"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"),(0,l.kt)("p",null,"K3s Agent \u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--node-label")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--node-taint")," \u9009\u9879\u6765\u914d\u7f6e\uff0c\u5b83\u4eec\u4f1a\u4e3a kubelet \u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u3002\u8fd9\u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u5728\u6ce8\u518c\u65f6\u6dfb\u52a0\u6807\u7b7e\u548c/\u6216\u6c61\u70b9\uff0c\u56e0\u6b64\u5b83\u4eec\u53ea\u80fd\u88ab\u6dfb\u52a0\u4e00\u6b21\uff0c\u4e4b\u540e\u4e0d\u80fd\u518d\u901a\u8fc7\u8fd0\u884c K3s \u547d\u4ee4\u6765\u6539\u53d8\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u663e\u793a\u5982\u4f55\u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"     --node-label foo=bar \\\n     --node-label hello=world \\\n     --node-taint key1=value1:NoExecute\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u8282\u70b9\u6ce8\u518c\u540e\u66f4\u6539\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002\u5173\u4e8e\u5982\u4f55\u6dfb\u52a0",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"\u6c61\u70b9"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node"},"\u8282\u70b9\u6807\u7b7e"),"\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Kubernetes \u6587\u6863\u3002"),(0,l.kt)("h3",{id:"k3s-agent-cli-\u5e2e\u52a9"},"K3s Agent CLI \u5e2e\u52a9"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u67d0\u4e2a\u9009\u9879\u51fa\u73b0\u5728\u62ec\u53f7\u4e2d\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"[$K3S_URL]"),"\uff09\uff0c\u8be5\u9009\u9879\u53ef\u4ee5\u4f5c\u4e3a\u8be5\u540d\u79f0\u7684\u73af\u5883\u53d8\u91cf\u4f20\u5165\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'NAME:\n   k3s agent - Run node agent\n\nUSAGE:\n   k3s agent [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                     (config) Load configuration from FILE (default: "/etc/rancher/k3s/config.yaml") [$K3S_CONFIG_FILE]\n   --debug                                    (logging) Turn on debug logs [$K3S_DEBUG]\n   -v value                                   (logging) Number for the log level verbosity (default: 0)\n   --vmodule value                            (logging) Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging\n   --log value, -l value                      (logging) Log to file\n   --alsologtostderr                          (logging) Log to standard error as well as file (if set)\n   --token value, -t value                    (cluster) Token to use for authentication [$K3S_TOKEN]\n   --token-file value                         (cluster) Token file to use for authentication [$K3S_TOKEN_FILE]\n   --server value, -s value                   (cluster) Server to connect to [$K3S_URL]\n   --data-dir value, -d value                 (agent/data) Folder to hold state (default: "/var/lib/rancher/k3s")\n   --node-name value                          (agent/node) Node name [$K3S_NODE_NAME]\n   --with-node-id                             (agent/node) Append id to node name\n   --node-label value                         (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                         (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value  (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value   (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --selinux                                  (agent/node) Enable SELinux in containerd [$K3S_SELINUX]\n   --lb-server-port value                     (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer.(default: 6444) [$K3S_LB_SERVER_PORT]\n   --protect-kernel-defaults                  (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --container-runtime-endpoint value         (agent/runtime) Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the docker socket path\n   --pause-image value                        (agent/runtime) Customized pause image for containerd or docker sandbox (default: "rancher/mirrored-pause:3.6")\n   --snapshotter value                        (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                   (agent/runtime) Private registry configuration file (default: "/etc/rancher/k3s/registries.yaml")\n   --node-ip value, -i value                  (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                   (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                        (agent/networking) Kubelet resolv.conf file [$K3S_RESOLV_CONF]\n   --flannel-iface value                      (agent/networking) Override default flannel interface\n   --flannel-conf value                       (agent/networking) Override default flannel config file\n   --flannel-cni-conf value                   (agent/networking) Override default flannel cni config file\n   --kubelet-arg value                        (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                     (agent/flags) Customized flag for kube-proxy process\n   --rootless                                 (experimental) Run rootless\n   --prefer-bundled-bin                       (experimental) Prefer bundled userspace binaries over host binaries\n   --docker                                   (agent/runtime) (experimental) Use cri-dockerd instead of containerd\n')))}k.isMDXComponent=!0}}]);