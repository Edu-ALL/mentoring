<template>
  <div id="webinars">
    <div class="border p-3 rounded mt-3">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Topic</th>
              <th>Category</th>
              <th>Date & Time</th>
              <th>Duration</th>
              <th>Long Time Watching</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-if="student_webinar?.data?.length == 0">
              <td class="text-muted" colspan="6">No data!</td>
            </tr>
            <tr
              class="text-center"
              v-for="(i, index) in student_webinar.data"
              :key="index"
            >
              <td>{{ index + 1 }}</td>
              <td nowrap>{{ i.programme_details.dtl_name }}</td>
              <td nowrap style="text-transform: capitalize">
                {{ $customText.removeDash(i.programme_details.dtl_category) }}
              </td>
              <td>
                <small>
                  {{ $customDate.date(i.created_at) }} <br />
                  {{ $customDate.time(i.created_at) }}
                </small>
              </td>
              <td>
                {{ convertTime(i.watch_detail.video_duration) }}
              </td>
              <td>
                {{ convertTime(i.watch_detail.current_time) }}
              </td>
              <td nowrap>
                <button
                  class="btn-mentoring btn-sm py-1 px-3"
                  :class="
                    percentage(
                      i.watch_detail.current_time,
                      i.watch_detail.video_duration
                    ) > 95
                      ? 'bg-primary'
                      : 'bg-secondary'
                  "
                  :disabled="
                    percentage(
                      i.watch_detail.current_time,
                      i.watch_detail.video_duration
                    ) > 95
                  "
                >
                  {{
                    percentage(
                      i.watch_detail.current_time,
                      i.watch_detail.video_duration
                    ) > 95
                      ? "Completed"
                      : "In Progress"
                  }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <v-pagination :datas="student_webinar" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "webinarHistory",
  data() {
    return {
      student_webinar: [],
    };
  },

  methods: {
    async getData() {
      this.$Progress.start();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "mentor/list/activities/webinar?student=" + id
        );
        this.student_webinar = response.data.data;
        this.$Progress.finish();
        // console.log(response);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    convertTime(i) {
      var secs = Math.round(i);
      var hours = Math.floor(secs / (60 * 60));

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var time =
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
      return time;
    },

    percentage(time, duration) {
      var percent = (time / duration) * 100;
      return percent;
    },
  },

  created() {
    this.getData();
  },
};
</script>
