<template>
  <div>
    <section class="blog">
      <div class="container --container__blog">
        <h2>Bài viết gần đây</h2>
        <flickity
          ref="flickity"
          :options="flickityOptions"
          class="blog__slider"
        >
          <div
            class="blog__slider-item carousel-cell"
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
          </div>
          <!-- <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog2.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog3.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog1.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog2.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog3.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog1.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog2.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div>
          <div class="blog__slider-item carousel-cell">
            <div class="img">
              <img src="../../public/img/img-blog3.jpg" alt="" />
              <div class="blog__description">
                <div class="title">
                  <h4>Danh mục bài viết</h4>
                </div>
                <div class="text">
                  <div class="day">
                    <i><img src="../../public/img/day-white.png" alt="" /></i>
                    <p>Tháng 05/2022</p>
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
          </div> -->
        </flickity>
        <div class="btn__slider-blog">
          <div class="btn__vuejs btn__prev" @click="previous()">
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
          <div class="btn__vuejs btn__next" @click="next()">
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </section>
    <section class="icon__zalo-fixed">
      <i><img src="../../public/img/icon__zalo-fixed.png" alt="" /></i>
      <div class="text"><p>Bạn cần hỗ trợ gì?</p></div>
    </section>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
import postService from "../../service/postService";

export default {
  name: "Blog",
  components: {
    Flickity,
  },
  data() {
    return {
      dataTest: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      },
    };
  },

  async mounted() {
    const result = await postService.getAllPosts([]);
    this.dataTest = result.data.data;
  },

  methods: {
    previous() {
      this.$refs.flickity.previous();
    },
    next() {
      this.$refs.flickity.next();
    },
  },
};
</script>

<style></style>
