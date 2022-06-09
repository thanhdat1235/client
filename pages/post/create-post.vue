<template>
  <div class="post-new">
    <Header class="header-news-post" />
    <div class="container">
      <form action="" class="editor">
        <h1 class="heading">Đăng bài viết</h1>
        <div>
          <div class="input-group">
            <label for="category">Danh mục bài viết:</label>
            <span
              v-if="!$v.category.required && $v.category.$dirty"
              class="text-danger"
            >
              Category is required</span
            >
            <input
              id="category"
              v-model="category"
              type="text"
              class="form-control"
              placeholder="Nhập vào danh mục bài viết"
            />
          </div>
          <div class="input-group">
            <label for="title">Tiêu đề bài viết:</label>
            <span
              v-if="!$v.title.required && $v.title.$dirty"
              class="text-danger"
            >
              Title is required</span
            >
            <input
              id="title"
              v-model="title"
              type="text"
              value="title"
              class="form-control"
              placeholder="Nhập vào tiêu đề bài viết"
            />
          </div>
          <div class="input-group">
            <label for="description">Mô tả ngắn</label>
            <span
              v-if="!$v.description.required && $v.description.$dirty"
              class="text-danger"
            >
              Description is required</span
            >
            <textarea
              id="description"
              v-model="description"
              type="text"
              value="description"
              class="form-control"
              placeholder="Nhập vào tiêu đề bài viết"
            />
          </div>
          <label
            for="
          "
            >Nội dung:</label
          >
          <client-only class="editor-1">
            <v-ckeditor v-model="ckeditor" />
            <div class="bottom-form">
              <button
                type="button"
                class="btn btn-success success"
                @click.prevent="getData"
              >
                Đăng bài
              </button>
              <button type="button" class="btn btn-secondary">
                <NuxtLink to="/post/post-manager">Quay lại</NuxtLink>
              </button>
            </div>
          </client-only>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../layout/partials/Header.vue";
import Footer from "../../layout/partials/Footer.vue";
import postService from "../../service/postService";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  head: {
    title: "New Post",
    meta: [
      {
        name: "create-post",
      },
    ],
  },
  data() {
    return {
      category: "",
      title: "",
      ckeditor: "",
      description: "",
    };
  },
  validations: {
    category: {
      required,
    },
    title: {
      required,
    },
    description: {
      required,
    },
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getData() {
      this.$v.$touch();
      try {
        const newPost = await postService.createNewPost({
          category: this.category,
          title: this.title,
          ckeditor: this.ckeditor,
          description: this.description,
        });
        this.$router.push({ path: "/post/post-manager" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.editor {
  margin-top: 120px !important;
  .ck-editor__editable {
    height: 500px;
  }
  .heading {
    text-align: center;
  }
  .bottom-form {
    margin-top: 15px;
    display: flex;
    .success {
      margin-right: 10px;
      font-weight: bold;
    }
    button {
      a {
        color: black;
        font-weight: bold;
      }
    }
  }
  .input-group {
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
  label {
    font-weight: bold;
  }
}
</style>
