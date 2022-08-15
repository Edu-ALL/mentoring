<template>
  <div id="dashboard pb-5">
    <!-- TOTAL  -->
    <div class="row border py-3 px-2 g-3">
      <div class="col-md-3">
        <div
          class="card h-card shadow-sm position-relative overflow-hidden"
          @click="redirect('student', '', '')"
        >
          <div class="shadow-count">{{ total?.total_student }}</div>
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-4 text-center">
                <vue-feather type="user" class="h-ico"></vue-feather>
              </div>
              <div class="col-8">
                <div class="h-count">{{ total?.total_student }}</div>
                <div class="h-label">Students Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div
          class="card h-card shadow-sm"
          @click="redirect('activity', '', 'pending')"
        >
          <div class="card-body">
            <div class="shadow-count">
              {{ total?.meeting?.total_new_request }}
            </div>
            <div class="row align-items-center">
              <div class="col-4 text-center">
                <vue-feather type="phone-call" class="h-ico"></vue-feather>
              </div>
              <div class="col-8">
                <h5 class="text-white">Meeting</h5>
                <div
                  class="
                    d-flex
                    text-white
                    align-items-center
                    justify-content-between
                  "
                >
                  <div>New Request</div>
                  <h6 class="my-0 text-end text-white">
                    {{ total?.meeting?.total_new_request }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div
          class="card h-card shadow-sm"
          @click="redirect('activity', '', 'upcoming')"
        >
          <div class="shadow-count">
            {{ total?.meeting?.total_upcoming }}
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-4 text-center">
                <vue-feather type="phone-call" class="h-ico"></vue-feather>
              </div>
              <div class="col-8">
                <h5 class="text-white">Meeting</h5>
                <div
                  class="
                    d-flex
                    text-white
                    align-items-center
                    justify-content-between
                  "
                >
                  <div>Upcoming</div>
                  <h6 class="my-0 text-end text-white">
                    {{ total?.meeting?.total_upcoming }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card h-card shadow-sm">
          <div class="shadow-count">
            {{ total?.group_meeting?.total_upcoming }}
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-4 text-center">
                <vue-feather type="phone-call" class="h-ico"></vue-feather>
              </div>
              <div class="col-8">
                <h5 class="text-white">Group Meeting</h5>
                <div
                  class="
                    d-flex
                    text-white
                    align-items-center
                    justify-content-between
                  "
                >
                  <div>Upcoming</div>
                  <h6 class="my-0 text-end text-white">
                    {{ total?.group_meeting?.total_upcoming }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ACTIVITIES  -->
    <div class="row mt-2 border py-3 px-2">
      <h5>Recent Activities</h5>
      <div class="col-md-6">
        <div class="card-white shadow-sm mt-2">
          <h6 class="act-title text-secondary">
            <div class="float-end">Upcoming</div>
            <div class="">Meetings</div>
          </h6>
          <!-- Upcoming Meeting  -->
          <div class="card-activity mentoring-scroll table-responsive">
            <table class="table">
              <tbody>
                <tr
                  class="text-center"
                  v-if="recent?.meeting?.upcoming?.length == 0"
                >
                  <td class="py-2">No Group Meeting Yet</td>
                </tr>
                <tr
                  v-for="i in recent.meeting.upcoming"
                  :key="i"
                  class="py-0 align-middle"
                >
                  <td style="text-transform: capitalize">
                    {{ i.students.first_name + " " + i.students.last_name }}
                  </td>
                  <td style="text-transform: capitalize">
                    {{ i.module }}
                  </td>
                  <td class="text-center">
                    {{ $customDate.date(i.call_date) }} <br />
                    {{ $customDate.time(i.call_date) }}
                  </td>
                  <td class="text-end">
                    <button
                      class="btn-mentoring btn-primary btn-sm py-1 px-3"
                      @click="joinZoom(i.location_link)"
                    >
                      Join
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Latest Meeting  -->
        <div class="card-white shadow-sm mt-2">
          <h6 class="act-title text-secondary">
            <div class="float-end">Latest</div>
            <div class="">Meetings</div>
          </h6>
          <div class="card-activity mentoring-scroll table-responsive">
            <table class="table">
              <tbody>
                <tr
                  class="text-center"
                  v-if="recent?.meeting?.latest_meeting?.length == 0"
                >
                  <td class="py-2">No Group Meeting Yet</td>
                </tr>
                <tr
                  v-for="i in recent.meeting.latest_meeting"
                  :key="i"
                  class="py-0 align-middle"
                >
                  <td style="text-transform: capitalize">
                    {{ i.students.first_name + " " + i.students.last_name }}
                  </td>
                  <td style="text-transform: capitalize">
                    {{ i.module }}
                  </td>
                  <td class="text-center">
                    {{ $customDate.date(i.call_date) }} <br />
                    {{ $customDate.time(i.call_date) }}
                  </td>
                  <td class="text-end">
                    <button
                      class="
                        btn-mentoring btn-outline-success btn-sm
                        py-1
                        px-3
                        mx-1
                      "
                      @click="detail(i.id)"
                    >
                      Add Result
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <!-- Attendance   -->
        <div class="card-white shadow-sm mt-2">
          <h6 class="act-title text-secondary">
            <div class="float-end">Attendance</div>
            <div class="">Group Meetings</div>
          </h6>
          <div class="card-activity mentoring-scroll table-responsive">
            <table class="table">
              <tbody>
                <tr
                  class="text-center"
                  v-if="recent?.group?.attendances?.length == 0"
                >
                  <td class="py-2">No Group Meeting Yet</td>
                </tr>
                <tr
                  v-for="i in recent.group.attendances"
                  :key="i"
                  class="py-0 align-middle"
                >
                  <td>{{ i.group_project.project_name }}</td>
                  <td class="text-center">
                    {{ $customDate.date(i.meeting_date) }} <br />
                    {{ $customDate.time(i.meeting_date) }}
                  </td>
                  <td class="text-end">
                    <button
                      class="btn-mentoring btn-outline-success btn-sm py-1 px-3"
                      @click="attendance(i.id)"
                    >
                      Yes
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card-white shadow-sm mt-2">
          <h6 class="act-title text-secondary">
            <div class="float-end">Upcoming</div>
            <div class="">Group Meetings</div>
          </h6>
          <div class="card-activity mentoring-scroll table-responsive">
            <table class="table">
              <tbody>
                <tr
                  class="text-center"
                  v-if="recent?.group?.upcoming?.length == 0"
                >
                  <td class="py-2">No Group Meeting Yet</td>
                </tr>
                <tr
                  v-for="i in recent.group.upcoming"
                  :key="i"
                  class="py-0 align-middle"
                >
                  <td>{{ i.group_project.project_name }}</td>
                  <td>{{ i.meeting_subject }}</td>
                  <td class="text-center">
                    {{ $customDate.date(i.meeting_date) }} <br />
                    {{ $customDate.time(i.meeting_date) }}
                  </td>
                  <td class="text-end">
                    <button
                      class="btn-mentoring btn-primary btn-sm py-1 px-3"
                      @click="joinZoom(i.meeting_link)"
                    >
                      Join
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Last Meeting  -->
  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <div
    class="vue-side mentoring-scroll shadow"
    :class="modal == 'add' ? 'active' : ''"
  >
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-0">Last Meeting Minutes</h6>
      <div class="text-end">
        <button
          class="btn btn-sm btn-mentoring btn-outline-info py-1"
          @click="view_status = 'add'"
          v-if="view_status == 'view'"
        >
          Edit
        </button>
      </div>
    </div>
    <hr class="my-2" />
    <!-- ADD  -->
    <form @submit.prevent="handleSubmit">
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col mb-3">
          <input-group>
            <v-editor
              api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
              class="form-control form-mentoring w-100"
              placeholder="Academic Performance"
              v-model="meeting_minutes.academic_performance"
              rows="5"
              id="acad"
            ></v-editor>
          </input-group>
        </div>
        <div class="col mb-3">
          <input-group>
            <v-editor
              api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
              class="form-control form-mentoring w-100"
              placeholder="Exploration"
              v-model="meeting_minutes.exploration"
              rows="5"
              id="exploration"
            ></v-editor>
          </input-group>
        </div>
        <div class="col mb-3">
          <input-group>
            <v-editor
              api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
              class="form-control form-mentoring w-100"
              placeholder="Writing Skills"
              v-model="meeting_minutes.writing_skills"
              rows="5"
              id="writing"
            ></v-editor>
          </input-group>
        </div>
        <div class="col mb-3">
          <input-group>
            <v-editor
              api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
              class="form-control form-mentoring w-100"
              placeholder="Personal Brand"
              v-model="meeting_minutes.personal_brand"
              rows="5"
              id="personal"
            ></v-editor>
          </input-group>
        </div>
      </div>
      <div class="mb-3">
        <small class="text-danger" v-if="error?.mt_todos_note">
          {{ error.mt_todos_note[0] }}
        </small>
        <input-group>
          <v-editor
            api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
            class="form-control form-mentoring w-100"
            placeholder="Mentor Todos"
            v-model="meeting_minutes.mt_todos_note"
            rows="5"
            id="mentorTodos"
          ></v-editor>
        </input-group>
      </div>
      <div class="mb-3">
        <small class="text-danger" v-if="error?.st_todos_note">
          {{ error.st_todos_note[0] }}
        </small>
        <input-group>
          <v-editor
            api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
            class="form-control form-mentoring w-100"
            placeholder="Mentee Todos"
            v-model="meeting_minutes.st_todos_note"
            rows="5"
            id="menteeTodos"
          ></v-editor>
        </input-group>
        <hr />
      </div>
      <div class="text-end">
        <button class="btn-mentoring btn-sm bg-primary py-1 px-3" type="submit">
          <i class="fa-solid fa-save me-2"></i>
          Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "mentorDashboard",
  data() {
    return {
      total: [],
      recent: {
        meeting: [],
        group: [],
      },
      modal: "",
      meeting_minutes: {
        st_act_id: "",
        academic_performance: "",
        exploration: "",
        writing_skills: "",
        personal_brand: "",
        mt_todos_note: "",
        st_todos_note: "",
      },
      error: [],
    };
  },
  methods: {
    redirect(menu, submenu, tab) {
      this.$router.push({ path: "/mentor/" + menu + "/" + submenu });
      localStorage.setItem("tab", tab);
    },

    async getTotal() {
      try {
        const response = await this.$axios.get("../v2/overview/mentor/total");
        this.total = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getRecentMeeting() {
      try {
        const response = await this.$axios.get(
          "../v2/list/activities/1-on-1-call/upcoming/recent"
        );
        this.recent.meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getRecentGroupMeeting() {
      try {
        const response = await this.$axios.get(
          "list/group/meeting/upcoming/recent"
        );
        this.recent.group = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    joinZoom(link) {
      window.open(link, "_blank");
    },

    detail(i) {
      this.modal = "add";
      this.meeting_minutes = {
        st_act_id: i,
        academic_performance: "",
        exploration: "",
        writing_skills: "",
        personal_brand: "",
        mt_todos_note: "",
        st_todos_note: "",
      };
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "create/meeting-minutes",
          this.meeting_minutes
        );

        this.modal = "";

        this.getRecentMeeting();
        this.$alert.toast("success", response.data.message);
        // console.log(response);
      } catch (e) {
        // console.log(e.response);
        if (e.response.status == 400) {
          this.error = e.response.data.error;
        } else {
          this.modal = "";
        }
        this.$alert.toast("error", "Please try again.");
      }
    },

    async attendance(id) {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "update/group/meeting/attendance/" + id
        );

        this.getRecentGroupMeeting();
        this.$alert.toast("success", response.data.message);
        // console.log(response);
      } catch (e) {
        // console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    this.getTotal();
    this.getRecentMeeting();
    this.getRecentGroupMeeting();
  },
};
</script>

<style scoped>
.shadow-count {
  position: absolute;
  top: -30px;
  right: -20px;
  font-weight: 900;
  font-size: 7em;
  line-height: 1em;
  padding: 0;
  margin: 0;
  color: #fff;
  opacity: 0.2;
}

.card-activity {
  height: 200px;
  overflow: auto;
}

.vue-side {
  position: fixed;
  top: 0;
  right: -50%;
  height: 100vh;
  padding: 20px;
  width: 40%;
  background: white;
  overflow: auto;
  z-index: 99999;
  transition: all 0.3s;
}

.vue-side.active {
  right: 0 !important;
}

@media only screen and (max-width: 600px) {
  .vue-side {
    position: fixed;
    top: 0;
    right: -90%;
    width: 90%;
  }
}
</style>