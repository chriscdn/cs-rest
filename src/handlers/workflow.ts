import ServiceAbstract from "./service-abstract";
import { components } from "../types/cs-rest-types/schema";
import { TWorkflowPut, WorkflowInitiator } from "../utils/workflow-initiator";

class Workflow extends ServiceAbstract {
  workflowInitiator(mapId: number): WorkflowInitiator {
    return new WorkflowInitiator(this.session, mapId);
  }

  start(mapId: number) {
    return this.draftprocesses(mapId)
      .then((draftProcess) => {
        // this is a bug in the definition?
        // @ts-ignore
        return draftProcess.results.draftprocess_id as number;
      })
      .then((draftprocessId: number) =>
        this.draftprocessesUpdate(draftprocessId)
      );
  }

  async draftprocesses(workflowId: number) {
    const { data } = await this.session.postForm<
      components["schemas"]["draftprocesses_DraftProcess_V2EmptyResponse"]
    >("api/v2/draftprocesses", {
      workflow_id: workflowId,
    });

    return data;
  }

  async draftprocessesUpdate(draftprocessId: number) {
    const { data } = await this.session.get<
      components["schemas"]["forms_WorkflowPropertiesFormInfo"]
    >("api/v1/forms/draftprocesses/update", {
      params: {
        draftprocess_id: draftprocessId,
      },
    });

    return data;
  }

  async draftprocessesPut(draftprocessId: number, body: TWorkflowPut) {
    const { data } = await this.session.putForm<
      components["schemas"]["draftprocesses_DraftProcess_PutV2EmptyResponse"]
    >(`api/v2/draftprocesses/${draftprocessId}`, {
      body,
    });

    return data;
  }
}

export default Workflow;
