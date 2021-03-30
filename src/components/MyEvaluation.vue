<template>
  <div class="evaluation mx-3">
    <h4 class="mb-3">我的評價</h4>
    <select class="form-control select">
      <option>全部</option>
    </select>
    <div class="card mt-4 border-radius-2" v-for="text in 3" :key="text">
      <div class="card-body">
        <div class="row">
          <div class="col-1 pr-0">
            <img class="border-radius-2 user" src="../assets/10.png" />
          </div>
          <div class="col-3 pl-0">
            <h6 class="mb-0">test0001</h6>
            <h6 class="d-inline-block">我的評分</h6>
            <div class="btn-star ml-2 d-inline">
              <i class="fas fa-star"></i><i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <img
              class="border-radius-2 activityImg"
              src="../assets/activity-test.png"
            />
          </div>
          <div class="col-6 pl-0">
            <h5>2021台南市耶誕跨年系列活動 台南好YOUNG</h5>
            <div class="evaluation-text pt-3 px-2">
              <span>
                測試測試測試測試測試測試測試測試測試測試測試測試測試測試測
                試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測
                測試測試測試測試測試測試測試測試測試測試測試測試測試測試測
                試測試測試測試測試測試測試測試。</span
              >
              <div><h5 class="evaluation-date">2021/1/15</h5></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
