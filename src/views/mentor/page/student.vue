<template>
  <div id="student">
    <div class="" v-if="menus.submenu == ''">
      <div class="row mb-4">
        <div class="col-md-6 text-start">
          <input type="text" class="form-mentoring" placeholder="Search" />
        </div>
      </div>
      <div class="card-white m-0">
        <table class="table table-borderless table-hover pointer">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>School Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="i in 10"
              :key="i"
              @click="this.$router.push({ path: '/mentor/student/' + i })"
            >
              <td>Full Name</td>
              <td>Email</td>
              <td>School Name</td>
              <td>Grade</td>
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
    <v-detail v-if="menus.menu == 'student' && menus.submenu != ''" />
  </div>
</template>

<script>
import Detail from "@/components/mentor/student/detail";
export default {
  name: "student",
  props: {
    menus: Object,
  },
  components: {
    "v-detail": Detail,
  },
};
</script>

<style>
.card-white {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>