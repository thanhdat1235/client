<template>
  <footer>
    <div class="container --container__footer">
      <div class="wrapper__gird">
        <div class="wrapper__gird-item --nthchild1">
          <div class="title">
            <h2>Addy Print</h2>
          </div>
          <div class="text__content">
            <p class="adress">
              <span>Địa chỉ: </span>60B Thích Bửu Đăng, phường 1, Q.Gò Vấp, TP
              Hồ Chí Minh.
            </p>
            <p class="email">
              <span>Email: </span><a href="#">contact@trolyzalo.vn</a>
            </p>
            <p class="numberphone">
              <span>Số điện thoại: </span>(+84) 2862585167
            </p>
          </div>
        </div>
        <div class="wrapper__gird-item --nthchild2">
          <div class="title">
            <h3>Về sản phẩm</h3>
          </div>
          <div class="text__content">
            <a href="#">Giới thiệu về Print</a>
            <a href="#">Quy định sử dụng</a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Trung tâm trợ giúp</a>
          </div>
        </div>
        <div class="wrapper__gird-item --nthchild3">
          <div class="title">
            <h3>Kết nối với chúng tôi</h3>
          </div>
          <div class="icon__content">
            <a href="#"><img src="../../public/img/icon-fb.png" alt="" /></a>
            <a href="#"><img src="../../public/img/icon-zalo.png" alt="" /></a>
            <a href="#"><img src="../../public/img/icon-ytb.png" alt="" /></a>
            <a href="#"
              ><img src="../../public/img/icon_browser.png" alt=""
            /></a>
          </div>
          <img src="../../public/img/logo-thong-bao.png" alt="" />
        </div>
        <div class="wrapper__gird-item --nthchild4">
          <div class="title">
            <h3>Tải phần mềm</h3>
          </div>
          <div class="btn__download">
            <div class="btn__download-windowns btn__vuejs">
              <a href="#">
                <img
                  src="../../public/img/windown-footer.png"
                  alt="down load for windowns"
                />
              </a>
            </div>
            <div class="btn__download-chplay btn__vuejs">
              <a href="#">
                <img
                  src="../../public/img/chplay-footer.png"
                  alt="down load for chplay"
                />
              </a>
            </div>
            <div class="btn__download-appstore btn__vuejs">
              <a href="#">
                <img
                  src="../../public/img/appstore-footer.png"
                  alt="down load for appstore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="backtotop">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/footer.scss";
</style>
