import ServiceAbstract from './service-abstract'

class Auth extends ServiceAbstract {
  auth() {
    return this.session.get('/api/v1/auth/')
  }
}

export default Auth
