<template>
  <div id="dashboard">
    <div class="container mt-4">
      <div class="row align-items-center">
        <div class="col-md-3 text-md-start text-center">
          <div class="picture">
            <div class="user-picture-overlay" @click="modal = 'change-profile'">
              <div class="row align-items-center h-100">
                <div class="col text-center user-picture-font">
                  <vue-feather type="camera" size="30"></vue-feather> <br />
                  Change <br />
                  Profile Picture
                </div>
              </div>
            </div>
            <img
              :src="
                mentee.image != null
                  ? $base_url + '' + mentee.image
                  : '@/assets/img/saeka.webp'
              "
              class="user-picture"
              alt="ALL-in Mentoring"
            />
          </div>
        </div>
        <div class="col-md-9 py-3 text-md-start text-center">
          <h5>Hello,</h5>
          <h2 class="user-name mb-0">{{ mentee.first_name }}</h2>
          <div class="user-desc d-md-block d-none">
            <div class="d-md-flex d-block">
              <div class="py-1 me-3">
                <vue-feather
                  size="25"
                  type="mail"
                  class="float-start mt-md-1 me-2"
                ></vue-feather>
                {{ mentee.email }}
              </div>
              <div class="py-1">
                <vue-feather
                  size="25"
                  type="phone"
                  class="float-start mt-md-1 me-2"
                ></vue-feather>
                {{ mentee.phone_number }}
              </div>
            </div>
            <div class="d-md-flex d-block">
              <div class="py-1 me-2" v-for="i in sosmed" :key="i">
                <vue-feather
                  type="facebook"
                  stroke="blue"
                  class="float-start mt-md-1 me-1"
                  v-if="i.social_media_name == 'facebook'"
                ></vue-feather>
                <vue-feather
                  type="instagram"
                  stroke="#DB554A"
                  class="float-start mt-md-1 me-1"
                  v-if="i.social_media_name == 'instagram'"
                ></vue-feather>
                <vue-feather
                  type="linkedin"
                  stroke="#0A66C2"
                  class="float-start mt-md-1 me-1"
                  v-if="i.social_media_name == 'linkedin'"
                ></vue-feather>
              </div>
            </div>
          </div>

          <button class="btn btn-allin bg-primary mt-md-2">
            <router-link to="/user/my-profile">My Profile </router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row row-cols-md-3 row-cols-1">
        <!-- Meeting  -->
        <div class="col">
          <div class="border p-4" v-if="meeting.personal">
            <h5 class="text-center mb-3">1-ON-1 MEETING</h5>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                  pointer
                "
                @click="getUniList('waitlisted')"
              >
                <div class="mt-title">
                  REQUEST
                  <div class="float-end">
                    {{ meeting.personal.request }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-calendar-plus"></i>
                </div>
              </div>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                "
              >
                <div class="mt-title">
                  PENDING
                  <div class="float-end">
                    {{ meeting.personal.pending }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-clock"></i>
                </div>
              </div>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                "
              >
                <div class="mt-title">
                  UPCOMING
                  <div class="float-end">
                    {{ meeting.personal.upcoming }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-calendar-days"></i>
                </div>
              </div>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                "
              >
                <div class="mt-title">
                  HISTORY
                  <div class="float-end">
                    {{ meeting.personal.history }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="border p-4 mt-3" v-if="meeting.group">
            <h5 class="text-center mb-3">GROUP MEETING</h5>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                "
              >
                <div class="mt-title">
                  REQUEST
                  <div class="float-end">
                    {{ meeting.group.request }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-calendar-plus"></i>
                </div>
              </div>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                "
              >
                <div class="mt-title">
                  UPCOMING
                  <div class="float-end">
                    {{ meeting.group.upcoming }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-clock"></i>
                </div>
              </div>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                "
              >
                <div class="mt-title">
                  HISTORY
                  <div class="float-end">
                    {{ meeting.group.history }}
                  </div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Uni shortlisted  -->
        <div class="col">
          <div class="border p-4">
            <h5 class="text-center mb-3">UNIVERSITY SHORTLISTED</h5>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                  pointer
                "
                @click="getUniList('waitlisted')"
              >
                <div class="uni-title">
                  WAITLISTED
                  <div class="float-end">5</div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-clock"></i>
                </div>
              </div>
              <hr class="mt-0 mb-0" />
              <transition name="fade">
                <div class="p-3 pt-2" v-if="uni_status == 'waitlisted'">
                  <div
                    class="p-3 text-center text-muted"
                    v-if="uni_list.waitlisted?.length == 0"
                  >
                    No university shortlisted yet.
                  </div>
                  <div v-if="uni_list.waitlisted?.length != 0">
                    <div
                      class="d-flex align-items-start mb-2"
                      v-for="i in uni_list.waitlisted"
                      :key="i"
                    >
                      <div class="text-warning" style="width: 8%">
                        <i class="fa-solid fa-clock mt-1"></i>
                      </div>
                      <div class="uni-name" style="width: 92%">
                        {{ i.uni_name }} <br />
                        <small class="text-muted">{{ i.uni_major }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                  pointer
                "
                @click="getUniList('applied')"
              >
                <div class="uni-title">
                  APPLIED
                  <div class="float-end">5</div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-paper-plane"></i>
                </div>
              </div>
              <hr class="mt-0 mb-0" />
              <transition name="fade">
                <div class="p-3 pt-2" v-if="uni_status == 'applied'">
                  <div
                    class="p-3 text-center text-muted"
                    v-if="uni_list.applied?.length == 0"
                  >
                    No university shortlisted yet.
                  </div>
                  <div v-if="uni_list.applied?.length != 0">
                    <div
                      class="d-flex align-items-start mb-2"
                      v-for="i in uni_list.applied"
                      :key="i"
                    >
                      <div class="text-info" style="width: 8%">
                        <i class="fa-solid fa-paper-plane mt-1"></i>
                      </div>
                      <div class="uni-name" style="width: 92%">
                        {{ i.uni_name }} <br />
                        <small class="text-muted">{{ i.uni_major }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                  pointer
                "
                @click="getUniList('accepted')"
              >
                <div class="uni-title">
                  ACCEPTED
                  <div class="float-end">5</div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
              </div>
              <hr class="mt-0 mb-0" />
              <transition name="fade">
                <div class="p-3 pt-2" v-if="uni_status == 'accepted'">
                  <div
                    class="p-3 text-center text-muted"
                    v-if="uni_list.accepted?.length == 0"
                  >
                    No university shortlisted yet.
                  </div>
                  <div v-if="uni_list.accepted?.length != 0">
                    <div
                      class="d-flex align-items-start mb-2"
                      v-for="i in uni_list.accepted"
                      :key="i"
                    >
                      <div class="text-success" style="width: 8%">
                        <i class="fa-solid fa-circle-check mt-1"></i>
                      </div>
                      <div class="uni-name" style="width: 92%">
                        {{ i.uni_name }} <br />
                        <small class="text-muted">{{ i.uni_major }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="card shadow rounded-2 mb-2">
              <div
                class="
                  card-body
                  position-relative
                  card-dashboard
                  overflow-hidden
                  pointer
                "
                @click="getUniList('rejected')"
              >
                <div class="uni-title">
                  REJECTED
                  <div class="float-end">5</div>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-circle-xmark"></i>
                </div>
              </div>
              <hr class="mt-0 mb-0" />
              <transition name="fade">
                <div class="p-3 pt-2" v-if="uni_status == 'rejected'">
                  <div
                    class="p-3 text-center text-muted"
                    v-if="uni_list.rejected?.length == 0"
                  >
                    No university shortlisted yet.
                  </div>
                  <div v-if="uni_list.rejected?.length != 0">
                    <div
                      class="d-flex align-items-start mb-2"
                      v-for="i in uni_list.rejected"
                      :key="i"
                    >
                      <div class="text-danger" style="width: 8%">
                        <i class="fa-solid fa-circle-xmark mt-1"></i>
                      </div>
                      <div class="uni-name" style="width: 92%">
                        {{ i.uni_name }} <br />
                        <small class="text-muted">{{ i.uni_major }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="border p-4">
            <h5 class="text-center mb-3">TODOS</h5>
            <div class="card shadow rounded-2 todos mentoring-scroll">
              <div class="card-body">
                <div v-for="i in 5" :key="i">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <div class="d-flex align-items-center">
                        <div class="me-3">
                          <i
                            class="fa-solid fa-clock text-warning"
                            v-if="i < 5"
                          ></i>
                          <i
                            class="fa-solid fa-circle-check text-success"
                            v-if="i == 5"
                          ></i>
                        </div>
                        <div class="task" style="text-align: justify">
                          <div class="text-end mb-1">
                            <i class="fa-solid fa-calendar me-2"></i>
                            24 July 2022
                          </div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aperiam magni sit autem odit, a in maiores totam
                          quas quia Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Necessitatibus veniam explicabo,
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-3 bg-info" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <!-- Modal Document  -->

    <!-- Upload  -->
    <transition name="pop">
      <div class="vue-modal vue-modal-md" v-if="modal == 'change-profile'">
        <h6>Change Profile Picture</h6>
        <form @submit.prevent="handleUpload" method="post">
          <div class="border p-2">
            <div class="border mb-2">
              <div
                @dragenter.prevent="toggleActive"
                @dragleave.prevent="toggleActive"
                @dragover.prevent
                @drop.prevent="drop"
                :class="{ 'active-dropzone': active }"
                class="dropzone"
              >
                <span>Drag or Drop File</span>
                <span>OR</span>
                <label for="dropzoneFile">Select File</label>
                <input
                  type="file"
                  id="dropzoneFile"
                  class="dropzoneFile"
                  @change="selectedFile"
                />
              </div>
              <div class="my-2">
                <span class="file-info">
                  File: {{ dropzoneFile.name }}
                  <i
                    class="fa-solid fa-times text-danger ms-2 pointer"
                    v-if="dropzoneFile"
                    @click="deleteFile"
                  ></i>
                </span>
              </div>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="btn-mentoring btn-sm py-1 bg-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "dashboard",
  components: {},
  data() {
    return {
      modal: "",
      sosmed: [],
      mentee: [],
      uni_list: {
        waitlisted: [],
        applied: [],
        accepted: [],
        rejected: [],
      },
      meeting: [],
      uni_status: "waitlisted",
      uploaded_file: [],
    };
  },
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };

    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    const deleteFile = () => {
      dropzoneFile.value = "";
    };

    return {
      active,
      toggleActive,
      dropzoneFile,
      drop,
      selectedFile,
      deleteFile,
    };
  },
  methods: {
    async getSosmed() {
      try {
        const response = await this.$axios.get(
          "social-media/student/" + this.mentee.id
        );

        this.sosmed = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    },

    async getMeeting() {
      try {
        const response = await this.$axios.get("student/dashboard/summarize");

        this.meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    },

    async getUniList(status) {
      this.uni_status = status;
      try {
        const response = await this.$axios.get(
          "student/university/shortlisted/" + status
        );

        if (status == "waitlisted") {
          this.uni_list.waitlisted = response.data.data;
        } else if (status == "applied") {
          this.uni_list.applied = response.data.data;
        } else if (status == "accepted") {
          this.uni_list.accepted = response.data.data;
        } else if (status == "rejected") {
          this.uni_list.rejected = response.data.data;
        }
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleUpload() {
      this.modal = "";
      if (this.dropzoneFile) {
        this.uploaded_file = this.dropzoneFile;

        let form = new FormData();
        form.append("uploaded_file", this.uploaded_file);

        this.$alert.loading();
        try {
          const response = await this.$axios.post(
            "student/change/profile-picture",
            form
          );

          this.$emit("check", "update");

          this.mentee = response.data.data;
          localStorage.setItem("mentee", JSON.stringify(response.data.data));
          this.$alert.toast("success", response.data.message);
        } catch (e) {
          if (e.response.data.error.uploaded_file) {
            this.$alert.toast("error", e.response.data.error.uploaded_file[0]);
          } else {
            this.$alert.close();
          }
          // console.log(e.response.data);
        }
      }
    },
  },
  created() {
    this.mentee = JSON.parse(localStorage.getItem("mentee"));
    this.getSosmed();
    this.getMeeting();
    this.getUniList("waitlisted");
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}

.card {
  border-radius: 20px;
  border: 0;
}

.card-body .text-uppercase {
  font-size: 1.2em;
  font-weight: bold;
  color: rgb(99, 99, 99);
}

.counts {
  margin-top: 10px;
  margin-bottom: -10px;
  font-size: 1.5em;
  font-weight: bold;
}

.groups-status {
  font-size: 1.2em;
  color: #222672;
}

.user-picture {
  width: 15em;
  height: 15em;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}

.user-picture-overlay {
  position: absolute;
  width: 15em;
  height: 15em;
  margin-top: 40;
  background: rgb(240, 171, 84);
  background: linear-gradient(
    180deg,
    rgba(240, 171, 84, 1) 10%,
    rgba(244, 200, 144, 1) 65%
  );
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease-in;
}

.picture:hover .user-picture-overlay {
  opacity: 1 !important;
  cursor: pointer;
}

.user-picture-font {
  font-size: 18px;
  font-weight: 500;
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
  border-radius: 15px;
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

.mt-title,
.uni-title {
  position: relative;
  font-weight: 400;
  font-size: 0.9em;
  font-weight: bold;
  color: #575757;
  z-index: 2;
}

.card-dashboard {
  transition: all 0.5s;
}

.card-dashboard:hover {
  background: #f0ab54;
}

.card-dashboard:hover .uni-title,
.card-dashboard:hover .mt-title {
  color: #fff;
}

.card-dashboard:hover .icon {
  color: #4c4c4c1c;
  transform: rotate(0deg);
  z-index: 1 !important;
}

.todos {
  max-height: 70vh;
  overflow: auto;
}

.task {
  font-size: 0.8em;
}

.icon {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 3em;
  color: #a7a7a730;
  z-index: 1;
  transform: rotate(45deg);
  transition: all 0.6s;
}

@media only screen and (max-width: 800px) {
  #dashboard {
    padding-bottom: 0;
  }

  .user-desc {
    width: 100%;
    font-size: 1.2em;
  }

  .user-picture-overlay {
    position: relative;
    margin-bottom: -15em;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
