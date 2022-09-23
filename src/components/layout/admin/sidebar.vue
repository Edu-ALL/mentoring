<template>
  <div id="sidebar">
    <ul class="sb-list">
      <li :class="menus.menu == 'home' ? 'active' : ''" @click="goTo('home')">
        <vue-feather
          type="home"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather>
        <span v-if="sidebar">Home</span>
      </li>
      <li
        :class="menus.menu == 'user' ? 'active' : ''"
        @click="dropdown('user')"
      >
        <vue-feather
          type="user"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather>
        <span v-if="sidebar">User</span>
        <vue-feather
          type="chevron-down"
          class="float-end"
          v-if="sidebar"
        ></vue-feather>
        <transition name="fade">
          <ul
            class="sb-dropdown-list"
            v-if="(menus.menu == 'user' && sidebar) || dropdownMenu == 'user'"
          >
            <li
              @click="goTo('user/student')"
              :class="menus.submenu == 'student' ? 'active' : ''"
            >
              <span>Mentees</span>
            </li>
            <li
              @click="goTo('user/mentor')"
              :class="menus.submenu == 'mentor' ? 'active' : ''"
            >
              <span>Mentors</span>
            </li>
            <!-- <li
              @click="goTo('user/editor')"
              :class="menus.submenu == 'editor' ? 'active' : ''"
            >
              <span>Editor</span>
            </li>
            <li
              @click="goTo('user/alumni')"
              :class="menus.submenu == 'alumni' ? 'active' : ''"
            >
              <span>Alumni</span>
            </li> -->
          </ul>
        </transition>
      </li>
      <li :class="menus.menu == '1on1' ? 'active' : ''" @click="goTo('1on1')">
        <vue-feather
          type="phone"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Meetings</span>
      </li>

      <li :class="menus.menu == 'todos' ? 'active' : ''" @click="goTo('todos')">
        <vue-feather
          type="check-square"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Tasks</span>
      </li>

      <li :class="menus.menu == 'group' ? 'active' : ''" @click="goTo('group')">
        <vue-feather
          type="users"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Group Project</span>
      </li>

      <li
        :class="menus.menu == 'webinar' ? 'active' : ''"
        @click="goTo('webinar')"
      >
        <vue-feather
          type="airplay"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Webinar List</span>
      </li>

      <!-- <li :class="menus.menu == 'mail' ? 'active' : ''" @click="goTo('mail')">
        <vue-feather
          type="mail"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Mail Log</span>
      </li> -->

      <!-- Files  -->
      <!-- <li :class="menus.menu == 'files' ? 'active' : ''" @click="goTo('files')">
        <vue-feather
          type="file"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">File Libraries</span>
      </li> -->

      <!-- Events  -->
      <!-- <li
        :class="menus.menu == 'events' ? 'active' : ''"
        @click="goTo('events')"
      >
        <vue-feather
          type="paperclip"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Events</span>
      </li> -->

      <!-- Messages  -->
      <!-- <li :class="menus.menu == 'inbox' ? 'active' : ''" @click="goTo('inbox')">
        <vue-feather
          type="message-square"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Inboxes</span>
      </li> -->

      <!-- Transactions  -->
      <!-- <li
        :class="menus.menu == 'transactions' ? 'active' : ''"
        @click="goTo('transactions')"
      >
        <vue-feather
          type="credit-card"
          size="18"
          :class="sidebar ? 'float-start mt-1 me-2' : ''"
        ></vue-feather
        ><span v-if="sidebar">Transactions</span>
      </li> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  props: {
    sidebar: String,
    menus: Object,
  },
  data() {
    return {
      dropdownMenu: "",
    };
  },
  methods: {
    dropdown(name) {
      if (this.dropdownMenu == "") {
        this.dropdownMenu = name;
        this.$emit("check", true);
      } else {
        this.dropdownMenu = "";
      }
    },

    goTo(name) {
      this.$router.push({
        path: "/admin/" + name,
      });
      // alert(name);
    },
  },
  updated() {
    if (!this.sidebar) {
      this.dropdownMenu = "";
    }
  },
};
</script>
<style scoped>
#sidebar {
  margin-top: 30px;
}

li span {
  font-size: 14px;
}

.sb-list {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

.sb-list li {
  margin: 5px 20px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.sb-list li:hover,
.sb-list li.active {
  background: #efa859;
  color: #fff;
  border-radius: 10px;
}

.sb-dropdown-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}

.sb-list li,
.sb-dropdown-list li {
  cursor: pointer;
}

.sb-dropdown-list li:hover,
.sb-dropdown-list li.active {
  background: #fff;
  color: #efa859;
  border-radius: 10px;
}
</style>