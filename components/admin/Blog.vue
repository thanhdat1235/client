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
                {{ data.title }}
              </h3>
            </div>
            <p class="param__blog">
              {{ data.description }}
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
      large: window.matchMedia("(min-width: 993px)"),
      tablet: window.matchMedia("(min-width: 768px)"),
      mobile: window.matchMedia("(min-width: 576px)"),
      largeM: window.matchMedia("(max-width: 1600px)"),
      tabletM: window.matchMedia("(max-width: 993px)"),
      mobileM: window.matchMedia("(max-width: 767px)"),
    };
  },

  async mounted() {
    const result = await postService.getAllPosts([]);
    this.dataTest = result.data.data;
    this.myFunction(this.large);
    this.large.addListener(this.myFunction);
    this.myFunctionII(this.tablet);
    this.tablet.addListener(this.myFunctionII);
    this.myFunctionI(this.mobile);
    this.mobile.addListener(this.myFunctionI);
    this.myFunction(this.largeM);
    this.largeM.addListener(this.myFunctionM);
    this.myFunctionII(this.tabletM);
    this.tabletM.addListener(this.myFunctionIIM);
    this.myFunctionI(this.mobileM);
    this.mobileM.addListener(this.myFunctionIM);
  },
  methods: {
    myFunction(lg) {
      if (lg.matches) {
        return (this.ham = 3);
      }
    },
    myFunctionII(tb) {
      if (tb.matches) {
        return (this.ham = 2);
      }
    },
    myFunctionI(mb) {
      if (mb.matches) {
        return (this.ham = 1);
      }
    },
    myFunctionM(lg) {
      if (lg.matches) {
        return (this.ham = 3);
      }
    },
    myFunctionIIM(tb) {
      if (tb.matches) {
        return (this.ham = 2);
      }
    },
    myFunctionIM(mb) {
      if (mb.matches) {
        return (this.ham = 1);
      }
    },
  },
};
</script>

<style></style>
