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
        Meetings
      </button>
      <button
        class="btn-mentoring me-2"
        :class="activity == 'student' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('student')"
      >
        Mentees
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
                    {{ i.call_status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <v-pagination :datas="activities.one_on_one" @result="getPage1on1" />
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
                  <th>Mentee Name</th>
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
          <v-pagination :datas="activities.students" @result="getPageStudent" />
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
        .get(this.$url + "find/user/mentor/" + id)
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
        .get(this.$url + "list/activities/1-on-1-call?id=" + id)
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
        .get(this.$url + "select/students/use/user/" + id)
        .then((response) => {
          this.activities.students = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPage1on1(link) {
      this.$axios
        .get(link)
        .then((response) => {
          this.activities.one_on_one = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPageStudent(link) {
      this.$axios
        .get(link)
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