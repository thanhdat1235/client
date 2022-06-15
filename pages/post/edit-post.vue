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
              Vui lòng chọn tiêu đề</span
            >
            <div class="input-group mb-3">
              <div class="categry-add">
                <select
                  class="custom-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  v-model="category"
                >
                  <option value="">Chọn danh mục bài viết</option>
                  <option
                    v-for="(category, index) in dataCategories"
                    :key="index"
                    :value="category.value"
                  >
                    {{ category.value }}
                  </option>
                </select>
                <b-button v-b-modal.modal-prevent-closing
                  >Thêm danh mục</b-button
                >
              </div>
              <div>
                <b-modal
                  id="modal-prevent-closing"
                  ref="modal"
                  title="Nhập vào tiêu đề bài viết"
                  @show="resetModal"
                  @hidden="resetModal"
                  @ok="handleOk"
                >
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group
                      label="Tiêu đề"
                      label-for="name-input"
                      invalid-feedback="Vui lòng nhập tiêu đề"
                      :state="nameState"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="name"
                        :state="nameState"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </form>
                </b-modal>
              </div>
            </div>
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
      name: "",
      category: "",
      nameState: null,
      dataCategories: [
        { value: "Thế giới" },
        { value: "Pháp luật" },
        { value: "Bất động sản" },
        { value: "Ẩm thực" },
        { value: "Tin tức" },
        { value: "Sức khỏe" },
        { value: "Công nghệ" },
        { value: "Thị trường" },
      ],
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
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.dataCategories = [...this.dataCategories, { value: this.name }];
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
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
.mb-3 {
  width: 100%;
  .categry-add {
    display: flex;
    align-items: center;
    select {
      width: 86%;
      margin-right: 22px;
      .add-category {
        background-color: green;
      }
    }
    b-button {
      width: 20%;
    }
  }
}
</style>
