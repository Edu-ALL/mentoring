<template>
  <div id="webinarDetail">
    <div class="row mb-3" style="margin-top: -20px">
      <div class="col-12">
        <div class="pointer" @click="redirect">
          <i class="fa-solid fa-arrow-left me-2"></i>
          <h5 class="d-inline">Webinars</h5>
        </div>
      </div>
    </div>
    <div class="row g-3">
      <div class="col-md-8 pt-2">
        <div class="frame">
          <v-youtube
            v-if="data_detail?.length != 0"
            :src="data_detail.dtl_video_link"
            @state-change="checkYoutube"
            lazy="loading"
            width="100%"
            height="420px"
            :vars="{
              autoplay: 0,
              rel: 0,
              loop: 1,
              modestbranding: 0,
              origin: 1,
              fs: 1,
              start:
                data_detail.watch_info == null
                  ? 0
                  : data_detail.watch_info.current_time,
              controls: 0,
            }"
            ref="youtube"
            class="w-100 h-100"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <h2 class="w-title">
          {{ data_detail.dtl_name }}
        </h2>
        <div class="w-label">
          <div class="float-start">
            {{
              data_detail.student_activities_count == 0
                ? "Be the first viewer"
                : data_detail.student_activities_count + "x watched"
            }}
          </div>
          <div class="float-end">
            {{ $customDate.date(data_detail.updated_at) }}
          </div>
        </div>
        <p class="w-desc mt-2">
          {{ data_detail.dtl_desc }}
        </p>
      </div>

      <!-- Related  -->
      <div class="col-md-4 related mentoring-scroll">
        <div class="card border-0">
          <div
            class="row w-rec-list"
            v-for="i in recommendation"
            :key="i"
            @click="webinar(i.id)"
          >
            <div class="col-md-5">
              <div class="rec-frame">
                <img
                  :src="getThumbnail(i.dtl_video_link)"
                  alt="Webinar"
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-md-7">
              <div class="rec-title">
                {{ i.dtl_name }}
              </div>
              <div class="rec-desc">
                {{ $customText.text(i.dtl_desc, 100) }}
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
    return {
      data_detail: [],
      recommendation: [],
    };
  },
  methods: {
    redirect() {
      this.$router.push({ path: "/user/my-activity/webinar" });
    },

    webinar(i) {
      window.location.href = "/user/my-activity/webinar/" + i;
      // this.$router.push({ path: "/user/my-activity/webinar/" + i });
    },

    getThumbnail(i) {
      const arr = i.split("/");

      return "https://i3.ytimg.com/vi/" + arr[4] + "/maxresdefault.jpg";
    },

    async getData(i) {
      try {
        const response = await this.$axios.get(
          "student/programme/view/detail/" + i
        );

        this.data_detail = response.data.data.detail;
        this.recommendation = response.data.data.other;

        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async joinWebinar(duration) {
      try {
        const response = await this.$axios.post("student/make/webinar", {
          prog_dtl_id: this.data_detail.id,
          video_duration: duration,
        });

        this.data_detail = response.data.data.detail;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async updateProgress(time) {
      try {
        const response = await this.$axios.put(
          "student/update/watch/" + this.data_detail.watch_info.std_act_id,
          {
            current_time: time,
          }
        );

        this.data_detail.watch_info = response.data.data;

        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async checkYoutube(e) {
      const duration = e.target.getDuration();
      const time = Math.round(e.target.getCurrentTime());

      // when playing
      if (e.data == 1) {
        if (this.data_detail.watch_info == null) {
          this.joinWebinar(duration);
        }
        // console.log(this.data_detail.watch_info);
        // this.data_detail.watch_info.length == 0
        // alert('test')
      }
      // when ended & paused
      else if (e.data == 0 || e.data == 2) {
        this.updateProgress(time);
      }
    },
  },

  created() {
    if (this.$route.params.key) {
      this.getData(this.$route.params.key);
    }
  },
  watch: {
    $route(to) {
      if (to.params.key) {
        this.getData(to.params.key);
      }
    },
  },
};
</script>
<style scoped>
[lazy="loading"] {
  background-image: url("~@/assets/img/loading.gif");
  background-size: 1em;
  background-repeat: no-repeat;
  background-position: center;
}
.frame {
  height: auto;
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
  height: auto;
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
  background: rgba(224, 224, 224, 0.29);
  border-radius: 5px;
}
.back-btn {
  cursor: pointer;
}

.related {
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>