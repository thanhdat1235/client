<template>
  <div class="container-center">
    <center>
      <img
        src="https://www.idsolutions.com.vn/wp-content/uploads/2019/10/ids-official-favicon-1-1.png"
        width="30%"
      />
    </center>
    <h2 class="worry">Don't Worry!</h2>
    <form action="">
      <h4>
        Just provide your email<br />
        and we can do the rest
      </h4>
      <div class="form-group">
        <input v-model="dataUser.email" type="text" name="email" />
        <label for="email">Email</label>
        <span>enter your email</span>
      </div>

      <button @click="getEmail" id="login-btn">Next</button>
      <span class="text-danger error-forgot">{{ errEmail }}</span>
    </form>
    <p class="remember">Did you remember? <a href="/login">Sign In</a></p>
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
      errEmail: "",
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
        this.errEmail = "Email is not correct!";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/forgotpassword.scss";
.remember {
  color: black;
}
.worry {
  color: black;
}

.error-forgot {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
@media screen and (max-width: 1902px) {
  .container {
    max-width: 1210px !important;
  }
}
</style>
