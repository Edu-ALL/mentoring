<template>
  <div id="meetings">
    <div class="border p-3 rounded mt-3">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Call with</th>
              <th>Subject</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="i in 5" :key="i">
              <td>{{ i }}</td>
              <td>Devi Kasih</td>
              <td>Life Skill</td>
              <td>
                <small>
                  20 Feburary 2022 <br />
                  14.00 WIB
                </small>
              </td>
              <td>Waiting</td>
              <td>-</td>
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
  name: "studentMeeting",
};
</script>
