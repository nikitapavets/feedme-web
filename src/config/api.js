function isDevelopment() {
  if (process && process.env && process.env.NODE_ENV) {
    return process.env.NODE_ENV.includes('development');
  }

  if (window && window.EVOMENTOR_ENV) {
    return window.EVOMENTOR_ENV === 'development';
  }

  return true;
}

export default {
  url: isDevelopment() ? 'http://localhost:8000/' : 'http://localhost:8000/'
};
