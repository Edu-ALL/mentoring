<template>
  <div id="mentor">
    <!-- Detail  -->
    <div class="card-white">
      <div class="row align-items-center">
        <div class="col-md-3 text-center">
          <img
            v-lazy="'https://picsum.photos/200/300'"
            alt="Profile"
            class="st-pic"
            v-if="!mentors.profile_picture"
          />
        </div>
        <!-- {{ mentors }} -->
        <div class="col-md-9">
          <h5>{{ mentors.first_name + " " + mentors.last_name }}</h5>
          <hr class="my-0 mb-2" />
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Email</label> <br />
                {{ mentors.email }}
              </div>
              <div class="mb-2">
                <label>Education/Major</label> <br />
                <ul class="ps-3">
                  <li v-for="i in mentors.educations" :key="i">
                    {{ i.graduated_from }} - {{ i.major }} <br />
                    {{ i.degree }}
                  </li>
                </ul>
              </div>
              <div class="mb-2">
                <label>Phone Number</label> <br />
                {{ mentors.phone_number }}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Social Media</label> <br />
                <div class="mb-2" v-for="i in mentors.social_media" :key="i">
                  <vue-feather
                    :type="i.social_media_name"
                    class="float-start me-2 mt-1"
                    size="16"
                  ></vue-feather>
                  {{ i.hyperlink }}
                </div>
              </div>
              <div class="mb-2">
                <label>Address</label> <br />
                {{ mentors.address }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity  -->

    <div class="card-white">
      <button
        class="btn-mentoring me-2"
        :class="activity == '1on1' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('1on1')"
      >
        1on1 Calls
      </button>
      <button
        class="btn-mentoring me-2"
        :class="activity == 'student' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('student')"
      >
        Student List
      </button>

      <!-- 1on1 Calls  -->
      <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == '1on1'">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th width="2%">No</th>
                  <th>Call with</th>
                  <th>Category</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in activities.one_on_one.data"
                  :key="index"
                >
                  <td>{{ activities.one_on_one.from + index }}</td>
                  <td>
                    {{ i.students.first_name + " " + i.students.last_name }}
                  </td>
                  <td>{{ i.module }}</td>
                  <td>
                    <small>
                      {{ getDay(i.created_at) }} <br />
                      {{ getTime(i.created_at) }}
                    </small>
                  </td>
                  <td style="text-transform: capitalize">
                    {{ i.std_act_status }}
                  </td>
                  <td>{{ i.location_link }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav class="mt-2" v-if="activities.one_on_one.from != null">
            <ul class="pagination justify-content-center">
              <li
                class="page-item"
                v-if="activities.one_on_one.current_page != 1"
              >
                <a
                  class="page-link"
                  @click="getPage(activities.one_on_one.links[0].url)"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div v-for="i in activities.one_on_one.last_page" :key="i">
                <li
                  class="page-item"
                  v-if="
                    activities.one_on_one.current_page - 2 < i &&
                    activities.one_on_one.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      activities.one_on_one.current_page == i
                        ? 'bg-primary text-white'
                        : ''
                    "
                    href="#"
                    @click="getPage(activities.one_on_one.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="
                  activities.one_on_one.current_page !=
                  activities.one_on_one.last_page
                "
              >
                <a
                  class="page-link"
                  @click="getPage(activities.one_on_one.next_page_url)"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition>

      <!-- Student -->
      <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == 'student'">
          <!-- {{ activities.students }} -->
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th width="2%">No</th>
                  <th>Students Name</th>
                  <th>Email</th>
                  <th>School Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in activities.students.data"
                  :key="index"
                >
                  <td>{{ activities.students.from + index }}</td>
                  <td>{{ i.first_name + " " + i.last_name }}</td>
                  <td>{{ i.email }}</td>
                  <td>{{ i.school_name }}</td>
                  <td>{{ i.grade }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav class="mt-2" v-if="activities.students.from != null">
            <ul class="pagination justify-content-center">
              <li
                class="page-item"
                v-if="activities.students.current_page != 1"
              >
                <a
                  class="page-link"
                  @click="getPage(activities.students.links[0].url)"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div v-for="i in activities.students.last_page" :key="i">
                <li
                  class="page-item"
                  v-if="
                    activities.students.current_page - 2 < i &&
                    activities.students.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      activities.students.current_page == i
                        ? 'bg-primary text-white'
                        : ''
                    "
                    href="#"
                    @click="getPage(activities.students.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="
                  activities.students.current_page !=
                  activities.students.last_page
                "
              >
                <a
                  class="page-link"
                  @click="getPage(activities.students.next_page_url)"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "mentorDetail",
  data() {
    return {
      mentor_id: "",
      mentors: [],
      activities: {
        one_on_one: [],
        students: [],
      },
      activity: "1on1",
    };
  },
  methods: {
    getData(id) {
      this.$axios
        .get(this.$url + "find/user/mentor/" + id, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.mentors = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getData1on1(id) {
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call?id=" + id, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.activities.one_on_one = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getStudents(id) {
      this.$axios
        .get(this.$url + "select/students/use/user/" + id, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.activities.students = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getActivity(i) {
      this.activity = i;
      if (i == "1on1") {
        this.getData1on1(this.mentor_id);
      } else if (i == "student") {
        this.getStudents(this.mentor_id);
      }
    },

    getDay(date) {
      return moment(date).format("MMMM Do YYYY");
    },

    getTime(date) {
      return moment(date).format("H:mm A");
    },
  },
  created() {
    this.mentor_id = this.$route.params.key;
    this.getData(this.mentor_id);
    this.getData1on1(this.mentor_id);
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.st-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>