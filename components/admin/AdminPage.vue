<template>
  <main>
    <h2 class="text-danger">{{ errorGetAll }}</h2>
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
                <a href="#" class="nav-link cusor">
                  <i class="fa-solid fa-square-envelope"></i>
                  <span class="email"> Email: </span>
                  <span class="data">
                    {{ userInfo ? `${userInfo.email}` : "email" }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link cusor">
                  <i class="fa-solid fa-user"></i>
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
                <a href="#" class="nav-link cusor">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                  <span class="email"> Role: </span>
                  <span class="data">
                    {{ userInfo ? `${userInfo.role}` : "role" }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="logout"
                  href="/admin/login"
                  class="nav-link"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="other-fruits"
                >
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  Logout
                </a>
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
                <a href="/admin/customers" class="nav-link cusor">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  customers
                </a>
              </li>
              <li class="nav-item">
                <a href="/admin/resettest" class="nav-link cusor">
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
          <div class="search-title">
            <div class="left-content">
              <h2>Table Users PrintM</h2>
              <div class="button-top">
                <button type="button" class="btn btn-primary">
                  <NuxtLink to="/admin/register">Tạo mới user</NuxtLink>
                </button>
                <button type="button" class="btn btn-primary">
                  <NuxtLink to="/post/post-manager">Quản lí bài viết</NuxtLink>
                </button>
              </div>
            </div>
            <form class="form-inline">
              <input
                v-model="searchQuery"
                @input="senData"
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            </form>
          </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      v-model="isCheckAll"
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
                    v-bind:value="user"
                    @change="handleCheck"
                    v-model="items"
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
                <td class="td-delete">
                  <button
                    @click="handleEdit(user._id)"
                    type="button"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>
                  <form class="form-delete">
                    <button
                      @click="handleDelete(user._id)"
                      type="submit"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example" class="example">
            <form action="" class="delete-btn">
              <button
                class="btn-danger delete-many"
                type="submit"
                @click="handleDeleteMany"
                :disabled="opacity.disabled"
                :style="{ cursor: opacity.cursor, opacity: opacity.opacity }"
              >
                Delete
              </button>
            </form>
            <div class="pagination">
              <div class="button__number-page">
                <button
                  class="btn__vuejs btn__prev"
                  @click="prevPage"
                  :disabled="disabledPreviousPage"
                  type="button"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <ul class="number-page list__option-vuejs">
                  <li
                    class="btn__vuejs option-vuejs"
                    v-for="(total, index) in totalPages"
                    :key="index"
                    :class="checkActive(index + 1)"
                    @click="assign(index)"
                  >
                    {{ index + 1 }}
                  </li>
                  <!-- <li class="btn__vuejs option-vuejs">2</li>
              <li class="btn__vuejs option-vuejs">3</li>
              <li class="btn__vuejs option-vuejs">4</li> -->
                </ul>
                <button
                  class="btn__vuejs btn__next"
                  :disabled="disabledNextPage"
                  @click="nextPage"
                  type="button"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div class="select-admin custom-select">
                  <select
                    @click="clickPage"
                    v-model="pageAble.pageSize"
                    name="pagesize"
                    id="pagesize"
                  >
                    <i class="fa-solid fa-caret-down"></i>
                    <option value="10">10 User</option>
                    <option value="20">20 User</option>
                  </select>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </main>
</template>

<script>
import userSevice from "../../service/userService";
import { formatDate } from "../../utils/dateFormat";
import adminService from "../../service/adminService";
import authenticationService from "../../service/authenticationService";
import searchService from "../../service/searchService";
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
      searchQuery: null,
      disabledNextPage: false,
      disabledPreviousPage: false,
      message: null,
      typing: null,
      debounce: null,
      opacity: {
        disabled: true,
        cursor: "not-allowed",
        opacity: "0.5",
      },
      active: "",
      dataUser: {},
      userInfo: null,
      isCheckAll: false,
      items: [],
      totalElements: String,
      totalPages: String,
      numberOfElements: String,
      pageAble: {
        page: 1,
        pageSize: 10,
      },
      errorGetAll: "",
    };
  },
  async mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    this.getData();
  },
  methods: {
    async senData(event) {
      searchService
        .search({
          payload: this.searchQuery,
        })
        .then((res) => {
          this.debounceSearch(event);
          this.dataUser = res.data.payload;
        })

        .catch((error) => console.log(error));
    },
    debounceSearch(event) {
      this.message = null;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.typing = null;
        this.message = event.target.value;
      }, 600);
    },
    async getData() {
      try {
        const res = await userSevice.getAllUser({
          pageSize: this.pageAble.pageSize,
          page: this.pageAble.page,
        });
        this.dataUser = res.data.data;
        this.totalPages = res.data.totalPages;
        this.pageAble = res.data.pageAble;
      } catch (error) {
        console.log(error);
      }
    },

    clickPage() {
      this.getData();
    },

    checkActive(index) {
      return this.pageAble.page === index ? "active" : "";
    },

    async assign(index) {
      this.pageAble.page = index + 1;
      await this.getData();
    },

    async nextPage() {
      if (this.pageAble.page < this.totalPages) {
        this.pageAble.page++;
        await this.getData();
        if (this.totalPages == this.pageAble.page) {
          this.disabledNextPage = true;
        }
        this.disabledNextPage = false;
      }
    },

    async prevPage() {
      if (this.pageAble.page > 0) {
        this.pageAble.page--; // For the previous page, you just increment 'skip' for the page size 'limit'
        await this.getData();
      }
      if ((this.pageAble.page = 1)) {
        this.disabledPreviousPage = true;
      }
      this.disabledPreviousPage = false;
    },

    handleEdit(_id) {
      try {
        this.$router.push({ path: "/admin/edit?id=" + _id });
      } catch (error) {
        console.log(error);
      }
    },

    async handleDelete(_id) {
      try {
        await adminService.deleteById({ id: _id });
        this.$router.push({ path: "/admin" });
      } catch (error) {
        console.log(error);
      }
    },

    convertDate(createdDate) {
      return formatDate(new Date(createdDate));
    },
    handleCheckAll() {
      this.isCheckAll = !this.isCheckAll;
      this.items = [];
      if (this.isCheckAll) {
        // Check all
        for (var key in this.dataUser) {
          this.items.push(this.dataUser[key]);
        }
      }
    },

    handleCheck() {
      if (this.items.length >= 2) {
        this.opacity.disabled = false;
        this.opacity.cursor = "pointer";
        this.opacity.opacity = "1";
      } else {
        this.opacity.disabled = true;
        this.opacity.cursor = "not-allowed";
        this.opacity.opacity = "0.5";
      }
      if (this.items.length == this.dataUser.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },
    async handleDeleteMany() {
      const deletes = this.items.map((item) => item._id);
      try {
        await adminService.deleteMany({
          id: deletes,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await authenticationService.logout({});
        this.$router.push({ path: "/admin/login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/adminpage.scss";
.content-wrapper {
  padding: 35px 1.25rem;
  width: 80%;
  .clearfix {
    width: 140%;
    .col-xs-12 {
      width: 75%;
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 60px;
        margin-right: 15px;
        color: black;
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
  margin-left: -32px !important;
}

.form-check-input {
  margin-left: -12px;
}

.delete-many {
  color: white;
  display: block;
  margin-left: 30px;
  border-radius: 3px;
  padding: 0px 10px;
  height: 35px;
  width: 70px;
}

.btn {
  padding: 5px 10px;
  color: white;
}

.btn-primary {
  margin-right: 5px;
}

.btn-danger {
  background-color: #e74a3b;
}

.example {
  display: flex;
  justify-content: space-between;
  padding: 35px 25px;
  .page-link {
    padding: 10px 10px;
  }
  .right-page {
    display: flex;
  }
}

.select-admin {
  padding: 5px 10px;
  margin-left: 10px;
  height: 42px;
  margin-right: -10px;
  #pagesize {
    padding: 0 10px;
    width: 100%;
    height: 100%;
  }
}

.active {
  background-color: blue;
  color: white;
  font-weight: bold;
}

.page-item {
  display: flex;
}
.header-margin {
  padding: 0 30px;
}
.btn-outline-success {
  color: black;
}
.form-inline {
  width: 292px;
  display: flex;
  background-color: #dbdffd !important;
  border-radius: 5px !important;
  height: 40px;
  margin-right: 25px;
}

.sidebar-category {
  padding: 0 20px;
}

.sidebar-user {
  padding: 15px 0px;
}
.mr-sm-2 {
  padding: 5px 15px;
}

.navbarText {
  display: flex;
}

.search-title {
  display: flex;
  justify-content: space-between;
}

.cusor {
  cursor: auto;
}

.form-delete {
  width: 33%;
  border-radius: 5px;
}

.td-delete {
  display: flex;
}

.left-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  .button-top {
    display: flex;
    button {
      // width: 102px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 10px;
      // margin-left: -120px;
      margin-bottom: 20px;
      a {
        color: white;
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .button__number-page {
    display: flex;
    justify-content: center;
    border-radius: 6px;
    margin-right: 15px;
    .btn__vuejs {
      width: 44px;
      height: 44px;
      background-color: #ffffff;
      display: flex;
      border: 1px solid #e9e9e9;
      i {
        margin: auto;
        color: #bfbfbf;
      }
      &:hover {
        i {
          color: red;
        }
      }
    }
    .btn__prev {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .number-page {
      display: flex;
      .option-vuejs {
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "roRegular400";
        font-size: 18px;
        &.active {
          background-color: $primary-cl;
          color: #ffffff;
        }
      }
    }
    .btn__next {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    .select-admin {
      padding: 5px 10px;
      margin-left: 10px;
      height: 42px;
      margin-right: -10px;
      #pagesize {
        padding: 0 10px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
