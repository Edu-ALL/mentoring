<template>
  <div id="student">
    <div class="container" v-if="menus.submenu == ''">
      <div class="row mb-4">
        <div class="col-md-12 mb-3">
          <div class="row align-items-center g-2">
            <div class="mt-2 col-md-4 col-12 mb-md-0 mb-3">
              <input-group>
                <input
                  v-model="search.name"
                  type="text"
                  placeholder="fill in"
                  id="search"
                  class="form-mentoring form-control"
                  @change="searchData"
                />
                <label for="search">Search</label>
              </input-group>
            </div>

            <div class="mt-2 col-md-4 col-6 mb-md-0 mb-3">
              <input-group>
                <select
                  class="form-select w-100"
                  v-model="search.progress"
                  @change="searchData"
                >
                  <option value="">Select progress status</option>
                  <option value="ahead">Ahead</option>
                  <option value="ontrack">On-Track</option>
                  <option value="behind">Behind</option>
                </select>
                <label for="progress">Progress Status</label>
              </input-group>
            </div>

            <div class="mt-2 col-md-4 col-6 mb-md-0 mb-3">
              <input-group>
                <select
                  class="form-select w-100"
                  v-model="search.tag"
                  @change="searchData"
                >
                  <option value="">Select Tag</option>
                  <option :value="i.name" v-for="i in tag_list" :key="i">
                    {{ i.name }}
                  </option>
                </select>
                <label for="tag">Tag</label>
              </input-group>
            </div>

            <!-- <div class="mt-2 text-end col">
              <button
                class="btn-mentoring btn-secondary py-1"
                @click="searchData"
              >
                <i class="fa-solid fa-search me-3"></i>
                Search
              </button>
            </div> -->
          </div>
        </div>

        <div class="col-12">
          <div class="card-white m-0 px-2 py-1 mt-2">
            <div class="table-responsive">
              <table class="table table-bordered table-hover align-middle">
                <thead>
                  <tr class="text-center">
                    <td>#</td>
                    <td nowrap>No</td>
                    <td nowrap>Full Name</td>
                    <td nowrap>Email</td>
                    <td nowrap>School Name</td>
                    <td nowrap>Current Grade</td>
                    <td nowrap>Phone Number</td>
                    <td nowrap>Progress Status</td>
                    <td nowrap>Tags</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, index) in students_data.data" :key="index">
                    <td>
                      <v-tooltip placement="right" arrow="true">
                        <i
                          class="bi bi-lightbulb-fill"
                          :class="
                            i.progress_status == 'ahead'
                              ? 'text-success'
                              : i.progress_status == 'ontrack'
                              ? 'text-info'
                              : 'text-danger'
                          "
                        ></i>
                        <template #content>
                          <div style="text-transform: capitalize">
                            {{ i.progress_status }}
                          </div>
                        </template>
                      </v-tooltip>
                    </td>
                    <td class="text-center">{{ index + 1 }}</td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      {{ i.first_name + " " + i.last_name }}
                    </td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      {{ i.email }}
                    </td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      {{ i.school_name }}
                    </td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      <label v-if="i.grade == 0"> N/A</label>
                      <label v-if="i.grade != 0"> {{ i.grade }}</label>
                    </td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      {{ i.phone_number }}
                    </td>
                    <td nowrap>
                      <select
                        v-model="i.progress_status"
                        class="form-mentoring form-control-sm"
                        @change="changeProgresStatus(i.id, i.progress_status)"
                      >
                        <option value="" disabled>
                          Select progress status
                        </option>
                        <option value="ahead">Ahead</option>
                        <option value="ontrack">On-Track</option>
                        <option value="behind">Behind</option>
                      </select>
                    </td>
                    <td width="400px" nowrap>
                      <transition name="fade">
                        <!-- {{ tag_list }} -->
                        <div
                          class="d-flex align-items-center"
                          v-if="add_tags[index]"
                        >
                          <select
                            v-model="tags_name"
                            class="form-mentoring w-100 form-control-sm"
                            @change="addTags(i.id, index)"
                          >
                            <option value="">Select tag</option>
                            <option
                              :value="i.name"
                              v-for="i in tag_list"
                              :key="i"
                            >
                              {{ i.name }}
                            </option>
                            <!-- <option value="val2">Value 2</option>
                            <option value="val3">Value 3</option> -->
                          </select>
                          <i
                            class="fa-solid fa-close ms-2 text-danger pointer"
                            @click="add_tags[index] = !add_tags[index]"
                          ></i>
                        </div>
                      </transition>
                      <!-- {{i.tag}} -->
                      <div class="d-flex flex-wrap align-items-center">
                        <div v-for="j in i.tag" :key="j">
                          <div class="badge bg-primary me-1">
                            {{ j }}

                            <div
                              class="badge bg-white ms-2 pointer"
                              @click="removeTags(i.id, j)"
                            >
                              <i class="fa-solid fa-close text-danger"></i>
                            </div>
                          </div>
                        </div>
                        <div
                          class="pointer mt-1"
                          v-if="!add_tags[index]"
                          @click="add_tags[index] = !add_tags[index]"
                        >
                          <i
                            class="fa-solid fa-plus-square text-success"
                            style="font-size: 1.1em"
                          ></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="border p-3 text-center text-muted"
              v-if="students_data.from == null"
            >
              Sorry, data is not found
            </div>
            <v-pagination :datas="students_data" @result="getPage" />
          </div>
        </div>
      </div>
    </div>
    <v-detail
      v-if="menus.menu == 'student' && menus.submenu != ''"
      :menus="menus"
      :detail="students_detail"
    />
  </div>
</template>

<script>
// import Multiselect from "vue-multiselect";
import Detail from "@/components/mentor/page/student/view";
export default {
  name: "student",
  props: {
    menus: Object,
  },
  components: {
    "v-detail": Detail,
    // "v-tag": Multiselect,
  },
  data() {
    return {
      search: {
        name: "",
        progress: "",
        tag: "",
      },
      add_tags: [],
      tag_list: [],
      students_data: [],
      tags_name: "",
      students_detail: [],
    };
  },
  methods: {
    async changeProgresStatus(id, s) {
      try {
        const response = await this.$axios.put(
          "update/student/" + id + "/progress-status",
          { progress: s }
        );
        this.getHistory();

        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    async handleSubmit() {
      // const id = this.menus.submenu;
      this.modal = "";
      this.uni.student_id = this.menus.submenu;
      this.uni.univ_id = this.uni_select.univ_id;

      console.log(this.uni);

      this.$alert.loading();

      try {
        const response = await this.$axios.post("create/shortlisted", this.uni);

        this.uni.univ_id = "";
        this.uni.major = "";

        console.log(response.data);
        this.getData();
        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response.data);
        // if (e.response.data.error) {
        //   this.$alert.toast("error", e.response.data.error.univ_id[0]);
        // } else {
        this.$alert.toast("error", "Please try again");
        // }
      }
    },

    searchData() {
      this.$Progress.start();
      this.$axios
        .get(
          "student/list?keyword=" +
            this.search.name +
            "&status=" +
            this.search.progress +
            "&tag=" +
            this.search.tag
        )
        .then((response) => {
          this.$Progress.finish();
          this.students_data = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error);
        });
    },

    closeSearch() {
      this.search.bar = false;
      this.search.name = "";
      this.getHistory();
    },

    async addTags(id, index) {
      // alert(id + this.tags_name)
      try {
        const response = await this.$axios.put(
          "update/student/" + id + "/tag",
          { tag: this.tags_name }
        );
        // console.log(response)
        if (response.data.success) {
          this.getHistory();
          this.tags_name = "";
          this.add_tags[index] = false;
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    async tagList() {
      try {
        const response = await this.$axios.get("list/tag");
        this.tag_list = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    },

    async removeTags(id, j) {
      // alert(id + j)
      try {
        const response = await this.$axios.put(
          "update/student/" + id + "/tag",
          { remove_tag: j }
        );
        // console.log(response)
        if (response.data.success) {
          this.getHistory();
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again");
      }
    },

    async checkDetail(id) {
      this.$router.push({ path: "/mentor/student/" + id + "/meeting" });
    },

    async getHistory() {
      try {
        this.$Progress.start();
        const response = await this.$axios.get("student/list");

        this.students_data = response.data.data;
        // console.log(response.data);
        this.$Progress.finish();
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
      }
    },

    getPage(link) {
      this.$Progress.start();
      this.$axios
        .get(link)
        .then((response) => {
          this.$Progress.finish();
          this.students_data = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error);
        });
    },
  },
  created() {
    this.getHistory();
    this.tagList();
  },
};
</script>

<style>
.search-desc {
  font-size: 11px;
  font-style: italic;
}

.search-student {
  align-items: center;
}

.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>