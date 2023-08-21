import Vue from "vue"
import Router from "vue-router"
import AboutPage from "@/components/AboutPage.vue"
import UserList from "@/components/UserList.vue"

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: UserList,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
    },
  ],
})
Vue.use(Router)
