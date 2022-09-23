<template>
  <div id="student">
    <!-- Detail  -->
    <div class="card-white">
      <div class="row">
        <div class="col-md-3 text-center">
          <img
            v-lazy="'https://picsum.photos/200/300'"
            alt="Profile"
            class="st-pic"
            v-if="!student.image"
          />
          <img
            v-lazy="$base_url + '/' + student.image"
            alt="Profile"
            class="st-pic"
            v-if="student.image"
          />
        </div>
        <!-- {{ student }} -->
        <div class="col-md-9">
          <h5>{{ student.first_name + " " + student.last_name }}</h5>
          <hr class="my-0 mb-2" />
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Email</label> <br />
                {{ student.email }}
              </div>
              <div class="mb-2">
                <label>School Name</label> <br />
                {{ student.school_name }}
              </div>
              <div class="mb-2">
                <label>Grade</label> <br />
                {{
                  student.grade == null || student.grade == 0
                    ? "N/A"
                    : student.grade
                }}
              </div>
              <div class="mb-2">
                <label>Application Year</label> <br />
                {{ student.application_year }}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <label>Mentee Relationship</label> <br />
                {{ student.mentee_relationship }}
              </div>
              <div class="mb-2">
                <label>Parent Relationship</label> <br />
                {{ student.parent_relationship }}
              </div>
              <div class="mb-2">
                <label>Social Media</label> <br />
                <div class="mb-2" v-for="i in student.social_media" :key="i">
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
                <div v-html="student.address"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity  -->

    <div class="card-white">
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == '1on1' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('1on1')"
      >
        Meetings Log
      </button>
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'todos' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('todos')"
      >
        Tasks
      </button>
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'group' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('group')"
      >
        Group Project
      </button>
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'webinar' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('webinar')"
      >
        Webinars
      </button>
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'uni-shortlisted' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('uni-shortlisted')"
      >
        Uni Shortlisted
      </button>
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'uni-requirement' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('uni-requirement')"
      >
        Uni Requirements
      </button>

      <!-- Event & Files  -->
      <!-- <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'event' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('event')"
      >
        Join the Event
      </button>
      <button
        class="btn-mentoring py-1 me-2"
        :class="activity == 'files' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('files')"
      >
        File Libraries
      </button> -->

      <!-- {{ activities.files }} -->

      <!-- 1on1 Calls  -->
      <transition name="fade">
        <v-meeting v-if="activity == '1on1'" />
      </transition>

      <!-- Todos  -->
      <transition name="fade">
        <v-todos v-if="activity == 'todos'" />
      </transition>

      <!-- Group  -->
      <transition name="fade">
        <v-group v-if="activity == 'group'" />
      </transition>

      <!-- Webinar -->
      <transition name="fade">
        <v-webinar v-if="activity == 'webinar'" />
      </transition>

      <!-- Uni Shortlisted  -->
      <transition name="fade">
        <v-uni-shortlisted v-if="activity == 'uni-shortlisted'" />
      </transition>

      <!-- Uni Shortlisted  -->
      <transition name="fade">
        <v-uni-req v-if="activity == 'uni-requirement'" />
      </transition>

      <!-- Event -->
      <!-- <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == 'event'">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th width="2%">No</th>
                  <th>Event Name</th>
                  <th>Status</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in activities.events.data"
                  :key="index"
                >
                  <td>{{ activities.events.from + index }}</td>
                  <td>{{ i.programme_details.dtl_name }}</td>
                  <td style="text-transform: capitalize">
                    {{ i.std_act_status }}
                  </td>
                  <td>
                    {{ $customDate.date(i.created_at) }} at
                    {{ $customDate.time(i.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-if="activities.events.from == null">
            <hr />
            <h6>Sorry, data is not found</h6>
          </div>
          <nav class="mt-2" v-if="activities.events.from != null">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="activities.events.current_page != 1">
                <a
                  class="page-link"
                  @click="getPage(activities.events.links[0].url)"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div
                v-for="(i, index) in activities.events.last_page"
                :key="index"
              >
                <li
                  class="page-item"
                  v-if="
                    activities.events.current_page - 2 < i &&
                    activities.events.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      activities.events.current_page == i
                        ? 'bg-primary text-white'
                        : ''
                    "
                    href="#"
                    @click="getPage(activities.events.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="
                  activities.events.current_page != activities.events.last_page
                "
              >
                <a
                  class="page-link"
                  @click="getPage(activities.events.next_page_url)"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition> -->

      <!-- Files -->
      <!-- <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == 'files'">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th width="2%">No</th>
                  <th>File Name</th>
                  <th>Description</th>
                  <th>Download</th>
                  <th>Uploaded Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in activities.files.data"
                  :key="index"
                >
                  <td>{{ activities.files.from + index }}</td>
                  <td>{{ i.med_title }}</td>
                  <td>{{ i.med_desc.substr(0, 15) + ".." }}</td>
                  <td>
                    <a :href="i.med_file_path" download>Download</a>
                  </td>
                  <td>{{ $customDate.date(i.created_at) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center" v-if="activities.files.from == null">
            <hr />
            <h6>Sorry, data is not found</h6>
          </div>
          <nav class="mt-2" v-if="activities.files.from != null">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="activities.files.current_page != 1">
                <a
                  class="page-link"
                  @click="getPage(activities.files.links[0].url)"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div
                v-for="(i, index) in activities.files.last_page"
                :key="index"
              >
                <li
                  class="page-item"
                  v-if="
                    activities.files.current_page - 2 < i &&
                    activities.files.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      activities.files.current_page == i
                        ? 'bg-primary text-white'
                        : ''
                    "
                    href="#"
                    @click="getPage(activities.files.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="
                  activities.files.current_page != activities.files.last_page
                "
              >
                <a
                  class="page-link"
                  @click="getPage(activities.files.next_page_url)"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition> -->
    </div>
  </div>
</template>

<script>
import Meetings from "@/components/admin/user/detail/student-activity/meeting";
import Todos from "@/components/admin/user/detail/student-activity/todos";
import Group from "@/components/admin/user/detail/student-activity/group";
import Webinars from "@/components/admin/user/detail/student-activity/webinar";
import UniShortlisted from "@/components/admin/user/detail/student-activity/uni_shortlisted";
import UniRequirement from "@/components/admin/user/detail/student-activity/uni_requirement";

export default {
  name: "studentDetail",
  components: {
    "v-meeting": Meetings,
    "v-todos": Todos,
    "v-group": Group,
    "v-webinar": Webinars,
    "v-uni-shortlisted": UniShortlisted,
    "v-uni-req": UniRequirement,
  },
  data() {
    return {
      student_id: "",
      student: [],
      activity: "1on1",
      activities: {
        calls: [],
        webinars: [],
        events: [],
        files: [],
      },
    };
  },
  methods: {
    getData(id) {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "student/detail/" + id)
        .then((response) => {
          this.$Progress.finish();
          this.student = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error.response);
        });
    },

    get1on1(email) {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call?mail=" + email)
        .then((response) => {
          this.$Progress.finish();
          this.activities.calls = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error);
        });
    },

    getWebinar(email) {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "list/activities/webinar?mail=" + email)
        .then((response) => {
          this.$Progress.finish();
          this.activities.webinars = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error);
        });
    },

    getEvent(email) {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "list/activities/event?mail=" + email)
        .then((response) => {
          this.$Progress.finish();
          this.activities.events = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error);
        });
    },

    getFiles(email) {
      this.$Progress.start();
      this.$axios
        .get(this.$url + "list/student/files?mail=" + email)
        .then((response) => {
          this.$Progress.finish();
          this.activities.files = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$Progress.fail();
          console.log(error.response.data);
        });
    },

    getActivity(act) {
      this.activity = act;
      if (act == "1on1") {
        this.get1on1(this.email);
      } else if (act == "webinar") {
        this.getWebinar(this.email);
      } else if (act == "event") {
        this.getEvent(this.email);
      } else if (act == "files") {
        this.getFiles(this.email);
      }
    },
  },
  created() {
    this.student_id = this.$route.params.key;
    this.getData(this.student_id);
    // this.get1on1(this.student_id);
  },
};
</script>

<style scoped>
label {
  font-size: 11px;
}
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