<template>
  <transition name="fade">
    <v-loader v-if="loading"></v-loader>
  </transition>
  <transition name="fade">
    <div id="home" v-if="!loading">
      <v-header @modal="checkModal"></v-header>
      <div
        id="homeMentoring"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeMentoring"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeMentoring"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeMentoring"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <div id="section1">
              <div class="container h-100">
                <div class="row h-100 align-items-center">
                  <div class="col text-md-start text-center">
                    <img
                      src="@/assets/img/logo-color.png"
                      alt=""
                      class="home-logo"
                    />
                    <h1 class="home-title">DARE TO DREAM</h1>
                    <h2 class="home-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni beatae repudiandae quas consectetur et pariatur
                      animi distinctio, error incidunt repellendus atque! Maxime
                      dignissimos minima et laboriosam obcaecati, dolore magni
                      ipsam!
                    </h2>
                    <div class="home-button">
                      <button class="btn btn-allin bg-secondary py-1">
                        Take Profile Quiz Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div id="section2">
              <div class="container h-100">
                <div class="row h-100 align-items-center">
                  <div class="col text-md-start text-center">
                    <img
                      src="@/assets/img/logo-color.png"
                      alt=""
                      class="home-logo"
                    />
                    <h1 class="home-title">
                      CONNECT WITH
                      <div class="text-secondary d-inline">25</div>
                      GLOBAL UNIVERSITY GRADUATE MENTORS
                    </h1>
                    <h2 class="home-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni beatae repudiandae quas consectetur et pariatur
                      animi distinctio, error incidunt repellendus atque! Maxime
                      dignissimos minima et laboriosam obcaecati, dolore magni
                      ipsam!
                    </h2>
                    <div class="home-button">
                      <button class="btn btn-allin bg-secondary py-1">
                        Take Profile Quiz Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div id="section3">
              <div class="container h-100">
                <div class="row h-100 align-items-center">
                  <div class="col text-md-start text-center">
                    <img
                      src="@/assets/img/logo-color.png"
                      alt=""
                      class="home-logo"
                    />
                    <h1 class="home-title">
                      ACCESS TO
                      <div class="text-secondary d-inline">100+</div>
                      WEBINAR
                    </h1>
                    <h2 class="home-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni beatae repudiandae quas consectetur et pariatur
                      animi distinctio, error incidunt repellendus atque! Maxime
                      dignissimos minima et laboriosam obcaecati, dolore magni
                      ipsam!
                    </h2>
                    <div class="home-button">
                      <button class="btn btn-allin bg-secondary py-1">
                        Take Profile Quiz Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeMentoring"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeMentoring"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> -->
      </div>
      <v-footer></v-footer>

      <!-- Modal -->
      <transition name="fade" appear>
        <div
          class="vue-modal-overlay"
          v-if="showModal != ''"
          @click="showModal = ''"
        ></div>
      </transition>
      <!-- Login  -->
      <transition name="pop" appear>
        <v-login v-if="showModal == 'login'" @show="checkModal"></v-login>
      </transition>

      <!-- Register  -->
      <transition name="pop" appear>
        <v-register
          v-if="showModal == 'register'"
          @show="checkModal"
        ></v-register>
      </transition>

      <!-- Verify  -->
      <transition name="pop" appear>
        <v-verify v-if="showModal == 'verify'" @show="checkModal"></v-verify>
      </transition>

      <!-- Forgot  -->
      <transition name="pop" appear>
        <v-forgot v-if="showModal == 'forgot'" @show="checkModal"></v-forgot>
      </transition>

      <!-- Reset  -->
      <transition name="pop" appear>
        <v-reset v-if="showModal == 'reset'" @show="checkModal"></v-reset>
      </transition>
    </div>
  </transition>
</template>
<script>
import header from "@/components/layout/home/header";
import Loader from "@/components/library/loader";
import footer from "@/components/layout/home/footer";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import Verify from "@/components/auth/verify";
import Forgot from "@/components/auth/forgot";
import Reset from "@/components/auth/reset";

export default {
  name: "home",
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-loader": Loader,
    "v-login": Login,
    "v-register": Register,
    "v-verify": Verify,
    "v-forgot": Forgot,
    "v-reset": Reset,
  },
  data() {
    return {
      loading: true,
      showModal: "",
    };
  },
  methods: {
    load(status) {
      this.loading = status;
    },
    checkModal(name) {
      this.showModal = name;
    },
    checkReset() {
      this.showModal = "reset";
    },
  },
  created() {
    if (this.$route.params.page && this.$route.params.token) {
      this.checkReset();
    }

    setTimeout(() => {
      this.load(false);
    }, 1000);
  },
};
</script>
<style>
#section1 {
  height: 100vh;
  background: #dedede;
}

#section2 {
  height: 100vh;
  background: #fff;
}

#section3 {
  height: 100vh;
  background: rgb(201, 206, 255);
}

.home-logo {
  width: 250px;
  object-fit: cover;
  margin-bottom: 20px;
}

.home-title {
  width: 70%;
  font-size: 3.8em;
  color: #223872;
  font-weight: bold;
  margin-bottom: 2%;
}

.home-desc {
  width: 70%;
  font-size: 1.2em;
  font-weight: normal;
  margin-bottom: 3%;
}

.carousel-indicators [data-bs-target] {
  background-color: #223872 !important;
}

@media only screen and (max-width: 600px) {
  .home-logo {
    width: 150px;
  }

  .home-title {
    width: 100%;
    font-size: 2em;
    margin-bottom: 20px;
  }

  .home-desc {
    width: 100%;
    font-size: 1em;
    margin-bottom: 20px;
  }
}
</style>