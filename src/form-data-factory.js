module.exports = {

	get isNode() {
		return (typeof window === 'undefined')
	},

	get isBrowser() {
		return !this.isNode
	},

	createFormData() {
		if (this.isNode) {
			const klass = require('form-data')
			return new klass
		} else {
			return new FormData()
		}
	}

}