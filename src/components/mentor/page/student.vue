<template>
  <div id="student">
    <div class="" v-if="menus.submenu == ''">
      <div class="row mb-4">
        <div class="col-md-6 text-start">
          <input-group>
            <input
              type="text"
              class="form-mentoring form-control-sm"
              required
            />
            <label>Search</label>
          </input-group>
        </div>
        <div class="col-12">
          <div class="card-white m-0 px-2 py-1 mt-2">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead>
                  <tr class="text-secondary">
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
                    <td>{{ index + 1 }}</td>
                    <td nowrap class="pointer" @click="checkDetail(i.id)">
                      {{ i.first_name + " " + i.last_name }}
                    </td>
                    <td nowrap>{{ i.email }}</td>
                    <td nowrap>{{ i.school_name }}</td>
                    <td nowrap>{{ i.grade }}</td>
                    <td nowrap>{{ i.phone_number }}</td>
                    <td nowrap>
                      <button
                        @click="changeProgresStatus(i.id, 'ahead')"
                        class="btn-mentoring py-0 px-3 btn-sm mx-1"
                        :class="
                          i.progress_status == 'ahead'
                            ? 'btn-primary'
                            : 'btn-type-2'
                        "
                      >
                        Ahead
                      </button>
                      <button
                        @click="changeProgresStatus(i.id, 'ontrack')"
                        class="btn-mentoring py-0 px-3 btn-sm mx-1"
                        :class="
                          i.progress_status == 'ontrack'
                            ? 'btn-primary'
                            : 'btn-type-2'
                        "
                      >
                        On-track
                      </button>
                      <button
                        @click="changeProgresStatus(i.id, 'behind')"
                        class="btn-mentoring py-0 px-3 btn-sm mx-1"
                        :class="
                          i.progress_status == 'behind'
                            ? 'btn-primary'
                            : 'btn-type-2'
                        "
                      >
                        Behind
                      </button>
                    </td>
                    <td width="50%" nowrap>
                      <transition name="fade">
                        <div
                          class="d-flex align-items-center"
                          v-if="add_tags[index]"
                        >
                          <select
                            v-model="tags_name"
                            class="form-mentoring w-100 form-control-sm"
                            @change="addTags(i.id, index)"
                          >
                            <option value="val1">Value 1</option>
                            <option value="val2">Value 2</option>
                            <option value="val3">Value 3</option>
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
            <nav class="mt-3" v-if="students_data.from != null">
              <ul class="pagination justify-content-center">
                <li class="page-item" v-if="students_data.current_page != 1">
                  <a
                    class="page-link"
                    @click="getPage(students_data.links[0].url)"
                  >
                    <i class="fa-solid fa-chevron-left"></i>
                  </a>
                </li>
                <div v-for="(i, index) in students_data.last_page" :key="index">
                  <li
                    class="page-item"
                    v-if="
                      students_data.current_page - 2 < i &&
                      students_data.current_page + 2 > i
                    "
                  >
                    <a
                      class="page-link"
                      :class="
                        students_data.current_page == i
                          ? 'bg-primary text-white'
                          : ''
                      "
                      href="#"
                      @click="getPage(students_data.path + '?page=' + i)"
                      >{{ i }}</a
                    >
                  </li>
                </div>
                <li
                  class="page-item"
                  v-if="students_data.current_page != students_data.last_page"
                >
                  <a
                    class="page-link"
                    @click="getPage(students_data.next_page_url)"
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
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
import Detail from "@/components/mentor/page/student/view";
export default {
  name: "student",
  props: {
    menus: Object,
  },
  // data() {
  //   return {
  //     add_tags: false,
  //   };
  // },
  components: {
    "v-detail": Detail,
  },

  data() {
    return {
      add_tags: [],
      // category: [],
      // webinar_data: [],
      students_data: [],
      tags_name: "",
      students_detail: [],
    };
  },
  methods: {
    async changeProgresStatus(id, s) {
      // alert(s)
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
      this.$router.push({ path: "/mentor/student/" + id });
    },

    async getHistory() {
      try {
        this.$alert.loading();
        const response = await this.$axios.get("student/list");

        this.students_data = response.data.data;
        // console.log(response.data);
        this.$alert.close();
      } catch (e) {
        this.$alert.close();
        console.log(e.response);
      }
    },
  },
  created() {
    this.getHistory();
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