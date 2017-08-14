// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import vuexI18n from 'vuex-i18n'
import translationsEn from './lang/en'
import translationsFr from './lang/fr'

import store from './store'
import App from './App'

Vue.use(Vuex)

// lang
Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', translationsEn)
Vue.i18n.add('fr', translationsFr)
Vue.i18n.set(store.state.local)

// prod
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
