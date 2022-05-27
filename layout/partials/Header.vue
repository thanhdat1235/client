<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/loginpage"
        ><img
          class="image-logo"
          src="https://www.idsolutions.com.vn/wp-content/uploads/2019/12/IDS-Logo-Official-01-01-e1620376342418.png"
          alt=""
      /></NuxtLink>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto"></ul>
        <span class="navbar-text">Home Page</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #646fd4 !important;
  height: 50px;
  .navbar-brand {
    .image-logo {
      width: 170px;
    }
  }
  .collapse {
    .navbar-text {
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
