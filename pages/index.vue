<template>
  <div class="homePage">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <Header />
    <HomePage />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
import Header from "../layout/partials/Header.vue";
import HomePage from "../components/HomePage.vue";
import Footer from "../layout/partials/Footer.vue";
export default {
  name: "IndexPage",
  components: {
    Header,
    HomePage,
    Blog,
    Footer,
  },
};
</script>
<style lang="scss"></style>
