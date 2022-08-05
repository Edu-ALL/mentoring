<template>
  <div id="webinar">
    <transition name="fade">
      <div class="" v-if="menus.submenu == ''">
        <!-- {{ webinars }} -->
        <div class="card-white">
          <div class="row mb-3 d-flex align-items-center">
            <div class="col-md-6 text-start">
              <input-group>
                <input
                  type="text"
                  class="form-mentoring form-control w-50"
                  v-model="search.name"
                  @change="searchData"
                  placeholder="Search"
                  id="search"
                />
                <label for="search">Search</label>
              </input-group>
              <span
                class="badge bg-primary px-3 d-inline-block"
                v-if="search.bar && search.name != ''"
              >
                {{ search.name }}
                <i
                  class="fa-solid fa-close ms-3 pointer"
                  @click="closeSearch"
                ></i>
              </span>
            </div>
            <div class="col-md-6 text-md-end text-center">
              <button
                class="btn-mentoring btn-type-2 py-1 px-3"
                @click="this.$router.push({ path: '/admin/webinar/add' })"
              >
                Add a New Webinar
              </button>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-bordered align-middle table-hover">
              <thead>
                <tr class="text-center">
                  <th>No</th>
                  <th>Webinar Name</th>
                  <th>Category</th>
                  <th>Watched</th>
                  <th>Status</th>
                  <th>Created Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center pointer"
                  v-for="(i, index) in webinars.data"
                  :key="index"
                  @click="
                    this.$router.push({ path: '/admin/webinar/detail/' + i.id })
                  "
                >
                  <td>{{ parseInt(index) + 1 }}</td>
                  <td>{{ i.dtl_name }}</td>
                  <td>{{ i.dtl_category }}</td>
                  <td>{{ i.student_activities_count }}</td>
                  <td style="text-transform: capitalize">{{ i.status }}</td>
                  <td>{{ $customDate.date(i.created_at) }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center" v-if="webinars.from == null">
            <hr />
            <h6>Sorry, data is not found</h6>
          </div>

          <v-pagination :datas="webinars" @result="getPage" />
        </div>
      </div>
    </transition>

    <!-- ADD  -->
    <transition name="fade">
      <v-add
        :menus="menus"
        v-if="menus.menu == 'webinar' && menus.submenu == 'add'"
      ></v-add>
    </transition>

    <!-- EDIT  -->
    <transition name="fade">
      <v-edit
        :menus="menus"
        v-if="menus.menu == 'webinar' && menus.submenu == 'edit'"
      ></v-edit>
    </transition>

    <!-- DETAIL  -->
    <transition name="fade">
      <v-detail
        :menus="menus"
        v-if="menus.menu == 'webinar' && menus.submenu == 'detail'"
      ></v-detail>
    </transition>
  </div>
</template>

<script>
import Add from "@/components/admin/webinar/add";
import Edit from "@/components/admin/webinar/edit";
import Detail from "@/components/admin/webinar/detail";

export default {
  name: "webinar",
  props: {
    menus: Object,
  },
  components: {
    "v-add": Add,
    "v-edit": Edit,
    "v-detail": Detail,
  },
  data() {
    return {
      webinars: [],
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
        .get(this.$url + "list/programme/webinar")
        .then((response) => {
          this.$alert.close();
          this.webinars = response.data.data;
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
          this.webinars = response.data.data;
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
          .get(this.$url + "list/programme/webinar?keyword=" + this.search.name)
          .then((response) => {
            this.$alert.close();
            this.webinars = response.data.data;
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
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>