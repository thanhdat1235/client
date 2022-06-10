<template>
  <div class="post-new">
    <Header class="header-news-post" />
    <div class="container">
      <form action="" class="editor">
        <h1 class="heading">Chỉnh sửa bài viết</h1>
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
                type="submit"
                class="btn btn-success success"
                @click="updateData"
              >
                Cập nhật
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
import postService from "../../service/postService";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  head: {
    title: "Edit Page",
    meta: [
      {
        name: "edit-page",
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
  async mounted() {
    try {
      const id = this.$router.currentRoute.query.id;
      const result = await postService.findById({ id });
      this.category = result.data.category;
      this.title = result.data.title;
      this.ckeditor = result.data.ckeditor;
      this.description = result.data.description;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async updateData() {
      const id = this.$router.currentRoute.query.id;
      this.$v.$touch();
      try {
        await postService.updatePost({
          id,
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

<style lang="scss" scoped></style>
