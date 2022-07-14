<template>
  <div id="eventDetail">
    <div
      class="mb-2"
      @click="this.$router.push({ path: '/admin/events' })"
      v-if="menus.submenu != 'edit'"
    >
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Event List
    </div>

    <div
      class="mb-2"
      @click="this.$router.push({ path: '/admin/events/detail/' + event_id })"
      v-if="menus.submenu == 'edit'"
    >
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Event Detail
    </div>

    <!-- ADD  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'add'">
        <v-add></v-add>
      </div>
    </transition>

    <!-- Detail  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'detail'">
        <!-- {{ event }} -->
        <div class="flex">
          <h5 class="d-inline">Event</h5>
          <div class="float-end">
            <button
              class="btn-mentoring btn-type-2 btn-sm"
              @click="
                this.$router.push({ path: '/admin/events/edit/' + event.id })
              "
            >
              Edit Event
            </button>
            <button
              class="btn-mentoring btn-outline-danger btn-sm ms-2"
              @click="delEvent(event_id)"
            >
              Delete Event
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-7">
            <div class="mb-3">
              <label>Event Name</label> <br />
              {{ event.dtl_name }}
            </div>
            <div class="mb-3">
              <label>Category</label> <br />
              {{ event.dtl_category }}
            </div>
            <div class="mb-3">
              <label>Price</label> <br />
              Rp {{ event.dtl_price }}
            </div>
            <div class="mb-3">
              <label>Descriptions</label> <br />
              {{ event.dtl_desc }}
            </div>
          </div>
          <div class="col-md-5">
            <div class="card shadow border-0">
              <div class="card-body">
                <h6>Date & Time</h6>
                <ul class="list-group" v-if="event.programme_schedules">
                  <li
                    class="list-group-item"
                    v-for="i in event.programme_schedules"
                    :key="i"
                  >
                    <div class="float-start">
                      {{ $customDate.date(i.prog_sch_start_date) }}
                    </div>
                    <div class="float-end">
                      {{ i.prog_sch_start_time }} -{{ i.prog_sch_end_time }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3" v-if="event.speakers">
            <h6>Speaker List</h6>
            <div class="row row-cols-3 row-cols-1">
              <div class="col" v-for="i in event.speakers" :key="i">
                <div class="card border-0 shadow" @click="speakerDetail(i)">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-md-3">
                        <div class="text-center">
                          <img
                            v-lazy="'https://picsum.photos/100'"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </div>
                      <div class="col-md-9">
                        <b>{{ i.sp_name }}</b>
                        <div class="text-muted">{{ i.sp_title }}</div>
                        <p class="mb-0 text-justify">
                          {{ i.sp_desc }}
                          <!-- {{ i.sp_desc.substr(0, 20) + "..." }} -->
                        </p>
                        <small class="pointer text-info"
                          >More info

                          <vue-feather
                            type="arrow-right"
                            size="16"
                            class="float-end mt-2"
                          ></vue-feather>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="" v-if="modal == 'speakerDetail'">
            <div class="vue-modal vue-modal-lg">
              <div class="row">
                <div class="col-md-3">
                  <img
                    v-lazy="'https://picsum.photos/300'"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="col-md-9">
                  <b>{{ sdetail.sp_name }}</b>
                  <div class="text-muted">{{ sdetail.sp_title }}</div>
                  <p class="mb-0">
                    {{ sdetail.sp_short_desc }}
                  </p>
                </div>
              </div>
            </div>
            <div class="vue-modal-overlay" @click="modal = ''"></div>
          </div>

          <div class="col-md-12 mt-3" v-if="event.partners">
            <h6>Partner List</h6>
            <div class="row row-cols-6 row-cols-2">
              <div class="col" v-for="i in event.partners" :key="i">
                <div class="card border-0 shadow">
                  <div class="card-body text-center">
                    <img
                      v-lazy="'https://picsum.photos/100'"
                      alt=""
                      class="w-100"
                    />
                    <b class="d-block mt-2">{{ i.pt_name }}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <v-participants :list="event.student_activities"></v-participants>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'edit'">
        <v-edit :detail="event"></v-edit>
      </div>
    </transition>
  </div>
</template>

<script>
import AddEvent from "@/components/admin/event/add";
import EditEvent from "@/components/admin/event/edit";
import Participants from "@/components/admin/event/participants";

export default {
  name: "eventDetail",
  props: {
    menus: Object,
  },
  components: {
    "v-add": AddEvent,
    "v-edit": EditEvent,
    "v-participants": Participants,
  },
  data() {
    return {
      modal: "",
      event_id: "",
      event: [],
      sdetail: [],
    };
  },
  methods: {
    getData(i) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/programme/detail/" + i)
        .then((response) => {
          this.$alert.close();
          this.event = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },
    speakerDetail(i) {
      this.modal = "speakerDetail";
      this.sdetail = i;
    },
    delEvent(id) {
      let link = this.$url + "delete/programme/detail/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "/admin/events");
    },
  },
  created() {
    this.event_id = this.$route.params.key;
    this.getData(this.event_id);
  },
};
</script>

<style scoped>
.form-control {
  box-shadow: none !important;
}
</style>