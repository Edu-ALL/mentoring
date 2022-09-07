<template>
  <div id="meeting">
    <!-- Tabs  -->
    <div class="row mt-1">
      <div class="col-12">
        <div class="d-flex align-items-center justify-content-between">
          <div class="">
            <button class="btn btn-sm py-1 btn-type-3" @click="modal = 'new'">
              <i class="fa-solid fa-add me-1"></i> New Meeting
            </button>
          </div>
          <div
            class="mentoring-scroll overflow-auto py-2 w-50 text-end"
            style="white-space: nowrap"
          >
            <button
              class="btn btn-sm mx-1 py-1 px-3"
              :class="tab == 'pending' ? 'btn-type-1' : 'btn-type-2'"
              @click="goTab('pending')"
            >
              Pending
              <div class="badge bg-primary ms-2" v-if="summary.pending > 0">
                {{ summary.pending }}
              </div>
            </button>
            <button
              class="btn btn-sm mx-1 py-1 px-3"
              :class="tab == 'upcoming' ? 'btn-type-1' : 'btn-type-2'"
              @click="goTab('upcoming')"
            >
              Upcoming
              <div class="badge bg-primary ms-2" v-if="summary.upcoming > 0">
                {{ summary.upcoming }}
              </div>
            </button>
            <button
              class="btn btn-sm mx-1 py-1 px-3"
              :class="tab == 'history' ? 'btn-type-1' : 'btn-type-2'"
              @click="goTab('history')"
            >
              History
              <div class="badge bg-primary ms-2" v-if="summary.history > 0">
                {{ summary.history }}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border p-2">
      <!-- Data  -->

      <!-- Pending  -->
      <v-pending
        v-if="tab == 'pending'"
        :meeting="meeting_data"
        @check="checkData"
      />

      <!-- Upcoming  -->
      <v-upcoming
        v-if="tab == 'upcoming'"
        :meeting="meeting_data"
        @check="checkData"
      />

      <!-- History  -->
      <v-history
        v-if="tab == 'history'"
        :meeting="meeting_data"
        @filter="filterStatus"
        @check="checkData"
      />

      <!-- Pagination  -->
      <v-pagination :datas="meeting_data" @result="getPage" />
    </div>
  </div>

  <!-- Modal  -->
  <div class="vue-modal-overlay" v-if="modal != ''"></div>

  <!-- ADD Meeting -->
  <transition name="pop">
    <div
      class="vue-modal vue-modal-lg"
      style="min-height: 300px"
      v-if="modal == 'new'"
    >
      <h5>New Meeting</h5>
      <hr class="my-1 mb-3" />

      <form method="post" @submit.prevent="handleSubmit">
        <div class="row g-2">
          <div class="col-md-4">
            <div class="mt-1 mb-1">
              <multiselect
                v-model="user_select"
                :options="user_list"
                placeholder="Select one mentee"
                deselect-label=""
                select-label=""
                track-by="id"
                :custom-label="customLabel"
                :searchable="true"
                :allow-empty="true"
                @select="checkUser"
                style="margin-top: 13px"
              >
              </multiselect>
              <small class="text-danger" v-if="error_form.student_id">{{
                error_form.student_id[0]
              }}</small>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row g-2">
              <div class="col-md-6">
                <div class="mt-1 mb-1">
                  <input-group>
                    <input
                      v-model="meeting_date.date"
                      :min="this.$customDate.todayDate()"
                      :type="input.meeting"
                      class="form-control form-mentoring w-100"
                      required
                      placeholder="fill in here.."
                      @focus="input.meeting = 'date'"
                      @blur="input.meeting = 'text'"
                      id="meetingDate"
                    />
                    <label for="meetingDate">Meeting Date</label>
                  </input-group>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="mt-1 mb-1">
                  <input-group>
                    <input
                      v-model="meeting_date.start"
                      :type="input.start"
                      class="form-control form-mentoring w-100"
                      @focus="input.start = 'time'"
                      @blur="input.start = 'text'"
                      required
                      placeholder="fill in here.."
                      id="endTime"
                      :disabled="meeting_date.date == ''"
                    />
                    <label for="endTime">Start Time</label>
                  </input-group>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="mt-1 mb-1">
                  <input-group>
                    <input
                      v-model="meeting_date.end"
                      :type="input.end"
                      class="form-control form-mentoring w-100"
                      @focus="input.end = 'time'"
                      @blur="input.end = 'text'"
                      required
                      placeholder="fill in here.."
                      id="meetingTime"
                      :max="meeting_date.start"
                      :disabled="meeting_date.start == ''"
                    />
                    <label for="meetingTime">End Time</label>
                  </input-group>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="mt-1 mb-1">
              <input-group>
                <input
                  v-model="call_data.location_link"
                  type="url"
                  class="form-control form-mentoring w-100"
                  required
                  placeholder="fill in here.."
                  id="meetingLocation"
                />
                <label for="meetingLocation">Location Link</label>
                <small class="text-danger" v-if="error_form?.location_link">
                  {{ error_form.location_link[0] }}
                </small>
              </input-group>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mt-1 mb-1">
              <input-group>
                <input
                  v-model="call_data.location_pw"
                  type="text"
                  placeholder="fill in here.."
                  class="form-control form-mentoring w-100"
                  id="meetingPassword"
                />
                <label for="meetingPassword">Password</label>
              </input-group>
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-2">
              <label class="mt-2 mb-1 w-100" style="font-size: 0.8em">
                Subject
              </label>
              <div class="row row-cols-md-4 row-cols-2 align-items-stretch g-2">
                <div class="col mb-2">
                  <label class="w-100">
                    <input
                      v-model="call_data.module"
                      type="checkbox"
                      placeholder="fill in here.."
                      class="card-input-element"
                      value="life skills"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Life Skill</div>
                    </div>
                  </label>
                </div>
                <div class="col mb-2">
                  <label class="w-100">
                    <input
                      v-model="call_data.module"
                      type="checkbox"
                      placeholder="fill in here.."
                      class="card-input-element"
                      value="career exploration"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Career Exploration</div>
                    </div>
                  </label>
                </div>
                <div class="col mb-2">
                  <label class="w-100">
                    <input
                      v-model="call_data.module"
                      type="checkbox"
                      placeholder="fill in here.."
                      class="card-input-element"
                      value="admissions mentoring"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Admissions Mentoring</div>
                    </div>
                  </label>
                </div>
                <div class="col mb-2">
                  <label class="w-100">
                    <input
                      v-model="call_data.module"
                      type="checkbox"
                      placeholder="fill in here.."
                      class="card-input-element"
                      value="life at university"
                    />
                    <div class="panel panel-default card-input">
                      <div class="panel-heading">Life at University</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-0 mb-2" />
          <div class="col-6">
            <button
              type="button"
              class="btn-mentoring btn-sm py-1 px-3 btn-outline-danger"
              @click="modal = ''"
            >
              <i class="bi bi-x-circle"></i>
              Cancel
            </button>
          </div>
          <div class="col-6 text-end">
            <button
              type="submit"
              class="btn-mentoring btn-sm py-1 px-3 btn-success"
            >
              <i class="bi bi-calendar-plus me-1"></i>
              Set a Meeting
            </button>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import Multiselect from "vue-multiselect";

import Pending from "@/components/mentor/page/activity/meeting/pending";
import Upcoming from "@/components/mentor/page/activity/meeting/upcoming";
import History from "@/components/mentor/page/activity/meeting/history";

export default {
  name: "meetings",
  components: {
    Multiselect,

    "v-pending": Pending,
    "v-upcoming": Upcoming,
    "v-history": History,
  },
  data() {
    return {
      tab: "upcoming",
      user_select: "",
      modal: "",
      summary: [],
      meeting_data: [],
      user_list: [],
      call_data: {
        student_id: "",
        std_act_status: "waiting",
        location_link: "",
        location_pw: "",
        call_with: "mentor",
        module: ["admissions mentoring"],
        start_date: "",
        end_date: "",
        created_by: "mentor",
      },
      meeting_date: {
        date: "",
        start: "",
        end: "",
      },
      input: { meeting: "text" },
      error_form: [],
    };
  },
  methods: {
    goTab(tab) {
      this.tab = tab;
      this.getData(tab);
    },

    customLabel({ first_name, last_name }) {
      return `${first_name} ${last_name}`;
    },

    checkUser(i) {
      this.user_select = i;

      if (this.user_select) {
        this.call_data.student_id = this.user_select.id;
      }
    },

    checkData(e) {
      this.tab = e;
      this.getData(e);
    },

    async getSummary() {
      try {
        const response = await this.$axios.get("mentor/meeting/summary");
        this.summary = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    },

    async getData(tab) {
      this.$Progress.start();
      this.meeting_data = [];
      try {
        const response = await this.$axios.get(
          "../v2/list/activities/1-on-1-call/" + tab
        );
        this.$Progress.finish();
        this.getSummary();
        this.meeting_data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getPage(link) {
      if (link != null) {
        this.$Progress.start();
        this.meeting_data = [];
        try {
          const response = await this.$axios.get(link);
          this.$Progress.finish();
          this.meeting_data = response.data.data;
          // console.log(response.data);
        } catch (e) {
          this.$Progress.fail();
          console.log(e.response);
        }
        this.$alert.close();
      }
    },

    async getMentee() {
      try {
        const response = await this.$axios.get("student/list?paginate=no");
        this.user_list = response.data.data;
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      // Meeting Date

      let date = this.meeting_date.date;
      let start_time = this.meeting_date.start;
      let end_time = this.meeting_date.end;

      let start_date = date + "T" + start_time;
      let end_date = date + "T" + end_time;

      this.call_data.start_date = start_date;
      this.call_data.end_date = end_date;

      // console.log(this.call_data);

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "../v2/create/activities/1-on-1-call",
          this.call_data
        );

        // console.log(response.data);
        if (response.data.success) {
          this.user_select = "";
          this.call_data = {
            student_id: "",
            std_act_status: "waiting",
            location_link: "",
            location_pw: "",
            call_with: "mentor",
            module: [],
            call_date: "",
            created_by: "mentor",
          };

          this.meeting_date = {
            date: "",
            start: "",
            end: "",
          };

          this.modal = "";
          this.tab = "pending";
          this.getData(this.tab);
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response.data);
        if (e.response.data) {
          this.error_form = e.response.data.error;
        }
        this.$alert.toast("error", "Please try again.");
      }
    },

    async filterStatus(data) {
      this.$Progress.start();
      this.meeting_data = [];
      try {
        const response = await this.$axios.get(
          "../v2/list/activities/1-on-1-call/" + this.tab + "?filter=" + data
        );
        this.$Progress.finish();
        this.getSummary();
        this.meeting_data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },
  },
  created() {
    if (localStorage.getItem("tab")) {
      this.tab = localStorage.getItem("tab");
      localStorage.removeItem("tab");
    }

    this.getMentee();
    this.getData(this.tab);
  },
};
</script>

<style scoped>
.card-input-element {
  display: none;
}

.card-input {
  width: 100%;
  background: transparent;
  border: 2px solid #dedede;
  color: #1f1f21;
  text-align: center;
  border-radius: 10px;
  padding: 5px 10px;
  height: 65px;
  display: flex;
  align-items: center;
  transition: all 0.4s;
}

.panel-heading {
  width: 100%;
  display: block;
  font-size: 0.8em;
  line-height: 1em;
  text-align: center;
}

.card-input:hover {
  cursor: pointer;
}

.card-input-element:checked + .card-input {
  color: #fff;
  background: #223872;
}
</style>