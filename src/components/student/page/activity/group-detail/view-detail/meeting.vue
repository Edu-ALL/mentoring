<template>
  <div id="groupMeeting">
    <div class="row">
      <div class="col-6">
        <h6>Group Meeting</h6>
      </div>
      <div class="col-6" v-if="group.student_id == student.id">
        <div class="text-end">
          <i
            class="fa-solid fa-add pointer"
            @click="modal = 'new-meeting'"
            v-if="menu.key == 'progress'"
          ></i>
        </div>
      </div>
      <div class="col-12 text-center p-4" v-if="meetings.length == 0">
        No group meeting yet
      </div>
      <div class="col-12 mt-2">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(i, index) in meetings"
            :key="index"
          >
            <div class="row align-items-center">
              <div class="col-md-3 col-12 p-0">
                <div :class="i.status == 0 ? 'meeting-subject' : ''">
                  {{ i.meeting_subject }}
                  <i
                    class="bi bi-x-circle ms-2 text-end text-danger"
                    v-if="group.student_id == student.id && i.status == 0"
                  ></i>
                  <div
                    class="cancel justify-content-center"
                    @click="cancelModal(i.id)"
                    v-if="i.status == 0"
                  >
                    <div class="text-center">Cancel</div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-11 text-md-center">
                {{ $customDate.date(i.start_meeting_date) }} <br />
                <small>
                  {{
                    $customDate.time(i.start_meeting_date) +
                    " - " +
                    $customDate.time(i.end_meeting_date)
                  }}
                </small>
              </div>
              <div class="col-md-3 text-md-center">
                <div class="text-primary" v-if="i.status == 0">Upcoming</div>
                <div class="text-success" v-if="i.status == 1">Completed</div>
                <div class="text-danger" v-if="i.status == 2">Canceled</div>
              </div>
              <div class="col-md-2 text-md-end p-0">
                <button
                  :class="i.status != 0 ? 'bg-light text-muted' : 'bg-primary'"
                  :disabled="i.status != 0"
                  class="btn-mentoring py-1 px-4"
                  @click="join(i.meeting_link)"
                >
                  Join
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''"></div>
    <!-- New Meeting  -->
    <transition name="pop">
      <div class="vue-modal vue-modal-sm" v-if="modal == 'new-meeting'">
        <form method="post" @submit.prevent="handleSubmit">
          <h5>New Group Meeting</h5>
          <hr class="my-0 mb-3" />
          <div class="mb-3">
            <input-group>
              <input
                type="text"
                class="form-mentoring form-control w-100"
                required
                placeholder="fill in here"
                v-model="meeting.meeting_subject"
                id="subject"
              />
              <label for="subject">Meeting Subject</label>
            </input-group>
          </div>

          <div class="mb-3">
            <div class="row g-2">
              <div class="col-12 mb-2">
                <input-group>
                  <input
                    :type="input.date"
                    class="form-mentoring form-control w-100"
                    v-model="meeting_date.date"
                    :min="this.$customDate.todayDate()"
                    required
                    placeholder="fill in here"
                    @focus="input.date = 'date'"
                    @blur="input.date = 'text'"
                    id="date"
                  />
                  <label for="date">Meeting Date</label>
                </input-group>
              </div>
              <div class="col-6">
                <input-group>
                  <input
                    :type="input.start"
                    class="form-mentoring form-control w-100"
                    v-model="meeting_date.start"
                    required
                    placeholder="fill in here"
                    @focus="input.start = 'time'"
                    @blur="input.start = 'text'"
                    id="time"
                    :disabled="meeting_date.date == ''"
                  />
                  <label for="time">Start Time</label>
                </input-group>
              </div>
              <div class="col-6">
                <input-group>
                  <input
                    :type="input.end"
                    class="form-mentoring form-control w-100"
                    v-model="meeting_date.end"
                    required
                    placeholder="fill in here"
                    @focus="input.end = 'time'"
                    @blur="input.end = 'text'"
                    id="end"
                    :disabled="meeting_date.start == ''"
                  />
                  <label for="end">End Time</label>
                </input-group>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <input-group>
              <input
                type="url"
                class="form-mentoring form-control w-100"
                v-model="meeting.meeting_link"
                required
                placeholder="fill in here"
                id="link"
              />
              <label for="link">Location Link</label>
            </input-group>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <button
                type="button"
                class="btn-mentoring btn-sm py-1 btn-outline-danger"
                @click="modal = ''"
              >
                <i class="bi bi-x-circle me-1"></i>
                Cancel
              </button>
            </div>
            <div class="col-6 text-end">
              <button
                type="submit"
                class="btn-mentoring btn-sm py-1 btn-success"
              >
                <i class="bi bi-save me-1"></i>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <!-- Cancel Meeting  -->
    <transition name="pop">
      <div
        class="vue-modal vue-modal-sm bg-primary text-center"
        v-if="modal == 'cancel-meeting'"
      >
        <i class="fa-solid fa-circle-exclamation mx-1 fa-2xl"></i>
        <h6 class="mt-3 mb-3 text-white">
          Are you sure you want to cancel this meeting?
        </h6>
        <button
          class="btn-mentoring btn-sm py-1 btn-danger mx-1"
          @click="modal = ''"
        >
          No
        </button>
        <button
          class="btn-mentoring btn-sm py-1 btn-outline-success mx-1"
          @click="handleCancel()"
        >
          Yes, Cancel
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "meeting",
  props: {
    menu: Object,
    data: Object,
    group: Object,
    student: Object,
  },
  data() {
    return {
      modal: "",
      meeting_id: "",
      meetings: [],
      meeting: {
        group_id: "",
        meeting_subject: "",
        start_date: "",
        end_date: "",
        meeting_link: "",
        status: "0",
      },
      meeting_date: {
        date: "",
        start: "",
        end: "",
      },
      input: { date: "text", start: "text", end: "text" },
    };
  },
  methods: {
    async handleSubmit() {
      this.modal = "";
      this.meeting.group_id = this.group.id;
      // Start Date
      this.meeting.start_date =
        this.meeting_date.date + " " + this.meeting_date.start;
      this.meeting.start_date = moment(this.meeting.start_date).format(
        "YYYY-MM-DD HH:mm"
      );
      // End Date
      this.meeting.end_date =
        this.meeting_date.date + " " + this.meeting_date.end;
      this.meeting.end_date = moment(this.meeting.end_date).format(
        "YYYY-MM-DD HH:mm"
      );

      // console.log(this.meeting);

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/group/project/meeting",
          this.meeting
        );

        if (response.data.success) {
          this.meeting.meeting_subject = "";
          this.meeting.meeting_link = "";
          this.meeting_date.date = "";
          this.meeting_date.start = "";
          this.meeting_date.end = "";

          // console.log(response.data);
          this.$alert.toast("success", response.data.message);
          setTimeout(() => {
            this.$emit("check", "new");
          }, 3000);
        } else {
          this.modal = "new-meeting";

          this.meeting_date.date = "";
          this.meeting_date.start = "";
          this.meeting_date.end = "";

          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },

    cancelModal(i) {
      this.modal = "cancel-meeting";
      this.meeting_id = i;
    },

    async handleCancel() {
      this.modal = "";

      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "student/group/project/meeting/" + this.meeting_id
        );

        // console.log(response.data);
        this.$alert.toast("success", response.data.message);
        setTimeout(() => {
          this.$emit("check", "new");
        }, 3000);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },

    join(link) {
      window.open(link, "_blank");
    },
  },
  updated() {
    this.meetings = this.data;
  },

  created() {
    this.meetings = this.data;
  },
};
</script>

<style scoped>
.list-group {
  font-size: 0.8em;
}

.meeting-subject {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
}

.cancel {
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(254, 123, 123, 0.907);
  color: white;
  font-weight: bold;
  transition: all 0.5s;
}

.meeting-subject:hover .cancel {
  left: 0 !important;
}
</style>