import { ActionTree } from 'vuex';
import axios from '@/utilities/axios-wrapper';
import { ActionTypes, Actions } from '@/store/actions-type';
import { MutationTypes } from './mutation-types';
import { state, StateType } from './state';
import { FOLLOWING, SEARCH_URL, SEARCH_USER_URL, TOKEN } from '@/constants/constants';
import { User } from './types/userTypes';

export const actions: ActionTree<StateType, StateType> & Actions = {
  [ActionTypes.doLogin]({ commit }, token: string): Promise<void> {
    commit(MutationTypes.loading, true);
    commit(MutationTypes.loginStart);
    return axios
      .get(`${TOKEN}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        localStorage.setItem('accessToken', token);
        commit(MutationTypes.setPosts, response.data);
        commit(MutationTypes.loginStop, '');
        commit(MutationTypes.updateAccessToken, token);
        commit(MutationTypes.loading, false);
      })
      .catch((error: { response: { data: { error: string | undefined } } }) => {
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
    const { userName, page } = payload;
    axios
      .get(`${SEARCH_URL}`, {
        params: {
          q: userName,
          page,
        },
      })
      .then((response: any) => {
        commit(MutationTypes.setSearchdata, {
          searchData: response.data.items,
          append: payload.page !== 1,
        });
        commit(MutationTypes.loading, false);
      });
  },
  [ActionTypes.getUser]({ commit }, userName: string): Promise<void> {
    commit(MutationTypes.loading, true);
    return axios.get(`${SEARCH_USER_URL}/${userName}`).then((response: any) => {
      commit(MutationTypes.setSearchUser, response.data);
      commit(MutationTypes.loading, false);
    });
  },
  [ActionTypes.getWhoToFollow]({ state, commit }, payload): void {
    commit(MutationTypes.loading, true);
    const { index, page, perPage } = payload;
    const since = Math.floor(Math.random() * 5000000);
    if (index === -1) {
      axios
        .get(`${SEARCH_USER_URL}`, {
          params: {
            page,
            per_page: perPage,
            since,
          },
        })
        .then((response: any) => {
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
  [ActionTypes.addFollowing](username): void {
    axios.put(`${TOKEN}${FOLLOWING}/${username}`, {
      headers: {
        Authorization: `Bearer ${state.accessToken}`,
      },
    });
  },
  [ActionTypes.loginErrorMessage]({ commit }, errorMessage: string): void {
    commit(MutationTypes.loginStop, errorMessage);
  },
  [ActionTypes.isFollowed]({ commit }, username): void {
    axios
      .get(`${TOKEN}${FOLLOWING}/${username}`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
        },
      })
      .then(
        () => {
          commit(MutationTypes.checkFollowed, true);
        },
        () => {
          commit(MutationTypes.checkFollowed, false);
        }
      );
  },
};
