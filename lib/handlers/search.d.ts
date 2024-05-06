import ServiceAbstract from "./service-abstract";
declare class Search extends ServiceAbstract {
    search(where: any, params?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
    regions(params?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
}
export default Search;
