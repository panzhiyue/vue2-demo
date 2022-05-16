import Vue from 'vue'
import App from './App.vue'
import Vue2ol from "@gis-js/vue2ol"

Vue.use(Vue2ol);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
