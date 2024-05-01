import ServiceAbstract from "./service-abstract";
declare class WebReports extends ServiceAbstract {
    run(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
}
export default WebReports;
