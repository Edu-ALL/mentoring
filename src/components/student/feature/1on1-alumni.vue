<template>
  <div id="1on1">
    <h2 class="content-title">1-on-1 with Existing University Students</h2>
    <Splide :options="options">
      <SplideSlide v-for="i in alumni" :key="i">
        <div class="card pointer shadow shadow-md border-0 h-100">
          <div class="card-body">
            <div class="img-call mb-2">
              <img v-lazy="i.photo" />
            </div>
            <h5 class="call-name">{{ i.name }}</h5>
            <p class="call-desc">
              {{ i.uni }}
            </p>
            <button class="btn btn-allin btn-sm btn-call bg-secondary">
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
  name: "1on1-alumni",
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
      alumni: [
        {
          name: "Stanislas Alysha Wang",
          uni: "SC School of Cinematics Art - Cinematic Film and TV Production",
          photo: require("@/assets/img/alumni/alysha.webp"),
        },
        {
          name: "Valencia Kandila",
          uni: "University of Pennsylvania - Neuroscience",
          photo: require("@/assets/img/alumni/valencia.webp"),
        },
        {
          name: "Kelly Bajuadji",
          uni: "New York University - Psychology",
          photo: require("@/assets/img/alumni/kelly.webp"),
        },
        {
          name: "Darren Lee",
          uni: "UC Berkeley - Political Science",
          photo: require("@/assets/img/alumni/darren.webp"),
        },
        {
          name: "Anushka Daruka",
          uni: "Simon Fraser University - Business",
          photo: require("@/assets/img/alumni/anushka.webp"),
        },
      ],
    };
  },
  created() {},
};
</script>
<style>
.splide__list {
  padding: 20px !important;
}
</style>
<style scoped>
.card {
  background: #ddddf8;
  border-radius: 15px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.img-call {
  background: rgb(117, 107, 248);
  background: linear-gradient(
    180deg,
    rgb(112, 109, 252) 18%,
    rgba(69, 66, 235, 0.39) 65%
  );
  height: auto;
  overflow: hidden;
  border-radius: 15px;
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
  margin-bottom: 50px;
  color: #4d4d4d;
  line-height: 1.2;
}

.btn-call {
  position: absolute !important;
  bottom: 20px !important;
}
</style>