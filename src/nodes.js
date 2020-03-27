const FormDataFactory = require('./form-data-factory')

module.exports = session => ({

	addablenodetypes(dataid) {
		return session.get(`/api/v1/nodes/${dataid}/addablenodetypes`)
	},

	uploadDocument(parent_id, name, file) {

		const url = '/api/v1/nodes'

		const body = {
			name,
			type: 144, // document
			parent_id
		}

		const formData = FormDataFactory.createFormData()
		formData.append('body', JSON.stringify(body))
		formData.append('file', file, name)

		if (FormDataFactory.isNode) {
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

})