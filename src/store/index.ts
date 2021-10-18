/* eslint-disable import/no-duplicates */
import Vue from 'vue';
import Vuex from 'vuex';
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { State, state } from './state';
import { Actions, actions } from './actions';
import { Mutations, mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});

export type Store = Omit<VuexStore<State>, 'commit' | 'dispatch'> & {
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
