import axios, { AxiosRequestConfig } from 'axios';
import Vue from 'vue';
import { BASE_URL } from '@/constants/constants';
import { state } from '@/store/state';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

export function header(token: string): AxiosRequestConfig<any> {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

instance.interceptors.response.use(
  function res(response) {
    return response;
  },
  function err(error) {
    if (error.response && error.response.status !== 404) {
      Vue.$toast(error.response.data.message);
      state.loading = false;
    }
    return Promise.reject(error);
  }
);
export default instance;
