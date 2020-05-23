import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from "./movie"
import mine from "./mine"
import cinema from "./cinema"

Vue.use(VueRouter)

const routes = [
  movie,
  mine,
  cinema,
  {
    path:'/*',
    redirect:'/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
