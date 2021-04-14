<template>
  <div class="form-area border-radius-2 loginlist col-6">
    <div class="row">
      <h3>忘記密碼</h3>
    </div>
    <div class="row">
      <span class="mb-3">帳號</span>
      <input
        type="text"
        class="login-input border-radius-05"
        v-model="userId"
        v-on:keypress.enter="forgot()"
        placeholder="請輸入帳號"
      />
    </div>
    <div class="row">
      <button
        v-on:click="forgot()"
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
import { apiUserConfirm } from '../plugins/axios-fiesta.js'
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    forgot() {
      apiUserConfirm({
        userId: this.userId,
        type: '2'
      }).then(res => {
        if (res.data.code === '001') {
          this.$swal({
            icon: 'success',
            title: '認證信已成功寄出，請前往您的信件收信！',
            text:
              '信件寄出需要1-2分鐘的時間，若您沒有收到信件 請點選下方按鈕。',
            confirmButtonText: '好的'
          }).then(function() {
            window.open('https://www.gmail.com')
          })
        } else {
          this.$swal({
            icon: 'error',
            text: '查無此帳號',
            denyButtonText: '好的',
            showDenyButton: true,
            showConfirmButton: false
          })
        }
      })
    }
  }
}
</script>
