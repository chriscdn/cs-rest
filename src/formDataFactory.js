const a = {

	get isNode() {
		return (typeof window === 'undefined')
	},

	get isBrowser() {
		return !this.isNode
	},

	formDataFactory() {
		if (a.isNode) {
			const klass = require('form-data')
			return new klass
		} else {
			return new FormData()
		}
	}

}


module.exports = a