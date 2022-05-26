<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-google-plus-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div
              class="input-group form-group"
              :class="{ 'form-group--error': $v.form.userName.$error }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fas fa-user"></i
                ></span>
              </div>
              <input
                v-model.trim="$v.form.userName.$model"
                type="text"
                class="form-control"
                placeholder="username"
              />
            </div>
            <div
              class="text-danger"
              v-if="!$v.form.userName.required && $v.form.$dirty"
            >
              Field is required.
            </div>
            <div class="text-danger" v-if="!$v.form.userName.minLength">
              Field must have at least
              {{ $v.form.userName.$params.minLength.min }} characters.
            </div>
            <div
              class="input-group form-group"
              :class="{ 'form-group--error': $v.form.password.$error }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                v-model.trim="$v.form.password.$model"
                type="password"
                class="form-control"
                placeholder="password"
              />
            </div>
            <div
              class="text-danger"
              v-if="!$v.form.password.required && $v.form.$dirty"
            >
              Field is required.
            </div>
            <div class="text-danger" v-if="!$v.form.password.minLength">
              Field must have at least
              {{ $v.form.password.$params.minLength.min }} characters.
            </div>
            <div class="form-group">
              <input
                @click="handleSubmit"
                :disabled="submitStatus === 'PENDING'"
                type="button"
                value="Login"
                class="btn float-right login_btn"
              />
            </div>
            <p class="typo__p" v-if="submitStatus === 'OK'">
              Thanks for your submission!
            </p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">
              Please fill the form correctly.
            </p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?<NuxtLink to="/register">Sign Up</NuxtLink>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationService from "../service/authenticationService";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
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
    };
  },

  validations: {
    form: {
      userName: {
        required,
        minLength: minLength(5),
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
      try {
        const response = await authenticationService.login({
          email: this.form.userName,
          password: this.form.password,
        });
        localStorage.setItem("token", response.headers.authorization);
        localStorage.setItem("user", JSON.stringify(response.data));
        this.$router.push({ path: "/admin" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/loginpage.scss";
.text-danger {
  margin-bottom: 10px;
}
</style>
