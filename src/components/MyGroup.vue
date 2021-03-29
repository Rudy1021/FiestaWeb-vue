<template>
  <div class="group mx-3">
    <h4>我的群組</h4>
    <span class="float-left groupList">群組列表</span>
    <button class="btn-primary btn float-right border-radius-05 createGroup">
      <i class="fas fa-plus"></i> 創建群組
    </button>
    <div class="mt-5">
      <div class="mt-3" v-for="(Groups, index) in group" :key="Groups.groupId">
        <div class="card border-radius-1">
          <div class="card-body">
            <h5 class="d-inline">群組{{ index + 1 + 6 * (PageClick - 1) }}</h5>
            <br />
            <h5 class="d-inline">{{ Groups.groupName }}</h5>
            <router-link
              class="float-right groupButton delete btn"
              :to="`MyGroup/${Groups.groupId}`"
              ><i class="far fa-trash-alt deleteColor"></i
            ></router-link>
            <router-link
              class="float-right groupButton mr-2 info btn"
              to="/setting/MyGroup/{{ Groups.groupId }}?edit"
              ><i class="fas fa-pencil-alt infoColor"></i
            ></router-link>
            <router-link
              class="float-right groupButton mr-2 btn info"
              :to="`/groupInfo/${Groups.groupId}`"
              ><i class="fas fa-eye infoColor"></i
            ></router-link>
          </div>
        </div>
      </div>
      <div class="mt-3 text-right">
        <button
          class="btn listButton mr-2"
          @click="changePage"
          v-for="number in list"
          :class="{ listButtonPage: number === PageClick }"
          :key="number"
        >
          {{ number }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetJoinedGroup } from '../plugins/axios-fiesta.js'
export default {
  data() {
    return {
      group: [],
      list: 1,
      PageClick: 1
    }
  },
  name: 'MyGroup',
  mounted() {
    apiGetJoinedGroup({
      authId: this.$cookies.get('138_171_198_221_')
    }).then(res => {
      this.group = res.data.result.slice(0, 6)
      this.list += parseInt(this.group.length / 6)
    })
  },
  methods: {
    changePage(event) {
      const Page = parseInt(event.target.innerText)
      apiGetJoinedGroup({
        authId: this.$cookies.get('138_171_198_221_')
      }).then(res => {
        this.group = res.data.result.slice(0 + 6 * (Page - 1), 6 * Page)
        this.PageClick = Page
      })
    }
  }
}
</script>
