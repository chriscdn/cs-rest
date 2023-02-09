import type Session from '../Session'

class ServiceAbstract {
  protected _session: WeakRef<Session>

  constructor(session: Session) {
    this._session = new WeakRef(session)
  }

  get session() {
    return this._session.deref()
  }
}

export default ServiceAbstract
