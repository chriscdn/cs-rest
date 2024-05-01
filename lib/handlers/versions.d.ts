import ServiceAbstract from "./service-abstract";
declare class Versions extends ServiceAbstract {
    addVersion({ dataid, fileHandler, apiVersion, fileName, options, }: {
        dataid: number;
        fileHandler: File | string;
        apiVersion?: "v1" | "v2";
        fileName?: string;
        options?: Record<string, any>;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    download({ dataid, version, filePath }: {
        dataid: any;
        version: any;
        filePath: any;
    }): Promise<unknown>;
    list(dataid: number): Promise<import("axios").AxiosResponse<any, any>>;
    version(dataid: any, version_number?: string): Promise<import("axios").AxiosResponse<any, any>>;
    promote({ dataid, versionNumber, description }: {
        dataid: any;
        versionNumber: any;
        description?: any;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    deleteVersion({ dataid, versionNumber, apiVersion }: {
        dataid: any;
        versionNumber: any;
        apiVersion?: string;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    purge({ dataid, number_to_keep }: {
        dataid: any;
        number_to_keep?: number;
    }): Promise<import("axios").AxiosResponse<any, any>>;
}
export default Versions;
