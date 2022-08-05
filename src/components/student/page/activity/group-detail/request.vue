<template>
  <div id="request">
    <div class="container mt-3">
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
                    <div class="group-image" style="width: 20%">
                      <img
                        v-lazy="
                          'https://picsum.photos/id/' +
                          groups.from +
                          index * 2 +
                          '/300/300'
                        "
                        class="w-100"
                      />
                    </div>
                    <div class="title ms-3" style="width: 80%">
                      <h5>{{ i.project_name }}</h5>
                      <p class="my-0">
                        {{ $customText.text(i.project_desc, 20) }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-2">
                    <div class="badge badge-group bg-info px-3 py-1">
                      {{ i.project_type }}
                    </div>
                    <div class="badge badge-group bg-info px-3 py-1 ms-1">
                      {{ i.group_participant_count }} Members
                    </div>
                    <div
                      class="badge badge-group bg-info px-3 py-1 ms-1"
                      v-if="
                        i.progress_status != '' || i.progress_status != null
                      "
                      style="text-transform: capitalize"
                    >
                      {{ i.progress_status }}
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-md-center">
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

      <nav class="mt-3" v-if="groups.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="groups.current_page != 1">
            <a class="page-link" @click="getPage(groups.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(i, index) in groups.last_page" :key="index">
            <li
              class="page-item"
              v-if="groups.current_page - 2 < i && groups.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="groups.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(groups.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="groups.current_page != groups.last_page">
            <a class="page-link" @click="getPage(groups.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
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