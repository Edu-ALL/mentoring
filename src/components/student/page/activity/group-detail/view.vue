<template>
  <div id="view">
    <div class="row mb-3 p-0">
      <div class="col-12">
        <div class="pointer" style="margin-top: -20px" @click="redirect">
          <i class="fa-solid fa-arrow-left me-2"></i>
          <h5 class="d-inline">Groups</h5>
        </div>
      </div>
    </div>
    <div class="container mt-3 p-0">
      <div class="row">
        <div class="col-md-7 mb-3">
          <div
            class="card border-0 shadow mb-3 position-relative overflow-hidden"
            v-if="groups.group_info == null"
          >
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
              <div
                class="float-end"
                v-if="
                  menu.key == 'progress' &&
                  group_info.student_id == student_info.id
                "
              >
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
                <h5>
                  {{ group_info.project_name }}
                </h5>
                <span class="badge bg-secondary rounded-pill text-dark">
                  {{ group_info.project_type }}
                </span>
                <div
                  class="project-desc mt-2"
                  v-html="group_info.project_desc"
                ></div>
                <div class="row mt-3 align-items-center">
                  <div class="col-6">
                    <small class="text-muted"
                      ><i class="fa-solid fa-calendar me-2"></i>
                      {{ $customDate.date(group_info.created_at) }}
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
                        placeholder="fill in here ..."
                        id="project Name"
                      />
                      <label for="projectName">Group Name</label>
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
                  <div class="mb-4">
                    <input-group>
                      <input
                        type="file"
                        class="form-mentoring form-control form-control-sm"
                        placeholder="add a logo"
                        @change="addLogo"
                      />
                      <label for="logo"> Add a Logo </label>
                    </input-group>
                  </div>
                  <div class="mb-3">
                    <v-editor
                      cols="30"
                      rows="10"
                      api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                      v-model="group_info.project_desc"
                      placeholder="Project Description"
                      id="desc"
                    ></v-editor>
                  </div>
                  <hr class="my-0 mb-2" />
                  <div class="text-end">
                    <button
                      type="submit"
                      class="btn-mentoring btn-sm bg-primary py-1"
                    >
                      <i class="bi bi-save me-2"></i>
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
                :menu="menu"
                :group="group_info"
                :student="student_info"
                :data="group_meeting"
                @check="checkComponent"
              ></v-meeting>
            </div>
          </div>
        </div>

        <div class="col-md-5 mb-3">
          <form method="post" @submit.prevent="handleUpdateRole()">
            <div class="card border-0 shadow mb-3">
              <div class="card-body">
                <div class="float-end" v-if="menu.key == 'progress'">
                  <i
                    class="fa-solid fa-edit pointer"
                    v-if="!editMember"
                    @click="editMember = !editMember"
                  ></i>
                  <i
                    class="fa-solid fa-x pointer"
                    v-if="editMember"
                    @click="editMember = !editMember"
                  ></i>
                </div>
                <div class="">
                  <h5 class="mb-3">
                    {{ student_info.first_name + " " + student_info.last_name }}
                  </h5>
                  <div class="member-role text-center" v-if="!editMember">
                    {{
                      student_info.contribution_role == null
                        ? "Not Available"
                        : student_info.contribution_role
                    }}
                  </div>
                  <div class="mb-3" v-if="editMember">
                    <input-group class="text-start">
                      <input
                        v-model="student_info.contribution_role"
                        type="text"
                        class="form-mentoring form-control"
                        placeholder="Fill in your role here .."
                        id="role"
                        required
                      />
                      <label for="role">Your role</label>
                    </input-group>
                  </div>
                  <div
                    class="border rounded-3 member-contribution"
                    v-if="!editMember"
                  >
                    {{
                      student_info.contribution_description == null
                        ? "Describe your contribution here .."
                        : student_info.contribution_description
                    }}
                  </div>
                  <div class="mb-3" v-if="editMember">
                    <input-group>
                      <textarea
                        placeholder="Describe your contribution here .."
                        v-model="student_info.contribution_description"
                        rows="5"
                        class="form-mentoring form-control w-100"
                        id="contribute"
                        required
                      ></textarea>
                      <label for="contribute">Task Description</label>
                    </input-group>
                  </div>
                  <div class="text-center" v-if="editMember">
                    <button
                      type="submit"
                      class="btn-mentoring btn-sm py-1 bg-primary"
                    >
                      <i class="bi bi-save me-2"></i>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="card border-0 shadow">
            <div class="card-body">
              <v-member
                :menu="menu"
                :member="group_member"
                :group="group_info"
                :student="student_info"
                @check="checkComponent"
              ></v-member>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Multiselect from "vue-multiselect";

import Meeting from "@/components/student/page/activity/group-detail/view-detail/meeting";
import Member from "@/components/student/page/activity/group-detail/view-detail/member";

export default {
  name: "view",
  props: {
    menu: Object,
  },
  components: {
    "v-meeting": Meeting,
    "v-member": Member,
    // "group-type": Multiselect,
  },
  data() {
    return {
      editGroup: false,
      editMember: false,
      groupType: "",
      options: ["Group Mentoring", "Profile Building Mentoring"],
      groupId: "",
      groups: [],
      group_info: [],
      group_logo: [],
      group_meeting: [],
      group_member: [],
      student_info: [],
    };
  },
  methods: {
    redirect() {
      this.$router.push({ path: "/user/my-activity/group" });
    },

    addLogo(e) {
      this.group_logo = e.target.files[0];
    },

    async getData() {
      this.$Progress.start();
      try {
        const response = await this.$axios.get(
          "student/detail/group/project/" + this.groupId
        );

        this.group_info = response.data.data.group_info;
        this.group_meeting = response.data.data.group_meeting;
        this.group_member = response.data.data.group_member;
        this.student_info = response.data.data.student_info;
        // console.log(response.data);
        this.$Progress.finish();
      } catch (e) {
        this.$Progress.fail();
        this.$alert.toast("error", "Group project is not found");
        this.$router.push({ path: "/user/my-activity/group" });
        console.log(e.response);
      }
    },

    async handleUpdateGroup() {
      let form = new FormData();
      form.append("project_name", this.group_info.project_name);
      // form.append("project_type", this.group_info.project_type);
      form.append("project_desc", this.group_info.project_desc);
      form.append("project_status", this.group_info.project_status);
      form.append("status", this.group_info.status);
      form.append("owner_type", this.group_info.owner_type);
      form.append("picture", this.group_logo);

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "student/update/group/project/" + this.groupId,
          form
        );

        this.group_info = response.data.data;
        this.editGroup = false;
        this.$alert.toast("success", response.data.message);
        // console.log(response.data);
        this.$alert.close();
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    async handleUpdateRole() {
      this.$alert.loading();
      try {
        const response = await this.$axios.put(
          "student/group/project/participant/" + this.groupId,
          {
            role: this.student_info.contribution_role,
            description: this.student_info.contribution_description,
          }
        );

        this.editMember = false;
        this.$alert.toast("success", response.data.message);
        setTimeout(() => {
          this.getData();
        }, 3000);
        // console.log(response.data);
      } catch (e) {
        this.$alert.close();
        console.log(e.response.data);
        this.$alert.toast("error", "Please try again.");
      }
    },

    checkComponent(i) {
      if (i == "new") {
        this.getData();
      }
    },
  },

  created() {
    this.groupId = this.$route.params.key2;
    if (this.groupId) {
      this.getData();
    } else {
      this.$alert.toast("error", "Group project is not found");
      this.$router.push({ path: "/user/my-activity/group" });
    }
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