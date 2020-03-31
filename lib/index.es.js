import axios from 'axios';
import lodash from 'lodash.get';

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
		let otcsticket = lodash(response, 'headers.otcsticket');

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

var nodes = session => ({

	addablenodetypes(dataid) {
		return session.get(`/api/v1/nodes/${dataid}/addablenodetypes`)
	},

	uploadDocument(parent_id, name, file) {

		const url = '/api/v1/nodes';

		const body = {
			name,
			type: 144, // document
			parent_id
		};

		const formData = formDataFactory.createFormData();
		formData.append('body', JSON.stringify(body));
		formData.append('file', file, name);

		if (formDataFactory.isNode) {
			// node.js
			// file = fs.readFileSync('C:/lorem.pdf')
			return session.post(url, formData.getBuffer(), { headers: formData.getHeaders() })
		} else {
			// browser
			return session.post(url, formData)
		}
	},

	addItem(type, parent_id, name, more = {}) {
		return session.postForm('api/v2/nodes', {
			type,
			parent_id,
			name,
			...more
		})
	},

	addFolder(parent_id, name, more = {}) {
		return this.addItem(0, parent_id, name, more)
	},

	children(dataid, params = {}) {
		// https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
		return session.get(`/api/v1/nodes/${dataid}/nodes/`, {}, {
			params
		})
	},

	delete(dataid) {
		return session.delete(`/api/v1/nodes/${dataid}/`)
	}

});

var workflow = session => ({

	start(map_id) {
		return this.draftprocesses(map_id)
			.then(response => lodash(response, 'data.results.draftprocess_id'))
			.then(draftprocess_id => this.draftprocesses_update(draftprocess_id))
	},

	draftprocesses(workflow_id) {
		return session.postForm('/api/v2/draftprocesses', {workflow_id})
		/*
		
		 return session.post('/api/v2/draftprocesses', {}, {
			params: {
				workflow_id
			}
		})
		*/
	},

	draftprocesses_update(draftprocess_id) {
		return session.get('/api/v1/forms/draftprocesses/update', {
			params: {
				draftprocess_id
			}
		})
	},

	draftprocesses_put(draftprocess_id, body) {
		return session.putForm(`/api/v2/draftprocesses/${draftprocess_id}`, { body })
	},

	draftprocesses_formUpdate(draftprocess_id, values) {
		// : {"WorkflowForm_2":"adsfasdf"}
		const body = {
			action: "formUpdate",
			values
		};

		return this.draftprocesses_put(draftprocess_id, body)
	},


	// async start(map_id) {
	// 	debugger
	// 	// this API is inconsistent with above
	// 	let response = await this.draftprocesses(map_id)

	// 	let draftprocess_id = get(response, 'data.results.draftprocess_id')

	// 	response = await this.draftprocesses_update(draftprocess_id)

	// 	return response.data

	// }




});

var rhcore = session => ({
	scriptNode(id, params = {}) {
		return session.get(`/api/v1/rhcore/${id}`, {
			params
		})
	}
});

var members = session => ({

	USER: 0,
	GROUP: 1,

	// https://developer.opentext.com/awd/resources/apis/cs-rest-api-for-cs-16-s#!/members/SearchMember_get_1
	userQuery(query, options = {}) {
		const params = {
			limit: 20,
			where_type: [this.USER, this.GROUP],
			query,
			...options
		};

		return session.get(`/api/v2/members`, {params})
	},

	member(id) {
		return session.get(`/api/v2/members/${id}`)
	}

});

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

	_isObject(value) {
		return value && typeof value === 'object' && value.constructor === Object
	}

	_objectToForm(obj) {

		const formData = formDataFactory.createFormData();

		for (let [key, value] of Object.entries(obj)) {
			if (Array.isArray(value) || this._isObject(value)) {
				formData.append(key, JSON.stringify(value));
			} else {
				formData.append(key, value);
			}
		}

		return formData
	}

	get(...args) {
		return this.axios.get(...args)
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

var src = {auth, Session: Session_1};
var src_1 = src.auth;
var src_2 = src.Session;

export default src;
export { src_2 as Session, src_1 as auth };
//# sourceMappingURL=index.es.js.map
