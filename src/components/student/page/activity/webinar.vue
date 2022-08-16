<template>
  <div id="webinar">
    <div class="container my-4">
      <!-- List  -->
      <div
        class=""
        v-if="
          menu.menu == 'my-activity' &&
          menu.submenu == 'webinar' &&
          menu.key == ''
        "
      >
        <div class="row">
          <div class="col-12">
            <div class="ps-3 pointer" style="top: 100px" @click="redirect">
              <h5 class="d-inline">Webinars</h5>
            </div>
          </div>
        </div>

        <!-- Tabs  -->
        <div class="row mt-3">
          <div class="col-md-12 col-12 menu-tab">
            <button
              v-for="i in category"
              :key="i"
              class="btn-mentoring btn-sm mx-1 py-1"
              :class="tab == i.dtl_category ? 'btn-type-1' : 'btn-type-2'"
              @click="checkCategory(i.dtl_category)"
              style="text-transform: capitalize"
            >
              {{ $customText.removeDash(i.dtl_category) }}
            </button>
          </div>
        </div>

        <!-- Content  -->
        <div class="row mt-2">
          <div class="col">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <!-- Career Industry  -->
                <div>
                  <Splide :options="options" class="pb-2">
                    <SplideSlide v-for="i in webinar_data" :key="i">
                      <div class="frame m-0 p-0">
                        <iframe
                          class="p-0 m-0"
                          lazy="loading"
                          width="100%"
                          height="100%"
                          :src="i.dtl_video_link"
                          frameborder="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div class="frame-overlay" @click="webinar(i.id)">
                          <div
                            class="
                              d-flex
                              align-items-center
                              justify-content-center
                              w-100
                              h-100
                            "
                          >
                            {{ i.dtl_name }}
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>

                <!-- History -->
                <div class="mt-3">
                  <b class="text-primary">Webinar History</b>
                  <hr class="my-1" />
                  <!-- Empty  -->
                  <div class="row" v-if="webinar_history.data?.length == 0">
                    <div class="col py-4 text-center">
                      <span class="text-muted">
                        No history of watching webinars.</span
                      >
                    </div>
                  </div>
                  <div v-if="webinar_history.data?.length != 0">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered table-hover align-middle"
                      >
                        <thead>
                          <tr
                            class="text-center"
                            style="vertical-align: middle"
                          >
                            <th>No</th>
                            <th>Topic</th>
                            <th>Category</th>
                            <th nowrap>Date & Time</th>
                            <th>Duration</th>
                            <th>Long Time Watching</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            class="text-center"
                            v-for="(i, index) in webinar_history.data"
                            :key="index"
                          >
                            <td>{{ index + 1 }}</td>
                            <td class="text-start">
                              <div class="" style="width: 300px">
                                {{ i.programme_details.dtl_name }}
                              </div>
                            </td>
                            <td nowrap style="text-transform: capitalize">
                              {{
                                $customText.removeDash(
                                  i.programme_details.dtl_category
                                )
                              }}
                            </td>
                            <td>
                              <small>
                                {{ $customDate.date(i.created_at) }} <br />
                                {{ $customDate.time(i.created_at) }}
                              </small>
                            </td>
                            <td>
                              {{ convertTime(i.watch_detail.video_duration) }}
                            </td>
                            <td>
                              {{ convertTime(i.watch_detail.current_time) }}
                            </td>
                            <td nowrap>
                              <button
                                class="btn-mentoring btn-sm py-1 px-3"
                                :class="
                                  percentage(
                                    i.watch_detail.current_time,
                                    i.watch_detail.video_duration
                                  ) > 95
                                    ? 'bg-primary'
                                    : 'bg-secondary'
                                "
                                :disabled="
                                  percentage(
                                    i.watch_detail.current_time,
                                    i.watch_detail.video_duration
                                  ) > 95
                                "
                                @click="webinar(i.programme_details.id)"
                              >
                                {{
                                  percentage(
                                    i.watch_detail.current_time,
                                    i.watch_detail.video_duration
                                  ) > 95
                                    ? "Completed"
                                    : "In Progress"
                                }}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- Pagination  -->
                    <v-pagination :datas="webinar_history" @result="getPage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail  -->
      <div class="row">
        <div class="col">
          <v-view
            :menu="menu"
            v-if="
              menu.menu == 'my-activity' &&
              menu.submenu == 'webinar' &&
              menu.key != ''
            "
          ></v-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import View from "@/components/student/page/activity/webinar-detail/view";

export default {
  name: "webinar",
  components: {
    "v-view": View,
  },
  data() {
    return {
      tab: "career",
      menu: {
        menu: "",
        submenu: "",
        key: "",
        key2: "",
      },
      category: [],
      webinar_data: [],
      webinar_history: [],
      options: {
        // autoPlay: true,
        // type: "loop",
        focus: "left",
        arrows: false,
        pagination: true,
        width: "100%",
        perPage: 2,
        gap: 20,
        padding: { left: "0", right: "1rem" },
        breakpoints: {
          800: {
            perPage: 2,
          },
          640: {
            perPage: 1,
            padding: { left: "0", right: "0" },
          },
        },
      },
    };
  },
  methods: {
    webinar(i) {
      this.$router.push({ path: "/user/my-activity/webinar/" + i });
    },

    async getCategory() {
      try {
        const response = await this.$axios.get(
          "student/list/webinar/categories"
        );

        this.category = response.data.data;
        // console.log(response.data);

        if (response.data.data && response.data.data.length != 0) {
          let category = response.data.data[0].dtl_category;
          this.tab = category;
          this.getData(category);
        }
      } catch (e) {
        console.log(e.response);
      }
    },

    checkCategory(i) {
      this.tab = i;
      this.getData(i);
    },

    convertTime(i) {
      var secs = Math.round(i);
      var hours = Math.floor(secs / (60 * 60));

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var time =
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
      return time;
    },

    percentage(time, duration) {
      var percent = (time / duration) * 100;
      return percent;
    },

    async getData(i) {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "student/programme/detail/webinar/" + i
        );

        this.webinar_data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      this.$alert.close();
    },

    async getHistory() {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "student/list/activities/webinar"
        );

        this.webinar_history = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      this.$alert.close();
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
      this.menu.key2 = to.params.key2;
    },
  },
  created() {
    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
    this.menu.key2 = this.$route.params.key2;

    this.getCategory();
    this.getHistory();
  },
  // updated() {
  //   this.getHistory();
  // },
};
</script>
<style scoped>
.frame {
  position: relative;
  overflow: hidden;
  width: 100% !important;
  height: 240px;
  border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in-out;
}

iframe[lazy="loading"] {
  background-image: url("~@/assets/img/loading.gif");
  background-size: 8%;
  background-repeat: no-repeat;
  background-position: center;
}

.frame-overlay {
  border-radius: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #1a2d63d5;
  opacity: 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease-in;
}

.frame:hover .frame-overlay {
  opacity: 1;
}
</style>