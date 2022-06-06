<template>
  <div class="Posts">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <Header />
    <Posts />
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/partials/Header.vue";
import Posts from "../components/Posts.vue";
import Footer from "../layout/partials/Footer.vue";
export default {
  name: "post-page",
  components: {
    Header,
    Posts,
    Footer,
  },
};
</script>
<style lang="scss"></style>
