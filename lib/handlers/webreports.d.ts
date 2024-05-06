import ServiceAbstract from "./service-abstract";
declare class WebReports extends ServiceAbstract {
    run(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
}
export default WebReports;
