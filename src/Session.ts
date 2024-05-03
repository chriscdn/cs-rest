import { DataTypesEnum } from "./utils/data-types-enum";
import axiosFactory, { CSRestOptions } from "./utils/axios-factory";
import Auth from "./handlers/auth";
import Nodes from "./handlers/nodes";
import Workflow from "./handlers/workflow";
import RHCore from "./handlers/rhcore";
import Search from "./handlers/search";
import Members from "./handlers/members";
import Versions from "./handlers/versions";
import WebReports from "./handlers/webreports";
import RPCClient from "./rpc-client/index";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Session {
  protected readonly axios: AxiosInstance;
  protected _nodes: Nodes;
  protected _auth: Auth;
  protected _workflow: any;
  protected _rhcore: RHCore;
  protected _members: Members;
  protected _search: Search;
  protected _webreports: WebReports;
  protected _versions: Versions;

  public readonly baseUrl: string;

  constructor(options: CSRestOptions) {
    this.baseUrl = options.baseUrl;
    this.axios = axiosFactory(options);
  }

  get nodes(): Nodes {
    if (this._nodes == null) {
      this._nodes = new Nodes(this);
    }

    return this._nodes;
  }

  get auth(): Auth {
    if (this._auth == null) {
      this._auth = new Auth(this);
    }

    return this._auth;
  }

  get workflow(): Workflow {
    if (this._workflow == null) {
      this._workflow = new Workflow(this);
    }

    return this._workflow;
  }

  get rhcore(): RHCore {
    if (this._rhcore == null) {
      this._rhcore = new RHCore(this);
    }

    return this._rhcore;
  }

  get members(): Members {
    if (this._members == null) {
      this._members = new Members(this);
    }

    return this._members;
  }

  get search(): Search {
    if (this._search == null) {
      this._search = new Search(this);
    }

    return this._search;
  }

  get webreports(): WebReports {
    if (this._webreports == null) {
      this._webreports = new WebReports(this);
    }

    return this._webreports;
  }

  get versions(): Versions {
    if (this._versions == null) {
      this._versions = new Versions(this);
    }

    return this._versions;
  }

  get dataTypesEnum() {
    return DataTypesEnum;
  }

  rpcClient(relativePath = "/api/v1/rh/rpc/rhnode/") {
    return new RPCClient(this, relativePath);
  }

  _isObject(value: unknown): value is Object {
    return value && typeof value === "object" && value.constructor === Object;
  }

  _isString(value: unknown): value is string {
    return typeof value === "string" || value instanceof String;
  }

  _isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
  }

  _isFile(value: any): value is File {
    return typeof value?.name === "string";
  }

  putForm(url, params) {
    return this.put(url, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  postForm<T>(url, params) {
    return this.post<T>(url, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      maxBodyLength: Infinity,
    });
  }

  patchForm(url, params) {
    return this.patch(url, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  deleteForm(url, params) {
    // FormData does not working on Delete!!
    // See here: https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
    // const formData = this.objectToForm(params)

    return this.delete(url);
  }

  putBody(url, body) {
    return this.putForm(url, {
      body,
    });
  }

  postBody<T>(url, body) {
    return this.postForm<T>(url, {
      body,
    });
  }

  patchBody(url, body) {
    return this.patchForm(url, {
      body,
    });
  }

  deleteBody(url, body) {
    return this.deleteForm(url, {
      body,
    });
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.get(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.post(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.put(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.patch(url, data, config);
  }

  options<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.options(url, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.delete(url, config);
  }

  async $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.get<T>(url, config);
    return response.data;
  }
}
