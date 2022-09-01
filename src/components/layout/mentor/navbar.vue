<template>
  <div id="navbar" class="sticky-top">
    <div class="navbar-mentor">
      <div class="container">
        <div class="row py-2 align-items-center">
          <div class="col-6">
            <img
              src="~@/assets/img/logo-white.webp"
              alt=""
              class="navbar-mentor-logo"
            />
          </div>
          <div class="col-6">
            <div class="navbar-mentor-img float-end">
              <img
                src="~@/assets/img/editor/alysha.webp"
                alt=""
                class="dropdown-toggle pointer"
                data-bs-toggle="dropdown"
              />
              <ul
                class="dropdown-menu dropdown-menu-end"
                style="font-size: 0.8em"
              >
                <!-- <li>
                  <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-key me-2"></i>
                    Change Password</a
                  >
                </li> -->
                <li>
                  <a class="dropdown-item" href="#" @click="handleLogout">
                    <i class="fa-solid fa-sign-out me-2"></i>
                    Logout</a
                  >
                </li>
              </ul>
            </div>
            <div class="navbar-mentor-title float-end mt-2 me-2">
              Hello, {{ mentor.first_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menus shadow-sm">
      <div class="container">
        <div class="text-end d-md-none d-block">
          <vue-feather type="menu" @click="sidebarCheck()"></vue-feather>
        </div>
        <div class="row" :class="sidebarClass">
          <div class="col p-1">
            <button
              class="btn btn-menus btn-sm py-1 shadow-sm"
              :class="menus.menu == '' ? 'active' : ''"
              @click="this.$router.push({ path: '/mentor/' })"
            >
              <i class="bi bi-speedometer2 me-1"></i>
              Home
            </button>
            <button
              class="btn btn-menus btn-sm py-1 shadow-sm"
              :class="menus.menu == 'student' ? 'active' : ''"
              @click="this.$router.push({ path: '/mentor/student' })"
            >
              <i class="bi bi-people me-1"></i>
              My Students
            </button>
            <button
              class="btn btn-menus btn-sm py-1 shadow-sm"
              :class="menus.menu == 'activity' ? 'active' : ''"
              @click="this.$router.push({ path: '/mentor/activity' })"
            >
              <i class="bi bi-clipboard me-1"></i>
              My Activities
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    menus: Object,
  },
  data() {
    return {
      sidebar: false,
      sidebarClass: "d-md-block d-none",
      mentor: [],
    };
  },
  methods: {
    sidebarCheck() {
      this.sidebar != this.sidebar;
      if (this.sidebar == false) {
        this.sidebar = true;
        this.sidebarClass = "d-block sidebar";
      } else {
        this.sidebar = false;
        this.sidebarClass = "d-md-block d-none";
      }
    },

    handleLogout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
      this.$alert.toast("success", "You Successfully Logout");
    },
  },
  created() {
    this.mentor = JSON.parse(localStorage.getItem("mentor"));
  },
};
</script>

<style scoped>
.navbar-mentor {
  background: #233972;
  height: auto;
}

.navbar-mentor-logo {
  width: 25%;
}

.navbar-mentor-title {
  color: #fff;
  font-weight: 400;
}

.navbar-mentor-img img {
  background: rgb(243, 243, 243);
  border-radius: 50%;
  float: right;
  width: 40px;
  height: 40px;
}

.menus {
  background: #ccdafc;
  padding: 5px 0;
}

.btn {
  box-shadow: none;
}

.btn-menus {
  background: #fff;
  border-radius: 10px;
  margin-right: 10px;
  padding: 5px 15px;
  transition: all 0.3s ease-in-out;
}

.btn-menus:hover,
.btn-menus.active {
  background: #efa859;
  color: #fff;
}

@media only screen and (max-width: 800px) {
  .navbar-mentor-logo {
    width: 75%;
  }

  .btn-menus {
    display: block;
    width: 100%;
    text-align: left;
    margin-bottom: 7px;
  }
}
</style>

<style>
.row,
.d-md-block,
.d-none,
.d-block,
.sidebar {
  transition: all 0.3s ease-in-out !important;
}
</style>