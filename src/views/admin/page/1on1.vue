<template>
  <div id="1on1">
    <div class="card-white">
      <div class="row mb-2 justify-content-between">
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

        <div class="col-3">
          <input-group>
            <select
              v-model="status"
              @change="getData(status)"
              class="form-select"
            >
              <option value="">All</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Finsihed</option>
              <option value="canceled">Canceled</option>
              <option value="rejected">Rejected</option>
            </select>
            <label for="">Select Status</label>
          </input-group>
        </div>
        <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
      </div>

      <div class="table-responsive">
        <table class="table table-bordered align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Mentors Name</th>
              <th>Students Name</th>
              <th>Category</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center pointer"
              v-for="(i, index) in calls.data"
              :key="index"
            >
              <td>{{ calls.from + index }}</td>
              <td>
                {{ i.users.first_name + " " + i.users.last_name }}
              </td>
              <td>
                {{ i.students.first_name + " " + i.students.last_name }}
              </td>
              <td style="text-transform: capitalize">
                {{ i.module + " - " + i.call_with }}
              </td>
              <td>
                <small>
                  {{ $customDate.date(i.start_call_date) }} <br />
                  {{ $customDate.time(i.start_call_date) }} -
                  {{ $customDate.time(i.end_call_date) }}
                </small>
              </td>
              <td style="text-transform: capitalize">
                <i
                  class="fa-solid fa-ban text-danger"
                  v-if="i.call_status == 'rejected'"
                ></i>
                <i
                  class="fa-solid fa-clock text-info"
                  v-if="i.call_status == 'waiting'"
                ></i>
                <i
                  class="fa-solid fa-times-circle text-danger"
                  v-if="i.call_status == 'canceled'"
                ></i>
                <i
                  class="fa-solid fa-check-circle text-success"
                  v-if="i.call_status == 'finished'"
                ></i>
                {{ i.call_status }}
              </td>
              <td>
                <button
                  class="btn-mentoring py-1 bg-secondary"
                  @click="goLink(i.location_link)"
                >
                  Link <i class="fa-solid fa-paper-plane ms-2"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center" v-if="calls.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <v-pagination :datas="calls" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "1on1",
  data() {
    return {
      calls: [],
      search: {
        bar: false,
        name: "",
      },
      status: "",
    };
  },
  methods: {
    getData(status = "all") {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call?status=" + status)
        .then((response) => {
          this.$Progress.finish();
          this.calls = response.data.data;
          // console.log(response.data);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error.response);
        });
    },

    getPage(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.calls = response.data.data;
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
          .get(
            this.$url +
              "list/activities/1-on-1-call?keyword=" +
              this.search.name,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            this.$alert.close();
            this.calls = response.data.data;
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

    goLink(link) {
      window.open(link, "_blank");
    },
  },
  created() {
    if (localStorage.getItem("meeting_status")) {
      this.status = localStorage.getItem("meeting_status");
      this.getData(localStorage.getItem("meeting_status"));
      localStorage.removeItem("meeting_status");
    } else {
      this.getData();
    }
  },
};
</script>

<style>
</style>