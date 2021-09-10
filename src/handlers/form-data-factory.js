module.exports = {
  createFormData () {
    if (process.node) {
      const Klass = require('form-data')
      return new Klass()
    } else {
      return new FormData()
    }
  }
}
