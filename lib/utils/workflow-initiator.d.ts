import Session from "../Session";
import { components } from "../types/cs-rest-types/schema";
type forms_WorkflowPropertiesFormInfo = components["schemas"]["forms_WorkflowPropertiesFormInfo"];
export type TWorkflowPut = {
    action: "Initiate" | "formUpdate";
    values?: any;
    comment?: string;
    authentication_info?: {
        password: string;
    };
};
declare class WorkflowInitiator {
    private session;
    private mapId;
    workflowPropertiesInfo: forms_WorkflowPropertiesFormInfo | null;
    constructor(session: Session, mapId: number);
    /**
     * This method prepares the workflow for initiation. It must be called before any other method.
     */
    start(): Promise<void>;
    get form(): {
        data?: Record<string, any>;
        options?: Record<string, any>;
        schema?: Record<string, any>;
        columns?: number;
    };
    findWorkflowAttribute(attributeName: string): [string, any];
    get processId(): number;
    get attachmentsFolderId(): number | undefined;
    get wantComments(): boolean;
    get wantAuthentication(): boolean;
    setWorkflowAttribute(attributeName: string, value: any): typeof WorkflowInitiator;
    formUpdate(): Promise<{
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
        results?: {
            custom_message: string;
            process_id: number;
        }[];
    }>;
    initiate({ comment, password, }?: {
        comment?: string;
        password?: string;
    }): Promise<{
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
        results?: {
            custom_message: string;
            process_id: number;
        }[];
    }>;
}
export { WorkflowInitiator };
