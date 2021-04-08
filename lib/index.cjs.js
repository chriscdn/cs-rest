'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var get$1 = require('lodash.get');
var require$$0 = require('form-data');
var assert = require('assert');
var require$$0$1 = require('fs');
var require$$1 = require('path');
var isnil = require('lodash.isnil');
var isObject = require('is-object');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get$1);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var isnil__default = /*#__PURE__*/_interopDefaultLegacy(isnil);
var isObject__default = /*#__PURE__*/_interopDefaultLegacy(isObject);

var formDataFactory = {
	createFormData() {
		 {
			const klass = require$$0__default['default'];
			return new klass
		}		
	}
};

function getInstance(baseURL) {

	const instance = axios__default['default'].create({
		baseURL
	});

	instance.interceptors.response.use(response => {
		const otcsticket = get__default['default'](response, 'headers.otcsticket');

		if (otcsticket) {
			instance.defaults.headers.common['OTCSTicket'] = otcsticket;
		}
		return response
	}, error => {
		return Promise.reject(error)
	});

	return instance
}

function axiosFactory(options) {
	const instance = getInstance(options.baseURL);

	const username = get__default['default'](options, 'username');
	const password = get__default['default'](options, 'password');
	const otcsticket = get__default['default'](options, 'otcsticket');

	if (otcsticket) {

		instance.defaults.headers.common['OTCSTicket'] = otcsticket;

	} else if (username && password) {

		instance.interceptors.request.use(async request => {

			if (request.headers.common['OTCSTicket']) {

				return request

			} else {

				const formData = formDataFactory.createFormData();

				formData.append('username', username);
				formData.append('password', password);

				const response = await axios__default['default'].post(`${options.baseURL}/api/v1/auth/`, formData.getBuffer(), { headers: formData.getHeaders() }) ;

				request.headers.common['OTCSTicket'] = get__default['default'](response, 'data.ticket');

				return request
			}
		});
	} else {
		throw 'You must provide an otcsticket or username and password.'
	}

	return instance
}

var axiosFactory_1 = axiosFactory;

// const FormDataFactory = require('./form-data-factory')

var auth = session => ({
	auth() {
		return session.get('/api/v1/auth/')
	}
});

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
var WebReports = 30303;
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
	WebReports: WebReports,
	WFMapLLNode: WFMapLLNode,
	WFStatusNode: WFStatusNode,
	WIKI: WIKI,
	WIKIPAGE: WIKIPAGE,
	Workbench: Workbench,
	WorkflowAttachments: WorkflowAttachments,
	XMLActivatorCon: XMLActivatorCon,
	XMLActivatorProd: XMLActivatorProd
};

var nodes = session => ({

	addablenodetypes(dataid) {
		return session.get(`api/v1/nodes/${dataid}/addablenodetypes`)
	},

	async addDocument({
		parent_id,
		fileHandler,
		apiVersion = 'v1', // v1 or v2
		name = null,
		options = {}
	}) {
		assert__default['default'](parent_id != null, 'parent_id cannot be null');
		assert__default['default'](fileHandler != null, 'fileHandler cannot be null');
		assert__default['default'](['v1', 'v2'].includes(apiVersion), "apiVersion must be in ['v1','v2']");

		const url = `api/${apiVersion}/nodes`;

		{
			// node.js
			const fsp = require$$0__default$1['default'].promises;
			const path = require$$1__default['default'];

			const f = await fsp.readFile(fileHandler);
			const csName = name || path.basename(fileHandler);

			const params = {
				...options,
				type: SubTypes.Document,
				name: csName,
				parent_id,
				file: {
					file: f,
					name: csName
				},
			};

			return session.postForm(url, params)

		}
	},

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

		await session.versions.promote({
			dataid,
			versionNumber: 1,
			description
		});

		await session.versions.deleteVersion({
			dataid,
			versionNumber: 1
		});

		return response
	},

	addItem(type, parent_id, name, params = {}) {
		return session.postBody('api/v2/nodes', {
			type,
			parent_id,
			name,
			...params
		})
	},

	node(dataid, params = {}) {
		return session.get(`api/v2/nodes/${dataid}`, {
			params
		})
	},

	ancestors(dataid, params = {}) {
		return session.get(`api/v1/nodes/${dataid}/ancestors`, {
			params
		})
	},

	volumeInfo(objType) {
		return session.get(`api/v1/volumes/${objType}`)
	},

	volumes() {
		return session.get('api/v2/volumes')
	},

	addFolder(parent_id, name, params = {}) {
		return this.addItem(SubTypes.Folder, parent_id, name, params)
	},

	addGeneration(parent_id, name, original_id, version_number, params = {}) {
		return this.addItem(SubTypes.Generation, parent_id, name, {
			original_id,
			version_number,
			...params
		})
	},

	nodes(dataid, params = {}) {
		// https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
		return session.get(`api/v2/nodes/${dataid}/nodes`, {
			params
		})
	},

	children(dataid, params = {}) {
		return this.nodes(dataid, params)
	},

	delete(dataid) {
		return session.delete(`api/v1/nodes/${dataid}`)
	},

	download(dataid, version = 'v1', filePath) {
		// session.nodes.download(1267501, 'v2', '/Users/chris/Downloads/test.pdf')
		{
			return session.get(`api/${version}/nodes/${dataid}/content`, {
					responseType: 'stream'
				})
				.then(response => {
					const fs = require$$0__default$1['default'];
					const writer = fs.createWriteStream(filePath);

					response.data.pipe(writer);

					return new Promise((resolve, reject) => {
						writer.on('finish', resolve);
						writer.on('error', reject);
					})
				})
		}
	}

});

// const get = require('lodash.get')

var workflow = session => ({

	start(map_id) {
		return this.draftprocesses(map_id)
			.then(response => get(response, 'data.results.draftprocess_id'))
			.then(draftprocess_id => this.draftprocesses_update(draftprocess_id))
	},

	draftprocesses(workflow_id) {
		return session.postForm('api/v2/draftprocesses', {
			workflow_id
		})
	},

	draftprocesses_update(draftprocess_id) {
		return session.get('api/v1/forms/draftprocesses/update', {
			params: {
				draftprocess_id
			}
		})
	},

	draftprocesses_put(draftprocess_id, body) {
		return session.putForm(`api/v2/draftprocesses/${draftprocess_id}`, {
			body
		})
	}

	// draftprocesses_formUpdate(draftprocess_id, values) {
	// 	const body = {
	// 		action: "formUpdate",
	// 		values
	// 	}

	// 	return this.draftprocesses_put(draftprocess_id, body)
	// }

});

var rhcore = session => ({
	scriptNode(id, params = {}) {
		return session.get(`api/v1/rhcore/${id}`, {
			params
		})
	}
});

var search = session => ({

	// https://knowledge.opentext.com/knowledge/cs.dll/Open/67789539

	search(where, params = {}) {
		return session.postBody(`api/v2/search`, {
			where,
			...params
		})
	},

	regions(params = {}) {
		return session.get(`api/v1/regions`, params)
	}

});

var members = session => ({

	USER: 0,
	GROUP: 1,

	userQuery(query, options = {}, version = 'v2') {
		const params = {
			limit: 20,
			where_type: JSON.stringify([this.USER, this.GROUP]),
			query,
			...options
		};

		return session.get(`api/${version}/members`, { params })
	},

	member(id, version = 'v2') {
		return session.get(`api/${version}/members/${id}`)
	}

});

var versions = session => ({

	async addVersion({
		dataid,
		fileHandler,
		apiVersion = 'v1',
		fileName = null,
		options = {}
	}) {

		assert__default['default'](dataid != null, 'dataid cannot be null');
		assert__default['default'](fileHandler != null, 'fileHandler cannot be null');

		const url = `api/${apiVersion}/nodes/${dataid}/versions`;

		{
			// node.js
			const fsp = require$$0__default$1['default'].promises;
			const path = require$$1__default['default'];

			const f = await fsp.readFile(fileHandler);
			const name = fileName || path.basename(fileHandler);

			const params = {
				file: {
					file: f,
					name
				},
				...options
			};

			// console.log(params)

			return session.postForm(url, params)

		}
	},

	async list(dataid) {
		const url = `api/v1/nodes/${dataid}/versions`;
		return session.get(url)
	},

	async version(dataid, version_number = 'latest') {
		// latest not supported in v2
		const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
		return session.get(url)
	},

	async promote({
		dataid,
		versionNumber,
		description = null
	}) {
		assert__default['default'](dataid != null, 'dataid cannot be null');
		assert__default['default'](versionNumber != null, 'number_to_keep must be an integer');

		const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;

		return session.postBody(url, {
			...(!!description && {
				description
			}),
		})
	},

	async deleteVersion({
		dataid,
		versionNumber,
		apiVersion = 'v1',
	}) {
		assert__default['default'](dataid != null, 'dataid cannot be null');
		assert__default['default'](versionNumber != null, 'number_to_keep must be an integer');

		const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`;

		// careful with deleteForm or deleteBody
		return session.delete(url)
	},

	async purge({
		dataid,
		number_to_keep = 1
	}) {
		assert__default['default'](dataid != null, 'dataid cannot be null');
		assert__default['default'](!isNaN(number_to_keep), 'number_to_keep must be an integer');

		// delete parameters not supported
		// https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
		// number_to_keep is ignored

		const url = `api/v2/nodes/${dataid}/versions`;

		return session.deleteForm(url, {
			number_to_keep
		})
	}

});

var webreports = session => ({

	run(dataid, params = {}) {
		const url = `api/v1/nodes/${dataid}/output`;
		return session.get(url, { params })
	}

});

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

// -32000 to -32099 is reserved!

class CustomError extends Error {
	constructor(message = ErrorCodes.INTERNALERROR.message, data = null, code = ErrorCodes.INTERNALERROR.code) {

		if (isObject__default['default'](message)) {
			super(message.message);
			this.code = message.code;
			this.data = message.data;
		} else {
			super(message);
			this.code = code;
			this.data = data;
		}
	}
}

var errorCodes = {
	CustomError,
	ErrorCodes
};

const {
	CustomError: CustomError$1,
	ErrorCodes: ErrorCodes$1
} = errorCodes;



// to be tested...
const sequence = {
	index: 0,
	get next() {
		this.index = this.index + 1;
		return this.index
	}
};

var rpcClient = class RPCClient {

	constructor(session, baseURL) {
		this.session = session;
		this.baseURL = baseURL;
		this.resetQueue();
	}

	requestObject(method, params, id) {
		return {
			jsonrpc: '2.0',
			method,
			id,
			params
		}
	}

	handleResponse(data) {
		if (data.hasOwnProperty('result')) {
			return data.result
		} else if (data.hasOwnProperty('error')) {
			const err = data.error;
			throw new CustomError$1(err.message, err.data, err.code)
		} else {
			throw new Error('The server did not respond correctly.')
		}
	}

	async request(method, params = {}, id = sequence.next) {
		const response = await this.session.postBody(this.baseURL, {
			rpc: this.requestObject(method, params, id)
		});
		return this.handleResponse(response.data)
	}

	resetQueue() {
		this._batchQueue = [];
	}

	queue(method, params = {}, id = sequence.next) {
		this._batchQueue.push(this.requestObject(method, params, id));
		return this
	}

	async batch() {
		const queue = this._batchQueue;
		this.resetQueue();
		const response = await this.session.postBody(this.baseURL, {
			rpc: queue
		});

		// data.data is a content server thing
		return get__default['default'](response, 'data.data', []).map(item => this.handleResponse(item))
	}

	rhnode(dataid, method, args = [], id = sequence.next) {
		const params = {
			dataid,
			args
		};

		return this.request(method, params, id)
	}

	rhnodeQueue(dataid, method, args = [], id = sequence.next) {
		const params = {
			dataid,
			args
		};

		return this.queue(method, params, id)
	}
};

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

// let getCache = {}

var Session_1 = class Session {

	constructor(options) {
		this.axios = axiosFactory_1(options);
	}

	get nodes() {
		// this creates a circular reference.. bad?
		if (this._nodes == null) {
			this._nodes = nodes(this);
		}

		return this._nodes
	}

	get auth() {
		if (this._auth == null) {
			this._auth = auth(this);
		}

		return this._auth
	}

	get workflow() {
		// this creates a circular reference.. bad?
		if (this._workflow == null) {
			this._workflow = workflow(this);
		}

		return this._workflow
	}

	get rhcore() {
		// this creates a circular reference.. bad?
		if (this._rhcore == null) {
			this._rhcore = rhcore(this);
		}

		return this._rhcore
	}

	get members() {
		// this creates a circular reference.. bad?
		if (this._members == null) {
			this._members = members(this);
		}

		return this._members
	}

	get search() {
		// this creates a circular reference.. bad?
		if (this._search == null) {
			this._search = search(this);
		}

		return this._search
	}

	get webreports() {
		// this creates a circular reference.. bad?
		if (this._webreports == null) {
			this._webreports = webreports(this);
		}

		return this._webreports
	}

	get versions() {
		// this creates a circular reference.. bad?
		if (this._versions == null) {
			this._versions = versions(this);
		}

		return this._versions
	}

	get dataTypesEnum() {
		return dataTypesEnum
	}

	rpcClient(baseURL = '/api/v1/rh/rpc/rhnode/') {
		return new rpcClient(this, baseURL)
	}

	_isObject(value) {
		return value && typeof value === 'object' && value.constructor === Object
	}

	_isString(value) {
		return (typeof value === 'string' || value instanceof String)
	}

	_isBoolean(value) {
		return (typeof value === "boolean")
	}

	objectToForm(obj) {

		const formData = formDataFactory.createFormData();

		for (let [key, value] of Object.entries(obj)) {
			if (value && value.name && value.file) {
				formData.append(key, value.file, value.name);
			} else if (Array.isArray(value) || this._isObject(value) || this._isBoolean(value)) {
				formData.append(key, JSON.stringify(value));
			} else if (!isnil__default['default'](value)) {
				// should empty strings be sent?
				formData.append(key, value);
			}
		}

		return formData
	}

	get(...args) {
		return this.axios.get(...args)
	}

	// async getCached(...args) {
	// 	const key = sha1(JSON.stringify(args))

	// 	try {
	// 		await semaphore.acquire(key)

	// 		if (!getCache[key]) {
	// 			getCache[key] = this.get(...args)
	// 		}
	// 	} finally {
	// 		semaphore.release(key)
	// 	}

	// 	return getCache[key]
	// }

	putForm(url, params) {
		const formData = this.objectToForm(params);
		return this.put(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) 
	}

	postForm(url, params) {
		const formData = this.objectToForm(params);
		return this.post(url, formData.getBuffer(), {
				headers: formData.getHeaders(),
				maxBodyLength: Infinity
			}) 
	}

	patchForm(url, params) {
		const formData = this.objectToForm(params);
		return this.patch(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) 
	}

	deleteForm(url, params) {
		// FormData does not working on Delete!!
		// See here: https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
		const formData = this.objectToForm(params);
		return this.delete(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) 
	}

	putBody(url, body) {
		return this.putForm(url, {
			body
		})
	}

	postBody(url, body) {
		return this.postForm(url, {
			body
		})
	}

	patchBody(url, body) {
		return this.patchForm(url, {
			body
		})
	}

	deleteBody(url, body) {
		return this.deleteForm(url, {
			body
		})
	}

	post(...args) {
		return this.axios.post(...args)
	}

	put(...args) {
		return this.axios.put(...args)
	}

	delete(...args) {
		return this.axios.delete(...args)

		// console.log(args)
		// console.log(url)

		// return this.axios.delete(URL, {
		// 	headers: {
		// 		Authorization: authorizationToken
		// 	},
		// 	data: {
		// 		source: source
		// 	}
		// });
	}

	options(...args) {
		return this.axios.options(...args)
	}

	patch(...args) {
		return this.axios.patch(...args)
	}

};

var Session_1$1 = Session_1;

var src = {
	Session: Session_1$1
};

exports.Session = Session_1$1;
exports.default = src;
//# sourceMappingURL=index.cjs.js.map
