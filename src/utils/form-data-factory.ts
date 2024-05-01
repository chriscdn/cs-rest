import { isNode } from "./is-node";

export default {
  createFormData() {
    if (isNode()) {
      const FormDataClass = require("form-data");
      return new FormDataClass();
    } else {
      return new FormData();
    }
  },
};
