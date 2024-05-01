import ServiceAbstract from "./service-abstract";
declare class Nodes extends ServiceAbstract {
    addablenodetypes(dataid: any): Promise<import("axios").AxiosResponse<any, any>>;
    addDocument({ parent_id, fileHandler, apiVersion, name, options, }: {
        parent_id: number;
        fileHandler: File | string;
        apiVersion?: "v1" | "v2";
        name?: string;
        options?: Record<string, any>;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    addDocumentMajor({ parent_id, fileHandler, name, description, options, }: {
        parent_id: number;
        fileHandler: File | string;
        name?: string;
        description?: string;
        options: Record<string, any>;
    }): Promise<import("axios").AxiosResponse<any, any>>;
    addItem(type: any, parent_id: any, name: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    node({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<import("axios").AxiosResponse<any, any>>;
    ancestors(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    volumeInfo(objType: any): Promise<import("axios").AxiosResponse<any, any>>;
    volumes(): Promise<import("axios").AxiosResponse<any, any>>;
    addFolder(parent_id: any, name: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    addGeneration(parent_id: any, name: any, original_id: any, version_number: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    nodes(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    children(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    delete(dataid: any): Promise<import("axios").AxiosResponse<any, any>>;
    download({ dataid, apiVersion, filePath }: {
        dataid: any;
        apiVersion?: string;
        filePath: any;
    }): Promise<unknown>;
    audit({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<import("axios").AxiosResponse<any, any>>;
}
export default Nodes;
