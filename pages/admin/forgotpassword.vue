<template>
  <section class="main-view">
    <div class="container-scroller">
      <div class="page-body-wrapper">
        <Header />
        <div class="main-panel">
          <div class="content-wrapper">
            <ForgotPassword />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../../layout/partials/Header.vue";
import Footer from "../../layout/partials/Footer.vue";
import ForgotPassword from "../../components/admin/ForgotPasswordPage.vue";
export default {
  head: {
    title: "Forgot Password",
    meta: [
      {
        name: "forgot",
      },
    ],
  },
  components: {
    Header,
    ForgotPassword,
    Footer,
  },
};
</script>

<style lang="scss" scope="true">
.footer {
  position: absolute;
  bottom: 0;
}
.content-wrapper {
  height: 100vh;
}
</style>
