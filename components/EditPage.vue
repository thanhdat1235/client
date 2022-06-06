<template>
  <div class="container-fluid form_register">
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <h2>Edit Form</h2>
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
                  disabled="disabled"
                  v-model="dataUser.email"
                  type="email"
                  name="email"
                  placeholder="Email"
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
              <label class="label-input">Address</label>
              <div class="input_field select_option">
                <select v-model="dataUser.address">
                  <option value="">Select your country</option>
                  <option value="Ho Chi Minh">Ho Chi Minh</option>
                  <option value="Ha Noi">Ha Noi</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <span
                v-if="!$v.dataUser.role.required && $v.dataUser.role.$dirty"
                class="text-danger"
              >
                Role is required</span
              >
              <label class="label-input">Role</label>
              <div class="input_field select_option">
                <select v-model="dataUser.role" :disabled="role">
                  <option value="">Select your role</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <input
                @click.prevent="handleSubmit"
                class="button"
                type="submit"
                value="Update"
              />
              <span class="text-danger">{{ errEdit }}</span>
              <p class="forgot"><a href="/admin">Back to admin</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userSevice from "../service/userService";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  alpha,
  email,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  head: {
    title: "Edit Page",
    meta: [
      {
        name: "editpage",
      },
    ],
  },
  data() {
    return {
      dataUser: {},
      userInfo: null,
      role: true,
      errEdit: "",
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
        maxLength: maxLength(12),
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
      role: {
        required,
      },
    },
  },

  async mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    if (this.userInfo.role == "user" || this.userInfo.role == "manager") {
      this.role = true;
    } else {
      this.role = false;
    }
    try {
      const id = this.$router.currentRoute.query.id;
      const result = await userSevice.findOne({ id });
      this.dataUser = result.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async handleSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(`FirstName: ${this.dataUser.first_name}`);
      }
      try {
        const id = this.$router.currentRoute.query.id;
        await userSevice.update({
          id,
          data: {
            first_name: this.dataUser.first_name,
            last_name: this.dataUser.last_name,
            address: this.dataUser.address,
            role: this.dataUser.role,
            gender: this.dataUser.gender,
          },
        });
        this.$router.push({ path: "/admin" });
      } catch (error) {
        console.log(error);
        this.errEdit = "Error! Error! An error occurred. Please try again. ";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/registerpage.scss";
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

.role {
  display: flex;
  width: 100%;
  justify-content: space-around;
  .role-icon {
    display: flex;
    justify-content: center;
    border: solid 1px gray;
    padding-bottom: 5px !important;
    padding-top: 5px !important;
  }
}
</style>
