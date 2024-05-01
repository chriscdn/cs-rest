import type Session from "../Session";

class ServiceAbstract {
  protected _session: Session;

  constructor(session: Session) {
    this._session = session;
  }

  get session() {
    return this._session;
  }
}

export default ServiceAbstract;
