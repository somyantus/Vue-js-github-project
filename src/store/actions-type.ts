import { ActionContext } from 'vuex';
import { Mutations } from './mutations';
import { StateType } from './state';

export enum ActionTypes {
  doLogin = 'doLogin',
  fetchAccessToken = 'fetchAccessToken',
  logOut = 'logOut',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<StateType, StateType>, 'commit'>;

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
