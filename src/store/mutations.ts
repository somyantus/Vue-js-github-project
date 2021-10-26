import { MutationTypes } from './mutation-types';
import { StateType } from './state';
import { SearchDataPayload } from './types/payloadTypes';

export type Mutations<S = StateType> = {
  [MutationTypes.loginStart](state: S): void;
  [MutationTypes.loginStop](state: S, errorMessage: string): void;
  [MutationTypes.logOut](state: S): void;
  [MutationTypes.setPosts](state: S, data: string): void;
  [MutationTypes.updateAccessToken](state: S, accessToken: string): void;
  [MutationTypes.setSearchdata](state: S, payload: SearchDataPayload): void;
  [MutationTypes.setSearchUser](state: S, searchUser: string): void;
  [MutationTypes.toggleLoader](state: S, enabled: boolean): void;
};

export const mutations: Mutations = {
  [MutationTypes.loginStart](state) {
    state.loggingIn = true;
    state.loading = true;
  },
  [MutationTypes.loginStop](state, errorMessage) {
    state.loggingIn = false;
    state.loading = false;
    state.loginError = errorMessage;
  },
  [MutationTypes.logOut](state) {
    state.accessToken = '';
  },
  [MutationTypes.setPosts](state, data) {
    state.data = data;
  },
  [MutationTypes.updateAccessToken](state, accessToken) {
    state.accessToken = accessToken;
  },
  [MutationTypes.setSearchdata](state, payload) {
    const { searchData, append } = payload;
    if (append) {
      state.searchData = [...state.searchData, ...searchData];
    } else {
      state.searchData = searchData;
    }
  },
  [MutationTypes.setSearchUser](state, searchUser) {
    state.searchUser = searchUser;
  },
  [MutationTypes.toggleLoader](state, enabled) {
    state.loading = enabled;
  },
};
