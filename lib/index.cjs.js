'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var get = require('lodash.get');
var require$$0 = require('form-data');
var require$$0$1 = require('fs');
var require$$1 = require('path');
var isnil = require('lodash.isnil');
var sha1 = require('sha1');
var Semaphore = require('@chriscdn/promise-semaphore');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var isnil__default = /*#__PURE__*/_interopDefaultLegacy(isnil);
var sha1__default = /*#__PURE__*/_interopDefaultLegacy(sha1);
var Semaphore__default = /*#__PURE__*/_interopDefaultLegacy(Semaphore);

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

				const response =  await axios__default['default'].post(`${options.baseURL}/api/v1/auth/`, formData.getBuffer(), { headers: formData.getHeaders() }) ;

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

const SubTypes = {
	Folder: 0,
	Generation: 2,
	Document: 144
};

var nodes = session => ({

	addablenodetypes(dataid) {
		return session.get(`api/v1/nodes/${dataid}/addablenodetypes`)
	},

	async addDocument(parent_id, fileHandler, fileName = null) {

		const url = 'api/v1/nodes';

		const formData = formDataFactory.createFormData();

		formData.append('type', SubTypes.Document);
		formData.append('parent_id', parent_id);

		{
			// node.js

			const fsp = require$$0__default$1['default'].promises;
			const path = require$$1__default['default'];

			let f = await fsp.readFile(fileHandler);
			let name = fileName || path.basename(fileHandler);

			formData.append('file', f, name);
			formData.append('name', name);

			return session.post(url, formData.getBuffer(), { headers: formData.getHeaders() })

		}
	},

	addItem(type, parent_id, name, params = {}) {
		return session.postForm('api/v2/nodes', {
			type,
			parent_id,
			name,
			...params
		})
	},

	node(dataid, params = {}) {
		return session.getCached(`api/v2/nodes/${dataid}`, { params })
	},

	ancestors(dataid, params = {}) {
		return session.get(`api/v1/nodes/${dataid}/ancestors`, { params })
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
		return session.get(`api/v2/nodes/${dataid}/nodes`, { params })
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
			return session.get(`api/${version}/nodes/${dataid}/content`, { responseType: 'stream' })
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

var workflow = session => ({

	start(map_id) {
		return this.draftprocesses(map_id)
			.then(response => get__default['default'](response, 'data.results.draftprocess_id'))
			.then(draftprocess_id => this.draftprocesses_update(draftprocess_id))
	},

	draftprocesses(workflow_id) {
		return session.postForm('api/v2/draftprocesses', {workflow_id})
	},

	draftprocesses_update(draftprocess_id) {
		return session.get('api/v1/forms/draftprocesses/update', {
			params: {
				draftprocess_id
			}
		})
	},

	draftprocesses_put(draftprocess_id, body) {
		return session.putForm(`api/v2/draftprocesses/${draftprocess_id}`, { body })
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
		return session.getCached(`api/${version}/members/${id}`)
	}

});

var versions = session => ({

	async addVersion(dataid, fileHandler, options = {}) {

		const url = `api/v1/nodes/${dataid}/versions`;

		// const formData = FormDataFactory.createFormData()

		{
			// node.js
			const fsp = require$$0__default$1['default'].promises;
			const path = require$$1__default['default'];

			let f = await fsp.readFile(fileHandler);
			// let name = fileName || path.basename(fileHandler)

			const params = {
				file: {
					file: f,
					name: path.basename(fileHandler)
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

	async version(dataid, version_number='latest') {
		// latest not supported in v2
		const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
		return session.get(url)
	}

});

var webreports = session => ({

	run(dataid, params = {}) {
		const url = `api/v1/nodes/${dataid}/output`;
		return session.get(url, { params })
	}

});

const semaphore = new Semaphore__default['default']();

let getCache = {};

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

	_isObject(value) {
		return value && typeof value === 'object' && value.constructor === Object
	}

	_objectToForm(obj) {

		const formData = formDataFactory.createFormData();

		for (let [key, value] of Object.entries(obj)) {
			if (value && value.name && value.file) {
				formData.append(key, value.file, value.name);
			} else if (Array.isArray(value) || this._isObject(value)) {
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

	async getCached(...args) {
		const key = sha1__default['default'](JSON.stringify(args));

		try {
			await semaphore.acquire(key);

			if (!getCache[key]) {
				getCache[key] = this.get(...args);
			}
		} finally {
			semaphore.release(key);
		}

		return getCache[key]
	}

	putForm(url, params) {
		const formData = this._objectToForm(params);
		return  this.put(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) 
	}

	postForm(url, params) {
		const formData = this._objectToForm(params);
		return  this.post(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) 
	}

	patchForm(url, params) {
		const formData = this._objectToForm(params);
		return  this.patch(url, formData.getBuffer(), {
			headers: formData.getHeaders()
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
