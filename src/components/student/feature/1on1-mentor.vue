<template>
  <div id="1on1">
    <h2 class="content-title">1-on-1 Mentoring</h2>
    <Splide :options="options">
      <SplideSlide v-for="i in 10" :key="i">
        <div class="card pointer shadow shadow-md border-0 h-100">
          <div class="call-label" v-if="i % 2 == 0 && type == 'mentor-project'">
            Personal Project Only
          </div>
          <div class="card-body">
            <div class="img-call mb-2">
              <img
                v-lazy="'https://picsum.photos/id/' + i * 2 + '/200/200'"
                alt="Mentoring"
              />
            </div>
            <h5 class="call-name">Mentor Name {{ i }}</h5>
            <p class="call-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <button class="btn btn-allin btn-sm btn-success">
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
  },
  data() {
    return {
      options: {
        autoPlay: true,
        // type: "loop",
        arrows: false,
        pagination: false,
        width: "100%",
        perPage: 4,
        gap: 20,
        padding: { left: "0", right: "4rem" },
        breakpoints: {
          800: {
            perPage: 2,
          },
          640: {
            perPage: 1,
            padding: { left: "0", right: "2rem" },
          },
        },
      },
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
  background: #ebf3fd;
  border-radius: 15px;
  box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 10px 4px -7px rgba(0, 0, 0, 0.75);
}

.img-call {
  height: auto;
  overflow: hidden;
  border-radius: 15px;
}

.img-call img {
  width: 100%;
  transition: transform 0.5s ease;
}

.img-call img:hover {
  transform: scale(1.1);
}

.call-label {
  background: #223872;
  position: absolute;
  top: 0;
  right: -5px;
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  z-index: 99;
}

.call-name {
  font-size: 1.3em;
  font-weight: bold;
  color: #eaa464;
}

.call-desc {
  color: #223872;
}
</style>