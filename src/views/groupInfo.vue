<template>
  <div class="mt-5 mb-5 groupInfo">
    <div class="row">
      <div class="col-1"></div>
      <div class="card col-10">
        <div class="card-body">
          <div class="text-center">
            <h4 class="d-inline-block infoText">{{ groupText }}</h4>
          </div>
          <div class="row mt-4">
            <div class="col-2"></div>
            <div class="col-8">
              <h5>群組名稱 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="groupName"
                :disabled="path === 'groupInfo'"
                @change="groupFindName()"
                ref="groupName"
                class="form-control mb-4"
              />
              <h5>地點 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="address"
                :disabled="path === 'groupInfo'"
                class="form-control mb-4"
              />
              <h5>信箱 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="mail"
                :disabled="path === 'groupInfo'"
                class="form-control mb-4"
              />
              <h5>聯絡電話 <span class="text-danger">*</span></h5>
              <input
                type="text"
                v-model="phone"
                :disabled="path === 'groupInfo'"
                class="form-control mb-4"
              />
              <h5>{{ memberText }}<span class="text-danger">*</span></h5>
              <input
                type="text"
                :disabled="path === 'groupInfo'"
                v-if="path !== 'groupInfo'"
                class="form-control mb-4"
              />
              <button
                class="btn btn-primary addMember"
                v-if="path !== 'groupInfo'"
              >
                新增
              </button>
              <hr />
              <div class="mt-3 mb-4">
                <div v-for="member in members" :key="member.nickName">
                  <img class="border-radius-2 user" :src="member.Photo" />
                  <span class="ml-5">{{ member.nickName }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button
              class="btn btn-primary"
              v-if="path === 'groupInfo'"
              @click="this.$router.go(-1)"
            >
              返回
            </button>
            <button
              class="btn btn-primary"
              v-if="path === 'createGroup'"
              @click="uploadGroup()"
            >
              創建
            </button>
            <button
              class="btn btn-primary addMember"
              v-if="path === 'groupEdit'"
              @click="groupUpdate()"
            >
              更新
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  apiGroupSelect,
  apiGroupFindName,
  apiGroupInsertProfile,
  apiGroupUpload,
  apiGroupMemberSelect,
  apiGroupUpdate
} from '../plugins/axios-fiesta.js'
export default {
  data() {
    return {
      groupText: '',
      groupName: '',
      address: '',
      mail: '',
      phone: '',
      path: '',
      memberText: '',
      members: []
    }
  },
  mounted() {
    if (location.pathname.split('/')[1] === 'groupInfo') {
      this.memberText = '群組成員'
      this.path = 'groupInfo'
      this.groupText = '群組資料'
      this.groupSelect()
      this.memberSelect()
    } else if (location.pathname === '/createGroup') {
      this.memberText = '新增成員（帳號）'
      this.path = 'createGroup'
      this.groupText = '創立一個永久群組'
      apiGroupInsertProfile().then(res => {
        this.members.push({
          nickName: res.data.result[0].nickName,
          Photo: res.data.result[0].Photo
        })
      })
    } else if (location.pathname.split('/')[1] === 'groupEdit') {
      this.memberText = '新增成員（帳號）'
      this.groupText = '編輯群組'
      this.path = 'groupEdit'
      this.groupSelect()
      this.memberSelect()
    }
  },
  methods: {
    groupFindName() {
      apiGroupFindName({
        groupName: this.groupName
      }).then(res => {
        if (res.data.code === '001') {
          apiGroupInsertProfile().then(res => {
            this.mail = res.data.result[0].Mail_1
            if (res.data.result[0].Address !== 'None') {
              this.address = res.data.result[0].Address
            }
          })
        } else {
          this.$swal({
            text: '群組名稱重複',
            denyButtonText: '好的',
            showDenyButton: true,
            showConfirmButton: false
          }).then(res => {
            this.groupName = ''
            this.$refs.groupName.focus()
          })
        }
      })
    },
    uploadGroup() {
      if (
        this.groupName !== '' &&
        this.address !== '' &&
        this.phone !== '' &&
        this.mail !== ''
      ) {
        apiGroupUpload({
          authId: [parseInt(this.$cookies.get('138_171_198_221_'))],
          groupName: this.groupName,
          Address: this.address,
          Phone: this.phone,
          Mail: this.mail,
          Useable: 'true'
        }).then(res => {
          this.$swal({
            text: '創建成功！',
            confirmButtonText: '好的',
            showConfirmButton: true
          }).then(res => {
            location.href = '/setting/MyGroup'
          })
        })
      } else {
        this.$swal({
          text: '有欄位尚未填寫',
          denyButtonText: '好的',
          showDenyButton: true,
          showConfirmButton: false
        })
      }
    },
    groupSelect() {
      apiGroupSelect({ groupId: location.pathname.split('/')[2] }).then(res => {
        this.groupName = res.data.result[0].groupName
        this.address = res.data.result[0].address
        this.mail = res.data.result[0].mail
        this.phone = res.data.result[0].phone
      })
    },
    memberSelect() {
      apiGroupMemberSelect({
        groupId: location.pathname.split('/')[2]
      }).then(res => {
        res.data.result.forEach(element => {
          this.members.push({
            nickName: element.nickName,
            Photo: element.Photo
          })
        })
      })
    },
    groupUpdate() {
      apiGroupUpdate({
        groupId: location.pathname.split('/')[2],
        groupName: this.groupName,
        Address: this.address,
        Phone: this.phone,
        Mail: this.mail
      }).then(res => {
        this.$swal({
          text: '更新成功！',
          confirmButtonText: '好的',
          showConfirmButton: true
        }).then(res => {
          location.href = '/setting/MyGroup'
        })
      })
    }
  }
}
</script>
