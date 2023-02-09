import ServiceAbstract from './service-abstract'

class Search extends ServiceAbstract {
  search(where, params = {}) {
    return this.session.postBody('api/v2/search', {
      where,
      ...params,
    })
  }

  regions(params = {}) {
    return this.session.get('api/v1/regions', params)
  }
}

export default Search
