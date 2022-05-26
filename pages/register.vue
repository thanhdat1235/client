<template>
  <div class="register">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <Header />
    <RegisterPage />
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/partials/Header.vue";
import RegisterPage from "../components/RegisterPage.vue";
import Footer from "../layout/partials/Footer.vue";
export default {
  name: "register",
  components: {
    Header,
    RegisterPage,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
