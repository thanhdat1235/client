<template>
  <div class="container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <form class="form-post" action="">
      <h1>Tất cả bài viết</h1>
      <div class="new-post">
        <button type="button" class="btn btn-primary">
          <NuxtLink to="/post/create-post">Đăng bài</NuxtLink>
        </button>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>
              <div class="input-group-text">
                <input
                  type="checkbox"
                  :checked="isCheckAll"
                  @click="handleCheckAll"
                />
              </div>
            </th>
            <th scope="col">STT</th>
            <th scope="col">Danh mục</th>
            <th scope="col">Tiêu đề</th>
            <th scope="col">Ngày cập nhật</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody v-for="(post, index) in dataPost" :key="index">
          <tr>
            <th>
              <div class="input-group-text">
                <input
                  type="checkbox"
                  :checked="isCheck"
                  @click="handleCheck(post._id)"
                />
              </div>
            </th>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ post.category }}</td>
            <td>{{ post.title }}</td>
            <td>{{ convertDate(post.created_at) }}</td>
            <td class="td-delete">
              <button
                @click="handleEdit(post._id)"
                type="button"
                class="btn btn-primary edit-btn"
              >
                Edit
              </button>
              <form class="form-delete">
                <button
                  @click="handleDeleteOne(post._id)"
                  type="submit"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="handleDelete" type="submit" class="btn btn-danger">
          Delete
        </button>
        <div class="button__number-page">
          <button
            class="btn__vuejs btn__prev"
            @click="prevPage"
            :disabled="disabledPreviousPage"
            type="button"
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
            type="button"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <div class="select-admin custom-select">
            <select
              @click="clickPage"
              v-model="pageAble.pageSize"
              name="pagesize"
              id="pagesize"
            >
              <i class="fa-solid fa-caret-down"></i>
              <option value="10">10 User</option>
              <option value="20">20 User</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import postService from "../../service/postService";
import getAllPosts from "../../service/postService";
import { formatDate } from "../../utils/dateFormat";
export default {
  head: {
    title: "Post Manager",
    meta: [
      {
        name: "post-manager",
      },
    ],
  },
  data() {
    return {
      disabledNextPage: false,
      disabledPreviousPage: false,
      dataPost: {},
      isCheckAll: false,
      isCheck: false,
      items: [],
      totalElements: String,
      totalPages: String,
      numberOfElements: String,
      pageAble: {
        page: 1,
        pageSize: 10,
      },
    };
  },
  mounted() {
    this.getAll();
  },

  methods: {
    async getAll() {
      try {
        const result = await getAllPosts.getAllPosts({
          pageSize: this.pageAble.pageSize,
          page: this.pageAble.page,
        });
        this.dataPost = result.data.data;
        this.totalPages = result.data.totalPages;
        this.pageAble = result.data.pageAble;
      } catch (error) {
        console.log(error);
      }
    },

    checkActive(index) {
      return this.pageAble.page === index ? "active" : "";
    },

    async assign(index) {
      this.pageAble.page = index + 1;
      await this.getAll();
    },

    async nextPage() {
      if (this.pageAble.page < this.totalPages) {
        this.pageAble.page++;
        await this.getAll();
        if (this.totalPages == this.pageAble.page) {
          this.disabledNextPage = true;
        }
        this.disabledNextPage = false;
      }
    },

    async prevPage() {
      if (this.pageAble.page > 0) {
        this.pageAble.page--; // For the previous page, you just increment 'skip' for the page size 'limit'
        this.getAll();
      }
      if ((this.pageAble.page = 1)) {
        this.disabledPreviousPage = true;
      }
      this.disabledPreviousPage = false;
    },

    clickPage() {
      this.getAll();
    },

    convertDate(createdDate) {
      return formatDate(new Date(createdDate));
    },

    async handleEdit(_id) {
      try {
        this.$router.push({ path: "/post/edit-post?id=" + _id });
      } catch (error) {
        console.log(error);
      }
    },

    async handleDeleteOne(_id) {
      try {
        await postService.deleteById({ id: _id });
        this.$router.push({ path: "/post/post-manager" });
      } catch (error) {
        console.log(error);
      }
    },

    async handleDelete() {
      try {
        const id = this.items;
        await postService.deleteById({ id });
      } catch (error) {
        console.log(error);
      }
    },

    handleCheckAll() {
      if (this.isCheckAll == false) {
        (this.isCheckAll = true),
          (this.isCheck = true),
          this.dataPost.forEach((user) => {
            this.items.push(user._id);
          });
        console.log(this.items);
      } else {
        (this.isCheckAll = false), (this.isCheck = false), (this.items = []);
      }
    },

    handleCheck(_id) {
      console.log(this.items);
      if (this.items.includes(_id) == false) {
        this.items.push(_id);
      } else {
        this.items.splice(this.items.indexOf(_id), 1);
      }
      if (this.items.length == this.dataPost.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-post {
  h1 {
    text-align: center;
  }
  .new-post {
    margin-bottom: 15px;
    button {
      a {
        color: black;
        font-weight: bold;
      }
    }
  }
  .td-delete {
    display: flex;
    .edit-btn {
      margin-right: 10px;
    }
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .button__number-page {
      display: flex;
      justify-content: center;
      border-radius: 6px;
      margin-right: 15px;
      .btn__vuejs {
        width: 44px;
        height: 44px;
        background-color: #ffffff;
        display: flex;
        border: 1px solid #e9e9e9;
        i {
          margin: auto;
          color: #bfbfbf;
        }
        &:hover {
          i {
            color: red;
          }
        }
      }
      .btn__prev {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      .number-page {
        display: flex;
        .option-vuejs {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "roRegular400";
          font-size: 18px;
          &.active {
            background-color: $primary-cl;
            color: #ffffff;
          }
        }
      }
      .btn__next {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      .select-admin {
        padding: 5px 10px;
        margin-left: 10px;
        height: 42px;
        margin-right: -10px;
        #pagesize {
          padding: 0 10px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
