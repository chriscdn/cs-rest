module.exports = session => ({
	scriptNode(id, params = {}) {
		return session.get(`api/v1/rhcore/${id}`, {
			params
		})
	}
})