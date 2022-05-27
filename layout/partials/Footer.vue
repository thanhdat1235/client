<template>
  <div class="container-fluid footer">
    <span>Copyright © 2022 PrintM | Powered by IDS </span>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  background-color: #646fd4;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  span {
    color: white;
  }
}
</style>
