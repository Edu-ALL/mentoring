<template>
  <div id="request">
    <div class="container">
      <!-- Empty  -->
      <div class="row" v-if="data.data?.length == 0">
        <div class="col py-4 text-center">
          <span class="text-muted">No meeting yet.</span>
        </div>
      </div>

      <div class="table-responsive" v-if="data.data?.length != 0">
        <table class="table table-bordered table-hover">
          <thead>
            <tr class="text-center">
              <th width="3%">No</th>
              <th>Call With</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th width="17%">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(i, index) in data.data"
              :key="index"
              class="text-center align-middle"
            >
              <td>{{ index + 1 }}</td>
              <td class="text-start" nowrap style="text-transform: capitalize">
                {{
                  i.users.first_name +
                  " " +
                  i.users.last_name +
                  " - " +
                  i.call_with
                }}
              </td>
              <td nowrap style="text-transform: capitalize">{{ i.module }}</td>
              <td nowrap>{{ $customDate.date(i.call_date) }}</td>
              <td nowrap>{{ $customDate.time(i.call_date) }}</td>
              <td nowrap>
                <button
                  class="btn-mentoring btn-sm btn-success mx-1 py-1"
                  @click="handleAccept(i.id)"
                >
                  Accept
                </button>
                <button
                  class="btn-mentoring btn-sm btn-danger mx-1 py-1"
                  @click="rejectMeeting(i.id)"
                >
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination  -->
      <v-pagination :datas="data" @result="getPage" />
    </div>

    <!-- MODAL -->
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'reject'">
        <div class="text-center">
          <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          <h5 class="mt-2">Are you sure to reject this meeting?</h5>
          <div class="mt-3">
            <button
              class="btn-mentoring btn-warning btn-sm py-1 mx-1"
              @click="modal = ''"
            >
              Cancel</button
            ><button
              class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
              @click="handleReject"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "request",
  data() {
    return {
      modal: "",
      meeting_id: "",
      data: [],
    };
  },
  methods: {
    async getData() {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "student/list/activities/1-on-1-call/new"
        );

        this.data = response.data.data;
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
    },

    async getPage(link) {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(link);

        this.data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
    },

    async handleAccept(id) {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "student/confirmation/activities/" + id,
          {
            person: "student",
          }
        );

        if (response.data.success) {
          this.$emit("summary", "new");
          this.$emit("tab", "upcoming");
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }

        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    rejectMeeting(id) {
      this.meeting_id = id;
      this.modal = "reject";
    },

    async handleReject() {
      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "student/reject/activities/" + this.meeting_id,
          {
            person: "student",
          }
        );

        if (response.data.success) {
          this.getData();
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>