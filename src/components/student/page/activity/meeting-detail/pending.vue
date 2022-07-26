<template>
  <div id="pending">
    <div class="container">
      <!-- Empty  -->
      <div class="row" v-if="data.data?.length == 0">
        <div class="col py-4 text-center">
          <span class="text-muted">No meeting yet.</span>
        </div>
      </div>

      <!-- Data  -->
      <div class="table-responsive" v-if="data.data?.length != 0">
        <table class="table">
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
              <td style="text-transform: capitalize">
                <small class="text-info">
                  <i class="fa-solid fa-clock"></i>
                  {{ i.mt_confirm_status }}
                </small>
              </td>
              <td>
                <button
                  class="btn-mentoring btn-sm btn-type-1 mx-1 mt-1 py-1"
                  @click="cancelMeeting(i.id)"
                >
                  Cancel
                </button>
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

    <!-- MODAL -->

    <!-- Cancel Meeting  -->
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'cancel'">
        <div class="text-center">
          <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          <h5 class="mt-2">Are you sure to cancel this meeting?</h5>
          <div class="mt-3">
            <button
              class="btn-mentoring btn-warning btn-sm py-1 mx-1"
              @click="modal = ''"
            >
              Cancel</button
            ><button
              class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
              @click="handleCancel"
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
  name: "pending",
  props: {
    new_meeting: String,
  },
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
          "student/list/activities/1-on-1-call/pending"
        );

        this.data = response.data.data;
        // console.log(response.data.data);
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
      this.meeting_id = id;
      this.modal = "cancel";
    },

    async handleCancel() {
      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "student/cancel/activities/" + this.meeting_id,
          {
            person: "student",
          }
        );

        this.getData();

        this.$alert.toast("success", response.data.message);
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

  updated() {
    if (this.new_meeting) {
      this.getData();
    }
  },
};
</script>

<style>
</style>