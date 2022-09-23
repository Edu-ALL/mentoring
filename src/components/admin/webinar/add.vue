<template>
  <div id="addWebinar">
    <div class="mb-2" @click="this.$router.push({ path: '/admin/webinar/' })">
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Webinar List
    </div>
    <!-- ADD  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'add'">
        <h5>Add a New Webinar</h5>
        <hr />
        <form method="post" @submit.prevent="save()">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <input-group>
                  <input
                    type="text"
                    class="form-control form-mentoring"
                    placeholder="Webinar Name"
                    v-model="webinar.dtl_name"
                    id="name"
                  />
                  <label for="name">Webinar Name</label>
                </input-group>
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_name">
                    {{ errorWebinar.dtl_name[0] }}
                  </small>
                </span>
              </div>

              <div class="mb-3">
                <select
                  class="form-select form-mentoring"
                  v-model="webinar.dtl_category"
                >
                  <option value="">Select Webinar Category</option>
                  <option value="career-industry-webinar">
                    Career Industry Webinar
                  </option>
                  <option value="university-preparation-webinar">
                    University Preparation Webinar
                  </option>
                </select>
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_category">
                    {{ errorWebinar.dtl_category[0] }}
                  </small>
                </span>
              </div>

              <div class="mb-3">
                <v-editor
                  api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                  cols="30"
                  rows="15"
                  v-model="webinar.dtl_desc"
                ></v-editor>
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_desc">
                    {{ errorWebinar.dtl_desc[0] }}
                  </small>
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <div class="d-flex">
                  <input-group class="w-75">
                    <input
                      type="text"
                      class="form-control form-mentoring"
                      placeholder="Video Link"
                      v-model="webinar.dtl_video_link"
                      id="link"
                    />
                    <label for="link">Video Link</label>
                  </input-group>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm ms-2 w-25"
                    style="border-radius: 15px"
                    @click="previewLink()"
                  >
                    <i class="fa-solid fa-search me-2"></i>
                    Preview
                  </button>
                </div>
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_video_link">
                    {{ errorWebinar.dtl_video_link[0] }}
                  </small>
                </span>
              </div>

              <div class="preview">
                <iframe
                  width="100%"
                  height="310"
                  :src="preview.link"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  v-if="preview.frame"
                ></iframe>
              </div>
            </div>
            <div class="col-md-12">
              <hr />
              <div class="float-end">
                <button class="btn-mentoring btn-type-1">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "webinarDetail",
  props: {
    menus: Object,
  },
  data() {
    return {
      webinar: {
        prog_id: 3,
        dtl_category: "",
        dtl_name: "",
        dtl_desc: "",
        dtl_price: 0,
        dtl_video_link: "",
        status: "active",
      },
      preview: {
        frame: false,
        link: "",
      },
      errorWebinar: [],
    };
  },
  methods: {
    previewLink() {
      if (this.webinar.dtl_video_link) {
        let video_id = this.webinar.dtl_video_link.substr(17, 11);
        this.preview.link = "https://www.youtube.com/embed/" + video_id;
        this.preview.frame = true;
        this.webinar.dtl_video_link = this.preview.link;
      } else {
        this.$alert.toast("warning", "Please fill in the video link first!");
        this.preview.frame = false;
      }
    },
    save() {
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/programme/detail", this.webinar)
        .then((response) => {
          this.$alert.toast("success", "Webinar has been created");

          setTimeout(() => {
            this.$router.push({
              path:
                "/admin/webinar/detail/" + response.data.data.prog_detail.id,
            });
          }, 3000);
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          this.errorWebinar = error.response.data.error;
          // console.log(error.response);
        });
    },
  },
  created() {},
};
</script>

<style scoped>
.form-control {
  box-shadow: none !important;
}

.preview {
  background: #dedede;
  width: 100%;
  height: 310px;
}
</style>