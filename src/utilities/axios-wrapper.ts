import axios, { AxiosResponse } from 'axios';
// eslint-disable-next-line object-curly-newline
import { BASE_URL, TOKEN, SEARCH_URL, SEARCH_USER_URL, FOLLOWING } from '@/constants/constants';
import { GetSearchDataPayload, WhoToFollowPayload } from '@/store/types/payloadTypes';

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
  whoToFollow(payload: WhoToFollowPayload): Promise<AxiosResponse> {
    const { page, perPage } = payload;
    const since = Math.floor(Math.random() * 5000000);
    return axios.get(`${BASE_URL}${SEARCH_USER_URL}`, {
      params: {
        page,
        per_page: perPage,
        since,
      },
    });
  },
  addFollowing(username: string, token: string): Promise<AxiosResponse> {
    return axios({
      method: 'PUT',
      url: `${BASE_URL}${TOKEN}${FOLLOWING}/${username}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
