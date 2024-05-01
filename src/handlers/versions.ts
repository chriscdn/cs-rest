import { isNode } from "../utils/is-node";
import ServiceAbstract from "./service-abstract";

class Versions extends ServiceAbstract {
  async addVersion({
    dataid,
    fileHandler,
    apiVersion = "v1",
    fileName = undefined,
    options = {},
  }: {
    dataid: number;
    fileHandler: File | string;
    apiVersion?: "v1" | "v2";
    fileName?: string;
    options?: Record<string, any>;
  }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(fileHandler != null, "fileHandler cannot be null");

    const url = `api/${apiVersion}/nodes/${dataid}/versions`;

    if (isNode()) {
      // node.js
      const fsp = require("fs").promises;
      const path = require("path");

      const f = await fsp.readFile(fileHandler);
      const name = fileName || path.basename(fileHandler);

      const params = {
        file: {
          file: f,
          name,
        },
        ...options,
      };

      // console.log(params)

      return this.session.postForm(url, params);
    } else if (this.session._isFile(fileHandler)) {
      // browser
      const name = fileName || fileHandler.name;

      const params = {
        file: {
          file: fileHandler,
          name,
        },
        ...options,
      };

      return this.session.postForm(url, params);

      // formData.append('file', fileHandler, name)
      // return this.session.post(url, formData)
    } else {
      throw new Error("Invalid file.");
    }
  }

  async download({ dataid, version, filePath }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(version != null, "version cannot be null");
    console.assert(filePath != null, "filePath cannot be null");

    if (isNode()) {
      return this.session
        .get(`api/v1/nodes/${dataid}/versions/${version}/content`, {
          responseType: "stream",
        })
        .then((response) => {
          const fs = require("fs");
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

  async list(dataid: number) {
    const url = `api/v1/nodes/${dataid}/versions`;
    return this.session.get(url);
  }
  async version(dataid, version_number = "latest") {
    // latest not supported in v2
    const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
    return this.session.get(url);
  }

  async promote({ dataid, versionNumber, description = null }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");

    const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;

    return this.session.postBody(url, {
      ...(!!description && {
        description,
      }),
    });
  }

  async deleteVersion({ dataid, versionNumber, apiVersion = "v1" }) {
    console.assert(dataid != null, "dataid cannot be null");
    console.assert(versionNumber != null, "number_to_keep must be an integer");

    const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`;

    // careful with deleteForm or deleteBody
    return this.session.delete(url);
  }

  async purge({ dataid, number_to_keep = 1 }) {
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
