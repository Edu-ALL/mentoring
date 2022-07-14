<template>
  <div id="group">
    <div id="view" v-if="menus.key == '' || menus.key2 == ''">
      <div class="d-flex align-items-center justify-content-between">
        <h6 class="my-0 py-0">Group Project</h6>
        <button
          class="btn-mentoring btn-sm py-1 btn-type-3 mx-1"
          @click="modal = 'add'"
        >
          <i class="fa-solid fa-add"></i>
        </button>
      </div>
      <hr class="my-2" />
      <!-- Tabs  -->
      <div class="row mt-3">
        <div class="col-md-12 menu-tab">
          <button
            class="btn-mentoring btn-sm py-1 mx-1"
            :class="
              tab == '' || tab == 'progress' ? 'btn-type-1' : 'btn-type-2'
            "
            @click="tab = 'progress'"
          >
            In Progress
          </button>
          <button
            class="btn-mentoring btn-sm py-1 mx-1"
            :class="tab == 'completed' ? 'btn-type-1' : 'btn-type-2'"
            @click="tab = 'completed'"
          >
            Completed
          </button>
        </div>
      </div>

      <!-- Content  -->
      <div class="row mt-2">
        <div class="col">
          <div class="card border-0 shadow">
            <transition name="fade">
              <v-progress v-if="tab == '' || tab == 'progress'"></v-progress>
            </transition>
            <transition name="fade">
              <v-complete v-if="tab == 'completed'"></v-complete>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div id="detail">
      <v-detail
        v-if="menus.key != '' && menus.key2 != ''"
        :menus="menus"
      ></v-detail>
    </div>
  </div>

  <!-- MODAL  -->
  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- ADD Group Project  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-lg" v-if="modal == 'add'">
      <form method="post" @submit.prevent="handleSubmit()">
        <div class="row">
          <div class="col-12">
            <h5>New Group</h5>
            <hr class="my-1 mb-3" />
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <input-group>
                <input
                  type="text"
                  v-model="group.project_name"
                  class="form-mentoring form-control-sm w-100"
                  required
                />
                <label>Project Name</label>
              </input-group>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
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
            <div class="mb-2">
              <mentee
                v-model="group.student"
                :options="menteeList"
                placeholder="Select project type"
                :multiple="true"
                :taggable="true"
                required
                style="margin-top: 13px"
              >
              </mentee>
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-3">
              <input-group>
                <span class="bg-white">Project Description</span>
                <textarea
                  cols="30"
                  rows="10"
                  class="w-100"
                  v-model="group.project_desc"
                  required
                ></textarea>
              </input-group>
            </div>
          </div>
          <div class="col-6">
            <button
              type="button"
              class="btn-mentoring btn-outline-danger"
              @click="modal = ''"
            >
              Cancel
            </button>
          </div>
          <div class="col-6 text-end">
            <button type="submit" class="btn-mentoring btn-success">
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
    "group-type": Multiselect,
    mentee: Multiselect,
    "v-progress": Progress,
    "v-complete": Complete,
    "v-detail": Detail,
  },
  data() {
    return {
      tab: "progress",
      modal: "",
      options: ["Group Mentoring", "Profile Building Mentoring"],
      menteeList: ["Mentee 1", "Mentee 2"],
      group: {
        project_name: "",
        project_type: "",
        project_desc: "",
        project_status: "",
        student: [],
        status: "in progress",
        owner_type: "student",
      },
    };
  },
  created() {},
};
</script>

<style>
</style>