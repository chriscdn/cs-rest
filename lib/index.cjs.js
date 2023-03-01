'use strict';

var axios = require('axios');
var get = require('lodash.get');
var isnil = require('lodash.isnil');
var isObject = require('is-object');

var AssocType = -18;
var BooleanType = 5;
var ClassType = 9;
var DapiNodeType = -72;
var DapiSessionType = -74;
var DapiStreamType = -68;
var DapiVersionType = -69;
var DateType = -7;
var DynamicType = -127;
var ErrorType = 1;
var FileType = -107;
var FrameType = 10;
var IntegerType = 2;
var JavaObjectType = -42;
var ListType = -2;
var LongType = -8;
var ObjectType = -128;
var ObjRefType = 3;
var RealType = -4;
var RecArrayType = -110;
var RecordType$1 = -109;
var ScriptType = -3;
var SocketType = -102;
var StringType = -1;
var UAPIType = -196;
var UndefinedType = 0;
var VoidType = 8;
var WAPIWorkType = -75;
var dataTypesEnum = {
	AssocType: AssocType,
	BooleanType: BooleanType,
	ClassType: ClassType,
	DapiNodeType: DapiNodeType,
	DapiSessionType: DapiSessionType,
	DapiStreamType: DapiStreamType,
	DapiVersionType: DapiVersionType,
	DateType: DateType,
	DynamicType: DynamicType,
	ErrorType: ErrorType,
	FileType: FileType,
	FrameType: FrameType,
	IntegerType: IntegerType,
	JavaObjectType: JavaObjectType,
	ListType: ListType,
	LongType: LongType,
	ObjectType: ObjectType,
	ObjRefType: ObjRefType,
	RealType: RealType,
	RecArrayType: RecArrayType,
	RecordType: RecordType$1,
	ScriptType: ScriptType,
	SocketType: SocketType,
	StringType: StringType,
	UAPIType: UAPIType,
	UndefinedType: UndefinedType,
	VoidType: VoidType,
	WAPIWorkType: WAPIWorkType
};

var FormDataFactory = {
  createFormData() {
    {
      return new FormData();
    }
  }
};

function getInstance(options) {
  const instance = axios.create({
    baseURL: options.baseUrl
  });
  instance.interceptors.response.use(
    (response) => {
      const otcsticket = get(response, "headers.otcsticket");
      if (otcsticket) {
        instance.defaults.headers.common.OTCSTicket = otcsticket;
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
}
function axiosFactory(options) {
  const instance = getInstance(options);
  const username = options.username;
  const password = options.password;
  const otcsticket = options.otcsticket;
  if (otcsticket) {
    instance.defaults.headers.common.OTCSTicket = otcsticket;
  } else if (username && password) {
    instance.interceptors.request.use(async (request) => {
      if (request.headers.common.OTCSTicket) {
        return request;
      } else {
        const formData = FormDataFactory.createFormData();
        formData.append("username", username);
        formData.append("password", password);
        const response = await axios.post(`${options.baseUrl}/api/v1/auth/`, formData);
        request.headers.common.OTCSTicket = get(response, "data.ticket");
        return request;
      }
    });
  } else {
    throw Error("You must provide an otcsticket or username and password.");
  }
  return instance;
}

class ServiceAbstract {
  _session;
  constructor(session) {
    this._session = new WeakRef(session);
  }
  get session() {
    return this._session.deref();
  }
}

class Auth extends ServiceAbstract {
  auth() {
    return this.session.get("/api/v1/auth/");
  }
}

var Accession = 834;
var ActiveFolder = 1298;
var Activeview = 30309;
var ActivityManager = 907;
var Alias = 1;
var Appearance = 480;
var AppearanceFolder = 483;
var AppearancesVolume = 481;
var ArchiveFolder = 31711;
var BackupManager = 290;
var BackupProcess = 291;
var BestBets = 274;
var Blog = 356;
var BlogEntry = 357;
var BoxFolder = 530;
var Category = 131;
var CategoryFolder = 132;
var Channel = 207;
var ChannelVol = 209;
var Classification = 199;
var ClassificationTree = 196;
var ClassifiedItems = 194;
var Collection = 298;
var Column = 902;
var Comments = 345;
var CommentsReply = 348;
var CommentsVol = 346;
var CommExpertContainer = 3030338;
var CommExpertGroup = 3030339;
var CommStore = 3030329;
var CommTemplate = 3030002;
var CommTemplateFolder = 3030333;
var CommTemplateVol = 3030004;
var CommURLStore = 3030335;
var CommWorkspace = 3030334;
var CommXSLVolume = 3030205;
var CompoundDoc = 136;
var CompoundEMail = 557;
var ContentModuleFolder = 3030372;
var CustomView = 146;
var CustomViewTemplate = 844;
var DataFlowManager = 270;
var DataSourceFolder = 276;
var DirWalker = 277;
var Discussion = 215;
var DispositionGroup = 602;
var Document = 144;
var DocumentLLNode = 1297;
var DocumentServer = 283;
var Dossier = 32912;
var DossierCabinet = 32916;
var DossierCabinetArchive = 31707;
var DossierTemplate = 32914;
var DossierTemplateFolder = 31709;
var DossierTemplatesVolume = 32917;
var DossierTemplateVolume = 32915;
var DossierVolume = 32913;
var DPSBinding = 31602;
var DPSFolder = 31601;
var DPSVolume = 31603;
var DTDLLNode = 335;
var DynamicView = 900;
var EMail = 749;
var EmailConversationItems = 2504;
var Facet = 904;
var FacetFolder = 905;
var FacetTree = 903;
var FailedFolder = 1299;
var FixedSystemColumn = 906;
var Folder = 0;
var Form = 223;
var Generation = 2;
var GENERICCONTENTMODULE = 3030371;
var GlobalAppearance = 482;
var HoldContainer = 833;
var HTMLConversion = 282;
var HTMLFormView = 226;
var Importer = 293;
var Inbox = 731;
var IndexEngine = 368;
var IndexTracer = 147;
var IndexUpdate = 281;
var InternalOTDS = 924;
var ItemTemplateVol = 541;
var ItemTemplateVolFolder = 542;
var JournalVolume = 361;
var LibraryExtractor = 259;
var LibraryObj = 272;
var LLNodeFAQ = 123475;
var LLNodeFAQEntry = 123476;
var LLNodeForum = 123469;
var LLNodeForumEntry = 123470;
var LLNodeURQuestion = 430;
var LLNodeURReply = 432;
var Locators = 422;
var Mailbox = 732;
var MailStore = 3030331;
var ManagedSpace = 31710;
var MediaType = 410;
var MediaTypesContainer = 414;
var MemcachedFolder = 919;
var MemcachedProcess = 920;
var Merge = 273;
var MicroPost = 1281;
var MicroPostVolume = 1282;
var MultiVolClassification = 372;
var MultiVolClassificationProxy = 374;
var MultiVolClassificationTree = 373;
var MyReservedItems = 870;
var MyWorkbenches = 532;
var NAVMENUVOL = 3030756;
var News = 208;
var OTCIndexObj = 257;
var Partition = 371;
var PartitionMap = 370;
var PersonalComm = 3030203;
var PersonalCommSystemVolume = 3030003;
var PersonalCommVol = 3030204;
var PersonalStagingFolder = 398;
var PersonalWebpage = 3030343;
var PhysicalItemBox = 424;
var PhysicalItemContainer = 412;
var PhysicalItemCopy = 419;
var PhysicalItem_non_Container = 411;
var PhysObjAdmin = 415;
var PhysObjBatchLabels = 418;
var PhysObjCirculation = 416;
var PhysObjReports = 417;
var Poll = 218;
var Process = 271;
var Profile = 195;
var Project = 202;
var ProjectTemplate = 543;
var ProjectVol = 201;
var Prospector = 384;
var ProspectorQueries = 380;
var ProspectorSnapshot = 387;
var Provenance = 829;
var PublishingFolder = 31712;
var PublishingFolderVolume = 31713;
var QAFolder = 441;
var QueryFile = 296;
var QuestionVolume = 431;
var RecentItems = 327;
var RecordType = 425;
var RecordTypesContainer = 428;
var RedForm = 32918;
var RedFormVolume = 32919;
var Release = 138;
var RemoteLLDataSource = 381;
var Reply = 134;
var Report = 299;
var Revision = 139;
var RIMSDisposition = 555;
var RIMSDispositionsContainer = 554;
var RIMSHoldMaintenance = 552;
var RIMSRsiContainer = 553;
var RMAdministration = 556;
var RMClassification = 551;
var RMFolder = 426;
var RMPart = 427;
var RMReportsContainer = 558;
var RMThesaurus = 559;
var ScanConfigurationVolume = 2505;
var ScheduledHoldCriteria = 835;
var ScriptNode = 32901;
var SearchBroker = 258;
var SearchEngine = 369;
var SearchManager = 269;
var SearchReport = 278;
var SearchResultsTemplate = 383;
var SearchTemplate = 292;
var Simplate = 31678;
var SkyPodLLVolume = 49547;
var SliceFolder = 275;
var SocialObject = 1280;
var SocialObjectVolume = 1283;
var SPCJOBDESCR = 797;
var SPCJOBDESCRFOLDER = 796;
var SPCVOLUME = 795;
var spdcommittee = 3030202;
var spdcommitteevol = 3030201;
var spdcommitteevolume = 3030001;
var spdemail = 3030130;
var Spider = 280;
var StorageManagement = 421;
var SubmitVersionNode = 231;
var Task = 206;
var TaskGroup = 205;
var TaskList = 204;
var TaskListVol = 210;
var TaskMilestone = 212;
var Template = 230;
var TemplateFolder = 268;
var TextDocument = 145;
var Topic = 130;
var Transfers = 423;
var TransportBox = 531;
var TransportItem = 526;
var TransportItemPart = 527;
var UrgentRequests = 3030330;
var URL = 140;
var VirtualFolder = 899;
var VolBlog = 123461;
var VolCategories = 133;
var VolClassification = 198;
var VolComments = 347;
var VolDAP = 987352;
var VolDeletedItems = 405;
var VolDirectory = 375;
var VolDiscussion = 143;
var VolDomainWorkspace = 180;
var VolDTD = 336;
var VolEditWorkflow = 162;
var VolFacets = 901;
var VolLibrary = 141;
var VolOrphan = 403;
var VolPersonalStaging = 397;
var VolPerspectives = 908;
var VolPhysObj = 413;
var VolRecMan = 550;
var VolRelease = 137;
var VolReports = 211;
var VolSystem = 148;
var VolTracer = 149;
var VolumeFolder = 484;
var VolumeLLVolume = 1296;
var VolWarehouse = 525;
var VolWorkbin = 142;
var VolWorkflow = 161;
var WarehouseFolder = 529;
var WebFormConnectionVolume = 236;
var WebFormDatabaseConnection = 235;
var WebFormLookup = 234;
var WebFormLookupVolume = 233;
var WebReports$1 = 30303;
var WFMapLLNode = 128;
var WFStatusNode = 190;
var WIKI = 5573;
var WIKIPAGE = 5574;
var Workbench = 528;
var WorkflowAttachments = 154;
var XMLActivatorCon = 286;
var XMLActivatorProd = 285;
var SubTypes = {
	"2WayTee": 294,
	Accession: Accession,
	ActiveFolder: ActiveFolder,
	Activeview: Activeview,
	ActivityManager: ActivityManager,
	Alias: Alias,
	Appearance: Appearance,
	AppearanceFolder: AppearanceFolder,
	AppearancesVolume: AppearancesVolume,
	ArchiveFolder: ArchiveFolder,
	BackupManager: BackupManager,
	BackupProcess: BackupProcess,
	BestBets: BestBets,
	Blog: Blog,
	BlogEntry: BlogEntry,
	BoxFolder: BoxFolder,
	Category: Category,
	CategoryFolder: CategoryFolder,
	Channel: Channel,
	ChannelVol: ChannelVol,
	Classification: Classification,
	"Classification Shortcut": 197,
	ClassificationTree: ClassificationTree,
	ClassifiedItems: ClassifiedItems,
	Collection: Collection,
	Column: Column,
	Comments: Comments,
	CommentsReply: CommentsReply,
	CommentsVol: CommentsVol,
	CommExpertContainer: CommExpertContainer,
	CommExpertGroup: CommExpertGroup,
	CommStore: CommStore,
	CommTemplate: CommTemplate,
	CommTemplateFolder: CommTemplateFolder,
	CommTemplateVol: CommTemplateVol,
	CommURLStore: CommURLStore,
	CommWorkspace: CommWorkspace,
	CommXSLVolume: CommXSLVolume,
	CompoundDoc: CompoundDoc,
	CompoundEMail: CompoundEMail,
	ContentModuleFolder: ContentModuleFolder,
	"csapps CSApplicationManifest": 32658,
	"csapps CSApplicationsVolume": 32657,
	CustomView: CustomView,
	CustomViewTemplate: CustomViewTemplate,
	DataFlowManager: DataFlowManager,
	DataSourceFolder: DataSourceFolder,
	DirWalker: DirWalker,
	Discussion: Discussion,
	DispositionGroup: DispositionGroup,
	Document: Document,
	DocumentLLNode: DocumentLLNode,
	DocumentServer: DocumentServer,
	Dossier: Dossier,
	DossierCabinet: DossierCabinet,
	DossierCabinetArchive: DossierCabinetArchive,
	DossierTemplate: DossierTemplate,
	DossierTemplateFolder: DossierTemplateFolder,
	DossierTemplatesVolume: DossierTemplatesVolume,
	DossierTemplateVolume: DossierTemplateVolume,
	DossierVolume: DossierVolume,
	DPSBinding: DPSBinding,
	DPSFolder: DPSFolder,
	DPSVolume: DPSVolume,
	DTDLLNode: DTDLLNode,
	DynamicView: DynamicView,
	EMail: EMail,
	EmailConversationItems: EmailConversationItems,
	"Enterprise Archive Document": 753,
	Facet: Facet,
	FacetFolder: FacetFolder,
	FacetTree: FacetTree,
	FailedFolder: FailedFolder,
	FixedSystemColumn: FixedSystemColumn,
	Folder: Folder,
	Form: Form,
	Generation: Generation,
	GENERICCONTENTMODULE: GENERICCONTENTMODULE,
	GlobalAppearance: GlobalAppearance,
	HoldContainer: HoldContainer,
	HTMLConversion: HTMLConversion,
	HTMLFormView: HTMLFormView,
	Importer: Importer,
	Inbox: Inbox,
	IndexEngine: IndexEngine,
	IndexTracer: IndexTracer,
	IndexUpdate: IndexUpdate,
	InternalOTDS: InternalOTDS,
	ItemTemplateVol: ItemTemplateVol,
	ItemTemplateVolFolder: ItemTemplateVolFolder,
	JournalVolume: JournalVolume,
	LibraryExtractor: LibraryExtractor,
	LibraryObj: LibraryObj,
	"LLNode Email Folder": 751,
	LLNodeFAQ: LLNodeFAQ,
	LLNodeFAQEntry: LLNodeFAQEntry,
	LLNodeForum: LLNodeForum,
	LLNodeForumEntry: LLNodeForumEntry,
	LLNodeURQuestion: LLNodeURQuestion,
	LLNodeURReply: LLNodeURReply,
	Locators: Locators,
	Mailbox: Mailbox,
	MailStore: MailStore,
	ManagedSpace: ManagedSpace,
	MediaType: MediaType,
	MediaTypesContainer: MediaTypesContainer,
	MemcachedFolder: MemcachedFolder,
	MemcachedProcess: MemcachedProcess,
	Merge: Merge,
	MicroPost: MicroPost,
	MicroPostVolume: MicroPostVolume,
	MultiVolClassification: MultiVolClassification,
	MultiVolClassificationProxy: MultiVolClassificationProxy,
	MultiVolClassificationTree: MultiVolClassificationTree,
	MyReservedItems: MyReservedItems,
	MyWorkbenches: MyWorkbenches,
	NAVMENUVOL: NAVMENUVOL,
	News: News,
	OTCIndexObj: OTCIndexObj,
	Partition: Partition,
	PartitionMap: PartitionMap,
	PersonalComm: PersonalComm,
	PersonalCommSystemVolume: PersonalCommSystemVolume,
	PersonalCommVol: PersonalCommVol,
	PersonalStagingFolder: PersonalStagingFolder,
	PersonalWebpage: PersonalWebpage,
	PhysicalItemBox: PhysicalItemBox,
	PhysicalItemContainer: PhysicalItemContainer,
	PhysicalItemCopy: PhysicalItemCopy,
	PhysicalItem_non_Container: PhysicalItem_non_Container,
	PhysObjAdmin: PhysObjAdmin,
	PhysObjBatchLabels: PhysObjBatchLabels,
	PhysObjCirculation: PhysObjCirculation,
	PhysObjReports: PhysObjReports,
	Poll: Poll,
	Process: Process,
	Profile: Profile,
	Project: Project,
	ProjectTemplate: ProjectTemplate,
	ProjectVol: ProjectVol,
	Prospector: Prospector,
	ProspectorQueries: ProspectorQueries,
	ProspectorSnapshot: ProspectorSnapshot,
	Provenance: Provenance,
	"Proxy": 260,
	PublishingFolder: PublishingFolder,
	PublishingFolderVolume: PublishingFolderVolume,
	QAFolder: QAFolder,
	QueryFile: QueryFile,
	QuestionVolume: QuestionVolume,
	RecentItems: RecentItems,
	RecordType: RecordType,
	RecordTypesContainer: RecordTypesContainer,
	RedForm: RedForm,
	RedFormVolume: RedFormVolume,
	Release: Release,
	RemoteLLDataSource: RemoteLLDataSource,
	Reply: Reply,
	Report: Report,
	Revision: Revision,
	RIMSDisposition: RIMSDisposition,
	RIMSDispositionsContainer: RIMSDispositionsContainer,
	RIMSHoldMaintenance: RIMSHoldMaintenance,
	RIMSRsiContainer: RIMSRsiContainer,
	RMAdministration: RMAdministration,
	RMClassification: RMClassification,
	RMFolder: RMFolder,
	RMPart: RMPart,
	RMReportsContainer: RMReportsContainer,
	RMThesaurus: RMThesaurus,
	ScanConfigurationVolume: ScanConfigurationVolume,
	ScheduledHoldCriteria: ScheduledHoldCriteria,
	ScriptNode: ScriptNode,
	SearchBroker: SearchBroker,
	SearchEngine: SearchEngine,
	SearchManager: SearchManager,
	SearchReport: SearchReport,
	SearchResultsTemplate: SearchResultsTemplate,
	SearchTemplate: SearchTemplate,
	Simplate: Simplate,
	SkyPodLLVolume: SkyPodLLVolume,
	SliceFolder: SliceFolder,
	SocialObject: SocialObject,
	SocialObjectVolume: SocialObjectVolume,
	SPCJOBDESCR: SPCJOBDESCR,
	SPCJOBDESCRFOLDER: SPCJOBDESCRFOLDER,
	SPCVOLUME: SPCVOLUME,
	spdcommittee: spdcommittee,
	spdcommitteevol: spdcommitteevol,
	spdcommitteevolume: spdcommitteevolume,
	spdemail: spdemail,
	Spider: Spider,
	StorageManagement: StorageManagement,
	SubmitVersionNode: SubmitVersionNode,
	Task: Task,
	TaskGroup: TaskGroup,
	TaskList: TaskList,
	TaskListVol: TaskListVol,
	TaskMilestone: TaskMilestone,
	Template: Template,
	TemplateFolder: TemplateFolder,
	TextDocument: TextDocument,
	Topic: Topic,
	Transfers: Transfers,
	TransportBox: TransportBox,
	TransportItem: TransportItem,
	TransportItemPart: TransportItemPart,
	UrgentRequests: UrgentRequests,
	URL: URL,
	VirtualFolder: VirtualFolder,
	VolBlog: VolBlog,
	VolCategories: VolCategories,
	VolClassification: VolClassification,
	VolComments: VolComments,
	VolDAP: VolDAP,
	VolDeletedItems: VolDeletedItems,
	VolDirectory: VolDirectory,
	VolDiscussion: VolDiscussion,
	VolDomainWorkspace: VolDomainWorkspace,
	VolDTD: VolDTD,
	VolEditWorkflow: VolEditWorkflow,
	VolFacets: VolFacets,
	VolLibrary: VolLibrary,
	VolOrphan: VolOrphan,
	VolPersonalStaging: VolPersonalStaging,
	VolPerspectives: VolPerspectives,
	VolPhysObj: VolPhysObj,
	VolRecMan: VolRecMan,
	VolRelease: VolRelease,
	VolReports: VolReports,
	VolSystem: VolSystem,
	VolTracer: VolTracer,
	VolumeFolder: VolumeFolder,
	VolumeLLVolume: VolumeLLVolume,
	VolWarehouse: VolWarehouse,
	VolWorkbin: VolWorkbin,
	VolWorkflow: VolWorkflow,
	WarehouseFolder: WarehouseFolder,
	WebFormConnectionVolume: WebFormConnectionVolume,
	WebFormDatabaseConnection: WebFormDatabaseConnection,
	WebFormLookup: WebFormLookup,
	WebFormLookupVolume: WebFormLookupVolume,
	WebReports: WebReports$1,
	WFMapLLNode: WFMapLLNode,
	WFStatusNode: WFStatusNode,
	WIKI: WIKI,
	WIKIPAGE: WIKIPAGE,
	Workbench: Workbench,
	WorkflowAttachments: WorkflowAttachments,
	XMLActivatorCon: XMLActivatorCon,
	XMLActivatorProd: XMLActivatorProd
};

class Nodes extends ServiceAbstract {
  addablenodetypes(dataid) {
    return this.session.get(`api/v1/nodes/${dataid}/addablenodetypes`);
  }
  async addDocument({
    parent_id,
    fileHandler,
    apiVersion = "v1",
    // v1 or v2
    name = null,
    options = {}
  }) {
    console.assert(parent_id != null, "parent_id cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");
    console.assert(
      ["v1", "v2"].includes(apiVersion),
      "apiVersion must be in ['v1','v2']"
    );
    const url = `api/${apiVersion}/nodes`;
    {
      const csName = name || fileHandler.name;
      const params = {
        ...options,
        type: SubTypes.Document,
        name: csName,
        parent_id,
        file: {
          file: fileHandler,
          name: csName
        }
      };
      return this.session.postForm(url, params);
    }
  }
  async addDocumentMajor({
    parent_id,
    fileHandler,
    name = null,
    description = null,
    options = {}
  }) {
    const response = await this.addDocument({
      parent_id,
      fileHandler,
      name,
      options: {
        ...options,
        advanced_versioning: true
      }
    });
    const dataid = response.data.id;
    await this.session.versions.promote({
      dataid,
      versionNumber: 1,
      description
    });
    await this.session.versions.deleteVersion({
      dataid,
      versionNumber: 1
    });
    return response;
  }
  addItem(type, parent_id, name, params = {}) {
    return this.session.postBody("api/v2/nodes", {
      type,
      parent_id,
      name,
      ...params
    });
  }
  node({ dataid, apiVersion = "v2", params = {} }) {
    return this.session.get(`api/${apiVersion}/nodes/${dataid}`, {
      params
    });
  }
  ancestors(dataid, params = {}) {
    return this.session.get(`api/v1/nodes/${dataid}/ancestors`, {
      params
    });
  }
  volumeInfo(objType) {
    return this.session.get(`api/v1/volumes/${objType}`);
  }
  volumes() {
    return this.session.get("api/v2/volumes");
  }
  addFolder(parent_id, name, params = {}) {
    return this.addItem(SubTypes.Folder, parent_id, name, params);
  }
  addGeneration(parent_id, name, original_id, version_number, params = {}) {
    return this.addItem(SubTypes.Generation, parent_id, name, {
      original_id,
      version_number,
      ...params
    });
  }
  nodes(dataid, params = {}) {
    return this.session.get(`api/v2/nodes/${dataid}/nodes`, {
      params
    });
  }
  children(dataid, params = {}) {
    return this.nodes(dataid, params);
  }
  delete(dataid) {
    return this.session.delete(`api/v1/nodes/${dataid}`);
  }
  download({ dataid, apiVersion = "v1", filePath }) {
    {
      return Promise.reject("Not implemented yet");
    }
  }
  audit({ dataid, apiVersion = "v2", params = {} }) {
    return this.session.get(`api/${apiVersion}/nodes/${dataid}/audit`, {
      params
    });
  }
}

class Workflow extends ServiceAbstract {
  start(map_id) {
    return this.draftprocesses(map_id).then((response) => get(response, "data.results.draftprocess_id")).then((draftprocess_id) => this.draftprocesses_update(draftprocess_id));
  }
  draftprocesses(workflow_id) {
    return this.session.postForm("api/v2/draftprocesses", {
      workflow_id
    });
  }
  draftprocesses_update(draftprocess_id) {
    return this.session.get("api/v1/forms/draftprocesses/update", {
      params: {
        draftprocess_id
      }
    });
  }
  draftprocesses_put(draftprocess_id, body) {
    return this.session.putForm(`api/v2/draftprocesses/${draftprocess_id}`, {
      body
    });
  }
  // draftprocesses_formUpdate(draftprocess_id, values) {
  // const body = {
  // action: "formUpdate",
  // values
  // }
  // return this.draftprocesses_put(draftprocess_id, body)
  // }
}

class RHCore extends ServiceAbstract {
  scriptNode(id, params = {}) {
    return this.session.get(`api/v1/rhcore/${id}`, {
      params
    });
  }
}

class Search extends ServiceAbstract {
  search(where, params = {}) {
    return this.session.postBody("api/v2/search", {
      where,
      ...params
    });
  }
  regions(params = {}) {
    return this.session.get("api/v1/regions", params);
  }
}

class Members extends ServiceAbstract {
  // public readonly USER: 0
  // public readonly GROUP: 1
  USER;
  GROUP;
  constructor(session) {
    super(session);
    this.USER = 0;
    this.GROUP = 1;
  }
  userQuery(query, options = {}, version = "v2") {
    const params = {
      limit: 20,
      where_type: JSON.stringify([this.USER, this.GROUP]),
      query,
      ...options
    };
    return this.session.get(`api/${version}/members`, { params });
  }
  member(id, version = "v2") {
    return this.session.get(`api/${version}/members/${id}`);
  }
}

class Versions extends ServiceAbstract {
  async addVersion({
    dataid,
    fileHandler,
    apiVersion = "v1",
    fileName = null,
    options = {}
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");
    const url = `api/${apiVersion}/nodes/${dataid}/versions`;
    {
      const name = fileName || fileHandler.name;
      const params = {
        file: {
          file: fileHandler,
          name
        },
        ...options
      };
      return this.session.postForm(url, params);
    }
  }
  async download({ dataid, version, filePath }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(version != null, "version cannot be null");
    console.assert(filePath != null, "filePath cannot be null");
    {
      return Promise.reject("Not implemented yet");
    }
  }
  async list(dataid) {
    const url = `api/v1/nodes/${dataid}/versions`;
    return this.session.get(url);
  }
  async version(dataid, version_number = "latest") {
    const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
    return this.session.get(url);
  }
  async promote({ dataid, versionNumber, description = null }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");
    const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;
    return this.session.postBody(url, {
      ...!!description && {
        description
      }
    });
  }
  async deleteVersion({ dataid, versionNumber, apiVersion = "v1" }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");
    const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`;
    return this.session.delete(url);
  }
  async purge({ dataid, number_to_keep = 1 }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(!isNaN(number_to_keep), "number_to_keep must be an integer");
    const url = `api/v2/nodes/${dataid}/versions`;
    return this.session.deleteForm(url, {
      number_to_keep
    });
  }
}

class WebReports extends ServiceAbstract {
  run(dataid, params = {}) {
    const url = `api/v1/nodes/${dataid}/output`;
    return this.session.get(url, { params });
  }
}

const ErrorCodes = {
  PARSEERROR: {
    code: -32700,
    message: "Parse error"
  },
  INVALIDREQUEST: {
    code: -32600,
    message: "Invalid Request"
  },
  METHODNOTFOUND: {
    code: -32601,
    message: "Method not found"
  },
  INVALIDPARAMS: {
    code: -32602,
    message: "Invalid params"
  },
  INTERNALERROR: {
    code: -32603,
    message: "Internal error"
  }
};
class RPCError extends Error {
  code;
  data;
  constructor(message = ErrorCodes.INTERNALERROR.message, data = null, code = ErrorCodes.INTERNALERROR.code) {
    if (isObject(message)) {
      const messageObj = message;
      super(messageObj.message);
      this.code = messageObj.code;
      this.data = messageObj.data;
    } else {
      super(message);
      this.code = code;
      this.data = data;
    }
  }
}

const sequence = {
  index: 0,
  get next() {
    this.index = this.index + 1;
    return this.index;
  }
};
class RPCClient {
  session;
  relativePath;
  _batchQueue;
  constructor(session, relativePath) {
    this.session = session;
    this.relativePath = relativePath;
    this.resetQueue();
  }
  requestObject(method, params, id) {
    return {
      jsonrpc: "2.0",
      method,
      id,
      params
    };
  }
  handleResponse(data) {
    if (Object.prototype.hasOwnProperty.call(data, "result")) {
      return data.result;
    } else if (Object.prototype.hasOwnProperty.call(data, "error")) {
      const err = data.error;
      throw new RPCError(err.message, err.data, err.code);
    } else {
      throw Error("The server did not respond correctly.");
    }
  }
  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(method, params, id = sequence.next) {
    const response = await this.session.postBody(this.relativePath, {
      rpc: this.requestObject(method, params, id)
    });
    return this.handleResponse(response.data);
  }
  resetQueue() {
    this._batchQueue = [];
  }
  queue(method, params, id = sequence.next) {
    this._batchQueue.push(this.requestObject(method, params, id));
    return this;
  }
  async batch(throwOnError = false) {
    const queue = this._batchQueue;
    this.resetQueue();
    const response = await this.session.postBody(this.relativePath, {
      rpc: queue
    });
    return get(response, "data.data", []).map((item) => {
      if (throwOnError) {
        return this.handleResponse(item);
      } else {
        try {
          return this.handleResponse(item);
        } catch (e) {
          return e;
        }
      }
    });
  }
  rhnode(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args
    };
    return this.request(method, params, id);
  }
  rhnodeQueue(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args
    };
    return this.queue(method, params, id);
  }
}

class Session {
  axios;
  _nodes;
  _auth;
  _workflow;
  _rhcore;
  _members;
  _search;
  _webreports;
  _versions;
  constructor(options) {
    this.axios = axiosFactory(options);
  }
  get nodes() {
    if (this._nodes == null) {
      this._nodes = new Nodes(this);
    }
    return this._nodes;
  }
  get auth() {
    if (this._auth == null) {
      this._auth = new Auth(this);
    }
    return this._auth;
  }
  get workflow() {
    if (this._workflow == null) {
      this._workflow = new Workflow(this);
    }
    return this._workflow;
  }
  get rhcore() {
    if (this._rhcore == null) {
      this._rhcore = new RHCore(this);
    }
    return this._rhcore;
  }
  get members() {
    if (this._members == null) {
      this._members = new Members(this);
    }
    return this._members;
  }
  get search() {
    if (this._search == null) {
      this._search = new Search(this);
    }
    return this._search;
  }
  get webreports() {
    if (this._webreports == null) {
      this._webreports = new WebReports(this);
    }
    return this._webreports;
  }
  get versions() {
    if (this._versions == null) {
      this._versions = new Versions(this);
    }
    return this._versions;
  }
  get dataTypesEnum() {
    return dataTypesEnum;
  }
  rpcClient(relativePath = "/api/v1/rh/rpc/rhnode/") {
    return new RPCClient(this, relativePath);
  }
  _isObject(value) {
    return value && typeof value === "object" && value.constructor === Object;
  }
  _isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  _isBoolean(value) {
    return typeof value === "boolean";
  }
  objectToForm(obj) {
    const formData = FormDataFactory.createFormData();
    for (const [key, value] of Object.entries(obj)) {
      if (value && value.name && value.file) {
        formData.append(key, value.file, value.name);
      } else if (Array.isArray(value) || this._isObject(value) || this._isBoolean(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (!isnil(value)) {
        formData.append(key, value);
      }
    }
    return formData;
  }
  putForm(url, params) {
    const formData = this.objectToForm(params);
    return this.put(url, formData);
  }
  postForm(url, params) {
    const formData = this.objectToForm(params);
    return this.post(url, formData, {
      maxBodyLength: Infinity
    });
  }
  patchForm(url, params) {
    const formData = this.objectToForm(params);
    return this.patch(url, formData);
  }
  deleteForm(url, params) {
    return this.delete(url);
  }
  putBody(url, body) {
    return this.putForm(url, {
      body
    });
  }
  postBody(url, body) {
    return this.postForm(url, {
      body
    });
  }
  patchBody(url, body) {
    return this.patchForm(url, {
      body
    });
  }
  deleteBody(url, body) {
    return this.deleteForm(url, {
      body
    });
  }
  get(url, config) {
    return this.axios.get(url, config);
  }
  // get(...args) {
  //   return this.axios.get(...args)
  // }
  post(url, data, config) {
    return this.axios.post(url, data, config);
  }
  put(url, data, config) {
    return this.axios.put(url, data, config);
  }
  patch(url, data, config) {
    return this.axios.patch(url, data, config);
  }
  options(url, config) {
    return this.axios.options(url, config);
  }
  delete(url, config) {
    return this.axios.delete(url, config);
  }
  // post(...args) {
  //   return this.axios.post(...args)
  // }
  // put(...args) {
  //   return this.axios.put(...args)
  // }
  // delete(...args) {
  //   return this.axios.delete(...args)
  // }
  // options(...args) {
  //   return this.axios.options(...args)
  // }
  // patch(...args) {
  //   return this.axios.patch(...args)
  // }
}

exports.Session = Session;
//# sourceMappingURL=index.cjs.js.map
