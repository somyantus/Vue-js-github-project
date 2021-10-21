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
};
