<template>
  <div id="mentor">
    <div class="row mb-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
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
            <th>Full Name</th>
            <th>Email</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in mentors.data" :key="i">
            <td>{{ i.first_name + " " + i.last_name }}</td>
            <td>{{ i.email }}</td>
            <td>Education</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" @click="getPage(mentors.links[0].url)"
              >Previous</a
            >
          </li>

          <li class="page-item" v-for="i in mentors.last_page" :key="i">
            <a
              class="page-link"
              :class="mentors.current_page == i ? 'active' : ''"
              href="#"
              @click="getPage(mentors.path + '?page=' + i)"
              >{{ i }}</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" @click="getPage(mentors.links[2].url)">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mentor",
  data() {
    return {
      mentors: [],
    };
  },
  methods: {
    getData() {
      axios
        .get(this.$url + "list/user/mentor", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mentors = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage(link) {
      axios
        .get(link, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mentors = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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