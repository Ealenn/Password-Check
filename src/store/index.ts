import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import i18n from '@/i18n'
import Stats from '@/class/Stats'
import Score from '@/class/Score'
import Operation from '@/class/Operation'

Vue.use(Vuex)

const defaultLocal = 'en'
const defaultPassword = ''
const defaultStats = new Stats(defaultPassword)
const defaultScore = new Score(defaultStats)
const defaultOperation = new Operation(defaultStats)

export default new Vuex.Store({
  state: {
    local: defaultLocal,
    password: defaultPassword,
    stats: defaultStats,
    score: defaultScore,
    operation: defaultOperation
  },
  mutations: {
    EDIT_LOCAL (state, local) {
      i18n.locale = local
      moment.locale(local)
      state.local = local
    },
    EDIT_PASSWORD (state, password) {
      state.password = password
      state.stats = new Stats(password)
      state.score = new Score(state.stats)
      state.operation = new Operation(state.stats)
    }
  },
  actions: {
  },
  modules: {
  }
})
