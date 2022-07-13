<template>
  <div id="group">
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
          :class="tab == '' || tab == 'progress' ? 'btn-type-1' : 'btn-type-2'"
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
</template>

<script>
import Progress from "@/components/mentor/page/activity/group/progress";
import Complete from "@/components/mentor/page/activity/group/completed";
export default {
  name: "group",
  components: {
    "v-progress": Progress,
    "v-complete": Complete,
  },
  data() {
    return {
      tab: "progress",
    };
  },
  created() {},
};
</script>

<style>
</style>