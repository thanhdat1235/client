<template>
  <div>
    <section class="blog">
      <div class="container --container__blog">
        <h2>Bài viết gần đây</h2>
        <carousel
          :perPage="ham"
          :navigationEnabled="true"
          navigationPrevLabel="<i class='material-icons i-prev fa-solid fa-arrow-right-long'></i>"
          navigationNextLabel="<i class='material-icons i-next fa-solid fa-arrow-right-long'></i>"
          class="blog__slider"
        >
          <slide
            class="blog__slider-item"
            v-for="(data, index) in dataTest"
            :key="index"
          >
            <div class="img">
              <img :src="data.urlImage" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>{{ data.category }}</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>{{ data.created_at }}</p>
                  </div>
                  <div class="author">
                    <p>Admin</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="title">
              <h3>
                Tháng 04 tất bật với chuỗi job fair và nhiều hoạt động kết nối
                cùng các trường đại học
              </h3>
            </div>
            <p class="param__blog">
              Hoạt động hợp tác đại học của TMA và các trường đại học được đẩy
              mạnh trong tháng 04 vừa qua, tiêu biểu là các sự kiện job fair và
              ...
            </p>
            <a href="#" class="btn__read-more">
              <p>Đọc tiếp</p>
              <i><img src="../../public/img/ArrowRight.png" alt="" /></i>
            </a>
          </slide>
        </carousel>
      </div>
    </section>
    <section class="icon__zalo-fixed">
      <i><img src="../../public/img/icon__zalo-fixed.png" alt="" /></i>
      <div class="text"><p>Bạn cần hỗ trợ gì?</p></div>
    </section>
  </div>
</template>

<script>
import postService from "../../service/postService";
import Vue from "vue";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Blog",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      dataTest: [],
      ham: 3,
    };
  },

  async mounted() {
    const result = await postService.getAllPosts([]);
    this.dataTest = result.data.data;
    var x = window.matchMedia("(max-width: 993px)");
    var y = window.matchMedia("(max-width: 767px)");
    this.myFunctionTl(x);
    this.myFunctionMb(y);
    x.addListener(this.myFunctionTl);
    y.addListener(this.myFunctionMb);
  },

  methods: {
    myFunctionTl(x) {
      if (x.matches) {
        // If media query matches
        return (this.ham = 2);
      }
      return (this.ham = 3);
    },
    myFunctionMb(y) {
      if (y.matches) {
        // If media query matches
        return (this.ham = 1);
      }
      return (this.ham = 2);
    },
  },
};
</script>

<style></style>
