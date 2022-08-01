<template>
  <div id="groups">
    <div class="border p-3 rounded mt-3">
      <div class="row">
        <!-- New Request  -->
        <div class="col-12">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">New Request</h6>
          </div>
          <div
            class="text-center my-3 text-muted"
            v-if="new_request?.data?.length == 0"
          >
            No data!
          </div>
          <div
            class="row row-cols-md-3 row-cols-1 g-2 max-height mentoring-scroll"
          >
            <div
              class="col"
              v-for="(i, index) in new_request.data"
              :key="index"
            >
              <div class="card card-project shadow-sm" @click="detail(i)">
                <div class="card-body">
                  <h6 class="my-0">{{ i.project_name }}</h6>
                  <div
                    class="badge bg-secondary text-white"
                    style="border-radius: 10px"
                  >
                    {{ i.project_type }}
                  </div>
                  <div class="group-desc mt-3">
                    {{ $customText.text(i.project_desc, 20) }}
                  </div>
                  <hr class="my-1" />
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="">
                      <i class="fa-solid fa-users me-2"></i>
                      {{ i.group_participant_count }} Members
                    </div>
                    <div class="">
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- In Progress  -->
        <div class="col-12">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">In Progress</h6>
          </div>
          <div
            class="text-center my-3 text-muted"
            v-if="in_progress?.data?.length == 0"
          >
            No data!
          </div>
          <div
            class="row row-cols-md-3 row-cols-1 g-2 max-height mentoring-scroll"
          >
            <div
              class="col"
              v-for="(i, index) in in_progress.data"
              :key="index"
            >
              <div class="card card-project shadow-sm" @click="detail(i)">
                <div class="card-body">
                  <h6 class="my-0">{{ i.project_name }}</h6>
                  <div
                    class="badge bg-secondary text-white"
                    style="border-radius: 10px"
                  >
                    {{ i.project_type }}
                  </div>
                  <div class="group-desc mt-3">
                    {{ $customText.text(i.project_desc, 20) }}
                  </div>
                  <hr class="my-1" />
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="">
                      <i class="fa-solid fa-users me-2"></i>
                      {{ i.group_participant_count }} Members
                    </div>
                    <div class="">
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- History  -->
        <div class="col-12">
          <div class="card border-1 my-2 py-2 text-center bg-primary">
            <h6 class="my-0">History</h6>
          </div>

          <div
            class="text-center my-3 text-muted"
            v-if="history_project?.data?.length == 0"
          >
            No data!
          </div>
          <div
            class="row row-cols-md-3 row-cols-1 g-2 max-height mentoring-scroll"
          >
            <div
              class="col"
              v-for="(i, index) in history_project.data"
              :key="index"
            >
              <div class="card card-project shadow-sm" @click="detail(i)">
                <div class="card-body">
                  <h6 class="my-0">{{ i.project_name }}</h6>
                  <div
                    class="badge bg-secondary text-white"
                    style="border-radius: 10px"
                  >
                    {{ i.project_type }}
                  </div>
                  <div class="group-desc mt-3">
                    {{ $customText.text(i.project_desc, 20) }}
                  </div>
                  <hr class="my-1" />
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="">
                      <i class="fa-solid fa-users me-2"></i>
                      {{ i.group_participant_count }} Members
                    </div>
                    <div class="">
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
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
  name: "groupProject",

  data() {
    return {
      new_request: [],
      in_progress: [],
      history_project: [],
    };
  },

  methods: {
    async newRequest() {
      this.$alert.loading();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "student/group/project/new/" + id
        );
        this.new_request = response.data.data;
        this.$alert.close();
        // console.log(response);
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },

    async inProgress() {
      this.$alert.loading();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "student/group/project/in-progress/" + id
        );
        this.in_progress = response.data.data;
        this.$alert.close();
        // console.log(response);
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },

    async historyProject() {
      this.$alert.loading();
      const id = this.$route.params.key;
      try {
        const response = await this.$axios.get(
          "student/group/project/completed/" + id
        );
        this.history_project = response.data.data;
        this.$alert.close();
        // console.log(response);
      } catch (e) {
        this.$alert.close();
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
  max-height: 200px;
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
