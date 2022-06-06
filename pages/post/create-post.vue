<template>
  <div class="post-new">
    <Header class="header-news-post" />
    <div class="editor">
      <client-only class="editor-1">
        <v-ckeditor v-model="text" />
        <button @click="getData">Get Data</button>
      </client-only>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../layout/partials/Header.vue";
import Footer from "../../layout/partials/Footer.vue";
export default {
  name: "create-post",
  data() {
    return {
      text: "Hello World!!",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    getData() {
      console.log(this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
.editor {
  margin-top: 120px !important;
}
</style>
