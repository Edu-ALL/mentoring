<template>
  <div id="successMail">
    <div class="row my-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
      <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
    </div>
    <div class="card-white">
      <div class="table-responsive">
        <table class="table align-middle table-hover">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Receiver</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="i in 5" :key="i">
              <td>{{ i }}</td>
              <td>Eric</td>
              <td>Hafidz</td>
              <td>Resume</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td>20 Feburary 2022</td>
              <td class="pointer">Success</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
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
  name: "successMail",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>