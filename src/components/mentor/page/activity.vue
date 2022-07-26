<template>
  <div id="activity">
    <div class="container">
      <div class="row g-2">
        <div :class="sidebar ? 'col-md-3' : 'col-md-1'">
          <div class="sidebar">
            <div class="list-group">
              <div
                class="list-group-item list-group-item-action pointer"
                @click="goTo('')"
                :class="menus.submenu == '' ? 'bg-primary' : ''"
              >
                <i class="fa-solid fa-phone fa-fw me-2"></i>
                M<span v-if="sidebar">eetings </span>
              </div>
              <div
                class="list-group-item list-group-item-action pointer"
                @click="goTo('group')"
                :class="menus.submenu == 'group' ? 'bg-primary' : ''"
              >
                <i class="fa-solid fa-users fa-fw me-2"></i>
                G<span v-if="sidebar">roup Project</span>
              </div>
              <div
                class="list-group-item list-group-item-action pointer"
                @click="goTo('last-meeting')"
                :class="menus.submenu == 'last-meeting' ? 'bg-primary' : ''"
              >
                <i class="fa-solid fa-file fa-fw me-2"></i>
                L<span v-if="sidebar">ast Meeting Minutes</span>
              </div>
            </div>
            <div class="text-center mt-2 d-md-block d-none">
              <i
                class="fa-solid fa-arrow-left"
                v-if="sidebar"
                @click="sidebar = !sidebar"
              ></i>
              <i
                class="fa-solid fa-arrow-right"
                v-if="!sidebar"
                @click="sidebar = !sidebar"
              ></i>
            </div>
          </div>
        </div>

        <div :class="sidebar ? 'col-md-9' : 'col-md-11'">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <v-meeting v-if="menus.submenu == ''" :menus="menus" />
              <v-group v-if="menus.submenu == 'group'" :menus="menus" />
              <v-lm v-if="menus.submenu == 'last-meeting'" :menus="menus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Meeting from "@/components/mentor/page/activity/meeting";
import Group from "@/components/mentor/page/activity/group";
import LastMeeting from "@/components/mentor/page/activity/last_meeting";

export default {
  name: "activity",
  props: {
    menus: Object,
  },
  components: {
    "v-meeting": Meeting,
    "v-group": Group,
    "v-lm": LastMeeting,
  },
  data() {
    return {
      sidebar: true,
      view_pw: [],
    };
  },
  methods: {
    goTo(to) {
      this.$router.push({ path: "/mentor/activity/" + to });
    },
  },
};
</script>

<style scoped>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.col-md-1,
.col-md-3,
.col-md-9,
.col-md-11 {
  transition: all 0.3s;
}

.btn-outline-primary {
  box-shadow: none;
  outline: none;
}
</style>