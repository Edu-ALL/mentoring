<template>
  <div id="history">
    <div class="row p-4" v-if="meeting?.data?.length == 0">
      <div class="col text-center text-muted">
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
            <td nowrap style="text-transform: capitalize">
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
  props: {
    meeting: Object,
  },
  data() {
    return {
      modal: "",
      view_status: "",
    };
  },
  methods: {},
  created() {},
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