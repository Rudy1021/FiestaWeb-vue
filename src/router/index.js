import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import indexPage from '../views/index.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: indexPage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
