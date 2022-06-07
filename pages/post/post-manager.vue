<template>
  <div class="container">
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
                  @click="handleDelete(post._id)"
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
      <button
        @click="handleDelete(post._id)"
        type="submit"
        class="btn btn-danger"
      >
        Delete
      </button>
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
      dataPost: {},
      isCheckAll: false,
      isCheck: false,
      items: [],
    };
  },
  mounted() {
    this.getAll();
  },

  methods: {
    async getAll() {
      try {
        const result = await getAllPosts.getAllPosts({});
        this.dataPost = result.data.data;
      } catch (error) {
        console.log(error);
      }
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

    async handleDelete(_id) {
      try {
        console.log(_id);
        await postService.deleteById({ _id });
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
}
</style>
