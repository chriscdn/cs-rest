import { isNode } from "../utils/is-node";

export default {
  createFormData() {
    if (isNode()) {
      const Klass = require("form-data");
      return new Klass();
    } else {
      return new FormData();
    }
  },
};
