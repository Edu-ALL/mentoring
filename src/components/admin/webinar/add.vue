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
                <input
                  type="text"
                  class="form-control form-mentoring mb-3"
                  placeholder="Video Embed"
                  v-model="webinar.dtl_video_link"
                />
                <span v-if="errorWebinar">
                  <small class="text-danger" v-if="errorWebinar.dtl_video_link">
                    {{ errorWebinar.dtl_video_link[0] }}
                  </small>
                </span>
              </div>

              <div class="preview"></div>
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
      errorWebinar: [],
    };
  },
  methods: {
    save() {
      this.$alert.loading();
      this.$axios
        .post(this.$url + "create/programme/detail", this.webinar, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then(() => {
          this.$alert.close();
          this.$alert.toast("success", "Webinar has been created");
          this.$router.push({ path: "/admin/webinar" });
          //   console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          this.errorWebinar = error.response.data.error;
          console.log(error.response);
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