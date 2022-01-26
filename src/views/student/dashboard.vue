<template>
  <transition name="fade">
    <v-loader v-if="loading"></v-loader>
  </transition>
  <transition name="fade">
    <div id="dashboard" v-if="!loading">
      <v-header></v-header>
      <div class="container mt-3">
        <div class="row align-items-center">
          <div class="col-md-3 text-md-start text-center">
            <img
              src="@/assets/img/saeka.webp"
              class="user-picture"
              alt="ALL-in Mentoring"
            />
          </div>
          <div class="col-md-9 py-3">
            <h5>Hello,</h5>
            <h2 class="user-name">Saeka</h2>
            <div class="user-desc">
              <div class="d-md-flex d-block">
                <div class="py-1 me-3">
                  <vue-feather
                    size="25"
                    type="mail"
                    class="float-start mt-md-1 me-2"
                  ></vue-feather>
                  saeka@all-inedu.com
                </div>
                <div class="py-1">
                  <vue-feather
                    size="25"
                    type="phone"
                    class="float-start mt-md-1 me-2"
                  ></vue-feather>
                  +62 8712492xxx
                </div>
              </div>
              <div class="d-md-flex d-block">
                <div class="py-1 me-3">
                  <vue-feather
                    type="facebook"
                    stroke="blue"
                    class="float-start mt-md-1 me-1"
                  ></vue-feather>
                  saeka
                </div>
                <div class="py-1 me-3">
                  <vue-feather
                    type="instagram"
                    stroke="#DB554A"
                    class="float-start mt-md-1 me-1"
                  ></vue-feather>
                  saeka
                </div>
                <div class="py-1">
                  <vue-feather
                    type="linkedin"
                    stroke="#0A66C2"
                    class="float-start mt-md-1 me-1"
                  ></vue-feather>
                  saeka
                </div>
              </div>
            </div>
            <!-- <button class="btn btn-allin bg-primary mt-4">
              My Diagnostic Results
            </button> -->
          </div>
        </div>

        <div id="content">
          <hr class="my-4" />
          <!-- Tabs  -->
          <transition name="fade">
            <div
              class="row row-cols-md-4 row-cols-1 d-flex align-items-stretch"
              v-if="tab == ''"
            >
              <div class="col mb-2">
                <div
                  class="card h-100 card-main shadow border-0"
                  @click="tab = 'ls'"
                >
                  <div class="card-body">
                    <h5 class="user-main">Life Skill</h5>
                    <div class="user-layout-picture">
                      <img
                        v-lazy="'https://picsum.photos/id/1/400/250'"
                        alt="Life Skill"
                        class="user-main-picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-2">
                <div
                  class="card h-100 card-main shadow border-0"
                  @click="tab = 'ce'"
                >
                  <div class="card-body">
                    <h5 class="user-main">Career Exploration</h5>
                    <div class="user-layout-picture">
                      <img
                        v-lazy="'https://picsum.photos/id/34/400/250'"
                        alt="Career Exploration"
                        class="user-main-picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-2">
                <div
                  class="card h-100 card-main shadow border-0"
                  @click="tab = 'ua'"
                >
                  <div class="card-body">
                    <h5 class="user-main">University Admission</h5>
                    <div class="user-layout-picture">
                      <img
                        v-lazy="'https://picsum.photos/id/12/400/250'"
                        alt="University Admission"
                        class="user-main-picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mb-2">
                <div
                  class="card h-100 card-main shadow border-0"
                  @click="tab = 'lu'"
                >
                  <div class="card-body">
                    <h5 class="user-main">Life at University</h5>
                    <div class="user-layout-picture">
                      <img
                        v-lazy="'https://picsum.photos/id/237/400/250'"
                        alt="Life at University"
                        class="user-main-picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12" style="height: 20vh"></div>
            </div>
          </transition>

          <!-- Content Tabs  -->
          <transition name="fade">
            <div class="mb-5" v-if="tab != ''">
              <div class="tabs">
                <div
                  class="tabs-item"
                  :class="tab == 'ls' ? 'active' : ''"
                  @click="tab = 'ls'"
                >
                  Life Skill
                </div>
                <div
                  class="tabs-item"
                  :class="tab == 'ce' ? 'active' : ''"
                  @click="tab = 'ce'"
                >
                  Career Exploration
                </div>
                <div
                  class="tabs-item"
                  :class="tab == 'ua' ? 'active' : ''"
                  @click="tab = 'ua'"
                >
                  University Admission
                </div>
                <div
                  class="tabs-item"
                  :class="tab == 'lu' ? 'active' : ''"
                  @click="tab = 'lu'"
                >
                  Life at University
                </div>
              </div>
              <div class="tabs-content shadow">
                <!-- Life Skill  -->
                <transition name="fade">
                  <div v-if="tab == 'ls'">
                    <v-call-mentor class="mb-4" type="mentor"></v-call-mentor>
                    <v-message></v-message>
                  </div>
                </transition>

                <!-- Career Exploration  -->
                <transition name="fade">
                  <div v-if="tab == 'ce'">
                    <v-webinar class="mb-4" type="career"></v-webinar>
                    <v-ex-card
                      class="mb-4"
                      feature_name="career-module"
                    ></v-ex-card>
                    <v-call-mentor
                      class="mb-4"
                      type="mentor-project"
                    ></v-call-mentor>
                    <v-ex-card class="mb-4" feature_name="cv-builder">
                    </v-ex-card>
                    <v-ex-card class="mb-4" feature_name="internship">
                    </v-ex-card>
                    <v-message></v-message>
                  </div>
                </transition>

                <!-- Uni Admission  -->
                <transition name="fade">
                  <div v-if="tab == 'ua'">
                    <v-uni-admission class="mb-4"></v-uni-admission>
                    <v-webinar class="mb-4" type="uni-prep"></v-webinar>
                    <v-call-mentor class="mb-4" type="mentor"></v-call-mentor>
                    <v-ex-card class="mb-4" feature_name="essay"></v-ex-card>
                    <v-call-editor class="mb-4"></v-call-editor>
                    <v-ex-card class="mb-4" feature_name="acad"></v-ex-card>
                    <v-ex-card class="mb-4" feature_name="sat"></v-ex-card>
                    <v-call-alumni class="mb-4"></v-call-alumni>
                    <v-message></v-message>
                  </div>
                </transition>

                <!-- Life at Uni -->
                <transition name="fade">
                  <div v-if="tab == 'lu'">
                    <v-webinar class="mb-4" type="all-in"></v-webinar>
                    <v-call-mentor class="mb-4" type="mentor"></v-call-mentor>
                    <v-call-alumni class="mb-4"></v-call-alumni>
                    <v-message></v-message>
                  </div>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <img src="@/assets/img/home/homepage-1.png" class="dashboard-corner" />
    </div>
  </transition>
</template>
<script>
import Header from "@/components/layout/student/header";
import Loader from "@/components/library/loader";

// Features
import callMentor from "@/components/student/feature/1on1-mentor";
import callEditor from "@/components/student/feature/1on1-editor";
import callAlumni from "@/components/student/feature/1on1-alumni";
import Message from "@/components/student/feature/message";
import exCard from "@/components/student/feature/ex-card";
import Webinar from "@/components/student/feature/webinar";
import uniAdmission from "@/components/student/feature/uni-admission";

export default {
  name: "dashboard",
  components: {
    "v-header": Header,
    "v-loader": Loader,
    "v-call-mentor": callMentor,
    "v-call-editor": callEditor,
    "v-call-alumni": callAlumni,
    "v-message": Message,
    "v-ex-card": exCard,
    "v-webinar": Webinar,
    "v-uni-admission": uniAdmission,
  },
  data() {
    return {
      loading: true,
      tab: "",
    };
  },
  methods: {
    load(status) {
      this.loading = status;
    },
  },
  created() {
    document.title = "Your Dashboard";
    setTimeout(() => {
      this.load(false);
    }, 1000);
  },
};
</script>

<style scoped>
#dashboard {
  padding-bottom: 10px;
  min-height: 100vh;
  background: rgb(197, 225, 242);
  background: linear-gradient(
    20deg,
    rgba(197, 225, 242, 1) 0%,
    rgba(255, 255, 255, 0.9668242296918768) 57%
  );
}

.tabs-content {
  border-radius: 0 0 15px 15px;
  background: white;
  padding-bottom: 40px !important;
}

.user-picture {
  width: 15em;
  height: 15em;
  object-fit: cover;
  border-radius: 50%;
}

.user-name {
  font-size: 4.5em;
  font-weight: bold;
  letter-spacing: 0px;
  color: #223872;
  margin-top: -20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.user-desc {
  width: 70%;
  font-size: 1.4em;
}

.card-main {
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  color: #223872;
  position: relative;
  z-index: 99;
}

.card-main:hover {
  background: #f0ab54;
  /* color: #fff; */
}

.user-main {
  margin-bottom: 10px;
}

.user-layout-picture {
  height: auto;
  overflow: hidden;
}

.user-main-picture {
  height: 150px;
  width: 100%;
  transition: transform 0.5s ease;
  object-fit: cover;
}

.user-main-picture:hover,
.card:hover .user-main-picture {
  transform: scale(1.2);
}

.dashboard-corner {
  width: 50%;
  position: relative;
  margin-top: -31%;
  margin-bottom: -40px;
  left: 50%;
  z-index: 98;
}

@media only screen and (max-width: 800px) {
  #dashboard {
    padding-bottom: 0;
  }

  .user-desc {
    width: 100%;
    font-size: 1.2em;
  }
  .dashboard-corner {
    width: 100%;
    left: 0%;
    margin-top: -400px;
    margin-bottom: -165px;
  }
}
</style>
