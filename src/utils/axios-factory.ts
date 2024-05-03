import axios, { AxiosInstance } from "axios";
import { components } from "../types/cs-rest-types/schema";

export type CSRestOptions = {
  username?: string;
  password?: string;
  otcsticket?: string;
  baseUrl: string;
};

const getInstance = (options: CSRestOptions) => {
  const instance = axios.create({
    baseURL: options.baseUrl,
    paramsSerializer: {
      // ensures ?field=A&field=B instead of ?field[]=A&field[]=B
      indexes: null,
    },
  });

  instance.interceptors.response.use(
    (response) => {
      const otcsticket = response?.headers.otcsticket;

      if (otcsticket) {
        instance.defaults.headers.common.OTCSTicket = otcsticket;
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosFactory = (options: CSRestOptions): AxiosInstance => {
  const instance = getInstance(options);

  const username = options.username;
  const password = options.password;
  const otcsticket = options.otcsticket;

  if (otcsticket) {
    instance.defaults.headers.common.OTCSTicket = otcsticket;
  } else if (username && password) {
    instance.interceptors.request.use(async (config) => {
      if (config.headers.common?.OTCSTicket) {
        return config;
      } else {
        const response = await axios.post<
          components["schemas"]["auth_AuthenticationInfo"]
        >(
          `${options.baseUrl}/api/v1/auth/`,
          {
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        config.headers.OTCSTicket = response.data.ticket;

        return config;
      }
    });
  } else {
    throw Error("You must provide an otcsticket or username and password.");
  }

  return instance;
};

export default axiosFactory;
