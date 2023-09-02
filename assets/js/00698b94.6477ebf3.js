"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(4996);const i={id:"avail-monitoring-validator-node",title:"How to Monitor Your Avail Validator Node",sidebar_label:"Monitor Your Validator",sidebar_position:5,description:"Learn about monitoring a validator",keywords:["docs","avail","node","validator","monitoring"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-monitoring-validator-node"},l=void 0,s={unversionedId:"validators/avail-monitoring-validator-node",id:"validators/avail-monitoring-validator-node",title:"How to Monitor Your Avail Validator Node",description:"Learn about monitoring a validator",source:"@site/docs/validators/0040-avail-monitoring-validator.md",sourceDirName:"validators",slug:"/validators/avail-monitoring-validator-node",permalink:"/validators/avail-monitoring-validator-node",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/validators/0040-avail-monitoring-validator.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1693499846,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:5,frontMatter:{id:"avail-monitoring-validator-node",title:"How to Monitor Your Avail Validator Node",sidebar_label:"Monitor Your Validator",sidebar_position:5,description:"Learn about monitoring a validator",keywords:["docs","avail","node","validator","monitoring"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-monitoring-validator-node"},sidebar:"validatorsSidebar",previous:{title:"Upgrade Your Validator",permalink:"/validators/avail-upgrade-validator-node"},next:{title:"How to Chill Your Validator",permalink:"/validators/avail-chilling"}},d={},p=[{value:"Telemetry",id:"telemetry",level:2},{value:"Monitoring with Prometheus &amp; Grafana",id:"monitoring-with-prometheus--grafana",level:2},{value:"Install Prometheus",id:"install-prometheus",level:3},{value:"Install Grafana",id:"install-grafana",level:3},{value:"Setup Grafana Dashboard",id:"setup-grafana-dashboard",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"telemetry"},"Telemetry"),(0,n.kt)("p",null,"Maintaining a healthy, stable, and secure ecosystem involves closely monitoring network operations and performance. In the case of Avail nodes, they come equipped with built-in low-level\ntelemetry components that automatically gather and transmit detailed information about each node's operation within the network. This backend telemetry data is streamed in real-time to a\ndesignated endpoint, allowing you to observe information regarding your nodes behavior."),(0,n.kt)("p",null,"Avail project has made available a ",(0,n.kt)("a",{parentName:"p",href:"http://telemetry.avail.tools/"},"public telemetry")," for anyone to view the status of their nodes. This should not replace your own monitoring and alerts. However it is a key tool that anyone can use to view the status\nof their nodes at anytime."),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-telemetry.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"Avail telemetry has been added to the chain specification file and should automatically send telemetry data to Avail ",(0,n.kt)("a",{parentName:"p",href:"http://telemetry.avail.tools/"},"public telemetry"),". You can however also\nadd the telemetry ",(0,n.kt)("inlineCode",{parentName:"p"},"--telemetry-url 'ws://telemetry.avail.tools:8001/submit/ 0'")," to your avail node start command if your node is not visible on the public telemetry."),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"--name <Validator Node Name>")," to set the name that will display on telemetry. Without this it will display a random node name on the telemetry."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./data-avail --validator \\\n    --port 30333 \\\n    --base-path `pwd`/data \\\n    --chain `pwd`/chainspec.raw.json \\\n    --name AvailNode \\\n    --telemetry-url 'ws://telemetry.avail.tools:8001/submit/ 0' \n")),(0,n.kt)("h2",{id:"monitoring-with-prometheus--grafana"},"Monitoring with Prometheus & Grafana"),(0,n.kt)("p",null,"Prometheus serves as a monitoring platform that gathers metrics from monitored targets through scraping their metrics HTTP endpoints. In contrast, Grafana acts as a visualization dashboard specifically designed to present the collected data in an easily understandable and visually appealing manner."),(0,n.kt)("p",null,"The below guide is for setting up a local Prometheus & Grafana instance on the same server as your Avail node. If you're already experienced with Prometheus & Grafana and want to connect your Avail node to an existing Prometheus installation on a different server, include the ",(0,n.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," flag in your Avail node's startup command."),(0,n.kt)("h3",{id:"install-prometheus"},"Install Prometheus"),(0,n.kt)("p",null,"Install prometheus and prometheus node exporter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt-get install -y prometheus prometheus-node-exporter\n")),(0,n.kt)("p",null,"Create the prometheus.yml config file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'cat > $HOME/prometheus.yml << EOF\nglobal:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "first.rules"\n  # - "second.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "avail_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n  - job_name: node\n    static_configs:\n      - targets: [\'localhost:9100\']\nEOF\n')),(0,n.kt)("p",null,"Move ",(0,n.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," to the correct location"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo mv $HOME/prometheus.yml /etc/prometheus/prometheus.yml\n")),(0,n.kt)("p",null,"Update the file permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo chmod 644 /etc/prometheus/prometheus.yml\n")),(0,n.kt)("p",null,"Ensure Prometheus starts automatically"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl enable prometheus.service prometheus-node-exporter.service\n")),(0,n.kt)("p",null,"Restart Prometheus to activate latest settings"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl restart prometheus.service prometheus-node-exporter.service\n")),(0,n.kt)("p",null,"Check the status, ensure Prometheus has started without errors"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl status prometheus.service prometheus-node-exporter.service\n")),(0,n.kt)("h3",{id:"install-grafana"},"Install Grafana"),(0,n.kt)("p",null,"Install Grafana"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -\necho "deb https://packages.grafana.com/oss/deb stable main" > grafana.list\nsudo mv grafana.list /etc/apt/sources.list.d/grafana.list\nsudo apt-get update && sudo apt-get install -y grafana\n')),(0,n.kt)("p",null,"Ensure Grafana starts automatically"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl enable grafana-server.service \n")),(0,n.kt)("p",null,"Start Grafana"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl start grafana-server.service \n")),(0,n.kt)("p",null,"Check the status, ensure Grafana has started without errors"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl status grafana-server.service \n")),(0,n.kt)("h3",{id:"setup-grafana-dashboard"},"Setup Grafana Dashboard"),(0,n.kt)("p",null,"Ensure port 3000 is open, example of adding to ubuntu firewall"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo ufw allow 3000/tcp\n")),(0,n.kt)("p",null,"In your browser navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<your validators ip address>:3000"),". The default login username and password is admin/admin"),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"You will be asked to reset your password, please write it down or remember the password as you will need it for the next login."),(0,n.kt)("p",null,"You will need to create a datasource. Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Home->Connections->Data sources")),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-data-source.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add data source")),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-data-source-2.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Prometheus")),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-data-source-3.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"Set URL to http://localhost:9090, then test and save the connection"),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-data-source-4.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"Navigate back to your home page, on the top right in the menu select ",(0,n.kt)("strong",{parentName:"p"},"Import dashboard")),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-dashboard.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"Import the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/availproject.github.io/blob/main/static/grafana/Avail-Node-Metrics.json"},"Avail Node Metrics")," file"),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-dashboard-2.png"),width:"100%",height:"100%"}),(0,n.kt)("p",null,"You will have a new dashboard that opens and that you can use to monitor your node"),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-avail-grafana-add-dashboard-3.png"),width:"100%",height:"100%"}))}c.isMDXComponent=!0}}]);