import ServiceAbstract from "./service-abstract";
declare class RHCore extends ServiceAbstract {
    scriptNode(id: any, body?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
}
export default RHCore;
