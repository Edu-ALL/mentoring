<template>
  <div id="groups">
    <div class="border p-2 rounded mt-3">
      <div class="row" v-if="menus.key2 == ''">
        <div class="col-md-3">
          <div
            class="card my-1 border-0 p-2 pointer"
            :class="
              section == 'new-request' || section == ''
                ? 'bg-primary'
                : 'bg-secondary'
            "
            @click="section = 'new-request'"
          >
            <div
              class="
                my-0
                text-white
                d-flex
                justify-content-between
                align-items-center
              "
            >
              New Request
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div
            class="card my-1 border-0 p-2 pointer"
            :class="section == 'progress' ? 'bg-primary' : 'bg-secondary'"
            @click="section = 'progress'"
          >
            <div
              class="
                my-0
                text-white
                d-flex
                justify-content-between
                align-items-center
              "
            >
              In Progress
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div
            class="card my-1 border-0 p-2 pointer"
            :class="section == 'history' ? 'bg-primary' : 'bg-secondary'"
            @click="section = 'history'"
          >
            <div
              class="
                my-0
                text-white
                d-flex
                justify-content-between
                align-items-center
              "
            >
              History
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div class="col-md-9 mt-md-0 mt-3">
          <!-- New Request  -->
          <transition name="fade">
            <div v-if="section == 'new-request' || section == ''">
              <div
                class="col-12 text-center p-4 shadow-sm text-muted"
                v-if="new_request?.data?.length == 0"
              >
                No group project yet.
              </div>
              <div class="row row-cols-1 g-2 max-height mentoring-scroll">
                <div
                  class="col"
                  v-for="(i, index) in new_request.data"
                  :key="i"
                >
                  <div class="card group-card">
                    <div class="card-body">
                      <div class="row p-0 align-items-center">
                        <div class="col-md-9">
                          <div class="d-flex align-items-center">
                            <div class="group-image">
                              <img
                                v-lazy="
                                  i.picture
                                    ? $base_url + '' + i.picture
                                    : 'https://picsum.photos/id/' +
                                      new_request.from +
                                      index * 2 +
                                      '/300/300'
                                "
                                class="w-100"
                              />
                            </div>
                            <div class="title ms-3">
                              <h5>{{ i.project_name }}</h5>
                              <p
                                class="my-0"
                                v-html="$customText.text(i.project_desc, 20)"
                              ></p>
                            </div>
                          </div>
                          <div class="mt-2">
                            <!-- <div class="badge badge-group bg-info px-3 py-1">
                              {{ i.project_type }}
                            </div> -->
                            <div
                              class="badge badge-group bg-info px-3 py-1 ms-1"
                              v-if="i.group_participant_count > 0"
                            >
                              {{ i.group_participant_count }} Members
                            </div>
                            <div
                              class="badge badge-group px-3 py-1 ms-1"
                              :class="
                                i.progress_status == 'ahead'
                                  ? 'bg-success'
                                  : i.progress_status == 'on-track'
                                  ? 'bg-info'
                                  : 'bg-danger'
                              "
                              v-if="
                                i.progress_status != '' ||
                                i.progress_status != null
                              "
                              style="text-transform: capitalize"
                            >
                              {{ i.progress_status }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3 text-md-end mt-md-0 mt-3">
                          <button
                            class="btn-mentoring btn-secondary py-1 btn-sm"
                            @click="detail(i)"
                          >
                            Detail
                            <i class="fa-solid fa-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- Progress  -->
          <transition name="fade">
            <div v-if="section == 'progress'">
              <div
                class="col-12 text-center p-4 shadow-sm text-muted"
                v-if="in_progress?.data?.length == 0"
              >
                No group project yet.
              </div>
              <div class="row row-cols-1 g-2 max-height mentoring-scroll">
                <div
                  class="col"
                  v-for="(i, index) in in_progress.data"
                  :key="i"
                >
                  <div class="card group-card">
                    <div class="card-body">
                      <div class="row p-0 align-items-center">
                        <div class="col-md-9">
                          <div class="d-flex align-items-center">
                            <div class="group-image">
                              <img
                                v-lazy="
                                  i.picture
                                    ? $base_url + '' + i.picture
                                    : 'https://picsum.photos/id/' +
                                      in_progress.from +
                                      index * 2 +
                                      '/300/300'
                                "
                                class="w-100"
                              />
                            </div>
                            <div class="title ms-3">
                              <h5>{{ i.project_name }}</h5>
                              <p
                                class="my-0"
                                v-html="$customText.text(i.project_desc, 20)"
                              ></p>
                            </div>
                          </div>
                          <div class="mt-2">
                            <!-- <div class="badge badge-group bg-info px-3 py-1">
                              {{ i.project_type }}
                            </div> -->
                            <div
                              class="badge badge-group bg-info px-3 py-1 ms-1"
                              v-if="i.group_participant_count > 0"
                            >
                              {{ i.group_participant_count }} Members
                            </div>
                            <div
                              class="badge badge-group px-3 py-1 ms-1"
                              :class="
                                i.progress_status == 'ahead'
                                  ? 'bg-success'
                                  : i.progress_status == 'on-track'
                                  ? 'bg-info'
                                  : 'bg-danger'
                              "
                              v-if="
                                i.progress_status != '' ||
                                i.progress_status != null
                              "
                              style="text-transform: capitalize"
                            >
                              {{ i.progress_status }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3 text-md-end mt-md-0 mt-3">
                          <button
                            class="btn-mentoring btn-secondary py-1 btn-sm"
                            @click="detail(i)"
                          >
                            Detail
                            <i class="fa-solid fa-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- History  -->
          <transition name="fade">
            <div v-if="section == 'history'">
              <div
                class="col-12 text-center p-4 shadow-sm text-muted"
                v-if="history_project?.data?.length == 0"
              >
                No histories yet
              </div>
              <div class="row row-cols-1 g-2 max-height mentoring-scroll">
                <div
                  class="col"
                  v-for="(i, index) in history_project.data"
                  :key="i"
                >
                  <div class="card group-card">
                    <div class="card-body">
                      <div class="row p-0 align-items-center">
                        <div class="col-md-9">
                          <div class="d-flex align-items-center">
                            <div class="group-image">
                              <img
                                v-lazy="
                                  i.picture
                                    ? $base_url + '' + i.picture
                                    : 'https://picsum.photos/id/' +
                                      history_project.from +
                                      index * 2 +
                                      '/300/300'
                                "
                                class="w-100"
                              />
                            </div>
                            <div class="title ms-3">
                              <h5>{{ i.project_name }}</h5>
                              <p
                                class="my-0"
                                v-html="$customText.text(i.project_desc, 20)"
                              ></p>
                            </div>
                          </div>
                          <div class="mt-2">
                            <!-- <div class="badge badge-group bg-info px-3 py-1">
                              {{ i.project_type }}
                            </div> -->
                            <div
                              class="badge badge-group bg-info px-3 py-1 ms-1"
                              v-if="i.group_participant_count > 0"
                            >
                              {{ i.group_participant_count }} Members
                            </div>
                            <div
                              class="badge badge-group px-3 py-1 ms-1"
                              :class="
                                i.progress_status == 'ahead'
                                  ? 'bg-success'
                                  : i.progress_status == 'on-track'
                                  ? 'bg-info'
                                  : 'bg-danger'
                              "
                              v-if="
                                i.progress_status != '' ||
                                i.progress_status != null
                              "
                              style="text-transform: capitalize"
                            >
                              {{ i.progress_status }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3 text-md-end mt-md-0 mt-3">
                          <button
                            class="btn-mentoring btn-secondary py-1 btn-sm"
                            @click="detail(i)"
                          >
                            Detail
                            <i class="fa-solid fa-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Detail  -->
      <transition name="fade">
        <v-detail v-if="menus.key2 != ''" :menus="menus" />
      </transition>
    </div>
  </div>
</template>

<script>
import Detail from "@/components/mentor/page/student/activity/group/view";

export default {
  name: "groupProject",
  props: {
    menus: Object,
  },
  components: {
    "v-detail": Detail,
  },

  data() {
    return {
      section: "",
      new_request: [],
      in_progress: [],
      history_project: [],
    };
  },

  methods: {
    async newRequest() {
      this.$Progress.start();
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get(
          "student/group/project/new/" + id
        );
        this.new_request = response.data.data;
        this.$Progress.finish();
        // console.log(response);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async inProgress() {
      this.$Progress.start();
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get(
          "student/group/project/in-progress/" + id
        );
        this.in_progress = response.data.data;
        this.$Progress.finish();
        // console.log(response);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async historyProject() {
      this.$Progress.start();
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get(
          "student/group/project/completed/" + id
        );
        this.history_project = response.data.data;
        this.$Progress.finish();
        // console.log(response);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    detail(i) {
      window.open("/mentor/activity/group/in-progress/" + i.id, "_blank");
    },
  },
  created() {
    this.newRequest();
    this.inProgress();
    this.historyProject();
  },
};
</script>
<style scoped>
.max-height {
  max-height: 500px;
  overflow: auto;
}

.card-project {
  border: 1px solid #f1f1f1;
  cursor: pointer;
  transition: all 0.3s;
}
.card-project:hover {
  background: #ccdafc;
}
</style>
