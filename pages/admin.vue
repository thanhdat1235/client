<template>
  <section class="main-view">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
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
  components: {
    Header,
    AdminPage,
    Footer,
  },
};
</script>

<style lang="scss" scope="true"></style>
