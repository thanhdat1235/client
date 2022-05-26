<template>
  <main>
    <div
      id="sidebar-main"
      class="sidebar sidebar-default sidebar-separate sidebar-fixed"
    >
      <div class="sidebar-content">
        <div class="sidebar-category sidebar-default">
          <div class="sidebar-user">
            <div class="category-content">
              <h6>
                {{
                  userInfo
                    ? `${userInfo.first_name} ${userInfo.last_name}`
                    : "Profile"
                }}
              </h6>
              <small>{{ userInfo ? `${userInfo.role}` : "user" }}</small>
            </div>
          </div>
        </div>
        <!-- /Sidebar Category -->
        <div class="sidebar-category sidebar-default">
          <div class="category-title">
            <span>Info</span>
          </div>
          <div class="category-content">
            <ul id="fruits-nav" class="nav flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  <span class="email"> Email: </span>
                  <span class="data">
                    {{ userInfo ? `${userInfo.email}` : "email" }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  <span class="email"> Name: </span>
                  <span class="data">
                    {{
                      userInfo
                        ? `${userInfo.first_name} ${userInfo.last_name}`
                        : "Name"
                    }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  <span class="email"> Role: </span>
                  <span class="data">
                    {{ userInfo ? `${userInfo.role}` : "role" }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="logout"
                  href=""
                  class="nav-link"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="other-fruits"
                >
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  Logout
                </a>
                <ul id="other-fruits" class="flex-column collapse">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                      Orange
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                      Kiwi
                    </a>
                  </li>
                </ul>
                <!-- /Sub Nav -->
              </li>
            </ul>
            <!-- /Nav -->
          </div>
          <!-- /Category Content -->
        </div>
        <!-- /Sidebar Category -->
        <div class="sidebar-category sidebar-default">
          <div class="category-title">
            <span>Contenu éditable</span>
          </div>
          <div class="category-content">
            <ul id="sidebar-editable-nav" class="nav flex-column">
              <li class="nav-item">
                <a href="/admin/customers" class="nav-link">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  customers
                </a>
              </li>
              <li class="nav-item">
                <a href="/admin/resettest" class="nav-link">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  reset test
                </a>
              </li>
            </ul>
            <!-- /Nav -->
          </div>
          <!-- /Category Content -->
        </div>
        <!-- /Sidebar Category -->
      </div>
    </div>
    <!-- /main sidebar -->
    <div class="content-wrapper">
      <div class="row clearfix">
        <div class="col-xs-12">
          <h2>Table Users PrintM</h2>
          <button
            :style="{ cursor: cursor, backgroundColor: color, display: toggle }"
            class="btn-danger delete-many"
            type="submit"
            @click.prevent="handleDeleteMany"
          >
            Delete
          </button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      :checked="isCheckAll"
                      @click="handleCheckAll"
                      type="checkbox"
                      class="form-check-input all-check"
                      id="exampleCheck1"
                    />
                  </div>
                </th>
                <th scope="col">STT</th>
                <th scope="col">Email</th>
                <th scope="col">FullName</th>
                <th scope="col">Created Date</th>
                <th scope="col">Role</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in dataUser" :key="index">
                <th scope="col">
                  <input
                    :checked="isCheck"
                    @click="handleCheck(user._id)"
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                </th>
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ user.email }}</td>
                <td>{{ user.first_name + " " + user.last_name }}</td>
                <td>{{ convertDate(user.created_at) }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.address }}</td>
                <td>
                  <button
                    @click="handleEdit(user._id)"
                    type="button"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    @click="handleDelete(user._id)"
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </main>
</template>

<script>
import userSevice from "../service/userService";
import { formatDate } from "../utils/dateFormat";
import adminService from "../service/adminService";
import logout from "../service/authenticationService";
import authenticationService from "../service/authenticationService";
export default {
  head: {
    title: "Admin Page",
    meta: [
      {
        name: "Admin",
      },
    ],
  },
  data() {
    return {
      dataUser: {},
      userInfo: null,
      isCheck: false,
      isCheckAll: false,
      cursor: "",
      toggle: "none",
      color: "",
      items: [],
    };
  },
  async mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(this.userInfo);
    try {
      const users = await userSevice.getAllUser();
      this.dataUser = users.data.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    handleEdit(_id) {
      try {
        this.$router.push({ path: "/edit?id=" + _id });
      } catch (error) {
        console.log(error);
      }
    },

    async handleDelete(_id) {
      try {
        await adminService.deleteById({ id: _id });
        alert("Oke");
      } catch (error) {
        console.log(error);
      }
    },

    convertDate(createdDate) {
      return formatDate(new Date(createdDate));
    },
    handleCheckAll() {
      if (this.isCheckAll == false) {
        (this.isCheckAll = true),
          (this.isCheck = true),
          this.dataUser.forEach((user) => {
            this.items.push(user._id);
          });
        console.log(this.items);
      } else {
        (this.isCheckAll = false), (this.isCheck = false), (this.items = []);
      }
    },
    handleCheck(_id) {
      console.log(this.items);
      if (this.items.includes(_id) == false) {
        this.items.push(_id);
      } else {
        this.items.splice(this.items.indexOf(_id), 1);
      }
      if (this.items.length == this.dataUser.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
      if (this.items.length >= 2) {
        this.showDelete = true;
        this.toggle = "block";
      } else {
        this.showDelete = false;
        this.toggle = "none";
      }
    },
    async handleDeleteMany() {
      try {
        await adminService.deleteMany({
          ids: this.items,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await authenticationService.logout({});
        this.$router.push({ path: "/login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/adminpage.scss";
.content-wrapper {
  padding: 35px 1.25rem;
  width: 84%;
  .clearfix {
    width: 100%;
    .col-xs-12 {
      width: 100%;
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
      }
      .table {
        margin-left: 65px;
      }
    }
  }
}

.nav-link {
  display: flex;
  .email {
    margin-right: 10px;
  }
}

.all-check {
  margin-top: -16px;
  margin-left: -30px !important;
}

.form-check-input {
  margin-left: -12px;
}

.delete-many {
  display: block;
  margin-left: 40px;
  margin-bottom: 20px;
  border-radius: 3px;
  padding: 4px 4px;
}

.btn-primary {
  margin-right: 5px;
}
</style>
