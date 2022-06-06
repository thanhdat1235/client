<template>
  <section class="main-view">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <div class="container-scroller">
      <div class="page-body-wrapper">
        <Header />
        <div class="main-panel">
          <div class="content-wrapper">
            <AdminPage />
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
import AdminPage from "../components/AdminPage.vue";
export default {
  name: "admin",
  data() {
    return {};
  },
  components: {
    Header,
    AdminPage,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.main-panel {
  margin-top: 130px;
}
</style>
