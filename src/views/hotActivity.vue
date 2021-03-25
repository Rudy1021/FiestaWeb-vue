<template>
  <div>
    <section class="container-fluid mt-6 mb-5 hotAct-area">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 mb-3 px-0">
          <div id="carouselAround" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#carouselAround"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselAround" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div id="card-deck-1">
                  <div
                    class="row justify-content-md-center border-gray-1px border-radius-2 mx-0"
                  >
                    <div class="col-7 pl-0">
                      <div class="hotAct-img-cover margin-auto">
                        <img
                          class="border-radius-2 hotAct-img"
                          src="../assets/activity-test.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-5 mt-4">
                      <h5>Fiesta PR Team</h5>
                      <h5>
                        <i class="icon-location-pin"></i
                        >畫廊酒吧/高雄市鼓山區哨船街51號2F
                      </h5>
                      <h5>Old Brand 老牌萬聖派對</h5>
                      <h4 class="mt-3">
                        位於 hotelpoispois 一樓的餐廳 ＠ch-eat &drink
                        將化身大舞廳，由亞洲最強傳奇
                        ＤＪ羅百吉帶領新生代呂士軒意想不到超
                        強超ㄎㄧㄤ組合，帶給你屬於台灣的嘻哈
                        饒舌體驗，加上啤酒無限暢飲，讓你從
                        2018一路嗨到2019～～～～～
                      </h4>
                      <h6 class="time-color">2020-10-31 17:00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div id="card-deck-2">
                  <div
                    class="row justify-content-md-center border-gray-1px border-radius-2 mx-0"
                  >
                    <div class="col-7 pl-0">
                      <div class="hotAct-img-cover margin-auto">
                        <img
                          class="border-radius-2 hotAct-img"
                          src="../assets/activity-test.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-5 mt-4">
                      <h5>Fiesta PR Team</h5>
                      <h5>
                        <i class="icon-location-pin"></i
                        >畫廊酒吧/高雄市鼓山區哨船街51號2F
                      </h5>
                      <h5>Old Brand 老牌萬聖派對</h5>
                      <h4 class="mt-3">
                        位於 hotelpoispois 一樓的餐廳 ＠ch-eat &drink
                        將化身大舞廳，由亞洲最強傳奇
                        ＤＪ羅百吉帶領新生代呂士軒意想不到超
                        強超ㄎㄧㄤ組合，帶給你屬於台灣的嘻哈
                        饒舌體驗，加上啤酒無限暢飲，讓你從
                        2018一路嗨到2019～～～～～
                      </h4>
                      <h6 class="time-color">2020-10-31 17:00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <likeactivity></likeactivity>
  </div>
</template>
<script>
import likeactivity from '@/components/likeActivity.vue'
export default {
  components: {
    likeactivity
  }
}
</script>
