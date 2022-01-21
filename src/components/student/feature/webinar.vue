<template>
  <div id="webinar">
    <div v-if="type == 'career'">
      <h2 class="content-title">Career Industry Webinar</h2>
      <Splide :options="options">
        <SplideSlide v-for="i in career_webinar" :key="i">
          <iframe
            lazy="loading"
            width="100%"
            height="100%"
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
        <SplideSlide v-for="i in uniprep_webinar" :key="i">
          <iframe
            lazy="loading"
            width="100%"
            height="100%"
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
            height="100%"
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
        focus: "center",
        arrows: false,
        pagination: true,
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
            padding: { left: "0", right: "0" },
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
  width: 100% !important;
  height: 20em;
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
  background-image: url("~@/assets/img/video.webp");
  object-fit: cover;
  background-position: center;
}

@media only screen and (max-width: 800px) {
  iframe {
    height: 9em;
  }
}
</style>