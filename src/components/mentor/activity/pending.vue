<template>
  <div id="pending">
    <div class="card-white m-0">
      <div class="row mb-4">
        <div class="col-md-6 text-start">
          <input type="text" class="form-mentoring" placeholder="Search" />
        </div>
      </div>
      <table class="table table-borderless table-hover pointer">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>School Name</th>
            <th>Grade</th>
            <th>Date & Time</th>
            <th width="15%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" class="align-middle">
            <td>Full Name</td>
            <td>Email</td>
            <td>School Name</td>
            <td>Grade</td>
            <td>Date & Time</td>
            <td>
              <button class="btn btn-sm btn-mentoring btn-primary py-1">
                Set Location
              </button>
              <button class="btn btn-sm btn-mentoring btn-success py-1">
                Location
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
  name: "pending",
  components: {},
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>