/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'universal-cookie';
import config from '../config';

/**
 * Check Auth Header for Auth Token
 */
const checkAuthHeader = (response, cookies = null) => {
  const auth = response.headers.authorization;

  if (auth) {
    const universalCookies = cookies || new Cookies();

    universalCookies.set('auth', auth, { path: '/' });
  }
};

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: config.api.url
});

/**
 * Request Wrapper with default success/error actions
 */
const request = options => {
  const onSuccess = response => {
    checkAuthHeader(response, options.cookies);

    return response.data;
  };

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    throw error.response || new Error(error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
