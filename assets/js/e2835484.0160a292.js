"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const s={title:"Known Issues",weight:70},i=void 0,o={unversionedId:"known-issues/known-issues",id:"known-issues/known-issues",title:"Known Issues",description:"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release.",source:"@site/docs/known-issues/known-issues.md",sourceDirName:"known-issues",slug:"/known-issues/",permalink:"/known-issues/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/known-issues/known-issues.md",tags:[],version:"current",lastUpdatedAt:1688412359,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{title:"Known Issues",weight:70},sidebar:"mySidebar",previous:{title:"Resource Profiling",permalink:"/reference/resource-profiling"},next:{title:"Security",permalink:"/security/"}},l={},u=[{value:"Snap Docker",id:"snap-docker",level:3},{value:"Iptables",id:"iptables",level:3},{value:"Rootless Mode",id:"rootless-mode",level:3},{value:"Upgrading Hardened Clusters from v1.24.x to v1.25.x",id:"hardened-125",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release."),(0,a.kt)("h3",{id:"snap-docker"},"Snap Docker"),(0,a.kt)("p",null,"If you plan to use K3s with docker, Docker installed via a snap package is not recommended as it has been known to cause issues running K3s."),(0,a.kt)("h3",{id:"iptables"},"Iptables"),(0,a.kt)("p",null,"If you are running iptables in nftables mode instead of legacy you might encounter issues. We recommend utilizing newer iptables (such as 1.6.1+) to avoid issues. "),(0,a.kt)("p",null,"Additionally, versions 1.8.0-1.8.4 have known issues that can cause K3s to fail. See ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#old-iptables-versions"},"Additional OS Preparations")," for workarounds. "),(0,a.kt)("h3",{id:"rootless-mode"},"Rootless Mode"),(0,a.kt)("p",null,"Running K3s with Rootless mode is experimental and has several ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#known-issues-with-rootless-mode"},"known issues.")),(0,a.kt)("h3",{id:"hardened-125"},"Upgrading Hardened Clusters from v1.24.x to v1.25.x"),(0,a.kt)("p",null,"Kubernetes removed PodSecurityPolicy from v1.25 in favor of Pod Security Standards. You can read more about PSS in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"upstream documentation"),". For K3S, there are some manual steps that must be taken if any ",(0,a.kt)("inlineCode",{parentName:"p"},"PodSecurityPoliciy")," has been configured on the nodes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On all nodes, update the ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver-arg")," value to remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"PodSecurityPolicy")," admission-plugin. Add the following arg value instead: ",(0,a.kt)("inlineCode",{parentName:"li"},"'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'"),", but do NOT restart or upgrade K3S yet. Below is an example of what a configuration file might look like after this update for the node to be hardened:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"protect-kernel-defaults: true\nsecrets-encryption: true\nkube-apiserver-arg:\n  - 'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\n  - 'request-timeout=300s'\n  - 'service-account-lookup=true'\nkube-controller-manager-arg:\n  - 'terminated-pod-gc-threshold=10'\n  - 'use-service-account-credentials=true'\nkubelet-arg:\n  - 'streaming-connection-idle-timeout=5m'\n  - 'make-iptables-util-chains=true'\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/psa.yaml")," file with the following contents. You may want to exempt more namespaces as well. The below example exempts ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," (required), ",(0,a.kt)("inlineCode",{parentName:"li"},"cis-operator-system")," (optional, but useful for when running security scans through Rancher), and ",(0,a.kt)("inlineCode",{parentName:"li"},"system-upgrade")," (required if doing ",(0,a.kt)("a",{parentName:"li",href:"/upgrades/automated"},"Automated Upgrades"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, system-upgrade]\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Perform the upgrade as normal. If doing ",(0,a.kt)("a",{parentName:"li",href:"/upgrades/automated"},"Automated Upgrades"),", ensure that the namespace where the ",(0,a.kt)("inlineCode",{parentName:"li"},"system-upgrade-controller")," pod is running in is setup to be privileged in accordance with the ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels"},"Pod Security levels"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # This value must be privileged for the controller to run successfully.\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # We are setting these to our _desired_ `enforce` level, but note that these below values can be any of the available options.\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After the upgrade is complete, remove any remaining PSP resources from the cluster. In many cases, there may be PodSecurityPolicies and associated RBAC resources in custom files used for hardening within ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/manifests/"),". Remove those resources and k3s will update automatically. Sometimes, due to timing, some of these may be left in the cluster, in which case you will need to delete them manually. If the ",(0,a.kt)("a",{parentName:"li",href:"/security/hardening-guide"},"Hardening Guide")," was previously followed, you should be able to delete them via the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Get the resources associated with PSPs\n$ kubectl get roles,clusterroles,rolebindings,clusterrolebindings -A | grep -i psp\n\n# Delete those resources:\n$ kubectl delete clusterrole.rbac.authorization.k8s.io/psp:restricted-psp clusterrole.rbac.authorization.k8s.io/psp:svclb-psp clusterrole.rbac.authorization.k8s.io/psp:system-unrestricted-psp clusterrolebinding.rbac.authorization.k8s.io/default:restricted-psp clusterrolebinding.rbac.authorization.k8s.io/system-unrestricted-node-psp-rolebinding && kubectl delete -n kube-system rolebinding.rbac.authorization.k8s.io/svclb-psp-rolebinding rolebinding.rbac.authorization.k8s.io/system-unrestricted-svc-acct-psp-rolebinding\n")))}c.isMDXComponent=!0}}]);