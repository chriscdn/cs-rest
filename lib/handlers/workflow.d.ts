import ServiceAbstract from "./service-abstract";
import { TWorkflowPut, WorkflowInitiator } from "../utils/workflow-initiator";
declare class Workflow extends ServiceAbstract {
    workflowInitiator(mapId: number): WorkflowInitiator;
    start(mapId: number): Promise<{
        data?: {
            title?: string;
            instructions?: string;
            priority?: number;
            comments_on?: boolean;
            attachments_on?: boolean;
            data_packages?: {
                type?: number;
                sub_type?: number;
                data?: Record<string, any>;
            }[];
            actions?: {
                key?: string;
                label?: string;
            }[];
            custom_actions?: {
                key?: string;
                label?: string;
            }[];
            message?: {
                performer?: number;
                type?: string;
                text?: string;
            };
            member_accept?: boolean;
            reply_performer_id?: number;
            task?: {
                type?: number;
                sub_type?: number;
                data?: Record<string, any>;
            };
            authentication?: boolean;
        };
        forms?: {
            data?: Record<string, any>;
            options?: Record<string, any>;
            schema?: Record<string, any>;
            columns?: number;
        }[];
    }>;
    draftprocesses(workflowId: number): Promise<{
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
            draftprocess_id: number;
            workflow_type?: string;
        }[];
    }>;
    draftprocessesUpdate(draftprocessId: number): Promise<{
        data?: {
            title?: string;
            instructions?: string;
            priority?: number;
            comments_on?: boolean;
            attachments_on?: boolean;
            data_packages?: {
                type?: number;
                sub_type?: number;
                data?: Record<string, any>;
            }[];
            actions?: {
                key?: string;
                label?: string;
            }[];
            custom_actions?: {
                key?: string;
                label?: string;
            }[];
            message?: {
                performer?: number;
                type?: string;
                text?: string;
            };
            member_accept?: boolean;
            reply_performer_id?: number;
            task?: {
                type?: number;
                sub_type?: number;
                data?: Record<string, any>;
            };
            authentication?: boolean;
        };
        forms?: {
            data?: Record<string, any>;
            options?: Record<string, any>;
            schema?: Record<string, any>;
            columns?: number;
        }[];
    }>;
    draftprocessesPut(draftprocessId: number, body: TWorkflowPut): Promise<{
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
export default Workflow;
