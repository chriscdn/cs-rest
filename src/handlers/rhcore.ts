import ServiceAbstract from './service-abstract'

class RHCore extends ServiceAbstract {
  scriptNode(id, params = {}) {
    return this.session.get(`api/v1/rhcore/${id}`, {
      params,
    })
  }
}

export default RHCore
