import { MutationTypes } from './mutation-types';
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.loginStart](state: S): void;
  [MutationTypes.loginStop](state: S, errorMessage: string): void;
  [MutationTypes.logOut](state: S): void;
  [MutationTypes.change](state: S, token: string): void;
  [MutationTypes.setPosts](state: S, data: string): void;
  [MutationTypes.updateAccessToken](state: S, accessToken: string): void;
};

export const mutations: Mutations = {
  [MutationTypes.loginStart](state) {
    state.loggingIn = true;
  },
  [MutationTypes.loginStop](state, errorMessage) {
    state.loggingIn = false;
    state.loginError = errorMessage;
  },
  [MutationTypes.logOut](state) {
    state.accessToken = '';
  },
  [MutationTypes.change](state, token) {
    state.token = token;
    console.log(token);
  },
  [MutationTypes.setPosts](state, data) {
    state.data = data;
    console.log(data);
  },
  [MutationTypes.updateAccessToken](state, accessToken) {
    state.accessToken = accessToken;
    console.log(accessToken);
  },
};
