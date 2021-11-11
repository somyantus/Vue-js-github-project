import axios from 'axios';
import { BASE_URL } from '@/constants/constants';
import { state } from '@/store/state';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

instance.interceptors.response.use(
  function res(response) {
    return response;
  },
  function err(error) {
    if (error.response && error.response.status !== 404) {
      alert(error.response.data.message);
      state.loading = false;
    }
    return Promise.reject(error);
  }
);
export default instance;
