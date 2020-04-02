const FormDataFactory = require('./form-data-factory')

module.exports = session => ({

	async addVersion(dataid, fileHandler, fileName = null) {

		const url = `/api/v1/nodes/${dataid}/versions`

		const formData = FormDataFactory.createFormData()

		if (process.node) {
			// node.js
			const fsp = require('fs').promises
			const path = require('path')

			let f = await fsp.readFile(fileHandler)
			let name = fileName || path.basename(fileHandler)

			formData.append('file', f, name)
			// formData.append('name', name)

			return session.post(url, formData.getBuffer(), { headers: formData.getHeaders() })

		} else {
			// browser
			// 

			let name = fileName || fileHandler.name

			formData.append('file', fileHandler, name)
			// formData.append('name', fileHandler.name)
			return session.post(url, formData)
		}
	},

})