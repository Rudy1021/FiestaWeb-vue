<template>
  <div class="container-fluid signup">
    <div class="row">
      <div class="col text-center">
        <img class="logo" src="../assets/new-Logo.png" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <img class="signup-img" src="../assets/login-bg.png" alt="" />
      </div>
      <div class="form-area border-radius-1 col-6 text-left">
        <div class="row">
          <h3>註冊會員</h3>
        </div>
        <div class="row">
          <p>帳號</p>
          <span class="span-red">*</span>
          <input
            type="text"
            v-model="userName"
            class="login-input border-radius-05"
            id="userName"
            placeholder="請輸入帳號"
          />
        </div>
        <div class="row">
          <p>密碼</p>
          <span class="span-red">*</span>
          <input
            type="password"
            v-model="Password"
            class="login-input border-radius-05"
            id="userPassword"
            placeholder="請輸入密碼"
          />
        </div>
        <div class="row">
          <p>真實姓名</p>
          <span class="span-red">*</span>
          <input
            type="text"
            v-model="Name"
            class="login-input border-radius-05"
            id="userId"
            placeholder="請輸入真實姓名"
          />
          <p>出生日期</p>
          <span class="span-red">*</span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <input
              type="text"
              class="login-input border-radius-05"
              placeholder="年"
              v-model="year"
            />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="login-input border-radius-05"
              placeholder="月"
              v-model="month"
            />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="login-input border-radius-05"
              placeholder="日"
              v-model="day"
            />
          </div>
        </div>
        <div class="row">
          <P>暱稱</P><span class="span-red">*</span>
          <input
            type="text"
            class="login-input border-radius-05"
            id="nickName"
            placeholder="請輸入暱稱"
            v-model="nickName"
          />
        </div>
        <div class="row">
          <p>學校信箱</p>
          <span class="span-red">*</span>
          <input
            type="text"
            class="login-input border-radius-05"
            id="Mail_1"
            v-on:change="getSchool()"
            v-model="Mail"
            placeholder="請輸入學校信箱 (第一個英文字請小寫)"
          />
        </div>
        <div class="row">
          <p>手機號碼</p>
          <span class="span-red">*</span>
          <input
            type="text"
            class="login-input border-radius-05"
            id="Phone"
            v-model="Phone"
            placeholder="請輸入手機號碼"
          />
        </div>
        <div class="row">
          <p>所屬學校</p>
          <span class="span-red">*</span>
          <input
            type="text"
            class="login-input border-radius-05"
            id="School"
            v-model="School"
            placeholder="請輸入所屬學校"
          />
        </div>
        <div class="row">
          <div class="col-1">
            <input
              v-model="Policy"
              true-value="yes"
              false-value="no"
              type="checkbox"
              class="policy"
              id="policy"
            />
          </div>
          <span>我同意</span
          ><a href="/policy" target="_blank">隱私權與個人資料保護政策</a>
        </div>
        <div class="row mt-2">
          <button
            type="button"
            class="btn btn-block border-radius-05"
            id="signup"
            v-on:click="signup"
          >
            註冊
          </button>
        </div>
        <small class="form-text text-muted mt-4 text-center">
          <a href="/login">已有帳號？點這裡登入！</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import {
  apiUserSignUp,
  apiGetSchool,
  apiUserConfirm
} from '../plugins/axios-fiesta'
export default {
  data() {
    return {
      userName: '',
      Password: '',
      Name: '',
      year: '',
      month: '',
      day: '',
      nickName: '',
      Mail: '',
      Phone: '',
      School: '',
      Policy: 'no'
    }
  },
  methods: {
    signup() {
      const inputbox = document.getElementsByTagName('input')
      console.log(inputbox)
      for (var i = 0; i < inputbox.length; i++) {
        if (inputbox[i].value === '') {
          this.$swal({
            text: '有空格未填寫',
            denyButtonText: '好的',
            showDenyButton: true,
            showConfirmButton: false
          })
          return false
        }
      }
      if (this.Policy === 'yes') {
        if (parseInt(this.month) < 10) {
          this.month = '0' + this.month
        }
        if (parseInt(this.day) < 10) {
          this.day = '0' + this.day
        }
        const birthString = this.year + '/' + this.month + '/' + this.day
        apiUserSignUp({
          userId: this.userName,
          userPassword: this.Password,
          userName: this.Name,
          Birthday: birthString,
          nickName: this.nickName,
          Mail_1: this.Mail,
          Phone: this.Phone,
          School: this.School,
          Useable: 'true'
        }).then(res => {
          switch (res.data.code) {
            case '001':
              this.sendConfirm()
              break
            case '005':
              this.$swal({
                text: '帳號重複',
                denyButtonText: '好的',
                showDenyButton: true,
                showConfirmButton: false
              })
              break
            case '008':
              this.$swal({
                text: '學校信箱驗證錯誤',
                denyButtonText: '好的',
                showDenyButton: true,
                showConfirmButton: false
              })
              break
            default:
              this.$swal({
                text: '請稍後再試',
                denyButtonText: '好的',
                showDenyButton: true,
                showConfirmButton: false
              })
              break
          }
        })
      } else {
        this.$swal({
          text: '請勾選隱私權與個人政策條款',
          denyButtonText: '好的',
          showDenyButton: true,
          showConfirmButton: false
        })
      }
    },
    getSchool() {
      const SchoolMail = /([a-z0-9][a-z0-9]*[a-z0-9].).edu.tw$/
      if (SchoolMail.exec(this.Mail) != null) {
        const SchoolName = SchoolMail.exec(this.Mail)[1]
        apiGetSchool()
          .then(res => {
            for (var i = 0; i < res.data.result[0].length; i++) {
              if (SchoolName === res.data.result[0][i]) {
                this.School = res.data.result[1][i]
                return false
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
      return false
    },
    sendConfirm() {
      apiUserConfirm({
        userId: this.userName,
        type: '1'
      })
      this.$swal({
        text: '已寄送驗證信，請前往信箱查收。',
        confirmButtonText: '好的',
        showConfirmButton: true
      }).then(function() {
        window.open('https://www.gmail.com')
        location.href = '/login'
      })
    }
  }
}
</script>
