<template>
  <div id="event">
    <h6 class="act-title">Join the Event</h6>
    <table class="table table-borderless">
      <tbody>
        <tr v-for="i in 3" :key="i">
          <td>Full Name</td>
          <td class="text-center">Event Name</td>
          <td class="text-end">23 January 2022</td>
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