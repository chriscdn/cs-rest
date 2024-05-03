import { RPCError } from "./error-codes";

import Session from "../Session";

const sequence = {
  index: 0,
  get next(): number {
    this.index = this.index + 1;
    return this.index;
  },
};

type requestObjectType = {
  jsonrpc: string;
  method: string;
  id: number;
  params: Record<string, any> | Array<any>;
};

export default class RPCClient {
  session: Session;
  relativePath: string;

  /* protected */
  _batchQueue: Array<requestObjectType>;

  constructor(session: Session, relativePath: string) {
    this.session = session;
    this.relativePath = relativePath;
    this.resetQueue();
  }

  /* protected */
  requestObject(
    method: string,
    params: Record<string, any> | Array<any>,
    id: number
  ): requestObjectType {
    return {
      jsonrpc: "2.0",
      method,
      id,
      params,
    };
  }

  /* protected */
  handleResponse(data) {
    if (Object.prototype.hasOwnProperty.call(data, "result")) {
      return data.result;
    } else if (Object.prototype.hasOwnProperty.call(data, "error")) {
      const err = data.error;
      throw new RPCError(err.message, err.data, err.code);
    } else {
      throw Error("The server did not respond correctly.");
    }
  }

  // https://www.jsonrpc.org/specification#request_object
  // params is allowed to be null!
  // also on queue function below
  async request(method: string, params: any, id: number = sequence.next) {
    const response = await this.session.postBody(this.relativePath, {
      rpc: this.requestObject(method, params, id),
    });

    return this.handleResponse(response.data);
  }

  /* private */
  resetQueue(): void {
    this._batchQueue = [];
  }

  queue(method: string, params: any, id: number = sequence.next): RPCClient {
    this._batchQueue.push(this.requestObject(method, params, id));
    return this;
  }

  async batch(throwOnError: boolean = false): Promise<any> {
    const queue = this._batchQueue;
    this.resetQueue();
    const response = await this.session.postBody<any>(this.relativePath, {
      rpc: queue,
    });

    return (response.data.data ?? []).map((item) => {
      if (throwOnError) {
        return this.handleResponse(item);
      } else {
        try {
          return this.handleResponse(item);
        } catch (e) {
          return e;
        }
      }
    });
  }

  rhnode(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args,
    };

    return this.request(method, params, id);
  }

  rhnodeQueue(dataid, method, args = [], id = sequence.next) {
    const params = {
      dataid,
      args,
    };

    return this.queue(method, params, id);
  }
}
