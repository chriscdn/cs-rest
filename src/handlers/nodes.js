// const FormDataFactory = require('./form-data-factory')
const assert = require('assert')
const SubTypes = require('./subtypes.json')

module.exports = session => ({

  addablenodetypes (dataid) {
    return session.get(`api/v1/nodes/${dataid}/addablenodetypes`)
  },

  async addDocument ({
    parent_id,
    fileHandler,
    apiVersion = 'v1', // v1 or v2
    name = null,
    options = {}
  }) {
    assert(parent_id != null, 'parent_id cannot be null')
    assert(fileHandler != null, 'fileHandler cannot be null')
    assert(['v1', 'v2'].includes(apiVersion), "apiVersion must be in ['v1','v2']")

    const url = `api/${apiVersion}/nodes`

    if (process.node) {
      // node.js
      const fsp = require('fs').promises
      const path = require('path')

      const f = await fsp.readFile(fileHandler)
      const csName = name || path.basename(fileHandler)

      const params = {
        ...options,
        type: SubTypes.Document,
        name: csName,
        parent_id,
        file: {
          file: f,
          name: csName
        }
      }

      return session.postForm(url, params)
    } else {
      // browser
      const csName = name || fileHandler.name

      const params = {
        ...options,
        type: SubTypes.Document,
        name: csName,
        parent_id,
        file: {
          file: fileHandler,
          name: csName
        }
      }

      return session.postForm(url, params)
    }
  },

  async addDocumentMajor ({
    parent_id,
    fileHandler,
    name = null,
    description = null,
    options = {}
  }) {
    const response = await this.addDocument({
      parent_id,
      fileHandler,
      name,
      options: {
        ...options,
        advanced_versioning: true
      }
    })

    const dataid = response.data.id

    await session.versions.promote({
      dataid,
      versionNumber: 1,
      description
    })

    await session.versions.deleteVersion({
      dataid,
      versionNumber: 1
    })

    return response
  },

  addItem (type, parent_id, name, params = {}) {
    return session.postBody('api/v2/nodes', {
      type,
      parent_id,
      name,
      ...params
    })
  },

  node ({ dataid, apiVersion = 'v2', params = {} }) {
    return session.get(`api/${apiVersion}/nodes/${dataid}`, {
      params
    })
  },

  ancestors (dataid, params = {}) {
    return session.get(`api/v1/nodes/${dataid}/ancestors`, {
      params
    })
  },

  volumeInfo (objType) {
    return session.get(`api/v1/volumes/${objType}`)
  },

  volumes () {
    return session.get('api/v2/volumes')
  },

  addFolder (parent_id, name, params = {}) {
    return this.addItem(SubTypes.Folder, parent_id, name, params)
  },

  addGeneration (parent_id, name, original_id, version_number, params = {}) {
    return this.addItem(SubTypes.Generation, parent_id, name, {
      original_id,
      version_number,
      ...params
    })
  },

  nodes (dataid, params = {}) {
    // https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
    return session.get(`api/v2/nodes/${dataid}/nodes`, {
      params
    })
  },

  children (dataid, params = {}) {
    return this.nodes(dataid, params)
  },

  delete (dataid) {
    return session.delete(`api/v1/nodes/${dataid}`)
  },

  download ({ dataid, apiVersion = 'v1', filePath }) {
    // session.nodes.download(1267501, 'v2', '/Users/chris/Downloads/test.pdf')
    if (process.node) {
      return session.get(`api/${apiVersion}/nodes/${dataid}/content`, {
        responseType: 'stream'
      })
        .then(response => {
          const fs = require('fs')
          const writer = fs.createWriteStream(filePath)

          response.data.pipe(writer)

          return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
          })
        })
    } else {
      return Promise.reject('Not implemented yet')
    }
  },

  audit ({
    dataid,
    apiVersion = 'v2',
    params = {}
  }) {
    return session.get(`api/${apiVersion}/nodes/${dataid}/audit`, { params })
  }

})
