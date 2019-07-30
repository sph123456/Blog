import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import QS from 'qs';
import ElementUI from 'element-ui'
import'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios=Axios
Vue.use(router)
Vue.use(ElementUI)
Vue.use(QS)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
