<template>
  <div class="loginpage">
    <Header />
    <LoginPage />
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/partials/Header.vue";
import LoginPage from "../components/LoginPage.vue";
import Footer from "../layout/partials/Footer.vue";
export default {
  name: "loginpage",
  components: {
    Header,
    LoginPage,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.loginpage {
  background-image: url("http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg");
}
</style>
