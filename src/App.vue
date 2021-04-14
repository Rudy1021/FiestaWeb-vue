<template>
  <div>
    <div v-if="page" class="bg">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand mr-0 ml-5" href="/">
          <img src="../src/assets/new-Logo.png" class="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <i class="icon-magnifier magnifier"></i>
          <div class="navbar-search">
            <form class="search-area">
              <input
                class="form-control mr-sm-2 border-radius-1 white-border"
                type="search"
                placeholder="搜尋想要的活動名稱"
                aria-label="Search"
              />
            </form>
          </div>
          <div
            :class="{
              'navbar-item-not-login': !login,
              'navbar-item-login': login
            }"
          >
            <ul class="navbar-nav">
              <li class="nav-item mr-3 my-auto">
                <router-link class="nav-link" to="/">
                  <i class="icon-home"></i>
                  首頁
                </router-link>
              </li>
              <li class="nav-item mr-3 my-auto">
                <router-link class="nav-link" to="/hotActivity">
                  <i class="icon-fire"></i> 熱門活動</router-link
                >
              </li>
              <li class="nav-item mr-3 my-auto">
                <router-link class="nav-link" to="/aroundActivity">
                  <i class="icon-location-pin"></i> 周遭活動</router-link
                >
              </li>
              <li v-if="login" class="nav-item my-auto mr-3">
                <a class="nav-link" href="/createEvent">
                  <i class="fas fa-plus"></i>
                  創建活動
                </a>
              </li>
              <li v-if="login" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    class="border-radius-2 user"
                    src="../src/assets/10.png"
                  />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div class="row mt-2 pl-2">
                    <div class="col-2 ml-3 mr-1">
                      <img
                        class="border-radius-2 user"
                        src="../src/assets/10.png"
                      />
                    </div>
                    <div class="col-6 ml-4 my-auto">
                      <h5 class="mb-0">測試員</h5>
                    </div>
                  </div>
                  <hr />
                  <router-link class="dropdown-item" to="/setting/MyTicket"
                    >我的票券
                  </router-link>
                  <router-link class="dropdown-item" to="/setting/MyFavorites"
                    >我的收藏
                  </router-link>
                  <router-link class="dropdown-item" to="/setting/MyGroup"
                    >我的群組
                  </router-link>
                  <a
                    class="dropdown-item"
                    href="https://www.youtube.com/watch?v=072tU1tamd0"
                    >我的投票</a
                  >
                  <router-link class="dropdown-item" to="/setting/MyEvaluation"
                    >我的評價
                  </router-link>
                  <router-link class="dropdown-item" to="/setting/MyProfile"
                    >帳戶設定
                  </router-link>
                  <a
                    class="dropdown-item"
                    href="https://www.youtube.com/watch?v=QDV3rkS9yfg"
                    >更改密碼</a
                  >
                  <hr />
                  <a
                    class="dropdown-item text-center"
                    href="javascript:;"
                    v-on:click="logout()"
                    >登出</a
                  >
                </div>
              </li>
              <li v-if="login === false" class="nav-item mr-3">
                <a
                  class="nav-link white-border border-radius-2 px-4"
                  href="/login"
                  >登入</a
                >
              </li>
              <li v-if="login === false" class="nav-item mr-3">
                <a
                  class="nav-link white-border border-radius-2 px-4"
                  href="/signup"
                  >註冊</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <headers></headers>
    </div>
    <router-view />
    <router-view name="sidebar" />
    <footer v-if="page" class="footer">
      <section class="text-center">
        <div class="pt-4">
          <a class="text-black mr-3" href="#">熱門活動</a>
          <a class="text-black mr-3" href="#">推薦活動</a>
          <a class="text-black mr-3" href="#">周遭活動</a>
          <a class="text-black mr-3" href="/policy">隱私權政策</a>
        </div>
        <div class="mt-4">
          <a class="social-btn btn border-radius-1 text-black mr-3" href="#">
            <i class="icon-social-instagram"></i>
            Fiesta.network
          </a>
          <a class="social-btn btn border-radius-1 text-black" href="#">
            <i class="fab fa-facebook-square"></i>
            Fiesta network Taiwan
          </a>
        </div>
        <div>
          <h6 class="text-right">Copyright © Fiesta 2020</h6>
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
import headers from '@/components/headers.vue'

export default {
  components: {
    headers
  },
  data() {
    return {
      login: false,
      page: true,
      index: true
    }
  },
  mounted() {
    if (this.$cookies.get('token') === null) {
      this.login = false
    } else {
      this.login = true
    }
    if (
      location.pathname === '/login' ||
      location.pathname === '/signup' ||
      location.pathname === '/forgotPassword' ||
      location.pathname.split('/')[1] === 'changePassword'
    ) {
      this.page = false
    }
  },
  methods: {
    logout() {
      this.$cookies.remove('token')
      location.href = '/'
    }
  }
}
</script>
