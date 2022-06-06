<template>
  <div id="request">
    <div class="container mt-3">
      <div class="row row-cols-md-2 row-cols-1 g-2">
        <div class="col">
          <div class="card card-group shadow">
            <div class="card-body">
              <h5 class="mb-1">Group Project A</h5>
              <span class="badge bg-secondary rounded-pill text-dark">
                Project Mentoring
              </span>
              <div class="project-desc mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores cum nesciunt earum excepturi ab officiis ..
              </div>
              <hr class="my-2" />
              <div class="row align-items-center">
                <div class="col-6">
                  <button
                    class="btn-mentoring btn-sm py-1 btn-outline-danger"
                    @click="modal = 'reject'"
                  >
                    Reject
                  </button>
                </div>
                <div class="col-6 text-end">
                  <button class="btn-mentoring btn-sm py-1 bg-primary">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="mt-3">
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
          <h5 class="mt-2">
            Are you sure you want to refuse to join this group?
          </h5>
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
};
</script>

<style scoped>
.card-group {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}

.card-status {
  position: absolute;
  right: -10px;
  top: -10px;
  padding: 10px 10px 4px 4px;
  border-radius: 50%;
}
</style>