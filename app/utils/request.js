/* eslint-disable camelcase */
import axios from 'axios';
import { notification } from 'antd';

export const axiosInstance = axios.create({
  responseType: 'json',
});

axiosInstance.interceptors.response.use(
  response => response.data,
  err => {
    notification.error({
      description: err.toJSON().message,
    });

    return Promise.reject(err);
  },
);

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  return axiosInstance(options);
}
