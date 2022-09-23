<template>
  <div id="group">
    <div class="card-white" v-if="!$route.params.submenu">
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
              <option value="ongoing">In Progress</option>
              <option value="completed">Completed</option>
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
              <th>Projects Name</th>
              <!-- <th>Projects Type</th> -->
              <th>Progress Status</th>
              <th>Status</th>
              <th>Member</th>
              <th>Mentor</th>
              <!-- <th>More</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-start pointer"
              v-for="(i, index) in groups.data"
              :key="index"
              @click="$router.push({ path: '/admin/group/' + i.id })"
            >
              <td class="text-center">{{ groups.from + parseInt(index) }}</td>
              <td>
                {{ i.project_name }}
              </td>
              <!-- <td>
                {{ i.project_type }}
              </td> -->
              <td class="text-center">
                <div
                  class="badge"
                  :class="
                    i.progress_status == 'ahead'
                      ? 'bg-success'
                      : i.progress_status == 'on-track'
                      ? 'bg-info text-dark'
                      : 'bg-danger'
                  "
                  style="text-transform: capitalize"
                >
                  {{ i.progress_status }}
                </div>
                <i
                  class="fa-solid fa-close"
                  v-if="i.progress_status == null"
                ></i>

                <!-- {{ i.progress_status }} -->
              </td>
              <td class="text-center" nowrap style="text-transform: capitalize">
                <i
                  class="fa-solid text-success fa-check-circle me-2"
                  v-if="i.status == 'completed'"
                ></i>
                <i
                  class="fa-solid text-warning fa-clock me-2"
                  v-if="i.status == 'in progress'"
                ></i>
                {{ i.status }}
              </td>
              <td class="text-center" nowrap>
                {{ i.total_member }}
              </td>
              <td class="text-center" nowrap>
                {{ i.total_mentor }}
              </td>
              <!-- <td>
                <button
                  class="btn-mentoring py-1 bg-secondary"
                  @click="goLink(i.location_link)"
                >
                  Detail <i class="fa-solid fa-paper-plane ms-2"></i>
                </button>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center" v-if="groups.from == null">
        <hr />
        <!-- {{ groups.data }} -->
        <h6>Sorry, data is not found</h6>
      </div>

      <v-pagination :datas="groups" @result="getPage" />
    </div>

    <v-detail v-if="$route.params.submenu" />
  </div>
</template>

<script>
import Detail from "@/components/admin/group/view";

export default {
  name: "group",
  components: {
    "v-detail": Detail,
  },
  data() {
    return {
      groups: [],
      // participant: [],
      search: {
        bar: false,
        name: "",
      },
      status: "",
    };
  },
  methods: {
    getData(status = "all") {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/group-project?status=" + status)
        .then((response) => {
          this.$alert.close();
          this.groups = response.data.data;
          // this.participant = response.data.group_participant;
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
          .get(this.$url + "list/group-project?keyword=" + this.search.name, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
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
    if (localStorage.getItem("group_status")) {
      this.status = localStorage.getItem("group_status");
      this.getData(localStorage.getItem("group_status"));
      localStorage.removeItem("group_status");
    } else {
      this.getData();
    }
  },
};
</script>

<style>
</style>