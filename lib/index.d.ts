import * as axios from 'axios';
import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

interface CSRestOptions {
    username?: string;
    password?: string;
    otcsticket?: string;
    baseUrl: string;
}

declare class ServiceAbstract {
    protected _session: WeakRef<Session>;
    constructor(session: Session);
    get session(): Session;
}

declare class Auth extends ServiceAbstract {
    auth(): Promise<axios.AxiosResponse<any, any>>;
}

declare class Nodes extends ServiceAbstract {
    addablenodetypes(dataid: any): Promise<axios.AxiosResponse<any, any>>;
    addDocument({ parent_id, fileHandler, apiVersion, // v1 or v2
    name, options, }: {
        parent_id: any;
        fileHandler: any;
        apiVersion?: string;
        name?: any;
        options?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    addDocumentMajor({ parent_id, fileHandler, name, description, options, }: {
        parent_id: any;
        fileHandler: any;
        name?: any;
        description?: any;
        options?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    addItem(type: any, parent_id: any, name: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    node({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    ancestors(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    volumeInfo(objType: any): Promise<axios.AxiosResponse<any, any>>;
    volumes(): Promise<axios.AxiosResponse<any, any>>;
    addFolder(parent_id: any, name: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    addGeneration(parent_id: any, name: any, original_id: any, version_number: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    nodes(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    children(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    delete(dataid: any): Promise<axios.AxiosResponse<any, any>>;
    download({ dataid, apiVersion, filePath }: {
        dataid: any;
        apiVersion?: string;
        filePath: any;
    }): Promise<unknown>;
    audit({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
}

declare class Workflow extends ServiceAbstract {
    start(map_id: any): Promise<axios.AxiosResponse<any, any>>;
    draftprocesses(workflow_id: any): Promise<axios.AxiosResponse<any, any>>;
    draftprocesses_update(draftprocess_id: any): Promise<axios.AxiosResponse<any, any>>;
    draftprocesses_put(draftprocess_id: any, body: any): Promise<axios.AxiosResponse<any, any>>;
}

declare class RHCore extends ServiceAbstract {
    scriptNode(id: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
}

declare class Search extends ServiceAbstract {
    search(where: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    regions(params?: {}): Promise<axios.AxiosResponse<any, any>>;
}

declare class Members extends ServiceAbstract {
    readonly USER: number;
    readonly GROUP: number;
    constructor(session: Session);
    userQuery(query: any, options?: {}, version?: string): Promise<axios.AxiosResponse<any, any>>;
    member(id: any, version?: string): Promise<axios.AxiosResponse<any, any>>;
}

declare class Versions extends ServiceAbstract {
    addVersion({ dataid, fileHandler, apiVersion, fileName, options, }: {
        dataid: any;
        fileHandler: any;
        apiVersion?: string;
        fileName?: any;
        options?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    download({ dataid, version, filePath }: {
        dataid: any;
        version: any;
        filePath: any;
    }): Promise<unknown>;
    list(dataid: any): Promise<axios.AxiosResponse<any, any>>;
    version(dataid: any, version_number?: string): Promise<axios.AxiosResponse<any, any>>;
    promote({ dataid, versionNumber, description }: {
        dataid: any;
        versionNumber: any;
        description?: any;
    }): Promise<axios.AxiosResponse<any, any>>;
    deleteVersion({ dataid, versionNumber, apiVersion }: {
        dataid: any;
        versionNumber: any;
        apiVersion?: string;
    }): Promise<axios.AxiosResponse<any, any>>;
    purge({ dataid, number_to_keep }: {
        dataid: any;
        number_to_keep?: number;
    }): Promise<axios.AxiosResponse<any, any>>;
}

declare class WebReports extends ServiceAbstract {
    run(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
}

type requestObjectType = {
    jsonrpc: string;
    method: string;
    id: number;
    params: Record<string, any> | Array<any>;
};
declare class RPCClient {
    session: Session;
    relativePath: string;
    protected _batchQueue: Array<requestObjectType>;
    constructor(session: Session, relativePath: string);
    protected requestObject(method: string, params: Record<string, any> | Array<any>, id: number): requestObjectType;
    protected handleResponse(data: any): any;
    request(method: string, params: any, id?: number): Promise<any>;
    private resetQueue;
    queue(method: string, params: any, id?: number): RPCClient;
    batch(throwOnError?: boolean): Promise<any>;
    rhnode(dataid: any, method: any, args?: any[], id?: number): Promise<any>;
    rhnodeQueue(dataid: any, method: any, args?: any[], id?: number): RPCClient;
}

declare class Session {
    protected readonly axios: AxiosInstance;
    protected _nodes: Nodes;
    protected _auth: Auth;
    protected _workflow: any;
    protected _rhcore: RHCore;
    protected _members: Members;
    protected _search: Search;
    protected _webreports: WebReports;
    protected _versions: Versions;
    constructor(options: CSRestOptions);
    get nodes(): Nodes;
    get auth(): Auth;
    get workflow(): Workflow;
    get rhcore(): RHCore;
    get members(): Members;
    get search(): Search;
    get webreports(): WebReports;
    get versions(): Versions;
    get dataTypesEnum(): {
        AssocType: number;
        BooleanType: number;
        ClassType: number;
        DapiNodeType: number;
        DapiSessionType: number;
        DapiStreamType: number;
        DapiVersionType: number;
        DateType: number;
        DynamicType: number;
        ErrorType: number;
        FileType: number;
        FrameType: number;
        IntegerType: number;
        JavaObjectType: number;
        ListType: number;
        LongType: number;
        ObjectType: number;
        ObjRefType: number;
        RealType: number;
        RecArrayType: number;
        RecordType: number;
        ScriptType: number;
        SocketType: number;
        StringType: number;
        UAPIType: number;
        UndefinedType: number;
        VoidType: number;
        WAPIWorkType: number;
    };
    rpcClient(relativePath?: string): RPCClient;
    _isObject(value: any): boolean;
    _isString(value: any): boolean;
    _isBoolean(value: any): boolean;
    objectToForm(obj: Record<string, any>): any;
    putForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    postForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    patchForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    deleteForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    putBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    postBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    patchBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    deleteBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    patch<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
}

export { Session };
