import { ActionTree } from 'vuex';
import AxiosWrapper from '@/utilities/axios-wrapper';
import { ActionTypes, Actions } from '@/store/actions-type';
import { MutationTypes } from './mutation-types';
import { StateType, state } from './state';

export const actions: ActionTree<StateType, StateType> & Actions = {
  [ActionTypes.doLogin]({ commit }, token: string): Promise<void> {
    state.loading = true;
    commit(MutationTypes.loginStart);
    return AxiosWrapper.index(token)
      .then((response: any) => {
        localStorage.setItem('accessToken', token);
        commit(MutationTypes.setPosts, response.data);
        commit(MutationTypes.loginStop, '');
        commit(MutationTypes.updateAccessToken, token);
        state.loading = false;
      })
      .catch((error: any) => {
        commit(MutationTypes.loginStop, error.response.data.error);
        commit(MutationTypes.updateAccessToken, '');
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
    state.loading = true;
    AxiosWrapper.searchData(payload).then((response: any) => {
      commit(MutationTypes.setSearchdata, {
        searchData: response.data.items,
        append: payload.page !== 1,
      });
      state.loading = false;
    });
  },
  [ActionTypes.getUser]({ commit }, userName: string): Promise<void> {
    state.loading = true;
    return AxiosWrapper.searchUser(userName).then((response: any) => {
      commit(MutationTypes.setSearchUser, response.data);
      state.loading = false;
    });
  },
  [ActionTypes.getWhoToFollow]({ commit }, payload): void {
    state.loading = true;
    const { index } = payload;
    AxiosWrapper.whoToFollow(payload).then((response: any) => {
      commit(MutationTypes.whoToFollow, {
        data: response.data,
        index,
      });
      state.loading = false;
    });
  },
  [ActionTypes.addFollowing]({ state }, username): void {
    AxiosWrapper.addFollowing(username, state.accessToken);
  },
};
