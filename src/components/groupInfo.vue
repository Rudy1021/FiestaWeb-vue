<template>
  <div class="mt-5 mb-5 groupInfo">
    <div class="row">
      <div class="col-1"></div>
      <div class="card col-10">
        <div class="card-body">
          <div class="text-center">
            <h4 class="d-inline-block infoText">群組資料</h4>
          </div>
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-8">
              <h5>群組名稱 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="groupName"
                disabled
                class="form-control mb-4"
              />
              <h5>地點 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="address"
                disabled
                class="form-control mb-4"
              />
              <h5>信箱 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="mail"
                disabled
                class="form-control mb-4"
              />
              <h5>聯絡電話 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="phone"
                disabled
                class="form-control mb-4"
              />
              <h5>新增成員（帳號） <span class="text-danger">*</span></h5>
              <input type="text" disabled class="form-control mb-4" />
              <button class="btn btn-primary addMember">新增</button>
              <hr />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" @click="this.$router.go(-1)">
              返回
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiGroupSelect } from '../plugins/axios-fiesta.js'
export default {
  data() {
    return {
      groupName: '',
      address: '',
      mail: '',
      phone: ''
    }
  },
  mounted() {
    apiGroupSelect({ groupId: location.pathname.split('/')[2] }).then(res => {
      console.log(res.data.result[0])
      this.groupName = res.data.result[0].groupName
      this.address = res.data.result[0].address
      this.mail = res.data.result[0].mail
      this.phone = res.data.result[0].phone
    })
  }
}
</script>
