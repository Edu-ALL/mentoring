<template>
  <div id="history">
    <div class="container">
      <!-- Empty  -->
      <div class="row" v-if="data.data?.length == 0">
        <div class="col py-4 text-center">
          <span class="text-muted">No meeting yet.</span>
        </div>
      </div>

      <div class="table-responsive" v-if="data.data?.length != 0">
        <table class="table">
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
      <nav class="mt-3" v-if="data.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="data.current_page != 1">
            <a class="page-link" @click="getPage(data.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(i, index) in data.last_page" :key="index">
            <li
              class="page-item"
              v-if="data.current_page - 2 < i && data.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="data.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(data.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="data.current_page != data.last_page">
            <a class="page-link" @click="getPage(data.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
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
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "student/list/activities/1-on-1-call/history"
        );

        this.data = response.data.data;
        // console.log(this.data);
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