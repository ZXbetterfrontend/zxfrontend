// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios'
import store from './store'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios= axios

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
$cookies.set('test', 12333) 
console.log($cookies.keys())
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
