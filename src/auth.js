const axios = require('axios')
const get = require('lodash.get')
const {formDataFactory, isNode} = require('./formDataFactory')

function getInstance(baseURL) {

	let instance = axios.create({
		baseURL
	})

	instance.interceptors.response.use(response => {
		let otcsticket = get(response, 'headers.otcsticket')

		if (otcsticket) {
			instance.defaults.headers.common['OTCSTicket'] = otcsticket
		}
		return response
	}, error => {
		return Promise.reject(error)
	})

	return instance
}

function axiosFactory(options) {
	let instance = getInstance(options.baseURL)

	let username = get(options, 'username')
	let password = get(options, 'password')
	let otcsticket = get(options, 'otcsticket')

	if (otcsticket) {

		instance.defaults.headers.common['OTCSTicket'] = otcsticket

	} else if (username && password) {

		instance.interceptors.request.use(async request => {

			if (request.headers.common['OTCSTicket']) {

				return request

			} else {

				const formData = formDataFactory()

				formData.append('username', username)
				formData.append('password', password)

				// return axios.post(`${options.baseURL}/api/v1/auth/`, formData)

				let response = isNode 
					? await axios.post(`${options.baseURL}/api/v1/auth/`, formData.getBuffer(), {headers: formData.getHeaders()})
					: await axios.post(`${options.baseURL}/api/v1/auth/`, formData)

				request.headers.common['OTCSTicket'] = get(response, 'data.ticket')

				return request


				// return axios.post(`${options.baseURL}/api/v1/auth/`, formData.getBuffer(), {
				// 		headers: formData.getHeaders()
				// 	})
				// 	.then(response => {
				// 		request.headers.common['OTCSTicket'] = get(response, 'data.ticket')
				// 		return request
				// 	})
			}
		})
	} else {
		// return Promise.reject('You must provide an otcsticket or username and password.')
		throw 'You must provide an otcsticket or username and password.'
	}

	return instance
}

module.exports = axiosFactory