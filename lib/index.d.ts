type requestObjectType = {
    jsonrpc: string;
    method: string;
    id: number;
    params: Record<string, any> | Array<any>;
};
declare class RPCClient {
    session: Session;
    baseURL: string;
    _batchQueue: Array<requestObjectType>;
    constructor(session: Session, baseURL: string);
    requestObject(method: string, params: Record<string, any> | Array<any>, id: number): requestObjectType;
    handleResponse(data: any): any;
    request(method: any, params: any, id?: number): Promise<any>;
    resetQueue(): void;
    queue(method: string, params: any, id?: number): this;
    batch(throwOnError?: boolean): Promise<any>;
    rhnode(dataid: any, method: any, args?: any[], id?: number): Promise<any>;
    rhnodeQueue(dataid: any, method: any, args?: any[], id?: number): this;
}

declare class Session {
    axios: any;
    _nodes: any;
    _auth: any;
    _workflow: any;
    _rhcore: any;
    _members: any;
    _search: any;
    _webreports: any;
    _versions: any;
    constructor(options: any);
    get nodes(): any;
    get auth(): any;
    get workflow(): any;
    get rhcore(): any;
    get members(): any;
    get search(): any;
    get webreports(): any;
    get versions(): any;
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
    rpcClient(baseURL?: string): RPCClient;
    _isObject(value: any): boolean;
    _isString(value: any): boolean;
    _isBoolean(value: any): boolean;
    objectToForm(obj: Record<string, any>): any;
    get(...args: any[]): any;
    putForm(url: any, params: any): any;
    postForm(url: any, params: any): any;
    patchForm(url: any, params: any): any;
    deleteForm(url: any, params: any): any;
    putBody(url: any, body: any): any;
    postBody(url: any, body: any): any;
    patchBody(url: any, body: any): any;
    deleteBody(url: any, body: any): any;
    post(...args: any[]): any;
    put(...args: any[]): any;
    delete(...args: any[]): any;
    options(...args: any[]): any;
    patch(...args: any[]): any;
}

export { Session };