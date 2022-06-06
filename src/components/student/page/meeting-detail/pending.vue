<template>
  <div id="pending">
    <div class="container">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="text-center">
              <th width="3%">No</th>
              <th>Call With</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 4" :key="i" class="text-center align-middle">
              <td>{{ i }}</td>
              <td nowrap>Devi Kasih - Mentor</td>
              <td nowrap>Life Skill</td>
              <td nowrap>24 July 2022</td>
              <td nowrap>10:00 AM</td>
              <td>
                <small class="text-info"> Waiting for Confirmation </small>
              </td>
              <td>
                <button
                  class="btn-mentoring btn-sm btn-type-1 mx-1 mt-1 py-1"
                  @click="cancelMeeting"
                >
                  Cancel Meeting
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in 3" :key="i">
            <li class="page-item">
              <a class="page-link" href="#">{{ i }}</a>
            </li>
          </div>
          <li class="page-item">
            <a class="page-link">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- MODAL -->
    <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
    <transition name="pop">
      <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'cancel'">
        <div class="text-center">
          <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          <h5 class="mt-2">Are you sure to cancel this meeting?</h5>
          <div class="mt-3">
            <button
              class="btn-mentoring btn-warning btn-sm py-1 mx-1"
              @click="modal = ''"
            >
              Cancel</button
            ><button
              class="btn-mentoring btn-outline-success btn-sm py-1 mx-1"
              @click="deleteProcess"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "pending",
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    cancelMeeting() {
      this.modal = "cancel";
    },
  },
};
</script>

<style>
</style>