import Vue from 'vue';
import Vuex, { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { StateType, state } from './state';
import { actions } from './actions';
import { Actions } from './actions-type';
import { Mutations, mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
});

export type Store = Omit<VuexStore<StateType>, 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
