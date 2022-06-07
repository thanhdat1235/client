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
            <EditPage />
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
import EditPage from "../../components/admin/EditPage.vue";
export default {
  head: {
    title: "EditPage",
    meta: [
      {
        name: "edit",
      },
    ],
  },
  components: {
    Header,
    EditPage,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: block;
}
</style>
