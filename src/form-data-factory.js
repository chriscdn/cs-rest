module.exports = {
	createFormData() {
		 if (process.node) {
			const klass = require('form-data')
			return new klass
		} else {
			return new FormData()
		}
		
	}

}