const FormDataFactory = require('./form-data-factory')

module.exports = session => ({

	async addVersion(dataid, fileHandler, options = {}) {

		const url = `api/v1/nodes/${dataid}/versions`

		// const formData = FormDataFactory.createFormData()

		if (process.node) {
			// node.js
			const fsp = require('fs').promises
			const path = require('path')

			let f = await fsp.readFile(fileHandler)
			// let name = fileName || path.basename(fileHandler)

			const params = {
				file: {
					file: f,
					name: path.basename(fileHandler)
				},
				...options
			}

			// console.log(params)

			return session.postForm(url, params)

		} else {
			// browser
			// let name = fileName || fileHandler.name

			const params = {
				file: {
					file: fileHandler,
					name: fileHandler.name
				},
				...options
			}

			return session.postForm(url, params)

			// formData.append('file', fileHandler, name)
			// return session.post(url, formData)
		}
	},

	async list(dataid) {
		const url = `api/v1/nodes/${dataid}/versions`
		return session.get(url)
	},

	async version(dataid, version_number='latest') {
		// latest not supported in v2
		const url = `api/v1/nodes/${dataid}/versions/${version_number}`
		return session.get(url)
	}

})