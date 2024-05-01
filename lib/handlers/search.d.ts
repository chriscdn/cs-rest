import ServiceAbstract from "./service-abstract";
declare class Search extends ServiceAbstract {
    search(where: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    regions(params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
}
export default Search;
