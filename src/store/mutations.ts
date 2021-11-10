import Vue from 'vue';
import { MutationTypes } from './mutation-types';
import { StateType } from './state';
import { SearchDataPayload, MutationWhoToFollowPayload } from './types/payloadTypes';
import { User } from './types/userTypes';

export type Mutations<S = StateType> = {
  [MutationTypes.loginStart](state: S): void;
  [MutationTypes.loginStop](state: S, errorMessage: string): void;
  [MutationTypes.logOut](state: S): void;
  [MutationTypes.setPosts](state: S, data: User): void;
  [MutationTypes.updateAccessToken](state: S, accessToken: string): void;
  [MutationTypes.setSearchdata](state: S, payload: SearchDataPayload): void;
  [MutationTypes.setSearchUser](state: S, searchUser: User): void;
  [MutationTypes.whoToFollow](state: S, payload: MutationWhoToFollowPayload): void;
  [MutationTypes.loading](state: S, loading: boolean): void;
  [MutationTypes.checkFollowed](state: S, following: boolean): void;
};

export const mutations: Mutations = {
  [MutationTypes.loginStart](state) {
    state.loggingIn = true;
    state.loading = true;
  },
  [MutationTypes.loginStop](state, errorMessage) {
    state.loggingIn = false;
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
  [MutationTypes.whoToFollow](state, payload) {
    if (payload.index >= 0) {
      Vue.set(state.whoToFollowVisibleData, payload.index, payload.data[0]);
      state.whoToFollowLastIndex += 1;
    } else {
      state.whoToFollowData = payload.data;
      state.whoToFollowVisibleData = payload.data.slice(0, 3);
      state.whoToFollowLastIndex = 3;
    }
  },
  [MutationTypes.loading](state, loading) {
    state.loading = loading;
  },
  [MutationTypes.checkFollowed](state, following) {
    state.following = following;
  },
};
