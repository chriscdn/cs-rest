// const FormDataFactory = require('./form-data-factory')

export default (session) => ({
  auth() {
    return session.get('/api/v1/auth/')
  },
})
