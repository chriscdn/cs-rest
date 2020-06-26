module.exports = session => ({

	USER: 0,
	GROUP: 1,

	userQuery(query, options = {}, version = 'v2') {
		const params = {
			limit: 20,
			where_type: JSON.stringify([this.USER, this.GROUP]),
			query,
			...options
		}

		return session.get(`api/${version}/members`, { params })
	},

	member(id, version = 'v2') {
		return session.getCached(`api/${version}/members/${id}`)
	}

})