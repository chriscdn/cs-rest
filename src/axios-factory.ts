import FormDataFactory from './handlers/form-data-factory'
import axios, { AxiosInstance } from 'axios'
import get from 'lodash.get'

function getInstance(options: CSRestOptions) {
  const instance = axios.create({
    baseURL: options.baseUrl,
  })

  instance.interceptors.response.use(
    (response) => {
      const otcsticket = get(response, 'headers.otcsticket')

      if (otcsticket) {
        instance.defaults.headers.common.OTCSTicket = otcsticket
      }
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance
}

export interface CSRestOptions {
  username?: string
  password?: string
  otcsticket?: string
  baseUrl: string
}

function axiosFactory(options: CSRestOptions): AxiosInstance {
  const instance = getInstance(options)

  const username = options.username
  const password = options.password
  const otcsticket = options.otcsticket

  if (otcsticket) {
    instance.defaults.headers.common.OTCSTicket = otcsticket
  } else if (username && password) {
    instance.interceptors.request.use(async (config) => {
      if (config.headers.common?.OTCSTicket) {
        return config
      } else {
        const formData = FormDataFactory.createFormData()

        formData.append('username', username)
        formData.append('password', password)

        const response = process.node
          ? await axios.post(
              `${options.baseUrl}/api/v1/auth/`,
              formData.getBuffer(),
              { headers: formData.getHeaders() }
            )
          : await axios.post(`${options.baseUrl}/api/v1/auth/`, formData)

        config.headers.OTCSTicket = get(response, 'data.ticket')

        return config
      }
    })
  } else {
    throw Error('You must provide an otcsticket or username and password.')
  }

  return instance
}

export default axiosFactory
