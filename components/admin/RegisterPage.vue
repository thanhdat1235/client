<template>
  <div class="container-fluid form_register">
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <h2>Responsive Registration Form</h2>
        </div>
        <div class="row clearfix">
          <div class="">
            <form class="form-padding">
              <span
                v-if="
                  (!$v.dataUser.email.required || !$v.dataUser.email.email) &&
                  $v.dataUser.email.$dirty
                "
                class="text-danger"
                >Valid Email is required</span
              >
              <label class="label-input">Email</label>
              <div class="input_field">
                <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                <input
                  v-model="dataUser.email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <span
                v-if="
                  !$v.dataUser.password.required && $v.dataUser.password.$dirty
                "
                class="text-danger"
              >
                Password is required</span
              >
              <span
                v-if="
                  !$v.dataUser.password.minLength && $v.dataUser.password.$dirty
                "
                class="text-danger"
              >
                Password must be
                {{ $v.dataUser.password.$params.minLength.min }} characters
              </span>
              <label class="label-input">Password</label>
              <div class="input_field">
                <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                <input
                  v-model="dataUser.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
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
              <label class="label-input">ConfirmPassword</label>
              <div class="input_field">
                <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                <input
                  v-model="dataUser.confirmPassword"
                  type="password"
                  name="password"
                  placeholder="Re-type Password"
                  required
                />
              </div>
              <span
                v-if="
                  !$v.dataUser.first_name.required &&
                  $v.dataUser.first_name.$dirty
                "
                class="text-danger"
              >
                First name is required</span
              >
              <span
                v-if="
                  !$v.dataUser.last_name.required &&
                  $v.dataUser.last_name.$dirty
                "
                class="text-danger"
              >
                Last name is required</span
              >
              <div class="row clearfix">
                <div class="col_half">
                  <label class="label-input">FirstName</label>
                  <div class="input_field">
                    <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input
                      v-model="dataUser.first_name"
                      type="text"
                      name="name"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="col_half">
                  <label class="label-input">LastName</label>
                  <div class="input_field">
                    <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input
                      v-model="dataUser.last_name"
                      type="text"
                      name="name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <span
                v-if="!$v.dataUser.gender.required && $v.dataUser.gender.$dirty"
                class="text-danger"
              >
                Gender is required</span
              >
              <label class="label-input">Gender</label>
              <div class="input_field radio_option">
                <input
                  v-model="dataUser.gender"
                  value="Male"
                  type="radio"
                  name="radiogroup1"
                  id="rd1"
                />
                <label for="rd1">Male</label>
                <input
                  v-model="dataUser.gender"
                  value="Female"
                  type="radio"
                  name="radiogroup1"
                  id="rd2"
                />
                <label for="rd2">Female</label>
              </div>
              <span
                v-if="
                  !$v.dataUser.address.required && $v.dataUser.address.$dirty
                "
                class="text-danger"
              >
                Address is required</span
              >
              <label class="label-input">Country</label>
              <div class="input_field select_option">
                <select v-model="dataUser.address">
                  <option value="" disabled selected>
                    Select your country
                  </option>
                  <option value="Ho Chi Minh">Ho Chi Minh</option>
                  <option value="Ha Noi">Ha Noi</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <input
                @click.prevent="handleSubmit"
                class="button"
                type="submit"
                value="Register"
              />
              <span class="text-danger">{{ errRegister }}</span>
              <p class="forgot"><a href="/login">Signin</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registerSevice from "../../service/registerService";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  alpha,
  email,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  head: {
    title: "Register Page",
    meta: [
      {
        name: "Register",
      },
    ],
  },
  data() {
    return {
      dataUser: {
        email: "",
        password: "",
        confirmPassword: "",
        first_name: "",
        last_name: "",
        gender: "",
        address: "",
      },
      errRegister: "",
    };
  },

  validations: {
    dataUser: {
      first_name: {
        required,
        alpha,
      },
      last_name: {
        required,
        alpha,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
      gender: {
        required,
      },
      address: {
        required,
      },
    },
  },
  methods: {
    async handleSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(`FirstName: ${this.dataUser.first_name}`);
      }
      try {
        console.log(this.dataUser.addess);
        await registerSevice.register({
          first_name: this.dataUser.first_name,
          last_name: this.dataUser.last_name,
          email: this.dataUser.email,
          password: this.dataUser.password,
          gender: this.dataUser.gender,
          address: this.dataUser.address,
        });
        this.$router.push({ path: "/admin/login" });
      } catch (error) {
        console.log(error);
        this.errRegister =
          "Error! Error! An error occurred. Please try again. ";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/registerpage.scss";
.form_register {
  margin-bottom: 60px;
}

.radio_option {
  label {
    &::before {
      width: 1em;
      height: 1em;
      font-size: 15px;
    }
  }
}
</style>
