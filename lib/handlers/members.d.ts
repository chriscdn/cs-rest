import Session from "../Session";
import ServiceAbstract from "./service-abstract";
declare class Members extends ServiceAbstract {
    readonly USER: number;
    readonly GROUP: number;
    constructor(session: Session);
    userQuery(query: any, options?: {}, version?: string): Promise<import("axios").AxiosResponse<unknown, any>>;
    member(id: any, version?: string): Promise<import("axios").AxiosResponse<unknown, any>>;
}
export default Members;
