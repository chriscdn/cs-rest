import Session from "../Session";
type requestObjectType = {
    jsonrpc: string;
    method: string;
    id: number;
    params: Record<string, any> | Array<any>;
};
export default class RPCClient {
    session: Session;
    relativePath: string;
    _batchQueue: Array<requestObjectType>;
    constructor(session: Session, relativePath: string);
    requestObject(method: string, params: Record<string, any> | Array<any>, id: number): requestObjectType;
    handleResponse(data: any): any;
    request(method: string, params: any, id?: number): Promise<any>;
    resetQueue(): void;
    queue(method: string, params: any, id?: number): RPCClient;
    batch(throwOnError?: boolean): Promise<any>;
    rhnode(dataid: any, method: any, args?: any[], id?: number): Promise<any>;
    rhnodeQueue(dataid: any, method: any, args?: any[], id?: number): RPCClient;
}
export {};
