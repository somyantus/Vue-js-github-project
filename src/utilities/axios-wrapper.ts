import axios from 'axios';
import { BASE_URL } from '@/constants/constants';
import router from '@/router/router';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

const responseHandler = (response: { status: number }) => {
  if (response.status === 401) {
    // window.location = '/login';
    router.replace('login');
  }

  return response;
};

const errorHandler = (error: any) => {
  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default instance;
// export default {
//   index(token: string): Promise<AxiosResponse<User>> {
//     return axios.get(`${BASE_URL}${TOKEN}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   },
//   searchData(payload: GetSearchDataPayload): Promise<AxiosResponse> {
//     const { userName, page } = payload;
//     return axios.get(`${BASE_URL}${SEARCH_URL}`, {
//       params: { q: userName, page },
//     });
//   },
//   searchUser(userName: string): Promise<AxiosResponse<User>> {
//     return axios.get(`${BASE_URL}${SEARCH_USER_URL}/${userName}`);
//   },
//   whoToFollow(payload: WhoToFollowPayload): Promise<AxiosResponse<User[]>> {
//     const { page, perPage } = payload;
//     const since = Math.floor(Math.random() * 5000000);
//     return axios.get(`${BASE_URL}${SEARCH_USER_URL}`, {
//       params: {
//         page,
//         per_page: perPage,
//         since,
//       },
//     });
//   },
//   addFollowing(username: string, token: string): Promise<AxiosResponse> {
//     return axios({
//       method: 'PUT',
//       url: `${BASE_URL}${TOKEN}${FOLLOWING}/${username}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   },
//   isFollowed(username: string, token: string): Promise<AxiosResponse> {
//     return axios({
//       method: 'GET',
//       url: `${BASE_URL}${TOKEN}${FOLLOWING}/${username}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   },
// };

// export function apiRequest(
//   requestMethod: string,
//   url: string,
//   params: string,
//   headers: {},
//   token: string
// ): void {
//   Axios({
//     url,
//     params,
//     method: requestMethod,
//     headers,
//     token,
//   });
// }
