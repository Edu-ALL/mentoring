<template>
  <div id="event">
    <h6 class="act-title">Join the Event</h6>
    <table class="table table-borderless">
      <tbody>
        <tr v-for="i in list" :key="i">
          <td>{{ i.students.first_name + " " + i.students.last_name }}</td>
          <td class="text-center">{{ i.programme_details.dtl_name }}</td>
          <td class="text-end">{{ $customDate.date(i.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "eventHome",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/activities/event/recent", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$alert.close();
          this.list = response.data.data;
          // console.log(response.data);
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