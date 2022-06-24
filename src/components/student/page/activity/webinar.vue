<template>
  <div id="webinar">
    <div class="container mt-4">
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
              class="btn-mentoring btn-sm mx-1"
              :class="tab == 'career' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'career'"
            >
              Carrer Industry
            </button>
            <button
              class="btn-mentoring btn-sm mx-1"
              :class="tab == 'uni-prep' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'uni-prep'"
            >
              University Preparation
            </button>
            <button
              class="btn-mentoring btn-sm mx-1"
              :class="tab == 'all-in' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'all-in'"
            >
              ALL-in Webinar
            </button>
          </div>
        </div>

        <!-- Content  -->
        <div class="row mt-2">
          <div class="col">
            <div class="card border-0 shadow">
              <div class="card-body">
                <!-- Career Industry  -->
                <div v-if="tab == 'career'">
                  <Splide :options="options">
                    <SplideSlide
                      v-for="(i, index) in career_webinar"
                      :key="index"
                    >
                      <div class="frame">
                        <iframe
                          lazy="loading"
                          width="100%"
                          height="100%"
                          :src="
                            i +
                            '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
                          "
                          title="YouTube video player"
                          frameborder="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div class="frame-overlay" @click="webinar(index)">
                          View More
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>

                <!-- Uni Prep  -->
                <div v-if="tab == 'uni-prep'">
                  <Splide :options="options">
                    <SplideSlide
                      v-for="(i, index) in uniprep_webinar"
                      :key="index"
                    >
                      <div class="frame">
                        <iframe
                          lazy="loading"
                          width="100%"
                          height="100%"
                          :src="
                            i +
                            '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
                          "
                          title="YouTube video player"
                          frameborder="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div class="frame-overlay" @click="webinar(index)">
                          View More
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>

                <!-- ALL-in  -->
                <div v-if="tab == 'all-in'">
                  <Splide :options="options">
                    <SplideSlide v-for="(i, index) in playlist" :key="index">
                      <div class="frame">
                        <iframe
                          lazy="loading"
                          width="100%"
                          height="100%"
                          :src="
                            i +
                            '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
                          "
                          title="YouTube video player"
                          frameborder="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <div class="frame-overlay" @click="webinar(index)">
                          View More
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>

                <!-- History -->
                <div class="mt-3">
                  <b class="text-primary">Webinar History</b>
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
      <div class="row mt-4">
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
      uniprep_webinar: [
        "https://youtube.com/embed/mHA4BxZTXlk",
        "https://youtube.com/embed/XksK1_YWZhU",
        "https://youtube.com/embed/gio1Z7rXiAY",
        "https://youtube.com/embed/j7hGVxciCYg",
      ],
      career_webinar: [
        "https://youtube.com/embed/PQTG3xcNW_o",
        "https://www.youtube.com/embed/BDNf_pWDKGc",
        "https://www.youtube.com/embed/KMIvfZWJjn0",
        "https://www.youtube.com/embed/Em3Rtgb7uNw",
      ],
      playlist: [
        "https://www.youtube.com/embed/Em3Rtgb7uNw",
        "https://youtube.com/embed/XksK1_YWZhU",
        "https://www.youtube.com/embed/BDNf_pWDKGc",
        "https://youtube.com/embed/gio1Z7rXiAY",
        "https://www.youtube.com/embed/KMIvfZWJjn0",
        "https://youtube.com/embed/j7hGVxciCYg",
        "https://www.youtube.com/embed/PQTG3xcNW_o",
        "https://youtube.com/embed/mHA4BxZTXlk",
      ],
      options: {
        autoPlay: true,
        type: "loop",
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
  },
};
</script>
<style scoped>
iframe {
  width: 100% !important;
  height: 15em;
  border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in-out;
}

.label-webinar {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 11px;
  letter-spacing: 1px;
  border: 1px solid rgb(179, 178, 178);
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
  padding: 25%;
  text-align: center;
  background: #1a2d63d5;
  opacity: 0;
  font-size: 18px;
  font-weight: bold;
  height: 13.3em;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease-in;
}

.frame:hover .frame-overlay {
  opacity: 1;
}

@media only screen and (max-width: 800px) {
  iframe {
    height: 9em;
  }
}
</style>