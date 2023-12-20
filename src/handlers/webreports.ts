import ServiceAbstract from "./service-abstract";

class WebReports extends ServiceAbstract {
  run(dataid, params = {}) {
    const url = `api/v1/nodes/${dataid}/output`;
    return this.session.get(url, { params });
  }
}

export default WebReports;
