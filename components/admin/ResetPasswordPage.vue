<template>
  <div class="mainDiv">
    <div class="cardStyle">
      <form name="signupForm" id="signupForm">
        <h2 class="formTitle">Reset your password</h2>

        <div class="inputDiv">
          <label class="inputLabel" for="password">New Password</label>
          <input
            v-model="dataUser.password"
            type="password"
            id="password"
            name="password"
            required
          />
          <span
            v-if="!$v.dataUser.password.required && $v.dataUser.password.$dirty"
            class="text-danger"
          >
            Password is required</span
          >
          <span
            v-if="
              (!$v.dataUser.password.minLength ||
                !$v.dataUser.password.maxLength) &&
              $v.dataUser.password.$dirty
            "
            class="text-danger"
          >
            Password must be between
            {{ $v.dataUser.password.$params.minLength.min }} and
            {{ $v.dataUser.password.$params.maxLength.max }} characters
          </span>
        </div>

        <div class="inputDiv">
          <label class="inputLabel" for="confirmPassword"
            >Confirm Password</label
          >
          <input
            v-model="dataUser.confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <span
            v-if="
              !$v.dataUser.confirmPassword.required &&
              $v.dataUser.confirmPassword.$dirty
            "
            class="text-danger"
          >
            Confirm password is required</span
          >
          <span
            v-if="
              !$v.dataUser.confirmPassword.sameAsPassword &&
              $v.dataUser.confirmPassword.$dirty
            "
            class="text-danger"
          >
            Passwords do NOT match
          </span>
        </div>
        <div class="buttonWrapper">
          <button
            @click.prevent="resetPassword"
            type="button"
            id="submitButton"
            class="submitButton pure-button pure-button-primary"
          >
            <span>Continue</span>
          </button>
        </div>
        <span class="text-danger error-forgot">{{ errRSPW }}</span>
        <p class="forgot"><a href="/admin/login">Signin</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import userSevice from "../../service/userService";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  head: {
    title: "ResetPasswordPage Page",
    meta: [
      {
        name: "ResetPasswordPage",
      },
    ],
  },
  data() {
    return {
      dataUser: {
        password: "",
        confirmPassword: "",
      },
      errRSPW: "",
    };
  },

  validations: {
    dataUser: {
      password: {
        required,
        maxLength: maxLength(12),
        minLength: minLength(6),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },

  methods: {
    async resetPassword(e) {
      e.preventDefault();
      this.$v.$touch();
      try {
        const newPass = await userSevice.resetpassword({
          email: this.$router.currentRoute.query.email,
          password: this.dataUser.password,
        });
        return this.$router.push({ path: "/login" });
      } catch (error) {
        console.log(error);
        this.errRSPW = "An error occurred, please try again!";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/resetpassword.scss";
</style>
