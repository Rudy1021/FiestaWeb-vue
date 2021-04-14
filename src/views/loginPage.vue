<template>
  <div class="container-fluid login background-index">
    <div class="row">
      <div class="col text-center"></div>
    </div>
    <div class="row">
      <div class="col-5">
        <img class="login-img" src="../assets/login-bg.png" alt="" />
      </div>
      <login v-if="this.$route.fullPath === '/login'"></login>
      <forgotpassword
        v-if="this.$route.fullPath === '/forgotPassword'"
      ></forgotpassword>

      <changepassword v-if="changePassword === true"></changepassword>
    </div>
  </div>
</template>
<script>
import login from '@/components/login.vue'
import forgotpassword from '@/components/forgotPassword.vue'
import changepassword from '@/components/changePassword.vue'
export default {
  components: {
    login,
    forgotpassword,
    changepassword
  },
  data() {
    return {
      changePassword: false
    }
  },
  mounted() {
    if (location.pathname.split('/')[1] === 'changePassword') {
      this.changePassword = true
    }
  }
}
</script>
