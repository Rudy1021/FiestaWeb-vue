<template>
  <div class="form-area border-radius-2 loginlist col-6">
    <div class="row">
      <h3>更改密碼</h3>
    </div>
    <div class="row">
      <h5>新密碼</h5>
      <input
        type="password"
        class="login-input border-radius-05"
        v-model="password"
        v-on:keypress.enter="changePassword()"
        placeholder="請輸入新密碼"
      />
    </div>
    <div class="row">
      <h5>確認密碼</h5>
      <input
        v-on:keypress.enter="changePassword()"
        type="password"
        class="login-input border-radius-05"
        v-model="confirm"
        placeholder="請輸入確認密碼"
      />
    </div>
    <div class="row">
      <button
        v-on:click="changePassword()"
        type="button"
        class="btn btn-block btn-outline mt-xs border-radius-05"
        id="login"
      >
        送出
      </button>
    </div>
  </div>
</template>
<script>
import {
  apiForgotToken,
  apiUserchangePassword
} from '../plugins/axios-fiesta.js'
export default {
  data() {
    return {
      password: '',
      confirm: '',
      userId: ''
    }
  },
  mounted() {
    apiForgotToken(location.pathname.split('/')[2]).then(res => {
      this.userId = res.data.Id.user_id
    })
  },
  methods: {
    changePassword() {
      if (this.password === this.confirm) {
        apiUserchangePassword({
          userId: this.userId,
          userPassword: this.password
        }).then(res => {
          console.log(res)
        })
      } else {
        this.$swal({
          icon: 'error',
          text: '兩次密碼不同',
          denyButtonText: '好的',
          showDenyButton: true,
          showConfirmButton: false
        })
      }
    }
  }
}
</script>
