import isObject from "is-object";

const ErrorCodes = {
  PARSEERROR: {
    code: -32700,
    message: "Parse error",
  },
  INVALIDREQUEST: {
    code: -32600,
    message: "Invalid Request",
  },
  METHODNOTFOUND: {
    code: -32601,
    message: "Method not found",
  },
  INVALIDPARAMS: {
    code: -32602,
    message: "Invalid params",
  },
  INTERNALERROR: {
    code: -32603,
    message: "Internal error",
  },
} as const;

type ErrorMessage = {
  message: string;
  code: number;
  data: Array<any> | Record<string, any>;
};

class RPCError extends Error {
  code: number;
  data: Array<any> | Record<string, any>;

  constructor(
    message: string | ErrorMessage = ErrorCodes.INTERNALERROR.message,
    data = null,
    code: number = ErrorCodes.INTERNALERROR.code
  ) {
    if (isObject(message)) {
      const messageObj = message as RPCError;

      super(messageObj.message);

      this.code = messageObj.code;
      this.data = messageObj.data;
    } else {
      super(message as string);

      this.code = code;
      this.data = data;
    }
  }
}

export { RPCError, ErrorCodes };
