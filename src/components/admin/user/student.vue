<template>
  <div id="student">
    <div class="row mb-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
      <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div>
    </div>
    <div class="card-white">
      <table class="table table-borderless table-hover pointer">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>School Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in students.data" :key="i">
            <td>{{ i.first_name + " " + i.last_name }}</td>
            <td>{{ i.email }}</td>
            <td>{{ i.grade }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" @click="getPage(students.links[0].url)"
              >Previous</a
            >
          </li>

          <li class="page-item" v-for="i in students.last_page" :key="i">
            <a
              class="page-link"
              :class="students.current_page == i ? 'active' : ''"
              href="#"
              @click="getPage(students.path + '?page=' + i)"
              >{{ i }}</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" @click="getPage(students.links[2].url)">
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
  name: "student",
  data() {
    return {
      students: [],
    };
  },
  methods: {
    getData() {
      axios
        .get(this.$url + "list/student", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.students = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data);
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
          this.students = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
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
