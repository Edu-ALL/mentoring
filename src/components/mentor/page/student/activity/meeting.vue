<template>
  <!-- {{ student_meeting }} -->
  <div id="meetings">
    <div class="border p-2 rounded mt-3">
      <div class="table-responsive">
        <table class="table table-bordered align-middle">
          <thead>
            <tr class="text-center align-middle">
              <th>No</th>
              <th class="sticky-table">Call with</th>
              <th>Subject</th>
              <th>Date & Time</th>
              <th>Academic Performance</th>
              <th>Exploration</th>
              <th>Writing Skill</th>
              <th>Personal Brand</th>
              <th>Mentor Todos</th>
              <th>Mentee Todos</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="text-center"
              v-for="(i, index) in student_meeting.data"
              :key="index"
            >
              <td class="sticky-table">{{ parseInt(index) + 1 }}</td>

              <td
                nowrap
                class="text-start sticky-table"
                style="text-transform: capitalize"
              >
                {{ i.users.first_name + " " + i.users.last_name }}
              </td>
              <td style="text-transform: capitalize">{{ i.module }}</td>
              <td nowrap>
                <small>
                  {{ $customDate.date(i.call_date) }} <br />
                  {{ $customDate.time(i.call_date) }}
                </small>
              </td>
              <td class="text-start">
                <span v-if="i.meeting_minutes?.academic_performance == null"
                  >-</span
                >
                <div
                  style="width: 500px"
                  class="py-0 my-0"
                  v-if="i.meeting_minutes"
                  v-html="i.meeting_minutes.academic_performance"
                ></div>
              </td>
              <td class="text-start">
                <span v-if="i.meeting_minutes?.exploration == null">-</span>
                <div
                  style="width: 500px"
                  class="py-0 my-0"
                  v-if="i.meeting_minutes"
                  v-html="i.meeting_minutes.exploration"
                ></div>
              </td>
              <td class="text-start">
                <span v-if="i.meeting_minutes?.writing_skills == null">-</span>
                <div
                  style="width: 500px"
                  class="py-0 my-0"
                  v-if="i.meeting_minutes"
                  v-html="i.meeting_minutes.writing_skills"
                ></div>
              </td>
              <td class="text-start">
                <span v-if="i.meeting_minutes?.personal_brand == null">-</span>
                <div
                  style="width: 500px"
                  class="py-0 my-0"
                  v-if="i.meeting_minutes"
                  v-html="i.meeting_minutes.personal_brand"
                ></div>
              </td>
              <td class="text-start">
                <span v-if="i.meeting_minutes?.mt_todos_note == null">-</span>
                <div
                  style="width: 500px"
                  class="py-0 my-0"
                  v-if="i.meeting_minutes"
                  v-html="i.meeting_minutes.mt_todos_note"
                ></div>
              </td>
              <td class="text-start">
                <span v-if="i.meeting_minutes?.st_todos_note == null">-</span>
                <div
                  style="width: 500px"
                  class="py-0 my-0"
                  v-if="i.meeting_minutes"
                  v-html="i.meeting_minutes.st_todos_note"
                ></div>
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
      <div
        class="text-center p-4 text-muted"
        v-if="student_meeting.length == 0"
      >
        No meeting yet
      </div>
      <v-pagination :datas="student_meeting" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "studentMeeting",
  props: {
    menus: Object,
  },
  data() {
    return {
      student_meeting: [],
    };
  },

  methods: {
    async getData() {
      this.$Progress.start();
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get("../v2/list/meeting-log/" + id);
        this.student_meeting = response.data.data;
        this.$Progress.finish();
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getPage(link) {
      this.student_meeting = [];
      this.$Progress.start();
      try {
        const response = await this.$axios.get(link);

        this.$Progress.finish();
        this.student_meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e);
      }
      this.$Progress.fail();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
td.sticky-table {
  position: sticky;
  left: 0px;
  background-color: rgb(246, 246, 246) !important;
  z-index: 1 !important;
  font-weight: 500;
  color: #000 !important;
}

.table-responsive {
  overflow: auto !important;
  max-height: 500px !important;
}

.table-responsive thead th {
  position: sticky !important;
  top: 0 !important;
  z-index: 2 !important;
}

.table-responsive thead th.sticky-table {
  position: sticky !important;
  left: 0 !important;
  z-index: 3 !important;
  background: #91a3cf !important;
}
</style>
