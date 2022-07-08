<template>
  <div id="view">
    <div class="row mb-3">
      <div class="col-12">
        <div class="ps-3 pointer" @click="redirect">
          <i class="fa-solid fa-arrow-left me-2"></i>
          <h5 class="d-inline">Groups</h5>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-7 mb-3">
          <div class="card border-0 shadow mb-3">
            <div class="card-body">
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
                <h5>Project Name</h5>
                <span class="badge bg-secondary rounded-pill text-dark">
                  Project Type
                </span>
                <div class="project-desc mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  dolores ipsam voluptas! Voluptas tempora adipisci neque itaque
                  fuga, ipsam assumenda quod vitae quisquam eaque delectus rem,
                  magnam iusto accusantium impedit.
                </div>
                <div class="row mt-3 align-items-center">
                  <div class="col-6">
                    <small class="text-muted"
                      ><i class="fa-solid fa-calendar me-2"></i>
                      24 July 2022
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
                  <div class="mb-2">
                    <input-group>
                      <input
                        v-model="group_info.project_name"
                        type="text"
                        required
                        class="form-mentoring form-control-sm w-100"
                      />
                      <label>Group Name</label>
                    </input-group>
                  </div>
                  <div class="mb-2">
                    <group-type
                      v-model="group_info.project_type"
                      :options="options"
                      placeholder="Select project type"
                      @select="interestCheck"
                      class="mt-3"
                    >
                    </group-type>
                  </div>
                  <div class="mb-2">
                    <input-group>
                      <span class="bg-white">Group Description</span>
                      <textarea
                        v-model="group_info.project_desc"
                        class="form-mentoring w-100"
                        rows="5"
                      ></textarea>
                    </input-group>
                  </div>
                  <hr class="my-0 mb-2" />
                  <div class="text-end">
                    <button
                      type="submit"
                      class="btn-mentoring btn-sm bg-primary py-1"
                    >
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
          <!-- Member  -->
          <div class="card border-0 shadow">
            <div class="card-body">
              <v-member
                :menu="menu"
                :member="group_member"
                :group="group_info"
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

import Meeting from "@/components/mentor/page/student/activity/group/view-detail/meeting";
import Member from "@/components/mentor/page/student/activity/group/view-detail/member";

export default {
  name: "view",
  props: {
    menus: Object,
  },
  components: {
    "v-meeting": Meeting,
    "v-member": Member,
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
      group_meeting: [],
      group_member: [],
      student_info: [],
    };
  },
  methods: {
    redirect() {
      this.$router.push({
        path: "/mentor/student/" + this.menus.submenu + "/group",
      });
    },
  },

  created() {
    this.groupId = this.$route.params.key2;
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