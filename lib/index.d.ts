import RPCClient from "./rpc-client";
import { RPCError } from "./rpc-client/error-codes";
import Session from "./Session";
declare const isRPCError: (e: RPCError | any) => e is RPCError;
export { isRPCError, RPCError, Session, RPCClient };
