import ServiceAbstract from "./service-abstract";
declare class RHCore extends ServiceAbstract {
    scriptNode(id: any, body?: {}): Promise<import("axios").AxiosResponse<any, any>>;
}
export default RHCore;
