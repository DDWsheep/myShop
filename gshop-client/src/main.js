import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/split/Split'

import './mock/mockSever'
import './filters'

Vue.component(Button.name, Button)
Vue.component('Split', Split)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
