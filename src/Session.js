const axiosFactory = require('./axios-factory')
const auth = require('./handlers/auth.js')
const nodes = require('./handlers/nodes')
const workflow = require('./handlers/workflow')
const rhcore = require('./handlers/rhcore')
const search = require('./handlers/search')
const members = require('./handlers/members')
const versions = require('./handlers/versions')
const webreports = require('./handlers/webreports')
const FormDataFactory = require('./handlers/form-data-factory')
const isnil = require('lodash.isnil')
const RPCClient = require('./rpc-client')
const dataTypesEnum = require('./data-types-enum.json')

// let getCache = {}

module.exports = class Session {
  constructor (options) {
    this.axios = axiosFactory(options)
  }

  get nodes () {
    // this creates a circular reference.. bad?
    if (this._nodes == null) {
      this._nodes = nodes(this)
    }

    return this._nodes
  }

  get auth () {
    if (this._auth == null) {
      this._auth = auth(this)
    }

    return this._auth
  }

  get workflow () {
    // this creates a circular reference.. bad?
    if (this._workflow == null) {
      this._workflow = workflow(this)
    }

    return this._workflow
  }

  get rhcore () {
    // this creates a circular reference.. bad?
    if (this._rhcore == null) {
      this._rhcore = rhcore(this)
    }

    return this._rhcore
  }

  get members () {
    // this creates a circular reference.. bad?
    if (this._members == null) {
      this._members = members(this)
    }

    return this._members
  }

  get search () {
    // this creates a circular reference.. bad?
    if (this._search == null) {
      this._search = search(this)
    }

    return this._search
  }

  get webreports () {
    // this creates a circular reference.. bad?
    if (this._webreports == null) {
      this._webreports = webreports(this)
    }

    return this._webreports
  }

  get versions () {
    // this creates a circular reference.. bad?
    if (this._versions == null) {
      this._versions = versions(this)
    }

    return this._versions
  }

  get dataTypesEnum () {
    return dataTypesEnum
  }

  rpcClient (baseURL = '/api/v1/rh/rpc/rhnode/') {
    return new RPCClient(this, baseURL)
  }

  _isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object
  }

  _isString (value) {
    return typeof value === 'string' || value instanceof String
  }

  _isBoolean (value) {
    return typeof value === 'boolean'
  }

  objectToForm (obj) {
    const formData = FormDataFactory.createFormData()

    for (const [key, value] of Object.entries(obj)) {
      if (value && value.name && value.file) {
        formData.append(key, value.file, value.name)
      } else if (Array.isArray(value) || this._isObject(value) || this._isBoolean(value)) {
        formData.append(key, JSON.stringify(value))
      } else if (!isnil(value)) {
        // should empty strings be sent?
        formData.append(key, value)
      }
    }

    return formData
  }

  get (...args) {
    return this.axios.get(...args)
  }

  /*
  // async getCached(...args) {
  // const key = sha1(JSON.stringify(args))

  // try {
  // await semaphore.acquire(key)

  // if (!getCache[key]) {
  // getCache[key] = this.get(...args)
  // }
  // } finally {
  // semaphore.release(key)
  // }

  // return getCache[key]
  // }
*/
  putForm (url, params) {
    const formData = this.objectToForm(params)
    return process.node
      ? this.put(url, formData.getBuffer(), {
        headers: formData.getHeaders()
      })
      : this.put(url, formData)
  }

  postForm (url, params) {
    const formData = this.objectToForm(params)
    return process.node
      ? this.post(url, formData.getBuffer(), {
        headers: formData.getHeaders(),
        maxBodyLength: Infinity
      })
      : this.post(url, formData, {
        maxBodyLength: Infinity
      })
  }

  patchForm (url, params) {
    const formData = this.objectToForm(params)
    return process.node
      ? this.patch(url, formData.getBuffer(), {
        headers: formData.getHeaders()
      })
      : this.patch(url, formData)
  }

  deleteForm (url, params) {
    // FormData does not working on Delete!!
    // See here: https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
    const formData = this.objectToForm(params)
    return process.node
      ? this.delete(url, formData.getBuffer(), {
        headers: formData.getHeaders()
      })
      : this.delete(url, formData)
  }

  putBody (url, body) {
    return this.putForm(url, {
      body
    })
  }

  postBody (url, body) {
    return this.postForm(url, {
      body
    })
  }

  patchBody (url, body) {
    return this.patchForm(url, {
      body
    })
  }

  deleteBody (url, body) {
    return this.deleteForm(url, {
      body
    })
  }

  post (...args) {
    return this.axios.post(...args)
  }

  put (...args) {
    return this.axios.put(...args)
  }

  delete (...args) {
    return this.axios.delete(...args)

    // console.log(args)
    // console.log(url)

    // return this.axios.delete(URL, {
    // headers: {
    // Authorization: authorizationToken
    // },
    // data: {
    // source: source
    // }
    // });
  }

  options (...args) {
    return this.axios.options(...args)
  }

  patch (...args) {
    return this.axios.patch(...args)
  }
}
