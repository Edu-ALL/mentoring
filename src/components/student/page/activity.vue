<template>
  <div id="activity">
    <div class="container mt-4">
      <div class="row g-3">
        <div :class="menu.key ? 'd-none' : 'col-md-3'">
          <div class="card shadow-sm border-0 sticky-md-top activity-top">
            <div class="card-body">
              <h5>My Activities</h5>
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'meeting' ? 'active' : ''"
                  @click="activityCheck('meeting')"
                >
                  <i class="bi bi-telephone me-1"></i>
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
                >
                  <i class="bi bi-people me-1"></i>
                  Groups
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
                  <i class="bi bi-record-btn me-1"></i>
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
                  <i class="bi bi-briefcase me-1"></i>
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
                  <i class="bi bi-book me-1"></i>
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
              <!-- Meetings  -->
              <transition name="fade">
                <v-meeting
                  v-if="activity == 'meeting' || activity == ''"
                ></v-meeting>
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

              <!-- Internship  -->
              <transition name="fade">
                <v-card
                  v-if="activity == 'internship'"
                  class="card content-card bg-primary shadow-sm m-4"
                  lazy="loading"
                >
                  <div class="card-body">
                    <h3 class="content-title text-white">
                      Find & Land Internships
                    </h3>
                    <div class="content-desc text-white">
                      Start off your career in the right way! Improve your skill
                      set, expand connections, and develop your career goal path
                      through an internship.
                      <br />
                      Look for the best-fit internship positions offered by
                      numerous renowned companies right now!
                    </div>
                    <button
                      class="btn btn-allin bg-secondary mt-3"
                      @click="redirectUrl('https://internship.all-inedu.com/')"
                    >
                      Explore Now!
                    </button>
                  </div>
                  <img
                    src="@/assets/img/home/card-orange.webp"
                    alt="ALL-in Mentoring"
                    class="card-corner"
                  />
                </v-card>
              </transition>

              <!-- Career Module  -->
              <transition name="fade">
                <v-card
                  v-if="activity == 'career-module'"
                  class="card content-card bg-secondary shadow-sm m-4"
                  lazy="loading"
                >
                  <div class="card-body">
                    <h3 class="content-title text-white">
                      Explore More Career Paths with Us!
                    </h3>
                    <div class="content-desc text-white">
                      Still looking to find a career that matches your passion
                      and goal in the future? Let’s explore various career paths
                      and job roles in different industries with ALL-in!
                      <br />
                      Grasp the key and basic knowledge of each career and
                      simulate yourself on how to apply it through case studies.
                      Come start to take a step on your career exploration
                      journey with the experts!
                    </div>
                    <button
                      class="btn btn-allin bg-primary mt-3"
                      @click="
                        redirectUrl('https://career-module.all-inedu.com/')
                      "
                    >
                      Explore Now!
                    </button>
                  </div>
                  <img
                    src="@/assets/img/home/card-blue.webp"
                    alt="ALL-in Mentoring"
                    class="card-corner"
                  />
                </v-card>
              </transition>
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

    redirectUrl(i) {
      window.open(i, "_blank");
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
      this.menu.key2 = to.params.key2;

      if (to.params.submenu) {
        this.activity = to.params.submenu;
      } else {
        this.activity = "meeting";
      }
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
    this.menu.key2 = this.$route.params.key2;

    if (this.$route.params.submenu) {
      this.activity = this.$route.params.submenu;
    }
  },
};
</script>

<style scoped>
.activity-top {
  top: 13vh;
}
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

.content-card {
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.content-title {
  font-weight: 600;
  width: 100%;
  margin-bottom: 20px;
  font-size: 2em;
}
.content-desc {
  font-size: 1.2em;
  width: 80%;
}
.card-corner {
  position: absolute;
  width: 30% !important;
  bottom: -1px;
  right: -1px;
}

@media only screen and (max-width: 800px) {
  .activity-top {
    top: 0;
  }
  .content-card {
    padding: 10px;
  }
  .content-title {
    width: 100%;
    font-size: 1.3em;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  .content-desc {
    width: 100%;
    font-size: 1em;
    text-align: justify;
  }
}
</style>