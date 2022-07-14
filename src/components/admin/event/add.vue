<template>
  <div id="add">
    <transition name="fade">
      <div class="step-1" v-if="step == 1">
        <h5>Add a New Event</h5>
        <hr />
        <form @submit.prevent="saveEvent(2)">
          <div class="row">
            <div class="col-md-12 mb-3">
              <input
                type="text"
                class="form-control form-mentoring"
                v-model="event.dtl_name"
                placeholder="Event Name"
              />
              <span v-if="errorEvent">
                <small class="text-danger" v-if="errorEvent.dtl_name">
                  {{ errorEvent.dtl_name[0] }}
                </small>
              </span>
            </div>
            <div class="col-md-4 mb-3">
              <select
                class="form-control form-mentoring"
                v-model="event.dtl_category"
              >
                <option value="career-bootcamp">Career Bootcamp</option>
                <option value="university-application-bootcamp">
                  University Application Bootcamp
                </option>
                <option value="copetition-program">Competition Program</option>
                <option value="all-in-program">ALL-in Program</option>
              </select>
              <span v-if="errorEvent">
                <small class="text-danger" v-if="errorEvent.dtl_category">
                  {{ errorEvent.dtl_category[0] }}
                </small>
              </span>
            </div>
            <div class="col-md-4 mb-3">
              <input
                v-model="event.dtl_price"
                type="number"
                class="form-control form-mentoring"
                placeholder="Price"
              />
              <span v-if="errorEvent">
                <small class="text-danger" v-if="errorEvent.dtl_price">
                  {{ errorEvent.dtl_price[0] }}
                </small>
              </span>
            </div>
            <div class="col-md-4 mb-3">
              <input
                type="file"
                class="form-control form-mentoring"
                placeholder="Thumbnail"
              />
              <span v-if="errorEvent">
                <small class="text-danger" v-if="errorEvent.dtl_price">
                  {{ errorEvent.dtl_price[0] }}
                </small>
              </span>
            </div>
            <div class="col-md-12 mb-3">
              <textarea
                v-model="event.dtl_desc"
                cols="30"
                rows="10"
                class="form-control form-mentoring"
              ></textarea>
              <span v-if="errorEvent">
                <small class="text-danger" v-if="errorEvent.dtl_desc">
                  {{ errorEvent.dtl_desc[0] }}
                </small>
              </span>
            </div>

            <div class="col-md-12">
              <hr />
              <div class="float-end">
                <button type="submit" class="btn-mentoring btn-type-1">
                  Add Date & Time
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <transition name="fade">
      <div class="step-2" v-if="step == 2">
        <h5>{{ event.dtl_name }}</h5>
        <hr />
        <h6 class="text-muted mb-3">Add Date & Time</h6>
        <form @submit.prevent="saveSchedule()">
          <div class="row">
            <div class="col-md-5">
              <input
                v-model="schedule.prog_sch_start_date"
                type="date"
                class="form-control form-mentoring mb-3"
                placeholder="Event Name"
                required
              />
            </div>
            <div class="col-md-3">
              <input
                type="time"
                v-model="schedule.prog_sch_start_time"
                class="form-control form-mentoring mb-3"
                placeholder="Event Name"
                required
              />
            </div>
            <div class="col-md-3">
              <input
                v-model="schedule.prog_sch_end_time"
                type="time"
                class="form-control form-mentoring mb-3"
                placeholder="Event Name"
                required
              />
            </div>
            <div class="col-md-1 text-end">
              <button type="submit" class="btn-mentoring btn-type-1">
                Save
              </button>
            </div>
          </div>
        </form>

        <div class="row">
          <!-- {{ scheduleList }} -->
          <div class="col-md-12 mt-3">
            <table class="table table-hover">
              <tbody>
                <tr
                  class="text-center"
                  @click="modal = 'detailDate'"
                  v-for="(i, index) in scheduleList.data"
                  :key="index"
                >
                  <td width="5%">{{ index + 1 }}</td>
                  <td>{{ $customDate.date(i.prog_sch_start_date) }}</td>
                  <td>{{ i.prog_sch_start_time }}</td>
                  <td>{{ i.prog_sch_end_time }}</td>
                  <td>
                    <i
                      class="fa-solid fa-trash text-danger pointer"
                      @click="delSchedule(i.id)"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-md-12">
            <hr />
            <div class="float-start">
              <button class="btn-mentoring btn-type-2" @click="goStep(1)">
                Back
              </button>
            </div>
            <div class="float-end">
              <button class="btn-mentoring btn-type-1" @click="goStep(3)">
                Add Speaker
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="step-3" v-if="step == 3">
        <h5>{{ event.dtl_name }}</h5>
        <hr />
        <h6 class="text-muted mb-3">Add Speaker</h6>
        <form @submit.prevent="saveSpeaker()">
          <div class="row">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Speaker Name"
                v-model="speaker.sp_name"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Education/Position"
                v-model="speaker.sp_title"
              />
            </div>
            <div class="col-md-12">
              <input
                type="file"
                class="form-control form-mentoring mb-3"
                placeholder="Profile Picture"
              />
            </div>
            <div class="col-md-12">
              <textarea
                v-model="speaker.sp_short_desc"
                class="form-control form-mentoring"
                rows="5"
              ></textarea>
            </div>
            <div class="col-md-12 mt-3 text-end">
              <button type="submit" class="btn-mentoring btn-type-1">
                Save
              </button>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-md-12 mt-3">
            <table class="table table-hover">
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in speakerList.data"
                  :key="index"
                >
                  <td width="5%">{{ index + 1 }}</td>
                  <td>{{ i.sp_name }}</td>
                  <td>{{ i.sp_title }}</td>
                  <td>{{ i.sp_short_desc }}</td>
                  <td>Profile</td>
                  <td>
                    <i
                      class="fa-solid fa-trash text-danger"
                      @click="delSpeaker(i.id)"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-md-12">
            <hr />
            <div class="float-start">
              <button class="btn-mentoring btn-type-2" @click="goStep(2)">
                Add Date & Time
              </button>
            </div>
            <div class="float-end">
              <button class="btn-mentoring btn-type-1" @click="goStep(4)">
                Add Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="step-4" v-if="step == 4">
        <h5>{{ event.dtl_name }}</h5>
        <hr />
        <h6 class="text-muted mb-3">Add Partner</h6>
        <form @submit.prevent="savePartner()">
          <div class="row">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control form-mentoring mb-3"
                placeholder="Partner Name"
                v-model="partner.pt_name"
              />
            </div>
            <div class="col-md-5">
              <input type="file" class="form-control form-mentoring mb-3" />
            </div>
            <div class="col-md-1 text-end">
              <button class="btn-mentoring btn-type-1">Save</button>
            </div>
          </div>
        </form>

        <div class="row">
          <div class="col-md-12 mt-3">
            <table class="table table-hover">
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in partnerList.data"
                  :key="index"
                >
                  <td width="5%">{{ index + 1 }}</td>
                  <td>{{ i.pt_name }}</td>
                  <td>Logo</td>
                  <td>
                    <i
                      class="fa-solid fa-trash text-danger"
                      @click="delPartner(i.id)"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-md-12">
            <hr />
            <div class="float-start">
              <button class="btn-mentoring btn-type-2" @click="goStep(3)">
                Add Speaker
              </button>
            </div>
            <div class="float-end">
              <button class="btn-mentoring btn-type-1" @click="goStep(5)">
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "addEvent",
  data() {
    return {
      step: 1,
      modal: "",
      event_id: "",
      event: {
        prog_id: 4,
        dtl_category: "",
        dtl_name: "",
        dtl_desc: "",
        dtl_price: 0,
        dtl_video_link: "",
        status: "active",
      },
      errorEvent: [],
      schedule: {
        prog_dtl_id: "",
        prog_sch_start_date: "",
        prog_sch_start_time: "",
        prog_sch_end_date: "",
        prog_sch_end_time: "",
      },
      scheduleList: [],
      speaker: {
        prog_dtl_id: "",
        sp_name: "",
        sp_title: "",
        sp_short_desc: "",
        status: "active",
      },
      speakerList: [],
      partner: {
        prog_dtl_id: "",
        pt_name: "",
        pt_website: "website.com",
        pt_image: "null",
        pt_status: "",
        status: "active",
      },
      partnerList: [],
    };
  },
  methods: {
    saveEvent() {
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/programme/detail", this.event)
        .then((response) => {
          this.$alert.close();
          this.$alert.toast("success", "Event has been created");
          this.step = 2;
          this.event_id = response.data.data.prog_detail.id;
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          this.errorEvent = error.response.data.error;
          // console.log(error.response);
        });
    },

    saveSchedule() {
      this.schedule.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/programme/schedule", this.schedule)
        .then((response) => {
          this.$alert.close();
          this.$alert.toast("success", "Schedule has been created");
          this.getSchedule(this.event_id);
          this.schedule = {
            prog_dtl_id: "",
            prog_sch_start_date: "",
            prog_sch_start_time: "",
            prog_sch_end_date: "",
            prog_sch_end_time: "",
          };
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response.data);
        });
    },

    getSchedule(id) {
      this.$alert.loading();
      this.$axios
        .get(
          this.$url + "select/programme-schedule/use/programme-detail/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.$alert.close();
          this.scheduleList = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    delSchedule(id) {
      let link = this.$url + "delete/programme/schedule/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "/admin/events/add");
    },

    saveSpeaker() {
      this.speaker.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/speaker", this.speaker)
        .then((response) => {
          this.$alert.close();
          this.$alert.toast("success", "Speaker has been created");
          this.getSpeaker(this.event_id);
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response.data);
        });
    },

    getSpeaker(id) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "select/speakers/use/programme-detail/" + id)
        .then((response) => {
          this.$alert.close();
          this.speakerList = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    delSpeaker(id) {
      let link = this.$url + "delete/speaker/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "/admin/events/add");
    },

    savePartner() {
      this.partner.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/partner", this.partner)
        .then((response) => {
          this.$alert.close();
          this.$alert.toast("success", "Speaker has been created");
          this.getPartner(this.event_id);
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response.data);
        });
    },

    getPartner(id) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "select/partners/use/programme-detail/" + id)
        .then((response) => {
          this.$alert.close();
          this.partnerList = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    delPartner(id) {
      let link = this.$url + "delete/partner/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "/admin/events/add");
    },

    goStep(i) {
      this.step = i;
      if (i == 1) {
        this.step = i;
      } else if (i == 2) {
        this.getSchedule(this.event_id);
      } else if (i == 3) {
        this.getSpeaker(this.event_id);
      } else if (i == 4) {
        this.getPartner(this.event_id);
      } else {
        this.$router.go({ path: "/admin/events" });
      }
    },

    created() {
      this.getSchedule(20);
    },
  },
};
</script>

<style>
</style>