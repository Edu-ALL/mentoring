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
          <div class="row">
            <div class="col-12 d-flex justify-content-end">
              <div class="form-check me-2">
                <input
                  class="form-check-input pointer"
                  type="radio"
                  name="status"
                  id="active"
                  checked
                  @change="getData('active')"
                />
                <label class="form-check-label pointer" for="active">
                  Active
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input pointer"
                  type="radio"
                  name="status"
                  id="pass"
                  @change="getData('inactive')"
                />
                <label class="form-check-label pointer" for="pass">
                  Pass
                </label>
              </div>
            </div>
          </div>

          <div class="card-white m-0 px-2 py-1 mt-2">
            <div class="table-responsive">
              <table class="table table-bordered table-hover align-middle">
                <thead>
                  <tr class="text-center">
                    <td>#</td>
                    <td nowrap>No</td>
                    <td nowrap class="sticky-table">Full Name</td>
                    <td nowrap>Email</td>
                    <td nowrap>School Name</td>
                    <td nowrap>Current Grade</td>
                    <td nowrap>Phone Number</td>
                    <td nowrap>Application Year</td>
                    <td nowrap>Mentee Relationship</td>
                    <td nowrap>Progress Status</td>
                    <td nowrap>Parent Relationship</td>
                    <td nowrap>Last Update</td>
                    <td nowrap>Additional Notes</td>
                    <td nowrap>Tags</td>
                    <td nowrap>Mentee Status</td>
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
                    <td class="pointer text-center">
                      {{ index + 1 }}
                    </td>
                    <td
                      nowrap
                      class="pointer sticky-table"
                      @click="checkDetail(i.id)"
                    >
                      {{ i.first_name + " " + i.last_name }}
                    </td>
                    <td nowrap>
                      <div class="d-flex align-items-center">
                        <div class="">
                          <input
                            type="email"
                            class="form-mentoring"
                            v-model="i.email"
                            @change="updateEmail(i.id, 'email', i.email, index)"
                            v-if="edit_email[index] == true"
                          />
                          <div class="" v-if="!edit_email[index]">
                            {{ i.email }}
                          </div>
                        </div>
                        <div class="pointer ms-2">
                          <i
                            v-if="!edit_email[index]"
                            class="bi bi-pencil-square text-info"
                            @click="edit_email[index] = !edit_email[index]"
                          ></i>
                          <i
                            v-if="edit_email[index]"
                            class="bi bi-x-square text-danger"
                            @click="edit_email[index] = !edit_email[index]"
                          ></i>
                        </div>
                      </div>
                    </td>
                    <td nowrap class="">
                      {{ i.school_name }}
                    </td>
                    <td nowrap class="text-center">
                      <label v-if="i.grade == 0"> N/A</label>
                      <label v-if="i.grade != 0"> {{ i.grade }}</label>
                    </td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      {{ i.phone_number }}
                    </td>
                    <td>
                      <select
                        v-model="i.application_year"
                        class="form-mentoring form-control-sm"
                        @change="
                          updateInfo(
                            i.id,
                            'application-year',
                            i.application_year
                          )
                        "
                      >
                        <option value="" disabled>
                          Select application year
                        </option>
                        <option
                          :value="parseInt($customDate.currentYear()) - i + 1"
                          v-for="i in 10"
                          :key="i"
                        >
                          {{ parseInt($customDate.currentYear()) - i + 1 }}
                        </option>
                      </select>
                    </td>
                    <td nowrap>
                      <select
                        v-model="i.mentee_relationship"
                        class="form-mentoring form-control-sm"
                        @change="
                          updateInfo(
                            i.id,
                            'mentee-relationship',
                            i.mentee_relationship
                          )
                        "
                      >
                        <option value="null" disabled>
                          Select mentee relationship
                        </option>
                        <option value="friendly">Friendly</option>
                        <option value="cordial">Cordial</option>
                        <option value="civil">Civil</option>
                        <option value="non-reponsive">Non-responsive</option>
                        <option value="hostile">Hostile</option>
                      </select>
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
                    <td nowrap>
                      <select
                        v-model="i.parent_relationship"
                        class="form-mentoring form-control-sm"
                        @change="
                          updateInfo(
                            i.id,
                            'parent-relationship',
                            i.parent_relationship
                          )
                        "
                      >
                        <option value="null" disabled>
                          Select parent relationship
                        </option>
                        <option value="friendly">Friendly</option>
                        <option value="cordial">Cordial</option>
                        <option value="civil">Civil</option>
                        <option value="non-reponsive">Non-responsive</option>
                        <option value="hostile">Hostile</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        v-model="i.last_update"
                        class="form-mentoring form-control-sm"
                        @input="updateInfo(i.id, 'last-update', i.last_update)"
                      />
                    </td>
                    <td>
                      <div style="width: 300px">
                        <textarea
                          v-model="i.additional_notes"
                          class="form-control"
                          rows="3"
                          @change="
                            updateInfo(
                              i.id,
                              'additional-notes',
                              i.additional_notes
                            )
                          "
                        ></textarea>
                      </div>
                    </td>
                    <td nowrap>
                      <div style="width: 400px">
                        <transition name="fade">
                          <!-- {{ tag_list }} -->
                          <div
                            class="d-flex align-items-center mb-2"
                            v-if="add_tags[index]"
                          >
                            <select
                              v-model="tags_name"
                              class="form-mentoring w-100 form-select"
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
                      </div>
                    </td>
                    <td>
                      <select
                        v-model="i.status_mentoring"
                        class="form-mentoring form-control-sm"
                        @change="updateStatus(i.id, i.status_mentoring)"
                      >
                        <option value="null" disabled>
                          Select mentee status
                        </option>
                        <option value="1">Active</option>
                        <option value="0">Pass</option>
                      </select>
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
      edit_email: [],
      add_tags: [],
      tag_list: [],
      students_data: [],
      tags_name: "",
      students_detail: [],
    };
  },
  methods: {
    async updateEmail(id, key, value, index) {
      this.$Progress.start();
      this.edit_email[index] = false;
      try {
        const response = await this.$axios.put(
          "update/info/" + key + "/" + id,
          {
            value: value,
          }
        );

        this.$Progress.finish();
        this.getData();

        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        this.$Progress.fail();
        this.getData();
        console.log(e.response);
        this.$alert.toast("error", e.response.data.error.value[0]);
      }
    },

    async updateInfo(id, key, value) {
      this.$Progress.start();
      try {
        const response = await this.$axios.put(
          "update/info/" + key + "/" + id,
          {
            value: value,
          }
        );

        this.$Progress.finish();
        this.getData();

        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    async updateStatus(id, value) {
      this.$Progress.start();
      try {
        const response = await this.$axios.put(
          "update/status/mentoring/" + id,
          {
            value: value,
          }
        );

        this.$Progress.finish();
        if (value == 0) {
          this.getData("active");
        } else {
          this.getData("inactive");
        }

        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    async changeProgresStatus(id, s) {
      try {
        const response = await this.$axios.put(
          "update/student/" + id + "/progress-status",
          { progress: s }
        );
        this.getData();

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
      this.getData();
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
          this.getData();
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
          this.getData();
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

    async getData(status = "active") {
      try {
        this.$Progress.start();
        const response = await this.$axios.get(
          "student/list?mentoring=" + status
        );

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
    this.getData();
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

<style scoped>
td.sticky-table {
  position: sticky;
  left: 0px;
  background-color: rgb(246, 246, 246) !important;
  z-index: 1 !important;
  font-weight: 500;
  color: #000 !important;
}

.table-responsive {
  overflow: auto !important;
  max-height: 500px !important;
}

.table-responsive thead th {
  position: sticky !important;
  top: 0 !important;
  z-index: 2 !important;
}

.table-responsive thead th.sticky-table {
  position: sticky !important;
  left: 0 !important;
  z-index: 3 !important;
  background: #91a3cf !important;
}
</style>