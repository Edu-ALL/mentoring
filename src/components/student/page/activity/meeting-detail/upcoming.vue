<template>
  <div id="upcoming">
    <div class="container p-1" v-if="data.data">
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
              <th>Password</th>
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
              <td nowrap>{{ $customDate.date(i.start_call_date) }}</td>
              <td nowrap>
                {{
                  $customDate.time(i.start_call_date) +
                  " - " +
                  $customDate.time(i.end_call_date)
                }}
              </td>
              <td nowrap>
                <div class="" v-if="view_pw[index]">
                  {{ i.location_pw }}
                  <i
                    class="fa-solid fa-eye ms-2 pointer"
                    @click="view_pw[index] = !view_pw[index]"
                  ></i>
                </div>

                <div class="" v-if="!view_pw[index]">
                  ***
                  <i
                    class="fa-solid fa-eye-slash ms-2 pointer"
                    @click="view_pw[index] = !view_pw[index]"
                  ></i>
                </div>
              </td>
              <td nowrap>
                <button
                  class="btn-mentoring btn-sm btn-type-1 mx-1 py-1"
                  @click="goto(i.location_link)"
                >
                  Join
                </button>
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
  name: "upcoming",
  data() {
    return {
      modal: "",
      view_pw: [],
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
          "student/list/activities/1-on-1-call/upcoming"
        );

        this.$Progress.finish();
        this.data = response.data.data;
        this.data.data.forEach(() => {
          this.view_pw.push(false);
        });

        // console.log(this.view_pw);
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