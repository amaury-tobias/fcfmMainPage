import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueSocketIO from 'vue-socket.io'
import buefy from 'buefy'
import VueCarousel from 'vue-carousel'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

Vue.use(buefy)
Vue.use(VueCarousel)
/*Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
