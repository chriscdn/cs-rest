import Session from "../Session";

import { components } from "../types/cs-rest-types/schema";

type draftprocesses_DraftProcess =
  components["schemas"]["draftprocesses_DraftProcess"];

type forms_WorkflowPropertiesFormInfo =
  components["schemas"]["forms_WorkflowPropertiesFormInfo"];

type draftprocesses_DraftProcess_Put =
  components["schemas"]["draftprocesses_DraftProcess_Put"];

export type TDraftProcess = {
  // data: {
  //   links: {
  //     data: {
  //       body: string;
  //       content_type: string;
  //       href: string;
  //       method: string;
  //       name: string;
  //     };
  //   };
  // };
  // data: categories_V2DataLinks;
  results: draftprocesses_DraftProcess;
};

export type TWorkflowPut = {
  action: "Initiate" | "formUpdate";
  values?: any;
  comment?: string;
  authentication_info?: { password: string };
};

class WorkflowInitiator {
  workflowPropertiesInfo: forms_WorkflowPropertiesFormInfo | null = null;

  constructor(private session: Session, private mapId: number) {}

  /**
   * This method prepares the workflow for initiation. It must be called before any other method.
   */
  async start() {
    this.workflowPropertiesInfo = await this.session.workflow.start(this.mapId);
  }

  get form() {
    return this.workflowPropertiesInfo.forms[0];
  }

  findWorkflowAttribute(attributeName: string) {
    const properties: Record<string, any> = this.form.schema
      .properties;

    return Object.entries(properties).find(([workflowName, value]) =>
      value.title === attributeName
    );
  }

  get processId(): number {
    // @ts-ignore - This is missing in the openapi schema.
    return this.workflowPropertiesInfo.data.process_id;
  }

  get attachmentsFolderId(): number | undefined {
    const dataPackages = this.workflowPropertiesInfo.data.data_packages;
    const attachmentPkg = dataPackages.find((pkg) =>
      pkg.type === 1 && pkg.sub_type === 1
    );
    return attachmentPkg?.data.attachment_folder_id;
  }

  get wantComments(): boolean {
    return this.workflowPropertiesInfo.data.comments_on;
  }

  get wantAuthentication(): boolean {
    return this.workflowPropertiesInfo.data.authentication;
  }

  setWorkflowAttribute(
    attributeName: string,
    value: any,
  ): typeof WorkflowInitiator {
    const [fieldName, definition] = this.findWorkflowAttribute(attributeName) ??
      [];

    const attributeType = definition.type;
    const isArray = attributeType === "array";

    if ((isArray === Array.isArray(value))) {
      this.form.data[fieldName] = value;
      return WorkflowInitiator;
    } else {
      throw new Error("Invalid type.");
    }
  }

  async formUpdate(): Promise<
    { results: draftprocesses_DraftProcess_Put }
  > {
    return await this.session.workflow.draftprocessesPut(this.processId, {
      action: "formUpdate",
      values: this.form.data,
    });
  }

  async initiate(
    { comment, password }: { comment?: string; password?: string } = {},
  ): Promise<{ results: draftprocesses_DraftProcess_Put }> {
    await this.formUpdate();

    const initiateValues = {
      action: "Initiate",
      ...this.wantComments && { comment },
      ...this.wantAuthentication &&
        { authentication_info: { password } },
    } as const;

    const response: { results: draftprocesses_DraftProcess_Put } = await this
      .session
      .workflow.draftprocessesPut(
        this.processId,
        initiateValues,
      );

    return response;
  }
}

export { WorkflowInitiator };
