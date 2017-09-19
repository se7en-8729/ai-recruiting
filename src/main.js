// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(echarts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
