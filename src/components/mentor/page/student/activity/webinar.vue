<template>
  <div id="webinars">
    <div class="border p-3 rounded mt-3">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Topic</th>
              <th>Category</th>
              <th>Date & Time</th>
              <th>Duration</th>
              <th>Long Time Watching</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="i in 5" :key="i">
              <td>{{ i }}</td>
              <td>Lorem Ipsum</td>
              <td>Category</td>
              <td>20 Feburary 2022</td>
              <td>01:00:00</td>
              <td>00:30:00</td>
              <td>
                <button class="btn-mentoring btn-sm bg-secondary py-1 px-3">
                  In Progress
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "webinarHistory",
};
</script>
