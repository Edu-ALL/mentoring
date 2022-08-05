<template>
  <div id="files">
    <div class="row my-4">
      <div class="col-md-6 text-start">
        <input
          type="text"
          class="form-mentoring"
          v-model="search.name"
          @change="searchData"
          placeholder="Search"
        />
        <br />
        <span class="badge bg-primary px-3 d-inline-block" v-if="search.bar">
          {{ search.name }}
          <i class="fa-solid fa-close ms-3 pointer" @click="closeSearch"></i>
        </span>
      </div>
      <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
    </div>
    <!-- {{ files }} -->

    <div class="card-white">
      <div class="table-responsive">
        <table class="table align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>File Name</th>
              <th>Category</th>
              <th>Need Verification</th>
              <th>Verification Status</th>
              <th>Download</th>
              <th>Uploaded By</th>
              <th>Uploaded Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center pointer"
              v-for="(i, index) in files.data"
              :key="index"
              @click="checkDetail(i)"
            >
              <td>{{ files.from + index }}</td>
              <td>{{ i.med_title }}</td>
              <td>{{ i.media_categories.name }}</td>
              <td>
                {{ i.media_categories.terms == "required" ? "Yes" : "No" }}
              </td>
              <td>
                {{ i.media_categories.terms != "required" ? "-" : "" }}
                <i
                  class="fa-solid fa-check text-success"
                  v-if="
                    i.media_categories.terms == 'required' &&
                    i.status == 'verified'
                  "
                ></i>
                <i
                  class="fa-solid fa-times text-danger"
                  v-if="
                    i.media_categories.terms == 'required' &&
                    i.status == 'not-verified'
                  "
                ></i>
              </td>
              <td>
                <a
                  :href="$base_url + i.med_file_path"
                  target="_blank"
                  class="btn btn-sm btn-primary btn-mentoring"
                >
                  Download File
                </a>
              </td>
              <td>{{ i.students.first_name + " " + i.students.last_name }}</td>
              <td>{{ $customDate.date(i.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center" v-if="files.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <v-pagination :datas="files.from" @result="getPage" />
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
                {{ detailData.med_title }}
              </div>
              <div class="mb-2">
                <label>Category File</label> <br />
                {{ detailData.media_categories.name }}
              </div>
              <div class="mb-2">
                <label>Uploaded by</label> <br />
                {{
                  detailData.students.first_name +
                  " " +
                  detailData.students.last_name
                }}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Need Verification</label> <br />
                {{
                  detailData.media_categories.terms == "required" ? "Yes" : "No"
                }}
              </div>
              <div class="mb-2">
                <a
                  :href="$base_url + detailData.med_file_path"
                  target="_blank"
                  class="btn btn-sm btn-primary btn-mentoring"
                >
                  Download File
                </a>
              </div>
              <div class="mb-2">
                <label>Verification Status</label> <br />
                <select
                  class="form-control form-mentoring"
                  v-model="detailData.status"
                  @change="verify(detailData)"
                >
                  <option value="verified">Verify</option>
                  <option value="not-verified">Not Verify</option>
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
      detailData: [],
      search: {
        bar: false,
        name: "",
      },
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/student/files")
        .then((response) => {
          this.$alert.close();
          this.files = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.files = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    checkDetail(i) {
      if (i.media_categories.terms == "required") {
        this.detailData = i;
        this.detail = true;
      }
    },

    verify(data) {
      this.$alert.loading();
      let files = {
        student_id: data.students.id,
        status: data.status,
      };

      this.$axios
        .post(this.$url + "switch/student/files/" + data.id, files)
        .then((response) => {
          this.$alert.close();
          this.$alert.toast("success", response.data.message);
          // console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response.data);
        });

      this.detail = false;
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/student/files?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.files = response.data.data;
          this.search.bar = true;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    closeSearch() {
      this.search.bar = false;
      this.search.name = "";
      this.getData();
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