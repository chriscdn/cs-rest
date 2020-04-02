const axios = require('axios')
const get = require('lodash.get')
const FormDataFactory = require('./handlers/form-data-factory')

function getInstance(baseURL) {

	const instance = axios.create({
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
	const instance = getInstance(options.baseURL)

	const username = get(options, 'username')
	const password = get(options, 'password')
	const otcsticket = get(options, 'otcsticket')

	if (otcsticket) {

		instance.defaults.headers.common['OTCSTicket'] = otcsticket

	} else if (username && password) {

		instance.interceptors.request.use(async request => {

			if (request.headers.common['OTCSTicket']) {

				return request

			} else {

				const formData = FormDataFactory.createFormData()

				formData.append('username', username)
				formData.append('password', password)

				let response = process.node ? await axios.post(`${options.baseURL}/api/v1/auth/`, formData.getBuffer(), { headers: formData.getHeaders() }) : await axios.post(`${options.baseURL}/api/v1/auth/`, formData)

				request.headers.common['OTCSTicket'] = get(response, 'data.ticket')

				return request
			}
		})
	} else {
		throw 'You must provide an otcsticket or username and password.'
	}

	return instance
}

module.exports = axiosFactory