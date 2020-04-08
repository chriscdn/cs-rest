module.exports = session => ({

	USER: 0,
	GROUP: 1,

	// https://developer.opentext.com/awd/resources/apis/cs-rest-api-for-cs-16-s#!/members/SearchMember_get_1
	userQuery(query, options = {}) {
		const params = {
			limit: 20,
			where_type: [this.USER, this.GROUP],
			query,
			...options
		}

		return session.get(`api/v2/members`, {params})
	},

	member(id) {
		return session.get(`api/v2/members/${id}`)
	}

})