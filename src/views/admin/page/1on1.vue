<template>
  <div id="1on1">
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

    <div class="card-white">
      <div class="table-responsive">
        <table class="table align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Call with</th>
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
              <td>{{ i.module + " - " + i.call_with }}</td>
              <td>
                <small>
                  {{ $customDate.date(i.created_at) }} <br />
                  {{ $customDate.time(i.created_at) }}
                </small>
              </td>
              <td style="text-transform: capitalize">{{ i.std_act_status }}</td>
              <td>{{ i.location_link }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center" v-if="calls.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="calls.from != null">
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
        .get(this.$url + "list/activities/1-on-1-call")
        .then((response) => {
          this.$alert.close();
          this.calls = response.data.data;
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
          this.calls = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      this.$alert.loading();
      this.$axios
        .get(
          this.$url + "list/activities/1-on-1-call?keyword=" + this.search.name,
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
</style>