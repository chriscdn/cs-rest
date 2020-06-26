const auth = require('./auth')
const nodes = require('./handlers/nodes')
const workflow = require('./handlers/workflow')
const rhcore = require('./handlers/rhcore')
const members = require('./handlers/members')
const versions = require('./handlers/versions')
const webreports = require('./handlers/webreports')
const FormDataFactory = require('./handlers/form-data-factory')
const isnil = require('lodash.isnil')

const sha1 = require('sha1')

const Semaphore = require('@chriscdn/promise-semaphore')
const semaphore = new Semaphore()

let getCache = {}

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

	get webreports() {
		// this creates a circular reference.. bad?
		if (this._webreports == null) {
			this._webreports = webreports(this)
		}

		return this._webreports
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
			if (value && value.name && value.file) {
				formData.append(key, value.file, value.name)
			} else if (Array.isArray(value) || this._isObject(value)) {
				formData.append(key, JSON.stringify(value))
			} else if (!isnil(value)) {
				// should empty strings be sent?
				formData.append(key, value)
			}
		}

		return formData
	}

	get(...args) {
		return this.axios.get(...args)
	}

	async getCached(...args) {
		const key = sha1(JSON.stringify(args))

		try {
			await semaphore.acquire(key)

			if (!getCache[key]) {
				getCache[key] = this.get(...args)
			}
		} finally {
			semaphore.release(key)
		}

		return getCache[key]
	}

	putForm(url, params) {
		const formData = this._objectToForm(params)
		return process.node ? this.put(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) : this.put(url, formData)
	}

	postForm(url, params) {
		const formData = this._objectToForm(params)
		return process.node ? this.post(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) : this.post(url, formData)
	}

	patchForm(url, params) {
		const formData = this._objectToForm(params)
		return process.node ? this.patch(url, formData.getBuffer(), {
			headers: formData.getHeaders()
		}) : this.patch(url, formData)
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