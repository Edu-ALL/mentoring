<template>
  <div id="activity">
    <div class="container">
      <div class="row g-2">
        <div :class="sidebar ? 'col-md-3' : 'col-md-1 text-center'">
          <div class="sidebar border-0">
            <div class="list-group border-0 shadow-sm">
              <div
                class="list-group-item list-group-item-action pointer border-0"
                @click="goTo('')"
                :class="menus.submenu == '' ? 'btn-type-1' : ''"
              >
                <i class="fa-solid fa-phone fa-fw me-2"></i>
                <span v-if="sidebar">Meetings</span>
              </div>
              <hr class="my-0" />
              <div
                class="list-group-item list-group-item-action pointer border-0"
                @click="goTo('group')"
                :class="menus.submenu == 'group' ? 'btn-type-1' : ''"
              >
                <i class="fa-solid fa-users fa-fw me-2"></i>
                <span v-if="sidebar">Group Project</span>
              </div>
              <hr class="my-0" />
              <div
                class="list-group-item list-group-item-action pointer border-0"
                @click="goTo('last-meeting')"
                :class="menus.submenu == 'last-meeting' ? 'btn-type-1' : ''"
              >
                <i class="fa-solid fa-file fa-fw me-2"></i>
                <span v-if="sidebar">Last Meeting Minutes</span>
              </div>
            </div>
            <div class="text-center mt-2 d-md-block d-none">
              <button
                class="btn btn-primary btn-sm"
                style="border-radius: 100%"
              >
                <i
                  class="fa-solid fa-times p-1"
                  v-if="sidebar"
                  @click="sidebar = !sidebar"
                ></i>
                <i
                  class="fa-solid fa-bars"
                  v-if="!sidebar"
                  @click="sidebar = !sidebar"
                ></i>
              </button>
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
  created() {},
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