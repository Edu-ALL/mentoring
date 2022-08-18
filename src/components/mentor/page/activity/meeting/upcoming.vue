<template>
  <div id="upcoming">
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
            <th>Password</th>
            <th width="17%">Action</th>
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
            <td nowrap style="text-transform: capitalize">{{ i.module }}</td>
            <td nowrap>{{ $customDate.date(i.call_date) }}</td>
            <td nowrap>{{ $customDate.time(i.call_date) }}</td>
            <td nowrap>
              <div class="" v-if="i.location_link == ' '">-</div>
              <div class="" v-if="i.location_link != ''">
                <div class="" v-if="view_pw[index]">
                  {{ i.location_pw }}
                  <i
                    class="fa-solid fa-eye ms-2 pointer"
                    @click="view_pw[index] = !view_pw[index]"
                  ></i>
                </div>

                <div class="" v-if="!view_pw[index]">
                  ***
                  <i
                    class="fa-solid fa-eye-slash ms-2 pointer"
                    @click="view_pw[index] = !view_pw[index]"
                  ></i>
                </div>
              </div>
            </td>
            <td nowrap>
              <button
                class="btn-mentoring btn-sm btn-type-1 mx-1 py-1"
                @click="goto(i.location_link)"
              >
                Join
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "upcoming",
  props: {
    meeting: Object,
  },
  data() {
    return {
      view_pw: [],
    };
  },
  methods: {
    goto(link) {
      window.open(link, "_balnk");
    },
  },
  created() {},
};
</script>

<style>
</style>