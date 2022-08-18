<template>
  <div id="pending">
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
            <th>Status</th>
            <th>Action</th>
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
            <td nowrap style="text-transform: capitalize">
              {{ i.module }}
            </td>
            <td nowrap>
              {{ $customDate.date(i.call_date) }}
            </td>
            <td nowrap>
              {{ $customDate.time(i.call_date) }}
            </td>
            <td style="text-transform: capitalize">
              <small class="text-info">
                <i class="fa-solid fa-clock"></i>
                {{ i.call_status }}
              </small>
            </td>
            <td>
              <button
                class="btn-mentoring btn-sm btn-outline-danger mx-1 mt-1 py-1"
                @click="cancelMeeting(i.id)"
              >
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Cancel Meeting  -->
  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <transition name="pop">
    <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'cancel'">
      <div class="text-center">
        <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
        <h5 class="mt-2">Are you sure to cancel this meeting?</h5>
        <div class="mt-3">
          <button
            class="btn-mentoring btn-warning btn-sm py-1 mx-1"
            @click="modal = ''"
          >
            Cancel</button
          ><button
            class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
            @click="handleCancel"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "pending",
  props: {
    meeting: Object,
  },
  data() {
    return {
      modal: "",
      meeting_id: "",
    };
  },
  methods: {
    async getData() {
      // const response = await this.$axios.get('')
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
          { staus: "cancel" }
        );

        this.modal = "";
        this.$emit("check", "pending");
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        // console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    // this.modal = "cancel";
    // this.$alert.loading();
  },
};
</script>

<style>
</style>