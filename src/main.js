import Vue from 'vue'
import App from './App.vue'
//import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   //router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
