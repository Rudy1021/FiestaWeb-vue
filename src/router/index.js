import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import indexPage from '../views/index.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import interest from '../views/interest.vue'
import activity from '../views/activity.vue'
import hotActivity from '../views/hotActivity.vue'
import settingsidebar from '../views/setting-sidebar.vue'
import forgotPassword from '../views/forgotPassword.vue'
import groupInfo from '../components/groupInfo.vue'
import MyGroup from '../components/MyGroup.vue'
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
  },
  {
    path: '/MyTicket',
    name: 'MyTicket',
    components: {
      sidebar: settingsidebar
    }
  },
  {
    path: '/MyFavorites',
    name: 'MyFavorites',
    components: {
      sidebar: settingsidebar
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: settingsidebar,
    children: [
      {
        path: 'MyGroup',
        name: 'MyGroup',
        component: MyGroup
      }
    ]
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: forgotPassword
  },
  {
    path: '/groupInfo/:id',
    name: 'groupInfo',
    component: groupInfo
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
  { path: '/統神端火鍋', redirect: 'https://www.youtube.com/watch?v=072tU1tamd0' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
