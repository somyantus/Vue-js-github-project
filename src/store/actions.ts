import { ActionTree } from 'vuex';
import AxiosWrapper from '@/utilities/axios-wrapper';
import { ActionTypes, Actions } from '@/store/actions-type';
import { MutationTypes } from './mutation-types';
import { StateType } from './state';

export const actions: ActionTree<StateType, StateType> & Actions = {
  [ActionTypes.toggleLoader]({ commit }, enabled): void {
    commit(MutationTypes.toggleLoader, enabled);
  },
  [ActionTypes.doLogin]({ commit }, token: string): Promise<any> {
    commit(MutationTypes.loginStart);
    return new Promise((resolve, reject) => {
      AxiosWrapper.index(token)
        .then((response: any) => {
          localStorage.setItem('accessToken', token);
          commit(MutationTypes.setPosts, response.data);
          commit(MutationTypes.loginStop, '');
          commit(MutationTypes.updateAccessToken, token);
          resolve(true);
        })
        .catch((error: any) => {
          commit(MutationTypes.loginStop, error.response.data.error);
          commit(MutationTypes.updateAccessToken, '');
          reject(error);
        });
    });
  },
  [ActionTypes.fetchAccessToken]({ commit, dispatch }): void {
    const token = localStorage.getItem('accessToken') || '';
    commit(MutationTypes.updateAccessToken, token);
    if (token) {
      dispatch('doLogin', token);
    }
  },
  [ActionTypes.logOut]({ commit }): void {
    commit(MutationTypes.logOut);
    localStorage.removeItem('accessToken');
  },
  [ActionTypes.getSearchData]({ commit }, payload): void {
    AxiosWrapper.searchData(payload).then((response: any) => {
      commit(MutationTypes.setSearchdata, {
        searchData: response.data.items,
        append: payload.page !== 1,
      });
    });
  },
  [ActionTypes.getUser]({ commit }, userName: string): Promise<void> {
    return AxiosWrapper.searchUser(userName).then((response: any) => {
      commit(MutationTypes.setSearchUser, response.data);
      console.log(response.data);
    });
  },
};
