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
        <table class="table align-middle table-hover">
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
              class="text-center pointer" v-for="i in 5" :key="i" @click="checkDetail(i)"
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
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="files.current_page != 1">
            <a class="page-link" @click="getPage(files.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in files.last_page" :key="i">
            <li
              class="page-item"
              v-if="files.current_page - 2 < i && files.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="files.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(files.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="files.current_page != files.last_page">
            <a class="page-link" @click="getPage(files.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
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
  </div>
</template>

<script>
export default {
  name: "files",
  props: {
    menus: Object,
  },
  data() {
    return {
      files: [],
      detail: false,
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/student/files", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.files = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.files = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkDetail(i) {
      console.log(i);
      this.detail = true;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.form-control {
  box-shadow: none;
}
</style>