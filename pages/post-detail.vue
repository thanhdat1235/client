<template>
  <div class="Posts">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <Header />
    <PostDetail />
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/partials/Header.vue";
import PostDetail from "../components/PostDetail.vue";
import Footer from "../layout/partials/Footer.vue";
export default {
  name: "post-detail",
  components: {
    Header,
    PostDetail,
    Footer,
  },
};
</script>
<style lang="scss"></style>
