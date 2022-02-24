<template>
  <div id="transaction">
    <h6 class="act-title">Transaction</h6>
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
export default {};
</script>

<style scoped>
table {
  font-size: 0.8em;
}
</style>