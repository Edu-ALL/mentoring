<template>
  <div id="history">
    <div class="container p-1" v-if="data.data?.length >= 0">
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
              <th width="17%">Status</th>
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
      <v-pagination :datas="data" @result="getPage" />
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
      data: [],
    };
  },
  methods: {
    goto(link) {
      window.open(link, "_balnk");
    },

    async getData() {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(
          "student/list/activities/1-on-1-call/history"
        );
        this.$Progress.finish();
        this.data = response.data.data;
        // console.log(this.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getPage(link) {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(link);
        this.$Progress.finish();
        this.data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    cancelMeeting(id) {
      alert(id);
      this.modal = "cancel";
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style>
</style>