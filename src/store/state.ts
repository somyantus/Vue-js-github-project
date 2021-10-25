import { User } from './types/userTypes';

export const state = {
  data: {},
  searchData: [] as User[],
  accessToken: '',
  loggingIn: false,
  loading: false,
  loginError: '',
  searchUser: {},
};

export type StateType = typeof state;
