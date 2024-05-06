import e from"axios";class t extends Error{constructor(e="Internal error",t=null,s=-32603){if("object"==typeof(r=e)&&null!==r){const t=e;super(t.message),this.code=void 0,this.data=void 0,this.code=t.code,this.data=t.data}else super(e),this.code=void 0,this.data=void 0,this.code=s,this.data=t;var r}}const s={index:0,get next(){return this.index=this.index+1,this.index}};class r{constructor(e,t){this.session=void 0,this.relativePath=void 0,this._batchQueue=void 0,this.session=e,this.relativePath=t,this.resetQueue()}requestObject(e,t,s){return{jsonrpc:"2.0",method:e,id:s,params:t}}handleResponse(e){if(Object.prototype.hasOwnProperty.call(e,"result"))return e.result;if(Object.prototype.hasOwnProperty.call(e,"error")){const s=e.error;throw new t(s.message,s.data,s.code)}throw Error("The server did not respond correctly.")}async request(e,t,r=s.next){const o=await this.session.postBody(this.relativePath,{rpc:this.requestObject(e,t,r)});return this.handleResponse(o.data)}resetQueue(){this._batchQueue=[]}queue(e,t,r=s.next){return this._batchQueue.push(this.requestObject(e,t,r)),this}async batch(e=!1){var t;const s=this._batchQueue;return this.resetQueue(),(null!=(t=(await this.session.postBody(this.relativePath,{rpc:s})).data.data)?t:[]).map(t=>{if(e)return this.handleResponse(t);try{return this.handleResponse(t)}catch(e){return e}})}rhnode(e,t,r=[],o=s.next){return this.request(t,{dataid:e,args:r},o)}rhnodeQueue(e,t,r=[],o=s.next){return this.queue(t,{dataid:e,args:r},o)}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},o.apply(this,arguments)}class i{constructor(e){this._session=void 0,this._session=e}get session(){return this._session}}class n extends i{auth(){return this.session.get("/api/v1/auth/")}}var a;!function(e){e[e.Alias=1]="Alias",e[e.Category=131]="Category",e[e.Collection=298]="Collection",e[e.CompoundDoc=136]="CompoundDoc",e[e.Document=144]="Document",e[e.Folder=0]="Folder",e[e.Generation=2]="Generation",e[e.Project=202]="Project",e[e.ProjectVol=201]="ProjectVol",e[e.Release=138]="Release",e[e.Revision=139]="Revision",e[e.ScriptNode=32901]="ScriptNode",e[e.Simplate=31678]="Simplate"}(a||(a={}));const d=()=>"undefined"==typeof window;class h extends i{addablenodetypes(e){return this.session.get(`api/v1/nodes/${e}/addablenodetypes`)}async addDocument({parent_id:e,fileHandler:t,name:s,description:r,options:i={}}){const n="api/v1/nodes";if(d()&&this.session._isString(t)){const r=(await import("fs")).createReadStream(t),d=o({},i,{type:a.Document,name:s,parent_id:e,file:r});return await this.session.postForm(n,d)}if(this.session._isFile(t)){const d=o({},i,{type:a.Document,name:s,description:r,parent_id:e,file:t});return await this.session.postForm(n,d)}throw new Error("Invalid file.")}async addDocumentMajor({parent_id:e,fileHandler:t,name:s,description:r,options:i={}}){const n=await this.addDocument({parent_id:e,fileHandler:t,name:s,options:o({},i,{advanced_versioning:!0})}),a=n.data.id;return await this.session.versions.promote({dataid:a,versionNumber:1,description:r}),await this.session.versions.deleteVersion({dataid:a,versionNumber:1}),n}addItem(e,t,s,r={}){return this.session.postBody("api/v2/nodes",o({type:e,parent_id:t,name:s},r))}node({dataid:e,apiVersion:t="v2",params:s={}}){return this.session.get(`api/${t}/nodes/${e}`,{params:s})}ancestors(e,t={}){return this.session.get(`api/v1/nodes/${e}/ancestors`,{params:t})}volumeInfo(e){return this.session.get(`api/v1/volumes/${e}`)}volumes(){return this.session.get("api/v2/volumes")}addFolder(e,t,s={}){return this.addItem(a.Folder,e,t,s)}addGeneration(e,t,s,r,i={}){return this.addItem(a.Generation,e,t,o({original_id:s,version_number:r},i))}nodes(e,t={}){return this.session.get(`api/v2/nodes/${e}/nodes`,{params:t})}children(e,t={}){return this.nodes(e,t)}delete(e){return this.session.delete(`api/v1/nodes/${e}`)}download({dataid:e,apiVersion:t="v1",filePath:s}){return d()?this.session.get(`api/${t}/nodes/${e}/content`,{responseType:"stream"}).then(async function(e){const t=(await import("fs")).createWriteStream(s);return e.data.pipe(t),new Promise((e,s)=>{t.on("finish",e),t.on("error",s)})}):Promise.reject("Not implemented yet")}audit({dataid:e,apiVersion:t="v2",params:s={}}){return this.session.get(`api/${t}/nodes/${e}/audit`,{params:s})}}class u{constructor(e,t){this.session=void 0,this.mapId=void 0,this.workflowPropertiesInfo=null,this.session=e,this.mapId=t}async start(){this.workflowPropertiesInfo=await this.session.workflow.start(this.mapId)}get form(){return this.workflowPropertiesInfo.forms[0]}findWorkflowAttribute(e){return Object.entries(this.form.schema.properties).find(([t,s])=>s.title===e)}get processId(){return this.workflowPropertiesInfo.data.process_id}get attachmentsFolderId(){const e=this.workflowPropertiesInfo.data.data_packages.find(e=>1===e.type&&1===e.sub_type);return null==e?void 0:e.data.attachment_folder_id}get wantComments(){return this.workflowPropertiesInfo.data.comments_on}get wantAuthentication(){return this.workflowPropertiesInfo.data.authentication}setWorkflowAttribute(e,t){var s;const[r,o]=null!=(s=this.findWorkflowAttribute(e))?s:[];if("array"===o.type===Array.isArray(t))return this.form.data[r]=t,u;throw new Error("Invalid type.")}async formUpdate(){return await this.session.workflow.draftprocessesPut(this.processId,{action:"formUpdate",values:this.form.data})}async initiate({comment:e,password:t}={}){await this.formUpdate();const s=o({action:"Initiate"},this.wantComments&&{comment:e},this.wantAuthentication&&{authentication_info:{password:t}});return await this.session.workflow.draftprocessesPut(this.processId,s)}}class c extends i{workflowInitiator(e){return new u(this.session,e)}start(e){return this.draftprocesses(e).then(e=>e.results.draftprocess_id).then(e=>this.draftprocessesUpdate(e))}async draftprocesses(e){const{data:t}=await this.session.postForm("api/v2/draftprocesses",{workflow_id:e});return t}async draftprocessesUpdate(e){const{data:t}=await this.session.get("api/v1/forms/draftprocesses/update",{params:{draftprocess_id:e}});return t}async draftprocessesPut(e,t){const{data:s}=await this.session.putForm(`api/v2/draftprocesses/${e}`,{body:t});return s}}class p extends i{scriptNode(e,t={}){return this.session.postForm(`api/v1/rhcore/${e}`,t)}}class l extends i{search(e,t={}){return this.session.postBody("api/v2/search",o({where:e},t))}regions(e={}){return this.session.get("api/v1/regions",e)}}class m extends i{constructor(e){super(e),this.USER=void 0,this.GROUP=void 0,this.USER=0,this.GROUP=1}userQuery(e,t={},s="v2"){const r=o({limit:20,where_type:JSON.stringify([this.USER,this.GROUP]),query:e},t);return this.session.get(`api/${s}/members`,{params:r})}member(e,t="v2"){return this.session.get(`api/${t}/members/${e}`)}}class v extends i{async addVersion({dataid:e,fileHandler:t,options:s={}}){console.assert(null!=e,"dataid cannot be null"),console.assert(null!=t,"fileHandler cannot be null");const r=`api/v1/nodes/${e}/versions`;if(d()&&this.session._isString(t)){const e=o({file:(await import("fs")).createReadStream(t)},s);return this.session.postForm(r,e)}if(this.session._isFile(t)){const e=o({file:t},s);return this.session.postForm(r,e)}throw new Error("Invalid file.")}download({dataid:e,version:t,filePath:s}){return console.assert(null!=e,"dataid cannot be null"),console.assert(null!=t,"version cannot be null"),console.assert(null!=s,"filePath cannot be null"),d()?this.session.get(`api/v1/nodes/${e}/versions/${t}/content`,{responseType:"stream"}).then(async function(e){const t=(await import("fs")).createWriteStream(s);return e.data.pipe(t),new Promise((e,s)=>{t.on("finish",e),t.on("error",s)})}):Promise.reject("Not implemented yet")}list(e){return this.session.get(`api/v1/nodes/${e}/versions`)}version(e,t="latest"){return this.session.get(`api/v1/nodes/${e}/versions/${t}`)}promote({dataid:e,versionNumber:t,description:s=null}){return console.assert(null!=e,"dataid cannot be null"),console.assert(null!=t,"number_to_keep must be an integer"),this.session.postBody(`api/v2/nodes/${e}/versions/${t}/promote`,o({},!!s&&{description:s}))}deleteVersion({dataid:e,versionNumber:t,apiVersion:s="v1"}){return console.assert(null!=e,"dataid cannot be null"),console.assert(null!=t,"number_to_keep must be an integer"),this.session.delete(`api/${s}/nodes/${e}/versions/${t}`)}purge({dataid:e,number_to_keep:t=1}){return console.assert(null!=e,"dataid cannot be null"),console.assert(!isNaN(t),"number_to_keep must be an integer"),this.session.deleteForm(`api/v2/nodes/${e}/versions`,{number_to_keep:t})}}class f extends i{run(e,t={}){return this.session.get(`api/v1/nodes/${e}/output`,{params:t})}}class w{constructor(t){this.axios=void 0,this._nodes=void 0,this._auth=void 0,this._workflow=void 0,this._rhcore=void 0,this._members=void 0,this._search=void 0,this._webreports=void 0,this._versions=void 0,this.baseUrl=void 0,this.baseUrl=t.baseUrl,this.axios=(t=>{const s=(t=>{const s=e.create({baseURL:t.baseUrl,paramsSerializer:{indexes:null}});return s.interceptors.response.use(e=>{const t=null==e?void 0:e.headers.otcsticket;return t&&(s.defaults.headers.common.OTCSTicket=t),e},e=>Promise.reject(e)),s})(t),r=t.username,o=t.password,i=t.otcsticket;if(i)s.defaults.headers.common.OTCSTicket=i;else{if(!r||!o)throw Error("You must provide an otcsticket or username and password.");s.interceptors.request.use(async s=>{var i;if(null!=(i=s.headers.common)&&i.OTCSTicket)return s;{const i=await e.post(`${t.baseUrl}/api/v1/auth/`,{username:r,password:o},{headers:{"Content-Type":"multipart/form-data"}});return s.headers.OTCSTicket=i.data.ticket,s}})}return s})(t)}get nodes(){return void 0===this._nodes&&(this._nodes=new h(this)),this._nodes}get auth(){return void 0===this._auth&&(this._auth=new n(this)),this._auth}get workflow(){return void 0===this._workflow&&(this._workflow=new c(this)),this._workflow}get rhcore(){return void 0===this._rhcore&&(this._rhcore=new p(this)),this._rhcore}get members(){return void 0===this._members&&(this._members=new m(this)),this._members}get search(){return void 0===this._search&&(this._search=new l(this)),this._search}get webreports(){return void 0===this._webreports&&(this._webreports=new f(this)),this._webreports}get versions(){return void 0===this._versions&&(this._versions=new v(this)),this._versions}rpcClient(e="/api/v1/rh/rpc/rhnode/"){return new r(this,e)}_isObject(e){return e&&"object"==typeof e&&e.constructor===Object}_isString(e){return"string"==typeof e||e instanceof String}_isBoolean(e){return"boolean"==typeof e}_isFile(e){return"string"==typeof(null==e?void 0:e.name)}putForm(e,t){return this.put(e,this.objectToForm(t),{headers:{"Content-Type":"multipart/form-data"}})}postForm(e,t){return this.post(e,this.objectToForm(t),{headers:{"Content-Type":"multipart/form-data"},maxBodyLength:Infinity})}patchForm(e,t){return this.patch(e,this.objectToForm(t),{headers:{"Content-Type":"multipart/form-data"}})}deleteForm(e,t){return this.delete(e)}objectToForm(e){return Object.entries(e).reduce((e,[t,s])=>o({},e,{[t]:Array.isArray(s)||this._isObject(s)?JSON.stringify(s):s}),{})}putBody(e,t){return this.putForm(e,{body:t})}postBody(e,t){return this.postForm(e,{body:t})}patchBody(e,t){return this.patchForm(e,{body:t})}deleteBody(e,t){return this.deleteForm(e,{body:t})}get(e,t){return this.axios.get(e,t)}post(e,t,s){return this.axios.post(e,t,s)}put(e,t,s){return this.axios.put(e,t,s)}patch(e,t,s){return this.axios.patch(e,t,s)}options(e,t){return this.axios.options(e,t)}delete(e,t){return this.axios.delete(e,t)}async $get(e,t){return(await this.get(e,t)).data}}const _=e=>void 0!==e.code&&void 0!==e.data;export{r as RPCClient,t as RPCError,w as Session,_ as isRPCError};
//# sourceMappingURL=cs-rest.modern.js.map