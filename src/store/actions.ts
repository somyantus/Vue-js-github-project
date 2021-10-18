import { ActionContext, ActionTree } from 'vuex';
import wrapper from '@/store/axios-wrapper';
import { ActionTypes } from '@/store/actions-type';
import { Mutations } from './mutations';
import { MutationTypes } from './mutation-types';
import { State } from './state';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.doLogin](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<any>;
  [ActionTypes.fetchAccessToken](
    { commit }: AugmentedActionContext,
    { dispatch }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.logOut]({ commit }: AugmentedActionContext): Promise<any>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.doLogin]({ commit }, token: string): Promise<any> {
    commit(MutationTypes.loginStart);
    return new Promise((resolve, reject) => {
      wrapper
        .index()
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
      console.log('Logged out');
      resolve(true);
    });
  },
};
