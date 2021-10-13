import { createStore } from 'vuex'
import {HTTP} from "@/common/http-common";
import HttpCommon from "@/common/http-common";

export default createStore({
  state: {
    user: 'winter.bodom',
    releases: [],
    errors: [],
    currentRelease: {},
    isLoading: true
  },
  getters: {
    getCurrentRelease(state) {
      return state.currentRelease;
    },
    getIsLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    reloadUserAndApi(state, name) {
      state.isLoading = true;
      state.user = name;
      let endpoint = HttpCommon.getCollectionApi(state.user);
      HTTP.get(endpoint)
        .then(response => {
          state.releases = response.data.releases
          state.isLoading = false;
        })
        .catch(e => {
          state.errors.push(e)
        })
    },
    setCurrentRelease(state, release) {
      state.currentRelease = release;
    }

  },
  actions: {
    setCurrentRelease ({commit, state}, itemId) {
      state.isLoading = true;
      state.currentRelease = {};
      HTTP.get(HttpCommon.getReleaseApi(itemId))
        .then(response => {
          commit('setCurrentRelease', response.data);
          state.isLoading = false;
        })
        .catch(e => {
          state.errors.push(e)
        })
    }
  },
  modules: {
  }
})
