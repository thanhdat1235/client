<template>
  <main class="mainwrapper">
    <section class="search">
      <img src="../../public/img/bg-search.jpg" alt="background" />
      <div class="search__input">
        <i><img src="../../public/img/icon-search.png" alt="icon search" /></i>
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          v-model="searchQuery"
          @input="senData"
        />
      </div>
    </section>
    <section class="blogs">
      <div class="container">
        <div class="blog__content">
          <div class="blog__content-item">
            <div class="item" v-for="(data, index) in dataPosts" :key="index">
              <div @click="getIdPost(data._id)" class="img">
                <img :src="data.urlImage" :alt="data.title" />
                <div class="blog__description">
                  <div class="title">
                    <h4>{{ data.category }}</h4>
                  </div>
                  <div class="text">
                    <div class="day">
                      <i><img src="../../public/img/day-white.png" alt="" /></i>
                      <p>{{ convertDate(data.created_at) }}</p>
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
              <p>
                {{ data.description }}
              </p>
            </div>
            <!-- <div class="item">
              <a href="post-detail" class="img">
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
              </a>
              <div class="title">
                <h3>
                  Tháng 04 tất bật với chuỗi job fair và nhiều hoạt động kết nối
                  cùng các trường đại học
                </h3>
              </div>
              <p>
                Hoạt động hợp tác đại học của TMA và các trường đại học được đẩy
                mạnh trong tháng 04 vừa qua, tiêu biểu là các sự kiện job fair
                và ...
              </p>
            </div>
            <div class="item">
              <a href="post-detail" class="img">
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
              </a>
              <div class="title">
                <h3>
                  Tháng 04 tất bật với chuỗi job fair và nhiều hoạt động kết nối
                  cùng các trường đại học
                </h3>
              </div>
              <p>
                Hoạt động hợp tác đại học của TMA và các trường đại học được đẩy
                mạnh trong tháng 04 vừa qua, tiêu biểu là các sự kiện job fair
                và ...
              </p>
            </div>
            <div class="item">
              <a href="post-detail" class="img">
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
              </a>
              <div class="title">
                <h3>
                  Tháng 04 tất bật với chuỗi job fair và nhiều hoạt động kết nối
                  cùng các trường đại học
                </h3>
              </div>
              <p>
                Hoạt động hợp tác đại học của TMA và các trường đại học được đẩy
                mạnh trong tháng 04 vừa qua, tiêu biểu là các sự kiện job fair
                và ...
              </p>
            </div>
            <div class="item">
              <a href="post-detail" class="img">
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
              </a>
              <div class="title">
                <h3>
                  Tháng 04 tất bật với chuỗi job fair và nhiều hoạt động kết nối
                  cùng các trường đại học
                </h3>
              </div>
              <p>
                Hoạt động hợp tác đại học của TMA và các trường đại học được đẩy
                mạnh trong tháng 04 vừa qua, tiêu biểu là các sự kiện job fair
                và ...
              </p>
            </div>
            <div class="item">
              <a href="post-detail" class="img">
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
              </a>
              <div class="title">
                <h3>
                  Tháng 04 tất bật với chuỗi job fair và nhiều hoạt động kết nối
                  cùng các trường đại học
                </h3>
              </div>
              <p>
                Hoạt động hợp tác đại học của TMA và các trường đại học được đẩy
                mạnh trong tháng 04 vừa qua, tiêu biểu là các sự kiện job fair
                và ...
              </p>
            </div> -->
          </div>
          <div class="blog__content-sidebar">
            <div class="menu__blog">
              <h2>Danh mục bài viết</h2>
              <ul class="list__options list__option-vuejs">
                <li
                  class="option option-vuejs active"
                  v-for="(data, index) in dataPosts"
                  :key="index"
                >
                  {{ data.category }}
                </li>
                <!-- <li class="option option-vuejs">In ấn</li>
                <li class="option option-vuejs">Lý thuyết quản trị</li>
                <li class="option option-vuejs">Kỹ năng quản lý</li>
                <li class="option option-vuejs">Kỹ năng lãnh đạo</li>
                <li class="option option-vuejs">Ưu đãi cho khách hàng</li> -->
              </ul>
            </div>
            <div class="featured__posts">
              <h2>Bài viết nổi bật</h2>
              <div
                class="featured__posts-detail"
                v-for="(data, index) in dataPosts"
                :key="index"
              >
                <div class="title__post">
                  <p>{{ data.category }}</p>
                  <i><img src="../../public/img/dot.png" alt="dot" /></i>
                  <span>{{ convertDate(data.created_at) }}</span>
                </div>
                <div class="text">
                  <p>{{ data.title }}</p>
                </div>
              </div>
              <!-- <div class="featured__posts-detail">
                <div class="title__post">
                  <p>Lý thuyết quản trị</p>
                  <i><img src="../../public/img/dot.png" alt="dot" /></i>
                  <span>20/05/2022</span>
                </div>
                <div class="text">
                  <p>
                    Mở rộng kinh doanh theo chuỗi? bạn cần nắm công thức nhân
                    bản ba yếu tố: Nhân lực, quy trình & tư tưởng
                  </p>
                </div>
              </div>
              <div class="featured__posts-detail">
                <div class="title__post">
                  <p>Kỹ năng lãnh đạo</p>
                  <i><img src="../../public/img/dot.png" alt="dot" /></i>
                  <span>19/05/2022</span>
                </div>
                <div class="text">
                  <p>
                    Hướng dẫn xây dựng kế hoạch kinh doanh (có kế hoạch mẫu)
                  </p>
                </div>
              </div>
              <div class="featured__posts-detail">
                <div class="title__post">
                  <p>Kỹ năng lãnh đạo</p>
                  <i><img src="../../public/img/dot.png" alt="dot" /></i>
                  <span>19/05/2022</span>
                </div>
                <div class="text">
                  <p>
                    Hướng dẫn xây dựng kế hoạch kinh doanh (có kế hoạch mẫu)
                  </p>
                </div>
              </div>
              <div class="featured__posts-detail">
                <div class="title__post">
                  <p>Kỹ năng lãnh đạo</p>
                  <i><img src="../../public/img/dot.png" alt="dot" /></i>
                  <span>19/05/2022</span>
                </div>
                <div class="text">
                  <p>
                    Hướng dẫn xây dựng kế hoạch kinh doanh (có kế hoạch mẫu)
                  </p>
                </div>
              </div> -->
            </div>
            <div class="thumbnail">
              <div class="thumbnail__one --thumbnail">
                <img src="../../public/img/thumbnail-1.jpg" alt="" />
              </div>
              <div class="thumbnail__two --thumbnail">
                <img src="../../public/img/thumbnail-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="button__number-page">
            <button
              class="btn__vuejs btn__prev"
              @click="prevPage"
              :disabled="disabledPreviousPage"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <ul class="number-page list__option-vuejs">
              <li
                class="btn__vuejs option-vuejs"
                v-for="(total, index) in totalPages"
                :key="index"
                :class="checkActive(index + 1)"
                @click="assign(index)"
              >
                {{ index + 1 }}
              </li>
              <!-- <li class="btn__vuejs option-vuejs">2</li>
              <li class="btn__vuejs option-vuejs">3</li>
              <li class="btn__vuejs option-vuejs">4</li> -->
            </ul>
            <button
              class="btn__vuejs btn__next"
              :disabled="disabledNextPage"
              @click="nextPage"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="input__signup">
      <div class="container">
        <div class="input__signup-content">
          <h2>ĐĂNG KÍ NHẬN BÀI VIẾT</h2>
          <div class="input">
            <input
              type="text"
              class="input-signup"
              placeholder="Nhập email của bạn..."
            />
            <input type="submit" class="btn-signup" value="Đăng ký" />
          </div>
        </div>
      </div>
    </section>
    <section class="icon__zalo-fixed">
      <i><img src="../../public/img/icon__zalo-fixed.png" alt="" /></i>
      <div class="text"><p>Bạn cần hỗ trợ gì?</p></div>
    </section>
  </main>
</template>

<script>
import postService from "../../service/postService";
import { formatDate } from "../../utils/dateFormat";
import searchService from "../../service/searchService";
export default {
  name: "PostPage",
  data() {
    return {
      dataPosts: null,
      searchQuery: null,
      debounce: null,
      message: null,
      typing: null,
      disabledNextPage: false,
      disabledPreviousPage: false,
      active: "",
      totalElements: String,
      totalPages: String,
      numberOfElements: String,
      pageAble: {
        page: 1,
        pageSize: 4,
      },
    };
  },

  async mounted() {
    try {
      this.getData();
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async getData() {
      try {
        const data = await postService.getAllPosts({
          pageSize: this.pageAble.pageSize,
          page: this.pageAble.page,
        });
        this.dataPosts = data.data.data;
        this.totalPages = data.data.totalPages;
        this.pageAble = data.data.pageAble;
      } catch (error) {
        console.log(error);
      }
    },

    async getIdPost(_id) {
      await this.$router.push({ path: "/post/post-detail?id=" + _id });
    },

    async assign(index) {
      this.pageAble.page = index + 1;
      await this.getData();
    },

    async nextPage() {
      if (this.pageAble.page < this.totalPages) {
        this.pageAble.page++;
        await this.getData();
        if (this.totalPages == this.pageAble.page) {
          this.disabledNextPage = true;
        }
        this.disabledNextPage = false;
      }
    },

    async prevPage() {
      if (this.pageAble.page > 0) {
        this.pageAble.page--; // For the previous page, you just increment 'skip' for the page size 'limit'
        this.getData();
      }
      if ((this.pageAble.page = 1)) {
        this.disabledPreviousPage = true;
      }
      this.disabledPreviousPage = false;
    },

    checkActive(index) {
      return this.pageAble.page === index ? "active" : "";
    },

    convertDate(createdDate) {
      return formatDate(new Date(createdDate));
    },

    async senData(event) {
      searchService
        .searchPost({
          payload: this.searchQuery,
        })
        .then((res) => {
          this.debounceSearch(event);
          this.dataPosts = res.data.payload;
        })
        .catch((error) => console.log(error));
      if (!this.searchQuery) {
        this.getData();
      }
    },

    debounceSearch(event) {
      this.message = null;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.typing = null;
        this.message = event.target.value;
      }, 600);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/post.scss";
</style>
