import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Initial state object
const state = {
  password: ''
}

// Possible mutations to state
const mutations = {
  EDIT_PASSWORD (state, password) {
    state.password = password
  }
}

// Create the Vuex instance by combining the state and mutations objects
export default new Vuex.Store({
  state,
  mutations
})
