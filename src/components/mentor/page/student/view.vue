<template>
  <div id="student">
    <!-- Detail  -->
    <div class="card-white">
      <div class="row">
        <div class="col-md-3 text-center">
          <img
            v-if="students_detail.image != null"
            v-lazy="this.$base_url + students_detail.image"
            alt="Profile"
            class="st-pic"
          />

          <img
            v-if="students_detail.image == null"
            v-lazy="'https://picsum.photos/200/300'"
            alt="Profile"
            class="st-pic"
          />
        </div>
        <div class="col-md-9 mt-md-0 mt-3">
          <div class="d-flex justify-content-between">
            <h5>
              {{ students_detail.first_name + " " + students_detail.last_name }}
            </h5>
            <div class="status" style="text-transform: capitalize">
              <i
                class="bi bi-lightbulb-fill me-1"
                :class="
                  students_detail.progress_status == 'ahead'
                    ? 'text-success'
                    : students_detail.progress_status == 'ontrack'
                    ? 'text-info'
                    : 'text-danger'
                "
              ></i>
              {{ students_detail.progress_status }}
            </div>
          </div>
          <hr class="my-0 mb-2" />
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label>Email</label> <br />
                {{ students_detail.email }}
              </div>
              <div class="mb-2">
                <label>School Name</label> <br />
                {{ students_detail.school_name }}
              </div>
              <div class="mb-2">
                <label>Grade</label> <br />
                {{
                  students_detail.grade == null || students_detail.grade == 0
                    ? "N/A"
                    : students_detail.grade
                }}
              </div>
              <!-- <div class="mb-2">
                <label>Application Year</label> <br />
                {{ student.application_year }}
              </div> -->
            </div>
            <div class="col-md-6">
              <!-- <div class="mb-2">
                <label>Mentee Relationship</label> <br />
                {{ student.mentee_relationship }}
              </div>
              <div class="mb-2">
                <label>Parent Relationship</label> <br />
                {{ student.parent_relationship }}
              </div> -->
              <div class="mb-2">
                <label>Social Media</label> <br />
                <div class="d-flex">
                  <div v-for="i in students_detail.social_media" :key="i">
                    <a
                      :href="i.hyperlink"
                      target="_blank"
                      class="border-1 shadow-sm py-1 px-3 me-1"
                      style="text-decoration: none"
                      v-if="i.hyperlink != null"
                    >
                      <i :class="'bi bi-' + i.social_media_name + ' me-1'"></i>
                      {{ i.username }} <br />
                    </a>
                  </div>
                </div>
              </div>
              <div class="mb-2">
                <label>Address</label> <br />
                {{ students_detail.address }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activity  -->

    <div class="card-white mb-0 pb-0 sticky-top tab-top">
      <div
        class="overflow-auto d-flex w-100 mentoring-scroll py-2 bg-white"
        style="white-space: nowrap"
      >
        <button
          class="btn btn-sm me-1 py-1 px-2 ms-1"
          :class="menus.key == i.slug ? 'btn-type-3' : 'btn-type-2'"
          @click="goTab(i.slug)"
          v-for="(i, index) in tab"
          :key="index"
        >
          {{ i.name }}
        </button>
      </div>
    </div>
    <div class="card-white mt-0 pt-0 position-relative overflow-hidden">
      <!-- Meetings -->
      <transition name="fade">
        <v-meeting
          v-if="menus.key == '' || menus.key == 'meeting'"
          :menus="menus"
        />
      </transition>

      <!-- Todos  -->
      <transition name="fade">
        <v-todos v-if="menus.key == 'task'" :menus="menus" />
      </transition>

      <!-- Group  -->
      <transition name="fade">
        <v-group v-if="menus.key == 'group'" :menus="menus" />
      </transition>

      <!-- Webinar -->
      <transition name="fade">
        <v-webinar v-if="menus.key == 'webinar'" :menus="menus" />
      </transition>

      <!-- Unversity Shorlisted -->
      <transition name="fade">
        <v-uni-shortlisted
          v-if="menus.key == 'uni_shortlisted'"
          :menus="menus"
        />
      </transition>

      <!-- University Requirements -->
      <transition name="fade">
        <v-uni-requirement
          v-if="menus.key == 'uni_requirement'"
          :menus="menus"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Meeting from "@/components/mentor/page/student/activity/meeting";
import Todos from "@/components/mentor/page/student/activity/todos";
import Group from "@/components/mentor/page/student/activity/group";
import Webinar from "@/components/mentor/page/student/activity/webinar";
import UniShortlisted from "@/components/mentor/page/student/activity/uni_shortlisted";
import UniRequirement from "@/components/mentor/page/student/activity/uni_requirement";

export default {
  name: "studentDetail",
  props: {
    menus: Object,
  },
  components: {
    "v-meeting": Meeting,
    "v-todos": Todos,
    "v-group": Group,
    "v-webinar": Webinar,
    "v-uni-shortlisted": UniShortlisted,
    "v-uni-requirement": UniRequirement,
  },
  data() {
    return {
      activity: "meeting",
      tab: [
        { slug: "meeting", name: "Meeting Logs" },
        { slug: "task", name: "Task" },
        { slug: "group", name: "Group Project" },
        { slug: "webinar", name: "Webinar" },
        { slug: "uni_shortlisted", name: "University List" },
        { slug: "uni_requirement", name: "University Requirements" },
      ],
      students_detail: [],
    };
  },
  methods: {
    goTab(i) {
      this.$router.push({
        path: "/mentor/student/" + this.menus.submenu + "/" + i,
      });
    },

    async getData() {
      const id = this.menus.submenu;
      try {
        const response = await this.$axios.get("student/detail/" + id);
        this.students_detail = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.tab-top {
  top: 13vh;
  z-index: 90;
}

label {
  color: #6d6d6d;
  font-size: 0.8em;
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

@media only screen and (max-width: 800px) {
  .tab-top {
    top: 13vh;
    z-index: 90;
  }
}
</style>