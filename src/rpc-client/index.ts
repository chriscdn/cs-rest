import { CustomError } from './error-codes'

import get from 'lodash.get'
import Session from '../Session'

// to be tested...
const sequence = {
  index: 0,
  get next(): number {
    this.index = this.index + 1
    return this.index
  },
}

type requestObjectType = {
  jsonrpc: string
  method: string
  id: number
  params: Record<string, any> | Array<any>
}

export default class RPCClient {
  session: Session
  baseURL: string
  _batchQueue: Array<requestObjectType>

  constructor(session: Session, baseURL: string) {
    this.session = session
    this.baseURL = baseURL
    this.resetQueue()
  }

  requestObject(
    method: string,
    params: Record<string, any> | Array<any>,
    id: number
  ): requestObjectType {
    return {
      jsonrpc: '2.0',
      method,
      id,
      params,
    }
  }

  handleResponse(data) {
    if (Object.prototype.hasOwnProperty.call(data, 'result')) {
      return data.result
    } else if (Object.prototype.hasOwnProperty.call(data, 'error')) {
      const err = data.error
      throw new CustomError(err.message, err.data, err.code)
    } else {
      throw Error('The server did not respond correctly.')
    }
  }

  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(method, params, id = sequence.next) {
    const response = await this.session.postBody(this.baseURL, {
      rpc: this.requestObject(method, params, id),
    })
    // console.log(response)
    return this.handleResponse(response.data)
  }

  resetQueue(): void {
    this._batchQueue = []
  }

  queue(method: string, params, id: number = sequence.next) {
    this._batchQueue.push(this.requestObject(method, params, id))
    return this
  }

  async batch(throwOnError: boolean = false) {
    const queue = this._batchQueue
    this.resetQueue()
    const response = await this.session.postBody(this.baseURL, {
      rpc: queue,
    })

    return get(response, 'data.data', []).map((item) => {
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

  rhnode(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args,
    }

    return this.request(method, params, id)
  }

  rhnodeQueue(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args,
    }

    return this.queue(method, params, id)
  }
}