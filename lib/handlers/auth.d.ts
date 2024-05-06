import ServiceAbstract from "./service-abstract";
declare class Auth extends ServiceAbstract {
    auth(): Promise<import("axios").AxiosResponse<unknown, any>>;
}
export default Auth;
