<template>
  <div id="pending" v-if="meeting?.data?.length >= 0">
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
            <td style="text-transform: capitalize">
              <small class="text-info">
                <i class="fa-solid fa-clock"></i>
                {{ i.call_status }}
              </small>
            </td>
            <td nowrap>
              <button
                class="
                  btn-mentoring btn-sm btn-outline-danger
                  mt-1
                  py-1
                  ps-1
                  pe-2
                "
                @click="cancelMeeting(i.id)"
              >
                <i class="bi bi-x-circle me-1"></i>
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
      reason: "",
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
          {
            status: "cancel",
            reason: this.reason,
          }
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