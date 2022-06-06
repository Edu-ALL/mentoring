<template>
  <div id="groupMeeting">
    <div class="card-overlay" v-if="menu.submenu != 'progress'"></div>
    <div class="row">
      <div class="col-6">
        <h6>Group Meeting</h6>
      </div>
      <div class="col-6">
        <div class="text-end">
          <i
            class="fa-solid fa-add pointer"
            @click="modal = 'new-meeting'"
            v-if="menu.submenu == 'progress'"
          ></i>
        </div>
      </div>
      <div class="col-12 mt-2">
        <ul class="list-group">
          <li class="list-group-item" @click="modal = 'cancel-meeting'">
            <div class="row align-items-center">
              <div class="col-1">1</div>
              <div class="col-md-4 col-11">24 July 2022 09:00 AM</div>
              <div class="col-md-3 text-md-center">Upcoming</div>
              <div class="col-md-4 text-md-end">Location Link</div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="vue-modal-overlay" v-if="modal != ''"></div>
    <!-- New Meeting  -->
    <transition name="pop">
      <div
        class="vue-modal vue-modal-sm bg-secondary"
        v-if="modal == 'new-meeting'"
      >
        <h5>New Group Meeting</h5>
        <hr class="my-0 mb-3" />
        <div class="mb-2">
          <label>Meeting Date</label>
          <input type="datetime-local" class="form-mentoring w-100" />
        </div>

        <div class="mb-3">
          <label>Location Link</label>
          <input type="text" class="form-mentoring w-100" />
        </div>
        <hr />
        <div class="row">
          <div class="col-6">
            <button
              class="btn-mentoring btn-sm py-1 btn-outline-danger"
              @click="modal = ''"
            >
              Cancel
            </button>
          </div>
          <div class="col-6 text-end">
            <button class="btn-mentoring btn-sm py-1 btn-success">
              New Meeting
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Cancel Meeting  -->
    <transition name="pop">
      <div
        class="vue-modal vue-modal-sm bg-primary text-center"
        v-if="modal == 'cancel-meeting'"
      >
        <i class="fa-solid fa-circle-exclamation mx-1 fa-2xl"></i>
        <h5 class="mt-3 mb-3">Are you sure to cancel this meeting?</h5>
        <button
          class="btn-mentoring btn-sm py-1 btn-danger mx-1"
          @click="modal = ''"
        >
          Cancel
        </button>
        <button class="btn-mentoring btn-sm py-1 btn-outline-success mx-1">
          New Meeting
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "meeting",
  props: {
    menu: Object,
  },
  data() {
    return {
      modal: "",
    };
  },
};
</script>

<style scoped>
.list-group {
  font-size: 0.8em;
}
</style>