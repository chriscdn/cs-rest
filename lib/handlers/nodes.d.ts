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
    addItem(type: any, parent_id: any, name: any, params?: {}): Promise<import("axios").AxiosResponse<{
        results?: {
            data?: {
                properties?: {
                    advanced_versioning?: boolean;
                    container?: boolean;
                    container_size?: number;
                    create_date?: string;
                    create_user_id?: number;
                    description?: string;
                    description_multilingual?: {
                        en?: string;
                        de?: string;
                    };
                    external_create_date?: string;
                    external_identity?: string;
                    external_identity_type?: string;
                    external_modify_date?: string;
                    external_source?: string;
                    favorite?: boolean;
                    guid?: string;
                    hidden?: boolean;
                    icon?: string;
                    icon_large?: string;
                    id?: number;
                    modify_date?: string;
                    modify_user_id?: number;
                    name?: string;
                    name_multilingual?: {
                        en?: string;
                        de?: string;
                    };
                    owner?: string;
                    owner_group_id?: number;
                    owner_user_id?: number;
                    parent_id?: number;
                    reserved?: boolean;
                    reserved_date?: string;
                    reserved_user_id?: number;
                    status?: number;
                    type?: number;
                    type_name?: string;
                    versionable?: boolean;
                    versions_control_advanced?: boolean;
                    volume_id?: number;
                }[];
            }[];
        }[];
        links?: {
            data?: {
                self?: {
                    body?: string;
                    content_type?: string;
                    href?: string;
                    method?: string;
                    name?: string;
                }[];
            }[];
        }[];
    }, any>>;
    node({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<import("axios").AxiosResponse<any, any>>;
    ancestors(dataid: any, params?: {}): Promise<import("axios").AxiosResponse<any, any>>;
    volumeInfo(objType: any): Promise<import("axios").AxiosResponse<string, any>>;
    volumes(): Promise<import("axios").AxiosResponse<any, any>>;
    addFolder(parent_id: any, name: any, params?: {}): Promise<import("axios").AxiosResponse<{
        results?: {
            data?: {
                properties?: {
                    advanced_versioning?: boolean;
                    container?: boolean;
                    container_size?: number;
                    create_date?: string;
                    create_user_id?: number;
                    description?: string;
                    description_multilingual?: {
                        en?: string;
                        de?: string;
                    };
                    external_create_date?: string;
                    external_identity?: string;
                    external_identity_type?: string;
                    external_modify_date?: string;
                    external_source?: string;
                    favorite?: boolean;
                    guid?: string;
                    hidden?: boolean;
                    icon?: string;
                    icon_large?: string;
                    id?: number;
                    modify_date?: string;
                    modify_user_id?: number;
                    name?: string;
                    name_multilingual?: {
                        en?: string;
                        de?: string;
                    };
                    owner?: string;
                    owner_group_id?: number;
                    owner_user_id?: number;
                    parent_id?: number;
                    reserved?: boolean;
                    reserved_date?: string;
                    reserved_user_id?: number;
                    status?: number;
                    type?: number;
                    type_name?: string;
                    versionable?: boolean;
                    versions_control_advanced?: boolean;
                    volume_id?: number;
                }[];
            }[];
        }[];
        links?: {
            data?: {
                self?: {
                    body?: string;
                    content_type?: string;
                    href?: string;
                    method?: string;
                    name?: string;
                }[];
            }[];
        }[];
    }, any>>;
    addGeneration(parent_id: any, name: any, original_id: any, version_number: any, params?: {}): Promise<import("axios").AxiosResponse<{
        results?: {
            data?: {
                properties?: {
                    advanced_versioning?: boolean;
                    container?: boolean;
                    container_size?: number;
                    create_date?: string;
                    create_user_id?: number;
                    description?: string;
                    description_multilingual?: {
                        en?: string;
                        de?: string;
                    };
                    external_create_date?: string;
                    external_identity?: string;
                    external_identity_type?: string;
                    external_modify_date?: string;
                    external_source?: string;
                    favorite?: boolean;
                    guid?: string;
                    hidden?: boolean;
                    icon?: string;
                    icon_large?: string;
                    id?: number;
                    modify_date?: string;
                    modify_user_id?: number;
                    name?: string;
                    name_multilingual?: {
                        en?: string;
                        de?: string;
                    };
                    owner?: string;
                    owner_group_id?: number;
                    owner_user_id?: number;
                    parent_id?: number;
                    reserved?: boolean;
                    reserved_date?: string;
                    reserved_user_id?: number;
                    status?: number;
                    type?: number;
                    type_name?: string;
                    versionable?: boolean;
                    versions_control_advanced?: boolean;
                    volume_id?: number;
                }[];
            }[];
        }[];
        links?: {
            data?: {
                self?: {
                    body?: string;
                    content_type?: string;
                    href?: string;
                    method?: string;
                    name?: string;
                }[];
            }[];
        }[];
    }, any>>;
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
