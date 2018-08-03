import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockSever'

Vue.component(Button.name, Button);
/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
