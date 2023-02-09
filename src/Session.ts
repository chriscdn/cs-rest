import dataTypesEnum from './data-types-enum.json' // assert { type: 'json' }

// const dataTypesEnum = {}
import FormDataFactory from './handlers/form-data-factory'
import axiosFactory from './axios-factory'

import auth from './handlers/auth.js'
import nodes from './handlers/nodes'
import workflow from './handlers/workflow'
import rhcore from './handlers/rhcore'
import search from './handlers/search'
import members from './handlers/members'
import versions from './handlers/versions'
import webreports from './handlers/webreports'

import isnil from 'lodash.isnil'
import RPCClient from './rpc-client/index'

// const FormDataFactory = require('./handlers/form-data-factory')
export default class Session {
  axios: any
  _nodes: any
  _auth: any
  _workflow: any
  _rhcore: any
  _members: any
  _search: any
  _webreports: any
  _versions: any

  constructor(options) {
    this.axios = axiosFactory(options)
  }

  get nodes() {
    // this creates a circular reference.. bad?
    if (this._nodes == null) {
      this._nodes = nodes(this)
    }

    return this._nodes
  }

  get auth() {
    if (this._auth == null) {
      this._auth = auth(this)
    }

    return this._auth
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

  get search() {
    // this creates a circular reference.. bad?
    if (this._search == null) {
      this._search = search(this)
    }

    return this._search
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

  get dataTypesEnum() {
    return dataTypesEnum
  }

  rpcClient(baseURL = '/api/v1/rh/rpc/rhnode/') {
    return new RPCClient(this, baseURL)
  }

  _isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object
  }

  _isString(value) {
    return typeof value === 'string' || value instanceof String
  }

  _isBoolean(value): boolean {
    return typeof value === 'boolean'
  }

  objectToForm(obj: Record<string, any>) {
    const formData = FormDataFactory.createFormData()

    for (const [key, value] of Object.entries(obj)) {
      if (value && value.name && value.file) {
        formData.append(key, value.file, value.name)
      } else if (
        Array.isArray(value) ||
        this._isObject(value) ||
        this._isBoolean(value)
      ) {
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

  putForm(url, params) {
    const formData = this.objectToForm(params)
    return process.node
      ? this.put(url, formData.getBuffer(), {
          headers: formData.getHeaders(),
        })
      : this.put(url, formData)
  }

  postForm(url, params) {
    const formData = this.objectToForm(params)
    return process.node
      ? this.post(url, formData.getBuffer(), {
          headers: formData.getHeaders(),
          maxBodyLength: Infinity,
        })
      : this.post(url, formData, {
          maxBodyLength: Infinity,
        })
  }

  patchForm(url, params) {
    const formData = this.objectToForm(params)
    return process.node
      ? this.patch(url, formData.getBuffer(), {
          headers: formData.getHeaders(),
        })
      : this.patch(url, formData)
  }

  deleteForm(url, params) {
    // FormData does not working on Delete!!
    // See here: https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
    const formData = this.objectToForm(params)
    return process.node
      ? this.delete(url, formData.getBuffer(), {
          headers: formData.getHeaders(),
        })
      : this.delete(url, formData)
  }

  putBody(url, body) {
    return this.putForm(url, {
      body,
    })
  }

  postBody(url, body) {
    return this.postForm(url, {
      body,
    })
  }

  patchBody(url, body) {
    return this.patchForm(url, {
      body,
    })
  }

  deleteBody(url, body) {
    return this.deleteForm(url, {
      body,
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
}
