import { CSRestOptions } from "./utils/axios-factory";
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
    readonly baseUrl: string;
    constructor(options: CSRestOptions);
    get nodes(): Nodes;
    get auth(): Auth;
    get workflow(): Workflow;
    get rhcore(): RHCore;
    get members(): Members;
    get search(): Search;
    get webreports(): WebReports;
    get versions(): Versions;
    rpcClient(relativePath?: string): RPCClient;
    _isObject(value: unknown): value is Object;
    _isString(value: unknown): value is string;
    _isBoolean(value: unknown): value is boolean;
    _isFile(value: any): value is File;
    putForm<T>(url: string, params: Record<string, any>): Promise<AxiosResponse<T, any>>;
    postForm<T>(url: string, params: Record<string, any>): Promise<AxiosResponse<T, any>>;
    patchForm<T>(url: string, params: Record<string, any>): Promise<AxiosResponse<T, any>>;
    deleteForm(url: string, params: Record<string, any>): Promise<AxiosResponse<unknown, any>>;
    objectToForm(obj: Record<string, any>): {
        [x: string]: any;
    };
    putBody(url: string, body: any): Promise<AxiosResponse<unknown, any>>;
    postBody<T>(url: string, body: Record<string, any>): Promise<AxiosResponse<T, any>>;
    patchBody(url: string, body: Record<string, any>): Promise<AxiosResponse<unknown, any>>;
    deleteBody(url: string, body: Record<string, any>): Promise<AxiosResponse<unknown, any>>;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>>;
    options<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>>;
    $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}