<template>
  <div id="1on1">
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
              <th>Call with</th>
              <th>Category</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center pointer" v-for="i in 5" :key="i">
              <td>{{ i }}</td>
              <td>Devi Kasih</td>
              <td>Life Skill - Mentor</td>
              <td>
                <small>
                  20 Feburary 2022 <br />
                  14.00 WIB
                </small>
              </td>
              <td>Waiting</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="calls.current_page != 1">
            <a class="page-link" @click="getPage(calls.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in calls.last_page" :key="i">
            <li
              class="page-item"
              v-if="calls.current_page - 2 < i && calls.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="calls.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(calls.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="calls.current_page != calls.last_page">
            <a class="page-link" @click="getPage(calls.next_page_url)">
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
  name: "1on1",
  data() {
    return {
      calls: [],
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.calls = response.data.data;
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
          this.calls = response.data.data;
          // console.log(response);
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
</style>