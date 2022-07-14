<template>
  <div id="alumni">
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
        <button class="btn-mentoring btn-type-1 me-2">Sync Alumni Data</button>
      </div> -->
    </div>
    <div class="card-white">
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
            v-for="(i, index) in alumni.data"
            :key="index"
            @click="this.$router.push({ path: '/admin/user/alumni/' + i.id })"
          >
            <td>{{ alumni.from + index }}</td>
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

      <div class="text-center" v-if="alumni.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="alumni.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="alumni.current_page != 1">
            <a class="page-link" @click="getPage(alumni.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in alumni.last_page" :key="i">
            <li
              class="page-item"
              v-if="alumni.current_page - 2 < i && alumni.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="alumni.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(alumni.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="alumni.current_page != alumni.last_page">
            <a class="page-link" @click="getPage(alumni.next_page_url)">
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
  name: "alumni",
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      alumni: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/user/alumni")
        .then((response) => {
          this.$alert.close();
          this.alumni = response.data.data;
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
          this.alumni = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/user/alumni?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.alumni = response.data.data;
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