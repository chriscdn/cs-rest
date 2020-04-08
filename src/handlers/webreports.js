module.exports = session => ({

	run(dataid, params = {}) {
		const url = `api/v1/nodes/${dataid}/output`
		return session.get(url, { params })
	}

})