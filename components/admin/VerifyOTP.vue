<template>
  <div class="container-center">
    <h2 class="otp">Enter your OTP code</h2>
    <form action="">
      <div class="form-group">
        <input v-model="dataUser.otp_code" type="text" name="otp" />
        <label for="otp">OTP Code</label>
        <span>enter OTP Code</span>
      </div>

      <button @click="getOTP" id="login-btn">Next</button>
      <span class="text-danger error-forgot">{{ errOTP }}</span>
    </form>
    <p class="remember">Back to signin? <a href="/login">Sign In</a></p>
  </div>
</template>

<script>
import userSevice from "../../service/userService";
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
      errOTP: "",
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
        this.$router.push({ path: "/admin/resetpassword?email=" + email });
      } catch (error) {
        console.log(error);
        this.errOTP = "OTP does not match!";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/forgotpassword.scss";
.otp {
  color: black;
}
</style>
