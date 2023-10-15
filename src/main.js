import Vue from 'vue'
import App from './App.vue'
import router from './router'
//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



new Vue({
  el: '#app',
  router,  // Including the router in the Vue instance
  render: h => h(App)
})
