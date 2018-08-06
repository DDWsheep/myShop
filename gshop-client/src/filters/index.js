import moment from 'moment'
import Vue from 'vue'
//格式化日期时间
Vue.filter('data-format', function (value, format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})
