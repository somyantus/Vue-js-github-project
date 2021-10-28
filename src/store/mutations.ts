/* eslint-disable prefer-destructuring */
import Vue from 'vue';
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
  [MutationTypes.whoToFollow](state: S, payload: any): void;
  [MutationTypes.removeWhoToFollow](state: S, index: number): void;
  [MutationTypes.loading](state: S, loading: boolean): void;
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
      Vue.set(state.whoToFollowData, payload.index, payload.data[0]);
    } else {
      state.whoToFollowData = payload.data;
    }
  },
  [MutationTypes.removeWhoToFollow](state, index) {
    state.whoToFollowData.splice(index, 1);
  },
  [MutationTypes.loading](state, loading) {
    state.loading = loading;
  },
};
