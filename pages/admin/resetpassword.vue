<template>
  <section class="main-view">
    <div class="container-scroller">
      <div class="page-body-wrapper">
        <Header />
        <div class="main-panel">
          <div class="content-wrapper resetform">
            <ResetPasswordPage />
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
export default {
  head: {
    title: "ResetPasswordPage",
    meta: [
      {
        name: "resetpassword",
      },
    ],
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.resetform {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}
</style>
