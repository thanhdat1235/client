<template>
  <div class="loginpage">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <Header />
    <LoginPage />
    <Footer />
  </div>
</template>

<script>
import Header from "../../layout/partials/Header.vue";
import LoginPage from "../../components/admin/LoginPage.vue";
import Footer from "../../layout/partials/Footer.vue";
export default {
  head: {
    title: "LoginPage",
    meta: [
      {
        name: "loginpage",
      },
    ],
  },
  components: {
    Header,
    LoginPage,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
