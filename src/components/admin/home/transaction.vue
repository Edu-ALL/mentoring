<template>
  <div id="transaction">
    <h6 class="act-title">Transaction</h6>
    {{ list }}
    <table class="table table-borderless">
      <tbody>
        <tr v-for="i in 3" :key="i">
          <td>Full Name</td>
          <td class="text-center">Subscription</td>
          <td class="text-center">23 January 2022</td>
          <td class="text-end">Successfull</td>
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
        .get(this.$url + "list/transaction/pending/recent", {
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