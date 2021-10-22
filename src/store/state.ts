export const state = {
  data: {},
  searchData: [] as unknown,
  accessToken: '',
  loggingIn: false,
  loading: false,
  loginError: '',
  searchUser: {},
};

export type StateType = typeof state;
