<template>
  <div id="dashboard">
    <div class="container mt-4">
      <div class="row g-2">
        <div class="col-md-4 text-center">
          <div class="card shadow-sm mb-2">
            <div class="card-body">
              <div class="picture">
                <div
                  class="user-picture-overlay"
                  @click="modal = 'change-profile'"
                >
                  <div class="row align-items-center h-100">
                    <div class="col text-center user-picture-font">
                      <vue-feather type="camera" size="30"></vue-feather> <br />
                      Change <br />
                      Profile Picture
                    </div>
                  </div>
                </div>
                <img
                  v-lazy="
                    mentee.image != null && mentee.image != ''
                      ? $base_url + '' + mentee.image
                      : 'https://picsum.photos/id/130/200/300'
                  "
                  class="user-picture"
                  alt="ALL-in Mentoring"
                />
              </div>

              <h5 class="mt-3">Hello,</h5>
              <h2 class="user-name mb-0">{{ mentee.first_name }}</h2>
              <div class="user-desc">
                <div class="py-1 me-3">
                  <i class="bi bi-envelope-check text-success"></i>
                  {{ mentee.email }}
                </div>
                <div class="py-1" v-if="mentee.phone_number">
                  <i class="bi bi-phone"></i>
                  {{ mentee.phone_number }}
                </div>
                <div class="d-flex justify-content-center w-100">
                  <div
                    class="py-1 me-2 pointer"
                    v-for="i in sosmed"
                    :key="i"
                    @click="goSosmed(i.hyperlink)"
                  >
                    <i
                      class="bi bi-facebook me-1"
                      v-if="
                        i.social_media_name == 'facebook' && i.hyperlink != null
                      "
                    ></i>
                    <i
                      class="bi bi-instagram me-1"
                      v-if="
                        i.social_media_name == 'instagram' &&
                        i.hyperlink != null
                      "
                    ></i>
                    <i
                      class="bi bi-linkedin me-1"
                      v-if="
                        i.social_media_name == 'linkedin' && i.hyperlink != null
                      "
                    ></i>

                    <span class="me-2" style="font-size: 0.7em">
                      {{ i.username }}
                    </span>
                  </div>
                </div>
              </div>

              <router-link
                to="/user/my-profile"
                class="btn bg-primary mt-2 py-1"
              >
                <i class="bi bi-person-circle me-1"></i>
                My Profile
              </router-link>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-body">
              <h6 class="mb-1">UNIVERSITY SHORTLISTED</h6>
              <div class="row row-cols-1">
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer pointer
                      "
                      @click="uni_status = 'shortlisted'"
                    >
                      <div class="uni-title">
                        Shortlisted
                        <div class="float-end">
                          {{ uni_list.shortlisted.length }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-clock"></i>
                      </div>
                    </div>
                    <hr class="mt-0 mb-0" />
                    <transition name="fade">
                      <div class="p-3 pt-2" v-if="uni_status == 'shortlisted'">
                        <div
                          class="p-3 text-center text-muted"
                          v-if="uni_list.shortlisted?.length == 0"
                        >
                          No university shortlisted yet.
                        </div>
                        <div v-if="uni_list.shortlisted?.length != 0">
                          <div
                            class="d-flex align-items-start mb-2"
                            v-for="i in uni_list.shortlisted"
                            :key="i"
                          >
                            <div class="text-warning" style="width: 8%">
                              <i class="fa-solid fa-clock mt-1"></i>
                            </div>
                            <div class="uni-name" style="width: 92%">
                              {{ i.uni_name }} <br />
                              <small class="text-muted">{{
                                i.uni_major
                              }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer pointer
                      "
                      @click="uni_status = 'applied'"
                    >
                      <div class="uni-title">
                        Applied
                        <div class="float-end">
                          {{ uni_list.applied.length }}
                        </div>
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
                              <small class="text-muted">{{
                                i.uni_major
                              }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer pointer
                      "
                      @click="uni_status = 'accepted'"
                    >
                      <div class="uni-title">
                        Accepted
                        <div class="float-end">
                          {{ uni_list.accepted.length }}
                        </div>
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
                              <small class="text-muted">{{
                                i.uni_major
                              }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer pointer
                      "
                      @click="uni_status = 'rejected'"
                    >
                      <div class="uni-title">
                        Rejected
                        <div class="float-end">
                          {{ uni_list.rejected.length }}
                        </div>
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
                              <small class="text-muted">{{
                                i.uni_major
                              }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer pointer
                      "
                      @click="uni_status = 'waitlisted'"
                    >
                      <div class="uni-title">
                        Waitlisted
                        <div class="float-end">
                          {{ uni_list.waitlisted.length }}
                        </div>
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
                              <small class="text-muted">{{
                                i.uni_major
                              }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card shadow-sm mb-2">
            <div class="card-body">
              <h6 class="mb-1">1-ON-1 MEETING</h6>
              <div class="row row-cols-md-3 row-cols-1">
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer pointer
                      "
                      @click="goTo('/user/my-activity/meeting', 'request')"
                    >
                      <div class="mt-title">
                        New Request
                        <div class="float-end">
                          {{ meeting.personal?.request }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-calendar-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2 pointer">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        pointer
                        overflow-hidden
                      "
                      @click="goTo('/user/my-activity/meeting', 'upcoming')"
                    >
                      <div class="mt-title">
                        Upcoming
                        <div class="float-end">
                          {{ meeting.personal?.upcoming }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-calendar-days"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        pointer
                        overflow-hidden
                      "
                      @click="goTo('/user/my-activity/meeting', 'history')"
                    >
                      <div class="mt-title">
                        History
                        <div class="float-end">
                          {{ meeting.personal?.history }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-calendar-check"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-2">
            <div class="card-body">
              <h6 class="mb-1">GROUP PROJECT</h6>
              <div class="row row-cols-md-3 row-cols-1">
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer
                      "
                      @click="goTo('/user/my-activity/group', 'request')"
                    >
                      <div class="mt-title">
                        New Request
                        <div class="float-end">
                          {{ meeting.group?.request }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-calendar-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer
                      "
                      @click="goTo('/user/my-activity/group', 'progress')"
                    >
                      <div class="mt-title">
                        In Progress
                        <div class="float-end">
                          {{ meeting.group?.upcoming }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-clock"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer
                      "
                      @click="goTo('/user/my-activity/group', 'completed')"
                    >
                      <div class="mt-title">
                        Completed
                        <div class="float-end">
                          {{ meeting.group?.history }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-calendar-check"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-2">
            <div class="card-body">
              <h6 class="mb-1">GROUP MEETING</h6>
              <div class="row row-cols-md-2 row-cols-1">
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer
                      "
                      @click="showGroupMeeting = !showGroupMeeting"
                    >
                      <div class="mt-title">
                        Upcoming
                        <div class="float-end">
                          {{ meeting.group_m?.upcoming }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-clock"></i>
                      </div>
                    </div>
                    <div class="card-body" v-if="showGroupMeeting">
                      <div
                        style="margin-top: -10px"
                        v-if="meeting.group_m?.detail?.upcoming?.length > 0"
                      >
                        <div class="table-responsive">
                          <table class="table table-bordered table-hover">
                            <tbody>
                              <tr
                                v-for="i in meeting.group_m.detail.upcoming"
                                :key="i"
                                style="vertical-align: middle"
                              >
                                <td>{{ i.meeting_subject }}</td>
                                <td class="text-center">
                                  {{ $customDate.date(i.meeting_date) }} <br />
                                  {{ $customDate.time(i.meeting_date) }}
                                </td>
                                <td class="text-end">
                                  <a :href="i.meeting_link" target="_blank">
                                    <span class="btn-mentoring py-1 bg-primary"
                                      >Join</span
                                    >
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm rounded-2 mb-2">
                    <div
                      class="
                        card-body
                        position-relative
                        card-dashboard
                        overflow-hidden
                        pointer
                      "
                    >
                      <div class="mt-title">
                        History
                        <div class="float-end">
                          {{ meeting.group_m?.history }}
                        </div>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-calendar-check"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-body">
              <h6 class="mb-1">TASKS</h6>
              <div class="card shadow-sm rounded-2 todos mentoring-scroll p-0">
                <div class="card-body p-0">
                  <div
                    class="text-center p-3 text-muted"
                    v-if="todos_list.length == 0"
                  >
                    No data yet.
                  </div>
                  <div v-for="(i, index) in todos_list" :key="index">
                    <div class="row align-items-center todo-list py-3 m-0">
                      <div class="col-12">
                        <div class="task w-100">
                          <div class="d-flex justify-content-between">
                            <div class="title">
                              <div class="text-start text-primary mb-0 w-100">
                                <i class="bi bi-calendar-date me-2"></i>
                                {{ $customDate.date(i.due_date) }}
                              </div>
                              <div style="font-size: 1.3em; font-weight: 400">
                                {{ i.task_name }}
                              </div>
                            </div>
                            <div
                              class="
                                task-status
                                d-flex
                                align-items-center
                                text-end
                              "
                            >
                              <v-tooltip
                                placement="top"
                                arrow="true"
                                class="text-start"
                                v-if="i.status != 3"
                              >
                                <i
                                  class="
                                    bi bi-question-circle-fill
                                    me-2
                                    mb-0
                                    pb-0
                                    pointer
                                  "
                                  style="font-size: 1.4em"
                                ></i>
                                <template #content>
                                  <div v-if="i.status == 0">
                                    Click the finished button to inform <br />
                                    your mentor that you have finished the task.
                                  </div>
                                  <div v-if="i.status == 1">
                                    Click the cancel button to inform your
                                    <br />
                                    mentor that your task is unfinished.
                                  </div>
                                  <div v-if="i.status == 2">
                                    Click the revised button to inform your
                                    mentor <br />
                                    that you have revised the task.
                                  </div>
                                </template>
                              </v-tooltip>
                              <button
                                class="btn btn-sm btn-primary py-1"
                                style="font-size: 1em"
                                v-if="i.status == 0"
                                @click="switchTodos(i.id, 1)"
                              >
                                <i class="bi bi-hourglass pointer me-1"></i>
                                Finished
                              </button>
                              <button
                                class="btn btn-sm btn-outline-danger py-1"
                                style="font-size: 1em"
                                v-if="i.status == 1"
                                @click="switchTodos(i.id, 0)"
                              >
                                <i
                                  class="bi bi-hourglass-split pointer me-1"
                                ></i>
                                Cancel
                              </button>
                              <button
                                class="btn btn-sm btn-warning py-1"
                                style="font-size: 1em"
                                v-if="i.status == 2"
                                @click="switchTodos(i.id, 1)"
                              >
                                <i
                                  class="bi bi-arrow-clockwise pointer me-1"
                                ></i>
                                Revised
                              </button>
                              <div
                                class="text-success py-1"
                                style="font-size: 1em"
                                v-if="i.status == 3"
                              >
                                <i class="bi bi-check-circle pointer me-1"></i>
                                Done
                              </div>
                            </div>
                          </div>
                          <div
                            style="
                              text-align: justify;
                              border-left: 2px solid #dedede;
                            "
                            class="my-0 py-0 mt-2 ps-2"
                            v-html="i.description"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <span>Drag and Drop File</span>
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
      todos_list: [],
      uni_list: {
        waitlisted: [],
        applied: [],
        accepted: [],
        rejected: [],
        shortlisted: [],
      },
      meeting: [],
      uni_status: "shortlisted",
      uploaded_file: [],
      showGroupMeeting: false,
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

    goTo(link, tab) {
      this.$router.push({ path: link });
      localStorage.setItem("tab", tab);
    },

    goSosmed(i) {
      window.open(i, "_blank");
    },

    async getMeeting() {
      this.$Progress.start();
      try {
        this.$Progress.finish();
        const response = await this.$axios.get("student/dashboard/summarize");
        this.meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e);
      }
    },

    async getUniList(status) {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(
          "student/university/shortlisted/" + status
        );
        this.$Progress.finish();

        if (status == "waitlisted") {
          this.uni_list.waitlisted = response.data.data;
        } else if (status == "applied") {
          this.uni_list.applied = response.data.data;
        } else if (status == "accepted") {
          this.uni_list.accepted = response.data.data;
        } else if (status == "rejected") {
          this.uni_list.rejected = response.data.data;
        } else if (status == "shortlisted") {
          this.uni_list.shortlisted = response.data.data;
        }
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getTodosList() {
      this.$Progress.start();
      try {
        const response = await this.$axios.get("student/todos");
        this.$Progress.finish();
        this.todos_list = response.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.finish();
        console.log(e);
      }
    },

    async switchTodos(j, s) {
      this.$alert.loading();
      try {
        const response = await this.$axios.post("switch/todos", {
          todos_id: j,
          new_status: s,
        });
        // console.log(response);
        if (response.data.success) {
          this.getTodosList();
          setTimeout(() => {
            this.$alert.toast("success", response.data.message);
          });
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
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
    this.getTodosList();
    this.getUniList("waitlisted");
    this.getUniList("applied");
    this.getUniList("accepted");
    this.getUniList("rejected");
    this.getUniList("shortlisted");
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}

.card {
  border-radius: 10px;
  border: 1px solid rgba(221, 221, 221, 0.388);
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
  left: 0;
  right: 0;
  margin: auto;
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
  font-size: 2.5em;
  font-weight: bold;
  letter-spacing: 0px;
  color: #223872;
  margin-top: -10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.user-desc {
  width: 100%;
  font-size: 1.2em;
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
  font-weight: 500;
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
  font-size: 0.9em;
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

.todo-list {
  transition: all 0.2s ease-in-out;
}

.todo-list:hover {
  background: #ededed;
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
