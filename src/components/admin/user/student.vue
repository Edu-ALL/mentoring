<template>
  <div id="student">
    <div class="row mb-4">
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
    <div class="card-white">
      <!-- {{ students }} -->
      <table class="table table-borderless table-hover pointer">
        <thead>
          <tr>
            <th width="1%">No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>School Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(i, index) in students.data"
            :key="index"
            @click="
              this.$router.push({ path: '/admin/user/student/' + i.email })
            "
          >
            <td>{{ students.from + index }}</td>
            <td>
              <i class="fa-regular fa-user fa-fw"></i>
              {{ i.first_name + " " + i.last_name }}
            </td>
            <td>{{ i.email }}</td>
            <td>{{ i.school_name }}</td>
            <td>
              {{
                parseInt(i.grade) >= 7 || i.grade == "Not High School"
                  ? i.grade
                  : "N/A"
              }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-center" v-if="students.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="students.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="students.current_page != 1">
            <a class="page-link" @click="getPage(students.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(i, index) in students.last_page" :key="index">
            <li
              class="page-item"
              v-if="
                students.current_page - 2 < i && students.current_page + 2 > i
              "
            >
              <a
                class="page-link"
                :class="
                  students.current_page == i ? 'bg-primary text-white' : ''
                "
                href="#"
                @click="getPage(students.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li
            class="page-item"
            v-if="students.current_page != students.last_page"
          >
            <a class="page-link" @click="getPage(students.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      students: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/student", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$alert.close();
          this.students = response.data.data;
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
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.students = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/student?keyword=" + this.search.name, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$alert.close();
          this.students = response.data.data;
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

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
