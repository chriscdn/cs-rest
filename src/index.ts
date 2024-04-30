import { RPCError } from "./rpc-client/error-codes";
import Session from "./Session";

// https://medium.com/ovrsea/checking-the-type-of-an-object-in-typescript-the-type-guards-24d98d9119b0
const isRPCError = (e: RPCError | any): e is RPCError => {
  return (
    (e as RPCError).code !== undefined && (e as RPCError).data !== undefined
  );
};

export { isRPCError, RPCError, Session };
