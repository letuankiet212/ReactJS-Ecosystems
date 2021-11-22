import axios from 'axios';

const service = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  timeout: 10000
});

service.interceptors.response.use(
  function (response) {
    return response.data;
  },

  function (error) {
    return Promise.reject(error.message);
  }
);

export default service;
