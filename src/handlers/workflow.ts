import ServiceAbstract from "./service-abstract";
import { components } from "../types/cs-rest-types/schema";

type forms_WorkflowPropertiesFormInfo =
  components["schemas"]["forms_WorkflowPropertiesFormInfo"];

type draftprocesses_DraftProcess_Put =
  components["schemas"]["draftprocesses_DraftProcess_Put"];

import {
  TDraftProcess,
  TWorkflowPut,
  WorkflowInitiator,
} from "../utils/workflow-initiator";

class Workflow extends ServiceAbstract {
  workflowInitiator(mapId: number): WorkflowInitiator {
    return new WorkflowInitiator(this.session, mapId);
  }

  start(mapId: number): Promise<forms_WorkflowPropertiesFormInfo> {
    return this.draftprocesses(mapId)
      .then((draftProcess) => {
        // this is a bug in the definition
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

  async draftprocessesUpdate(
    draftprocessId: number
  ): Promise<forms_WorkflowPropertiesFormInfo> {
    const { data } = await this.session.get(
      "api/v1/forms/draftprocesses/update",
      {
        params: {
          draftprocess_id: draftprocessId,
        },
      }
    );

    return data;
  }

  async draftprocessesPut(
    draftprocessId: number,
    body: TWorkflowPut
  ): Promise<{ results: draftprocesses_DraftProcess_Put }> {
    const { data } = await this.session.putForm(
      `api/v2/draftprocesses/${draftprocessId}`,
      {
        body,
      }
    );

    return data;
  }

  // draftprocesses_formUpdate(draftprocess_id, values) {
  // const body = {
  // action: "formUpdate",
  // values
  // }

  // return this.draftprocessesPut(draftprocess_id, body)
  // }
}

export default Workflow;
