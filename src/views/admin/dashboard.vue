<template>
  <div id="adminDashboard">
    <div class="sidebar" :class="sidebar ? 'sw-20' : 'sw-5'">
      <div class="s-navbar">
        <div
          class="row align-items-center"
          :class="sidebar ? 'row-cols-2' : 'row-cols-1'"
        >
          <div class="col" v-if="sidebar">
            <img
              src="~@/assets/img/logo-white.webp"
              alt=""
              class="s-navbar-logo"
            />
          </div>
          <div class="col" :class="sidebar ? 'text-end' : 'text-center'">
            <vue-feather
              type="menu"
              stroke="#fff"
              class="pointer"
              :class="sidebar ? 'float-end mt-1' : ''"
              @click="sidebarProcess"
            ></vue-feather>
          </div>
        </div>
      </div>
      <v-sidebar
        :sidebar="sidebar"
        @check="sidebarCheck"
        :menus="menus"
      ></v-sidebar>
    </div>
    <button class="sidebar-btn" @click="sidebarProcess">
      <vue-feather type="menu" stroke="#fff" class="pointer"></vue-feather>
    </button>
    <div class="content" :class="sidebar ? 'cw-80' : 'cw-100'">
      <div class="sticky-top">
        <div class="s-header">
          <div class="s-header-title">
            {{ titleCheck() }}
          </div>
          <div class="s-header-img">
            <img
              src="~@/assets/img/editor/alysha.webp"
              alt=""
              data-bs-toggle="dropdown"
            />
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="s-header-username">Hello, Username</div>
        </div>
      </div>
      <div class="content-detail">
        <transition name="fade">
          <v-home v-if="menus.menu == 'home'"></v-home>
        </transition>
        <transition name="fade">
          <v-user v-if="menus.menu == 'user'" :menus="menus"></v-user>
        </transition>
        <transition name="fade">
          <v-1on1 v-if="menus.menu == '1on1'"></v-1on1>
        </transition>
        <transition name="fade">
          <v-files v-if="menus.menu == 'files'"></v-files>
        </transition>
        <transition name="fade">
          <v-webinar v-if="menus.menu == 'webinar'" :menus="menus"></v-webinar>
        </transition>
        <transition name="fade">
          <v-events v-if="menus.menu == 'events'" :menus="menus"></v-events>
        </transition>
        <transition name="fade">
          <v-inbox v-if="menus.menu == 'inbox'"></v-inbox>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/layout/admin/sidebar";

// Page
import Home from "@/views/admin/page/home";
import User from "@/views/admin/page/user";
import Call from "@/views/admin/page/1on1";
import Files from "@/views/admin/page/files";
import Webinar from "@/views/admin/page/webinar";
import Events from "@/views/admin/page/events";
import Inbox from "@/views/admin/page/inbox";

export default {
  name: "adminDashboard",
  components: {
    "v-sidebar": Sidebar,
    "v-home": Home,
    "v-user": User,
    "v-1on1": Call,
    "v-files": Files,
    "v-webinar": Webinar,
    "v-events": Events,
    "v-inbox": Inbox,
  },
  data() {
    return {
      sidebar: true,
      menus: {
        menu: "home",
        submenu: "",
        id: "",
      },
    };
  },
  methods: {
    sidebarProcess() {
      if (this.sidebar == false) {
        this.sidebar = true;
      } else {
        this.sidebar = false;
      }
    },
    sidebarCheck(data) {
      this.sidebar = data;
    },
    titleCheck() {
      let title = "";
      if (this.menus.menu == "home") {
        title = "Overview";
      } else if (this.menus.menu == "user") {
        if (this.menus.submenu == "student") {
          title = "Students";
        } else if (this.menus.submenu == "mentor") {
          title = "Mentors";
        } else if (this.menus.submenu == "editor") {
          title = "Editors";
        } else if (this.menus.submenu == "alumni") {
          title = "Alumni";
        }
      }

      return title;
    },
  },
  updated() {
    this.menus.menu = this.$route.params.menu;
    this.menus.submenu = this.$route.params.submenu;
    this.menus.id = this.$route.params.key;
  },
  created() {
    document.title = "Admin Dashboard";
    this.menus.menu = this.$route.params.menu;
    this.menus.submenu = this.$route.params.submenu;
    this.menus.id = this.$route.params.key;
  },
};
</script>
<style scoped>
#adminDashboard {
  display: flex;
  width: 100%;
}

.sidebar {
  position: relative;
  height: 99.3vh;
  overflow: hidden;
  background: #fff;
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.08);
  z-index: 3;
  transition: all 0.3s ease-in-out;
}

.sw-5 {
  width: 5%;
}

.sw-20 {
  width: 20%;
}

.content {
  position: relative;
  height: 99.3vh;
  padding-bottom: 30px;
  background: #f2f5fb;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  overflow: auto;
}

.cw-80 {
  width: 80%;
}

.cw-100 {
  width: 95%;
}

.s-navbar {
  background: #223872;
  padding: 15px 10px;
}

.s-navbar-logo {
  width: 100%;
}

.s-header {
  position: relative;
  background: #fff;
  height: 60px;
  width: 100%;
  padding: 10px 30px;
}

.s-header-title {
  float: left;
  font-size: 1.5em;
}

.s-header-username {
  margin-top: 10px;
  margin-right: 20px;
  float: right;
}

.s-header-img img {
  background: rgb(116, 111, 111);
  border-radius: 50%;
  float: right;
  width: 40px;
  height: 40px;
}

.sidebar-btn {
  position: fixed;
  z-index: 2;
  background: #223872;
  bottom: 15px;
  left: 15px;
  padding: 8px 8px 2px 8px;
  border-radius: 25px;
}

.content-detail {
  padding: 20px;
}

@media only screen and (max-width: 800px) {
  .sidebar {
    position: fixed;
  }

  .sw-5 {
    width: 0%;
  }

  .sw-20 {
    width: 60%;
  }

  .cw-80,
  .cw-100 {
    width: 100%;
  }

  .content-detail {
    padding: 0px;
  }
}
</style>
