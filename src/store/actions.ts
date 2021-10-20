import { ActionTree } from 'vuex';
import AxiosWrapper from '@/store/axios-wrapper';
import { ActionTypes, Actions } from '@/store/actions-type';
import { MutationTypes } from './mutation-types';
import { StateType } from './state';

export const actions: ActionTree<StateType, StateType> & Actions = {
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
        .catch((error: string | any) => {
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
  [ActionTypes.logOut]({ commit }): Promise<any> {
    return new Promise((resolve) => {
      commit(MutationTypes.logOut);
      localStorage.removeItem('accessToken');
      resolve(true);
    });
  },
};
