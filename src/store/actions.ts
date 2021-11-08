import { ActionTree } from 'vuex';
import AxiosWrapper from '@/utilities/axios-wrapper';
import { ActionTypes, Actions } from '@/store/actions-type';
import { MutationTypes } from './mutation-types';
import { StateType } from './state';

export const actions: ActionTree<StateType, StateType> & Actions = {
  [ActionTypes.doLogin]({ commit }, token: string): Promise<void> {
    commit(MutationTypes.loading, true);
    commit(MutationTypes.loginStart);
    return AxiosWrapper.index(token)
      .then((response) => {
        localStorage.setItem('accessToken', token);
        commit(MutationTypes.setPosts, response.data);
        commit(MutationTypes.loginStop, '');
        commit(MutationTypes.updateAccessToken, token);
        commit(MutationTypes.loading, false);
      })
      .catch((error) => {
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
    commit(MutationTypes.loading, true);
    AxiosWrapper.searchData(payload).then((response: any) => {
      commit(MutationTypes.setSearchdata, {
        searchData: response.data.items,
        append: payload.page !== 1,
      });
      commit(MutationTypes.loading, false);
    });
  },
  [ActionTypes.getUser]({ commit }, userName: string): Promise<void> {
    commit(MutationTypes.loading, true);
    return AxiosWrapper.searchUser(userName).then((response) => {
      commit(MutationTypes.setSearchUser, response.data);
      commit(MutationTypes.loading, false);
    });
  },
  [ActionTypes.getWhoToFollow]({ state, commit }, payload): void {
    commit(MutationTypes.loading, true);
    const { index } = payload;

    if (index === -1) {
      AxiosWrapper.whoToFollow(payload).then((response) => {
        commit(MutationTypes.whoToFollow, {
          data: response.data,
          index,
        });
        commit(MutationTypes.loading, false);
      });
    } else {
      const nextFollow = state.whoToFollowData.slice(
        state.whoToFollowLastIndex,
        state.whoToFollowLastIndex + 1
      );
      commit(MutationTypes.whoToFollow, {
        data: nextFollow,
        index,
      });
      commit(MutationTypes.loading, false);
    }
  },
  [ActionTypes.addFollowing]({ state }, username): void {
    AxiosWrapper.addFollowing(username, state.accessToken);
  },
};
