<template>
  <div id="lastMeeting">
    <div class="d-flex align-items-center justify-content-between">
      <h6 class="my-0 py-0">Last Meeting Minutes</h6>
    </div>
    <hr class="my-2" />
    <div class="row p-4" v-if="meeting?.data?.length == 0">
      <div class="col text-center">
        <p class="my-0">No meeting yet.</p>
      </div>
    </div>
    <div class="table-responsive" v-if="meeting?.data?.length != 0">
      <table class="table table-bordered table-hover">
        <thead>
          <tr class="text-center">
            <th width="3%">No</th>
            <th>Call With</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(i, index) in meeting.data"
            :key="index"
            class="text-center align-middle"
          >
            <td>{{ meeting.from + index }}</td>
            <td class="text-start" nowrap style="text-transform: capitalize">
              {{ i.students.first_name + " " + i.students.last_name }}
            </td>
            <td nowrap style="text-transform: capitalize">
              {{ i.module }}
            </td>
            <td nowrap>
              {{ $customDate.date(i.call_date) }}
            </td>
            <td nowrap>
              {{ $customDate.time(i.call_date) }}
            </td>
            <td style="text-transform: capitalize">
              <small class="text-warning" v-if="i.call_status == 'canceled'">
                <i class="fa-solid fa-times"></i>
                {{ i.call_status }}
              </small>
              <small class="text-info" v-if="i.call_status == 'finished'">
                <i class="fa-solid fa-check"></i>
                {{ i.call_status }}
              </small>
              <small class="text-danger" v-if="i.call_status == 'rejected'">
                <i class="fa-solid fa-times"></i>
                {{ i.call_status }}
              </small>
            </td>
            <td>
              <button
                v-if="i.call_status == 'finished' && i.meeting_minute == 1"
                class="btn-mentoring py-1 px-3 btn-sm btn-primary text-white"
                @click="detail(i.id)"
              >
                View Result
              </button>
              <button
                v-if="i.call_status == 'finished' && i.meeting_minute == 0"
                class="btn-mentoring py-1 px-3 btn-sm bg-success text-white"
                @click="detail(i.id)"
              >
                Add Result
              </button>
              <div v-if="i.call_status != 'finished'">-</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination  -->
    <nav class="my-0 mt-2" v-if="meeting?.data?.length != 0">
      <ul class="pagination justify-content-center pb-0 mb-0">
        <li class="page-item" v-if="meeting.current_page != 1">
          <a class="page-link" @click="getPage(meeting.links[0].url)">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
        </li>
        <div v-for="(i, index) in meeting.last_page" :key="index">
          <li
            class="page-item"
            v-if="meeting.current_page - 2 < i && meeting.current_page + 2 > i"
          >
            <a
              class="page-link"
              :class="meeting.current_page == i ? 'bg-primary text-white' : ''"
              href="#"
              @click="getPage(meeting.path + '?page=' + i)"
              >{{ i }}</a
            >
          </li>
        </div>
        <li class="page-item" v-if="meeting.current_page != meeting.last_page">
          <a class="page-link" @click="getPage(meeting.next_page_url)">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Last Meeting  -->
  <div class="vue-modal-overlay" v-if="modal != ''" @click="modal = ''"></div>
  <div
    class="vue-side mentoring-scroll shadow"
    :class="modal == 'add' ? 'active' : ''"
  >
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-0">Last Meeting Minutes</h6>
      <div class="text-end">
        <button
          class="btn btn-sm btn-mentoring btn-outline-info py-1"
          @click="view_status = 'add'"
          v-if="view_status == 'view'"
        >
          Edit
        </button>
      </div>
    </div>
    <hr class="my-2" />
    <!-- ADD  -->
    <form @submit.prevent="handleSubmit" v-if="view_status == 'add'">
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col mb-3">
          <input-group>
            <textarea
              class="form-control form-mentoring w-100"
              placeholder="fill in here ..."
              v-model="meeting_minutes.academic_performance"
              rows="5"
              required
              id="acad"
            ></textarea>
            <label class="bg-white" for="acad">Academic Performance</label>
          </input-group>
        </div>
        <div class="col mb-3">
          <input-group>
            <textarea
              class="form-control form-mentoring w-100"
              placeholder="fill in here ..."
              v-model="meeting_minutes.exploration"
              rows="5"
              required
              id="exploration"
            ></textarea>
            <label class="bg-white" for="exploration">Exploration</label>
          </input-group>
        </div>
        <div class="col mb-3">
          <input-group>
            <textarea
              class="form-control form-mentoring w-100"
              placeholder="fill in here ..."
              v-model="meeting_minutes.writing_skills"
              rows="5"
              required
              id="writing"
            ></textarea>
            <label class="bg-white" for="writing">Writing Skills</label>
          </input-group>
        </div>
        <div class="col mb-3">
          <input-group>
            <textarea
              class="form-control form-mentoring w-100"
              placeholder="fill in here ..."
              v-model="meeting_minutes.personal_brand"
              rows="5"
              required
              id="personal"
            ></textarea>
            <label class="bg-white" for="personal">Personal Brand</label>
          </input-group>
        </div>
      </div>
      <div class="mb-3">
        <input-group>
          <textarea
            class="form-control form-mentoring w-100"
            placeholder="fill in here ..."
            v-model="meeting_minutes.mt_todos_note"
            rows="5"
            required
            id="mentorTodos"
          ></textarea>
          <label class="bg-white" for="mentorTodos">Mentor Todos</label>
        </input-group>
      </div>
      <div class="mb-3">
        <input-group>
          <textarea
            class="form-control form-mentoring w-100"
            placeholder="fill in here ..."
            v-model="meeting_minutes.st_todos_note"
            rows="5"
            required
            id="menteeTodos"
          ></textarea>
          <label class="bg-white" for="menteeTodos">Mentee Todos</label>
        </input-group>
      </div>
      <hr />
      <div class="text-end">
        <button class="btn-mentoring btn-sm bg-primary py-1 px-3" type="submit">
          <i class="fa-solid fa-save me-2"></i>
          Save Changes
        </button>
      </div>
    </form>

    <!-- VIEW  -->
    <div class="row row-cols-1" v-if="view_status == 'view'">
      <div class="col">
        <div class="mb-2">
          <label class="mb-3 text-primary">Academic Performance :</label>
          <div class="py-1 px-3" style="border-left: 2px solid #dedede">
            <p class="py-0" v-html="meeting_minutes.academic_performance"></p>
          </div>
        </div>
        <div class="mb-2">
          <label class="mb-3 text-primary">Exploration :</label>
          <div class="py-1 px-3" style="border-left: 2px solid #dedede">
            <p class="py-0" v-html="meeting_minutes.exploration"></p>
          </div>
        </div>
        <div class="mb-2">
          <label class="mb-3 text-primary">Writing Skills :</label>
          <div class="py-1 px-3" style="border-left: 2px solid #dedede">
            <p class="py-0" v-html="meeting_minutes.writing_skills"></p>
          </div>
        </div>
        <div class="mb-2">
          <label class="mb-3 text-primary">Personal Brand :</label>
          <div class="py-1 px-3" style="border-left: 2px solid #dedede">
            <p class="py-0" v-html="meeting_minutes.personal_brand"></p>
          </div>
        </div>
        <div class="mb-2">
          <label class="mb-3 text-primary">My Todos :</label>
          <div class="py-1 px-3" style="border-left: 2px solid #dedede">
            <p class="py-0" v-html="meeting_minutes.mt_todos_note"></p>
          </div>
        </div>
        <div class="mb-2">
          <label class="mb-3 text-primary">Mentee Todos :</label>
          <div class="py-1 px-3" style="border-left: 2px solid #dedede">
            <p class="py-0" v-html="meeting_minutes.st_todos_note"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lastMeetingComponent",
  data() {
    return {
      modal: "",
      view_status: "",
      meeting: [],
      meeting_minutes: {
        st_act_id: "",
        academic_performance: "",
        exploration: "",
        writing_skills: "",
        personal_brand: "",
        mt_todos_note: "",
        st_todos_note: "",
      },
    };
  },
  methods: {
    async getData() {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(
          "../v2/list/activities/1-on-1-call/history?meeting-minutes=yes"
        );
        this.meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
    },

    async getPage(link) {
      this.$alert.loading();
      try {
        const response = await this.$axios.get(link);
        this.meeting = response.data.data;
        // console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
      this.$alert.close();
    },

    async detail(i) {
      this.modal = "add";
      const response = await this.$axios.get("select/meeting-minutes/" + i);
      if (response.data.success) {
        this.meeting_minutes = response.data.data;
        this.view_status = "view";
      } else {
        this.view_status = "add";
        this.meeting_minutes = {
          st_act_id: i,
          academic_performance: "",
          exploration: "",
          writing_skills: "",
          personal_brand: "",
          mt_todos_note: "",
          st_todos_note: "",
        };
      }
    },

    async handleSubmit() {
      this.$alert.loading();
      try {
        const response = await this.$axios.post(
          "create/meeting-minutes",
          this.meeting_minutes
        );

        this.modal = "";

        this.getData();
        this.$alert.toast("success", response.data.message);
        // console.log(response);
      } catch (e) {
        // console.log(e.response);
        this.$alert.toast("error", "Please try again.");
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.vue-side {
  position: fixed;
  top: 0;
  right: -50%;
  height: 100vh;
  padding: 20px;
  width: 40%;
  background: white;
  overflow: auto;
  z-index: 99999;
  transition: all 0.3s;
}

.vue-side.active {
  right: 0 !important;
}

@media only screen and (max-width: 600px) {
  .vue-side {
    position: fixed;
    top: 0;
    right: -90%;
    width: 90%;
  }
}
</style>