<template>
  <div id="webinar">
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
              Webinar List
            </div>
            <div class="frame">
              <iframe
                lazy="loading"
                width="100%"
                height="100%"
                :src="
                  webinarData +
                  '?&theme=light&autohide=2&modestbranding=1&showinfo=0&rel=0'
                "
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <h2 class="w-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              in nisi laborum temporibus tempore numquam porro sed
            </h2>
            <div class="w-label">
              <div class="float-start">1.323 x watched</div>
              <div class="float-end">14 Feb 2022</div>
            </div>
            <p class="w-desc mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nulla eius dolore fugiat est dolores pariatur aperiam illo numquam
              voluptas? Ratione cupiditate blanditiis optio officiis, sed
              dignissimos modi explicabo aliquam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Optio aliquid modi in praesentium
            </p>
          </div>
          <div class="col-md-4 pt-md-4 pt-2">
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
    </transition>
  </div>
</template>
<script>
import Header from "@/components/layout/student/header";

export default {
  name: "webinar",
  props: {
    tab: String,
    webinarData: String,
  },
  components: {
    "v-header": Header,
  },
  data() {
    return {
      loading: true,
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
    document.title = "Webinar";
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
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