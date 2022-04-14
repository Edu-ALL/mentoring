<template>
  <div id="transaction">
    <h6 class="act-title">Transaction</h6>
    <!-- {{ list }} -->
    <table class="table table-borderless">
      <tbody>
        <tr v-for="(i, index) in list" :key="index">
          <td>
            {{
              i.student_activities.students.first_name +
              " " +
              i.student_activities.students.last_name
            }}
          </td>
          <td class="text-center">
            <div v-if="!i.student_activities.programme_details">
              {{ i.student_activities.prog_id == 1 ? "1on1 Call" : "" }}
            </div>
            <div v-if="i.student_activities.programme_details">
              {{ i.student_activities.programme_details.dtl_name }}
            </div>
          </td>
          <td class="text-center">{{ $customDate.date(i.created_at) }}</td>
          <td class="text-end" style="text-transform: capitalize">
            {{ i.status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "transactionHome",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/transaction/all/recent", {
          headers: {
            Authorization: "Bearer " + this.$adminToken,
          },
        })
        .then((response) => {
          this.$alert.close();
          this.list = response.data.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.$alert.close();
          console.log(error.response.data);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
table {
  font-size: 0.8em;
}
</style>