<template>
  <div id="request">
    <div
      class="container mt-3 p-2"
      v-if="groups.data && groups.data.length >= 0"
    >
      <div class="row p-4" v-if="groups.data && groups.data.length == 0">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div>

      <div class="row row-cols-1 g-2">
        <div class="col" v-for="(i, index) in groups.data" :key="i">
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
                              groups.from +
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
                      class="badge badge-group bg-primary px-3 py-1 ms-1"
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
                        i.progress_status != '' || i.progress_status != null
                      "
                      style="text-transform: capitalize"
                    >
                      {{ i.progress_status }}
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-md-center mt-md-0 mt-3">
                  <button
                    class="btn-mentoring btn-sm py-1 bg-primary mb-2"
                    @click="handleConfirm(i.id, 'accept')"
                  >
                    <i class="fa-solid fa-check me-2"></i>
                    Accept
                  </button>
                  <br />
                  <button
                    class="btn-mentoring btn-sm py-1 btn-outline-danger"
                    @click="decline(i.id)"
                  >
                    <i class="fa-solid fa-times me-2"></i>
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination :datas="groups" @result="getPage" />
    </div>

    <!-- MODAL -->
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'decline'">
        <div class="text-center">
          <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          <h5 class="mt-2">
            Are you sure you want to refuse joining this group?
          </h5>
          <div class="mt-3">
            <button
              class="btn-mentoring btn-warning btn-sm py-1 mx-1"
              @click="modal = ''"
            >
              Cancel</button
            ><button
              class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
              @click="handleConfirm(group_id, 'decline')"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "request",
  data() {
    return {
      modal: "",
      group_id: "",
      groups: [],
    };
  },
  methods: {
    async getData() {
      this.$Progress.start();
      try {
        const response = await this.$axios.get("student/group/project/new");
        this.$Progress.finish();
        this.groups = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async getPage(link) {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(link);
        this.$Progress.finish();
        this.groups = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    async handleConfirm(id, status) {
      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/group/project/confirmation/req",
          {
            group_id: id,
            action: status,
          }
        );

        // this.getData();
        this.$alert.toast("success", response.data.message);
        this.$emit("tab", status == "accept" ? "progress" : "request");
        setTimeout(() => {
          this.getData();
        }, 3000);
        // console.log(response.data);
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },

    decline(id) {
      this.modal = "decline";
      this.group_id = id;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.card-group {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}

.card-status {
  position: absolute;
  right: -10px;
  top: -10px;
  padding: 10px 10px 4px 4px;
  border-radius: 50%;
}
</style>