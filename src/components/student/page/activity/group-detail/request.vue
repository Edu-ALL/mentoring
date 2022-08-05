<template>
  <div id="request">
    <div class="container mt-3">
      <div class="row p-4" v-if="groups.data && groups.data.length == 0">
        <div class="col text-center">
          <p>No project group yet.</p>
        </div>
      </div>

      <div class="row row-cols-md-2 row-cols-1 g-2">
        <div class="col" v-for="i in groups.data" :key="i">
          <div class="card card-group border shadow-sm">
            <div class="card-body">
              <h5 class="mb-1">{{ i.project_name }}</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                {{ i.project_type }}
              </span>
              <div class="project-desc mt-2">
                {{ $customText.text(i.project_desc, 20) }}
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <button
                    class="btn-mentoring btn-sm py-1 btn-outline-danger"
                    @click="decline(i.id)"
                  >
                    Decline
                  </button>
                </div>
                <div class="col-6 text-end">
                  <button
                    class="btn-mentoring btn-sm py-1 bg-primary"
                    @click="handleConfirm(i.id, 'accept')"
                  >
                    Accept
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
            Are you sure you want to refuse to join this group?
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
      this.$alert.loading();
      try {
        const response = await this.$axios.get("student/group/project/new");

        this.groups = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
    },

    async getPage(link) {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(link);

        this.groups = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
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

        this.$alert.toast("success", response.data.message);
        this.getData();
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