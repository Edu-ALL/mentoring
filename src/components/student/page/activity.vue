<template>
  <div id="activity">
    <div class="container mt-4">
      <div class="row g-1">
        <div class="col-md-3">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5>My Activities</h5>
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'meeting' ? 'active' : ''"
                  @click="activityCheck('meeting')"
                >
                  Meetings
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'group' ? 'active' : ''"
                  @click="activityCheck('group')"
                  >Groups</a
                >
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'webinar' ? 'active' : ''"
                  @click="activityCheck('webinar')"
                >
                  Webinars
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'event' ? 'active' : ''"
                  @click="activityCheck('event')"
                >
                  Events
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'internship' ? 'active' : ''"
                  @click="activityCheck('internship')"
                >
                  Internship Program
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="activity == 'career-module' ? 'active' : ''"
                  @click="activityCheck('career-module')"
                >
                  Career Modules
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <!-- 1on1 Call  -->
          <transition name="fade">
            <div class="card-body" v-if="activity == '1on1'">
              <b class="text-primary">1 on 1 Call History</b>
              <hr class="my-1" />
              <div class="table-responsive">
                <table class="table align-middle">
                  <thead>
                    <tr class="text-center">
                      <th>No</th>
                      <th>Call with</th>
                      <th>Category</th>
                      <th>Date & Time</th>
                      <th>Status</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td>1</td>
                      <td>Devi Kasih</td>
                      <td>Life Skill - Mentor</td>
                      <td>
                        <small>
                          20 Feburary 2022 <br />
                          14.00 WIB
                        </small>
                      </td>
                      <td>Waiting</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </transition>

          <!-- Meetings  -->
          <transition name="fade">
            <v-meeting v-if="activity == 'meeting'"></v-meeting>
          </transition>

          <!-- Groups  -->
          <transition name="fade">
            <v-group v-if="activity == 'group'"></v-group>
          </transition>

          <!-- Webinar  -->
          <transition name="fade">
            <v-webinar v-if="activity == 'webinar'"></v-webinar>
          </transition>

          <!-- Events  -->
          <transition name="fade">
            <v-event v-if="activity == 'event'"></v-event>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Meeting from "@/components/student/page/meeting";
import Group from "@/components/student/page/groups";
import Webinar from "@/components/student/page/webinar";
import Event from "@/components/student/page/event";

export default {
  name: "activity",
  components: {
    "v-meeting": Meeting,
    "v-group": Group,
    "v-webinar": Webinar,
    "v-event": Event,
  },
  data() {
    return {
      activity: "meeting",
    };
  },
  methods: {
    activityCheck(data) {
      this.activity = data;
    },
  },
  created() {},
};
</script>