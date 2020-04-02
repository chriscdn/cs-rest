const FormDataFactory = require('./form-data-factory')

const SubTypes = {
	FOLDER: 0,
	DOCUMENT: 144
}

module.exports = session => ({

	addablenodetypes(dataid) {
		return session.get(`/api/v1/nodes/${dataid}/addablenodetypes`)
	},

	async addDocument(parent_id, fileHandler, fileName = null) {

		const url = '/api/v1/nodes'

		const formData = FormDataFactory.createFormData()

		formData.append('type', SubTypes.DOCUMENT)
		formData.append('parent_id', parent_id)

		if (process.node) {
			// node.js

			const fsp = require('fs').promises
			const path = require('path')

			let f = await fsp.readFile(fileHandler)
			let name = fileName || path.basename(fileHandler)

			formData.append('file', f, name)
			formData.append('name', name)

			return session.post(url, formData.getBuffer(), { headers: formData.getHeaders() })

		} else {
			// browser

			let name = fileName || fileHandler.name

			formData.append('file', fileHandler, name)
			formData.append('name', name)

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

	addFolder(parent_id, name, params = {}) {
		return this.addItem(SubTypes.FOLDER, parent_id, name, params)
	},

	children(dataid, params = {}) {
		// https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
		return session.get(`/api/v2/nodes/${dataid}/nodes/`, { params })
	},

	delete(dataid) {
		return session.delete(`/api/v1/nodes/${dataid}/`)
	}

})