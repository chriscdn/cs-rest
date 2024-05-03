import ServiceAbstract from "./service-abstract";
declare class Nodes extends ServiceAbstract {
    addablenodetypes(dataid: number): Promise<import("axios").AxiosResponse<{
        data?: Record<string, any>;
        definitions?: Record<string, any>;
        definitions_map?: Record<string, any>;
        definitions_order?: string[];
    }, any>>;
    addDocument({ parent_id, fileHandler, name, description, options, }: {
        parent_id: number;
        fileHandler: File | string;
        name?: string;
        description?: string;
        options?: Record<string, any>;
    }): Promise<import("axios").AxiosResponse<{
        id?: number;
    }, any>>;
    addDocumentMajor({ parent_id, fileHandler, name, description, options, }: {
        parent_id: number;
        fileHandler: File | string;
        name?: string;
        description?: string;
        options: Record<string, any>;
    }): Promise<import("axios").AxiosResponse<{
        id?: number;
    }, any>>;
    addItem(type: any, parent_id: any, name: any, params?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
    node({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<import("axios").AxiosResponse<any, any>>;
    ancestors(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    volumeInfo(objType: any): Promise<import("axios").AxiosResponse<any, any>>;
    volumes(): Promise<import("axios").AxiosResponse<any, any>>;
    addFolder(parent_id: any, name: any, params?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
    addGeneration(parent_id: any, name: any, original_id: any, version_number: any, params?: {}): Promise<import("axios").AxiosResponse<unknown, any>>;
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
