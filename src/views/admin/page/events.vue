<template>
  <div id="webinar">
    <transition name="fade">
      <div class="" v-if="menus.submenu == ''">
        <div class="row my-4">
          <div class="col-md-6 text-start">
            <input
              type="text"
              class="form-mentoring"
              v-model="search.name"
              @change="searchData"
              placeholder="Search"
            />
            <br />
            <span
              class="badge bg-primary px-3 d-inline-block"
              v-if="search.bar"
            >
              {{ search.name }}
              <i
                class="fa-solid fa-close ms-3 pointer"
                @click="closeSearch"
              ></i>
            </span>
          </div>
          <div class="col-md-6 text-md-end text-center">
            <button
              class="btn-mentoring btn-type-2"
              @click="this.$router.push({ path: '/admin/events/add' })"
            >
              Add a New Event
            </button>
          </div>
        </div>
        <!-- {{ events }} -->
        <div class="card-white">
          <div class="table-responsive">
            <table class="table align-middle table-hover">
              <thead>
                <tr class="text-center">
                  <th width="2%">No</th>
                  <th>Event Name</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center pointer"
                  v-for="(i, index) in events.data"
                  :key="index"
                  @click="
                    this.$router.push({ path: '/admin/events/detail/' + i.id })
                  "
                >
                  <td>{{ events.from + index }}</td>
                  <td>{{ i.dtl_name }}</td>
                  <td>{{ i.student_activities_count }}</td>
                  <td>
                    <i
                      class="fa-regular fa-circle-check text-success"
                      v-if="i.status == 'active'"
                    ></i>
                    <i
                      class="fa-regular fa-circle-xmark text-danger"
                      v-if="i.status != 'active'"
                    ></i>
                  </td>
                  <td>{{ $customDate.date(i.created_at) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-if="events.from == null">
            <hr />
            <h6>Sorry, data is not found</h6>
          </div>
          <v-pagination :datas="events" @result="getPage" />
        </div>
      </div>
    </transition>

    <transition name="fade">
      <v-event-detail
        :menus="menus"
        v-if="menus.menu == 'events' && menus.submenu != ''"
      ></v-event-detail>
    </transition>
  </div>
</template>

<script>
import eventDetail from "@/components/admin/event/detail";

export default {
  name: "event",
  props: {
    menus: Object,
  },
  components: {
    "v-event-detail": eventDetail,
  },
  data() {
    return {
      events: [],
      search: {
        bar: false,
        name: "",
      },
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/programme/event")
        .then((response) => {
          this.$alert.close();
          this.events = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.events = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/programme/event?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.events = response.data.data;
          this.search.bar = true;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    closeSearch() {
      this.search.bar = false;
      this.search.name = "";
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>