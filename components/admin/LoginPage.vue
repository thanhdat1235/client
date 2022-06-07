<template>
  <div class="login-form">
    <div class="form">
      <h2>Login</h2>
      <div class="input">
        <div class="inputBox">
          <label for="">Username</label>
          <input
            v-on:keyup.enter="onEnter"
            v-model="form.userName"
            type="text"
          />
        </div>
        <span
          v-if="
            (!$v.form.userName.required || !$v.form.userName.email) &&
            $v.form.userName.$dirty
          "
          class="text-danger"
          >Valid Email is required</span
        >
        <div class="inputBox">
          <label for="">Password</label>
          <input
            v-on:keyup.enter="onEnter"
            v-model="form.password"
            type="password"
          />
        </div>
        <span
          v-if="!$v.form.password.required && $v.form.password.$dirty"
          class="text-danger"
        >
          Password is required</span
        >
        <span
          v-if="!$v.form.password.minLength && $v.form.password.$dirty"
          class="text-danger"
        >
          Password must be between
          {{ $v.form.password.$params.minLength.min }} and
        </span>
        <div class="inputBox">
          <input @click="handleSubmit" type="submit" name="" value="Sign In" />
        </div>
      </div>
      <p class="forgot">
        Forgot Password? <a href="/forgotpassword">Click Here</a>
      </p>
      <p class="forgot"><a href="/register">Sign up</a></p>
      <p class="text-danger">{{ errLogin }}</p>
      <div class="social">
        <a href="https://www.facebook.com/">
          <i class="fa-brands fa-facebook"></i>
          <p>Signin with Facebook</p>
        </a>
        <a
          href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22%7D"
        >
          <i class="fa-brands fa-twitter"></i>
          <p>Signin with Twitter</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationService from "../../service/authenticationService";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  head: {
    title: "Login Page",
    meta: [
      {
        name: "login",
      },
    ],
  },
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      submitStatus: null,
      errLogin: "",
    };
  },

  validations: {
    form: {
      userName: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  methods: {
    onEnter() {
      this.handleSubmit();
    },

    async handleSubmit(e) {
      this.$v.$touch();
      try {
        const response = await authenticationService.login({
          email: this.form.userName,
          password: this.form.password,
        });
        localStorage.setItem("token", response.headers.authorization);
        localStorage.setItem("user", JSON.stringify(response.data));
        this.$router.push({ path: "/admin/admin" });
      } catch (error) {
        console.log(error);
        this.errLogin = "Email or password is incorrect";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/loginpage.scss";
.text-danger {
  margin-bottom: 10px;
}
</style>
