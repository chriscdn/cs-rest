const FormDataFactory = require('./form-data-factory')
const assert = require('assert')

module.exports = session => ({

	async addVersion({
		dataid,
		fileHandler,
		apiVersion = 'v1',
		fileName = null,
		options = {}
	}) {

		assert(dataid != null, 'dataid cannot be null')
		assert(fileHandler != null, 'fileHandler cannot be null')

		const url = `api/${apiVersion}/nodes/${dataid}/versions`

		if (process.node) {
			// node.js
			const fsp = require('fs').promises
			const path = require('path')

			const f = await fsp.readFile(fileHandler)
			const name = fileName || path.basename(fileHandler)

			const params = {
				file: {
					file: f,
					name
				},
				...options
			}

			// console.log(params)

			return session.postForm(url, params)

		} else {
			// browser
			const name = fileName || fileHandler.name

			const params = {
				file: {
					file: fileHandler,
					name
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

	async version(dataid, version_number = 'latest') {
		// latest not supported in v2
		const url = `api/v1/nodes/${dataid}/versions/${version_number}`
		return session.get(url)
	},

	async promote({
		dataid,
		versionNumber,
		description = null
	}) {
		assert(dataid != null, 'dataid cannot be null')
		assert(versionNumber != null, 'number_to_keep must be an integer')

		const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`

		return session.postBody(url, {
			description
		})
	},

	async deleteVersion({
		dataid,
		versionNumber,
		apiVersion = 'v1',
	}) {
		assert(dataid != null, 'dataid cannot be null')
		assert(versionNumber != null, 'number_to_keep must be an integer')

		const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`

		return session.delete(url, {})
	},

	async purge({
		dataid,
		number_to_keep = 1
	}) {
		assert(dataid != null, 'dataid cannot be null')
		assert(!isNaN(number_to_keep), 'number_to_keep must be an integer')

		const url = `api/v2/nodes/${dataid}/versions`

		return session.delete(url, {
			number_to_keep
		})
	}

})