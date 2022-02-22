<template>
  <div id="upcomingEvent">
    <v-header></v-header>
    <transition name="fade">
      <div class="container my-3 mt-5" v-if="!loading">
        <div class="row mt-4">
          <div class="col-md-8">
            <div class="text-start mb-2 back-btn" @click="back">
              <vue-feather
                type="arrow-left"
                class="float-start mt-0 me-2"
              ></vue-feather>
              Upcoming Events
            </div>
            <div class="card border-0">
              <div class="card-img">
                <img v-lazy="'https://picsum.photos/500/500'" alt="" />
              </div>
              <div class="u-title">
                {{ event.topic }}
              </div>
              <hr class="my-1" />
              <div class="u-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, veniam. At voluptate sed, molestias delectus quo
                provident aliquam iure modi autem asperiores et inventore
                reprehenderit placeat consequatur cumque laboriosam nobis. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                quasi rem eius at, vero ad inventore quisquam odio iste rerum,
                porro quas repellendus enim sint, nostrum nihil non voluptate
                necessitatibus.
              </div>

              <div class="u-speaker my-3">
                <h5>Speakers:</h5>
                <div
                  class="
                    row
                    justify-content-center
                    d-flex
                    align-items-stretch
                    row-cols-2
                    g-2
                  "
                >
                  <div class="col" v-for="i in 4" :key="i">
                    <div class="card shadow border-0">
                      <div class="row align-items-center g-1">
                        <div class="col-4 text-center p-3">
                          <img
                            v-lazy="'https://picsum.photos/500/500'"
                            alt=""
                            class="u-speaker-img"
                          />
                        </div>
                        <div class="col-8 p-3">
                          <div class="u-speaker-name">Full Name</div>
                          <div class="u-speaker-label">
                            Software Engineer at PT ABCD
                          </div>
                          <div class="u-speaker-desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Saepe aut quo doloribus molestias fugit,
                            pariatur odio accusantium amet adipisci, quidem
                            architecto odit.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-md-0 mt-3">
            <div class="sticky-top" style="top: 20px">
              <table class="table table-hover align-middle">
                <thead>
                  <tr>
                    <th colspan="2">
                      <vue-feather
                        type="calendar"
                        class="float-start mt-0 me-2"
                      ></vue-feather>
                      Date & Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24 Feb 2022</td>
                    <td class="text-end">
                      09.00-12.00 <br />
                      14.00-16.00
                    </td>
                  </tr>
                  <tr>
                    <td>25 Feb 2022</td>
                    <td class="text-end">
                      09.00-12.00 <br />
                      14.00-16.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="card border-0 shadow-sm mb-3">
                <div class="u-price-title">
                  <vue-feather
                    type="tag"
                    class="float-start mt-1 me-2 ms-1"
                  ></vue-feather>
                  Price
                </div>
                <div class="u-price">Rp. 4.500.000</div>
                <div class="u-discount">Rp. 5.000.000</div>
              </div>
              <button class="btn btn-join shadow-sm mt-3">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Header from "@/components/layout/student/header";

export default {
  name: "upcoming",
  props: {
    tab: String,
    eventData: String,
  },
  components: {
    "v-header": Header,
  },
  data() {
    return {
      loading: true,
      event: [],
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "userDashboard",
        params: { newTab: this.tab },
      });
    },
  },
  created() {
    document.title = "Upcoming Event";
    setTimeout(() => {
      this.event = JSON.parse(this.$route.params.eventData);
      this.loading = false;
    }, 500);
  },
};
</script>
<style scoped>
.card-img {
  height: 350px;
  width: 100%;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
}

.card:hover > .card-img img,
.card-img img:hover {
  transform: scale(1.1);
}

.u-title {
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0px;
}

.u-speaker-img {
  width: 100%;
}

.u-speaker-name {
  font-weight: bold;
}

.u-speaker-label {
  font-size: 0.9em;
  color: #636262;
  margin-bottom: 10px;
}

.u-price-title {
  font-size: 1em;
  font-weight: bold;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.u-speaker-desc {
  font-size: 0.8em;
}

.u-price {
  padding-right: 5px;
  font-size: 1.4em;
  font-weight: bold;
  text-align: right;
  color: #223872;
}

.u-discount {
  color: #f0ab54;
  font-size: 0.9em;
  padding-right: 7px;
  padding-bottom: 10px;
  text-align: right;
  text-decoration: line-through;
}

.btn-join {
  font-size: 1.1em;
  font-weight: bold;
  width: 100%;
  border-radius: 20px;
  background: #223872;
  color: #fff;
}
</style>