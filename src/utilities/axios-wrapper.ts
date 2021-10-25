import axios, { AxiosResponse } from 'axios';
import Constants from '@/constants/constants';

export default {
  index(token: string): Promise<AxiosResponse> {
    return axios.get(Constants.TokenUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  searchData(payload: any): Promise<AxiosResponse> {
    return axios.get(Constants.SearchDataUrl, {
      params: { q: payload.userName, page: payload.page },
    });
  },
  searchUser(userName: string): Promise<AxiosResponse> {
    return axios.get(Constants.TokenUrl, {
      params: {
        q: userName,
      },
    });
  },
};
