<template>
  <div id="webinar">
    <transition name="fade">
      <div class="" v-if="menus.submenu == ''">
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
            <span
              class="badge bg-primary px-3 d-inline-block"
              v-if="search.bar"
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
              class="btn-mentoring btn-type-2"
              @click="this.$router.push({ path: '/admin/webinar/add' })"
            >
              Add a New Webinar
            </button>
          </div>
        </div>
        <!-- {{ webinars }} -->
        <div class="card-white">
          <div class="table-responsive">
            <table class="table align-middle table-hover">
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
          <nav class="mt-2" v-if="webinars.from != null">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="webinars.current_page != 1">
                <a class="page-link" @click="getPage(webinars.links[0].url)">
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div v-for="i in webinars.last_page" :key="i">
                <li
                  class="page-item"
                  v-if="
                    webinars.current_page - 2 < i &&
                    webinars.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      webinars.current_page == i ? 'bg-primary text-white' : ''
                    "
                    href="#"
                    @click="getPage(webinars.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="webinars.current_page != webinars.last_page"
              >
                <a class="page-link" @click="getPage(webinars.next_page_url)">
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
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
        .get(this.$url + "list/programme/webinar", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
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
        .get(link, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
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
      this.$axios
        .get(this.$url + "list/programme/webinar?keyword=" + this.search.name, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
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