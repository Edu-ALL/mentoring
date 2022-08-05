<template>
  <div id="editor">
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
        <button class="btn-mentoring btn-type-1 me-2">Sync Editor Data</button>
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
            v-for="(i, index) in editors.data"
            :key="index"
            @click="this.$router.push({ path: '/admin/user/editor/' + i.id })"
          >
            <td>{{ editors.from + index }}</td>
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

      <div class="text-center" v-if="editors.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <v-pagination :datas="editors.from" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "editor",
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      editors: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/user/editor")
        .then((response) => {
          this.$alert.close();
          this.editors = response.data.data;
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
          this.editors = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "find/user/editor?keyword=" + this.search.name)
        .then((response) => {
          this.$alert.close();
          this.editors = response.data.data;
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