<template>
  <div id="request">
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
              <th width="17%">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 7" :key="i" class="text-center align-middle">
              <td>{{ i }}</td>
              <td nowrap>Devi Kasih - Mentor</td>
              <td nowrap>Life Skill</td>
              <td nowrap>24 July 2022</td>
              <td nowrap>10:00 AM</td>
              <td nowrap>
                <button class="btn-mentoring btn-sm btn-success mx-1 py-1">
                  Accept
                </button>
                <button
                  class="btn-mentoring btn-sm btn-danger mx-1 py-1"
                  @click="rejectMeeting"
                >
                  Reject
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
      <div class="vue-modal vue-modal-sm bg-primary" v-if="modal == 'reject'">
        <div class="text-center">
          <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          <h5 class="mt-2">Are you sure to reject this meeting?</h5>
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
  name: "request",
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    rejectMeeting() {
      this.modal = "reject";
    },
  },
};
</script>

<style>
</style>