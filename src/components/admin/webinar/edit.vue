<template>
  <div id="editWebinar">
    <div
      class="mb-2"
      @click="
        this.$router.push({ path: '/admin/webinar/detail/' + webinar_id })
      "
    >
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Webinar List
    </div>
    <!-- Edit  -->
    <!-- {{ webinar.dtl_category }} -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'edit'">
        <h5>Edit Webinar</h5>
        <hr />
        <form method="post" @submit.prevent="update()">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control form-mentoring"
                  placeholder="Webinar Name"
                  v-model="webinar.dtl_name"
                />
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_name">
                    {{ errorWebinar.dtl_name[0] }}
                  </small>
                </span>
              </div>

              <div class="mb-3">
                <select
                  class="form-control form-mentoring"
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
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="form-control form-mentoring"
                  v-model="webinar.dtl_desc"
                ></textarea>
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
                  <input
                    type="text"
                    class="form-control form-mentoring"
                    placeholder="Video Link"
                    v-model="webinar.dtl_video_link"
                  />
                  <button
                    type="button"
                    class="btn btn-primary btn-sm ms-2"
                    style="border-radius: 15px"
                    @click="previewLink()"
                  >
                    Preview
                  </button>
                </div>
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_video_link">
                    {{ errorWebinar.dtl_video_link[0] }}
                  </small>
                </span>
              </div>

              <div class="preview" v-if="webinar.dtl_video_link == null">
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

              <div class="preview" v-if="webinar.dtl_video_link">
                <iframe
                  width="100%"
                  height="310"
                  :src="webinar.dtl_video_link"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
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
      webinar: [],
      preview: {
        frame: false,
        link: "",
      },
      errorWebinar: [],
    };
  },
  methods: {
    getData(id) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/programme/detail/" + id)
        .then((response) => {
          this.$alert.close();
          this.webinar = response.data.data.detail;
          this.webinar.dtl_category = this.webinar.dtl_category
            .replaceAll(" ", "-")
            .toLowerCase();
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },
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
    update() {
      this.$alert.loading();
      this.$axios
        .put(
          this.$url + "../v2/update/programme/detail/" + this.webinar_id,
          this.webinar,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.$alert.close();
          this.$alert.toast("success", "Webinar has been updated");
          window.location.href =
            "/admin/webinar/detail/" + response.data.data.id;
          // this.$router.push({
          //   path: "/admin/webinar/detail/" + response.data.data.id,
          // });
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          this.errorWebinar = error.response.data.error;
          console.log(error.response);
        });
    },
  },
  created() {
    this.webinar_id = this.$route.params.key;
    this.getData(this.webinar_id);
  },
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