import { createStore } from 'vuex'
import {HTTP} from "@/tools/http-common";

export default createStore({
  state: {
    user: 'winter.bodom',
    releases: [],
    errors: [],
    currentRelease: {},
    isLoading: true,
    endpoint: 'users/winter.bodom/collection/folders/0/releases?key=PewIEXaSauItJzUKfVNC&secret=AwTiAefiXHjBowDsmzdabltihJjeldrq'
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
      state.user = name;
      state.endpoint = 'users/' + name + '/collection/folders/0/releases?key=PewIEXaSauItJzUKfVNC&secret=AwTiAefiXHjBowDsmzdabltihJjeldrq';
      HTTP.get(state.endpoint)
        .then(response => {
          state.releases = response.data.releases
        })
        .catch(e => {
          state.errors.push(e)
        })
    },
    setCurrentRelease(state, release) {
      // state.isLoading = false;
      state.currentRelease = release;
    }

  },
  actions: {
    setCurrentRelease ({commit, state}, itemId) {
      state.currentRelease = {};
      state.isLoading = true;
      HTTP.get('/releases/' + itemId + '?key=PewIEXaSauItJzUKfVNC&secret=AwTiAefiXHjBowDsmzdabltihJjeldrq')
        .then(response => {
          commit('setCurrentRelease', response.data);
        })
        .catch(e => {
          state.errors.push(e)
        })
    }
  },
  modules: {
  }
})
