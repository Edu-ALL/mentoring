<template>
  <div id="group">
    <div class="container mb-3">
      <!-- List  -->
      <div
        class=""
        v-if="
          menu.menu == 'my-activity' &&
          menu.submenu == 'group' &&
          menu.key == '' &&
          menu.key2 == ''
        "
      >
        <!-- Tabs  -->
        <div class="row align-items-center">
          <div class="col-md-9 col-6 menu-tab">
            <button
              class="btn btn-sm mx-1 py-1"
              :class="tab == 'request' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'request'"
            >
              New Request
              <div class="badge bg-primary ms-2" v-if="summary?.request > 0">
                {{ summary.request }}
              </div>
            </button>
            <button
              class="btn btn-sm mx-1 py-1"
              :class="
                tab == '' || tab == 'progress' ? 'btn-type-1' : 'btn-type-2'
              "
              @click="tab = 'progress'"
            >
              In Progress
              <div class="badge bg-primary ms-2" v-if="summary?.upcoming > 0">
                {{ summary.upcoming }}
              </div>
            </button>
            <button
              class="btn btn-sm mx-1 py-1"
              :class="tab == 'completed' ? 'btn-type-1' : 'btn-type-2'"
              @click="tab = 'completed'"
            >
              Completed
              <div class="badge bg-primary ms-2" v-if="summary?.history > 0">
                {{ summary.history }}
              </div>
            </button>
          </div>
          <div class="col-md-3 col-6 text-end">
            <button
              class="btn btn-sm btn-type-3 mx-1 py-1"
              @click="modal = 'add'"
            >
              <i class="bi bi-plus-circle me-2"></i>New a Group
            </button>
          </div>
        </div>

        <!-- Content  -->
        <div class="row mt-2">
          <div class="col">
            <div class="card border-0 shadow-sm">
              <transition name="fade">
                <v-request
                  v-if="tab == 'request'"
                  @summary="getSummary"
                ></v-request>
              </transition>
              <transition name="fade">
                <v-progress
                  v-if="tab == '' || tab == 'progress'"
                  :check="load"
                  @modal="checkModal"
                ></v-progress>
              </transition>
              <transition name="fade">
                <v-complete v-if="tab == 'completed'"></v-complete>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <!-- View Detail  -->
      <v-view
        :menu="menu"
        v-if="
          menu.menu == 'my-activity' &&
          menu.submenu == 'group' &&
          menu.key != ''
        "
      ></v-view>
    </div>

    <!-- MODAL  -->
    <div class="vue-modal-overlay" v-if="modal != ''"></div>
    <transition name="pop">
      <div
        class="vue-modal vue-modal-lg mentoring-scroll"
        v-if="modal == 'add'"
      >
        <!-- <v-add @modal="checkModal" @new="checkData"></v-add> -->
        <form method="post" @submit.prevent="handleSubmit()">
          <div class="row">
            <div class="col-12">
              <h5>New Group</h5>
              <hr class="my-1 mb-3" />
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <input-group>
                  <input
                    type="text"
                    v-model="group.project_name"
                    class="form-mentoring form-control w-100"
                    required
                    placeholder="fill in here ..."
                    id="projectName"
                  />
                  <label for="projectName">Project Name</label>
                </input-group>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <group-type
                  v-model="group.project_type"
                  :options="options"
                  placeholder="Select project type"
                  required
                  @select="interestCheck"
                  style="margin-top: 13px"
                >
                </group-type>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
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
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <input-group class="w-100">
                  <input
                    type="email"
                    class="form-mentoring form-control"
                    v-model="member"
                    placeholder="add members email here."
                    @blur="validateEmail"
                    @keydown.enter.prevent="addMember"
                    @keydown.tab.prevent="addMember"
                    @keydown.,.prevent="addMember"
                    id="member"
                  />
                  <label for="member">Invite New Member</label>
                </input-group>
                <transition name="fade">
                  <small class="text-danger d-block" v-if="error_member"
                    >Please enter a valid email</small
                  >
                </transition>
                <div
                  class="badge bg-white text-muted me-1 rounded"
                  v-for="(i, index) in members"
                  :key="index"
                >
                  {{ i }}
                  <i
                    class="fa-solid fa-x pointer ms-2"
                    @click="removeMember(index)"
                  ></i>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <input-group>
                  <v-editor
                    cols="30"
                    rows="10"
                    api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                    v-model="group.project_desc"
                    placeholder="Project Description"
                    id="desc"
                  ></v-editor>
                </input-group>
              </div>
            </div>
            <div class="col-6">
              <button
                type="button"
                class="btn-mentoring py-1 btn-outline-danger"
                @click="modal = ''"
              >
                <i class="bi bi-x-circle me-1"></i>
                Cancel
              </button>
            </div>
            <div class="col-6 text-end">
              <button type="submit" class="btn-mentoring py-1 btn-success">
                <i class="bi bi-save me-2"></i>
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

import Request from "@/components/student/page/activity/group-detail/request";
import Progress from "@/components/student/page/activity/group-detail/progress";
import Complete from "@/components/student/page/activity/group-detail/complete";
// import Add from "@/components/student/page/activity/group-detail/add";
import View from "@/components/student/page/activity/group-detail/view";

export default {
  name: "groups",
  components: {
    "group-type": Multiselect,
    "v-request": Request,
    "v-progress": Progress,
    "v-complete": Complete,
    // "v-add": Add,
    "v-view": View,
  },
  data() {
    return {
      tab: "",
      modal: "",
      alert: "",
      menu: {
        menu: "",
        submenu: "",
        key: "",
        key2: "",
      },
      load: "",
      summary: [],
      group_data: [],

      emails: [],
      emailOptions: [],
      options: ["Group Mentoring", "Profile Building Mentoring"],
      group: {
        project_name: "",
        project_type: "",
        project_desc: "",
        project_status: "",
        status: "in progress",
        owner_type: "student",
      },
      group_logo: "",
      member: "",
      members: [],
      error_member: false,
    };
  },
  methods: {
    checkModal(i) {
      this.modal = i;
      this.load = i;
    },

    checkData() {
      this.getSummary();
      this.load = "new-group";
      this.tab = "progress";
    },

    async getSummary() {
      this.summary = [];
      try {
        const response = await this.$axios.get(
          "student/group-projects/summary"
        );
        this.summary = response.data.data;
      } catch (e) {
        console.log(e.response);
      }
    },

    addLogo(e) {
      this.group_logo = e.target.files[0];
    },

    validateEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    addMember() {
      if (this.validateEmail(this.member)) {
        this.members.push(this.member);
        this.member = "";
        this.error_member = false;
      } else {
        this.member = "";
        this.error_member = true;
      }
    },

    removeMember(i) {
      this.members.splice(i, 1);
      this.error_member = false;
    },

    async handleSubmit() {
      let form = new FormData();
      form.append("project_name", this.group.project_name);
      form.append("project_type", this.group.project_type);
      form.append("project_desc", this.group.project_desc);
      form.append("project_status", this.group.project_status);
      form.append("status", this.group.status);
      form.append("owner_type", this.group.owner_type);
      form.append("picture", this.group_logo);

      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      this.modal = "";
      this.$alert.loading();
      try {
        const response = await this.$axios.post("student/group/project", form);

        if (response.data.success) {
          if (this.members.length > 0) {
            this.handleMembers(response.data.data.id);
          } else {
            this.$alert.toast("success", response.data.message);
            setTimeout(() => {
              this.load = "new-group";
            }, 3000);
            this.getSummary();
          }
        } else {
          this.$alert.toast("error", response.data.error);
        }

        // console.log(response.data);
      } catch (e) {
        this.$alert.toast("error", e.response.data.error.project_type[0]);
        console.log(e.response);
      }
    },

    async handleMembers(id) {
      try {
        const response = await this.$axios.post(
          "student/group/project/participant",
          {
            group_id: id,
            participant: this.members,
          }
        );

        this.$alert.toast("success", response.data.message);
        setTimeout(() => {
          this.load = "new-group";
        }, 3000);
        this.getSummary();
      } catch (e) {
        console.log(e.response);
        this.$alert.close();
      }
    },

    redirect() {
      this.$router.push({ path: "/user" });
    },
  },
  watch: {
    $route(to) {
      this.menu.menu = to.params.menu;
      this.menu.submenu = to.params.submenu;
      this.menu.key = to.params.key;
      this.menu.key2 = to.params.key2;
    },
  },
  created() {
    if (localStorage.getItem("tab")) {
      this.tab = localStorage.getItem("tab");
      localStorage.removeItem("tab");
    }

    this.menu.menu = this.$route.params.menu;
    this.menu.submenu = this.$route.params.submenu;
    this.menu.key = this.$route.params.key;
    this.menu.key2 = this.$route.params.key2;

    this.getSummary();
  },
};
</script>
<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}

.card-input-element {
  display: none;
}

.card-input {
  width: 100%;
  background: #fff;
  border: 3px solid #fff;
  color: #223872;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  height: 65px;
  display: flex;
  align-items: center;
}

.panel-heading {
  width: 100%;
  display: block;
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
}

.card-input:hover {
  cursor: pointer;
}

.card-input-element:checked + .card-input {
  border: 3px solid #fff;
  color: #fff;
  background: #223872;
}
</style>