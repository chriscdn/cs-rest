# @chriscdn/cs-rest

Simplified authentication and REST calls for OpenText Content Server.

## Features

- Provides a simplified interface for managing authentication with the OpenText Content Server REST API
- Automatically adds the `OTCSTicket` header to each subsequent request
- Refreshes the `OTCSTicket` token automatically (minimising token expiration errors)
- Based on the [axios](https://github.com/axios/axios) HTTP client
- Works with Node.js and the browser

## Installing

Using npm:

```bash
$ npm install @chriscdn/cs-rest
```

Using yarn:

```bash
$ yarn add @chriscdn/cs-rest
```

Using unpkg CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/@chriscdn/cs-rest/lib/index.min.js"></script>
```

## Example

Authenticate with a username and password and get the details of a node:

```js
const CSREST = require('@chriscdn/cs-rest')

// session wraps an axios instance
const session = new CSREST.Session({
	baseURL: 'https://.../cs.exe',
	username: 'Admin',
	password: '******'
})

// a Session instance can issue authenticated requests to Content Server
const response = await session.get('/api/v1/nodes/2000')
```

Authenticate with an `OTCSTicket`:

```js
const session = new CSREST.Session({
	baseURL: 'https://.../cs.exe',
	otcsticket: '<token>'
})
```

## cs-rest API

Requests can be made with the `get`, `post`, `put`, `patch`, `delete`, and `options` methods on the `Session` instance.  These have the same interface as the respective methods in [axios](https://github.com/axios/axios).

Content Server returns a fresh `OTCSTicket` with each successful API call.  The `Session` instance will automatically retain it for the subsequent request.

#### POST, PUT, & PATCH

The OpenText Content Server REST API doesn't accept requests that use the `application/json` content type.  This means post, put, & patch requests need to use a content type of `multipart/form-data`, which makes writing the request a little more verbose.  For example, to create a new folder:

```js
const formData = new FormData()
formData.append('type', 0)
formData.append('parent_id', 2000)
formDAta.append('name', 'My New Folder')

const response = await session.post('api/v2/nodes', formData)
```

The `Session` class provides a `postForm` (also `putForm` and `patchForm`) method to simplify this to:

```js
const response = await session.postForm('api/v2/nodes', {
	type: 0,
	parent_id: 2000,
	name: 'My New Folder'
})
```

#### axios instance

The underlying `axios` instance is available if these methods don't suffice:

```js
const axios = session.axios
```

#### Thin Wrapper

The `Session` class provides a few convenience methods for performing commonly used REST requests.  By no means is this complete, and it's possible the API will change in the future.

For example, there is a method for creating a new folder:

```js
const response = await session.nodes.addFolder(2000, 'My New Folder')
```

A method also exists for uploading a document, where `file` is either:

- a browser [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object (e.g,. from drag and drop); or
- a Node.js file (e.g., `const file = fs.readFileSync('<file path>')`

```js
const response = await session.nodes.uploadDocument(2000, "My New File", file)
```

See the `src/` directory for more examples.

## Credits

- [OpenText Content Server REST API](https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s&tab=501)
- [kwe.li GmbH](https://kwe.li/)

## License

[MIT](LICENSE)