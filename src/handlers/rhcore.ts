import ServiceAbstract from "./service-abstract";

class RHCore extends ServiceAbstract {
  scriptNode<T>(id, body = {}) {
    return this.session.postForm<T>(`api/v1/rhcore/${id}`, body);
  }
}

export default RHCore;
