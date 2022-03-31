<template>
  <div id="mentor">
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
      <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">Sync Mentor Data</button>
      </div>
    </div>
    <div class="card-white">
      <!-- {{ mentors }} -->
      <table class="table table-borderless table-hover pointer">
        <thead>
          <tr>
            <th width="1%">No</th>
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
            <td>{{ mentors.from + index }}</td>
            <td>
              <i class="fa-regular fa-user fa-fw"></i>
              {{ i.first_name + " " + i.last_name }}
            </td>
            <td><i class="fa-solid fa-at fa-fw"></i> {{ i.email }}</td>
            <td>
              <i class="fa-solid fa-mobile-screen fa-fw"></i>
              {{ i.phone_number }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-center" v-if="mentors.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="mentors.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="mentors.current_page != 1">
            <a class="page-link" @click="getPage(mentors.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in mentors.last_page" :key="i">
            <li
              class="page-item"
              v-if="
                mentors.current_page - 2 < i && mentors.current_page + 2 > i
              "
            >
              <a
                class="page-link"
                :class="
                  mentors.current_page == i ? 'bg-primary text-white' : ''
                "
                href="#"
                @click="getPage(mentors.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li
            class="page-item"
            v-if="mentors.current_page != mentors.last_page"
          >
            <a class="page-link" @click="getPage(mentors.next_page_url)">
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
      this.$axios
        .get(this.$url + "list/user/mentor", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mentors = response.data.data;
          // console.log(response);
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
          this.mentors = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$axios
        .get(this.$url + "find/user/mentor?keyword=" + this.search.name, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mentors = response.data.data;
          this.search.bar = true;
          // console.log(response);
        })
        .catch((error) => {
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
.badge {
  border-radius: 15px;
}
</style>