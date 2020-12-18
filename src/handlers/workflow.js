// const get = require('lodash.get')

module.exports = session => ({

	start(map_id) {
		return this.draftprocesses(map_id)
			.then(response => get(response, 'data.results.draftprocess_id'))
			.then(draftprocess_id => this.draftprocesses_update(draftprocess_id))
	},

	draftprocesses(workflow_id) {
		return session.postForm('api/v2/draftprocesses', {
			workflow_id
		})
	},

	draftprocesses_update(draftprocess_id) {
		return session.get('api/v1/forms/draftprocesses/update', {
			params: {
				draftprocess_id
			}
		})
	},

	draftprocesses_put(draftprocess_id, body) {
		return session.putForm(`api/v2/draftprocesses/${draftprocess_id}`, {
			body
		})
	}

	// draftprocesses_formUpdate(draftprocess_id, values) {
	// 	const body = {
	// 		action: "formUpdate",
	// 		values
	// 	}

	// 	return this.draftprocesses_put(draftprocess_id, body)
	// }

})