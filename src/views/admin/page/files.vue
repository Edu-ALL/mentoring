<template>
  <div id="files">
    <div class="row my-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
      <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
    </div>
    <div class="card-white">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>File Name</th>
              <th>Category File</th>
              <th>Need Verification</th>
              <th>Verification Status</th>
              <th>Uploaded By</th>
              <th>Uploaded Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="i in 5"
              :key="i"
              @click="checkDetail(i)"
            >
              <td>{{ i }}</td>
              <td>Lorem Ipsum</td>
              <td>Resume</td>
              <td>No</td>
              <td>-</td>
              <td>User Name</td>
              <td>20 Feburary 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
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
  </div>

  <transition name="fade">
    <div v-if="detail">
      <div class="vue-modal vue-modal-lg">
        <h5>Files Detail</h5>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="mb-2">
              <label>File Name</label> <br />
              Lorem Ipsum
            </div>
            <div class="mb-2">
              <label>Category File</label> <br />
              Resume
            </div>
            <div class="mb-2">
              <label>Uploaded by</label> <br />
              User Name
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <label>Need Verification</label> <br />
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
</template>

<script>
export default {
  name: "files",
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

<style scoped>
.form-control {
  box-shadow: none;
}
</style>