<template>
  <div class="container-center">
    <form action="">
      <div class="form-group">
        <input v-model="dataUser.otp_code" type="text" name="otp" />
        <label for="otp"><br />OTP Code</label>
        <span>enter OTP Code</span>
      </div>

      <button @click="getOTP" id="login-btn">Next</button>
    </form>
    <p>Back to signin? <a href="/login">Sign In</a></p>
  </div>
</template>

<script>
import userSevice from "../service/userService";
export default {
  head: {
    title: "VerifyOTP Page",
    meta: [
      {
        name: "VerifyOTP",
      },
    ],
  },
  data() {
    return {
      dataUser: {
        otp_code: "",
      },
    };
  },
  methods: {
    async getOTP(e) {
      e.preventDefault();

      try {
        const email = this.$router.currentRoute.query.email;
        await userSevice.verifyOTP({
          email: email,
          otp_code: this.dataUser.otp_code,
        });
        this.$router.push({ path: "/resetpassword?email=" + email });
        console.log("oke");
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
