
import Vue from 'vue'
import router from'./router'
import App from './App'
import store from './store'
import './mock/MockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  // MockServer,
  store,
  render:h=> h(App)
})
