<template>
  <section class="mt-5 sidebar-main container-fluid mb-5">
    <div class="row ml-2">
      <div class="col-2">
        <div class="card border-radius-2">
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <img class="border-radius-2 user" src="../assets/10.png" />
              </div>
              <div class="col-8 ml-2 my-auto">
                <h4 class="mb-0">測試員</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-radius-2 mt-3">
          <div class="card-body">
            <ul class="navbar-nav">
              <li class="mb-2">
                <router-link
                  to="MyTicket"
                  class="text-black sidebar-link"
                  :class="{
                    active: this.$route.fullPath === '/setting/MyTicket'
                  }"
                  >我的票券</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  to="MyFavorites"
                  v-model="Favorites"
                  :class="{
                    active: this.$route.fullPath === '/setting/MyFavorites'
                  }"
                  class="text-black sidebar-link"
                  >我的收藏</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  to="MyGroup"
                  v-model="Group"
                  class="text-black sidebar-link"
                  :class="{
                    active: this.$route.fullPath === '/setting/MyGroup'
                  }"
                  >我的群組</router-link
                >
              </li>
              <li class="mb-2">
                <a
                  class="text-black sidebar-link"
                  href="https://www.youtube.com/watch?v=072tU1tamd0"
                  >我的投票</a
                >
              </li>
              <li class="mb-2">
                <router-link
                  to="MyEvaluation"
                  v-model="Evaluation"
                  class="text-black sidebar-link"
                  :class="{
                    active: this.$route.fullPath === '/setting/MyEvaluation'
                  }"
                  >我的評價</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  to="MyProfile"
                  v-model="Evaluation"
                  class="text-black sidebar-link"
                  :class="{
                    active: this.$route.fullPath === '/setting/MyProfile'
                  }"
                  >帳戶設定</router-link
                >
              </li>
              <li class="mb-2">
                <a
                  class="text-black sidebar-link"
                  href="https://www.youtube.com/watch?v=QDV3rkS9yfg"
                  >更改密碼</a
                >
              </li>
              <li class="mb-2">
                <a
                  class="text-black sidebar-link"
                  href="javascript:;"
                  v-on:click="logout()"
                  >登出</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10 pr-5">
        <div class="card border-radius-2">
          <div class="card-body">
            <router-view></router-view>
            <!--
                      <my-favorites
              v-if="this.$route.fullPath === '/MyFavorites'"
            ></my-favorites>
            <my-ticket v-if="this.$route.fullPath === '/MyTicket'"></my-ticket>
            <my-group v-if="this.$route.fullPath === '/MyGroup'"></my-group>
          --></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/*
import MyFavorites from '@/components/MyFavorites.vue'
import MyTicket from '@/components/MyTicket.vue'
import MyGroup from '@/components/MyGroup.vue'
export default {
  components: { MyFavorites, MyTicket, MyGroup },
  methods: {
    logout() {
      this.$cookies.remove('token')
      location.href = '/'
    },
    checkPath() {
      switch (this.Path) {
        case '/MyTicket':
          this.ticket = false
      }
    }
  },
  data() {
    return {
      Path: location.pathname,
      favorites: true,
      group: true,
      ticket: true
    }
  }
}
*/
</script>
