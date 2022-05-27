<template>
  <section class="main-view">
    <div class="container-scroller">
      <div class="page-body-wrapper">
        <Header />
        <div class="main-panel">
          <div class="content-wrapper">
            <VerifyOTP />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../layout/partials/Header.vue";
import Footer from "../layout/partials/Footer.vue";
export default {
  name: "forgot",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scope="true">
.footer {
  position: absolute;
  bottom: 0;
}
</style>
