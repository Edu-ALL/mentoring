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
                {{ student.grade }}
              </div>
            </div>
            <div class="col-md-6">
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
        class="btn-mentoring me-2"
        :class="activity == '1on1' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('1on1')"
      >
        1on1 Calls
      </button>
      <button
        class="btn-mentoring me-2"
        :class="activity == 'webinar' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('webinar')"
      >
        Webinars
      </button>
      <button
        class="btn-mentoring me-2"
        :class="activity == 'event' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('event')"
      >
        Join the Event
      </button>
      <button
        class="btn-mentoring me-2"
        :class="activity == 'files' ? 'btn-type-1' : 'btn-type-2'"
        @click="getActivity('files')"
      >
        File Libraries
      </button>

      <!-- {{ activities.files }} -->

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
                  v-for="(i, index) in activities.calls.data"
                  :key="index"
                >
                  <td>{{ activities.calls.from + index }}</td>
                  <td>{{ i.users.first_name + " " + i.users.last_name }}</td>
                  <td>{{ i.module + " - " + i.call_with }}</td>
                  <td>
                    <small>
                      {{ $customDate.date(i.created_at) }} <br />
                      {{ $customDate.time(i.created_at) }}
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
          <div class="text-center" v-if="activities.calls.from == null">
            <hr />
            <h6>Sorry, data is not found</h6>
          </div>
          <nav class="mt-2" v-if="activities.calls.from != null">
            <ul class="pagination justify-content-center">
              <li class="page-item" v-if="activities.calls.current_page != 1">
                <a
                  class="page-link"
                  @click="getPage(activities.calls.links[0].url)"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div
                v-for="(i, index) in activities.calls.last_page"
                :key="index"
              >
                <li
                  class="page-item"
                  v-if="
                    activities.calls.current_page - 2 < i &&
                    activities.calls.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      activities.calls.current_page == i
                        ? 'bg-primary text-white'
                        : ''
                    "
                    href="#"
                    @click="getPage(activities.calls.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="
                  activities.calls.current_page != activities.calls.last_page
                "
              >
                <a
                  class="page-link"
                  @click="getPage(activities.calls.next_page_url)"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition>

      <!-- Webinar -->
      <transition name="fade">
        <div class="border p-3 rounded mt-3" v-if="activity == 'webinar'">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr class="text-center">
                  <th width="2%">No</th>
                  <th>Webinar Name</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(i, index) in activities.webinars.data"
                  :key="index"
                >
                  <td>{{ activities.webinars.from + index }}</td>
                  <td>
                    {{ i.programme_details.dtl_name }}
                  </td>
                  <td>
                    {{ $customDate.date(i.created_at) }} at
                    {{ $customDate.time(i.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav class="mt-2" v-if="activities.webinars.from != null">
            <ul class="pagination justify-content-center">
              <li
                class="page-item"
                v-if="activities.webinars.current_page != 1"
              >
                <a
                  class="page-link"
                  @click="getPage(activities.webinars.links[0].url)"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </a>
              </li>
              <div
                v-for="(i, index) in activities.webinars.last_page"
                :key="index"
              >
                <li
                  class="page-item"
                  v-if="
                    activities.webinars.current_page - 2 < i &&
                    activities.webinars.current_page + 2 > i
                  "
                >
                  <a
                    class="page-link"
                    :class="
                      activities.webinars.current_page == i
                        ? 'bg-primary text-white'
                        : ''
                    "
                    href="#"
                    @click="getPage(activities.webinars.path + '?page=' + i)"
                    >{{ i }}</a
                  >
                </li>
              </div>
              <li
                class="page-item"
                v-if="
                  activities.webinars.current_page !=
                  activities.webinars.last_page
                "
              >
                <a
                  class="page-link"
                  @click="getPage(activities.webinars.next_page_url)"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition>

      <!-- Event -->
      <transition name="fade">
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
      </transition>

      <!-- Files -->
      <transition name="fade">
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
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "studentDetail",
  data() {
    return {
      email: "",
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
    getData(email) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/student?mail=" + email, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.student = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response);
        });
    },

    get1on1(email) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call?student_mail=" + email, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.activities.calls = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    getWebinar(email) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/activities/webinar?student_mail=" + email, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.activities.webinars = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    getEvent(email) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/activities/event?student_mail=" + email, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.activities.events = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error);
        });
    },

    getFiles(email) {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/student/files?mail" + email, {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.activities.files = response.data.data;
          // console.log(response);
        })
        .catch((error) => {
          this.$alert.close();
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
    this.email = this.$route.params.key;
    this.getData(this.email);
    this.get1on1(this.email);
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