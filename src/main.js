import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index"
//axios

import axios from "axios"
import VueAxios from "vue-axios"

//bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue, IconsPlugin)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
