<template>
  <div id="groupMeeting">
    <div class="row">
      <div class="col-6">
        <h6>Group Meeting</h6>
      </div>
      <div class="col-6">
        <div class="text-end">
          <i class="fa-solid fa-add pointer"></i>
        </div>
      </div>
      <!-- <div class="col-12 text-center p-4" v-if="meetings.length == 0">
        No group meeting yet
      </div> -->
      <div class="col-12 mt-2">
        <ul class="list-group">
          <li class="list-group-item" v-for="i in 5" :key="i">
            <div class="row align-items-center">
              <div class="col-1">{{ i }}</div>
              <div class="col-md-3 col-12 p-0">
                <div class="meeting-subject">
                  Meeting Subject
                  <div
                    class="cancel justify-content-center"
                    @click="cancelModal(i.id)"
                  >
                    <div class="text-center">Cancel</div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-11 text-md-center">
                24 July 2022 <br />
                16:00 WIB
              </div>
              <div class="col-md-3 text-md-center">
                <div class="text-primary">Upcoming</div>
                <div class="text-success">Completed</div>
                <div class="text-danger">Canceled</div>
              </div>
              <div class="col-md-2 text-md-end">
                <button class="btn-mentoring py-1 px-4" @click="join(i)">
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
      <div
        class="vue-modal vue-modal-sm bg-secondary"
        v-if="modal == 'new-meeting'"
      >
        <form method="post" @submit.prevent="handleSubmit">
          <h5>New Group Meeting</h5>
          <hr class="my-0 mb-3" />
          <div class="mb-2">
            <input-group>
              <input
                type="text"
                class="form-mentoring w-100"
                required
                v-model="meeting.meeting_subject"
              />
              <label class="bg-secondary text-white">Meeting Subject</label>
            </input-group>
          </div>

          <div class="mb-2">
            <input-group>
              <input
                :type="input.meeting"
                :min="this.$customDate.tomorrow()"
                class="form-mentoring w-100"
                v-model="meeting.meeting_date"
                required
                @focus="input.meeting = 'datetime-local'"
                @blur="input.meeting = 'text'"
              />
              <label class="bg-secondary text-white">Meeting Date</label>
            </input-group>
          </div>

          <div class="mb-3">
            <input-group>
              <input
                type="text"
                class="form-mentoring w-100"
                v-model="meeting.meeting_link"
                required
              />
              <label class="bg-secondary text-white">Location Link</label>
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
                Cancel
              </button>
            </div>
            <div class="col-6 text-end">
              <button
                type="submit"
                class="btn-mentoring btn-sm py-1 btn-success"
              >
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
        <h5 class="mt-3 mb-3">Are you sure to cancel this meeting?</h5>
        <button
          class="btn-mentoring btn-sm py-1 btn-danger mx-1"
          @click="modal = ''"
        >
          Cancel
        </button>
        <button
          class="btn-mentoring btn-sm py-1 btn-outline-success mx-1"
          @click="handleCancel()"
        >
          Yes
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
        meeting_date: "",
        meeting_link: "",
        status: "0",
      },
      input: { meeting: "text" },
    };
  },
  methods: {
    async handleSubmit() {
      this.modal = "";
      this.meeting.group_id = this.group.id;
      this.meeting.meeting_date = moment(this.meeting.meeting_date).format(
        "YYYY-MM-DD HH:mm"
      );

      // console.log(this.meeting);

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/group/project/meeting",
          this.meeting
        );

        this.meeting.meeting_subject = "";
        this.meeting.meeting_link = "";

        console.log(response.data);
        this.$emit("check", "new");
        this.$alert.toast("success", response.data.message);
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

        console.log(response.data);
        this.$emit("check", "new");
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
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
input-group input:focus,
input-group textarea:focus {
  border: 2px solid #fff;
}

input::placeholder {
  color: rgb(237, 237, 237) !important;
  font-size: 0.8em;
}

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