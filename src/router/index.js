import Vue from 'vue'
import VueRouter from 'vue-router'
import GameRoom from '../views/GameRoom.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GameRoom
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
