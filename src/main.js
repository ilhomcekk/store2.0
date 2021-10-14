import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/tailwind.css'
import VueSplide from '@splidejs/vue-splide'
import VModal from 'vue-js-modal'

Vue.use(VueSplide)
// eslint-disable-next-line no-undef
Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
