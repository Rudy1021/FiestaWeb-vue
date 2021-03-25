import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import indexPage from '../views/index.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import interest from '../views/interest.vue'
import activity from '../views/activity.vue'
import hotActivity from '../views/hotActivity.vue'
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
  },
  {
    path: '/interest',
    name: 'interest',
    component: interest
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/hotActivity',
    name: 'hotActivity',
    component: hotActivity
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
