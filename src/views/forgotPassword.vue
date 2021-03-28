<template>
  <div class="container-fluid login background-index">
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
</template>
