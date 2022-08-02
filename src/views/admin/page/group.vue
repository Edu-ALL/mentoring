<template>
  <div id="group">
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

      <div class="table-responsive">
        <table class="table table-bordered align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Mentors Name</th>
              <th>Students Name</th>
              <th>New Request</th>
              <th>In Progress</th>
              <th>Completed</th>
              <th>Total</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center pointer"
              v-for="(i, index) in groups.data"
              :key="index"
            >
              <td>{{ groups.from + index }}</td>
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
                  {{ $customDate.date(i.created_at) }}
                </small>
              </td>
              <td>
                <small>
                  {{ $customDate.date(i.created_at) }}
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
                  Detail <i class="fa-solid fa-paper-plane ms-2"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center" v-if="groups.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>
      <nav class="mt-2" v-if="groups.from != null">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="groups.current_page != 1">
            <a class="page-link" @click="getPage(groups.links[0].url)">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in groups.last_page" :key="i">
            <li
              class="page-item"
              v-if="groups.current_page - 2 < i && groups.current_page + 2 > i"
            >
              <a
                class="page-link"
                :class="groups.current_page == i ? 'bg-primary text-white' : ''"
                href="#"
                @click="getPage(groups.path + '?page=' + i)"
                >{{ i }}</a
              >
            </li>
          </div>
          <li class="page-item" v-if="groups.current_page != groups.last_page">
            <a class="page-link" @click="getPage(groups.next_page_url)">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- <div class="vue-modal-overlay"></div> -->
  </div>
</template>

<script>
export default {
  name: "group",
  data() {
    return {
      groups: [],
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
          this.groups = response.data.data;
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
          this.groups = response.data.data;
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
            this.groups = response.data.data;
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
    this.getData();
  },
};
</script>

<style>
</style>