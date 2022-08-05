<template>
  <div id="todos">
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
              <th>Waiting</th>
              <th>Confirmation Needs</th>
              <th>Completed</th>
              <th>Total</th>
              <!-- <th>More</th> -->
            </tr>
          </thead>

          <tbody>
            <tr
              class="text-center pointer"
              v-for="(i, index) in todos.data"
              :key="index"
            >
              <td>{{ todos.from + parseInt(index) }}</td>
              <td>
                {{ i.mentor_name }}
              </td>
              <td>
                {{ i.first_name + " " + i.last_name }}
              </td>
              <!-- <td style="text-transform: capitalize">
                {{ i.module + " - " + i.call_with }}
              </td> -->
              <td>
                {{ i.waiting }}
              </td>
              <td>
                {{ i.need_confirmation }}
              </td>
              <td>
                {{ i.finished }}
              </td>
              <td>
                {{ i.finished + i.need_confirmation }}
              </td>
              <!-- <td style="text-transform: capitalize">
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
              </td> -->
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
      <div class="text-center" v-if="todos.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>

      <v-pagination :datas="todos" @result="getPage" />
    </div>

    <!-- <div class="vue-modal-overlay"></div> -->
  </div>
</template>

<script>
export default {
  name: "todos",
  data() {
    return {
      todos: [],
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
        .get(this.$url + "list/todos")
        .then((response) => {
          this.$alert.close();
          this.todos = response.data.data;
          console.log(response);
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
          this.todos = response.data.data;
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
          .get(this.$url + "list/todos?keyword=" + this.search.name, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            this.$alert.close();
            this.todos = response.data.data;
            this.search.bar = true;
            console.log(response);
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