<template>
  <div id="page">
    <v-header></v-header>
    <transition name="fade">
      <div id="content" v-if="!loading">
        <div class="container">
          <div class="row g-3 my-3">
            <div class="col-md-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="float-start">
                    <vue-feather
                      type="arrow-left"
                      @click="back"
                      class="back-btn"
                      >Back</vue-feather
                    >
                  </div>
                  <img src="@/assets/img/logo-color.png" class="logo-picture" />
                  <div class="call-picture">
                    <img :src="mentor.foto" alt="" />
                  </div>
                  <p class="text-primary my-2">
                    <vue-feather
                      type="info"
                      class="float-start mt-0 me-2"
                    ></vue-feather>
                    Information
                  </p>
                  <hr class="my-0" />
                  <span class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Suscipit consectetur ipsum assumenda aut temporibus cum,
                    possimus obcaecati mollitia necessitatibus maiores natus eos
                    illum a, dolores quaerat adipisci fugit repellat molestias!
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="call-name">{{ mentor.name }}</div>
                  <div class="call-desc text-muted">{{ mentor.uni }}</div>
                  <hr class="my-2" />
                  <p class="my-0 mb-2">Select Date</p>
                  <div class="float-end">
                    <button class="btn-select" @click="openDate()">
                      <vue-feather
                        type="calendar"
                        size="18"
                        class="float-start mt-1 me-2"
                      ></vue-feather>
                      {{
                        this.selectDate ? formatDate(this.selectDate) : "Select"
                      }}
                    </button>
                    <v-datepicker
                      @update:modelValue="checkTime"
                      placeholder="Select"
                      ref="datepicker"
                      :enableTimePicker="false"
                      v-model="selectDate"
                    >
                    </v-datepicker>
                  </div>
                  <div class="day-list">
                    <button class="btn-day">
                      Monday <br />
                      07 Feb
                    </button>
                    <button class="btn-day d-md-inline d-none">
                      Wednesday <br />
                      08 Feb
                    </button>
                    <button class="btn-day d-md-inline d-none">
                      Thursday <br />
                      09 Feb
                    </button>
                  </div>
                  <div class="time-list my-2">
                    <p class="my-0 mb-2">Select Time</p>
                    <div class="card">
                      <div class="card-body pt-3">
                        <div
                          class="
                            row row-cols-md-1 row-cols-1
                            justify-content-center
                          "
                        >
                          <div class="col">
                            <p class="mb-1">Morning</p>
                            <button
                              class="btn-time mb-2"
                              v-for="i in 3"
                              :key="i"
                            >
                              {{ i + 7 }}.00
                            </button>
                            <hr />
                          </div>
                          <div class="col">
                            <p class="mb-1">Afternoon</p>
                            <button
                              class="btn-time mb-2"
                              v-for="i in 4"
                              :key="i"
                            >
                              {{ 10 + i }}.00
                            </button>
                            <hr />
                          </div>
                          <div class="col">
                            <p class="mb-1">Evening</p>
                            <button
                              class="btn-time mb-2"
                              v-for="i in 4"
                              :key="i"
                            >
                              {{ 14 + i }}.00
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="float-end my-3">
                    <button class="btn btn-allin bg-primary">
                      Make an Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import "moment";
import Header from "@/components/layout/student/header";
import moment from "moment";

export default {
  name: "call-detail",
  props: {
    cat: String,
    tab: String,
    userData: Object,
  },
  components: {
    "v-header": Header,
  },
  data() {
    return {
      loading: true,
      selectDate: null,
      mentor: [],
    };
  },
  methods: {
    openDate() {
      this.$refs["datepicker"].openMenu();
    },
    checkTime() {
      console.log(this.selectDate);
    },
    formatDate(data) {
      return moment(data).format("MMM Do");
    },
    back() {
      this.$router.push({
        name: "userDashboard",
        params: { newTab: this.tab },
      });
    },
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 100);

    this.mentor = JSON.parse(this.userData);
  },
};
</script>
<style>
@media only screen and (max-width: 800px) {
  .dp__menu {
    left: 60% !important;
  }
}
</style>
<style scoped>
.dp__main {
  width: 115px !important;
  opacity: 0;
  margin-top: -32px;
}

.call-picture {
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.call-picture img {
  position: relative;
  padding: 10px 10%;
  width: 100%;
  z-index: 2;
}

.logo-picture {
  width: 45%;
  z-index: 1;
  float: right;
}

.call-name {
  font-size: 1.8em;
  font-weight: 800;
}

.call-desc {
  font-size: 1.1em;
}

.btn-select {
  background: #f7f7f7;
  border: 1px solid #dedede;
  color: #646464;
  border-radius: 20px;
  padding: 12px 20px;
}

.btn-day {
  background: #f7f7f7;
  border: 1px solid #dedede;
  color: #646464;
  border-radius: 20px;
  margin-right: 5px;
  padding: 5px 20px;
  font-size: 13px;
  transition: all 0.6s ease-in-out;
}

.btn-day:focus,
.btn-select:focus {
  background: #fff;
  color: rgb(40, 42, 143);
  border: 1px solid rgb(40, 42, 143);
}

.btn-time {
  background: #ffb657;
  border: 1px solid #eea74a;
  color: #2c2c2c;
  border-radius: 20px;
  margin-right: 10px;
  padding: 5px 20px;
  font-size: 13px;
  transition: all 0.3s ease-in-out;
}

.btn-time:focus {
  background: #26398b;
  border: 1px solid #17276d;
  color: #fff;
}

.back-btn {
  cursor: pointer;
  color: #17276d;
  transition: all 0.2s ease-in-out;
}

.back-btn:hover {
  color: #eea74a;
}

@media only screen and (max-width: 800px) {
  .dp__menu {
    left: 60% !important;
  }
}
</style>