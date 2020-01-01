// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scroll-to'

Vue
  .use(BootstrapVue)
  .use(VueScrollTo, {
    speed: 400,
    padding: 60,
    movingFrequency: 5
  })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
