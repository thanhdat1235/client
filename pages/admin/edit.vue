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
            <EditPage />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
    EditPage,
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: block;
}
</style>
