import Vue from 'vue'
import VueRouter from 'vue-router'
import GameRoom from '../views/GameRoom.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/play',
    name: 'GameRoom',
    component: GameRoom,
    beforeEnter (to, from, next) {
      if (!store.getters.isPlayerEntered) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter (to, from, next) {
      if (store.state.player_id) {
        next('/play')
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
