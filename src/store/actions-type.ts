import { ActionContext } from 'vuex';
import { Mutations } from './mutations';
import { StateType } from './state';
import { GetSearchDataPayload } from './types/payloadTypes';

export enum ActionTypes {
  doLogin = 'doLogin',
  fetchAccessToken = 'fetchAccessToken',
  logOut = 'logOut',
  getSearchData = 'getSearchData',
  getUser = 'getUser',
  getWhoToFollow = 'getWhoToFollow',
  removeWhoToFollow = 'removeWhoToFollow',
  toggleLoader = 'toggleLoader',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<
  ActionContext<StateType, StateType>,
  'commit'
>;

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
  [ActionTypes.logOut]({
    commit,
  }: AugmentedActionContext): void;
  [ActionTypes.getSearchData](
    { commit }: AugmentedActionContext,
    payload: GetSearchDataPayload
  ): void;
  [ActionTypes.getUser](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<void>;
  [ActionTypes.toggleLoader](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}
