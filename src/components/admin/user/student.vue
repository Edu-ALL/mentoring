<template>
  <div id="student">
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
        <table class="table table-bordered table-hover">
          <thead>
            <tr class="text-center">
              <td nowrap>No</td>
              <td nowrap class="sticky-table">Full Name</td>
              <td nowrap>Email</td>
              <td nowrap>Main Mentor</td>
              <td nowrap>Backup Mentor</td>
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
          <tbody class="align-middle text-center">
            <tr v-for="(i, index) in students.data" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td
                nowrap
                class="pointer text-start sticky-table"
                @click="
                  this.$router.push({ path: '/admin/user/student/' + i.id })
                "
              >
                <i class="fa-regular fa-user fa-fw"></i>
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
              <td nowrap>
                <!-- UPDATE  -->
                <div class="" v-if="i.users[0]">
                  <select
                    v-model="i.users[0].id"
                    class="form-mentoring form-control-sm"
                    @change="
                      updateMentor(
                        i.id,
                        i.users[0].st_mt_id,
                        i.users[0].id,
                        '1'
                      )
                    "
                  >
                    <option value="null" disabled>Select main mentor</option>
                    <option :value="i.id" v-for="i in mentor_list" :key="i">
                      {{ i.first_name + " " + i.last_name }}
                    </option>
                  </select>
                </div>

                <!-- INSERT  -->
                <div class="" v-if="i.users?.length == 0">
                  <select
                    v-model="main_mentor[index]"
                    class="form-mentoring form-control-sm"
                    @change="insertMentor(i.id, main_mentor[index], '1')"
                  >
                    <option disabled>Select main mentor</option>
                    <option :value="i.id" v-for="i in mentor_list" :key="i">
                      {{ i.first_name + " " + i.last_name }}
                    </option>
                  </select>
                </div>
              </td>
              <td nowrap>
                <!-- UPDATE  -->
                <div class="" v-if="i.users[1]">
                  <select
                    v-model="i.users[1].id"
                    class="form-mentoring form-control-sm"
                    @change="
                      updateMentor(
                        i.id,
                        i.users[1].st_mt_id,
                        i.users[1].id,
                        '2'
                      )
                    "
                  >
                    <option value="null" disabled>Select backup mentor</option>
                    <option :value="i.id" v-for="i in mentor_list" :key="i">
                      {{ i.first_name + " " + i.last_name }}
                    </option>
                  </select>
                </div>

                <!-- INSERT  -->
                <div class="" v-if="i.users?.length < 2">
                  <select
                    v-model="backup_mentor[index]"
                    class="form-mentoring form-control-sm"
                    @change="insertMentor(i.id, backup_mentor[index], '2')"
                  >
                    <option disabled>Select backup mentor</option>
                    <option :value="i.id" v-for="i in mentor_list" :key="i">
                      {{ i.first_name + " " + i.last_name }}
                    </option>
                  </select>
                </div>
              </td>
              <td nowrap>{{ i.school_name }}</td>
              <td>
                {{
                  parseInt(i.grade) >= 7 || i.grade == "Not High School"
                    ? i.grade
                    : "N/A"
                }}
              </td>
              <td nowrap>
                {{ i.phone_number == "0" ? "-" : i.phone_number }}
              </td>
              <td>
                <select
                  v-model="i.application_year"
                  class="form-mentoring form-control-sm"
                  @change="
                    updateInfo(i.id, 'application-year', i.application_year)
                  "
                >
                  <option value="null" disabled>Select application year</option>
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
                  <option value="null" disabled>Select progress status</option>
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
                      updateInfo(i.id, 'additional-notes', i.additional_notes)
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
                        <option :value="i.name" v-for="i in tag_list" :key="i">
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
                  v-model="i.status"
                  class="form-mentoring form-control-sm"
                  @change="updateStatus(i.id, i.status)"
                >
                  <option value="null" disabled>Select mentee status</option>
                  <option value="1">Active</option>
                  <option value="0">Pass</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center" v-if="students.from == null">
        <hr />
        <h6>Sorry, data is not found</h6>
      </div>

      <v-pagination :datas="students" @result="getPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      search: {
        bar: false,
        name: "",
      },
      students: [],
      edit_email: [],
      mentor_list: [],
      main_mentor: [],
      backup_mentor: [],
      add_tags: [],
      tag_list: [],
      tags_name: "",
    };
  },
  methods: {
    getData() {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "list/admin/student")
        .then((response) => {
          this.$Progress.finish();
          this.students = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error);
        });
    },

    getPage(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.students = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async insertMentor(id, mt_id, priority) {
      this.$Progress.start();
      try {
        const response = await this.$axios.put(
          "update/admin/student-mentor/" + id,
          {
            new_mentor_id: mt_id,
            new_priority: priority,
          }
        );
        this.$Progress.finish();
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$Progress.fail();
      }
    },

    async updateMentor(id, st_mt_id, mt_id, priority) {
      this.$Progress.start();
      try {
        const response = await this.$axios.put(
          "update/admin/student-mentor/" + id,
          {
            st_mt_id: st_mt_id,
            new_mentor_id: mt_id,
            new_priority: priority,
          }
        );
        this.$Progress.finish();
        if (response.data.success) {
          this.$alert.toast("success", response.data.message);
        } else {
          this.$alert.toast("error", response.data.error);
        }
      } catch (e) {
        console.log(e.response);
        this.$Progress.fail();
      }
    },

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
        // this.getData();

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
        // this.getData();

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
          "update/admin/status/mentoring/" + id,
          {
            value: value,
          }
        );

        this.$Progress.finish();

        // this.getData();

        console.log(response.data);
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
        // this.getData();

        this.$alert.toast("success", response.data.message);
      } catch (e) {
        console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },

    searchData() {
      this.$alert.loading();
      if (this.search.name == "") {
        this.getData();
        this.search.bar = false;
        this.$alert.close();
      } else {
        this.$axios
          .get(this.$url + "list/admin/student?keyword=" + this.search.name)
          .then((response) => {
            this.$alert.close();
            this.students = response.data.data;
            this.search.bar = true;
            // console.log(response.data);
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

    async mentorList() {
      try {
        const response = await this.$axios.get(
          "list/user/mentor?status=1&paginate=no"
        );
        this.mentor_list = response.data.data;
      } catch (e) {
        console.log(e.response);
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
  },
  created() {
    this.getData();
    this.tagList();
    this.mentorList();
  },
};
</script>

<style>
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
