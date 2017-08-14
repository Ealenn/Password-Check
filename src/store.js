import Config from './config'
import Vue from 'vue'
import Vuex from 'vuex'

import TimeTo from './class/TimeTo'
import CharPassword from './class/CharPassword'
import UsePassword from './class/UsePassword'
import TimePassword from './class/TimePassword'

Vue.use(Vuex)

// Local
let StoreLocal = Config.defaultLocal
Config.localAvailable.forEach(function (Local) {
  if (Local.indexOf(Config.local) !== -1) {
    StoreLocal = Local
  }
}, this)

// Initial state object
const state = {
  local: StoreLocal,
  password: '',
  TimeTo: new TimeTo(),
  Stats: new CharPassword(''),
  Use: new UsePassword(),
  Times: new TimePassword(new CharPassword(''))
}

// Possible mutations to state
const mutations = {
  EDIT_PASSWORD (state, password) {
    state.password = password
    state.Stats = new CharPassword(state.password)
    state.Times = new TimePassword(state.Stats)
  }
}

// Create the Vuex instance by combining the state and mutations objects
export default new Vuex.Store({
  state,
  mutations
})
