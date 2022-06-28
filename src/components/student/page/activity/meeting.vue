<template>
  <div id="meeting">
    <div class="container my-4">
      <div class="row">
        <div class="col-12">
          <div class="ps-3 pointer" style="top: 100px">
            <h5 class="d-inline">Meetings</h5>
          </div>
        </div>
      </div>
      <!-- Tabs  -->
      <div class="row mt-3">
        <div class="col-md-9 col-8 menu-tab">
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == '' || tab == 'request' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'request'"
          >
            New Request
          </button>
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == 'pending' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'pending'"
          >
            Pending
          </button>
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == 'upcoming' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'upcoming'"
          >
            Upcoming
          </button>
          <button
            class="btn-mentoring btn-sm mx-1"
            :class="tab == 'history' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'history'"
          >
            History
          </button>
        </div>
        <div class="col-md-3 col-4 text-end">
          <button
            class="btn-mentoring btn-sm btn-type-3 mx-1"
            @click="modal = 'new'"
          >
            <i class="fa-solid fa-add"></i>
          </button>
        </div>
      </div>

      <!-- Content  -->
      <div class="row mt-2">
        <div class="col">
          <div class="card border-0 shadow">
            <transition name="fade">
              <v-request
                v-if="tab == '' || tab == 'request'"
                @tab="checkTab"
              ></v-request>
            </transition>
            <transition name="fade">
              <v-pending v-if="tab == 'pending'" :new="new_meeting"></v-pending>
            </transition>
            <transition name="fade">
              <v-upcoming v-if="tab == 'upcoming'"></v-upcoming>
            </transition>
            <transition name="fade">
              <v-history v-if="tab == 'history'"></v-history>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal  -->
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>

    <!-- ADD Meeting -->
    <transition name="pop">
      <div
        class="vue-modal vue-modal-lg bg-secondary"
        style="min-height: 300px"
        v-if="modal == 'new'"
      >
        <h5>New Meeting</h5>
        <hr class="my-1 mb-3" />

        <form method="post" @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Call with</label>
                <multiselect
                  v-model="user_select"
                  :options="user_list"
                  placeholder="Select One"
                  deselect-label="Can't remove this value"
                  track-by="id"
                  :custom-label="customLabel"
                  :searchable="true"
                  :allow-empty="false"
                  @select="checkUser"
                >
                </multiselect>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-7">
                  <div class="mb-2">
                    <label>Meeting Date</label>
                    <input
                      v-model="meeting_date.date"
                      :min="this.$customDate.tomorrowDateOnly()"
                      type="date"
                      class="form-mentoring w-100"
                    />
                  </div>
                </div>
                <div class="col-5">
                  <div class="mb-2">
                    <label>Time</label>
                    <input
                      v-model="meeting_date.time"
                      type="time"
                      class="form-mentoring w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="mb-2">
                <label>Location Link</label>
                <input
                  v-model="call_data.location_link"
                  type="text"
                  class="form-mentoring w-100"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label>Password</label>
                <input
                  v-model="call_data.location_pw"
                  type="text"
                  class="form-mentoring w-100"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-2">
                <label> Subject </label>
                <div
                  class="row row-cols-md-4 row-cols-2 align-items-stretch mt-1"
                >
                  <div class="col mb-2">
                    <label>
                      <input
                        v-model="call_data.module"
                        type="radio"
                        name="product"
                        class="card-input-element"
                        value="life skill"
                      />
                      <div class="panel panel-default card-input">
                        <div class="panel-heading">Life Skill</div>
                      </div>
                    </label>
                  </div>
                  <div class="col mb-2">
                    <label>
                      <input
                        v-model="call_data.module"
                        type="radio"
                        name="product"
                        class="card-input-element"
                        value="career exploration"
                      />
                      <div class="panel panel-default card-input">
                        <div class="panel-heading">Career Exploration</div>
                      </div>
                    </label>
                  </div>
                  <div class="col mb-2">
                    <label>
                      <input
                        v-model="call_data.module"
                        type="radio"
                        name="product"
                        class="card-input-element"
                        value="university admission"
                      />
                      <div class="panel panel-default card-input">
                        <div class="panel-heading">University Admission</div>
                      </div>
                    </label>
                  </div>
                  <div class="col mb-2">
                    <label>
                      <input
                        v-model="call_data.module"
                        type="radio"
                        name="product"
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
            <hr class="mt-3" />
            <div class="col-6">
              <button
                type="button"
                class="btn-mentoring btn-outline-danger"
                @click="modal = ''"
              >
                Cancel
              </button>
            </div>
            <div class="col-6 text-end">
              <button type="submit" class="btn-mentoring btn-success">
                Save Meeting
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

import Request from "@/components/student/page/activity/meeting-detail/request";
import Pending from "@/components/student/page/activity/meeting-detail/pending";
import Upcoming from "@/components/student/page/activity/meeting-detail/upcoming";
import History from "@/components/student/page/activity/meeting-detail/history";

export default {
  name: "meetings",
  components: {
    "v-request": Request,
    "v-pending": Pending,
    "v-upcoming": Upcoming,
    "v-history": History,
    Multiselect,
  },
  data() {
    return {
      tab: "",
      new_meeting: false,
      modal: "",
      user_select: "",
      user_list: [],
      meeting_date: {
        date: "",
        time: "",
      },
      call_data: {
        user_id: "",
        std_act_status: "waiting",
        location_link: "",
        location_pw: "",
        call_with: "mentor",
        module: "",
        call_date: "",
      },
      status: "",
    };
  },
  methods: {
    customLabel({ first_name, last_name }) {
      return `${first_name} ${last_name}`;
    },

    checkUser(i) {
      this.user_select = i;

      if (this.user_select) {
        this.call_data.user_id = this.user_select.id;
      }
    },

    checkTab(i) {
      this.tab = i;
    },

    async getMentorList() {
      try {
        const response = await this.$axios.get("student/mentor/list");
        this.user_list = response.data.data.mentor;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async handleSubmit() {
      // Meeting Date
      this.modal = "";
      let date = this.meeting_date.date;
      let time = this.meeting_date.time;
      let datetime = date + "T" + time;

      this.call_data.call_date = datetime;
      this.new_meeting = false;

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/make/1-on-1-call",
          this.call_data
        );

        // console.log(response.data);
        if (response.data.success) {
          this.user_select = "";
          this.call_data = {
            user_id: "",
            std_act_status: "waiting",
            location_link: "",
            location_pw: "",
            call_with: "mentor",
            module: "",
            call_date: "",
          };
          this.meeting_date = {
            date: "",
            time: "",
          };

          this.tab = "pending";
          this.new_meeting = true;

          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    this.getMentorList();
  },
};
</script>
<style scoped>
label {
  width: 100%;
}

label::after {
  content: "";
}

.card-input-element {
  display: none;
}

.card-input {
  width: 100%;
  background: #fff;
  border: 3px solid #fff;
  color: #223872;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  height: 65px;
  display: flex;
  align-items: center;
}

.panel-heading {
  width: 100%;
  display: block;
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
}

.card-input:hover {
  cursor: pointer;
}

.card-input-element:checked + .card-input {
  border: 3px solid #fff;
  color: #fff;
  background: #223872;
}
</style>