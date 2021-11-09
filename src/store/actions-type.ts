import { ActionContext } from 'vuex';
import { Mutations } from './mutations';
import { StateType } from './state';
import { GetSearchDataPayload, WhoToFollowPayload } from './types/payloadTypes';

export enum ActionTypes {
  doLogin = 'doLogin',
  fetchAccessToken = 'fetchAccessToken',
  logOut = 'logOut',
  getSearchData = 'getSearchData',
  getUser = 'getUser',
  getWhoToFollow = 'getWhoToFollow',
  removeWhoToFollow = 'removeWhoToFollow',
  addFollowing = 'addFollowing',
  loginErrorMessage = 'loginErrorMssg',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<StateType, StateType>, 'commit'>;

export interface Actions {
  [ActionTypes.doLogin]({ commit }: AugmentedActionContext, payload: string): Promise<void>;
  [ActionTypes.fetchAccessToken](
    { commit }: AugmentedActionContext,
    { dispatch }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.logOut]({ commit }: AugmentedActionContext): void;
  [ActionTypes.getSearchData](
    { commit }: AugmentedActionContext,
    payload: GetSearchDataPayload
  ): void;
  [ActionTypes.getUser]({ commit }: AugmentedActionContext, payload: string): Promise<void>;
  [ActionTypes.getWhoToFollow](
    { commit }: AugmentedActionContext,
    payload: WhoToFollowPayload
  ): void;
  [ActionTypes.addFollowing]({ commit }: AugmentedActionContext, payload: string): void;
  [ActionTypes.loginErrorMessage]({ commit }: AugmentedActionContext, payload: string): void;
}
