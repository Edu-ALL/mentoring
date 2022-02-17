<template>
  <div id="1on1">
    <h2 class="content-title">1-on-1 Mentoring</h2>
    <h5 class="content-desc">
      Have an individual session and get guidance on improving your skills
      directly! <br />
      Our top world’s universities graduate & accomplished mentors are here,
      ready to support you.
    </h5>
    <Splide :options="options">
      <SplideSlide v-for="(i, index) in mentor" :key="index">
        <div
          class="card pointer shadow shadow-md border-0 h-100"
          @click="call(i)"
        >
          <div
            class="call-label"
            v-if="i.type == 'project' && type == 'mentor-project'"
          >
            Personal Project Only
          </div>
          <div class="card-body">
            <div class="img-call mb-2">
              <img v-lazy="i.foto" alt="Mentoring" />
            </div>
            <h5 class="call-name">{{ i.name }}</h5>
            <p class="call-desc">
              {{ i.uni }}
            </p>
            <button
              class="btn btn-allin btn-sm btn-success btn-call"
              @click="call(i)"
            >
              <vue-feather
                type="phone-call"
                size="15"
                class="me-1"
              ></vue-feather>
              Book a Call
            </button>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>
<script>
export default {
  name: "1on1-mentoring",
  props: {
    type: String,
    tab: String,
  },
  data() {
    return {
      mentor: [
        {
          name: "Devi Kasih",
          foto: require("@/assets/img/mentor/devi.webp"),
          uni: "University of Pennsylvania",
          type: "",
        },
        {
          name: "Nicholas Soepriatna",
          foto: require("@/assets/img/mentor/nich.webp"),
          uni: "Purdue University, University of Texas at Austin",
          type: "",
        },
        {
          name: "Paul Edison",
          foto: require("@/assets/img/mentor/paul.webp"),
          uni: "UC Berkeley",
          type: "",
        },
        {
          name: "Sharon Angela",
          foto: require("@/assets/img/mentor/sharon.webp"),
          uni: "Taipei Medical University",
          type: "",
        },
        {
          name: "Eviana Misty",
          foto: require("@/assets/img/mentor/evi.webp"),
          uni: "Tarumanagara University",
          type: "",
        },
        {
          name: "Chiara Situmorang",
          foto: require("@/assets/img/mentor/chiara.webp"),
          uni: "University of Melbourne",
          type: "",
        },
        {
          name: "Ivana Rachmawati",
          foto: require("@/assets/img/mentor/ivana.webp"),
          uni: "Harvard University",
          type: "project",
        },
        {
          name: "Michael Kurniawan",
          foto: require("@/assets/img/mentor/michael.webp"),
          uni: "Carnegie Mellon University, Nanyang Technological University",
          type: "project",
        },
        {
          name: "Jane Tjahjono",
          foto: require("@/assets/img/mentor/jane.webp"),
          uni: "Harvard Kennedy School",
          type: "project",
        },
        {
          name: "Farand Anugerah",
          foto: require("@/assets/img/mentor/farand.webp"),
          uni: "Shanghai Jiaotong University, Harvard Business School",
          type: "project",
        },
      ],
      options: {
        autoPlay: true,
        focus: "center",
        arrows: false,
        pagination: false,
        width: "100%",
        perPage: 4,
        gap: 20,
        padding: { left: "0", right: "10rem" },
        breakpoints: {
          800: {
            perPage: 2,
          },
          640: {
            focus: "center",
            type: "loop",
            perPage: 1,
            padding: { left: "2rem", right: "2rem" },
          },
        },
      },
    };
  },
  methods: {
    call(i) {
      this.$router.push({
        name: "1on1Call",
        params: { cat: "mentor", tab: this.tab, userData: JSON.stringify(i) },
      });
    },
  },
  created() {},
};
</script>
<style>
.splide__list {
  padding: 20px 0 !important;
}
</style>
<style scoped>
.card {
  background: #ebf3fd;
  border-radius: 15px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.img-call {
  height: 250px;
  overflow: hidden;
  border-radius: 15px;
  background: rgb(240, 171, 84);
  background: linear-gradient(
    180deg,
    rgba(240, 171, 84, 1) 18%,
    rgb(255, 219, 174) 65%
  );
  transition: all 10s ease-in;
  object-fit: cover;
}

.img-call img {
  width: 100%;
  transition: all 0.5s ease-in-out;
}

.card:hover .img-call img {
  border-radius: 15px;
  transform: scale(1.05);
  /* background: rgb(51, 43, 156);
  background: linear-gradient(
    180deg,
    rgb(60, 23, 161) 18%,
    rgb(110, 100, 255) 65%
  ); */
}

.call-label {
  background: #223872;
  position: absolute;
  z-index: 99999;
  top: 0;
  right: -5px;
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
}

.call-name {
  font-size: 1.3em;
  font-weight: bold;
  color: #dd8d41;
  margin-bottom: 0px;
}

.call-desc {
  color: #223872;
  margin-bottom: 45px;
  line-height: 1.2;
}

.btn-call {
  position: absolute;
  z-index: 99;
  bottom: 20px;
}
</style>