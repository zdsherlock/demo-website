/*
 * @Author: zd
 * @Date: 2023-03-28 21:46:00
 * @LastEditors: zd
 * @LastEditTime: 2023-03-28 21:51:56
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/promptPage',
    name: 'promptPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PromptPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
