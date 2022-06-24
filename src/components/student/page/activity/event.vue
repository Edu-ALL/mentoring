<template>
  <div id="upcoming-event">
    <div class="container mt-4">
      <div
        class=""
        v-if="
          (menu.menu == 'event' || menu.menu == 'my-activity') &&
          menu.submenu == ''
        "
      >
        <div class="row">
          <div class="col-12">
            <div class="ps-3 pointer" style="top: 100px" @click="redirect">
              <h5 class="d-inline">Events</h5>
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-12">
            <div class="card border-0 shadow">
              <div class="card-body">
                <Splide :options="options">
                  <SplideSlide v-for="(i, index) in events" :key="index">
                    <div class="card-event h-100" @click="detail(i)">
                      <!-- <div class="card-type bg-primary text-white" v-if="i % 2 == 0">
                                    Introduction
                                  </div>
                                  <div class="card-type bg-secondary text-dark" v-if="i % 2 != 0">
                                    Academic
                                  </div> -->
                      <div class="card-img mb-2">
                        <img
                          v-lazy="
                            'https://picsum.photos/id/' +
                            index * 30 +
                            '/600/400'
                          "
                          :alt="i.topic"
                        />
                      </div>
                      <div class="card-title">
                        <div class="row align-items-center h-100">
                          <div class="col">
                            {{ i.topic }}
                          </div>
                        </div>
                      </div>
                      <div class="card-label">
                        <div class="row align-items-center">
                          <div class="col-md-7 text-start mb-2">
                            <vue-feather
                              type="calendar"
                              class="me-1"
                              size="13"
                            ></vue-feather>
                            {{ i.date }}<br />
                            <vue-feather
                              type="clock"
                              class="me-1"
                              size="13"
                            ></vue-feather>
                            {{ i.time }}
                          </div>
                          <div class="col-md-5 text-md-end text-start mb-1">
                            <button class="btn btn-allin btn-success btn-sm">
                              Book
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>

                <!-- History -->
                <div class="mt-3">
                  <b class="text-primary">Event History</b>
                  <hr class="my-1" />
                  <div class="table-responsive">
                    <table class="table align-middle">
                      <thead>
                        <tr class="text-center">
                          <th>No</th>
                          <th>Topic</th>
                          <th>Category</th>
                          <th>Date & Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center">
                          <td>1</td>
                          <td>Career Meetup 101</td>
                          <td>Career Exploration</td>
                          <td>
                            <small>
                              20 Feburary 2022 <br />
                              14.00 WIB
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail  -->
      <div class="" v-if="menu.menu == 'event' && menu.submenu != ''">
        <div class="row mt-4">
          <div class="col">
            <v-view :menu="menu"></v-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import View from "@/components/student/page/activity/event-detail/view";

export default {
  name: "upcoming-event",
  components: {
    "v-view": View,
  },
  props: {
    tab: String,
  },
  data() {
    return {
      menu: {
        menu: "",
        submenu: "",
        key: "",
      },
      options: {
        autoPlay: true,
        // type: "loop",
        arrows: true,
        pagination: false,
        width: "100%",
        perPage: 3,
        gap: 20,
        padding: { left: "0", right: "4rem" },
        breakpoints: {
          800: {
            perPage: 2,
          },
          640: {
            perPage: 1,
            padding: { left: "0", right: "1rem" },
          },
        },
      },
      events: [
        {
          id: 1,
          topic: "Regular Talks: Food Science & Full Stack Developer",
          date: "26 Feb 2022",
          time: "00.00 WIB",
        },
        {
          id: 2,
          topic: "Career Bootcamp: Food Science",
          date: "5-6 Mar 2022",
          time: "00.00 WIB",
        },
        {
          id: 3,
          topic: "Career Bootcamp: Full Stack Developer",
          date: "19-20 Mar 2022",
          time: "00.00 WIB",
        },
      ],
    };
  },
  methods: {
    detail(i) {
      this.$router.push({ path: "/user/event/detail/" + i.id });
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
  },
};
</script>
<style scoped>
.card-event {
  cursor: pointer;
  border-radius: 15px;
  border: none;
  background: #ebf3fd;
  box-shadow: 2px 5px 5px -2px rgba(205, 205, 205, 0.75);
  -webkit-box-shadow: 2px 5px 5px -2px rgba(205, 205, 205, 0.75);
  -moz-box-shadow: 2px 5px 5px -2px rgba(205, 205, 205, 0.75);
}

.card-type {
  position: absolute;
  z-index: 99;
  top: 5px;
  right: 5px;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  border: 1px solid #2c588f;
}

.card-img {
  height: 200px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.card-img img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  transition: transform 0.5s ease;
}

.card-img img:hover,
.card-event:hover .card-img img {
  transform: scale(1.1);
}

.card-title {
  margin-top: -8px;
  height: 60px;
  background: #223872;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 10px;
  text-transform: uppercase;
  text-align: center;
  z-index: 99;
  transition: all 0.4s ease-in-out;
}

.card-event:hover .card-title {
  background: #f0ab54;
  color: #051844;
}

.card-label {
  margin-top: -7px;
  padding: 10px 15px 10px 15px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 0 0 15px 15px;
}

@media only screen and (max-width: 800px) {
  .card-img {
    height: 150px;
  }
}
</style>