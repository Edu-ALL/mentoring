<template>
  <div id="history">
    <div class="container">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="text-center">
              <th width="3%">No</th>
              <th>Call With</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th width="17%">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 7" :key="i" class="text-center align-middle">
              <td>{{ i }}</td>
              <td nowrap>Devi Kasih - Mentor</td>
              <td nowrap>Life Skill</td>
              <td nowrap>24 July 2022</td>
              <td nowrap>10:00 AM</td>
              <td nowrap>Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="i in 3" :key="i">
            <li class="page-item">
              <a class="page-link" href="#">{{ i }}</a>
            </li>
          </div>
          <li class="page-item">
            <a class="page-link">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>