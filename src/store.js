import Vue from 'vue'
import Vuex from 'vuex'

import CharPassword from './class/CharPassword'

Vue.use(Vuex)

// Initial state object
const state = {
  password: '',
  Stats: new CharPassword('')
}

// Possible mutations to state
const mutations = {
  EDIT_PASSWORD (state, password) {
    state.password = password
    state.Stats = new CharPassword(state.password)
  }
}

// Create the Vuex instance by combining the state and mutations objects
export default new Vuex.Store({
  state,
  mutations
})
