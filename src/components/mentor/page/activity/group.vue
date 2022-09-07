<template>
  <div id="group">
    <div id="view" v-if="menus.key == '' || menus.key2 == ''">
      <!-- Tabs  -->
      <div class="row">
        <div class="col-md-12 menu-tab">
          <div class="d-flex justify-content-between align-items-center">
            <button
              class="btn btn-sm py-1 btn-type-3 mx-1"
              @click="modal = 'add'"
            >
              <i class="fa-solid fa-add me-1"></i> New Group
            </button>
            <div
              class="mentoring-scroll overflow-auto py-2 w-50 text-end"
              style="white-space: nowrap"
            >
              <button
                class="btn btn-sm py-1 mx-1"
                :class="
                  tab == '' || tab == 'in-progress'
                    ? 'btn-type-1'
                    : 'btn-type-2'
                "
                @click="checkTab('in-progress')"
              >
                In Progress
                <div class="badge bg-primary ms-2" v-if="summary.upcoming > 0">
                  {{ summary.upcoming }}
                </div>
              </button>
              <button
                class="btn btn-sm py-1 mx-1"
                :class="tab == 'completed' ? 'btn-type-1' : 'btn-type-2'"
                @click="checkTab('completed')"
              >
                Completed
                <div class="badge bg-primary ms-2" v-if="summary.history > 0">
                  {{ summary.history }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Content  -->
      <div class="row mt-2">
        <div class="col">
          <transition name="fade">
            <v-progress
              v-if="tab == '' || tab == 'in-progress'"
              :group="group_data"
              @check="checkData"
            ></v-progress>
          </transition>
          <transition name="fade">
            <v-complete
              v-if="tab == 'completed'"
              :group="group_data"
              @check="checkData"
            ></v-complete>
          </transition>
        </div>
      </div>

      <!-- Pagination  -->
      <v-pagination :datas="group_data" @result="getPage" />
    </div>

    <div id="detail">
      <v-detail
        v-if="menus.key != '' && menus.key2 != ''"
        :menus="menus"
        @check="checkData"
      ></v-detail>
    </div>
  </div>

  <!-- MODAL  -->
  <div class="vue-modal-overlay" v-if="modal != ''"></div>
  <!-- ADD Group Project  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-md" v-if="modal == 'add'">
      <form method="post" @submit.prevent="handleSubmit()">
        <div class="row align-items-center">
          <div class="col-12">
            <h5>New Group</h5>
            <hr class="my-1 mb-3" />
          </div>
          <div class="col-md-12">
            <div class="my-2">
              <input-group>
                <input
                  type="text"
                  v-model="group.project_name"
                  class="form-mentoring form-control w-100"
                  required
                  placeholder="fill in here .."
                  id="projectName"
                />
                <label for="projectName">Project Name</label>
              </input-group>
            </div>
          </div>
          <!-- <div class="col-md-6">
            <div class="my-2">
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
          </div> -->
          <div class="col-md-12">
            <div class="my-1">
              <mentee
                v-model="members"
                :options="menteeList"
                placeholder="Invite new member"
                deselect-label=""
                select-label=""
                :close-on-select="true"
                :clear-on-select="true"
                track-by="id"
                :custom-label="customLabel"
                :multiple="true"
                :taggable="true"
                required
                style="margin-top: 13px"
              >
              </mentee>
            </div>
          </div>
          <div class="col-md-12">
            <div class="my-3">
              <input-group>
                <v-editor
                  api-key="h7t62ozvqkx2ifkeh051fsy3k9irz7axx1g2zitzpbaqfo8m"
                  cols="30"
                  rows="13"
                  class="form-control form-mentoring w-100"
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
              class="btn-mentoring btn-sm py-1 btn-outline-danger"
              @click="modal = ''"
            >
              <i class="bi bi-x-circle me-1"></i>
              Cancel
            </button>
          </div>
          <div class="col-6 text-end">
            <button type="submit" class="btn-mentoring btn-sm py-1 btn-success">
              <i class="bi bi-save me-1"></i>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import Multiselect from "vue-multiselect";

import Progress from "@/components/mentor/page/activity/group/progress";
import Complete from "@/components/mentor/page/activity/group/completed";
import Detail from "@/components/mentor/page/activity/group/view";

export default {
  name: "group",
  props: {
    menus: Object,
  },
  components: {
    // "group-type": Multiselect,
    mentee: Multiselect,
    "v-progress": Progress,
    "v-complete": Complete,
    "v-detail": Detail,
  },
  data() {
    return {
      tab: "in-progress",
      modal: "",
      summary: [],
      options: ["Group Mentoring", "Profile Building Mentoring"],
      menteeList: [],
      members: [],
      group: {
        project_name: "",
        project_type: "",
        project_desc: "",
        project_status: "",
        student_id: [],
        status: "in progress",
        owner_type: "mentor",
      },
      group_data: [],
    };
  },
  methods: {
    checkTab(tab) {
      this.tab = tab;
      this.$router.push({ path: "/mentor/activity/group/" + tab });
    },

    customLabel({ first_name, last_name }) {
      return `${first_name} ${last_name}`;
    },

    checkData(e) {
      if (e == "completed") {
        this.getData(e);
      } else {
        this.getData();
      }
    },

    async getMentee() {
      try {
        const response = await this.$axios.get("list/student");

        this.menteeList = response.data.data;
        // console.log(response);
      } catch (e) {
        console.log(e.response);
      }
    },

    async getSummary() {
      try {
        const response = await this.$axios.get("mentor/group-projects/summary");
        this.summary = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    },

    async getData(tab = "in-progress") {
      this.$Progress.start();
      this.group_data = [];
      try {
        const response = await this.$axios.get(
          "list/mentor/group/project/" + tab
        );
        this.$Progress.finish();
        this.getSummary();
        this.group_data = response.data.data;
        // console.log(response.data);
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
        // this.$router.push({ path: "/mentor/activity/" });
      }
    },

    async getPage(link) {
      if (link != null) {
        this.$Progress.start();
        this.group_data = [];
        try {
          const response = await this.$axios.get(link);

          this.$Progress.finish();
          this.group_data = response.data.data;
          // console.log(response.data);
        } catch (e) {
          this.$Progress.fail();
          console.log(e.response);
        }
      }
    },

    async handleSubmit() {
      this.group.student_id = [];
      this.members.forEach((element) => {
        this.group.student_id.push(element.id);
      });

      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "create/group/project",
          this.group
        );

        console.log(response.data);

        this.modal = "";
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
          setTimeout(() => {
            this.getData("in-progress");
          }, 3000);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        this.$alert.close();
        console.log(e.response.error);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    if (this.$route.params.key) {
      this.tab = this.$route.params.key;
      this.getData(this.$route.params.key);
    } else {
      this.getData("in-progress");
    }

    this.getMentee();
  },
};
</script>

<style>
</style>