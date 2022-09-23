<template>
  <div id="history">
    <div class="container p-1" v-if="meeting_data.data">
      <div class="d-flex mb-2 justify-content-end">
        <div class="form-check">
          <input
            class="form-check-input"
            v-model="status"
            type="checkbox"
            value="finished"
            id="finish"
            @change="filterStatus"
          />
          <label class="form-check-label ms-1" for="finish"> Finished </label>
        </div>
        <div class="form-check ms-2">
          <input
            class="form-check-input"
            v-model="status"
            type="checkbox"
            value="canceled"
            id="cancel"
            @change="filterStatus"
          />
          <label class="form-check-label ms-1" for="cancel"> Canceled </label>
        </div>
        <div class="form-check ms-2">
          <input
            class="form-check-input"
            v-model="status"
            type="checkbox"
            value="rejected"
            id="reject"
            @change="filterStatus"
          />
          <label class="form-check-label ms-1" for="reject"> Rejected </label>
        </div>
      </div>

      <!-- Empty  -->
      <div class="row" v-if="meeting_data.data?.length == 0">
        <div class="col py-4 text-center">
          <span class="text-muted">No meeting yet.</span>
        </div>
      </div>

      <div class="table-responsive" v-if="meeting_data.data?.length != 0">
        <table class="table table-bordered table-hover">
          <thead>
            <tr class="text-center">
              <th width="3%">No</th>
              <th>Call With</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th width="17%">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(i, index) in meeting_data.data"
              :key="index"
              class="text-center align-middle"
            >
              <td>{{ parseInt(index) + 1 }}</td>
              <td class="text-start" nowrap style="text-transform: capitalize">
                {{
                  i.users.first_name +
                  " " +
                  i.users.last_name +
                  " - " +
                  i.call_with
                }}
              </td>
              <td nowrap class="text-start" style="text-transform: capitalize">
                {{ i.module }}
              </td>
              <td nowrap>{{ $customDate.date(i.start_call_date) }}</td>
              <td nowrap>
                {{
                  $customDate.time(i.start_call_date) +
                  " - " +
                  $customDate.time(i.end_call_date)
                }}
              </td>
              <td nowrap style="text-transform: capitalize">
                <i
                  class="fa-solid fa-ban text-danger"
                  v-if="i.call_status == 'rejected'"
                ></i>
                <i
                  class="fa-solid fa-clock text-info"
                  v-if="i.call_status == 'waiting'"
                ></i>
                <i
                  class="fa-solid fa-times-circle text-danger"
                  v-if="i.call_status == 'canceled'"
                ></i>
                <i
                  class="fa-solid fa-check-circle text-success"
                  v-if="i.call_status == 'finished'"
                ></i>
                {{ i.call_status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination  -->
      <v-pagination :datas="meeting_data" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      modal: "",
      meeting_id: "",
      meeting_data: [],
      status: [],
    };
  },
  methods: {
    goto(link) {
      window.open(link, "blank");
    },

    async getData() {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(
          "student/list/activities/1-on-1-call/history"
        );
        this.$Progress.finish();
        this.meeting_data = response.data.data;
        console.log(this.meeting_data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getPage(link) {
      if (link) {
        // alert(link);
        // this.meeting_data = [];
        this.$Progress.start();
        try {
          const response = await this.$axios.get(link);
          this.$Progress.finish();
          this.meeting_data = response.data.data;
          console.log(this.meeting_data);
        } catch (e) {
          this.$Progress.fail();
          console.log(e.response);
        }
      }
    },

    cancelMeeting(id) {
      alert(id);
      this.modal = "cancel";
    },

    async filterStatus() {
      let status = this.status.toString();
      this.$Progress.start();
      this.meeting_data = [];
      try {
        const response = await this.$axios.get(
          "student/list/activities/1-on-1-call/history?filter=" + status
        );
        this.$Progress.finish();
        this.meeting_data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
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