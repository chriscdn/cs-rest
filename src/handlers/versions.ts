import { isNode } from "../utils/is-node";
import ServiceAbstract from "./service-abstract";
import { components } from "../types/cs-rest-types/schema";

type TNewVersionType = components["schemas"]["versions_NewVersionInfo"];

class Versions extends ServiceAbstract {
  async addVersion({
    dataid,
    fileHandler,
    options = {},
  }: {
    dataid: number;
    fileHandler: File | string;
    options?: Record<string, any>;
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");

    const url = `api/v1/nodes/${dataid}/versions`;

    if (isNode() && this.session._isString(fileHandler)) {
      // node.js
      const fs = await import("fs");
      const f = fs.createReadStream(fileHandler);

      const params = {
        file: f,
        ...options,
      };

      return this.session.postForm<TNewVersionType>(url, params);
    } else if (this.session._isFile(fileHandler)) {
      // browser
      const params = {
        file: fileHandler,
        ...options,
      };

      return this.session.postForm<TNewVersionType>(url, params);
    } else {
      throw new Error("Invalid file.");
    }
  }

  download({ dataid, version, filePath }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(version != null, "version cannot be null");
    console.assert(filePath != null, "filePath cannot be null");

    if (isNode()) {
      return this.session
        .get<any>(`api/v1/nodes/${dataid}/versions/${version}/content`, {
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

  list(dataid: number) {
    const url = `api/v1/nodes/${dataid}/versions`;
    return this.session.get(url);
  }
  version(dataid, version_number = "latest") {
    // latest not supported in v2
    const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
    return this.session.get(url);
  }

  promote({ dataid, versionNumber, description = null }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");

    const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;

    return this.session.postBody(url, {
      ...(!!description && {
        description,
      }),
    });
  }

  deleteVersion({ dataid, versionNumber, apiVersion = "v1" }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");

    const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`;

    // careful with deleteForm or deleteBody
    return this.session.delete(url);
  }

  purge({ dataid, number_to_keep = 1 }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(!isNaN(number_to_keep), "number_to_keep must be an integer");

    // delete parameters not supported
    // https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
    // number_to_keep is ignored

    const url = `api/v2/nodes/${dataid}/versions`;

    return this.session.deleteForm(url, {
      number_to_keep,
    });
  }
}

export default Versions;
