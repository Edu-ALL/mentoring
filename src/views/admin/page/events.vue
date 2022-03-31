<template>
  <div id="webinar">
    <transition name="fade">
      <div class="" v-if="menus.submenu == ''">
        <div class="row my-4">
          <div class="col-md-6 text-start">
            <input type="text" class="form-mentoring" placeholder="Search" />
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
        <div class="card-white">
          <div class="table-responsive">
            <table class="table align-middle table-hover">
              <thead>
                <tr class="text-center">
                  <th width="5%">No</th>
                  <th>Event Name</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center pointer"
                  v-for="i in 5"
                  :key="i"
                  @click="
                    this.$router.push({ path: '/admin/events/detail/' + i })
                  "
                >
                  <td>{{ i }}</td>
                  <td>Lorem Ipsum</td>
                  <td>{{ 123 + i }}</td>
                  <td>Closed</td>
                  <td>20 Feburary 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav class="mt-2">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="events.current_page != 1">
                <a class="page-link" @click="getPage(events.links[0].url)">
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div v-for="i in events.last_page" :key="i">
                <li
                  class="page-item"
                  v-if="
                    events.current_page - 2 < i && events.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      events.current_page == i ? 'bg-primary text-white' : ''
                    "
                    href="#"
                    @click="getPage(events.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="events.current_page != events.last_page"
              >
                <a class="page-link" @click="getPage(events.next_page_url)">
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <v-event-detail
        :menus="menus"
        v-if="menus.submenu != ''"
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
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/activities/event", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.events = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.events = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>