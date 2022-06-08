<template>
  <div id="links">
    <div class="req-header p-2 py-1">
      <i class="fa-solid fa-circle-xmark me-1 text-danger"></i>
      <i class="fa-solid fa-circle-check me-1 text-success"></i>
      Publication Links
      <div class="float-end">
        <i class="fa-solid fa-add pointer" @click="modal = 'add'"></i>
      </div>
    </div>
    <div class="req-body p-2">
      <div class="row row-cols-1">
        <div class="col">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="i in 3" :key="i">
              <div class="link-title">Title Name</div>
              <div class="link-url">URL</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <!-- Modal Document  -->
  <transition name="pop">
    <div class="vue-modal vue-modal-sm" v-if="modal == 'add'">
      <h6 class="mb-0">Publication Links</h6>
      <hr class="my-1 mb-3" />
      <div class="mb-2">
        <label>Title</label>
        <input
          type="text"
          name=""
          id=""
          class="form-mentoring form-control-sm w-100"
        />
      </div>
      <div class="mb-3">
        <label>URL</label>
        <input
          type="text"
          name=""
          id=""
          class="form-mentoring form-control-sm w-100"
        />
      </div>
      <div class="text-end">
        <button class="btn-mentoring btn-sm py-1 bg-primary">
          <i class="fa-solid fa-save me-2"></i>
          Save
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "links",
  data() {
    return {
      modal: "",
    };
  },
};
</script>

<style>
</style>