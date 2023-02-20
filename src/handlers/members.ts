import Session from '../Session'
import ServiceAbstract from './service-abstract'

class Members extends ServiceAbstract {
  // public readonly USER: 0
  // public readonly GROUP: 1

  public readonly USER: number
  public readonly GROUP: number

  constructor(session: Session) {
    super(session)

    this.USER = 0
    this.GROUP = 1
  }
  userQuery(query, options = {}, version = 'v2') {
    const params = {
      limit: 20,
      where_type: JSON.stringify([this.USER, this.GROUP]),
      query,
      ...options,
    }

    return this.session.get(`api/${version}/members`, { params })
  }

  member(id, version = 'v2') {
    return this.session.get(`api/${version}/members/${id}`)
  }
}

export default Members
