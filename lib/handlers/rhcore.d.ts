import ServiceAbstract from "./service-abstract";
declare class RHCore extends ServiceAbstract {
    scriptNode<T>(id: any, body?: {}): Promise<import("axios").AxiosResponse<T, any>>;
}
export default RHCore;
