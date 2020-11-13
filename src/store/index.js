import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_user: {},
    player_list: [],
    player_id: ''
  },
  mutations: {
    setCurrentUser (state, payload) {
      state.current_user = payload
      state.player_id = payload.id
    },
    setPlayerLists (state, payload) {
      state.player_list = payload
    }
  },
  actions: {
  },
  getters: {
    isPlayerEntered: state => !!state.player_id
  }
})
