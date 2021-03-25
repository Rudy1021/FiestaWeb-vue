<template>
  <div class="container-fluid login background-index">
    <div class="row">
      <div class="col text-center"></div>
    </div>
    <div class="row">
      <div class="col-5">
        <img class="login-img" src="../assets/login-bg.png" alt="" />
      </div>
      <div class="form-area border-radius-2 loginlist col-6">
        <div class="row">
          <h3>會員登入</h3>
        </div>
        <div class="row">
          <input
            type="text"
            class="login-input border-radius-05"
            v-model="userId"
            placeholder="帳號"
          />
        </div>
        <div class="row">
          <input
            type="password"
            class="login-input border-radius-05"
            v-model="userPassword"
            placeholder="密碼"
          />
        </div>
        <div class="row">
          <button
            v-on:click="login()"
            type="button"
            class="btn btn-block btn-outline-primary mt-xs border-radius-05"
            id="login"
          >
            送出
          </button>
        </div>
        <small id="" class="form-text text-muted mt-4"
          ><a href="javascript:;" id="forgot-pwd">忘記密碼?</a></small
        >
        <!--
        <div class="row mt-4">
            <div class="col"><hr></div>
            <div class="col-1 text-center p-0 pt-1 fiesta-text-primary">或</div>
            <div class="col"><hr></div>
        </div>
        <div class="row text-center mt-3">
            <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-google godown"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f godown"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter godown"></i>
                    </a>
                </li>
            </ul>
        </div>
        -->
        <small id="" class="form-text text-muted mt-4"
          ><a href="/signup">還沒有會員嗎? 立即註冊!</a></small
        >
      </div>
      <div class="forgot-pwdlist">
        <div class="form-area border-radius-05">
          <div class="row mt-2">
            <div class="col">
              <h3>請輸入帳號</h3>
              <input
                class="form-control"
                type="text"
                id="forgotId"
                placeholder="帳號"
              />
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <button
                class="btn btn-secondary border-radius-2 my-2"
                id="backtologin"
              >
                返回
              </button>
              <button
                class="btn btn-outline-primary border-radius-2 my-2"
                id="sendforgot"
              >
                發送驗證信
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiUserLogin } from '../plugins/axios-fiesta.js'

export default {
  data() {
    return {
      userId: '',
      userPassword: ''
    }
  },
  methods: {
    login() {
      apiUserLogin({
        userId: this.userId,
        userPassword: this.userPassword
      })
        .then(res => {
          if (res.data.code === '001') {
            this.$cookies.set('token', res.data.result[0].token)
            location.href = '/'
          } else if (res.data.code === '002') {
            this.$swal({
              text: '帳號或密碼錯誤',
              denyButtonText: '好的',
              showDenyButton: true,
              showConfirmButton: false
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
