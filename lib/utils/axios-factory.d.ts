import { AxiosInstance } from "axios";
export type CSRestOptions = {
    username?: string;
    password?: string;
    otcsticket?: string;
    baseUrl: string;
};
declare const axiosFactory: (options: CSRestOptions) => AxiosInstance;
export default axiosFactory;
