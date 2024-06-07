import { SubTypesEnum } from "../utils/subtypes-enum";
import ServiceAbstract from "./service-abstract";
import { isNode } from "../utils/is-node";
import { components } from "../types/cs-rest-types/schema";

// type TNewVersionType = components["schemas"]["versions_NewVersionInfo"];

class Nodes extends ServiceAbstract {
  addablenodetypes(dataid: number) {
    return this.session.get<components["schemas"]["nodes_AddableTypesInfo"]>(
      `api/v1/nodes/${dataid}/addablenodetypes`,
    );
  }

  async addDocument({
    parent_id,
    fileHandler,
    // apiVersion = "v1",
    name = undefined,
    description = undefined,
    options = {},
  }: {
    parent_id: number;
    fileHandler: File | string;
    // apiVersion?: "v1" | "v2";
    name?: string;
    description?: string;
    options?: Record<string, any>;
  }) {
    const url = `api/v1/nodes`;

    if (isNode() && this.session._isString(fileHandler)) {
      // node.js
      const [fs, path] = await Promise.all([import("fs"), import("path")]);
      const f = fs.createReadStream(fileHandler);

      const params = {
        body: {
          ...options,
          type: SubTypesEnum.Document,
          name: name ?? path.basename(fileHandler),
          parent_id,
        },
        file: f,
      };

      return await this.session.postForm<
        components["schemas"]["nodes_CreateResponse"]
      >(url, params);
    } else if (this.session._isFile(fileHandler)) {
      // browser

      const params = {
        body: {
          ...options,
          type: SubTypesEnum.Document,
          name,
          description,
          parent_id,
        },
        file: fileHandler,
      };

      return await this.session.postForm<
        components["schemas"]["nodes_CreateResponse"]
      >(url, params);
    } else {
      throw new Error("Invalid file.");
    }
  }

  async addDocumentMajor({
    parent_id,
    fileHandler,
    name = undefined,
    description = undefined,
    options = {},
  }: {
    parent_id: number;
    fileHandler: File | string;
    name?: string;
    description?: string;
    options: Record<string, any>;
  }) {
    const response = await this.addDocument({
      parent_id,
      fileHandler,
      name,
      options: {
        ...options,
        advanced_versioning: true,
      },
    });

    const dataid = response.data.id;

    await this.session.versions.promote({
      dataid,
      versionNumber: 1,
      description,
    });

    await this.session.versions.deleteVersion({
      dataid,
      versionNumber: 1,
    });

    return response;
  }

  addItem(type, parent_id, name, params = {}) {
    return this.session.postBody<
      components["schemas"]["nodes_V2ResponseElementPost"]
    >("api/v2/nodes", {
      type,
      parent_id,
      name,
      ...params,
    });
  }

  node({ dataid, apiVersion = "v2", params = {} }) {
    return this.session.get(`api/${apiVersion}/nodes/${dataid}`, {
      params,
    });
  }

  ancestors(dataid, params = {}) {
    return this.session.get(`api/v1/nodes/${dataid}/ancestors`, {
      params,
    });
  }

  volumeInfo(objType) {
    return this.session.get<
      components["parameters"]["suppress_response_codes"]
    >(`api/v1/volumes/${objType}`);
  }

  volumes() {
    return this.session.get("api/v2/volumes");
  }

  addFolder(parent_id, name, params = {}) {
    return this.addItem(SubTypesEnum.Folder, parent_id, name, params);
  }

  addGeneration(parent_id, name, original_id, version_number, params = {}) {
    return this.addItem(SubTypesEnum.Generation, parent_id, name, {
      original_id,
      version_number,
      ...params,
    });
  }

  nodes(dataid, params = {}) {
    // https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
    return this.session.get(`api/v2/nodes/${dataid}/nodes`, {
      params,
    });
  }

  children(dataid, params = {}) {
    return this.nodes(dataid, params);
  }

  delete(dataid) {
    return this.session.delete(`api/v1/nodes/${dataid}`);
  }

  download({ dataid, apiVersion = "v1", filePath }) {
    // this.session.nodes.download(1267501, 'v2', '/Users/chris/Downloads/test.pdf')
    if (isNode()) {
      return this.session
        .get<any>(`api/${apiVersion}/nodes/${dataid}/content`, {
          responseType: "stream",
        })
        .then(async (response) => {
          const fs = await import("fs");
          const writer = fs.createWriteStream(filePath);

          response.data.pipe(writer);

          return new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
          });
        });
    } else {
      return Promise.reject("Not implemented yet");
    }
  }

  audit({ dataid, apiVersion = "v2", params = {} }) {
    return this.session.get(`api/${apiVersion}/nodes/${dataid}/audit`, {
      params,
    });
  }
}

export default Nodes;
