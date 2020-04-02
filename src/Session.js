const auth = require('./auth')
const nodes = require('./nodes')
const workflow = require('./workflow')
const rhcore = require('./rhcore')
const members = require('./members')
const versions = require('./versions')
const FormDataFactory = require('./form-data-factory')

module.exports = class Session {

	constructor(options) {
		this.axios = auth(options)
	}

	get nodes() {
		// this creates a circular reference.. bad?
		if (this._nodes == null) {
			this._nodes = nodes(this)
		}

		return this._nodes
	}

	get workflow() {
		// this creates a circular reference.. bad?
		if (this._workflow == null) {
			this._workflow = workflow(this)
		}

		return this._workflow
	}

	get rhcore() {
		// this creates a circular reference.. bad?
		if (this._rhcore == null) {
			this._rhcore = rhcore(this)
		}

		return this._rhcore
	}

	get members() {
		// this creates a circular reference.. bad?
		if (this._members == null) {
			this._members = members(this)
		}

		return this._members
	}

	get versions() {
		// this creates a circular reference.. bad?
		if (this._versions == null) {
			this._versions = versions(this)
		}

		return this._versions
	}

	_isObject(value) {
		return value && typeof value === 'object' && value.constructor === Object
	}

	_objectToForm(obj) {

		const formData = FormDataFactory.createFormData()

		for (let [key, value] of Object.entries(obj)) {
			if (Array.isArray(value) || this._isObject(value)) {
				formData.append(key, JSON.stringify(value))
			} else {
				formData.append(key, value)
			}
		}

		return formData
	}

	get(...args) {
		return this.axios.get(...args)
	}

	putForm(url, params) {
		const formData = this._objectToForm(params)
		return process.node ? this.put(url, formData.getBuffer(), { headers: formData.getHeaders() }) : this.put(url, formData)
	}

	postForm(url, params) {
		const formData = this._objectToForm(params)
		return process.node ? this.post(url, formData.getBuffer(), { headers: formData.getHeaders() }) : this.post(url, formData)
	}

	patchForm(url, params) {
		const formData = this._objectToForm(params)
		return process.node ? this.patch(url, formData.getBuffer(), { headers: formData.getHeaders() }) : this.patch(url, formData)
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

}