module.exports = session => ({

  // https://knowledge.opentext.com/knowledge/cs.dll/Open/67789539

  search (where, params = {}) {
    return session.postBody('api/v2/search', {
      where,
      ...params
    })
  },

  regions (params = {}) {
    return session.get('api/v1/regions', params)
  }

})
