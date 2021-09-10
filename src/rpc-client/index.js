const {
  CustomError
} = require('./error-codes')

const get = require('lodash.get')

// to be tested...
const sequence = {
  index: 0,
  get next () {
    this.index = this.index + 1
    return this.index
  }
}

module.exports = class RPCClient {
  constructor (session, baseURL) {
    this.session = session
    this.baseURL = baseURL
    this.resetQueue()
  }

  requestObject (method, params, id) {
    return {
      jsonrpc: '2.0',
      method,
      id,
      params
    }
  }

  handleResponse (data) {
    if (data.hasOwnProperty('result')) {
      return data.result
    } else if (data.hasOwnProperty('error')) {
      const err = data.error
      throw new CustomError(err.message, err.data, err.code)
    } else {
      throw Error('The server did not respond correctly.')
    }
  }

  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request (method, params, id = sequence.next) {
    const response = await this.session.postBody(this.baseURL, {
      rpc: this.requestObject(method, params, id)
    })
    return this.handleResponse(response.data)
  }

  resetQueue () {
    this._batchQueue = []
  }

  queue (method, params, id = sequence.next) {
    this._batchQueue.push(this.requestObject(method, params, id))
    return this
  }

  async batch (throwOnError = false) {
    const queue = this._batchQueue
    this.resetQueue()
    const response = await this.session.postBody(this.baseURL, {
      rpc: queue
    })

    return get(response, 'data.data', []).map(item => {
      if (throwOnError) {
        return this.handleResponse(item)
      } else {
        try {
          return this.handleResponse(item)
        } catch (e) {
          return e
        }
      }
    })
  }

  rhnode (dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args
    }

    return this.request(method, params, id)
  }

  rhnodeQueue (dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args
    }

    return this.queue(method, params, id)
  }
}
