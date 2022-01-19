<template>
  <div id="1on1">
    <h2 class="content-title">1-on-1 with Essay Editors</h2>
    <Splide :options="options">
      <SplideSlide v-for="i in 4" :key="i">
        <div class="card pointer shadow shadow-md border-0 h-100">
          <div class="card-body">
            <div class="img-call mb-2">
              <img
                v-lazy="'https://picsum.photos/id/' + i * 12 + '/200/200'"
                alt="Essay Editor"
              />
            </div>
            <h5 class="call-name">Editor Name {{ i }}</h5>
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
  name: "1on1-editor",
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
}

.img-call img {
  width: 100%;
  transition: transform 0.5s ease;
}

.img-call img:hover {
  transform: scale(1.1);
}

.call-name {
  font-size: 1.3em;
  font-weight: bold;
  color: #223872;
}

.call-desc {
  color: #a86629;
}
</style>