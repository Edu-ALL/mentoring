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
              <th>Category File</th>
              <th>Need Verification</th>
              <th>Verification Status</th>
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
              <td>{{ i.med_cat_id }}</td>
              <td>NA</td>
              <td>{{ i.status }}</td>
              <td>NA</td>
              <td>{{ $customDate.date(i.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center" v-if="files.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="files.from != null">
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
                {{ detailData.med_title }}
              </div>
              <div class="mb-2">
                <label>Category File</label> <br />
                {{ detailData.med_cat_id }}
              </div>
              <div class="mb-2">
                <label>Uploaded by</label> <br />
                NA
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
        .get(this.$url + "list/student/files", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
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
      this.detailData = i;
      this.detail = true;
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/student/files?keyword=" + this.search.name, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
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