<template>
  <div id="mentor">
    <div class="card-white">
      <div class="row mb-2 justify-content-end">
        <div class="col-md-3">
          <input-group>
            <input
              type="text"
              class="form-mentoring form-control w-100"
              v-model="search.name"
              @change="searchData"
              placeholder="Search"
              id="search"
            />
            <label for="search">Search</label>
          </input-group>
          <span
            class="badge bg-primary px-3 d-inline-block float-end mt-1"
            v-if="search.bar && search.name != ''"
          >
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

      <!-- {{ mentors }} -->
      <table class="table table-bordered table-hover pointer">
        <thead>
          <tr>
            <th width="1%" class="text-center">No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(i, index) in mentors.data"
            :key="index"
            @click="this.$router.push({ path: '/admin/user/mentor/' + i.id })"
          >
            <td class="text-center">{{ mentors.from + index }}</td>
            <td>
              <i class="fa-regular fa-user fa-fw"></i>
              {{ i.first_name + " " + i.last_name }}
            </td>
            <td><i class="fa-solid fa-at fa-fw"></i> {{ i.email }}</td>
            <td>
              <i class="fa-solid fa-mobile-screen fa-fw"></i>
              {{ i.phone_number == null ? "N/A" : i.phone_number }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-center" v-if="mentors.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>

      <v-pagination :datas="mentors" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "mentor",
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      mentors: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/user/mentor")
        .then((response) => {
          this.$alert.close();
          this.mentors = response.data.data;
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
          this.mentors = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      if (this.search.name == "") {
        this.getData();
        this.search.bar = false;
        this.$alert.close();
      } else {
        this.$axios
          .get(this.$url + "find/user/mentor?keyword=" + this.search.name)
          .then((response) => {
            this.$alert.close();
            this.mentors = response.data.data;
            this.search.bar = true;
            // console.log(response);
          })
          .catch((error) => {
            this.$alert.close();
            console.log(error);
          });
      }
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
.badge {
  border-radius: 15px;
}
</style>