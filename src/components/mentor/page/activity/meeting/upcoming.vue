<template>
  <div id="upcoming" v-if="meeting?.data?.length >= 0">
    <div class="row p-4" v-if="meeting?.data?.length == 0">
      <div class="col text-center text-muted">
        <p class="my-0">No meeting yet.</p>
      </div>
    </div>
    <div class="table-responsive" v-if="meeting?.data?.length != 0">
      <table class="table table-bordered table-hover">
        <thead>
          <tr class="text-center">
            <th width="3%">No</th>
            <th>Call With</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Password</th>
            <th width="17%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(i, index) in meeting.data"
            :key="index"
            class="text-center align-middle"
          >
            <td>{{ meeting.from + index }}</td>
            <td class="text-start" nowrap style="text-transform: capitalize">
              {{ i.students.first_name + " " + i.students.last_name }}
            </td>
            <td class="text-start" style="text-transform: capitalize">
              {{ i.module }}
            </td>
            <td nowrap>
              {{ $customDate.date(i.start_call_date) }}
            </td>
            <td nowrap>
              {{
                $customDate.time(i.start_call_date) +
                " - " +
                $customDate.time(i.end_call_date)
              }}
            </td>
            <td nowrap>
              <div class="" v-if="i.location_link == ' '">-</div>
              <div class="" v-if="i.location_link != ''">
                <div class="" v-if="view_pw[index]">
                  {{ i.location_pw }}
                  <i
                    class="fa-solid fa-eye ms-2 pointer"
                    @click="view_pw[index] = !view_pw[index]"
                  ></i>
                </div>

                <div class="" v-if="!view_pw[index]">
                  ***
                  <i
                    class="fa-solid fa-eye-slash ms-2 pointer"
                    @click="view_pw[index] = !view_pw[index]"
                  ></i>
                </div>
              </div>
            </td>
            <td nowrap>
              <button
                class="btn-mentoring btn-sm btn-type-1 me-1 py-1 ps-1 pe-2"
                @click="goto(i.location_link)"
              >
                <i class="bi bi-box-arrow-in-right me-1"></i>
                Join
              </button>
              <button
                class="
                  btn-mentoring btn-sm btn-outline-danger
                  me-1
                  py-1
                  ps-1
                  pe-2
                "
                @click="cancelMeeting(i.id)"
              >
                <i class="bi bi-x-circle me-1"></i>
                Cancel
              </button>
              <button
                class="btn-mentoring btn-sm btn-success me-1 py-1 ps-1 pe-2"
                @click="detail(i.id)"
              >
                <i class="bi bi-check-circle me-1"></i>
                Finish
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Cancel Meeting  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'cancel'">
      <div class="text-center">
        <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
        <div class="mt-2">Are you sure to cancel this meeting?</div>
        <form @submit.prevent="handleCancel">
          <div class="text-start mt-3">
            <input-group>
              <textarea
                v-model="reason"
                rows="5"
                class="form-control"
                required
              ></textarea>
              <label for="reason" class="text-dark">Reason</label>
            </input-group>
          </div>
          <div class="mt-3">
            <button
              type="button"
              class="btn-mentoring btn-warning btn-sm py-1 mx-1"
              @click="modal = ''"
            >
              <i class="bi bi-x-circle me-1"></i>
              Close</button
            ><button
              type="submit"
              class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
            >
              <i class="bi bi-check me-1"></i>
              Yes, Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>

  <!-- Last Meeting  -->
  <div
    class="vue-side mentoring-scroll shadow"
    :class="modal == 'add' ? 'active' : ''"
  >
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-0">Last Meeting Minutes</h6>
      <div class="text-end">
        <i class="bi bi-x-circle text-danger pointer" @click="modal = ''"></i>
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
      </div>
      <hr />
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
  name: "upcoming",
  props: {
    meeting: Object,
  },
  data() {
    return {
      modal: "",
      view_pw: [],
      reason: "",
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
    goto(link) {
      window.open(link, "_balnk");
    },

    cancelMeeting(id) {
      this.meeting_id = id;
      this.modal = "cancel";
    },

    async handleCancel() {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "mentor/cancel/activities/" + this.meeting_id,
          {
            status: "cancel",
            reason: this.reason,
          }
        );

        this.modal = "";
        this.reason = "";
        this.$emit("check", "history");
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        // console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
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
        this.$alert.toast("success", response.data.message);
        setTimeout(() => {
          this.handleFinish(this.meeting_minutes.st_act_id);
        }, 3000);
        // console.log(response);
      } catch (e) {
        if (e.response.status == 400) {
          this.error = e.response.data.error;
        } else {
          this.modal = "";
        }
        this.$alert.toast("error", "Please try again.");
      }
    },

    async handleFinish(id) {
      try {
        await this.$axios.put("update/status/1-on-1-call/" + id);
        this.$emit("check", "history");
        // this.$alert.toast("success", response.data.message);
      } catch (e) {
        // console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {},
};
</script>

<style scoped>
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