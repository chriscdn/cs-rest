// const FormDataFactory = require('./form-data-factory')

module.exports = (session) => ({
  auth () {
    return session.get('/api/v1/auth/')
  }
})
