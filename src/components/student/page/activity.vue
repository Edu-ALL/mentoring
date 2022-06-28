<template>
  <div id="activity">
    <div class="container mt-4">
      <div class="row g-3">
        <div :class="menu.key ? 'd-none' : 'col-md-3'">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5>My Activities</h5>
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'meeting' ? 'active' : ''"
                  @click="activityCheck('meeting')"
                >
                  Meetings
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'group' ? 'active' : ''"
                  @click="activityCheck('group')"
                  >Groups
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'webinar' ? 'active' : ''"
                  @click="activityCheck('webinar')"
                >
                  Webinars
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
                <!-- <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'event' ? 'active' : ''"
                  @click="activityCheck('event')"
                >
                  Events
                </a> -->
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'internship' ? 'active' : ''"
                  @click="activityCheck('internship')"
                >
                  Internship Program
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'career-module' ? 'active' : ''"
                  @click="activityCheck('career-module')"
                >
                  Career Modules
                  <div class="float-end">
                    <i class="fa-solid fa-arrow-circle-right"></i>
                  </div>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div :class="menu.key ? 'col-md-12' : 'col-md-9'">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-1 pb-2 mt-3">
              <!-- 1on1 Call  -->
              <transition name="fade">
                <div class="card-body" v-if="activity == '1on1'">
                  <b class="text-primary">1 on 1 Call History</b>
                  <hr class="my-1" />
                  <div class="table-responsive">
                    <table class="table align-middle">
                      <thead>
                        <tr class="text-center">
                          <th>No</th>
                          <th>Call with</th>
                          <th>Category</th>
                          <th>Date & Time</th>
                          <th>Status</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center">
                          <td>1</td>
                          <td>Devi Kasih</td>
                          <td>Life Skill - Mentor</td>
                          <td>
                            <small>
                              20 Feburary 2022 <br />
                              14.00 WIB
                            </small>
                          </td>
                          <td>Waiting</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </transition>

              <!-- Meetings  -->
              <transition name="fade">
                <v-meeting v-if="activity == 'meeting'"></v-meeting>
              </transition>

              <!-- Groups  -->
              <transition name="fade">
                <v-group v-if="activity == 'group'"></v-group>
              </transition>

              <!-- Webinar  -->
              <transition name="fade">
                <v-webinar v-if="activity == 'webinar'"></v-webinar>
              </transition>

              <!-- Events  -->
              <!-- <transition name="fade">
            <v-event v-if="activity == 'event'"></v-event>
          </transition> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Meeting from "@/components/student/page/activity/meeting";
import Group from "@/components/student/page/activity/groups";
import Webinar from "@/components/student/page/activity/webinar";
// import Event from "@/components/student/page/activity/event";

export default {
  name: "activity",
  components: {
    "v-meeting": Meeting,
    "v-group": Group,
    "v-webinar": Webinar,
    // "v-event": Event,
  },
  data() {
    return {
      activity: "meeting",
      menu: {
        menu: "",
        submenu: "",
        key: "",
        key2: "",
      },
    };
  },
  methods: {
    activityCheck(data) {
      this.$router.push({ path: "/user/my-activity/" + data });
      this.activity = data;
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
      this.menu.key2 = to.params.key2;
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
    this.menu.key2 = this.$route.params.key2;

    if (this.$route.params.submenu) {
      this.activity = this.$route.params.submenu;
    } else {
      this.activity = "meeting";
    }
  },
};
</script>

<style scoped>
.list-group-item {
  position: relative;
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  overflow: hidden;
}

.list-group-item .float-end {
  position: absolute;
  top: 10px;
  right: -100px;
  transition: all 0.3s;
}

.list-group-item:hover {
  background: #223872;
  border: 1px solid rgb(22, 39, 88);
  color: #fff;
}

.list-group-item.active .float-end,
.list-group-item:hover .float-end {
  top: 10px;
  right: 10px;
}

.list-group-item.active {
  background: #efa859;
  border: 1px solid #c5863f;
}
</style>