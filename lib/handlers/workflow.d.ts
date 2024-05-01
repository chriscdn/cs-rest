import ServiceAbstract from "./service-abstract";
import { components } from "../types/cs-rest-types/schema";
type forms_WorkflowPropertiesFormInfo = components["schemas"]["forms_WorkflowPropertiesFormInfo"];
type draftprocesses_DraftProcess_Put = components["schemas"]["draftprocesses_DraftProcess_Put"];
import { TDraftProcess, TWorkflowPut, WorkflowInitiator } from "../utils/workflow-initiator";
declare class Workflow extends ServiceAbstract {
    workflowInitiator(mapId: number): WorkflowInitiator;
    start(mapId: number): Promise<forms_WorkflowPropertiesFormInfo>;
    draftprocesses(workflowId: number): Promise<TDraftProcess>;
    draftprocessesUpdate(draftprocessId: number): Promise<forms_WorkflowPropertiesFormInfo>;
    draftprocessesPut(draftprocessId: number, body: TWorkflowPut): Promise<{
        results: draftprocesses_DraftProcess_Put;
    }>;
}
export default Workflow;
