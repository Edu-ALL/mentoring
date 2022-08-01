<template>
  <div id="webinarDetail">
    <div class="mb-2" @click="this.$router.push({ path: '/admin/webinar' })">
      <vue-feather
        type="arrow-left"
        class="float-start mt-0 me-2"
      ></vue-feather>
      Webinar List
    </div>
    <!-- Detail  -->
    <transition name="fade">
      <div class="card-white" v-if="menus.submenu == 'detail'">
        <div class="flex">
          <h5 class="d-inline">Webinar</h5>
          <div class="float-end">
            <button
              class="btn-mentoring btn-info btn-sm"
              @click="
                this.$router.push({ path: '/admin/webinar/edit/' + webinar_id })
              "
            >
              Edit
            </button>
            <button
              class="btn-mentoring btn-outline-danger btn-sm ms-2"
              @click="deleteWebinar(webinar_id)"
            >
              Delete
            </button>
          </div>
        </div>
        <hr />
        <!-- {{ webinar }} -->
        <div class="row">
          <div class="col-md-7">
            <div class="mb-3">
              <label>Webinar Name</label> <br />
              {{ webinar.detail?.dtl_name }}
            </div>
            <div class="mb-3">
              <label>Category</label> <br />
              {{ webinar.detail?.dtl_category }}
            </div>
            <div class="mb-3">
              <label>Descriptions</label> <br />
              {{ webinar.detail?.dtl_desc }}
            </div>
            <div class="mb-3">
              <label>Video</label> <br />
              <iframe
                width="100%"
                height="300"
                :src="webinar.detail?.dtl_video_link"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <label>Watched</label> <br />
                <h6 class="d-inline">
                  {{ webinar.detail?.student_activities_count }} x
                </h6>
                <div
                  class="float-end pointer text-primary"
                  @click="userList = true"
                  v-if="!userList"
                >
                  Show
                  <vue-feather
                    type="arrow-right"
                    size="18"
                    class="float-end mt-1 ms-2"
                  ></vue-feather>
                </div>
                <div
                  class="float-end pointer text-primary"
                  @click="userList = false"
                  v-if="userList"
                >
                  Hide
                  <vue-feather
                    type="arrow-right"
                    size="18"
                    class="float-end mt-1 ms-2"
                  ></vue-feather>
                </div>
                <transition name="fade">
                  <div class="border p-2 mt-2" v-if="userList">
                    <ul class="list-group">
                      <li class="list-group-item" v-for="i in 5" :key="i">
                        Full Name <br />
                        <small class="text-muted" style="font-size: 0.8em">
                          <vue-feather
                            type="play-circle"
                            size="17"
                            class="float-start mt-1 me-1"
                          ></vue-feather>
                          25 July 2022
                        </small>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
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
      webinar_id: "",
      userList: false,
      webinar: [],
    };
  },
  methods: {
    getData(id) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/programme/detail/" + id)
        .then((response) => {
          this.$alert.close();
          this.webinar = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },
    deleteWebinar(id) {
      let link = this.$url + "delete/programme/detail/" + id;
      let token = "Bearer " + localStorage.getItem("token");
      this.$alert.confirm(link, token, "/admin/webinar");
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