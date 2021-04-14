import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '../views/index.vue'
import loginPage from '../views/loginPage.vue'
import signup from '../views/signup.vue'
import interest from '../views/interest.vue'
import activity from '../views/activity.vue'
import hotActivity from '../views/hotActivity.vue'
import settingsidebar from '../views/setting-sidebar.vue'
import groupInfo from '../views/groupInfo.vue'
import aroundActivity from '../views/aroundActivity.vue'
import createEvent from '../views/createEvent.vue'
import MyGroup from '../components/MyGroup.vue'
import MyFavorites from '../components/MyFavorites.vue'
import MyTicket from '../components/MyTicket.vue'
import MyEvaluaion from '../components/MyEvaluation.vue'
import MyProfile from '../components/MyProfile.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: indexPage
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: loginPage
  },
  {
    path: '/changePassword/:token',
    name: 'changePassword',
    component: loginPage
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
    path: '/aroundActivity',
    name: 'aroundActivity',
    component: aroundActivity
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
      },
      {
        path: 'MyFavorites',
        name: 'MyFavorites',
        component: MyFavorites
      },
      {
        path: 'MyTicket',
        name: 'MyTicket',
        component: MyTicket
      },
      {
        path: 'MyEvaluation',
        name: 'MyEvaluation',
        component: MyEvaluaion
      },
      {
        path: 'MyProfile',
        name: 'MyProfile',
        component: MyProfile
      }
    ]
  },
  {
    path: '/groupInfo/:id',
    name: 'groupInfo',
    component: groupInfo
  },
  {
    path: '/createGroup',
    name: 'createGroup',
    component: groupInfo
  },
  {
    path: '/groupEdit/:id',
    name: 'groupEdit',
    component: groupInfo
  },
  {
    path: '/createEvent',
    name: 'createEvent',
    component: createEvent
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
  { path: '/統神端火鍋', redirect: 'https://www.youtube.com/watch?v=072tU1tamd0' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
