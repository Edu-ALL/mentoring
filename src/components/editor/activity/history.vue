<template>
  <div id="pending">
    <div class="card-white m-0">
      <div class="row mb-4">
        <div class="col-md-6 text-start">
          <input type="text" class="form-mentoring" placeholder="Search" />
        </div>
      </div>
      <table class="table table-borderless table-hover pointer">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>School Name</th>
            <th>Grade</th>
            <th>Date & Time</th>
            <th width="15%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" class="align-middle">
            <td>Full Name</td>
            <td>Email</td>
            <td>School Name</td>
            <td>Grade</td>
            <td>Date & Time</td>
            <td>
              <button class="btn btn-sm btn-mentoring mb-1 btn-primary py-1" :key="i" @click="checkDetail(i)">
                Result
              </button>
              <!-- <button class="btn btn-sm btn-mentoring btn-success py-1">
                Location
              </button> -->
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>

    <transition name="fade">
      <div v-if="detail">
        <div class="vue-modal vue-modal-lg">
          <h5>Files Detail</h5>
          <hr />
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Full Name</label> <br />
                Lorem Ipsum
              </div>
              <div class="mb-2">
                <label>Email</label> <br />
                Email@email.com
              </div>
              <div class="mb-2">
                <label>School Name</label> <br />
                School Name
              </div>
              <div class="mb-2">
                <label>Grade</label> <br />
                Grade
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Grade</label> <br />
                No
              </div>
              <div class="mb-2">
                <button class="btn btn-sm btn-primary btn-mentoring">
                  Download File
                </button>
              </div>
              <div class="mb-2">
                <label>Verification Status</label> <br />
                <select name="" id="" class="form-control form-mentoring">
                  <option value="">Verify</option>
                  <option value="">Not Verify</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="vue-modal-overlay" @click="detail = false"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "history",
  components: {},
  data() {
    return {
      detail: false,
    };
  },
  methods: {
    checkDetail(i) {
      console.log(i);
      this.detail = true;
    },
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>