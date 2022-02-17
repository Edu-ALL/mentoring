<template>
  <div id="1on1">
    <h2 class="content-title">1-on-1 with Essay Editors</h2>
    <h5 class="content-desc">
      Set a time to perfect your essay! Connect with our highly-experienced,
      professional essay editors that could help to navigate your essay writing
      process.
    </h5>
    <Splide :options="options">
      <SplideSlide v-for="i in editor" :key="i">
        <div
          class="card pointer shadow shadow-md border-0 h-100"
          @click="call(i)"
        >
          <div class="card-body">
            <div class="img-call mb-2">
              <img v-lazy="i.foto" />
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
  name: "1on1-editor",
  props: {
    tab: String,
  },
  data() {
    return {
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
      editor: [
        {
          name: "Anushka Gupta",
          foto: require("@/assets/img/editor/anushka.webp"),
          uni: "Imperial College London",
        },
        {
          name: "Alysha Manik",
          foto: require("@/assets/img/editor/alysha.webp"),
          uni: "University of Southern California",
        },
        {
          name: "Keren",
          foto: require("@/assets/img/editor/keren.webp"),
          uni: "Royal Holloway, University of London",
        },
        {
          name: "Fedora Gracia",
          foto: require("@/assets/img/editor/fedora.webp"),
          uni: "Monash University",
        },
      ],
    };
  },
  methods: {
    call(i) {
      this.$router.push({
        name: "1on1Call",
        params: { cat: "editor", tab: this.tab, userData: JSON.stringify(i) },
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
  background: #fdf5eb;
  border-radius: 15px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.img-call {
  height: auto;
  overflow: hidden;
  border-radius: 15px;
  background: rgb(86, 84, 240);
  background: linear-gradient(
    180deg,
    rgba(86, 84, 240, 1) 10%,
    rgba(102, 109, 201, 1) 65%
  );
}

.img-call img {
  width: 100%;
  transition: transform 0.5s ease;
}

.img-call img:hover,
.card:hover .img-call img {
  transform: scale(1.1);
}

.call-name {
  font-size: 1.3em;
  font-weight: bold;
  color: #223872;
}

.call-desc {
  color: #a86629;
  margin-bottom: 45px;
  line-height: 1.2;
}

.btn-call {
  position: absolute;
  bottom: 20px;
}
</style>