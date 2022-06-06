<template>
  <div id="webinarDetail">
    <div class="row">
      <div class="col-12">
        <div class="sticky-top pointer" style="top: 100px" @click="redirect">
          <i class="fa-solid fa-arrow-left me-2"></i>
          <h5 class="d-inline">Webinar</h5>
        </div>
      </div>
    </div>

    <div class="row g-2">
      <div class="col-md-8 pt-2">
        <div class="frame">
          <iframe
            lazy="loading"
            width="100%"
            height="100%"
            :src="'https://youtube.com/embed/mHA4BxZTXlk?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h2 class="w-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          nisi laborum temporibus tempore numquam porro sed
        </h2>
        <div class="w-label">
          <div class="float-start">1.323 x watched</div>
          <div class="float-end">14 Feb 2022</div>
        </div>
        <p class="w-desc mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla
          eius dolore fugiat est dolores pariatur aperiam illo numquam voluptas?
          Ratione cupiditate blanditiis optio officiis, sed dignissimos modi
          explicabo aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Optio aliquid modi in praesentium
        </p>
      </div>
      <div class="col-md-4">
        <div class="card border-0">
          <div class="row w-rec-list" v-for="i in 5" :key="i">
            <div class="col-md-5">
              <div class="rec-frame">
                <iframe
                  lazy="loading"
                  width="100%"
                  height="100%"
                  src="https://youtube.com/embed/mHA4BxZTXlk?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0"
                  title="YouTube video player"
                  frameborder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-md-7">
              <div class="rec-title">
                Lorem ipsum dolor sit amet consectetur, adipisicing ...
              </div>
              <div class="rec-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem nesciunt aut nemo fugit adipisci..
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "webinarDetail",
  props: {
    menu: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    back() {},
  },
  created() {},
};
</script>
<style scoped>
.frame {
  height: 450px;
  margin-bottom: 10px;
}
.w-title {
  font-size: 1.3em;
  font-weight: normal;
  color: rgb(39, 38, 38);
}
.w-label {
  text-align: right;
  margin-bottom: 40px;
  font-size: 0.8em;
}
.w-desc {
  font-size: 0.9em;
  color: rgb(99, 99, 99);
  text-align: justify;
}
.rec-frame {
  height: 100px;
}
.rec-title {
  font-size: 0.8em;
  font-weight: bold;
  border-bottom: 1px solid #dedede;
  margin-bottom: 10px;
}
.rec-desc {
  font-size: 0.7em;
}
.w-rec-list {
  padding: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
.w-rec-list:hover {
  background: rgb(224, 224, 224);
  border-radius: 5px;
}
.back-btn {
  cursor: pointer;
}
</style>