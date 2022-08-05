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
            <div
              class="col-6 text-center p-4"
              v-if="student_meeting.length == 0"
            >
              No meeting yet
            </div>
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
      <!-- <nav class="mt-3" v-if="student_meeting.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="student_meeting.current_page != 1">
            <a class="page-link" @click="getPage(student_meeting.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(i, index) in student_meeting.last_page" :key="index">
            <li
              class="page-item"
              v-if="
                student_meeting.current_page - 2 < i &&
                student_meeting.current_page + 2 > i
              "
            >
              <a
                class="page-link"
                :class="
                  student_meeting.current_page == i
                    ? 'bg-primary text-white'
                    : ''
                "
                href="#"
                @click="
                  getPage(
                    student_meeting.path +
                      '?student=' +
                      menus.submenu +
                      '&page=' +
                      i
                  )
                "
                >{{ i }}</a
              >
            </li>
          </div>
          <li
            class="page-item"
            v-if="student_meeting.current_page != student_meeting.last_page"
          >
            <a
              class="page-link"
              @click="getPage(student_meeting.next_page_url)"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav> -->
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
      this.$alert.loading();
      const id = this.menus.submenu;
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
