<template>
  <div id="view">
    <div class="row mb-3">
      <div class="col-12">
        <div
          class="sticky-top ps-3 pointer"
          style="top: 100px"
          @click="redirect"
        >
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
                <h5>Group Name</h5>
                <span class="badge bg-secondary rounded-pill text-dark">
                  Project Mentoring
                </span>
                <div class="project-desc mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi dignissimos iste debitis! Quod officiis sed rem
                  inventore, quasi, eligendi ex deleniti eveniet aperiam
                  laboriosam mollitia dolores voluptatem sapiente saepe ipsum.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum nemo odit sapiente, quo provident deserunt quis esse
                  explicabo fuga iste debitis dolore aut quod eveniet obcaecati
                  ad, minima quasi ut!
                </div>
                <div class="row mt-3 align-items-center">
                  <div class="col-6">
                    <small class="text-muted"
                      ><i class="fa-solid fa-calendar me-2"></i> 24 July
                      2022</small
                    >
                  </div>
                  <div class="col-6 text-end">
                    <i class="fa-solid fa-thumbs-up mx-1 text-success"></i>
                    <i
                      class="fa-solid fa-circle-exclamation mx-1 text-warning"
                    ></i>
                    <i
                      class="fa-solid fa-triangle-exclamation mx-1 text-danger"
                    ></i>
                  </div>
                </div>
              </div>

              <!-- Edit Group  -->
              <div class="" v-if="editGroup">
                <h6>Edit Group</h6>
                <hr />
                <div class="mb-2">
                  <label>Group Name</label>
                  <input
                    type="text"
                    class="form-mentoring form-control-sm w-100"
                  />
                </div>
                <div class="mb-2">
                  <label>Project Type</label>
                  <group-type
                    v-model="groupType"
                    :options="options"
                    placeholder="Select One"
                    @select="interestCheck"
                  >
                  </group-type>
                </div>
                <div class="mb-2">
                  <label>Group Description</label>
                  <textarea
                    name=""
                    class="form-mentoring w-100"
                    rows="5"
                  ></textarea>
                </div>
                <hr class="my-0 mb-2" />
                <div class="text-end">
                  <button class="btn-mentoring btn-sm bg-primary py-1">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-0 shadow">
            <div class="card-body">
              <v-meeting :menu="menu"></v-meeting>
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-3">
          <div class="card border-0 shadow mb-3">
            <div class="card-body">
              <div class="float-end">
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
              <div class="text-center">
                <h5>Saeka Minami</h5>
                <div class="member-role" v-if="!editMember">Mentee's Role</div>
                <div class="mb-2" v-if="editMember">
                  <input
                    type="text"
                    class="form-mentoring form-control-sm"
                    placeholder="Fill in your role here .."
                  />
                </div>
                <div
                  class="border rounded-3 member-contribution"
                  v-if="!editMember"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, deserunt natus tenetur dolorum voluptatum
                  provident. Ipsa, id eos quis perferendis maxime magni error et
                  eveniet veniam cupiditate sapiente quibusdam eaque!
                </div>
                <div class="mb-2" v-if="editMember">
                  <textarea
                    placeholder="Describe your contribution here .."
                    name=""
                    id=""
                    rows="5"
                    class="form-mentoring form-control-sm w-100"
                  ></textarea>
                </div>
                <div class="" v-if="editMember">
                  <button class="btn-mentoring btn-sm py-1 bg-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 shadow">
            <div class="card-body">
              <v-member :menu="menu"></v-member>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

import Meeting from "@/components/student/page/group-detail/view-detail/meeting";
import Member from "@/components/student/page/group-detail/view-detail/member";

export default {
  name: "view",
  props: {
    menu: Object,
  },
  components: {
    "v-meeting": Meeting,
    "v-member": Member,
    "group-type": Multiselect,
  },
  data() {
    return {
      editGroup: false,
      editMember: false,
      groupType: "",
      options: ["Group Mentoring", "Profile Building Mentoring"],
    };
  },
  methods: {
    redirect() {
      this.$router.push({ path: "/user/my-activity" });
    },
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