<template>
  <section class="main-view">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <Header />
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <!-- content wrapper ends -->
          <Footer />
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script>
import Header from "./partials/Header";
import Footer from "./partials/Footer";
export default {
  name: "layout",
  components: {
    Header,
    Footer,
  },
};
</script>
