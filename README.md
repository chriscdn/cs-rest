# @chriscdn/cs-rest

## Motivation

This module assists in three areas when developing with the OpenText Content Server REST API.  It uses [axios](https://github.com/axios/axios) for XMLHttpRequest requests and is compatible with the browser and Node.js.

### Authentication

Every Content Server REST API call (with the exception of authentication) requires an `OTCSTicket` header with a valid token.  Tokens can be retrieved in one of three ways:

- a request to `/api/v1/auth/` with the username and password;
- by rendering a page in the context of a user and embedding the token in the page; and
- by fetching the `otcsticket` header value on authenticated REST requests.

Tokens expire according to the policy defined in the "Configure Security Parameters" administration page.  This can of often will be a fixed amount of time after the token was issued (e.g., 30 minutes).  The token must be updated and managed to maintain the session.

This module simplifies the process of authentication (using a username and password or `OTCSTicket` value), adds the token to the header, and updates the token when a new one is retrieved in the headers of a request.

### POST, PUT, and PATCH Requests

The Content Server REST API doesn't understand requests with the `Content-Type` header set to `application/json`.  This usually causes problems with POST, PUT, and PATCH requests.

This module provides a small wrapper to convert a JavaScript object into a format that can be submitted as `multipart/form-data`, which Content Server understands.

### Thin Wrapper

The module also provides a thin wrapper for some commonly used API calls.  This is still a work in progress and the final interface is still to be determined.

## Installing

Using npm:

```bash
$ npm install @chriscdn/cs-rest
```

Using yarn:

```bash
$ yarn add @chriscdn/cs-rest
```

## Usage

### Authentication and Requests

Start by importing the `auth` function into your module.

```js
const {auth} = require('@chriscdn/cs-rest')
```

This returns a function than can be used to create an authenticated `axios` instance.

**Authentication with a username and password:**

```js
const csAxios = auth({
	baseURL: 'https://...cs.exe',
	username: 'Admin',
	password: '******'
})
```

**Authentication with an OTCSTicket:**

```js
const csAxios = auth({
	baseURL: 'https://...cs.exe',
	otcsticket: '<token>'
})
```

The `csAxios` variable is an instance of `axios` with the `baseURL` set to the Content Server CGI path.  See the [axios documentation](https://github.com/axios/axios) to learn how to make basic requests.

Examples:

```js
// Fetch information about the node with dataid 2000
const response = await csAxios.get('/api/v1/nodes/2000')

// Fetch the children of the node with dataid 2000
const response = await csAxios.get('/api/v1/nodes/2000/nodes')
````

### Sessions

A `Session` object is a small wrapper around `auth` and adds some convenience methods.

Start by importing the `Session` class into your project and instantiating it:

```js
const {Session} = require('@chriscdn/cs-rest')

const session = new Session({
	// same options as auth
})

```

The `session` can be used in a similar manner to `csAxios` for performing GET, POST, PUT, DELETE, OPTIONS, and PATCH requests:

```js
// Fetch information about the node with dataid 2000
const response = await session.get('/api/v1/nodes/2000')
```

It also adds `postForm`, `putForm`, and `patchForm` methods to convert the request into a `FormData` object and submit it as `multipart/form-data`.

For example, to create a folder:

```js
const response = await session.postForm('api/v2/nodes', {
	type: 0, // 0 is the folder subtype
	parent_id: 2000,
	name: 'My New Folder', 
})
```

## Thin Wrapper

