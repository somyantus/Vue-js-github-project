import axios, { AxiosResponse } from 'axios';
import {
  BASE_URL,
  TOKEN,
  SEARCH_URL,
  SEARCH_USER_URL,
} from '@/constants/constants';
import { GetSearchDataPayload } from '@/store/types/payloadTypes';

export default {
  index(token: string): Promise<AxiosResponse> {
    return axios.get(`${BASE_URL}${TOKEN}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  searchData(payload: GetSearchDataPayload): Promise<AxiosResponse> {
    const { userName, page } = payload;
    return axios.get(`${BASE_URL}${SEARCH_URL}`, {
      params: { q: userName, page },
    });
  },
  searchUser(userName: string): Promise<AxiosResponse> {
    return axios.get(`${BASE_URL}${SEARCH_USER_URL}/${userName}`);
  },
};
