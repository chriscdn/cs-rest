import axios from 'axios';
import lodash from 'lodash.get';
import lodash$1 from 'lodash.isnil';
import sha1 from 'sha1';
import promiseSemaphore from '@chriscdn/promise-semaphore';

var formDataFactory = {
	createFormData() {
		 {
			return new FormData()
		}		
	}
};

function getInstance(baseURL) {

	const instance = axios.create({
		baseURL
	});

	instance.interceptors.response.use(response => {
		const otcsticket = lodash(response, 'headers.otcsticket');

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

	const username = lodash(options, 'username');
	const password = lodash(options, 'password');
	const otcsticket = lodash(options, 'otcsticket');

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

				let response =  await axios.post(`${options.baseURL}/api/v1/auth/`, formData);

				request.headers.common['OTCSTicket'] = lodash(response, 'data.ticket');

				return request
			}
		});
	} else {
		throw 'You must provide an otcsticket or username and password.'
	}

	return instance
}

var auth = axiosFactory;

const SubTypes = {
	FOLDER: 0,
	DOCUMENT: 144
};

var nodes = session => ({

	addablenodetypes(dataid) {
		return session.get(`api/v1/nodes/${dataid}/addablenodetypes`)
	},

	async addDocument(parent_id, fileHandler, fileName = null) {

		const url = 'api/v1/nodes';

		const formData = formDataFactory.createFormData();

		formData.append('type', SubTypes.DOCUMENT);
		formData.append('parent_id', parent_id);

		{
			// browser

			let name = fileName || fileHandler.name;

			formData.append('file', fileHandler, name);
			formData.append('name', name);

			return session.post(url, formData)
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
		return this.addItem(SubTypes.FOLDER, parent_id, name, params)
	},

	children(dataid, params = {}) {
		// https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
		return session.get(`api/v2/nodes/${dataid}/nodes`, { params })
	},

	delete(dataid) {
		return session.delete(`api/v1/nodes/${dataid}`)
	}

});

var workflow = session => ({

	start(map_id) {
		return this.draftprocesses(map_id)
			.then(response => lodash(response, 'data.results.draftprocess_id'))
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
			// browser
			// let name = fileName || fileHandler.name

			const params = {
				file: {
					file: fileHandler,
					name: fileHandler.name
				},
				...options
			};

			return session.postForm(url, params)

			// formData.append('file', fileHandler, name)
			// return session.post(url, formData)
		}
	},

	async list(dataid) {
		const url = `api/v1/nodes/${dataid}/versions`;
		return session.get(url)
	}

});

var webreports = session => ({

	run(dataid, params = {}) {
		const url = `api/v1/nodes/${dataid}/output`;
		return session.get(url, { params })
	}

});

const semaphore = new promiseSemaphore();

let getCache = {};

var Session_1 = class Session {

	constructor(options) {
		this.axios = auth(options);
	}

	get nodes() {
		// this creates a circular reference.. bad?
		if (this._nodes == null) {
			this._nodes = nodes(this);
		}

		return this._nodes
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
			} else if (!lodash$1(value)) {
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
		const key = sha1(JSON.stringify(args));

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
		return  this.put(url, formData)
	}

	postForm(url, params) {
		const formData = this._objectToForm(params);
		return  this.post(url, formData)
	}

	patchForm(url, params) {
		const formData = this._objectToForm(params);
		return  this.patch(url, formData)
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

var auth_1 = auth;
var Session_1$1 = Session_1;

var src = {
	auth: auth_1,
	Session: Session_1$1
};

export default src;
export { Session_1$1 as Session, auth_1 as auth };
//# sourceMappingURL=index.es.js.map
