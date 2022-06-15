<template>
  <section class="main-view">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
"
    />
    <div class="container-scroller">
      <div class="page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <AdminPage />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdminPage from "../../components/admin/AdminPage.vue";
export default {
  head: {
    title: "Admin Page",
    meta: [
      {
        name: "admin",
      },
    ],
  },
  data() {
    return {};
  },
  components: {
    AdminPage,
  },
};
</script>

<style lang="scss" scoped>
.main-panel {
  margin-top: 130px;
}
</style>
