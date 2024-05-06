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
export {};
