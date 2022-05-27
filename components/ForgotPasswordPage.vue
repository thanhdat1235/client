<template>
  <div class="container-center">
    <center>
      <img
        src="https://www.idsolutions.com.vn/wp-content/uploads/2019/10/ids-official-favicon-1-1.png"
        width="30%"
      />
    </center>
    <h2>Don't Worry!</h2>
    <form action="">
      <h4>
        Just provide your email<br />
        and we can do the rest
      </h4>
      <div class="form-group">
        <input v-model="dataUser.email" type="text" name="email" />
        <label for="email"><br />Email</label>
        <span>enter your email</span>
      </div>

      <button @click="getEmail" id="login-btn">Next</button>
    </form>
    <p>Did you remember? <a href="/login">Sign In</a></p>
  </div>
</template>

<script>
import userSevice from "../service/userService";
export default {
  head: {
    title: "Forgotpassword Page",
    meta: [
      {
        name: "forgotpage",
      },
    ],
  },
  data() {
    return {
      dataUser: {
        email: "",
      },
    };
  },
  methods: {
    async getEmail(e) {
      e.preventDefault();

      try {
        await userSevice.forgotpassword({ email: this.dataUser.email });
        this.$router.push({ path: "/verifyotp?email=" + this.dataUser.email });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/forgotpassword.scss";
</style>
