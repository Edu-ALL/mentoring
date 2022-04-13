<template>
  <div id="participants" class="mt-5 mb-4 shadow-sm p-3">
    <div class="row mb-3 align-items-center">
      <div class="col-md-6">
        <h6>Participants</h6>
      </div>
      <!-- <div class="col-md-6 text-end">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div> -->
      <!-- <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">
          Sync Students Data
        </button>
        <button class="btn-mentoring btn-type-2">Add a New Student</button>
      </div> -->
    </div>
    <div class="table-responsive">
      <table class="table align-middle table-hover">
        <thead>
          <tr class="text-center">
            <th>No</th>
            <th>Students Name</th>
            <th>Email</th>
            <th>School Name</th>
            <th>Grade</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(i, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ i.students.first_name + " " + i.students.last_name }}</td>
            <td>{{ i.students.email }}</td>
            <td>{{ i.students.school_name }}</td>
            <td>{{ i.students.grade }}</td>
            <td>{{ $customDate.date(i.students.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <nav class="mt-2">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "participants",
  props: {
    list: Object,
  },
};
</script>

<style scoped>
</style>