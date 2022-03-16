<template>
  <div id="pending">
    <div class="row mb-4">
      <div class="col-md-6 text-start">
        <input type="text" class="form-mentoring" placeholder="Search" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-hover pointer">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td>Full Name</td>
              <td>Events</td>
              <td>24 March 2022</td>
              <td>Pending</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-info me-2"
                  @click="report = 'invoice'"
                >
                  Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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

    <transition name="fade">
      <div class="" v-if="report == 'invoice'">
        <div class="vue-modal vue-modal-lg">
          <v-invoice />
        </div>
        <div class="vue-modal-overlay" @click="report = ''"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Invoice from "@/components/admin/transaction/report/invoice";
export default {
  name: "pending",
  components: {
    "v-invoice": Invoice,
  },
  data() {
    return {
      report: "",
    };
  },
};
</script>

<style scoped>
</style>