<template>
  <div id="webinar">
    <div v-if="type == 'career'">
      <h2 class="content-title">Career Industry Webinar</h2>
      <Splide :options="options">
        <SplideSlide v-for="i in playlist" :key="i">
          <iframe
            lazy="loading"
            width="100%"
            height="200"
            :src="
              i + '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
            "
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SplideSlide>
      </Splide>
    </div>

    <div v-if="type == 'uni-prep'">
      <h2 class="content-title">University Preparation Webinar</h2>
      <Splide :options="options">
        <SplideSlide v-for="i in playlist" :key="i">
          <iframe
            lazy="loading"
            width="100%"
            height="200"
            :src="
              i + '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
            "
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SplideSlide>
      </Splide>
    </div>

    <div v-if="type == 'all-in'">
      <h2 class="content-title">ALL-in Webinar</h2>
      <Splide :options="options">
        <SplideSlide v-for="i in playlist" :key="i">
          <iframe
            lazy="loading"
            width="100%"
            height="200"
            :src="
              i + '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
            "
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>
<script>
export default {
  name: "webinar",
  props: {
    type: String,
  },
  data() {
    return {
      playlist: [
        "https://www.youtube.com/embed/BDNf_pWDKGc",
        "https://www.youtube.com/embed/KMIvfZWJjn0",
        "https://www.youtube.com/embed/Em3Rtgb7uNw",
        "https://www.youtube.com/embed/PQTG3xcNW_o",
      ],
      options: {
        autoPlay: true,
        // type: "loop",
        arrows: true,
        pagination: false,
        width: "100%",
        perPage: 2,
        gap: 20,
        padding: { left: "0", right: "4rem" },
        breakpoints: {
          800: {
            perPage: 2,
          },
          640: {
            perPage: 1,
            padding: { left: "0", right: "1rem" },
          },
        },
      },
    };
  },
  created() {},
};
</script>
<style scoped>
iframe {
  border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 17px -10px rgba(0, 0, 0, 0.75);
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
  background: url("https://dummyimage.com/600x150/f5f5f5/ededed&text=Loading");
}
</style>