declare const ErrorCodes: {
    readonly PARSEERROR: {
        readonly code: -32700;
        readonly message: "Parse error";
    };
    readonly INVALIDREQUEST: {
        readonly code: -32600;
        readonly message: "Invalid Request";
    };
    readonly METHODNOTFOUND: {
        readonly code: -32601;
        readonly message: "Method not found";
    };
    readonly INVALIDPARAMS: {
        readonly code: -32602;
        readonly message: "Invalid params";
    };
    readonly INTERNALERROR: {
        readonly code: -32603;
        readonly message: "Internal error";
    };
};
type ErrorMessage = {
    message: string;
    code: number;
    data: Array<any> | Record<string, any>;
};
declare class RPCError extends Error {
    code: number;
    data: Array<any> | Record<string, any>;
    constructor(message?: string | ErrorMessage, data?: any, code?: number);
}
export { RPCError, ErrorCodes };
