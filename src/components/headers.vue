<template>
  <div>
    <section
      v-if="this.$route.fullPath === '/'"
      class="header mt-6 container-fluid pb-5"
    >
      <div class="row">
        <div class="col-6 text-center my-auto">
          <h1>Fiesta 大學生的活動幫手</h1>
          <h5>O2O社群網路x活動籌備資訊整合平台</h5>
        </div>
        <div class="col-5">
          <img class="header-img" src="../assets/index.png" />
        </div>
      </div>
    </section>
    <section
      v-if="this.$route.fullPath === '/interest'"
      class="header mt-6 container-fluid pb-5"
    >
      <div class="row">
        <div class="col-6 text-center my-auto">
          <h1>嘻哈活動</h1>
        </div>
        <div class="col-5">
          <img class="header-img" src="../assets/interest.png" />
        </div>
      </div>
    </section>
    <section
      v-if="this.$route.fullPath === '/activity'"
      class="header mt-6 container-fluid pb-5"
    >
      <div class="row">
        <div class="col-6 text-center my-auto">
          <h1>活動介紹</h1>
        </div>
        <div class="col-5">
          <img class="header-img" src="../assets/activity-bg.png" />
        </div>
      </div>
    </section>
    <section
      v-if="this.$route.fullPath === '/hotActivity'"
      class="header mt-6 container-fluid pb-5"
    >
      <div class="row">
        <div class="col-6 text-center my-auto">
          <h1>熱門活動</h1>
        </div>
        <div class="col-5">
          <img class="header-img" src="../assets/hotAct.png" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'headers'
}
</script>
