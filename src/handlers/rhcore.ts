import ServiceAbstract from "./service-abstract";

class RHCore extends ServiceAbstract {
  scriptNode(id, body = {}) {
    return this.session.postForm(`api/v1/rhcore/${id}`, body);
  }
}

export default RHCore;
