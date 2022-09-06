<template>
  <div id="view">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="pointer" @click="redirect">
          <h6 class="py-0 my-0">
            <i class="fa-solid fa-arrow-left me-2"></i> Groups
          </h6>
          <hr class="my-1 d-md-none d-block" />
        </div>
      </div>
      <div class="col-md-6 text-end mt-md-0 mt-3">
        <i
          class="bi bi-lightbulb-fill me-1"
          :class="
            group_info.progress_status == 'ahead'
              ? 'text-success'
              : group_info.progress_status == 'on-track'
              ? 'text-info'
              : 'text-danger'
          "
          v-if="group_info.progress_status"
        ></i>
        <select
          v-model="group_info.progress_status"
          class="form-mentoring py-1 me-1"
          :disabled="group_info.status != 'in progress'"
          @change="changeProgress"
        >
          <option value="null" v-if="group_info.progress_status == null">
            Update progress here
          </option>
          <option value="ahead" class="text-success">&#9755; Ahead</option>
          <option value="on-track" class="text-info">&#9755; On-track</option>
          <option value="behind" class="text-danger">&#9755; Behind</option>
        </select>
        <button
          class="btn-mentoring py-1 px-3 btn-sm btn-outline-success"
          @click="confirmStatus('completed')"
          v-if="group_info.status == 'in progress'"
        >
          <i class="fa-solid fa-check me-1"></i>
          Complete
        </button>
        <button
          class="btn-mentoring py-1 px-3 btn-sm btn-danger"
          @click="confirmStatus('in progress')"
          v-if="group_info.status != 'in progress'"
        >
          <i class="fa-solid fa-times me-1"></i>
          Cancel
        </button>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-7 mb-3">
        <div class="card border-0 shadow mb-3">
          <img
            v-lazy="
              'https://picsum.photos/id/' + group_info.id * 2 + '/900/300'
            "
            class="thumbnail shadow"
          />
          <div class="thumbnail-logo">
            <div class="logo shadow">
              <img
                v-lazy="
                  group_info.picture != null && group_info.picture != ''
                    ? $base_url + '' + group_info.picture
                    : 'https://picsum.photos/id/' + group_info.id + '/200/300'
                "
                class="w-100"
              />
            </div>
          </div>

          <div class="card-body">
            <!-- v-if="mentor.id == group_info.user_id" -->
            <div class="float-end">
              <i
                class="fa-solid fa-edit pointer"
                v-if="!editGroup"
                @click="editGroup = !editGroup"
              ></i>
              <i
                class="fa-solid fa-x pointer"
                v-if="editGroup"
                @click="editGroup = !editGroup"
              ></i>
            </div>
            <!-- Detail  -->
            <div class="" v-if="!editGroup">
              <h5>{{ group_info.project_name }}</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                {{ group_info.project_type }}
              </span>
              <div class="project-desc mt-2">
                <p class="my-0" v-html="group_info.project_desc"></p>
              </div>
              <div class="row mt-3 align-items-center">
                <div class="col-6">
                  <small class="text-muted"
                    ><i class="fa-solid fa-calendar me-2"></i>
                    {{ $customDate.date(group_info_updated_at) }}
                  </small>
                </div>
                <!-- <div class="col-6 text-end">
                    <i class="fa-solid fa-thumbs-up mx-1 text-success"></i>
                    <i
                      class="fa-solid fa-circle-exclamation mx-1 text-warning"
                    ></i>
                    <i
                      class="fa-solid fa-triangle-exclamation mx-1 text-danger"
                    ></i>
                  </div> -->
              </div>
            </div>

            <!-- Edit Group  -->
            <form method="post" @submit.prevent="handleUpdateGroup()">
              <div class="" v-if="editGroup">
                <h6>Edit Group</h6>
                <hr />
                <div class="mb-3">
                  <input-group>
                    <input
                      v-model="group_info.project_name"
                      type="text"
                      required
                      class="form-mentoring form-control w-100"
                      placeholder="fill in here.."
                      id="groupName"
                    />
                    <label for="groupName">Group Name</label>
                  </input-group>
                </div>
                <!-- <div class="mb-3">
                  <group-type
                    v-model="group_info.project_type"
                    :options="options"
                    placeholder="Select project type"
                    @select="interestCheck"
                    class="mt-3"
                  >
                  </group-type>
                </div> -->
                <div class="mb-2">
                  <input-group>
                    <v-editor
                      api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                      rows="10"
                      class="form-control form-mentoring w-100"
                      v-model="group_info.project_desc"
                      placeholder="Project Description"
                      id="desc"
                    ></v-editor>
                  </input-group>
                </div>
                <div class="text-end mt-3">
                  <button
                    type="submit"
                    class="btn-mentoring btn-sm bg-primary py-1"
                  >
                    <i class="bi bi-save me-1"></i>
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Meeting  -->
        <div class="card border-0 shadow">
          <div class="card-body">
            <v-meeting
              :menus="menus"
              :group="group_info"
              :student="student_info"
              :data="group_meeting"
              @check="checkComponent"
            ></v-meeting>
          </div>
        </div>
      </div>
      <div class="col-md-5 mb-3">
        <div class="card border-0 shadow">
          <div class="card-body">
            <v-member
              :menus="menus"
              :member="group_member"
              :group="group_info"
              @check="checkComponent"
            ></v-member>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''"></div>
  <!-- Completed Group  -->
  <transition name="pop">
    <div
      class="vue-modal vue-modal-sm bg-primary text-center"
      v-if="modal == 'confirm'"
    >
      <i class="fa-solid fa-circle-exclamation mx-1 fa-2xl"></i>
      <h5 class="mt-3 mb-3" v-if="confirm_status == 'completed'">
        Are you sure to completing this group?
      </h5>
      <h5 class="mt-3 mb-3" v-if="confirm_status == 'in progress'">
        Are you sure this group back to in progress?
      </h5>
      <button
        class="btn-mentoring btn-sm py-1 btn-danger mx-1"
        @click="modal = ''"
      >
        Cancel
      </button>
      <button
        class="btn-mentoring btn-sm py-1 btn-outline-success mx-1"
        @click="changeStatus()"
      >
        Yes
      </button>
    </div>
  </transition>
</template>

<script>
// import Multiselect from "vue-multiselect";

import Meeting from "@/components/mentor/page/activity/group/view-detail/meeting";
import Member from "@/components/mentor/page/activity/group/view-detail/member";

export default {
  name: "view",
  props: {
    menus: Object,
  },
  components: {
    "v-meeting": Meeting,
    "v-member": Member,
    // "group-type": Multiselect,
  },
  data() {
    return {
      modal: "",
      editGroup: false,
      editMember: false,
      groupType: "",
      options: ["Group Mentoring", "Profile Building Mentoring"],
      groupId: "",
      mentor: [],
      groups: [],
      group_info: [],
      group_meeting: [],
      group_member: [],
      student_info: [],
      confirm_status: "",
    };
  },
  methods: {
    redirect() {
      this.$router.push({ path: "/mentor/activity/group/" + this.menus.key });
    },

    checkComponent(i) {
      if (i == "new") {
        this.getData();
      }
    },

    async getData() {
      this.groupId = this.menus.key2;
      try {
        const response = await this.$axios.get(
          "mentor/detail/group/project/" + this.menus.key2
        );

        this.group_info = response.data.data.group_info;
        this.group_meeting = response.data.data.group_meeting;
        this.group_member = response.data.data.group_member;
        this.student_info = response.data.data.student_info;
        // console.log(response.data);
      } catch (e) {
        this.$alert.toast("error", "Group project is not found");
        this.$router.push({ path: "/mentor/activity/group" });
        console.log(e.response);
      }
    },

    async handleUpdateGroup() {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "update/group/project/" + this.groupId,
          {
            project_name: this.group_info.project_name,
            project_type: this.group_info.project_type,
            project_desc: this.group_info.project_desc,
            status: "in progress",
          }
        );

        this.group_info = response.data.data;
        this.editGroup = false;
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
        console.log(response.data);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    confirmStatus(status) {
      this.modal = "confirm";
      this.confirm_status = status;
    },

    async changeStatus() {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "update/status/group/project/" + this.groupId,
          {
            value: this.confirm_status,
          }
        );

        // console.log(response.data);
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
          if (this.confirm_status == "completed") {
            this.$router.push({
              path: "/mentor/activity/group/completed/" + this.groupId,
            });
          } else {
            this.$router.push({
              path: "/mentor/activity/group/in-progress/" + this.groupId,
            });
          }
        } else {
          this.$alert.toast("error", response.data.error);
        }

        this.modal = "";
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
        this.modal = "";
      }
    },

    async changeProgress() {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "update/progress-status/group/project/" + this.groupId,
          {
            value: this.group_info.progress_status,
          }
        );

        if (response.data.success) {
          this.$emit("check", this.$route.params.key);
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }

        this.modal = "";
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },
  },

  created() {
    this.mentor = JSON.parse(localStorage.getItem("mentor"));
    this.getData();
  },
};
</script>
<style>
.member-role {
  font-size: 0.9em;
  background: #dedede;
  padding: 5px 10px;
  margin-top: 10px !important;
  display: inline;
  border-radius: 20px;
}

.member-contribution {
  margin-top: 10px;
  font-size: 0.9em;
  border-radius: 10px !important;
  padding: 10px 5px;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff72;
  z-index: 99;
  cursor: not-allowed;
}

h6 {
  color: #f0ab54;
}
</style>