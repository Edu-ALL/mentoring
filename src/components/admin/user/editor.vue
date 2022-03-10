<template>
  <div id="editor">
    <div class="row mb-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
      <div class="col-md-6 text-md-end text-center">
        <button class="btn-mentoring btn-type-1 me-2">Sync Editor Data</button>
      </div>
    </div>
    <div class="card-white">
      <table class="table table-borderless table-hover">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="i in 10"
            :key="i"
            @click="this.$router.push({ path: '/admin/user/editor/' + i })"
          >
            <td>Full Name</td>
            <td>Email</td>
            <td>Education</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <nav class="mt-2">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
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
export default {};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>