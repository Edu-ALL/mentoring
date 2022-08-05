<template>
  <!-- {{ student_meeting }} -->
  <div id="meetings">
    <div class="border p-3 rounded mt-3">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Call with</th>
              <th>Subject</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-if="student_meeting?.data?.length == 0">
              <td class="text-muted" colspan="5">No data!</td>
            </tr>
            <tr
              class="text-center"
              v-for="(i, index) in student_meeting.data"
              :key="index"
            >
              <td>{{ parseInt(index) + 1 }}</td>

              <td>
                {{
                  i.users.first_name +
                  " " +
                  i.users.last_name +
                  " - " +
                  i.call_with
                }}
              </td>
              <td style="text-transform: capitalize">{{ i.module }}</td>
              <td>
                <small>
                  {{ $customDate.date(i.call_date) }} <br />
                  {{ $customDate.time(i.call_date) }}
                </small>
              </td>
              <td style="text-transform: capitalize">
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

      <v-pagination :datas="student_meeting" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "studentMeeting",
  data() {
    return {
      student_meeting: [],
    };
  },

  methods: {
    async getData() {
      this.$alert.loading();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "mentor/list/activities/1-on-1-call?student=" + id
        );
        this.student_meeting = response.data.data;
        this.$alert.close();
        // console.log(response);
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },

    async getPage(link) {
      this.student_meeting = [];
      this.$alert.loading();
      try {
        const response = await this.$axios.get(link);

        this.student_meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      this.$alert.close();
    },
  },
  created() {
    this.getData();
  },
};
</script>
