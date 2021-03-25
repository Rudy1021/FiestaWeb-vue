import { createApp } from 'vue'
import cookie from 'vue3-cookies'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/vendor/bootstrap/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import './scss/style.scss'
import VueSweetalert2 from 'vue-sweetalert2'

const app = createApp(App)
app.use(store).use(router).use(cookie, {
  expireTimes: '7d',
  path: '/',
  domain: ''
}).use(VueSweetalert2).mount('#app')
