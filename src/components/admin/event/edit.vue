<template>
  <div id="editEvent">
    <h5>Edit Event</h5>
    <hr />
    <form @submit.prevent="updateEvent">
      <div class="row">
        <div class="col-md-12">
          <input
            type="text"
            class="form-control form-mentoring mb-3"
            placeholder="Event Name"
            v-model="event.dtl_name"
          />
        </div>
        <div class="col-md-4">
          <select
            class="form-control form-mentoring mb-3"
            v-model="event.dtl_category"
          >
            <option value="career-bootcamp">Career Bootcamp</option>
            <option value="university-application-bootcamp">
              University Application Bootcamp
            </option>
            <option value="competition-program">Competition Program</option>
          </select>
        </div>
        <div class="col-md-4">
          <input
            type="text"
            class="form-control form-mentoring mb-3"
            placeholder="Price"
            v-model="event.dtl_price"
          />
        </div>
        <div class="col-md-4">
          <input
            type="file"
            class="form-control form-mentoring mb-3"
            placeholder="Discount"
          />
        </div>
        <div class="col-md-12">
          <textarea
            v-model="event.dtl_desc"
            cols="30"
            rows="10"
            class="form-control form-mentoring mb-3"
          ></textarea>
        </div>

        <div class="col-md-12 my-2">
          <div class="float-end">
            <button type="submit" class="btn-mentoring btn-type-1">Save</button>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="card border-0 shadow">
      <div class="card-body">
        <div class="row">
          <!-- Schedule  -->
          <div class="col-md-4 mb-3">
            <div class="text-center">
              <button
                class="btn btn-sm btn-mentoring btn-primary mb-2"
                @click="modal = 'addDateTime'"
              >
                Add Date & Time
              </button>
            </div>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr class="text-center">
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="i in scheduleList"
                    :key="i"
                    class="text-center pointer"
                    @click="showDetail('editDateTime', i)"
                  >
                    <td>{{ $customDate.date(i.prog_sch_start_date) }}</td>
                    <td>
                      {{ i.prog_sch_start_time + " - " + i.prog_sch_end_time }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="" v-if="modal == 'addDateTime'">
              <div class="vue-modal vue-modal-lg">
                <div class="container">
                  <form @submit.prevent="saveSchedule">
                    <div class="row">
                      <h6>Add Date & Time</h6>
                      <hr />
                      <div class="col-md-5">
                        <input
                          type="date"
                          class="form-control form-mentoring mb-3"
                          v-model="schedule.prog_sch_start_date"
                        />
                      </div>
                      <div class="col-md-3">
                        <input
                          type="time"
                          class="form-control form-mentoring mb-3"
                          v-model="schedule.prog_sch_start_time"
                        />
                      </div>
                      <div class="col-md-3">
                        <input
                          type="time"
                          class="form-control form-mentoring mb-3"
                          v-model="schedule.prog_sch_end_time"
                        />
                      </div>
                      <div class="col-md-1 text-end">
                        <button type="submit" class="btn-mentoring btn-type-1">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="vue-modal-overlay" @click="modal = ''"></div>
            </div>

            <div class="" v-if="modal == 'editDateTime'">
              <div class="vue-modal vue-modal-lg">
                <div class="container">
                  <form @submit.prevent="updateSchedule()">
                    <div class="row">
                      <h6>Edit Date & Time</h6>
                      <hr />
                      <div class="col-md-12">
                        <input
                          type="date"
                          class="form-control form-mentoring mb-3"
                          v-model="schedule.prog_sch_start_date"
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="time"
                          class="form-control form-mentoring mb-3"
                          v-model="schedule.prog_sch_start_time"
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="time"
                          class="form-control form-mentoring mb-3"
                          v-model="schedule.prog_sch_end_time"
                        />
                      </div>
                      <hr />
                      <div class="col-md-12">
                        <div class="float-start">
                          <button
                            @click="delSchedule(schedule.id)"
                            type="button"
                            class="btn-mentoring btn-outline-danger"
                          >
                            Delete
                          </button>
                        </div>
                        <div class="float-end">
                          <button
                            type="submit"
                            class="btn-mentoring btn-type-1"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="vue-modal-overlay" @click="modal = ''"></div>
            </div>
          </div>
          <!-- Speaker  -->
          <div class="col-md-4 mb-3">
            <div class="text-center">
              <button
                class="btn btn-sm btn-mentoring btn-primary mb-2"
                @click="modal = 'addSpeaker'"
              >
                Add Speaker
              </button>
            </div>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr class="text-center">
                    <th>Speaker Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="i in speakerList"
                    :key="i"
                    class="text-center pointer"
                    @click="showDetail('editSpeaker', i)"
                  >
                    <td>{{ i.sp_name }}</td>
                    <td>{{ i.sp_title }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="" v-if="modal == 'addSpeaker'">
              <div class="vue-modal vue-modal-lg">
                <div class="container">
                  <form @submit.prevent="saveSpeaker()">
                    <div class="row">
                      <h6>Add Speaker</h6>
                      <hr />
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
                      <div class="col-md-12">
                        <hr />
                        <div class="float-end">
                          <button
                            type="submit"
                            class="btn-mentoring btn-type-1"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="vue-modal-overlay" @click="modal = ''"></div>
            </div>

            <div class="" v-if="modal == 'editSpeaker'">
              <div class="vue-modal vue-modal-lg">
                <div class="container">
                  <form @submit.prevent="updateSpeaker">
                    <div class="row">
                      <h6>Edit Speaker</h6>
                      <hr />
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
                      <div class="col-md-12">
                        <hr />
                        <div class="float-start">
                          <button
                            @click="delSpeaker(speaker.id)"
                            type="button"
                            class="btn-mentoring btn-type-2"
                          >
                            Delete
                          </button>
                        </div>
                        <div class="float-end">
                          <button
                            type="submit"
                            class="btn-mentoring btn-type-1"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="vue-modal-overlay" @click="modal = ''"></div>
            </div>
          </div>
          <!-- Partner  -->
          <div class="col-md-4 mb-3">
            <div class="text-center">
              <button
                class="btn btn-sm btn-mentoring btn-primary mb-2"
                @click="modal = 'addPartner'"
              >
                Add Partner
              </button>
            </div>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr class="text-center">
                    <th>Partner Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="i in partnerList"
                    :key="i"
                    class="text-center pointer"
                    @click="showDetail('editPartner', i)"
                  >
                    <td>{{ i.pt_name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="" v-if="modal == 'addPartner'">
              <div class="vue-modal vue-modal-lg">
                <div class="container">
                  <form @submit.prevent="savePartner">
                    <div class="row">
                      <h6>Add Partner</h6>
                      <hr />
                      <div class="col-md-5">
                        <input
                          type="text"
                          class="form-control form-mentoring mb-3"
                          placeholder="Partner Name"
                          v-model="partner.pt_name"
                        />
                      </div>
                      <div class="col-md-5">
                        <input
                          type="file"
                          class="form-control form-mentoring mb-3"
                        />
                      </div>

                      <div class="col-md-2 text-end">
                        <button class="btn-mentoring btn-type-1">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="vue-modal-overlay" @click="modal = ''"></div>
            </div>

            <div class="" v-if="modal == 'editPartner'">
              <div class="vue-modal vue-modal-lg">
                <div class="container">
                  <form @submit.prevent="updatePartner">
                    <div class="row">
                      <h6>Edit Partner</h6>
                      <hr />
                      <div class="col-md-6">
                        <input
                          type="text"
                          class="form-control form-mentoring mb-3"
                          placeholder="Partner Name"
                          v-model="partner.pt_name"
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="file"
                          class="form-control form-mentoring mb-3"
                        />
                      </div>

                      <div class="col-md-12">
                        <hr />
                        <div class="float-start">
                          <button
                            type="button"
                            @click="delPartner(partner.id)"
                            class="btn-mentoring btn-outline-danger"
                          >
                            Delete
                          </button>
                        </div>
                        <div class="float-end">
                          <button
                            type="submit"
                            class="btn-mentoring btn-type-1"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="vue-modal-overlay" @click="modal = ''"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "editEvent",
  props: {
    detail: Object,
  },
  data() {
    return {
      step: 1,
      modal: "",
      event_id: "",
      event_dtl: [],
      event: [],
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
    loadData() {
      this.event = {
        id: this.event_dtl.id,
        prog_id: this.event_dtl.prog_id,
        dtl_category: this.event_dtl.dtl_category
          .replaceAll(" ", "-")
          .toLowerCase(),
        dtl_name: this.event_dtl.dtl_name,
        dtl_desc: this.event_dtl.dtl_desc,
        dtl_price: this.event_dtl.dtl_price,
      };

      this.speakerList = this.event_dtl.speakers;
      this.scheduleList = this.event_dtl.programme_schedules;
      this.partnerList = this.event_dtl.partners;
    },

    getData(i) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/programme/detail/" + i)
        .then((response) => {
          this.$alert.close();
          this.event_dtl = response.data.data;
          this.loadData();
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    updateEvent() {
      let form = qs.stringify({
        prog_id: this.event.prog_id,
        dtl_category: this.event.dtl_category,
        dtl_name: this.event.dtl_name,
        dtl_price: this.event.dtl_price,
        dtl_desc: this.event.dtl_desc,
        status: "active",
      });

      this.$alert.loading();
      this.event.status = "active";
      this.$axios
        .put(this.$url + "update/programme/detail/" + this.event.id, form, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$alert.close();
          this.$router.go();
          this.$alert.toast("success", "Event has been updated");
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          // this.errorEvent = error.response.data.error;
          this.$alert.toast("error", "Please try again!");
          console.log(error.response.data);
        });
    },

    saveSchedule() {
      this.modal = "";
      this.schedule.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/programme/schedule", this.schedule)
        .then(() => {
          this.$alert.close();
          this.getData(this.event_id);
          this.$alert.toast("success", "Schedule has been created");
          this.schedule = {
            prog_dtl_id: "",
            prog_sch_start_date: "",
            prog_sch_start_time: "",
            prog_sch_end_date: "",
            prog_sch_end_time: "",
          };
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response);
        });
    },

    updateSchedule() {
      let form = qs.stringify({
        prog_dtl_id: this.schedule.prog_dtl_id,
        prog_sch_start_date: this.schedule.prog_sch_start_date,
        prog_sch_start_time: this.schedule.prog_sch_start_time,
        prog_sch_end_date: "",
        prog_sch_end_time: this.schedule.prog_sch_end_time,
      });

      this.modal = "";
      this.schedule.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .put(
          this.$url + "update/programme/schedule/" + this.schedule.id,
          form,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          this.$alert.close();
          this.getData(this.event_id);
          this.$alert.toast("success", "Schedule has been updated");
          this.schedule = {
            prog_dtl_id: "",
            prog_sch_start_date: "",
            prog_sch_start_time: "",
            prog_sch_end_date: "",
            prog_sch_end_time: "",
          };
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response);
          this.$alert.toast("warning", "Error, please try again!");
        });
    },

    delSchedule(id) {
      this.modal = "";
      let link = this.$url + "delete/programme/schedule/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "");
    },

    saveSpeaker() {
      this.modal = "";
      this.speaker.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/speaker", this.speaker)
        .then(() => {
          this.$alert.close();
          this.getData(this.event_id);
          this.$alert.toast("success", "Speaker has been created");
          this.speaker = {
            prog_dtl_id: "",
            sp_name: "",
            sp_title: "",
            sp_short_desc: "",
            status: "active",
          };
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          this.$alert.toast("warning", "Error, please try again!");
          console.log(error);
        });
    },

    updateSpeaker() {
      this.modal = "";
      this.schedule.prog_dtl_id = this.event_id;
      let id = this.speaker.id;
      this.$alert.loading();
      this.$axios
        .put(this.$url + "update/speaker/" + id, this.speaker)
        .then(() => {
          this.$alert.close();
          this.getData(this.event_id);
          this.$alert.toast("success", "Schedule has been updated");
          this.speaker = {
            prog_dtl_id: "",
            sp_name: "",
            sp_title: "",
            sp_short_desc: "",
            status: "active",
          };
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          this.$alert.toast("warning", "Error, please try again!");
          console.log(error.response);
        });
    },

    delSpeaker(id) {
      this.modal = "";
      let link = this.$url + "delete/speaker/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "");
    },

    savePartner() {
      this.modal = "";
      this.partner.prog_dtl_id = this.event_id;
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/partner", this.partner)
        .then(() => {
          this.$alert.close();
          this.getData(this.event_id);
          this.$alert.toast("success", "Partner has been created");
          this.partner = {
            prog_dtl_id: "",
            pt_name: "",
            pt_website: "null",
            pt_image: "null",
            pt_status: "",
            status: "active",
          };
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          this.$alert.toast("warning", "Error, please try again!");
          console.log(error.response.data);
        });
    },

    updatePartner() {
      this.modal = "";
      this.partner.prog_dtl_id = this.event_id;
      let id = this.partner.id;
      this.$alert.loading();
      this.$axios
        .put(this.$url + "update/partner/" + id, this.partner)
        .then(() => {
          this.$alert.close();
          this.getData(this.event_id);
          this.$alert.toast("success", "Partner has been updated");
          this.partner = {
            prog_dtl_id: "",
            pt_name: "",
            pt_website: "null",
            pt_image: "null",
            pt_status: "",
            status: "active",
          };
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          this.$alert.toast("warning", "Error, please try again!");
          console.log(error.response);
        });
    },

    delPartner(id) {
      this.modal = "";
      let link = this.$url + "delete/partner/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "");
    },

    showDetail(name, data) {
      this.modal = name;
      if (name == "editDateTime") {
        this.schedule = data;
      } else if (name == "editSpeaker") {
        this.speaker = data;
      } else if (name == "editPartner") {
        this.partner = data;
      }
      // console.log(this.schedule);
    },
  },

  updated() {},

  created() {
    this.event_id = this.$route.params.key;
    this.getData(this.event_id);
  },
};
</script>

<style>
</style>