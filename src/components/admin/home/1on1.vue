<template>
  <div id="1on1">
    <h6 class="act-title">1on1 Call</h6>
    <table class="table table-borderless">
      <tbody>
        <tr v-for="i in list" :key="i">
          <td>{{ i.students.first_name + " " + i.students.last_name }}</td>
          <td class="text-center">{{ $customDate.date(i.created_at) }}</td>
          <td class="text-end" style="text-transform: capitalize">
            {{ i.std_act_status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "1on1Home",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getData() {
      this.$alert.loading();
      this.$axios
        .get(this.$url + "list/activities/1-on-1-call/recent", {
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